"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { services } from "@/lib/site";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";

/**
 * ServicesExplorer — "The Depth Index".
 *
 * Desktop: a sticky viewport. As the visitor scrolls, the page descends
 * from the sunlit surface (ivory) to the deep end (abyss): the active
 * service advances 01→06, the image field crossfades, and a pool-wall
 * depth gauge on the right tracks the descent.
 *
 * Mobile: a calm editorial column — image, index, title, link.
 */

const DEPTHS = ["0.4", "0.9", "1.4", "1.8", "2.2", "2.6"];

export default function ServicesExplorer() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(services.length - 1, Math.floor(v * services.length));
    setActive(idx);
  });

  const bg = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6, 1],
    ["#f6f3eb", "#dfe7e2", "#10475a", "#05161f"]
  );
  const fg = useTransform(
    scrollYProgress,
    [0, 0.3, 0.55],
    ["#0b1d24", "#0b1d24", "#f6f3eb"]
  );
  const fgSoft = useTransform(
    scrollYProgress,
    [0, 0.3, 0.55],
    ["#33505b", "#33505b", "rgba(246,243,235,0.65)"]
  );
  const gaugeFill = useTransform(scrollYProgress, [0, 1], ["6%", "100%"]);

  return (
    <section id="services" aria-label="Our services">
      {/* ── Desktop: sticky descent ─────────────────────────────────── */}
      <div ref={ref} className="relative hidden lg:block" style={{ height: `${services.length * 70}vh` }}>
        <motion.div
          style={{ backgroundColor: reduced ? "#0a2e3c" : bg, color: reduced ? "#f6f3eb" : fg }}
          className="sticky top-0 flex h-screen flex-col overflow-hidden"
        >
          <div className="mx-auto grid w-full max-w-[1680px] flex-1 grid-cols-[1fr_1.3fr_44px] items-center gap-14 px-12">
            {/* Index list */}
            <div>
              <motion.div style={{ color: reduced ? undefined : fgSoft }}>
                <SectionLabel index="02" className="mb-10">
                  What we do
                </SectionLabel>
              </motion.div>
              <ul className="space-y-1.5">
                {services.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-baseline gap-5 py-1.5"
                        aria-current={isActive ? "true" : undefined}
                      >
                        <span
                          className={`tabular text-[12px] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-40"}`}
                        >
                          {s.index}
                        </span>
                        <span
                          className={`text-display text-[clamp(1.7rem,2.6vw,2.7rem)] transition-[transform,opacity] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 ${
                            isActive ? "translate-x-2 opacity-100" : "opacity-40"
                          }`}
                        >
                          {s.navTitle}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-10 max-w-md">
                <motion.p
                  key={active}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="min-h-[72px] text-[15px] leading-relaxed"
                  style={{ color: reduced ? undefined : fgSoft }}
                >
                  {services[active].short}
                </motion.p>
                <Link
                  href={`/services/${services[active].slug}`}
                  className="text-label group mt-4 inline-flex items-center gap-2"
                >
                  Explore service
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Image field */}
            <div className="relative h-[72vh] max-h-[760px] overflow-hidden rounded-[2px]">
              {services.map((s, i) => (
                <motion.div
                  key={s.slug}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: i === active ? 1 : 0,
                    scale: reduced ? 1 : i === active ? 1 : 1.06,
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                    style={s.imagePos ? { objectPosition: s.imagePos } : undefined}
                    priority={i === 0}
                  />
                </motion.div>
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/35 via-transparent to-transparent" />
              <p className="text-label absolute bottom-4 left-4 bg-abyss/60 px-3 py-2 text-ivory backdrop-blur-sm">
                {services[active].title}
              </p>
            </div>

            {/* Depth gauge */}
            <div className="flex h-[72vh] max-h-[760px] flex-col items-center" aria-hidden="true">
              <span className="text-label rotate-180 text-[10px] opacity-60 [writing-mode:vertical-rl]">
                Depth
              </span>
              <div className="relative mt-4 w-px flex-1 bg-current opacity-20" />
              <div className="relative -mt-[72vh] h-[72vh] max-h-[760px] w-px overflow-hidden">
                <motion.div
                  className="w-px bg-current"
                  style={{ height: reduced ? "100%" : gaugeFill }}
                />
              </div>
              <span className="tabular mt-4 text-[12px] opacity-90">
                −{DEPTHS[active]} m
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Mobile: editorial column ────────────────────────────────── */}
      <div className="bg-ivory px-5 py-20 sm:px-8 lg:hidden">
        <SectionLabel index="02" className="text-ink-soft">
          What we do
        </SectionLabel>
        <h2 className="text-display mt-4 text-[clamp(2rem,8vw,3rem)] text-ink">
          Six ways we look
          <br />
          after your <span className="text-serif-accent text-petrol">water</span>.
        </h2>
        <div className="mt-12 space-y-14">
          {services.map((s) => (
            <Reveal key={s.slug}>
              <Link href={`/services/${s.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4 flex items-baseline gap-4">
                  <span className="tabular text-[12px] text-mineral">{s.index}</span>
                  <h3 className="text-display text-2xl text-ink">{s.navTitle}</h3>
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{s.short}</p>
                <span className="text-label mt-3 inline-flex items-center gap-2 text-ink">
                  Explore service <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
