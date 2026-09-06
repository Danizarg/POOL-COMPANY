/**
 * SectionLabel — indexed eyebrow label: "( 03 ) — Services".
 * The parenthesised index is part of the site's technical-drawing language.
 */
export default function SectionLabel({
  index,
  children,
  className = "",
  tone = "auto",
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "auto" | "light" | "dark";
}) {
  const color =
    tone === "light"
      ? "text-ivory/60"
      : tone === "dark"
        ? "text-ink-soft"
        : "";
  return (
    <p className={`text-label flex items-baseline gap-3 ${color} ${className}`}>
      {index && <span className="tabular opacity-60">( {index} )</span>}
      <span>{children}</span>
    </p>
  );
}
