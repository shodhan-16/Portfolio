import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "../components/SectionHeading";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "GitHub", value: "View repositories", href: profile.github, icon: GithubIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          title="Let's Connect"
          subtitle="I'm currently exploring internship and entry-level opportunities in cloud engineering and software development."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-edge group flex items-center gap-4 rounded-2xl bg-[var(--color-surface)] p-6 transition-colors duration-200 hover:border-[var(--color-brass-soft)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] text-[var(--color-brass)]">
                <Icon size={18} />
              </span>
              <span>
                <p className="mono-tag text-[var(--color-ink-faint)]">{label}</p>
                <p className="mt-0.5 text-sm font-medium text-[var(--color-ink)]">{value}</p>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
