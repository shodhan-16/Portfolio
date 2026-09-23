import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/certifications";
import SectionHeading from "../components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading title="Certifications" />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="card-edge rounded-2xl bg-[var(--color-surface)] p-6">
              <Award size={20} strokeWidth={1.75} className="text-[var(--color-cyan)]" />
              <p className="mt-4 text-sm font-medium leading-snug text-[var(--color-ink)]">{cert.name}</p>
              <p className="mt-1 text-xs text-[var(--color-ink-faint)]">{cert.issuer}</p>
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs text-[var(--color-brass)]"
                >
                  View Credential <ExternalLink size={12} />
                </a>
              ) : (
                <p className="mono-tag mt-4 text-[var(--color-ink-faint)]">Credential link coming soon</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
