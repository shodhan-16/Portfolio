import { useParams, Link } from "react-router-dom";
import { User, Monitor, Network, ShieldCheck, Server, Database } from "lucide-react";
import { featuredProject, smartVillageCaseStudy } from "../data/projects";
import CaseStudyHeader from "../components/CaseStudyHeader";
import CaseStudySection from "../components/CaseStudySection";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import { GithubIcon } from "../components/SocialIcons";

const flow = [
  { label: "User", icon: User },
  { label: "Frontend", icon: Monitor },
  { label: "REST API", icon: Network },
  { label: "Auth", icon: ShieldCheck },
  { label: "Backend", icon: Server },
  { label: "MySQL", icon: Database },
];

export default function ProjectDetails() {
  const { slug } = useParams();

  // Currently only one engineering case study exists; this guards
  // against an unknown slug rather than rendering broken content.
  if (slug !== "smart-village") {
    return (
      <div className="shell pt-40 pb-24 text-center">
        <p className="text-[var(--color-ink-muted)]">This case study isn't available yet.</p>
        <Link to="/#projects" className="mt-4 inline-block text-[var(--color-brass)]">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div>
      <CaseStudyHeader
        backTo="/#projects"
        backLabel="Back to Projects"
        title={smartVillageCaseStudy.title}
        subtitle={featuredProject.description}
        status={smartVillageCaseStudy.subtitle}
      />

      <div className="shell pb-24">
        <div className="flex flex-wrap gap-2 border-b border-[var(--color-border-soft)] pb-10">
          {featuredProject.technologies.map((tech) => (
            <span key={tech} className="mono-tag rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-ink-muted)]">
              {tech}
            </span>
          ))}
        </div>

        {smartVillageCaseStudy.video && (
          <div className="border-t border-[var(--color-border-soft)] py-10 md:py-14">
            <div className="mb-6">
              <span className="mono-tag text-[var(--color-brass)]">DEMO</span>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">Project Walkthrough</h3>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black" style={{ aspectRatio: "16 / 9" }}>
              <video
                src={smartVillageCaseStudy.video.src}
                controls
                preload="metadata"
                className="h-full w-full"
              >
                Your browser does not support embedded video.
              </video>
            </div>
          </div>
        )}

        {smartVillageCaseStudy.sections.map((section) =>
          section.diagram ? (
            <CaseStudySection key={section.number} number={section.number} title={section.title} body={section.body}>
              <div className="mt-6">
                <ArchitectureDiagram nodes={flow} />
              </div>
            </CaseStudySection>
          ) : (
            <CaseStudySection
              key={section.number}
              number={section.number}
              title={section.title}
              body={section.body}
              list={section.list}
            />
          )
        )}

        <CaseStudySection number="12" title="GitHub">
          {featuredProject.github ? (
            <a
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[var(--color-brass)]"
            >
              <GithubIcon size={16} /> View source on GitHub
            </a>
          ) : (
            <p className="mt-3 text-sm text-[var(--color-ink-faint)]">
              Repository link coming soon.
            </p>
          )}
        </CaseStudySection>
      </div>
    </div>
  );
}
