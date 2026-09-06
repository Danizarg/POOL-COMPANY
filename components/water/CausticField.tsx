/**
 * CausticField — a soft field of underwater light for dark sections.
 *
 * Deliberately pure CSS: two blurred constellations of aqua light
 * drifting very slowly over the section's own background. A WebGL
 * version proved able to white-out entire sections on some software-GL
 * setups — a purely decorative layer must be incapable of failure, so
 * it is built from gradients that render identically everywhere.
 * Motion collapses to a still wash under prefers-reduced-motion.
 */
export default function CausticField({
  className = "",
  intensity = 0.16,
}: {
  className?: string;
  intensity?: number;
}) {
  const alpha = Math.min(0.32, intensity * 1.35);
  const layerA: React.CSSProperties = {
    backgroundImage: `
      radial-gradient(38% 26% at 18% 30%, rgba(111,213,224,${alpha}) 0%, transparent 70%),
      radial-gradient(30% 22% at 64% 12%, rgba(111,213,224,${alpha * 0.8}) 0%, transparent 70%),
      radial-gradient(44% 30% at 88% 52%, rgba(46,147,166,${alpha * 0.9}) 0%, transparent 72%),
      radial-gradient(26% 20% at 38% 78%, rgba(111,213,224,${alpha * 0.65}) 0%, transparent 70%)`,
  };
  const layerB: React.CSSProperties = {
    backgroundImage: `
      radial-gradient(32% 24% at 78% 82%, rgba(111,213,224,${alpha * 0.75}) 0%, transparent 70%),
      radial-gradient(40% 26% at 8% 66%, rgba(46,147,166,${alpha * 0.7}) 0%, transparent 72%),
      radial-gradient(24% 18% at 50% 42%, rgba(111,213,224,${alpha * 0.55}) 0%, transparent 70%)`,
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute -inset-[12%] animate-[caustic-drift_26s_ease-in-out_infinite] blur-2xl"
        style={layerA}
      />
      <div
        className="absolute -inset-[12%] animate-[caustic-drift-b_34s_ease-in-out_infinite] blur-2xl"
        style={layerB}
      />
    </div>
  );
}
