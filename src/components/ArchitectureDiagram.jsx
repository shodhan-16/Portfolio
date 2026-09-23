import { motion } from "framer-motion";

/**
 * Minimal system-flow diagram. `nodes` is an ordered array of
 * { label, icon: LucideIcon }. Renders vertically on mobile,
 * horizontally from md breakpoint up.
 */
export default function ArchitectureDiagram({ nodes, animated = true }) {
  return (
    <div className="card-edge relative rounded-2xl bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] p-6 md:p-8">
      <div className="flex flex-col items-stretch gap-0 md:flex-row md:items-center">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div key={node.label} className="flex flex-1 flex-col items-center md:flex-row">
              <div className="flex w-full flex-col items-center gap-2 py-3 md:py-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-cyan-soft)] bg-[var(--color-cyan-dim)] text-[var(--color-cyan)]">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <span className="mono-tag text-center text-[var(--color-ink-muted)]">
                  {node.label}
                </span>
              </div>

              {i < nodes.length - 1 && (
                <div className="flex h-8 w-full items-center justify-center md:h-auto md:w-10">
                  <svg
                    className="h-6 w-6 rotate-90 text-[var(--color-ink-faint)] md:rotate-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {animated ? (
                      <motion.path
                        d="M4 12h13m0 0-4-4m4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 * i }}
                      />
                    ) : (
                      <path
                        d="M4 12h13m0 0-4-4m4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
