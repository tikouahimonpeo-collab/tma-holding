import { BRAND, WA, IMG, TEL, TEL_LOCAL, MAILTO } from "@/lib/brand";
import { HeroSimple } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import {
  IconWhatsApp,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
} from "@/components/icons";

export const metadata = {
  title: "Contact TMA Holding | Entreprise BTP Cocody Riviera Palmeraie Abidjan",
  description:
    "Contactez TMA Holding à Abidjan : WhatsApp +86 132 65 91 24 68, +225 05 85 31 81 52, email tmaholdingci@gmail.com. Bureau Cocody Riviera Palmeraie. Réponse sous 24 h.",
  keywords: [
    "contact TMA Holding",
    "entreprise BTP Cocody",
    "adresse TMA Holding Abidjan",
    "WhatsApp BTP Côte d'Ivoire",
  ],
  alternates: { canonical: "https://tma-holding.net/contact" },
  openGraph: {
    title: "Contact TMA Holding — BTP Abidjan",
    description:
      "Cocody Riviera Palmeraie · WhatsApp · Téléphone · Email · Formulaire.",
    url: "https://tma-holding.net/contact",
  },
};

const QUICK_ACTIONS = [
  {
    icon: IconWhatsApp,
    title: "WhatsApp Business",
    value: BRAND.phone,
    desc: "Réponse immédiate, disponible 7j/7",
    href: WA.general,
    cta: "Ouvrir WhatsApp",
    variant: "whatsapp",
    external: true,
  },
  {
    icon: IconPhone,
    title: "Ligne Côte d'Ivoire",
    value: BRAND.phoneLocal,
    desc: "Appel local pendant les heures ouvrées",
    href: TEL_LOCAL,
    cta: "Appeler maintenant",
    variant: "dark",
  },
  {
    icon: IconMail,
    title: "Email",
    value: BRAND.email,
    desc: "Réponse sous 24 h ouvrées",
    href: MAILTO,
    cta: "Envoyer un email",
    variant: "light",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSimple
        image={IMG.heroContact}
        eyebrow="Contact"
        title="Parlons de votre projet."
        description="Une question, une idée, un chantier à lancer ? Notre équipe vous répond sous 24 h. WhatsApp privilégié pour une réponse immédiate."
      />

      {/* ACTIONS RAPIDES */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUICK_ACTIONS.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-tma-stone bg-white p-7 hover:border-tma-electric hover:shadow-premium transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tma-electric/10 text-tma-electric mb-5">
                  <a.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-tma-night mb-1">
                  {a.title}
                </h3>
                <p className="text-sm text-tma-ash mb-1">{a.desc}</p>
                <p className="font-semibold text-tma-night mb-5">{a.value}</p>
                <Button
                  href={a.href}
                  target={a.external ? "_blank" : undefined}
                  variant={a.variant}
                  size="sm"
                  className="w-full"
                >
                  {a.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULAIRE + INFOS */}
      <section className="py-16 md:py-20 bg-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-tma-night mb-3">
              Écrivez-nous
            </h2>
            <p className="text-tma-ash mb-8">
              Ce formulaire génère un message WhatsApp prérempli avec vos informations. Plus rapide, plus direct.
            </p>
            <ContactForm />
          </div>

          <aside className="space-y-6">
            {/* Adresse */}
            <div className="rounded-2xl bg-white border border-tma-stone p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-tma-electric/10 text-tma-electric mb-4">
                <IconMapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-tma-night mb-2">
                Notre adresse
              </h3>
              <p className="text-tma-ash text-sm leading-relaxed">
                {BRAND.address.line1}
                <br />
                {BRAND.address.city}, {BRAND.address.country}
              </p>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-tma-electric hover:text-tma-night"
              >
                Voir sur Google Maps →
              </a>
            </div>

            {/* Horaires */}
            <div className="rounded-2xl bg-white border border-tma-stone p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-tma-electric/10 text-tma-electric mb-4">
                <IconClock className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-tma-night mb-2">
                Horaires
              </h3>
              <ul className="space-y-1 text-sm text-tma-ash">
                <li className="flex justify-between">
                  <span>Lundi – Vendredi</span>
                  <span className="font-semibold text-tma-night">08h – 19h</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-semibold text-tma-night">08h – 17h</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-semibold text-tma-night">Fermé</span>
                </li>
              </ul>
              <p className="text-xs text-tma-electric mt-4">
                WhatsApp disponible 7j/7 pour urgences et demandes rapides.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* CARTE (bloc adresse visuel) */}
      <section className="relative h-[400px] bg-tma-night">
        <div className="absolute inset-0 grid place-items-center px-4">
          <div className="text-center text-white">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-tma-electric">
              <IconMapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
              {BRAND.address.full}
            </h3>
            <p className="text-white/60 mb-5">
              Accès par l'Échangeur de la Riviera · Parking privé
            </p>
            <Button
              href={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.address.full)}`}
              target="_blank"
              variant="primary"
              size="lg"
            >
              Itinéraire sur Google Maps
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <img
            src={IMG.chantier}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
