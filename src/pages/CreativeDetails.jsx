import { useParams, Link } from "react-router-dom";
import { creativeWork, creativeCaseStudyTimeline, creativeCaseStudies } from "../data/creativeWork";
import CaseStudyHeader from "../components/CaseStudyHeader";
import CaseStudySection from "../components/CaseStudySection";

export default function CreativeDetails() {
  const { slug } = useParams();
  const work = creativeWork.find((w) => w.slug === slug);
  const caseStudy = creativeCaseStudies[slug];

  if (!work || !caseStudy) {
    return (
      <div className="shell pt-40 pb-24 text-center">
        <p className="text-[var(--color-ink-muted)]">This project isn't available yet.</p>
        <Link to="/#creative" className="mt-4 inline-block text-[var(--color-brass)]">
          Back to Creative Work
        </Link>
      </div>
    );
  }

  return (
    <div>
      <CaseStudyHeader
        backTo="/#creative"
        backLabel="Back to Creative Work"
        title={work.title}
        subtitle={work.category}
      />

      <div className="shell pb-24">
        {work.video ? (
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black">
            <video src={work.video} controls preload="metadata" className="w-full" style={{ aspectRatio: "4/3" }}>
              Your browser does not support embedded video.
            </video>
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink-faint)]" style={{ aspectRatio: "4/3" }}>
            <span className="mono-tag">Video coming soon</span>
          </div>
        )}

        {/* Production timeline */}
        <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-3 border-y border-[var(--color-border-soft)] py-6">
          {creativeCaseStudyTimeline.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="mono-tag rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-ink-muted)]">
                {step}
              </span>
              {i < creativeCaseStudyTimeline.length - 1 && (
                <span className="text-[var(--color-ink-faint)]">→</span>
              )}
            </div>
          ))}
        </div>

        <CaseStudySection number="01" title="Objective" body={caseStudy.objective} />
        <CaseStudySection number="02" title="Creative Direction" body={caseStudy.creativeDirection} />
        <CaseStudySection number="03" title="Storyboard" body={caseStudy.storyboard} />
        <CaseStudySection number="04" title="Editing Process" body={caseStudy.editingProcess} />
        <CaseStudySection number="05" title="Tools">
          <div className="mt-3 flex flex-wrap gap-2">
            {caseStudy.tools.map((tool) => (
              <span key={tool} className="mono-tag rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-ink-muted)]">
                {tool}
              </span>
            ))}
          </div>
        </CaseStudySection>
        <CaseStudySection number="06" title="Result" body={caseStudy.result} />
        <CaseStudySection number="07" title="What I Learned" body={caseStudy.learned} />
      </div>
    </div>
  );
}
