"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Process — the company's real five-step way of working, laid out as a
 * hydraulic circuit: a flow line charges with water as you scroll past.
 */

const STEPS = [
  {
    n: "01",
    title: "Get in touch",
    body: "Tell us about your pool, how you use it and what you expect from it.",
  },
  {
    n: "02",
    title: "Technical visit",
    body: "We measure, analyse and identify areas for improvement on site.",
  },
  {
    n: "03",
    title: "Clear proposal",
    body: "A comparison of options with cost–benefit analysis and realistic timelines.",
  },
  {
    n: "04",
    title: "Implementation",
    body: "Our own team, clean execution, site clearance and final inspection.",
  },
  {
    n: "05",
    title: "Support",
    body: "We keep an eye on things to make sure everything stays just right.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const flow = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-limestone" aria-label="How we work">
      <div ref={ref} className="mx-auto max-w-[1680px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="05" className="text-ink-soft">
              How we work
            </SectionLabel>
            <h2 className="text-display mt-6 text-[clamp(2.2rem,5vw,4.6rem)] text-ink">
              A straightforward process,
              <br />
              <span className="text-serif-accent text-petrol">no surprises.</span>
            </h2>
          </div>
        </div>

        {/* Flow line */}
        <div className="relative mt-16 hidden lg:block" aria-hidden="true">
          <div className="absolute inset-x-0 top-[7px] h-px bg-ink/15" />
          <motion.div
            className="absolute left-0 top-[7px] h-px bg-mineral"
            style={{ width: reduced ? "100%" : flow }}
          />
        </div>

        <Stagger className="mt-2 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8" gap={0.1}>
          {STEPS.map((s) => (
            <StaggerItem key={s.n}>
              <div className="relative">
                <span className="relative z-10 mb-5 hidden h-[15px] w-[15px] rounded-full border border-mineral bg-limestone lg:block" />
                <span className="tabular text-[11px] text-mineral">{s.n}</span>
                <h3 className="text-display mt-2 text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
