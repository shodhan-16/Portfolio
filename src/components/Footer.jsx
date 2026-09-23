import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-soft)] py-10">
      <div className="shell flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-base font-semibold tracking-[0.14em] text-[var(--color-ink)]">SHODHAN</p>
          <p className="mono-tag mt-1 text-[var(--color-ink-faint)]">Building. Learning. Creating.</p>
        </div>

        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
            <Mail size={18} />
          </a>
        </div>

        <p className="mono-tag text-[var(--color-ink-faint)]">© 2026 Shodhan</p>
      </div>
    </footer>
  );
}
