import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "../components/SectionHeading";
import { GithubIcon } from "../components/SocialIcons";
import Button from "../components/Button";

const categories = ["Engineering", "Python", "Web", "Portfolio"];

export default function GitHubSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading title="Building in Public" subtitle="Explore my projects, experiments, and continuous learning." />

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="mono-tag rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-ink-muted)]"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="card-edge mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[var(--color-surface)] p-6 md:flex-row md:items-center md:p-8">
          <div className="flex items-center gap-4">
            <GithubIcon size={28} className="text-[var(--color-ink)]" />
            <div>
              <p className="text-sm font-medium text-[var(--color-ink)]">@{profile.github.split("/").pop()}</p>
              <p className="mt-0.5 text-xs text-[var(--color-ink-faint)]">
                Repositories update as projects are built and pushed.
              </p>
            </div>
          </div>
          <Button href={profile.github} icon={ArrowUpRight}>
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
