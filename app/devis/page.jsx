import { BRAND, WA, IMG } from "@/lib/brand";
import { HeroSimple } from "@/components/HeroSection";
import { QuoteForm } from "@/components/QuoteForm";
import { Button } from "@/components/Button";
import {
  IconWhatsApp,
  IconCheck,
  IconShield,
  IconClock,
  IconSparkle,
} from "@/components/icons";

export const metadata = {
  title: "Devis BTP Gratuit Abidjan | Construction, Rénovation, Matériaux",
  description:
    "Obtenez un devis BTP gratuit sous 24 h à Abidjan : construction villa, rénovation, peinture, conception 2D/3D, matériaux import direct. Sans engagement, 100 % confidentiel. TMA Holding.",
  keywords: [
    "devis construction Abidjan",
    "devis rénovation Abidjan",
    "devis BTP gratuit Côte d'Ivoire",
    "chiffrage villa Cocody",
    "prix construction Abidjan",
  ],
  alternates: { canonical: "https://tma-holding.net/devis" },
  openGraph: {
    title: "Devis BTP gratuit en 24 h — TMA Holding Abidjan",
    description: "Construction, rénovation, matériaux : votre projet chiffré gratuitement.",
    url: "https://tma-holding.net/devis",
  },
};

const REASSURANCE = [
  { icon: IconClock, title: "Réponse sous 24 h", desc: "Un conseiller TMA analyse votre demande et vous revient rapidement." },
  { icon: IconShield, title: "100 % gratuit & confidentiel", desc: "Aucun engagement, aucun frais caché. Vos données restent privées." },
  { icon: IconSparkle, title: "Chiffrage détaillé", desc: "Budget transparent, matériaux listés, délais précis." },
];

const PROCESS = [
  "Vous remplissez ce formulaire (ou écrivez-nous directement sur WhatsApp)",
  "Un conseiller analyse votre demande et prépare un pré-chiffrage",
  "Nous organisons si besoin une visite sur place (gratuite à Abidjan)",
  "Vous recevez votre devis détaillé sous 24 à 48 h",
  "Validation ensemble, signature et lancement du chantier",
];

export default function DevisPage() {
  return (
    <>
      <HeroSimple
        image={IMG.heroServices}
        eyebrow="Demande de devis"
        title="Votre projet, chiffré gratuitement en 24 h."
        description="Construction, rénovation, peinture, revêtement, importation : décrivez-nous votre besoin, nous revenons vers vous rapidement avec une proposition claire et détaillée."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* FORMULAIRE */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>

          {/* COLONNE RASSURANCE */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-tma-night text-white p-7 shadow-premium">
              <p className="text-tma-electric-200 text-xs font-bold tracking-[0.25em] uppercase mb-3">
                Préférez WhatsApp ?
              </p>
              <h3 className="font-display text-2xl font-bold leading-tight mb-4">
                Discutez avec un conseiller en quelques minutes.
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Envoyez-nous un message sur WhatsApp. Photos, vidéos, plans : on accepte tout. Réponse en direct.
              </p>
              <Button
                href={WA.devis}
                target="_blank"
                variant="whatsapp"
                size="lg"
                iconLeft={<IconWhatsApp className="w-5 h-5" />}
                className="w-full"
              >
                Démarrer sur WhatsApp
              </Button>
              <p className="text-white/50 text-xs mt-3 text-center">
                {BRAND.phone} · Lun–Sam · 08h–19h
              </p>
            </div>

            <div className="rounded-2xl border border-tma-stone bg-white p-7">
              <h3 className="font-display text-lg font-bold text-tma-night mb-4">
                Ce que nous offrons
              </h3>
              <ul className="space-y-3">
                {REASSURANCE.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-tma-electric/10 text-tma-electric">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-tma-night text-sm">{title}</p>
                      <p className="text-xs text-tma-ash">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-tma-stone bg-tma-stone p-7">
              <h3 className="font-display text-lg font-bold text-tma-night mb-4">
                Comment ça marche ?
              </h3>
              <ol className="space-y-3">
                {PROCESS.map((s, i) => (
                  <li key={s} className="flex gap-3 text-sm text-tma-night">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tma-night text-white text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      {/* MESSAGE INCITATIF */}
      <section className="py-20 bg-tma-stone">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <p className="text-tma-electric text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Pourquoi demander votre devis aujourd'hui ?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-tma-night leading-tight mb-6">
            Un chantier qui commence à l'heure est un chantier qui finit à l'heure.
          </h2>
          <p className="text-lg text-tma-ash leading-relaxed">
            Nos équipes sont sollicitées rapidement, surtout en haute saison. Plus vous demandez votre devis tôt, plus nous pouvons réserver les meilleures équipes et les meilleures dates pour votre projet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              href={WA.devis}
              target="_blank"
              variant="whatsapp"
              size="lg"
              iconLeft={<IconWhatsApp className="w-5 h-5" />}
            >
              Démarrer sur WhatsApp
            </Button>
            <Button href="#top" variant="dark" size="lg">
              Remplir le formulaire
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
