import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageFrame from "./ImageFrame";
import StatusBadge from "./StatusBadge";
import { GithubIcon } from "./SocialIcons";

export default function ProjectCard({ project, caseStudyPath }) {
  const { title, description, technologies, image, github, demo, status } = project;

  return (
    <div className="group card-edge rounded-2xl bg-[var(--color-surface)] p-5 transition-all duration-300 hover:border-[var(--color-brass-soft)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] md:p-6">
      <ImageFrame src={image} alt={`${title} preview`} label={title} />

      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-[var(--color-ink)]">{title}</h3>
        <StatusBadge status={status} />
      </div>

      <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
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
        {caseStudyPath && (
          <Link
            to={caseStudyPath}
            className="inline-flex items-center gap-1 text-[var(--color-brass)] transition-transform duration-200 group-hover:translate-x-0.5"
          >
            View Case Study <ArrowUpRight size={15} />
          </Link>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            <GithubIcon size={15} /> GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            Live Demo <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </div>
  );
}
