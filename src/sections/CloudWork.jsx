import { cloudServices, cloudProjects } from "../data/projects";
import SectionHeading from "../components/SectionHeading";
import StatusBadge from "../components/StatusBadge";
import { GithubIcon } from "../components/SocialIcons";
import { ArrowUpRight } from "lucide-react";

export default function CloudWork() {
  return (
    <section id="cloud" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          title="Cloud Engineering"
          subtitle="I'm building my foundation in cloud engineering through AWS labs, hands-on experimentation, and practical projects."
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {cloudServices.map((service) => (
            <div
              key={service.name}
              className="card-edge rounded-xl bg-[var(--color-surface)] px-4 py-3"
            >
              <p className="text-sm font-medium text-[var(--color-cyan)]">{service.name}</p>
              <p className="mt-0.5 text-xs text-[var(--color-ink-faint)]">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {cloudProjects.map((project) => (
            <div key={project.slug} className="card-edge rounded-2xl bg-[var(--color-surface)] p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-[var(--color-ink)]">{project.title}</h3>
                <StatusBadge status={project.status} />
              </div>

              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{project.problem}</p>

              <p className="mono-tag mt-4 text-[var(--color-ink-faint)]">{project.architecture}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span key={s} className="mono-tag rounded-full border border-[var(--color-cyan-soft)] px-2.5 py-1 text-[var(--color-cyan)]">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-ink-faint)]">What I implemented</p>
                <ul className="mt-2 space-y-1.5">
                  {project.implemented.map((item) => (
                    <li key={item} className="text-sm text-[var(--color-ink-muted)]">— {item}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-sm text-[var(--color-ink-muted)]">
                <span className="font-medium text-[var(--color-ink)]">What I learned: </span>
                {project.learned}
              </p>

              {(project.github || project.demo) && (
                <div className="mt-4 flex gap-4 text-sm">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
                      <GithubIcon size={14} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
                      Demo <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
