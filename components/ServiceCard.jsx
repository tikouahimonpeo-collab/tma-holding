import Link from "next/link";
import { WA } from "@/lib/brand";
import { IconArrow, IconWhatsApp, IconCheck } from "./icons";

export function ServiceCard({ service, compact = false }) {
  return (
    <article
      id={service.slug}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-tma-stone shadow-sm hover:shadow-premium transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-52 md:h-60 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tma-night/70 via-tma-night/10 to-transparent" />
        <div className="absolute bottom-4 left-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-semibold">
            Service
          </p>
          <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-tma-electric font-semibold mb-2">
          {service.tagline}
        </p>
        <p className="text-[15px] text-tma-ash leading-relaxed mb-5">
          {service.short}
        </p>

        {!compact && (
          <ul className="space-y-2 mb-6">
            {service.bullets.slice(0, 4).map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-[14px] text-tma-night">
                <IconCheck className="w-4 h-4 mt-0.5 text-tma-electric shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <a
            href={WA.service(service.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#25D366] hover:text-tma-night transition-colors"
          >
            <IconWhatsApp className="w-4 h-4" /> WhatsApp
          </a>
          <span className="text-tma-stone">·</span>
          <Link
            href="/devis"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-tma-night hover:text-tma-electric transition-colors"
          >
            Devis gratuit
          </Link>
          <span className="text-tma-stone">·</span>
          <Link
            href={`/services#${service.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-tma-ash hover:text-tma-night transition-colors"
          >
            Détails <IconArrow className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
