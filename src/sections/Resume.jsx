import { Download } from "lucide-react";
import { profile } from "../data/profile";
import Button from "../components/Button";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";

export default function Resume() {
  return (
    <section className="py-20">
      <div className="shell">
        <div className="card-edge relative overflow-hidden rounded-3xl bg-[var(--color-surface)] px-6 py-14 text-center md:px-12">
          <div className="grid-field pointer-events-none absolute inset-0 -z-0 opacity-60" />
          <div className="relative">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)] md:text-3xl">
              Interested in my profile?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--color-ink-muted)]">
              Explore my work or download my resume for a concise overview of my skills, projects, and
              education.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={profile.resumeFile} icon={Download} iconPosition="left">
                Download Resume
              </Button>
              <Button href={profile.github} variant="outline" icon={GithubIcon} iconPosition="left">
                View GitHub
              </Button>
              <Button href={profile.linkedin} variant="outline" icon={LinkedinIcon} iconPosition="left">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
