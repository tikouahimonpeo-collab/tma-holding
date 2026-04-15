import Link from "next/link";
import { WA, IMG } from "@/lib/brand";
import { featuredProducts, CATEGORIES } from "@/lib/products";
import { HeroSimple } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductCard } from "@/components/ProductCard";
import { ProductGrid } from "@/components/ProductGrid";
import { Button } from "@/components/Button";
import {
  IconWhatsApp,
  IconArrow,
  IconPackage,
  IconCheck,
  IconShield,
  IconAward,
  IconSparkle,
  IconShop,
  IconLayers,
  IconBuilding,
} from "@/components/icons";

export const metadata = {
  title: "TMA Shop — Matériel BTP à prix direct import (45-50 jours)",
  description:
    "Carreaux, sanitaires, cuisines, robinetterie, matériaux BTP : jusqu'à -40 % moins cher qu'à Abidjan grâce à l'import direct usine. Livraison 45 à 50 jours. Commandez sur WhatsApp.",
};

const TRUST = [
  { label: "Prix imbattables en Côte d'Ivoire" },
  { label: "Import direct fournisseur" },
  { label: "Qualité professionnelle vérifiée" },
  { label: "Livraison internationale optimisée (45-50 jours)" },
];

const WHY_CHEAP = [
  {
    icon: IconShop,
    title: "Achat direct usine",
    desc: "Nous sourçons nos matériaux directement auprès des fabricants. Pas de grossiste, pas de revendeur.",
  },
  {
    icon: IconLayers,
    title: "Zéro intermédiaire local",
    desc: "Aucune marge de distribution, aucun stock dormant, aucune commission cachée. Le prix qu'on paie, c'est le prix direct.",
  },
  {
    icon: IconAward,
    title: "Marges optimisées",
    desc: "Notre modèle : volumes groupés, opération logistique maîtrisée, coûts fixes minimes. On répercute tout sur le prix final.",
  },
  {
    icon: IconSparkle,
    title: "Commande intelligente",
    desc: "Vous commandez ce dont vous avez besoin, nous importons. Pas de surplus, pas de gaspillage, pas de prime au stock.",
  },
];

const DELIVERY_POINTS = [
  "Délais : 45 à 50 jours entre la commande et la livraison",
  "Import sécurisé depuis nos fournisseurs Chine / Asie",
  "Suivi de commande disponible à chaque étape",
  "Livraison à Abidjan et dans tout l'intérieur du pays",
];

const TRUST_POINTS = [
  {
    title: "Produits testés sur chantier réel",
    desc: "Chaque référence au catalogue est vérifiée en conditions réelles par nos équipes BTP TMA Holding avant d'être proposée.",
  },
  {
    title: "Fournisseurs sélectionnés rigoureusement",
    desc: "Nous travaillons uniquement avec des usines partenaires ayant les certifications qualité requises.",
  },
  {
    title: "Qualité contrôlée avant expédition",
    desc: "Inspection qualité systématique avant mise en container. Les produits défectueux ne quittent pas l'entrepôt.",
  },
  {
    title: "Expérience terrain BTP",
    desc: "TMA Holding pose, installe et utilise elle-même ces produits sur ses chantiers. On sait ce qui tient dans le temps.",
  },
];

