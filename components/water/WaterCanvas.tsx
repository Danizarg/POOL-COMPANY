"use client";

import { useEffect, useRef, useState } from "react";

/**
 * WaterCanvas — renders a photograph as a live optical water surface.
 *
 * A single fullscreen-quad WebGL fragment shader displaces the image with
 * layered travelling waves + value noise (refraction), adds a faint caustic
 * shimmer, and propagates damped ripple rings from pointer movement.
 *
 * Falls back to a plain <img> when WebGL is unavailable or the visitor
 * prefers reduced motion. Pauses off-screen and on hidden tabs.
 */

const MAX_RIPPLES = 6;

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

varying vec2 vUv;
uniform sampler2D uTex;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uImageRes;
uniform float uStrength;
uniform float uShimmer;
uniform vec3 uRipples[${MAX_RIPPLES}];   // x, y, startTime (-1 = unused)

// ── value noise ────────────────────────────────────────────────────────
// sin-free hash: numerically stable on low-precision / software GL
float hash(vec2 p) {
  vec2 q = fract(p * vec2(123.34, 456.21));
  q += dot(q, q + 45.32);
  return fract(q.x * q.y);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

// cover-fit uv
vec2 coverUv(vec2 uv) {
  float canvasA = uRes.x / uRes.y;
  float imageA = uImageRes.x / uImageRes.y;
  vec2 s = vec2(1.0);
  if (canvasA > imageA) {
    s.y = imageA / canvasA;
  } else {
    s.x = canvasA / imageA;
  }
  return (uv - 0.5) * s + 0.5;
}

void main() {
  vec2 uv = vUv;
  float t = uTime;

  // ── ambient surface: two slow travelling wave sets + drifting noise ──
  float w1 = sin(uv.x * 9.0 + uv.y * 4.0 + t * 0.55);
  float w2 = sin(uv.x * 5.0 - uv.y * 7.0 - t * 0.42);
  float n1 = noise(uv * 5.0 + vec2(t * 0.06, -t * 0.045)) - 0.5;
  float n2 = noise(uv * 11.0 - vec2(t * 0.045, t * 0.075)) - 0.5;

  vec2 amb = vec2(
    w1 * 0.35 + n1 * 1.3 + n2 * 0.55,
    w2 * 0.35 + n1 * 0.55 + n2 * 1.3
  );

  // weight distortion toward the lower two-thirds (the water body)
  float weight = smoothstep(0.05, 0.55, uv.y * 0.4 + (1.0 - uv.y) * 0.9);
  vec2 offset = amb * uStrength * weight;

  // ── pointer ripples: damped expanding rings ─────────────────────────
  float aspect = uRes.x / uRes.y;
  for (int i = 0; i < ${MAX_RIPPLES}; i++) {
    vec3 r = uRipples[i];
    if (r.z < 0.0) continue;
    float age = t - r.z;
    if (age > 2.4) continue;
    vec2 d = uv - r.xy;
    d.x *= aspect;
    float dist = length(d);
    float radius = age * 0.32;
    float ring = dist - radius;
    float wave = sin(ring * 46.0) * exp(-abs(ring) * 22.0) * exp(-age * 2.1);
    offset += normalize(d + 0.0001) * wave * 0.011;
  }

  vec2 st = coverUv(uv + offset);
  vec3 col = texture2D(uTex, st).rgb;

  // ── caustic shimmer: thin bright filaments, very subtle ─────────────
  float c1 = noise(uv * 14.0 + vec2(t * 0.10, t * 0.14));
  float c2 = noise(uv * 14.0 - vec2(t * 0.12, t * 0.08) + 3.7);
  float caustic = pow(1.0 - abs(c1 - c2), 14.0);
  // damp shimmer on already-bright areas so highlights never blow out
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  col += caustic * uShimmer * weight * (1.0 - lum * 0.75);

  gl_FragColor = vec4(col, 1.0);
}
`;

type Props = {
  src: string;
  alt: string;
  /** displacement strength, ~0.002 subtle → 0.008 strong */
  strength?: number;
  /** caustic shimmer intensity, 0 → off */
  shimmer?: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export default function WaterCanvas({
  src,
  alt,
  strength = 0.0042,
  shimmer = 0.05,
  className = "",
  imgClassName = "",
  priority = false,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setFailed(true);
      return;
    }

    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const gl =
      canvas.getContext("webgl", { antialias: false, alpha: false }) ||
      (canvas.getContext("experimental-webgl", {
        antialias: false,
        alpha: false,
      }) as WebGLRenderingContext | null);

    if (!gl) {
      setFailed(true);
      return;
    }

    let raf = 0;
    let running = false;
    let visible = false;
    let disposed = false;

    const compile = (type: number, srcCode: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, srcCode);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(sh) || "shader compile failed");
      }
      return sh;
    };

    let prog: WebGLProgram;
    try {
      prog = gl.createProgram()!;
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        throw new Error("link failed");
      }
    } catch {
      setFailed(true);
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const locPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(locPos);
    gl.vertexAttribPointer(locPos, 2, gl.FLOAT, false, 0, 0);

    const uni = {
      tex: gl.getUniformLocation(prog, "uTex"),
      time: gl.getUniformLocation(prog, "uTime"),
      res: gl.getUniformLocation(prog, "uRes"),
      imageRes: gl.getUniformLocation(prog, "uImageRes"),
      strength: gl.getUniformLocation(prog, "uStrength"),
      shimmer: gl.getUniformLocation(prog, "uShimmer"),
      ripples: gl.getUniformLocation(prog, "uRipples"),
    };

    const ripples = new Float32Array(MAX_RIPPLES * 3).fill(-1);
    let rippleIdx = 0;
    let lastRipple = 0;

    const tex = gl.createTexture();
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (disposed) return;
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.uniform2f(uni.imageRes, img.naturalWidth, img.naturalHeight);
      setReady(true);
      start();
    };
    img.onerror = () => setFailed(true);
    img.src = src;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const w = Math.round(wrap.clientWidth * dpr);
      const h = Math.round(wrap.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uni.res, w, h);
    };

    const t0 = performance.now();
    const frame = () => {
      if (!running) return;
      const t = (performance.now() - t0) / 1000;
      gl.uniform1f(uni.time, t);
      gl.uniform1f(uni.strength, strength);
      gl.uniform1f(uni.shimmer, shimmer);
      gl.uniform3fv(uni.ripples, ripples);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || disposed || !visible || document.hidden) return;
      running = true;
      resize();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.02 }
    );
    io.observe(wrap);

    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    const ro = new ResizeObserver(() => {
      if (running) resize();
    });
    ro.observe(wrap);

    const onPointer = (e: PointerEvent) => {
      const now = performance.now();
      if (now - lastRipple < 90) return;
      lastRipple = now;
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      const t = (now - t0) / 1000;
      ripples[rippleIdx * 3] = x;
      ripples[rippleIdx * 3 + 1] = y;
      ripples[rippleIdx * 3 + 2] = t;
      rippleIdx = (rippleIdx + 1) % MAX_RIPPLES;
    };
    wrap.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      disposed = true;
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      wrap.removeEventListener("pointermove", onPointer);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [src, strength, shimmer]);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        fetchPriority={priority ? "high" : undefined}
        className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        aria-hidden={ready && !failed ? "true" : undefined}
      />
      {!failed && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
