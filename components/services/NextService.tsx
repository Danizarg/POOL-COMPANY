import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/site";
import Waterline from "@/components/ui/Waterline";

/**
 * NextService — every service page ends with the next chapter:
 * a full-width teaser that keeps the visitor moving through the offer.
 */
export default function NextService({ current }: { current: string }) {
  const idx = services.findIndex((s) => s.slug === current);
  const next = services[(idx + 1) % services.length];

  return (
    <Link
      href={`/services/${next.slug}`}
      className="group relative block overflow-hidden bg-limestone"
      aria-label={`Next service: ${next.title}`}
    >
      <Waterline className="text-petrol" opacity={0.25} />
      <div className="mx-auto flex max-w-[1680px] items-center justify-between gap-8 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div>
          <p className="text-label text-ink-soft">Next service · {next.index}</p>
          <p className="text-display mt-4 text-[clamp(2rem,5.4vw,4.8rem)] text-ink transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
            {next.navTitle}
            <span className="ml-5 inline-block text-mineral transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </p>
        </div>
        <div className="relative hidden h-36 w-56 shrink-0 overflow-hidden rounded-[2px] md:block lg:h-44 lg:w-72">
          <Image
            src={next.image}
            alt=""
            fill
            sizes="288px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        </div>
      </div>
    </Link>
  );
}
