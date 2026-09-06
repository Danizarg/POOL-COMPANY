import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import WaterReveal from "@/components/water/WaterReveal";
import { Reveal, SurfaceLines } from "@/components/motion/Reveal";

/**
 * RenovationShowcase — the high-value work, treated like an
 * architecture portfolio. The lead image fills with water on scroll.
 * All photography is genuine client work and the company's own showroom.
 */
export default function RenovationShowcase() {
  return (
    <section className="bg-ivory" aria-label="Construction and renovation">
      <div className="mx-auto max-w-[1680px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid items-end gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionLabel index="04" className="text-ink-soft">
              Construction &amp; renovation
            </SectionLabel>
            <SurfaceLines
              as="h2"
              className="text-display mt-6 text-[clamp(2.4rem,5.8vw,5.6rem)] text-ink"
              lines={[
                <span key="1">Your pool,</span>,
                <span key="2" className="text-serif-accent text-petrol">
                  like new again.
                </span>,
              ]}
            />
          </div>
          <Reveal delay={0.2} className="max-w-md lg:justify-self-end">
            <p className="text-[15px] leading-relaxed text-ink-soft">
              Complete renovations that restore structure, watertightness
              and finish: new gresite and mosaic, waterproofing, regrouting,
              integrated steps and benches, LED lighting and efficient
              modern equipment.
            </p>
          </Reveal>
        </div>

        {/* Lead image — fills with water as you scroll */}
        <WaterReveal cover="#f6f3eb" className="mt-14 rounded-[2px] lg:mt-20">
          <figure>
            <div className="relative aspect-[16/10] sm:aspect-[21/10]">
              <Image
                src="/images/services/renovation.webp"
                alt="Completed pool renovation with new blue gresite mosaic — real client project on the Costa del Sol"
                fill
                sizes="(min-width: 1280px) 1580px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-label mt-3 text-ink-soft">
              Full mosaic renovation &amp; regrouting · client project · Costa del Sol
            </figcaption>
          </figure>
        </WaterReveal>

        {/* Material details */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-10">
          <Reveal>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                <Image
                  src="/images/work/mosaic-samples.jpg"
                  alt="Gresite and mosaic sample ranges at the Calahonda showroom"
                  fill
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-label mt-3 text-ink-soft">
                Mosaic ranges · our showroom
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                <Image
                  src="/images/work/regrouting-client.jpg"
                  alt="Renovated spa and pool after professional regrouting — client project"
                  fill
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-label mt-3 text-ink-soft">
                Regrouting &amp; spa detail · client project
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.2} className="col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col justify-between rounded-[2px] bg-limestone p-7 lg:p-9">
              <ul className="space-y-2.5 text-[14px] text-ink-soft">
                {[
                  "New builds — concrete, mosaic and modern finishes",
                  "Waterproofing & watertightness of the shell",
                  "Gresite replacement & professional regrouting",
                  "Reinforced membranes and liners",
                  "Integrated steps, benches & relaxation areas",
                  "LED lighting, chlorination, heating & covers",
                ].map((item) => (
                  <li key={item} className="flex gap-3 border-b border-ink/8 pb-2.5">
                    <span className="text-mineral">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/services/construction-renovation" variant="ink">
                  Renovation service
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
