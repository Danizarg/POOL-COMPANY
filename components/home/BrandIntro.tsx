import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Waterline from "@/components/ui/Waterline";
import { Reveal, SurfaceLines } from "@/components/motion/Reveal";

/**
 * BrandIntro — large editorial brand statement. Limestone field,
 * oversized type, two offset photographs of the real business.
 */
export default function BrandIntro() {
  return (
    <section className="bg-limestone" aria-label="About Marbella Pool Service">
      <div className="mx-auto max-w-[1680px] px-5 pb-24 pt-20 sm:px-8 lg:px-12 lg:pb-32 lg:pt-28">
        <SectionLabel index="01" className="text-ink-soft">
          Who we are
        </SectionLabel>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <SurfaceLines
            as="h2"
            className="text-display text-[clamp(2.4rem,5.6vw,5.4rem)] text-ink"
            lines={[
              <span key="1">Everything your</span>,
              <span key="2">
                pool needs. <span className="text-serif-accent text-petrol">One</span>
              </span>,
              <span key="3" className="text-serif-accent text-petrol">
                specialist team.
              </span>,
            ]}
          />

          <Reveal delay={0.2} className="max-w-md self-end">
            <p className="text-[15px] leading-relaxed text-ink-soft sm:text-base">
              We are Marbella Pool Service, the pool division of Infinity
              Brand — a technical and maintenance team that makes looking
              after your pool easy, transparent and efficient. We serve
              villas, residential communities and hotels across the Costa
              del Sol, with our own technicians, our own plant-room
              specialists and a physical shop in Calahonda.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-t border-ink/20 pt-3">
                <dt className="text-label text-ink">Our own team</dt>
                <dd className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                  No call-centre, no subcontracting — the people who quote
                  are the people who come.
                </dd>
              </div>
              <div className="border-t border-ink/20 pt-3">
                <dt className="text-label text-ink">Clear quotes</dt>
                <dd className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                  Itemised proposals with fixed prices — no small print, no
                  surprise extras.
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Offset photography strip */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-24 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
          <Reveal>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] lg:aspect-[21/10]">
                <Image
                  src="/images/work/maintenance-2.jpg"
                  alt="Marbella Pool Service technician maintaining a pool on the Costa del Sol"
                  fill
                  sizes="(min-width: 1024px) 55vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 62%" }}
                />
              </div>
              <figcaption className="text-label mt-3 text-ink-soft">
                Scheduled maintenance · Mijas Costa
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.15} className="lg:mt-20">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                <Image
                  src="/images/work/showroom.webp"
                  alt="Infinity Concepts shop and showroom in Calahonda with pool finishes and mosaic samples"
                  fill
                  sizes="(min-width: 1024px) 32vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 38%" }}
                />
              </div>
              <figcaption className="text-label mt-3 text-ink-soft">
                Our shop &amp; showroom · Calahonda
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
      <Waterline className="text-petrol" opacity={0.25} />
    </section>
  );
}
