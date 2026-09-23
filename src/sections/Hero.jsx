import { motion } from "framer-motion";
import { User, Monitor, Network, Cloud, Database } from "lucide-react";
import { profile } from "../data/profile";
import Button from "../components/Button";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import { GithubIcon } from "../components/SocialIcons";

const flow = [
  { label: "User", icon: User },
  { label: "Application", icon: Monitor },
  { label: "API", icon: Network },
  { label: "Cloud", icon: Cloud },
  { label: "Database", icon: Database },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="grid-field pointer-events-none absolute inset-0 -z-10" />

      <div className="shell grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mono-tag text-[var(--color-cyan)]">{profile.role}</p>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-[var(--color-ink)] md:text-6xl">
            I build practical software
            <br className="hidden md:block" /> &amp; cloud solutions.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
            {profile.subheadline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.techLabels.map((tech) => (
              <span
                key={tech}
                className="mono-tag rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-ink-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projects" variant="primary">
              View My Work
            </Button>
            <Button href={profile.resumeFile} variant="outline">
              Download Resume
            </Button>
            <Button href={profile.github} variant="ghost" icon={GithubIcon} iconPosition="left">
              GitHub
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <ArchitectureDiagram nodes={flow} animated={false} />
          <p className="mono-tag mt-3 text-center text-[var(--color-ink-faint)]">
            a simplified view of how the systems I build fit together
          </p>
        </motion.div>
      </div>
    </section>
  );
}
