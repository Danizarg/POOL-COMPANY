"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * WaterReveal — scroll-linked liquid reveal. The child is uncovered from
 * the bottom upward as the visitor scrolls, the covering field receding
 * with a drifting wave crest along its edge — like water rising to fill
 * a freshly renovated pool.
 */
export default function WaterReveal({
  children,
  cover = "#f6f3eb",
  className = "",
}: {
  children: ReactNode;
  cover?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 25%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}
      {!reduced && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 top-0"
          style={{ height, backgroundColor: cover }}
        >
          <svg
            className="absolute -bottom-[11px] left-0 h-3 w-[200%] animate-[waterline-drift_9s_linear_infinite]"
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            fill={cover}
          >
            <path d="M0 0 H 200 V 5 Q 187.5 11 175 5.5 T 150 5.5 T 125 5.5 T 100 5.5 T 75 5.5 T 50 5.5 T 25 5.5 T 0 5.5 Z" />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
