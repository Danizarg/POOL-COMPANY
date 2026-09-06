import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCta from "@/components/layout/FinalCta";
import SectionLabel from "@/components/ui/SectionLabel";
import Waterline from "@/components/ui/Waterline";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { HeroLines, FadeUp } from "@/components/motion/Entrance";
import { shopUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Marbella Pool Service is the pool division of Infinity Brand: our own team of technicians, plant-room specialists and renovation crew, with a physical shop in Calahonda serving the whole Costa del Sol.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Transparency",
    body: "Diagnoses with photos and measurable data; quotes without small print.",
  },
  {
    title: "Real efficiency",
    body: "We propose changes that genuinely reduce electricity consumption, stabilise the water and extend equipment life.",
  },
  {
    title: "Safety",
    body: "Working protocols, protective equipment, original products and spare parts.",
  },
  {
    title: "Care for the environment",
    body: "Responsible dosing, optimised filtration hours and low-consumption technologies — variable-speed pumps, LED, covers and efficient heating.",
  },
  {
    title: "Local commitment",
    body: "Rapid response in Mijas Costa and coverage across the whole Costa del Sol.",
  },
];

const FAQ = [
  {
    q: "Do you work with private owners, communities and hotels?",
    a: "Yes. We adjust plans and protocols to each case, including communication with administrators and audits in tourism environments.",
  },
  {
    q: "What happens if you detect a fault during maintenance?",
    a: "We document it and send you a diagnosis with options and a fixed-price quote. If you accept, our technical service intervenes without delay.",
  },
  {
    q: "Can you improve consumption and water stability?",
    a: "Yes. We redesign the operating curve of the plant room: variable-speed pumps, optimal filtration cycles, balanced hydraulics and pH/ORP automation. The result: less consumption, more stability.",
  },
  {
    q: "Do you cover areas outside Mijas Costa?",
    a: "Yes, the whole Costa del Sol — ask us about availability for other areas.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header tone="light" />
      <main id="main">
        {/* Hero */}
        <section className="bg-ivory" aria-label="About Marbella Pool Service">
          <div className="mx-auto max-w-[1680px] px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
            <SectionLabel index="01" className="text-ink-soft">
              About us
            </SectionLabel>
            <div className="mt-8 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
              <HeroLines
                as="h1"
                className="text-display text-[clamp(2.4rem,5.6vw,5.4rem)] text-ink"
                lines={[
                  <span key="1">Pool care made easy,</span>,
                  <span key="2" className="text-serif-accent text-petrol">
                    transparent &amp; efficient.
                  </span>,
                ]}
              />
              <FadeUp delay={0.2} className="max-w-md self-end">
                <p className="text-[15px] leading-relaxed text-ink-soft sm:text-base">
                  We are Infinity Brand — complete pool specialists on the
                  Costa del Sol. We were born with one very simple idea:
                  that caring for a pool should be easy, transparent and
                  efficient. Today we look after villas and communities
                  across the coast, with a particular presence in Mijas
                  Costa, Marbella and Estepona.
                </p>
              </FadeUp>
            </div>
          </div>
          <Waterline className="text-petrol" opacity={0.25} />
        </section>

        {/* Own team */}
        <section className="bg-limestone" aria-label="Our team">
          <div className="mx-auto grid max-w-[1680px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-28">
            <Reveal>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
                  <Image
                    src="/images/work/showroom.webp"
                    alt="Inside the Infinity Concepts shop and showroom in Calahonda"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-label mt-3 text-ink-soft">
                  Our shop &amp; showroom · Centro Comercial LIDL, Calahonda
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="text-display text-[clamp(2rem,4.2vw,3.8rem)] text-ink">
                Not a call centre.
                <br />
                <span className="text-serif-accent text-petrol">Our own team.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
                We don&apos;t subcontract. We are maintenance technicians,
                plant-room specialists, product advisers and building and
                renovation crew — one team, driven by work done well and
                measurably, with clear quotes and continuous follow-up.
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
                Our physical shop in Calahonda stocks only products we know
                from experience actually work.
              </p>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/15 pt-6">
                {[
                  ["+20", "years of experience"],
                  ["+2,500", "pools cared for"],
                  ["+3,500", "technical visits a year"],
                ].map(([n, label]) => (
                  <div key={label}>
                    <dt className="text-display tabular text-2xl text-ink sm:text-3xl">{n}</dt>
                    <dd className="text-label mt-1.5 text-[9.5px] text-ink-soft">{label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="bg-ivory" aria-label="Our values">
          <div className="mx-auto grid max-w-[1680px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:px-12 lg:py-28">
            <div>
              <SectionLabel index="02" className="text-ink-soft">
                Values
              </SectionLabel>
              <h2 className="text-display mt-6 text-[clamp(2rem,3.8vw,3.4rem)] text-ink">
                What defines
                <br />
                <span className="text-serif-accent text-petrol">how we work.</span>
              </h2>
            </div>
            <Stagger>
              {VALUES.map((v, i) => (
                <StaggerItem key={v.title}>
                  <div className="border-t border-ink/12 py-5">
                    <div className="flex items-baseline gap-4">
                      <span className="tabular text-[11px] text-mineral">0{i + 1}</span>
                      <h3 className="text-display text-xl text-ink">{v.title}</h3>
                    </div>
                    <p className="mt-2 pl-8 text-[14px] leading-relaxed text-ink-soft">{v.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Quote */}
        <section className="bg-petrol text-ivory" aria-label="Client testimonial">
          <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <p className="text-serif-accent max-w-4xl text-[clamp(1.4rem,3vw,2.6rem)] leading-[1.3]">
              “Since that time I have found their service to be of the
              highest standard and any problems are addressed quickly and
              professionally. I feel treated as a person rather than just
              another customer.”
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-aqua" aria-hidden="true" />
              <cite className="text-label not-italic">Margaret Pearson</cite>
              <span className="text-label text-ivory/60">Google review</span>
            </footer>
          </div>
        </section>

        {/* Shop CTA + FAQ */}
        <section className="bg-limestone" aria-label="Frequently asked questions">
          <div className="mx-auto grid max-w-[1680px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:px-12 lg:py-28">
            <div>
              <SectionLabel className="text-ink-soft">Common questions</SectionLabel>
              <h2 className="text-display mt-6 text-[clamp(1.9rem,3.4vw,3rem)] text-ink">
                Working <span className="text-serif-accent text-petrol">with us.</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="ink">
                  Request a quote
                </Button>
                <Button href={shopUrl} variant="outline-ink" external>
                  Visit the shop
                </Button>
              </div>
            </div>
            <Accordion items={FAQ} tone="light" />
          </div>
        </section>

        <FinalCta headline={["Shall we start caring", "for your pool?"]} />
      </main>
      <Footer />
    </>
  );
}
