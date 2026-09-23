import { GraduationCap, Target, CalendarDays, BookOpen } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "../components/SectionHeading";

const cards = [
  { icon: GraduationCap, label: "Education", value: profile.education },
  { icon: CalendarDays, label: "Graduation", value: profile.graduation },
  { icon: Target, label: "Focus", value: profile.focus },
  { icon: BookOpen, label: "Currently Learning", value: profile.currentlyLearning.join(" • ") },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading title="About Me" />

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
          {profile.about}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, label, value }) => (
            <div key={label} className="card-edge rounded-2xl bg-[var(--color-surface)] p-6">
              <Icon size={20} strokeWidth={1.75} className="text-[var(--color-brass)]" />
              <p className="mono-tag mt-4 text-[var(--color-ink-faint)]">{label}</p>
              <p className="mt-1.5 text-sm font-medium text-[var(--color-ink)]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
