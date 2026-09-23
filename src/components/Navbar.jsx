import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import Button from "./Button";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const NAV_LINKS = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  { label: "Skills", hash: "#skills" },
  { label: "Projects", hash: "#projects" },
  { label: "Selected Work", hash: "#selected-work" },
  { label: "Creative", hash: "#creative" },
  { label: "Certifications", hash: "#certifications" },
  { label: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when navigating, without a setState-in-effect:
  // adjust state directly during render when the route key changes
  // (React's documented pattern for state that depends on props).
  const routeKey = location.pathname + location.hash;
  const [prevRouteKey, setPrevRouteKey] = useState(routeKey);
  if (routeKey !== prevRouteKey) {
    setPrevRouteKey(routeKey);
    if (open) setOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-[var(--color-border-soft)] py-3" : "py-5"
      }`}
    >
      <nav className="shell flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold tracking-[0.14em] text-[var(--color-ink)]">
          SHODHAN
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={onHome ? link.hash : `/${link.hash}`}
                className="text-sm text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            <LinkedinIcon size={18} />
          </a>
          <Button href={profile.resumeFile} variant="outline">
            Resume
          </Button>
        </div>

        <button
          type="button"
          className="text-[var(--color-ink)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-[var(--color-border-soft)] lg:hidden">
          <ul className="shell flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={onHome ? link.hash : `/${link.hash}`}
                  className="block rounded-lg px-2 py-2.5 text-[var(--color-ink-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-4 px-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-[var(--color-ink-muted)]">
                <GithubIcon size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-[var(--color-ink-muted)]">
                <LinkedinIcon size={18} />
              </a>
              <Button href={profile.resumeFile} variant="outline" className="ml-auto">
                Resume
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
