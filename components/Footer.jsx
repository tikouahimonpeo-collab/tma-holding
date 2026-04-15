import Link from "next/link";
import { BRAND, NAV, WA, TEL, TEL_LOCAL, MAILTO } from "@/lib/brand";
import { CATEGORIES } from "@/lib/products";
import { IconWhatsApp, IconPhone, IconMail, IconMapPin, IconClock } from "./icons";

export function Footer() {
  return (
    <footer className="bg-tma-night text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Bloc CTA */}
        <div className="rounded-3xl bg-gradient-to-br from-tma-electric to-tma-night-500 p-8 md:p-12 mb-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-[0.2em] font-semibold mb-2">
                Prêt à démarrer votre projet ?
              </p>
              <h3 className="font-display text-2xl md:text-4xl font-bold leading-tight max-w-2xl">
                Parlons-en dès maintenant sur WhatsApp
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA.devis}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-tma-night px-6 py-3 font-semibold hover:bg-tma-bone transition-all hover:-translate-y-0.5 shadow-lg"
              >
                <IconWhatsApp className="w-5 h-5 text-[#25D366]" />
                Démarrer sur WhatsApp
              </a>
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-all"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>

        {/* Contenu footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Bloc marque */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              aria-label={BRAND.name}
              className="inline-flex items-center mb-5"
            >
              <span className="inline-flex items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-md">
                <img
                  src="/logo-tma.jpg"
                  alt={`${BRAND.name} — logo officiel`}
                  width={1080}
                  height={1080}
                  className="block h-20 w-20 md:h-24 md:w-24 object-contain"
                />
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {BRAND.tagline}. Construction, rénovation, revêtement, peinture professionnelle et matériaux BTP premium à Abidjan.
            </p>
            <div className="flex gap-3">
              {Object.entries(BRAND.social).map(([k, href]) => (
                <a
                  key={k}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={k}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-tma-electric transition-colors text-xs uppercase font-bold"
                >
                  {k[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.15em] text-white/60 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/devis"
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  Demande de devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Catégories TMA Shop */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.15em] text-white/60 mb-5">
              TMA Shop
            </h4>
            <ul className="space-y-3">
              {CATEGORIES.slice(1, 7).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/boutique?cat=${c.slug}`}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={WA.catalogue}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-tma-electric hover:text-white text-sm font-medium"
                >
                  <IconWhatsApp className="w-4 h-4" /> Recevoir le catalogue
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.15em] text-white/60 mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <IconMapPin className="w-5 h-5 mt-0.5 shrink-0 text-tma-electric" />
                <span>{BRAND.address.full}</span>
              </li>
              <li>
                <a
                  href={WA.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 hover:text-white"
                >
                  <IconWhatsApp className="w-5 h-5 mt-0.5 shrink-0 text-[#25D366]" />
                  <span>{BRAND.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={TEL}
                  className="flex items-start gap-3 text-white/80 hover:text-white"
                >
                  <IconPhone className="w-5 h-5 mt-0.5 shrink-0 text-tma-electric" />
                  <span>{BRAND.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={TEL_LOCAL}
                  className="flex items-start gap-3 text-white/80 hover:text-white"
                >
                  <IconPhone className="w-5 h-5 mt-0.5 shrink-0 text-tma-electric" />
                  <span>{BRAND.phoneLocal}</span>
                </a>
              </li>
              <li>
                <a
                  href={MAILTO}
                  className="flex items-start gap-3 text-white/80 hover:text-white break-all"
                >
                  <IconMail className="w-5 h-5 mt-0.5 shrink-0 text-tma-electric" />
                  <span>{BRAND.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <IconClock className="w-5 h-5 mt-0.5 shrink-0 text-tma-electric" />
                <span>{BRAND.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Baseline TMA Shop */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg md:text-xl font-bold text-white leading-tight">
              TMA Holding — votre accès direct aux meilleurs prix BTP, sans intermédiaire.
            </p>
            <p className="text-sm text-white/60 mt-2">
              Import direct Chine · Qualité pro · Livraison 45 à 50 jours à Abidjan.
            </p>
          </div>
          <a
            href={WA.catalogue}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-2.5 font-semibold hover:bg-[#1DAA52] transition-colors whitespace-nowrap"
          >
            <IconWhatsApp className="w-5 h-5" /> Commander sur WhatsApp
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {BRAND.legal.year} {BRAND.name}. Tous droits réservés. · RCCM {BRAND.legal.rccm}
          </p>
          <p>
            {BRAND.name} — Abidjan, Côte d'Ivoire · Import direct · Construction · Rénovation · TMA Shop.
          </p>
        </div>
      </div>
    </footer>
  );
}
