import SectionLabel from "@/components/ui/SectionLabel";
import Waterline from "@/components/ui/Waterline";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { serviceAreas } from "@/lib/site";

/**
 * Coverage — the Costa del Sol, set typographically like a coastline.
 * Primary working areas carry display weight; every genuine service
 * area remains semantic, searchable text for local SEO.
 */

const FEATURED = [
  "Marbella",
  "Mijas Costa",
  "Puerto Banús",
  "Estepona",
  "Fuengirola",
  "Benalmádena",
  "Málaga",
];

export default function Coverage() {
  const rest = serviceAreas.filter((a) => !FEATURED.includes(a));

  return (
    <section className="relative overflow-hidden bg-petrol text-ivory" aria-label="Service areas on the Costa del Sol">
      <Waterline className="text-aqua" opacity={0.35} />
      <div className="mx-auto max-w-[1680px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <SectionLabel index="06" tone="light">
              Where we work
            </SectionLabel>
            <Reveal className="mt-8">
              <p className="max-w-sm text-[15px] leading-relaxed text-ivory/70">
                We operate along the whole Costa del Sol, with a particular
                focus on Mijas Costa — Calahonda, Riviera del Sol, La Cala —
                and daily routes through Marbella, Fuengirola and Estepona.
              </p>
              <p className="text-label mt-8 border-t border-ivory/15 pt-5 text-ivory/60">
                Base · Calahonda (Mijas Costa)
              </p>
              <p className="mt-2 text-[13.5px] text-ivory/70">
                Centro Comercial LIDL, Local 9 — rapid response across
                Mijas Costa and Marbella.
              </p>
            </Reveal>
          </div>

          {/* Typographic coastline */}
          <div>
            <Stagger className="flex flex-wrap items-baseline gap-x-7 gap-y-3" gap={0.05}>
              {FEATURED.map((town) => (
                <StaggerItem key={town}>
                  <span className="text-display text-[clamp(1.9rem,4vw,3.6rem)] text-ivory transition-colors duration-300 hover:text-aqua">
                    {town}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
            <Waterline className="my-8 max-w-2xl text-aqua" opacity={0.3} />
            <Reveal delay={0.15}>
              <p className="flex max-w-2xl flex-wrap gap-x-5 gap-y-2 text-[15px] text-ivory/65">
                {rest.map((town) => (
                  <span key={town} className="transition-colors duration-300 hover:text-aqua">
                    {town}
                  </span>
                ))}
              </p>
              <p className="mt-8 text-[13.5px] italic text-ivory/50">
                Somewhere else on the Costa del Sol? Ask us — we&apos;ll
                confirm availability.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
