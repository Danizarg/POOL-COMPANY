"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * SystemDiagram — the plant room as a living schematic. Water flows
 * through the circuit (animated dashes); each of the four systems that
 * keep a pool perfect can be selected, highlighting its place in the
 * loop. Same technical-drawing language as the leak-detection cutaway.
 */

export const SYSTEMS = [
  {
    id: "chemistry",
    n: "01",
    name: "Chemistry",
    x: 596,
    y: 296,
    detail:
      "pH, ORP and salinity measured and adjusted on every visit — automated dosing calibrated to your pool's real volume.",
  },
  {
    id: "filtration",
    n: "02",
    name: "Filtration",
    x: 488,
    y: 268,
    detail:
      "Sand and glass filters washed, pressures checked, cycles optimised so the water turns over exactly as often as it should.",
  },
  {
    id: "hydraulics",
    n: "03",
    name: "Hydraulics",
    x: 376,
    y: 330,
    detail:
      "Balanced flow, correct backwash and leak-free pipework — measured with pressure and flow testing, not guesswork.",
  },
  {
    id: "automation",
    n: "04",
    name: "Automation",
    x: 668,
    y: 148,
    detail:
      "Variable-speed pumps, smart probes and app control with alerts when a parameter drifts out of range.",
  },
] as const;

