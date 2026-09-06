"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";
import { EASE_WATER } from "@/components/motion/Reveal";

/**
 * Reviews — genuine Google reviews treated as editorial content:
 * one large quote at a time, quiet rotation, precise attribution.
 * All quotes verbatim from the company's published Google reviews.
 */

const REVIEWS = [
  {
    quote:
      "Infinity are dutiful and competent — we feel safe by letting them be responsible for our most important values: the pools and associated machines.",
    name: "Lillann Ottosen",
  },
  {
    quote:
      "I have found their service to be of the highest standard and any problems are addressed quickly and professionally. I feel treated as a person rather than just another customer.",
    name: "Margaret Pearson",
  },
  {
    quote: "Great work renovating my swimming pool. Done on time and professional job.",
    name: "Jacob Saabye",
  },
];

const ROTATE_MS = 8000;

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduced = useReducedMotion();

  const next = useCallback(() => setIndex((i) => (i + 1) % REVIEWS.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length),
    []
  );

  useEffect(() => {
    if (reduced || paused) return;
    timer.current = setInterval(next, ROTATE_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [next, index, reduced, paused]);

  const review = REVIEWS[index];

  return (
    <section
      className="bg-ivory"
      aria-label="Client reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1680px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="flex items-baseline justify-between">
          <SectionLabel index="07" className="text-ink-soft">
            What clients say
          </SectionLabel>
          <p className="text-label hidden text-ink-soft sm:block" aria-label="Five star reviews published on Google">
            ★★★★★ · Published on Google
          </p>
        </div>

        <div className="mt-12 min-h-[300px] sm:min-h-[280px] lg:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -18 }}
              transition={{ duration: 0.6, ease: EASE_WATER }}
            >
              <p className="text-serif-accent max-w-5xl text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.25] text-ink">
                “{review.quote}”
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-mineral" aria-hidden="true" />
                <cite className="text-label not-italic text-ink">{review.name}</cite>
                <span className="text-label text-ink-soft">Google review</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center gap-6">
          <div className="flex gap-2" role="tablist" aria-label="Choose review">
            {REVIEWS.map((r, i) => (
              <button
                key={r.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Review by ${r.name}`}
                onClick={() => setIndex(i)}
                className="group flex h-11 w-8 items-center justify-center"
              >
                <span
                  className={`h-[3px] w-full rounded-full transition-all duration-500 ${
                    i === index ? "bg-mineral" : "bg-ink/15 group-hover:bg-ink/30"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-[2px] border border-ink/15 text-ink transition-colors duration-300 hover:border-ink"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-[2px] border border-ink/15 text-ink transition-colors duration-300 hover:border-ink"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
