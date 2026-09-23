const toneByStatus = {
  Completed: "text-[var(--color-cyan)] border-[var(--color-cyan-soft)]",
  "In Progress": "text-[var(--color-brass)] border-[var(--color-brass-soft)]",
  "In Development": "text-[var(--color-brass)] border-[var(--color-brass-soft)]",
  Concept: "text-[var(--color-ink-muted)] border-[var(--color-border)]",
  Experiment: "text-[var(--color-ink-muted)] border-[var(--color-border)]",
  Ongoing: "text-[var(--color-cyan)] border-[var(--color-cyan-soft)]",
  Planned: "text-[var(--color-ink-faint)] border-[var(--color-border)]",
};

export default function StatusBadge({ status }) {
  const tone = toneByStatus[status] || "text-[var(--color-ink-muted)] border-[var(--color-border)]";
  return (
    <span className={`mono-tag inline-flex items-center rounded-full border px-2.5 py-1 ${tone}`}>
      {status}
    </span>
  );
}
