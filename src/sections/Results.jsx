import { pythonProjects, cloudProjects } from "../data/projects";
import { selectedWork } from "../data/selectedWork";
import { creativeWork } from "../data/creativeWork";
import { certifications } from "../data/certifications";
import SectionHeading from "../components/SectionHeading";

// Counts below are derived directly from this site's own data files —
// not invented metrics — so they stay accurate as content is added.
const stats = [
  { label: "Projects Built", value: pythonProjects.length + 1 },
  { label: "Cloud Labs", value: cloudProjects.length },
  { label: "Certifications", value: certifications.length },
  { label: "Web Experiences", value: selectedWork.length },
  { label: "Creative Projects", value: creativeWork.length },
];

export default function Results() {
  return (
    <section className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          title="From Idea → Result"
          subtitle="What learning, building, and experimenting has actually produced so far."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="card-edge rounded-2xl bg-[var(--color-surface)] p-6 text-center">
              <p className="font-display text-3xl font-semibold text-[var(--color-brass)]">
                {stat.value}
              </p>
              <p className="mono-tag mt-2 text-[var(--color-ink-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
