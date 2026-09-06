import CausticField from "@/components/water/CausticField";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal, SurfaceLines, Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Engineering — the deep end. An abyssal interlude with live caustic
 * light, communicating that pristine water is the product of invisible
 * technical systems. Content drawn from the business's own published
 * plant-room methodology.
 */

const SYSTEMS = [
  {
    id: "CH",
    name: "Chemistry",
    detail:
      "pH, ORP and salinity measured and adjusted on every visit — automated dosing calibrated to your pool's real volume.",
  },
  {
    id: "FI",
    name: "Filtration",
    detail:
      "Sand and glass filters washed, pressures checked, cycles optimised so the water turns over exactly as often as it should.",
  },
  {
    id: "HY",
    name: "Hydraulics",
    detail:
      "Balanced flow, correct backwash and leak-free pipework — measured with pressure and flow testing, not guesswork.",
  },
  {
    id: "AU",
    name: "Automation",
    detail:
      "Variable-speed pumps, smart probes and app control with alerts when a parameter drifts out of range.",
  },
];

export default function Engineering() {
  return (
    <section className="relative overflow-hidden bg-abyss text-ivory" aria-label="How we engineer perfect water">
      <CausticField intensity={0.15} />
      <div className="relative mx-auto max-w-[1680px] px-5 py-24 sm:px-8 lg:px-12 lg:py-40">
        <SectionLabel index="03" tone="light">
          The invisible work
        </SectionLabel>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <div>
            <SurfaceLines
              as="h2"
              className="text-display text-[clamp(2.6rem,6.4vw,6.2rem)]"
              lines={[
                <span key="1">Perfect water</span>,
                <span key="2">
                  is <span className="text-serif-accent text-aqua">engineered.</span>
                </span>,
              ]}
            />
            <Reveal delay={0.25} className="mt-8 max-w-lg">
              <p className="text-[15px] leading-relaxed text-ivory/65 sm:text-base">
                A still, transparent pool is the visible result of four
                systems working quietly in the plant room. We redesign the
                operating curve of your installation — better water quality,
                longer equipment life and a lower electricity bill.
              </p>
            </Reveal>
          </div>

          <Stagger className="self-end">
            {SYSTEMS.map((s, i) => (
              <StaggerItem key={s.id}>
                <div className="group border-t border-ivory/15 py-5 transition-colors duration-500 hover:border-aqua/60">
                  <div className="flex items-baseline gap-4">
                    <span className="tabular text-[11px] text-aqua/80">{s.id}</span>
                    <h3 className="text-display text-xl sm:text-2xl">{s.name}</h3>
                    <span className="tabular ml-auto text-[11px] text-ivory/30">
                      0{i + 1} / 04
                    </span>
                  </div>
                  <p className="mt-2 pl-9 text-[13.5px] leading-relaxed text-ivory/55">
                    {s.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
