export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  const alignCls =
    align === "center" ? "text-center mx-auto" : align === "right" ? "text-right ml-auto" : "";
  return (
    <div className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.25em] uppercase mb-4 ${
            light ? "text-tma-electric-200" : "text-tma-electric"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight ${
          light ? "text-white" : "text-tma-night"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-[17px] leading-relaxed ${
            light ? "text-white/70" : "text-tma-ash"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Badge({ children, variant = "default", className = "" }) {
  const styles = {
    default: "bg-tma-stone text-tma-night",
    premium: "bg-tma-gold/20 text-tma-gold border border-tma-gold/30",
    new: "bg-tma-electric/10 text-tma-electric border border-tma-electric/20",
    import: "bg-tma-night text-white",
    whatsapp: "bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${styles[variant] || styles.default} ${className}`}
    >
      {children}
    </span>
  );
}
