import { ArrowUpRight } from "lucide-react";
import { featuredProject, pythonProjects } from "../data/projects";
import { profile } from "../data/profile";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import StatusBadge from "../components/StatusBadge";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          title="Engineering Projects"
          subtitle="Full-stack work focused on real problem-solving — authentication, data modeling, and system design."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ProjectCard project={featuredProject} caseStudyPath="/projects/smart-village" />

          <div className="card-edge flex flex-col justify-between rounded-2xl bg-[var(--color-surface)] p-6 md:p-8">
            <div>
              <p className="mono-tag text-[var(--color-cyan)]">Python Mini Projects</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                A collection of small applications built to strengthen Python fundamentals,
                programming logic, and problem-solving skills.
              </p>

              <ul className="mt-6 space-y-3">
                {pythonProjects.map((p) => (
                  <li key={p.slug} className="flex items-center justify-between gap-3 border-b border-[var(--color-border-soft)] pb-3">
                    <div>
                      <p className="text-sm font-medium text-[var(--color-ink)]">{p.title}</p>
                      <p className="mt-0.5 text-xs text-[var(--color-ink-faint)]">{p.description}</p>
                    </div>
                    <StatusBadge status={p.status} />
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-sm text-[var(--color-brass)]"
            >
              View GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