export default function SystemDiagram({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  const reduced = useReducedMotion();
  const [flowOffset, setFlowOffset] = useState(0);

  // animate water flow through the circuit
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      setFlowOffset((o) => (o - (t - last) * 0.018) % 28);
      last = t;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const activeId = SYSTEMS[active].id;
  const dim = (ids: string[]) => (ids.includes(activeId) ? 1 : 0.32);

  return (
    <svg
      viewBox="0 0 760 420"
      className="w-full min-w-[520px]"
      role="img"
      aria-label="Schematic of a pool circulation system: pool, pump, filter, dosing and automation"
    >
      {/* ── pool basin ── */}
      <g opacity={dim(["hydraulics", "chemistry", "filtration", "automation"])}>
        <path d="M20 96 H 60 M 300 96 H 340" stroke="#f6f3eb" strokeOpacity="0.5" strokeWidth="1.5" />
        <path
          d="M60 96 V 180 Q 60 208 88 208 H 272 Q 300 208 300 180 V 96"
          fill="none"
          stroke="#f6f3eb"
          strokeOpacity="0.85"
          strokeWidth="1.5"
        />
        <path
          d="M64 118 Q 92 111 120 118 T 176 118 T 232 118 T 296 118 L 296 178 Q 296 204 270 204 H 90 Q 64 204 64 178 Z"
          fill="#2e93a6"
          fillOpacity="0.14"
        />
        <path
          d="M64 118 Q 92 111 120 118 T 176 118 T 232 118 T 296 118"
          fill="none"
          stroke="#6fd5e0"
          strokeWidth="1.5"
          strokeOpacity="0.9"
        />
        <text x="180" y="86" textAnchor="middle" fill="#f6f3eb" fillOpacity="0.55" fontSize="12.5" letterSpacing="2">
          POOL
        </text>
      </g>

      {/* ── the circuit ── */}
      {/* suction: pool floor -> pump */}
      <g opacity={dim(["hydraulics"])}>
        <path
          d="M120 208 V 356 H 344"
          fill="none"
          stroke="#6fd5e0"
          strokeWidth="2"
          strokeDasharray="10 18"
          strokeDashoffset={flowOffset}
          strokeOpacity="0.85"
        />
        <path d="M120 208 V 356 H 344" fill="none" stroke="#f6f3eb" strokeOpacity="0.25" strokeWidth="1.5" />
      </g>
      {/* pump -> filter */}
      <g opacity={dim(["hydraulics", "filtration"])}>
        <path
          d="M408 330 H 456"
          fill="none"
          stroke="#6fd5e0"
          strokeWidth="2"
          strokeDasharray="10 18"
          strokeDashoffset={flowOffset}
          strokeOpacity="0.85"
        />
        <path d="M408 330 H 456" fill="none" stroke="#f6f3eb" strokeOpacity="0.25" strokeWidth="1.5" />
      </g>
      {/* filter -> dosing -> return riser -> pool */}
      <g opacity={dim(["chemistry", "hydraulics"])}>
        <path
          d="M520 330 H 596 V 318 M 596 274 V 156 H 280 V 130"
          fill="none"
          stroke="#6fd5e0"
          strokeWidth="2"
          strokeDasharray="10 18"
          strokeDashoffset={flowOffset}
          strokeOpacity="0.85"
        />
        <path
          d="M520 330 H 596 V 318 M 596 274 V 156 H 280 V 130"
          fill="none"
          stroke="#f6f3eb"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />
      </g>

      {/* ── pump ── */}
      <g opacity={dim(["hydraulics"])}>
        <circle cx="376" cy="330" r="32" fill="#05161f" stroke="#f6f3eb" strokeOpacity="0.8" strokeWidth="1.5" />
        <path d="M376 314 L 390 338 H 362 Z" fill="none" stroke="#6fd5e0" strokeWidth="1.5" />
        <text x="376" y="384" textAnchor="middle" fill="#f6f3eb" fillOpacity="0.55" fontSize="12.5" letterSpacing="2">
          PUMP
        </text>
      </g>

      {/* ── filter vessel ── */}
      <g opacity={dim(["filtration"])}>
        <path
          d="M462 300 Q 462 268 488 268 Q 514 268 514 300 V 344 Q 514 362 488 362 Q 462 362 462 344 Z"
          fill="#05161f"
          stroke="#f6f3eb"
          strokeOpacity="0.8"
          strokeWidth="1.5"
        />
        <path d="M468 316 H 508 M 468 330 H 508" stroke="#6fd5e0" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="3 4" />
        <text x="488" y="384" textAnchor="middle" fill="#f6f3eb" fillOpacity="0.55" fontSize="12.5" letterSpacing="2">
          FILTER
        </text>
      </g>

      {/* ── dosing / chlorination ── */}
      <g opacity={dim(["chemistry"])}>
        <rect x="576" y="278" width="40" height="40" rx="3" fill="#05161f" stroke="#f6f3eb" strokeOpacity="0.8" strokeWidth="1.5" />
        <path d="M596 286 v 10 M 590 292 h 12" stroke="#6fd5e0" strokeWidth="1.5" />
        <circle cx="596" cy="308" r="4" fill="none" stroke="#6fd5e0" strokeWidth="1.5" />
        <text x="596" y="384" textAnchor="middle" fill="#f6f3eb" fillOpacity="0.55" fontSize="12.5" letterSpacing="2">
          DOSING
        </text>
      </g>

      {/* ── automation ── */}
      <g opacity={dim(["automation"])}>
        <rect x="636" y="116" width="64" height="64" rx="3" fill="#05161f" stroke="#f6f3eb" strokeOpacity="0.8" strokeWidth="1.5" />
        <path d="M648 136 h 40 M 648 148 h 28 M 648 160 h 34" stroke="#6fd5e0" strokeOpacity="0.7" strokeWidth="1.5" />
        {/* control wiring */}
        <path
          d="M668 180 V 250 H 596 M 668 220 H 420 V 298"
          fill="none"
          stroke="#f6f3eb"
          strokeOpacity="0.3"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />
        <text x="668" y="104" textAnchor="middle" fill="#f6f3eb" fillOpacity="0.55" fontSize="12.5" letterSpacing="2">
          CONTROL
        </text>
      </g>

      {/* ── selectable nodes ── */}
      {SYSTEMS.map((s, i) => {
        const isActive = i === active;
        return (
          <g
            key={s.id}
            role="button"
            tabIndex={0}
            aria-label={`${s.name} — ${s.detail}`}
            className="cursor-pointer focus:outline-none"
            onClick={() => onSelect(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(i);
              }
            }}
          >
            {isActive && !reduced && (
              <motion.circle
                cx={s.x}
                cy={s.y}
                fill="none"
                stroke="#6fd5e0"
                strokeWidth="1.5"
                initial={{ r: 10, opacity: 0.9 }}
                animate={{ r: 30, opacity: 0 }}
                transition={{ duration: 1.7, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <circle
              cx={s.x}
              cy={s.y}
              r={isActive ? 12 : 10}
              fill={isActive ? "#6fd5e0" : "#05161f"}
              stroke="#6fd5e0"
              strokeWidth="1.5"
            />
            <text
              x={s.x}
              y={s.y + 4}
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
  );
}
