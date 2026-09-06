"use client";

import { motion, useReducedMotion } from "motion/react";
import Button from "@/components/ui/Button";
import WaterCanvas from "@/components/water/WaterCanvas";
import { SurfaceLines, EASE_WATER } from "@/components/motion/Reveal";
import { contact } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Hero — "The Waterline".
 *
 * The lower part of the viewport is a live water surface (WebGL refraction
 * + pointer ripples over genuine pool photography). Its top edge is an
 * undulating, slowly drifting liquid mask — the waterline that the whole
 * site's visual language hangs from. Above it: limestone, air, type.
 */

// 120x24 repeating wave tile, filled below the crest.
const WAVE_TILE = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 24"><path d="M0 14 Q 30 6 60 14 T 120 14 L 120 24 L 0 24 Z" fill="black"/></svg>`
);

const maskStyle: React.CSSProperties = {
  WebkitMaskImage: `url("data:image/svg+xml,${WAVE_TILE}"), linear-gradient(black, black)`,
  WebkitMaskSize: "160px 24px, 100% calc(100% - 23px)",
  WebkitMaskPosition: "0 0, 0 23px",
  WebkitMaskRepeat: "repeat-x, no-repeat",
  maskImage: `url("data:image/svg+xml,${WAVE_TILE}"), linear-gradient(black, black)`,
  maskSize: "160px 24px, 100% calc(100% - 23px)",
  maskPosition: "0 0, 0 23px",
  maskRepeat: "repeat-x, no-repeat",
};

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[100svh] flex-col bg-ivory"
      aria-label="Marbella Pool Service — swimming pool company on the Costa del Sol"
    >
      {/* ── Air: headline zone ─────────────────────────────────────────── */}
      <div className="mx-auto flex w-full max-w-[1680px] flex-1 flex-col justify-end px-5 pb-8 pt-28 sm:px-8 sm:pb-10 lg:px-12 lg:pt-32">
        <div className="grid items-end gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <motion.p
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-label mb-5 text-ink-soft"
            >
              Swimming pool company · Costa del Sol
            </motion.p>
            <SurfaceLines
              as="h1"
              className="text-display text-[clamp(2.9rem,8.2vw,8rem)] text-ink"
              lines={[
                <span key="l1">Your pool.</span>,
                <span key="l2">
                  <span className="text-serif-accent text-petrol">
                    Perfect, all&nbsp;year.
                  </span>
                </span>,
              ]}
              delay={0.15}
              once
            />
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE_WATER }}
            className="max-w-md lg:justify-self-end lg:pb-3"
          >
            <p className="text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Maintenance, technical service, construction and renovation —
              one specialist team for private pools, villas and communities
              from Marbella to Mijas Costa.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="ink">
                Request a quote
              </Button>
              <Button
                href={contact.whatsapp.href}
                variant="outline-ink"
                arrow={false}
                external
              >
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Water: the live surface ───────────────────────────────────── */}
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.35 }}
        className="mask-drift relative"
        style={maskStyle}
      >
        {/* Desktop water */}
        <WaterCanvas
          src="/images/hero-pool.jpg"
          alt="Private villa swimming pool maintained by Marbella Pool Service on the Costa del Sol"
          className="hidden h-[clamp(300px,44vh,520px)] w-full sm:block"
          strength={0.0038}
          shimmer={0.035}
          priority
        />
        {/* Mobile water — vertical crop, real drone photograph */}
        <WaterCanvas
          src="/images/hero-mobile.jpg"
          alt="Sparkling pool water with palm shadows, maintained by Marbella Pool Service"
          className="block h-[46svh] min-h-[300px] w-full sm:hidden"
          strength={0.0046}
          shimmer={0.02}
          priority
        />

        {/* foam light at the meniscus */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/30 to-transparent"
        />

        {/* location marker riding the waterline */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: EASE_WATER }}
          className="absolute left-5 top-6 sm:left-8 lg:left-12"
        >
          <p className="text-label bg-abyss/60 px-4 py-2.5 text-ivory backdrop-blur-sm">
            Marbella · Mijas Costa · Costa del Sol
          </p>
        </motion.div>

        {/* service breadth strip, bottom of the water */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-abyss/55 to-transparent pb-5 pt-14 sm:block"
        >
          <p className="text-label mx-auto flex max-w-[1680px] flex-wrap gap-x-6 gap-y-2 px-8 text-ivory/85 lg:px-12">
            <span>Maintenance</span>
            <span className="opacity-40">/</span>
            <span>Technical service</span>
            <span className="opacity-40">/</span>
            <span>Construction &amp; renovation</span>
            <span className="opacity-40">/</span>
            <span>Leak detection</span>
            <span className="opacity-40">/</span>
            <span>Pool covers</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
