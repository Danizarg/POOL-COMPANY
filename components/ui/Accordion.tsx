"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE_WATER } from "@/components/motion/Reveal";

/**
 * Accordion — clean, controlled expansion for FAQs. Buttons with
 * aria-expanded, animated height, generous touch targets.
 */
export default function Accordion({
  items,
  tone = "light",
}: {
  items: { q: string; a: string }[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  const reduced = useReducedMotion();

  const border = tone === "light" ? "border-ink/12" : "border-ivory/15";
  const question = tone === "light" ? "text-ink" : "text-ivory";
  const answer = tone === "light" ? "text-ink-soft" : "text-ivory/60";
  const marker = tone === "light" ? "text-mineral" : "text-aqua";

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`border-b ${border}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${baseId}-panel-${i}`}
              id={`${baseId}-button-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex min-h-[56px] w-full items-baseline gap-5 py-5 text-left"
            >
              <span className={`tabular text-[11px] ${marker}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`text-[16px] font-medium tracking-tight sm:text-[17px] ${question}`}>
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className={`ml-auto text-lg leading-none transition-transform duration-400 ${marker} ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${baseId}-panel-${i}`}
                  role="region"
                  aria-labelledby={`${baseId}-button-${i}`}
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE_WATER }}
                  className="overflow-hidden"
                >
                  <p className={`max-w-3xl pb-6 pl-9 text-[14.5px] leading-relaxed ${answer}`}>
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
