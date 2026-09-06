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
          <p
            className="text-label hidden items-center gap-2.5 text-ink-soft sm:flex"
            aria-label="Five star reviews published on Google"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.57-5.17 3.57-8.81Z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.96-1.07 7.93-2.91l-3.87-3c-1.07.72-2.44 1.14-4.06 1.14-3.13 0-5.78-2.11-6.72-4.96H1.29v3.1A12 12 0 0 0 12 24Z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27a7.21 7.21 0 0 1 0-4.54v-3.1H1.29a12 12 0 0 0 0 10.74l3.99-3.1Z"
              />
              <path
                fill="#EA4335"
                d="M12 4.77c1.76 0 3.35.6 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.29 6.63l3.99 3.1C6.22 6.88 8.87 4.77 12 4.77Z"
              />
            </svg>
            ★★★★★ · Five-star Google reviews
          </p>
        </div>

        <div className="mt-10 min-h-[240px] sm:min-h-[230px] lg:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -18 }}
              transition={{ duration: 0.6, ease: EASE_WATER }}
            >
              <p className="text-serif-accent max-w-5xl text-[clamp(1.5rem,3.2vw,2.8rem)] leading-[1.28] text-ink">
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
