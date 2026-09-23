import { forwardRef } from "react";

const variants = {
  // Solid gold at rest; on hover, shifts to the NUVORO "button gradient"
  // (gold → gold-dark) with a soft gold glow, per the style guide.
  primary:
    "bg-[var(--color-brass)] text-[#141110] border border-transparent shadow-none " +
    "hover:bg-[linear-gradient(135deg,var(--color-brass)_0%,var(--color-brass-soft)_100%)] " +
    "hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]",
  outline:
    "bg-transparent text-[var(--color-ink)] border border-[var(--color-border)] hover:border-[var(--color-brass)] hover:text-[var(--color-brass)]",
  ghost:
    "bg-transparent text-[var(--color-ink-muted)] hover:text-[var(--color-brass)] border border-transparent",
};

/**
 * Shared button used for CTAs across the site.
 * Renders an <a> when `href` is given, otherwise a <button>.
 */
const Button = forwardRef(function Button(
  { href, variant = "primary", icon: Icon, iconPosition = "right", className = "", children, ...rest },
  ref
) {
  const classes = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-all duration-200 ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={16} strokeWidth={2} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={16} strokeWidth={2} />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} {...rest}>
      {content}
    </button>
  );
});

export default Button;
