import StatusBadge from "./StatusBadge";

export default function CaseStudySection({ number, title, body, list, children }) {
  return (
    <div className="border-t border-[var(--color-border-soft)] py-10 first:border-t-0 first:pt-0 md:py-14">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
        <div className="flex items-start gap-3 md:block">
          <span className="mono-tag text-[var(--color-brass)]">{number}</span>
        </div>

        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold text-[var(--color-ink)]">{title}</h3>
          {body && (
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-muted)]">{body}</p>
          )}

          {list && (
            <ul className="mt-5 space-y-2.5">
              {list.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-3 border-b border-[var(--color-border-soft)] pb-2.5"
                >
                  <span className="text-sm text-[var(--color-ink)]">{item.label}</span>
                  <StatusBadge status={item.status} />
                </li>
              ))}
            </ul>
          )}

          {children}
        </div>
      </div>
    </div>
  );
}
