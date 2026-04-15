import { WA } from "@/lib/brand";
import { Button } from "./Button";
import { IconWhatsApp } from "./icons";

export function CTASection({
  eyebrow = "Prêt à démarrer ?",
  title = "Parlons de votre projet dès maintenant",
  description = "Un conseiller TMA vous rappelle sous 24h. Devis gratuit, sans engagement, 100% confidentiel.",
  primaryHref = "/devis",
  primaryLabel = "Demander un devis gratuit",
  whatsappHref = WA.devis,
  whatsappLabel = "Écrire sur WhatsApp",
  image,
  dark = true,
}) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-tma-night/85" />
        </div>
      )}
      {!image && dark && (
        <div className="absolute inset-0 bg-gradient-to-br from-tma-night via-tma-night-500 to-tma-night" />
      )}
      {!dark && <div className="absolute inset-0 bg-tma-stone" />}

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8 text-center">
        <p
          className={`text-xs font-semibold tracking-[0.25em] uppercase mb-4 ${
            dark ? "text-tma-electric-200" : "text-tma-electric"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5 ${
            dark ? "text-white" : "text-tma-night"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-[17px] leading-relaxed max-w-2xl mx-auto mb-9 ${
            dark ? "text-white/70" : "text-tma-ash"
          }`}
        >
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          <Button
            href={whatsappHref}
            target="_blank"
            variant="whatsapp"
            size="lg"
            iconLeft={<IconWhatsApp className="w-5 h-5" />}
          >
            {whatsappLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
