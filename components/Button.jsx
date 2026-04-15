import Link from "next/link";

// Bouton premium réutilisable. Supporte link interne, lien externe, action.
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

const variants = {
  primary:
    "bg-tma-electric text-white hover:bg-tma-electric-500 shadow-premium hover:shadow-lg hover:-translate-y-0.5 focus:ring-tma-electric/40",
  dark:
    "bg-tma-night text-white hover:bg-tma-night-500 shadow-premium hover:shadow-lg hover:-translate-y-0.5 focus:ring-tma-night/30",
  light:
    "bg-white text-tma-night border border-tma-stone hover:border-tma-night hover:-translate-y-0.5 shadow-sm hover:shadow focus:ring-tma-night/20",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-tma-night focus:ring-white/40",
  outlineDark:
    "border-2 border-tma-night text-tma-night hover:bg-tma-night hover:text-white focus:ring-tma-night/20",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1DAA52] shadow-premium hover:shadow-lg hover:-translate-y-0.5 focus:ring-[#25D366]/40",
  ghost:
    "text-tma-night hover:text-tma-electric underline-offset-4 hover:underline",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  target,
  rel,
  className = "",
  type = "button",
  iconLeft,
  iconRight,
  ...rest
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={cls}
          {...rest}
        >
          {iconLeft}
          {children}
          {iconRight}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
