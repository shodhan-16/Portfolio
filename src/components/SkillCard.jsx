import { levelLabels } from "../data/skills";

const dotToneByLevel = {
  learning: "bg-[var(--color-ink-faint)]",
  practicing: "bg-[var(--color-cyan)]",
  project: "bg-[var(--color-brass)]",
};

export default function SkillCard({ category }) {
  return (
    <div className="card-edge rounded-2xl bg-[var(--color-surface)] p-6">
      <h3 className="text-sm font-semibold text-[var(--color-ink)]">{category.label}</h3>
      <ul className="mt-4 space-y-3">
        {category.skills.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between gap-3">
            <span className="text-sm text-[var(--color-ink-muted)]">{skill.name}</span>
            <span className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${dotToneByLevel[skill.level]}`} />
              <span className="mono-tag text-[var(--color-ink-faint)]">
                {levelLabels[skill.level]}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
