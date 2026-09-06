"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * LeakCutaway — an architectural cross-section of a pool, drawn in the
 * site's line language. The five places pools actually lose water are
 * marked; selecting one highlights it in the drawing. Auto-advances
 * gently until the visitor interacts.
 */

const POINTS = [
  {
    id: "skimmer",
    n: "01",
    x: 178,
    y: 118,
    title: "Skimmer & joints",
    note: "Dye testing verifies suction at skimmer joints and seals.",
  },
  {
    id: "niche",
    n: "02",
    x: 524,
    y: 208,
    title: "Light niche",
    note: "Diver inspection of niches, fittings and conduit entries.",
  },
  {
    id: "shell",
    n: "03",
    x: 300,
    y: 262,
    title: "Shell microcracks",
    note: "Structural assessment of concrete, joints and linings.",
  },
  {
    id: "drain",
    n: "04",
    x: 392,
    y: 320,
    title: "Main drain",
    note: "Dye and pressure isolation of the drain line.",
  },
  {
    id: "pipes",
    n: "05",
    x: 618,
    y: 300,
    title: "Buried pipework",
    note: "Pressure testing and tracer gas locate breaks under paving.",
  },
] as const;

export default function LeakCutaway() {
  const [active, setActive] = useState(0);
  const [interacted, setInteracted] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (interacted || reduced) return;
    const t = setInterval(() => setActive((a) => (a + 1) % POINTS.length), 3200);
    return () => clearInterval(t);
  }, [interacted, reduced]);

  const pick = (i: number) => {
    setInteracted(true);
    setActive(i);
  };

  return (
    <section className="bg-abyss text-ivory" aria-label="Where pools lose water">
      <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionLabel tone="light">The diagnosis, drawn</SectionLabel>
        <h2 className="text-display mt-6 max-w-3xl text-[clamp(1.9rem,3.8vw,3.4rem)]">
          Five places a pool
          <span className="text-serif-accent text-aqua"> loses water.</span>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:items-center lg:gap-16">
          {/* Cross-section drawing */}
          <div className="overflow-x-auto">
            <svg
              viewBox="0 0 800 400"
              className="min-w-[560px]"
              role="img"
              aria-label="Cross-section of a swimming pool showing skimmer, light niche, shell, main drain and buried pipework"
            >
              {/* deck */}
              <path d="M20 100 H 140 M 560 100 H 640 M 760 100 H 780" stroke="#f6f3eb" strokeOpacity="0.5" strokeWidth="1.5" />
              {/* shell outline */}
              <path
                d="M140 100 V 300 Q 140 340 180 340 H 520 Q 560 340 560 300 V 100"
                fill="none"
                stroke="#f6f3eb"
                strokeOpacity="0.85"
                strokeWidth="1.5"
              />
              {/* water */}
              <path
                d="M144 132 Q 196 124 248 132 T 352 132 T 456 132 T 556 132 L 556 298 Q 556 336 518 336 H 182 Q 144 336 144 298 Z"
                fill="#2e93a6"
                fillOpacity="0.14"
              />
              <path
                d="M144 132 Q 196 124 248 132 T 352 132 T 456 132 T 556 132"
                fill="none"
                stroke="#6fd5e0"
                strokeWidth="1.5"
                strokeOpacity="0.9"
              />
              {/* skimmer box */}
              <path d="M140 108 h 38 v 22 h -38" fill="none" stroke="#f6f3eb" strokeOpacity="0.7" strokeWidth="1.5" />
              {/* light niche */}
              <circle cx="524" cy="208" r="14" fill="none" stroke="#f6f3eb" strokeOpacity="0.7" strokeWidth="1.5" />
              <circle cx="524" cy="208" r="5" fill="#f6f3eb" fillOpacity="0.4" />
              {/* main drain */}
              <path d="M376 340 h 32 M 380 334 h 24" stroke="#f6f3eb" strokeOpacity="0.7" strokeWidth="1.5" />
              {/* buried pipe run: drain -> plant room */}
              <path
                d="M392 348 V 368 H 640 M 178 130 H 120 V 368 H 392 M 640 368 V 300 H 700"
                fill="none"
                stroke="#f6f3eb"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeDasharray="5 6"
              />
              {/* plant room */}
              <rect x="640" y="240" width="120" height="100" fill="none" stroke="#f6f3eb" strokeOpacity="0.6" strokeWidth="1.5" />
              <circle cx="700" cy="300" r="17" fill="none" stroke="#6fd5e0" strokeOpacity="0.8" strokeWidth="1.5" />
              <path d="M693 300 h 14 M 700 293 v 14" stroke="#6fd5e0" strokeOpacity="0.8" strokeWidth="1.5" />
              <text x="700" y="228" textAnchor="middle" fill="#f6f3eb" fillOpacity="0.6" fontSize="12.5" letterSpacing="2">
                PLANT ROOM
              </text>
              {/* ground hatching */}
              {Array.from({ length: 14 }).map((_, i) => (
                <path
                  key={i}
                  d={`M${28 + i * 56} 384 l 14 -10`}
                  stroke="#f6f3eb"
                  strokeOpacity="0.18"
                  strokeWidth="1.5"
                />
              ))}

              {/* failure points */}
              {POINTS.map((p, i) => {
                const isActive = i === active;
                return (
                  <g
                    key={p.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`${p.title} — ${p.note}`}
                    className="cursor-pointer focus:outline-none [&:focus-visible_circle]:stroke-2"
                    onClick={() => pick(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        pick(i);
                      }
                    }}
                  >
                    {isActive && !reduced && (
                      <motion.circle
                        cx={p.x}
                        cy={p.y}
                        fill="none"
                        stroke="#6fd5e0"
                        strokeWidth="1.5"
                        initial={{ r: 8, opacity: 0.9 }}
                        animate={{ r: 26, opacity: 0 }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={isActive ? 11 : 9}
                      fill={isActive ? "#6fd5e0" : "#05161f"}
                      stroke="#6fd5e0"
                      strokeWidth="1.5"
                    />
                    <text
                      x={p.x}
                      y={p.y + 4}
                      textAnchor="middle"
                      fontSize="11.5"
                      fontWeight="600"
                      fill={isActive ? "#05161f" : "#6fd5e0"}
                    >
                      {i + 1}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <div role="tablist" aria-label="Leak locations">
            {POINTS.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => pick(i)}
                  className={`block w-full border-t py-4 text-left transition-colors duration-400 ${
                    isActive ? "border-aqua/70" : "border-ivory/15 hover:border-ivory/40"
                  }`}
                >
                  <span className="flex items-baseline gap-4">
                    <span className={`tabular text-[11px] ${isActive ? "text-aqua" : "text-ivory/60"}`}>
                      {p.n}
                    </span>
                    <span className={`text-display text-lg ${isActive ? "text-ivory" : "text-ivory/55"}`}>
                      {p.title}
                    </span>
                  </span>
                  <motion.span
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, height: isActive ? "auto" : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="block overflow-hidden pl-8 text-[13.5px] leading-relaxed text-ivory/60"
                  >
                    <span className="block pt-1.5">{p.note}</span>
                  </motion.span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
