import Button from "@/components/ui/Button";
import WaterCanvas from "@/components/water/WaterCanvas";
import { SurfaceLines, Reveal } from "@/components/motion/Reveal";
import { contact } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

/**
 * FinalCta — the closing moment of every page. The design settles: a
 * quiet, immaculate water surface fills the lower viewport beneath the
 * invitation to get in touch. Used site-wide for a consistent close.
 */
export default function FinalCta({
  headline = ["Ready for a pool you", "don't have to worry about?"],
  accentIndex = 1,
}: {
  headline?: [string, string];
  accentIndex?: 0 | 1;
}) {
  return (
    <section className="relative bg-abyss text-ivory" aria-label="Request a quote">
      <div className="mx-auto max-w-[1680px] px-5 pb-16 pt-24 text-center sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        <SurfaceLines
          as="h2"
          className="text-display mx-auto text-[clamp(2.1rem,5.6vw,5.4rem)]"
          lines={headline.map((line, i) =>
            i === accentIndex ? (
              <span key={line} className="text-serif-accent text-aqua">
                {line}
              </span>
            ) : (
              <span key={line}>{line}</span>
            )
          )}
        />
        <Reveal delay={0.25}>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-ivory/60">
            Request a no-obligation quote. We&apos;re based in Mijas Costa
            and cover the whole of the Costa del Sol.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="aqua">
              Request a quote
            </Button>
            <Button href={contact.whatsapp.href} variant="outline-ivory" arrow={false} external>
              <span className="inline-flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </span>
            </Button>
            <Button href={contact.phones[0].tel} variant="outline-ivory" arrow={false}>
              <span className="inline-flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" /> {contact.phones[0].display}
              </span>
            </Button>
          </div>
        </Reveal>
      </div>

      {/* The still surface */}
      <div className="relative">
        <WaterCanvas
          src="/images/hero-pool.jpg"
          alt=""
          className="h-[clamp(200px,30vh,360px)] w-full"
          strength={0.0028}
          shimmer={0.03}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-abyss to-transparent"
        />
      </div>
    </section>
  );
}
