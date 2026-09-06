"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import CausticField from "@/components/water/CausticField";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal, SurfaceLines } from "@/components/motion/Reveal";
import SystemDiagram, { SYSTEMS } from "@/components/home/SystemDiagram";

/**
 * Engineering — the deep end. An abyssal interlude built around a living
 * schematic of the circulation loop: the four systems that quietly make
 * water perfect, selectable and drawn in the site's technical language.
 */
export default function Engineering() {
  const [active, setActive] = useState(0);
  const [interacted, setInteracted] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (interacted || reduced) return;
    const t = setInterval(() => setActive((a) => (a + 1) % SYSTEMS.length), 3600);
    return () => clearInterval(t);
  }, [interacted, reduced]);

  const pick = (i: number) => {
    setInteracted(true);
    setActive(i);
  };

  return (
    <section className="relative overflow-hidden bg-abyss text-ivory" aria-label="How we engineer perfect water">
      <CausticField intensity={0.15} />
      <div className="relative mx-auto max-w-[1680px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <SectionLabel index="03" tone="light">
          The invisible work
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.05fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <SurfaceLines
              as="h2"
              className="text-display text-[clamp(2.4rem,5.4vw,5.2rem)]"
              lines={[
                <span key="1">Perfect water</span>,
                <span key="2">
                  is <span className="text-serif-accent text-aqua">engineered.</span>
                </span>,
              ]}
            />
            <Reveal delay={0.2} className="mt-6 max-w-lg">
              <p className="text-[15px] leading-relaxed text-ivory/65 sm:text-base">
                A still, transparent pool is the visible result of four
                systems working quietly in the plant room. We redesign the
                operating curve of your installation — better water quality,
                longer equipment life and a lower electricity bill.
              </p>
            </Reveal>

            {/* System selector */}
            <div className="mt-10" role="tablist" aria-label="Plant room systems">
              {SYSTEMS.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
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
                        {s.n}
                      </span>
                      <span className={`text-display text-xl ${isActive ? "text-ivory" : "text-ivory/55"}`}>
                        {s.name}
                      </span>
                      <span className="tabular ml-auto text-[11px] text-ivory/30">
                        0{i + 1} / 04
                      </span>
                    </span>
                    <motion.span
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, height: isActive ? "auto" : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="block overflow-hidden pl-8 text-[13.5px] leading-relaxed text-ivory/60"
                    >
                      <span className="block pt-1.5">{s.detail}</span>
                    </motion.span>
                  </button>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.15} className="overflow-x-auto">
            <SystemDiagram active={active} onSelect={pick} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
