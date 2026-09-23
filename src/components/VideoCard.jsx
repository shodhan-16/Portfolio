import { useState } from "react";
import { Play, Clapperboard } from "lucide-react";
import { Link } from "react-router-dom";

export default function VideoCard({ work, large = false }) {
  const { slug, title, category, thumbnail, video, description } = work;
  const [playing, setPlaying] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);

  return (
    <div
      className={`group card-edge overflow-hidden rounded-2xl bg-[var(--color-surface)] transition-all duration-300 hover:border-[var(--color-brass-soft)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] ${
        large ? "" : ""
      }`}
    >
      <div
        className="relative w-full overflow-hidden bg-black"
        style={{ aspectRatio: "4/3" }}
      >
        {playing && video ? (
          <video
            src={video.src}
            controls
            autoPlay
            preload="metadata"
            className="h-full w-full object-cover"
          >
            Your browser does not support embedded video.
          </video>
        ) : (
          <button
            type="button"
            onClick={() => video && setPlaying(true)}
            aria-label={video ? `Play ${title}` : `${title} video coming soon`}
            aria-disabled={!video}
            className="relative flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_40%,rgba(199,163,98,0.10),transparent_65%)]"
          >
            {thumbnail && !thumbFailed ? (
              <img
                src={thumbnail}
                alt={`${title} thumbnail`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
                onError={() => setThumbFailed(true)}
              />
            ) : (
              <Clapperboard
                size={28}
                strokeWidth={1.5}
                className="absolute left-5 top-5 text-[var(--color-ink-faint)]"
              />
            )}
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-brass-soft)] bg-[color-mix(in_srgb,var(--color-bg)_70%,transparent)] text-[var(--color-brass)] transition-transform duration-200 group-hover:scale-105">
              <Play size={20} fill="currentColor" />
            </span>
          </button>
        )}
      </div>

      <div className="p-6">
        <p className="mono-tag text-[var(--color-brass)]">{category}</p>
        <h3 className="mt-1 text-xl font-semibold text-[var(--color-ink)]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{description}</p>
        <Link
          to={`/work/creative/${slug}`}
          className="mt-4 inline-flex items-center text-sm text-[var(--color-cyan)] hover:underline"
        >
          View project details
        </Link>
      </div>
    </div>
  );
}
