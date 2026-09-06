import { Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * WhyStrip — the three published reasons clients choose the company,
 * as a quiet triptych between the deep end and the renovation story.
 */

const REASONS = [
  {
    title: "One company for everything",
    body: "From day-to-day pool maintenance to complete refurbishment or new construction — one team, one point of contact.",
  },
  {
    title: "Efficiency and safety",
    body: "Crystal-clear water, carefully controlled chemistry and equipment calibrated for efficiency and low running costs.",
  },
  {
    title: "Local and prompt",
    body: "Based in Calahonda with rapid response in Mijas Costa and daily routes across the Costa del Sol.",
  },
];

export default function WhyStrip() {
  return (
    <section className="bg-shell" aria-label="Why choose Marbella Pool Service">
      <div className="mx-auto max-w-[1680px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <Stagger className="grid gap-10 md:grid-cols-3 md:gap-12">
          {REASONS.map((r, i) => (
            <StaggerItem key={r.title}>
              <div className="border-t border-ink/15 pt-5">
                <span className="tabular text-[11px] text-mineral">0{i + 1}</span>
                <h3 className="text-display mt-2 text-xl text-ink">{r.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">{r.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
