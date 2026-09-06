import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import Waterline from "@/components/ui/Waterline";
import ContactForm from "@/components/contact/ContactForm";
import WaterCanvas from "@/components/water/WaterCanvas";
import { HeroLines, FadeUp } from "@/components/motion/Entrance";
import { contact } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact — Request a Quote",
  description:
    "Request a no-obligation pool quote. Call +34 625 111 172, message us on WhatsApp, or visit our shop at Centro Comercial LIDL, Calahonda (Mijas Costa).",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header tone="light" />
      <main id="main">
        <section className="bg-ivory" aria-label="Contact Marbella Pool Service">
          <div className="mx-auto max-w-[1680px] px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
            <SectionLabel className="text-ink-soft">Contact</SectionLabel>
            <HeroLines
              as="h1"
              className="text-display mt-8 max-w-4xl text-[clamp(2.4rem,5.6vw,5.2rem)] text-ink"
              lines={[
                <span key="1">Let&apos;s start caring</span>,
                <span key="2" className="text-serif-accent text-petrol">
                  for your pool.
                </span>,
              ]}
            />

            <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
              {/* Direct contact */}
              <FadeUp>
                <div className="space-y-9">
                  <div>
                    <h2 className="text-label text-ink-soft">Direct contact</h2>
                    <ul className="mt-4 space-y-3">
                      {contact.phones.map((p) => (
                        <li key={p.tel}>
                          <a
                            href={p.tel}
                            className="group flex items-center gap-3 text-[19px] font-medium tracking-tight text-ink transition-colors hover:text-petrol"
                          >
                            <PhoneIcon className="h-4.5 w-4.5 text-mineral" />
                            {p.display}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href={contact.whatsapp.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 text-[19px] font-medium tracking-tight text-ink transition-colors hover:text-petrol"
                        >
                          <WhatsAppIcon className="h-4.5 w-4.5 text-mineral" />
                          WhatsApp — fastest reply
                        </a>
                      </li>
                      <li>
                        <a
                          href={contact.mailto}
                          className="text-[16px] text-ink-soft underline decoration-mineral/50 underline-offset-4 transition-colors hover:text-ink"
                        >
                          {contact.email}
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-ink/12 pt-7">
                    <h2 className="text-label text-ink-soft">Shop &amp; office</h2>
                    <address className="mt-4 text-[15px] not-italic leading-relaxed text-ink-soft">
                      {contact.address.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Marbella+Pool+Service+Centro+Comercial+LIDL+Local+9+Calahonda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-label mt-4 inline-flex items-center gap-2 text-ink transition-colors hover:text-petrol"
                    >
                      Get directions →
                    </a>
                  </div>

                  <div className="border-t border-ink/12 pt-7">
                    <h2 className="text-label text-ink-soft">Coverage</h2>
                    <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-ink-soft">
                      Marbella · Mijas Costa · the whole Costa del Sol.
                      Rapid response around Calahonda and Marbella.
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* Form */}
              <FadeUp delay={0.15}>
                <h2 className="text-label mb-6 text-ink-soft">
                  Request information — no obligation
                </h2>
                <ContactForm />
              </FadeUp>
            </div>
          </div>
          <Waterline className="text-petrol" opacity={0.25} />
        </section>

        {/* Calm closing water */}
        <div className="relative bg-abyss">
          <WaterCanvas
            src="/images/hero-mobile.jpg"
            alt=""
            className="h-[clamp(180px,26vh,320px)] w-full"
            strength={0.003}
            shimmer={0.035}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
