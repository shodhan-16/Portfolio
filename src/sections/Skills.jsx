import { skillCategories } from "../data/skills";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          title="Skills"
          subtitle="An honest snapshot of what I use, what I'm practicing, and what I'm still learning — not inflated proficiency scores."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
