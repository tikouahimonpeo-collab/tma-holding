import Link from "next/link";
import { WA, COPY } from "@/lib/brand";
import { IconWhatsApp, IconArrow } from "./icons";
import { Button } from "./Button";

export function HeroSection({
  image,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  height = "tall",
  children,
}) {
  const heightCls = {
    tall: "min-h-[85vh] md:min-h-screen",
    medium: "min-h-[60vh]",
    compact: "min-h-[45vh]",
  }[height];

  return (
    <section className={`relative ${heightCls} flex items-center overflow-hidden`}>
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tma-night via-tma-night/80 to-tma-night/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-tma-night/60 via-transparent to-transparent" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-32 w-full">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/90 font-semibold mb-6">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white tracking-tight mb-6 animate-fade-up">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-9 max-w-2xl">
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-3 items-center">
            {primaryCta && (
              <Button
                href={primaryCta.href}
                variant="primary"
                size="lg"
                iconRight={<IconArrow className="w-5 h-5" />}
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                target="_blank"
                variant="whatsapp"
                size="lg"
                iconLeft={<IconWhatsApp className="w-5 h-5" />}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
          <p className="text-white/70 text-xs mt-6 uppercase tracking-[0.2em]">
            {COPY.promise}
          </p>
          {children}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-white/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export function HeroSimple({ image, eyebrow, title, description, children }) {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden bg-tma-night">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover opacity-25"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tma-night/80 to-tma-night" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {eyebrow && (
          <p className="text-tma-electric-200 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-white/80 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
