import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { selectedWork, nuvoroCaseStudy, nexovaCaseStudy } from "../data/selectedWork";
import CaseStudyHeader from "../components/CaseStudyHeader";
import CaseStudySection from "../components/CaseStudySection";
import ImageFrame from "../components/ImageFrame";
import { GithubIcon } from "../components/SocialIcons";
import { ArrowUpRight, Play } from "lucide-react";

const caseStudies = {
  nuvoro: nuvoroCaseStudy,
  nexova: nexovaCaseStudy,
};

export default function WorkDetails() {
  const { slug } = useParams();
  const caseStudy = caseStudies[slug];
  const work = selectedWork.find((w) => w.slug === slug);

  if (!caseStudy) {
    return (
      <div className="shell pt-40 pb-24 text-center">
        <p className="text-[var(--color-ink-muted)]">This case study isn't available yet.</p>
        <Link to="/#selected-work" className="mt-4 inline-block text-[var(--color-brass)]">
          Back to Selected Work
        </Link>
      </div>
    );
  }

  const productImages = caseStudy.media?.productImages || [];
  const productVideo = caseStudy.media?.video;

  return (
    <div>
      <CaseStudyHeader
        backTo="/#selected-work"
        backLabel="Back to Selected Work"
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        status={work?.status}
      />

      <div className="shell pb-24">
        {work?.image && (
          <div className="border-b border-[var(--color-border-soft)] pb-10">
            <ImageFrame src={work.image} alt={`${work.title} hero`} label={work.imageLabel || work.title} ratio="21/9" />
          </div>
        )}

        {work?.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-2 border-b border-[var(--color-border-soft)] py-8">
            {work.technologies.map((tech) => (
              <span key={tech} className="mono-tag rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-ink-muted)]">
                {tech}
              </span>
            ))}
          </div>
        )}

        {productImages.length > 0 && (
          <section className="border-b border-[var(--color-border-soft)] py-10 md:py-14" aria-labelledby="product-gallery-title">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <span className="mono-tag text-[var(--color-brass)]">PRODUCT SHOWCASE</span>
                <h2 id="product-gallery-title" className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">Product Images</h2>
              </div>
              <span className="mono-tag hidden text-[var(--color-ink-faint)] sm:block">{productImages.length} SLOTS</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {productImages.map((image) => (
                <ImageFrame
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  label={image.label}
                  ratio="3/4"
                />
              ))}
            </div>
          </section>
        )}

        {productVideo && (
          <section className="border-b border-[var(--color-border-soft)] py-10 md:py-14" aria-labelledby="product-video-title">
            <div className="mb-6">
              <span className="mono-tag text-[var(--color-brass)]">MOTION</span>
              <h2 id={work.video} className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">Product Video</h2>
            </div>
            <ProductVideo video={productVideo} />
          </section>
        )}

        {caseStudy.sections.map((section) => (
          <CaseStudySection key={section.number} number={section.number} title={section.title} body={section.body} />
        ))}

        {(work?.website || work?.github) && (
          <div className="flex flex-wrap gap-4 border-t border-[var(--color-border-soft)] pt-10">
            {work.website && (
              <a href={work.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[var(--color-brass)]">
                Visit {work.title} Website <ArrowUpRight size={15} />
              </a>
            )}
            {work.github && (
              <a href={work.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
                <GithubIcon size={15} /> View Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductVideo({ video }) {
  const [hasVideo, setHasVideo] = useState(Boolean(video.src));

  if (!hasVideo) {
    return <VideoPlaceholder label={video.label} />;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black" style={{ aspectRatio: "16 / 9" }}>
      <video
        src={video.src}
        controls
        preload="metadata"
        className="h-full w-full"
        onError={() => setHasVideo(false)}
      >
        Your browser does not support embedded video.
      </video>
    </div>
  );
}

function VideoPlaceholder({ label }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[radial-gradient(circle_at_30%_20%,rgba(199,163,98,0.08),transparent_60%)] px-6 text-center"
      style={{ aspectRatio: "16 / 9" }}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-brass-soft)] text-[var(--color-brass)]">
        <Play size={18} fill="currentColor" />
      </span>
      <span className="mono-tag text-[var(--color-ink-faint)]">{label || "Video coming soon"}</span>
    </div>
  );
}
