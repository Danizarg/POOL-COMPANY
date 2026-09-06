import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCta from "@/components/layout/FinalCta";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import Waterline from "@/components/ui/Waterline";
import Accordion from "@/components/ui/Accordion";
import CausticField from "@/components/water/CausticField";
import NextService from "@/components/services/NextService";
import { Reveal, SurfaceLines, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { contact, services } from "@/lib/site";
import type { ServiceContent } from "@/lib/service-content";

/**
 * ServicePage — the shared architecture for all six services, with a
 * light (limestone) and dark (abyssal) register. Each page keeps the
 * same bones: hero, what's included, method, gallery, FAQ, next chapter.
 */
export default function ServicePage({
  content,
  extra,
}: {
  content: ServiceContent;
  /** optional page-specific signature section, rendered after "what's included" */
  extra?: React.ReactNode;
}) {
  const meta = services.find((s) => s.slug === content.slug)!;
  const dark = content.tone === "dark";

  return (
    <>
      <Header tone={dark ? "dark" : "light"} />
      <main id="main">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section
          className={`relative overflow-hidden ${dark ? "bg-abyss text-ivory" : "bg-ivory text-ink"}`}
          aria-label={content.metaTitle}
        >
          {dark && <CausticField intensity={0.12} />}
          <div className="relative mx-auto grid max-w-[1680px] gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16 lg:px-12 lg:pb-20 lg:pt-40">
            <div>
              <SectionLabel index={meta.index} tone={dark ? "light" : "dark"}>
                {meta.title}
              </SectionLabel>
              <SurfaceLines
                as="h1"
                className="text-display mt-8 text-[clamp(2.3rem,5.2vw,4.9rem)]"
                lines={[
                  <span key="0">
                    {content.accent === 0 ? (
                      <span className={`text-serif-accent ${dark ? "text-aqua" : "text-petrol"}`}>
                        {content.heroLines[0]}
                      </span>
                    ) : (
                      content.heroLines[0]
                    )}
                  </span>,
                  <span key="1">
                    {content.accent === 1 ? (
                      <span className={`text-serif-accent ${dark ? "text-aqua" : "text-petrol"}`}>
                        {content.heroLines[1]}
                      </span>
                    ) : (
                      content.heroLines[1]
                    )}
                  </span>,
                ]}
              />
              <Reveal delay={0.3} className="mt-8 max-w-xl">
                <p className={`text-[15px] leading-relaxed sm:text-base ${dark ? "text-ivory/65" : "text-ink-soft"}`}>
                  {content.intro}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact" variant={dark ? "aqua" : "ink"}>
                    Request a quote
                  </Button>
                  <Button
                    href={contact.whatsapp.href}
                    variant={dark ? "outline-ivory" : "outline-ink"}
                    arrow={false}
                    external
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                    </span>
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="lg:justify-self-end">
              <figure className="w-full lg:w-[min(30vw,460px)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                  <Image
                    src={content.heroImage}
                    alt={content.heroImageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption
                  className={`text-label mt-3 ${dark ? "text-ivory/50" : "text-ink-soft"}`}
                >
                  {content.heroImageAlt}
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Waterline className={dark ? "text-aqua" : "text-petrol"} opacity={0.3} />
        </section>

        {/* ── What's included ──────────────────────────────────────── */}
        <section
          className={dark ? "bg-deep text-ivory" : "bg-limestone text-ink"}
          aria-label={content.includesTitle}
        >
          <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <h2 className="text-display max-w-2xl text-[clamp(1.9rem,3.6vw,3.2rem)]">
              {content.includesTitle}
            </h2>
            <Stagger className="mt-12 grid gap-x-16 gap-y-2 lg:grid-cols-2">
              {content.includes.map((f, i) => (
                <StaggerItem key={f.title}>
                  <div
                    className={`group border-t py-5 ${dark ? "border-ivory/15 hover:border-aqua/60" : "border-ink/12 hover:border-mineral/70"} transition-colors duration-500`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className={`tabular text-[11px] ${dark ? "text-aqua/80" : "text-mineral"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-display text-lg sm:text-xl">{f.title}</h3>
                    </div>
                    <p
                      className={`mt-2 pl-8 text-[13.5px] leading-relaxed ${dark ? "text-ivory/55" : "text-ink-soft"}`}
                    >
                      {f.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {extra}

        {/* ── Gallery (when genuine imagery exists) ────────────────── */}
        {content.gallery && (
          <section className="bg-ivory" aria-label="Project photography">
            <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
              <div className={`grid gap-4 sm:gap-6 lg:gap-10 ${content.gallery.length >= 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 lg:grid-cols-3"}`}>
                {content.gallery.map((g, i) => (
                  <Reveal key={g.src} delay={i * 0.08} className={i % 2 === 1 ? "lg:mt-14" : ""}>
                    <figure>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                        <Image
                          src={g.src}
                          alt={g.alt}
                          fill
                          sizes="(min-width: 1024px) 25vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="text-label mt-3 text-ink-soft">
                        {g.caption}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Method ───────────────────────────────────────────────── */}
        <section
          className={dark ? "bg-abyss text-ivory" : "bg-ivory text-ink"}
          aria-label={content.methodTitle}
        >
          <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <SectionLabel tone={dark ? "light" : "dark"}>{content.methodTitle}</SectionLabel>
            <Stagger className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8" gap={0.09}>
              {content.method.map((s, i) => (
                <StaggerItem key={s.title}>
                  <div className={`border-t pt-4 ${dark ? "border-ivory/15" : "border-ink/12"}`}>
                    <span className={`tabular text-[11px] ${dark ? "text-aqua/80" : "text-mineral"}`}>
                      0{i + 1}
                    </span>
                    <h3 className="text-display mt-2 text-lg">{s.title}</h3>
                    <p className={`mt-2 text-[13px] leading-relaxed ${dark ? "text-ivory/55" : "text-ink-soft"}`}>
                      {s.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section
          className={dark ? "bg-deep text-ivory" : "bg-limestone text-ink"}
          aria-label="Frequently asked questions"
        >
          <div className="mx-auto grid max-w-[1680px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:px-12 lg:py-28">
            <div>
              <SectionLabel tone={dark ? "light" : "dark"}>Common questions</SectionLabel>
              <h2 className="text-display mt-6 text-[clamp(1.9rem,3.4vw,3rem)]">
                Before you <span className={`text-serif-accent ${dark ? "text-aqua" : "text-petrol"}`}>ask</span> —
              </h2>
              <p className={`mt-5 max-w-sm text-[14px] leading-relaxed ${dark ? "text-ivory/60" : "text-ink-soft"}`}>
                {content.closing}
              </p>
              <div className="mt-7">
                <Button href="/contact" variant={dark ? "aqua" : "ink"}>
                  Request a quote
                </Button>
              </div>
            </div>
            <Accordion items={content.faq} tone={content.tone} />
          </div>
        </section>

        <NextService current={content.slug} />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
