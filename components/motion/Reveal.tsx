"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const EASE_WATER = [0.22, 1, 0.36, 1] as const;

/** Fade-and-rise reveal with the site's water easing. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.85,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration, delay, ease: EASE_WATER }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Line-mask reveal for display headlines: each line rises out of a
 * clipping box, like type surfacing through a waterline.
 * Pass an array of lines; each renders as its own masked block.
 */
export function SurfaceLines({
  lines,
  as = "h2",
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.09,
  once = true,
}: {
  lines: ReactNode[];
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  // The clipped line spans never intersect the viewport themselves, so the
  // visible parent observes and propagates variants down to them.
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={reduced ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once, margin: "0px 0px -10% 0px" }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName}`}
            variants={{
              hidden: { y: "112%" },
              show: {
                y: 0,
                transition: {
                  duration: 0.9,
                  delay: delay + i * stagger,
                  ease: EASE_WATER,
                },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/** Container that staggers its Item children. */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.08,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : gap, delayChildren: delay } },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial={reduced ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const item: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_WATER } },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

export { EASE_WATER };
