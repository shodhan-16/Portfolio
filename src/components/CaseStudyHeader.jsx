import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function CaseStudyHeader({ backTo, backLabel, title, subtitle, status }) {
  return (
    <div className="pt-32 pb-10 md:pt-40 md:pb-14">
      <div className="shell">
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
        >
          <ArrowLeft size={15} /> {backLabel}
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold text-[var(--color-ink)] md:text-5xl">{title}</h1>
          {status && <StatusBadge status={status} />}
        </div>

        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-[var(--color-ink-muted)] md:text-lg">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
