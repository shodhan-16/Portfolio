import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageFrame from "./ImageFrame";
import StatusBadge from "./StatusBadge";
import { GithubIcon } from "./SocialIcons";

export default function WorkCard({ work }) {
  const { slug, title, tagline, description, technologies, image, imageLabel, website, github, status, path } = work;
  const caseStudyPath = path || `/work/${slug}`;

  return (
    <div className="group card-edge overflow-hidden rounded-2xl bg-[var(--color-surface)] transition-all duration-300 hover:border-[var(--color-brass-soft)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
      <ImageFrame src={image} alt={`${title} preview`} label={imageLabel || title} ratio="16/9" className="rounded-none border-0 border-b" />

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)]">{title}</h3>
            <p className="mono-tag mt-1 text-[var(--color-brass)]">{tagline}</p>
          </div>
          <StatusBadge status={status} />
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="mono-tag rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[var(--color-ink-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
          <Link
            to={caseStudyPath}
            className="inline-flex items-center gap-1 text-[var(--color-brass)] transition-transform duration-200 group-hover:translate-x-0.5"
          >
            View Case Study <ArrowUpRight size={15} />
          </Link>
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
              View Website <ArrowUpRight size={15} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
              <GithubIcon size={15} /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
