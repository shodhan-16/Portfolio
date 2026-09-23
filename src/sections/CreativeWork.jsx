import { creativeWork } from "../data/creativeWork";
import SectionHeading from "../components/SectionHeading";
import VideoCard from "../components/VideoCard";

export default function CreativeWork() {
  const featured = creativeWork.find((w) => w.featured) || creativeWork[0];
  const rest = creativeWork.filter((w) => w.slug !== featured?.slug);

  return (
    <section id="creative" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading title="Creative Work" subtitle="Technology isn't the only thing I build." />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-muted)]">
          I also create cinematic videos, promotional content, and visual experiences, combining
          storytelling, editing, sound, and visual design.
        </p>

        <div className="mt-10 space-y-6">
          {featured && <VideoCard work={featured} large />}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {rest.map((work) => (
                <VideoCard key={work.slug} work={work} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
