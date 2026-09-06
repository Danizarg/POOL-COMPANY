/**
 * Waterline — the site's recurring meniscus motif. A thin drifting wave
 * line used as a section divider / underline. Pure CSS animation, cheap.
 */
export default function Waterline({
  className = "",
  color = "currentColor",
  opacity = 0.35,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <div aria-hidden="true" className={`relative h-[10px] overflow-hidden ${className}`}>
      <svg
        className="absolute left-0 top-0 h-full w-[200%] animate-[waterline-drift_16s_linear_infinite] motion-reduce:animate-none"
        viewBox="0 0 400 10"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 5 Q 12.5 1.5 25 5 T 50 5 T 75 5 T 100 5 T 125 5 T 150 5 T 175 5 T 200 5 T 225 5 T 250 5 T 275 5 T 300 5 T 325 5 T 350 5 T 375 5 T 400 5"
          stroke={color}
          strokeOpacity={opacity}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