export default function ShopPage({ searchParams }) {
  const initialCategory = searchParams?.cat || "all";
  const popular = featuredProducts().slice(0, 4);

  return (
    <>
      {/* HERO — positionnement prix direct import */}
      <section className="relative isolate overflow-hidden bg-tma-night pt-32 md:pt-40 pb-20 md:pb-24 text-white">
        <div className="absolute inset-0 opacity-25">
          <img
            src={IMG.heroShop}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-tma-night/95 via-tma-night/85 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-tma-electric/15 border border-tma-electric/30 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase text-tma-electric-200 mb-6">
            <IconShop className="w-4 h-4" /> TMA Shop · Import direct
          </span>
          <h1 className="font-display text-[clamp(2.2rem,5.5vw,4.2rem)] font-bold leading-[1.05] tracking-tight max-w-4xl mb-5">
            Équipez-vous en matériel BTP <span className="text-tma-electric-200">à prix direct import</span>.
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white/90 max-w-3xl mb-4">
            Jusqu'à <span className="text-tma-electric-200">-40 %</span> moins cher qu'à Abidjan.
          </p>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mb-8 leading-relaxed">
            Commandez aujourd'hui, recevez en <strong className="text-white">45 à 50 jours</strong> — qualité professionnelle garantie. L'économie vaut l'attente.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Button href="#catalogue" variant="primary" size="lg">
              Voir le catalogue
            </Button>
            <Button
              href={WA.catalogue}
              target="_blank"
              variant="whatsapp"
              size="lg"
              iconLeft={<IconWhatsApp className="w-5 h-5" />}
            >
              Commander sur WhatsApp
            </Button>
          </div>

          {/* Bloc confiance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
            {TRUST.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/15 px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tma-electric/20 text-tma-electric-200">
                  <IconCheck className="w-4 h-4" />
                </span>
                <span className="text-sm font-medium text-white">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUNCHLINE */}
      <section className="relative py-12 bg-tma-electric text-white">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <p className="font-display text-xl md:text-3xl font-bold leading-tight">
            « Vous attendez un peu plus longtemps… mais vous économisez beaucoup plus. »
          </p>
        </div>
      </section>

      {/* CATÉGORIES */}
      <section className="py-16 md:py-20 bg-white border-b border-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-tma-electric mb-6">
            Catégories populaires
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {CATEGORIES.slice(1).map((c) => (
              <Link
                key={c.slug}
                href={`#catalogue`}
                className="rounded-xl border border-tma-stone bg-tma-bone p-5 text-center hover:bg-tma-night hover:text-white hover:border-tma-night transition-all group"
              >
                <IconPackage className="mx-auto w-6 h-6 text-tma-electric group-hover:text-white mb-2" />
                <p className="text-sm font-semibold">{c.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUITS VEDETTES */}
      <section className="py-20 md:py-24 bg-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionTitle
              eyebrow="Catalogue vedette"
              title="Les produits les plus demandés."
              description="Sélection des références TMA Shop plébiscitées par architectes, promoteurs et particuliers. Tous en import direct."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popular.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI NOS PRIX SONT IMBATTABLES */}
      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Notre modèle"
            title="Pourquoi nos prix sont les plus bas du marché ?"
            description="Quatre leviers combinés pour casser les prix sur le matériel BTP en Côte d'Ivoire."
            className="mb-12 max-w-3xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHEAP.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-tma-stone bg-tma-bone p-6 hover:bg-tma-night hover:text-white group transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tma-electric/10 text-tma-electric group-hover:bg-tma-electric/20 group-hover:text-white mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-tma-night group-hover:text-white">
                  {title}
                </h3>
                <p className="text-sm text-tma-ash group-hover:text-white/80 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-tma-night text-white p-8 md:p-10 text-center shadow-premium">
            <p className="font-display text-xl md:text-2xl font-bold leading-tight">
              « Aucun magasin à Abidjan ne peut proposer ces prix à qualité équivalente. »
            </p>
          </div>
        </div>
      </section>

      {/* LIVRAISON INTERNATIONALE */}
      <section className="py-20 md:py-24 bg-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              eyebrow="Transparence"
              title="Livraison internationale — simple et sécurisée."
              description="Nous privilégions le prix le plus bas plutôt que la rapidité. Résultat : vous économisez massivement."
              className="mb-8"
            />

            <ul className="space-y-4 mb-8">
              {DELIVERY_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tma-electric/10 text-tma-electric">
                    <IconCheck className="w-4 h-4" />
                  </span>
                  <p className="text-tma-night font-medium leading-relaxed pt-1">{p}</p>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-white border border-tma-stone p-6 shadow-sm">
              <p className="text-tma-night font-semibold leading-relaxed">
                Le délai est notre atout : en choisissant l'import direct plutôt que le stock local, vous divisez votre facture. <span className="text-tma-electric">Le temps, c'est de l'argent économisé.</span>
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-[4/5] lg:aspect-square">
            <img
              src={IMG.importation || IMG.chantier}
              alt="Conteneurs de matériaux BTP importés au port d'Abidjan"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-tma-night via-tma-night/60 to-transparent">
              <p className="text-tma-electric-200 text-xs font-bold tracking-[0.25em] uppercase mb-2">
                Chaîne logistique
              </p>
              <p className="font-display text-2xl font-bold text-white leading-tight">
                Port autonome d'Abidjan · Import direct Chine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARAISON MARCHÉ LOCAL vs TMA SHOP */}
      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Comparatif"
            title="Marché local Abidjan vs TMA Shop."
            description="Pour chaque euro que vous dépensez, voici ce que vous obtenez en face."
            className="mb-12 max-w-3xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Marché local */}
            <div className="rounded-2xl border border-tma-stone bg-tma-bone p-8">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-tma-ash mb-5">
                Marché local classique
              </p>
              <h3 className="font-display text-2xl font-bold text-tma-night mb-6">
                Magasins d'Abidjan
              </h3>
              <ul className="space-y-3">
                {[
                  "Prix élevés (marges + distribution)",
                  "Catalogue produits limité",
                  "Marges grossistes + détaillants cumulées",
                  "Disponibilité restreinte, ruptures fréquentes",
                  "Peu de nouveautés, offre figée",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-tma-ash">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tma-ash/10 text-tma-ash mt-0.5">
                      ✕
                    </span>
                    <span className="text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TMA Shop */}
            <div className="rounded-2xl bg-tma-night text-white p-8 shadow-premium relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-tma-electric/20 blur-2xl" />
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-tma-electric-200 mb-5">
                TMA Shop · Import direct
              </p>
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Notre approche
              </h3>
              <ul className="space-y-3">
                {[
                  "Prix direct import (jusqu'à -40 %)",
                  "Catalogue large et renouvelé",
                  "Produits modernes et premium",
                  "Accès direct aux fabricants",
                  "Nouveautés régulières, design international",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tma-electric text-white mt-0.5">
                      <IconCheck className="w-3 h-3" />
                    </span>
                    <span className="text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOGUE COMPLET */}
      <section id="catalogue" className="py-20 md:py-24 bg-tma-stone scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Catalogue complet"
            title="Explorez toutes nos références."
            description="Recherche en temps réel, filtres par catégorie. Chaque fiche permet de demander le prix ou commander directement sur WhatsApp."
            className="mb-10"
          />
          <ProductGrid initialCategory={initialCategory} />
        </div>
      </section>

      {/* PREUVE & CONFIANCE */}
      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Garanties"
            title="Pourquoi nous faire confiance ?"
            description="Import direct, mais zéro compromis sur la qualité. Voici comment nous sélectionnons ce que nous vous vendons."
            className="mb-12 max-w-3xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRUST_POINTS.map(({ title, desc }) => (
              <div
                key={title}
                className="flex gap-5 rounded-2xl border border-tma-stone bg-tma-bone p-7 hover:border-tma-electric transition-colors"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tma-electric text-white">
                  <IconShield className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-tma-night mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-tma-ash leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGUE PDF */}
      <section className="py-20 bg-tma-night relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.equipement} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 md:px-8 text-center">
          <p className="text-tma-electric-200 text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Plus de 2 500 références
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Besoin du catalogue complet ? Demandez-le sur WhatsApp.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Notre catalogue PDF détaillé (prix, dimensions, disponibilités) vous est envoyé gratuitement en quelques minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href={WA.catalogue}
              target="_blank"
              variant="whatsapp"
              size="lg"
              iconLeft={<IconWhatsApp className="w-5 h-5" />}
            >
              Recevoir le catalogue PDF
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-24 bg-tma-electric text-white">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <p className="text-white/80 text-xs font-bold tracking-[0.25em] uppercase mb-4">
            TMA Shop — accès direct
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-5">
            Accédez aux meilleurs prix BTP dès aujourd'hui.
          </h2>
          <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
            Un devis WhatsApp, une commande, puis 45 à 50 jours plus tard votre matériel est à Abidjan. L'économie fait le reste.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="#catalogue" variant="dark" size="lg">
              Voir le catalogue
            </Button>
            <Button
              href={WA.catalogue}
              target="_blank"
              variant="whatsapp"
              size="lg"
              iconLeft={<IconWhatsApp className="w-5 h-5" />}
            >
              Commander maintenant
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
