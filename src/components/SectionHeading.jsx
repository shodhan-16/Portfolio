/**
 * Consistent section heading used across the page.
 * `index` is optional and should only be passed for sections that are
 * genuinely part of a numbered sequence (e.g. case-study steps).
 */
export default function SectionHeading({ title, subtitle, align = "left", index }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className="flex items-baseline gap-3">
        {index && (
          <span className="mono-tag text-[var(--color-brass)]">{index}</span>
        )}
        <h2 className="heading-eyebrow text-3xl md:text-4xl font-semibold text-[var(--color-ink)]">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
