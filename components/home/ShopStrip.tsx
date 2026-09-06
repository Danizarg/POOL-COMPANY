import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { shopUrl } from "@/lib/site";

/**
 * ShopStrip — the physical shop in Calahonda as a supporting layer of
 * expertise: professional products from the people who use them daily.
 */
export default function ShopStrip() {
  return (
    <section className="bg-limestone" aria-label="Shop and product supply">
      <div className="mx-auto grid max-w-[1680px] gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-32">
        <Reveal>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
              <Image
                src="/images/work/showroom-2.jpg"
                alt="Pool chemicals and maintenance products at the Marbella Pool Service shop in Calahonda"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-label mt-3 text-ink-soft">
              Centro Comercial LIDL, Local 9 · Calahonda
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.15}>
          <SectionLabel index="08" className="text-ink-soft">
            Shop &amp; supply
          </SectionLabel>
          <h2 className="text-display mt-6 text-[clamp(2rem,4.4vw,4rem)] text-ink">
            Products from people
            <br />
            who <span className="text-serif-accent text-petrol">work with pools</span>
            <br />
            every day.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Our shop in Calahonda stocks only what we use ourselves:
            chemicals, test kits, equipment and finishes. We also deliver —
            chlorine by the bottle or in bulk by tanker, and complete pool
            water fills with the chemistry balanced on commissioning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={shopUrl} variant="ink" external>
              Visit the shop
            </Button>
            <Button href="/services/additional-services" variant="outline-ink">
              Chlorine &amp; water supply
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
