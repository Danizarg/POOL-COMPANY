"use client";

import { useEffect, useRef } from "react";

/**
 * CausticField — a transparent WebGL layer that renders slow-moving
 * caustic light filaments (the pattern sunlight makes on a pool floor).
 * Purely decorative: hidden from AT, disabled under reduced motion,
 * paused off-screen. Meant to sit behind content in dark sections.
 */

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main(){ vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform float uIntensity;
uniform vec3 uTint;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), u.x),
             mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), u.x), u.y);
}

void main(){
  vec2 uv = vUv * vec2(uRes.x / uRes.y, 1.0);
  float t = uTime * 0.55;
  float c1 = noise(uv * 2.6 + vec2(t * 0.16, t * 0.21));
  float c2 = noise(uv * 2.6 - vec2(t * 0.19, t * 0.13) + 4.1);
  float fil = pow(1.0 - abs(c1 - c2), 9.0);
  float c3 = noise(uv * 5.2 + vec2(-t * 0.11, t * 0.17) + 9.3);
  float c4 = noise(uv * 5.2 + vec2(t * 0.14, -t * 0.10) + 1.7);
  float fil2 = pow(1.0 - abs(c3 - c4), 11.0);
  float a = (fil * 0.7 + fil2 * 0.45) * uIntensity;
  // fade toward edges so the field never reads as a rectangle
  float edge = smoothstep(0.0, 0.22, vUv.y) * smoothstep(1.0, 0.72, vUv.y);
  gl_FragColor = vec4(uTint, a * edge);
}
`;

export default function CausticField({
  className = "",
  intensity = 0.16,
  tint = [0.44, 0.84, 0.88] as [number, number, number],
}: {
  className?: string;
  intensity?: number;
  tint?: [number, number, number];
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "uTime");
    const uRes = gl.getUniformLocation(prog, "uRes");
    const uInt = gl.getUniformLocation(prog, "uIntensity");
    const uTint = gl.getUniformLocation(prog, "uTint");
    gl.uniform1f(uInt, intensity);
    gl.uniform3f(uTint, tint[0], tint[1], tint[2]);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    let raf = 0;
    let running = false;
    let visible = false;
    const t0 = performance.now();

    const resize = () => {
      // caustics are soft — render at half resolution for speed
      const w = Math.round(canvas.clientWidth * 0.5);
      const h = Math.round(canvas.clientHeight * 0.5);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
    };

    const frame = () => {
      if (!running) return;
      gl.uniform1f(uTime, (performance.now() - t0) / 1000);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (running || !visible || document.hidden) return;
      running = true;
      resize();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.02 }
    );
    io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    const ro = new ResizeObserver(() => running && resize());
    ro.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [intensity, tint]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
