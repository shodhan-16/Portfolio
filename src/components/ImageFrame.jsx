import { useState } from "react";
import { ImageIcon } from "lucide-react";

/**
 * Renders an image from /public, falling back to a styled placeholder
 * if the asset hasn't been added yet. This keeps the site from ever
 * showing a broken-image icon while real assets are being collected.
 */
export default function ImageFrame({ src, alt, label, ratio = "16/10", className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!failed && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_30%_20%,rgba(199,163,98,0.08),transparent_60%)]">
          <ImageIcon size={22} strokeWidth={1.5} className="text-[var(--color-ink-faint)]" />
          <span className="mono-tag text-[var(--color-ink-faint)]">
            {label || "Image coming soon"}
          </span>
        </div>
      )}
    </div>
  );
}
