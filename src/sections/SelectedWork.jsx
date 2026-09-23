import { useMemo, useState } from "react";
import { selectedWork } from "../data/selectedWork";
import { featuredProject } from "../data/projects";
import SectionHeading from "../components/SectionHeading";
import WorkCard from "../components/WorkCard";

const FILTERS = ["All", "Web", "Engineering", "Creative"];

// Engineering work is folded in here only for filtering purposes so the
// "Engineering" filter has something real to show alongside "Web".
const engineeringAsWork = [
  {
    slug: "smart-village",
    path: "/projects/smart-village",
    title: featuredProject.title,
    category: "Engineering",
    tagline: featuredProject.status,
    description: featuredProject.description,
    technologies: featuredProject.technologies,
    image: featuredProject.image,
    website: "",
    github: featuredProject.github,
    status: featuredProject.status,
  },
];

export default function SelectedWork() {
  const [filter, setFilter] = useState("All");

  const allWork = useMemo(() => [...selectedWork, ...engineeringAsWork], []);

  const visible = filter === "All" ? allWork : allWork.filter((w) => w.category === filter);

  return (
    <section id="selected-work" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          title="Selected Work"
          subtitle="Web experiences, digital concepts, and creative experiments built beyond the classroom."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 ${
                filter === f
                  ? "border-[var(--color-brass-soft)] bg-[var(--color-brass-dim)] text-[var(--color-brass)]"
                  : "border-[var(--color-border)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visible.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
