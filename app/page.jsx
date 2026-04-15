import Link from "next/link";
import { BRAND, WA, IMG, COPY } from "@/lib/brand";
import { SERVICES } from "@/lib/services";
import { featuredProducts, CATEGORIES } from "@/lib/products";
import { PROJECTS } from "@/lib/projects";
import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCard } from "@/components/ProductCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { StatsSection } from "@/components/StatsSection";
import { Button } from "@/components/Button";
import {
  IconWhatsApp,
  IconArrow,
  IconShield,
  IconAward,
  IconClock,
  IconSparkle,
  IconHammer,
  IconBuilding,
  IconPaintBrush,
  IconCompass,
  IconLayers,
  IconPackage,
  IconShop,
  IconCheck,
} from "@/components/icons";

export const metadata = {
  title: "Accueil — Construction, rénovation & matériaux premium à Abidjan",
  description:
    "TMA Holding, entreprise BTP premium à Abidjan : construction, rénovation, revêtement, peinture professionnelle, conception 2D/3D et matériaux BTP via TMA Shop. Devis gratuit sous 24 h.",
};

const STATS = [
  { k: "650+", v: "Projets livrés" },
  { k: "98%", v: "Clients satisfaits" },
  { k: "10 ans", v: "D'expertise BTP" },
  { k: "24 h", v: "Réponse garantie" },
];

const CREDIBILITY = [
  { icon: IconShield, title: "Expertise & délais tenus", desc: "Chaque chantier piloté par un conducteur de travaux dédié. Respect rigoureux des budgets et des échéances." },
  { icon: IconAward, title: "Qualité garantie", desc: "Matériaux sélectionnés, finitions premium, garantie décennale. Une exigence à tous les niveaux." },
  { icon: IconSparkle, title: "Solutions sur mesure", desc: "Chaque projet est unique. Nous concevons avec vous, dans votre budget, à votre image." },
  { icon: IconClock, title: "Accompagnement complet", desc: "De l'étude à la livraison, un interlocuteur unique. Transparence et sérénité à chaque étape." },
];

const SERVICE_ICONS = {
  construction: IconBuilding,
  renovation: IconHammer,
  peinture: IconPaintBrush,
  enduit: IconLayers,
  conception: IconCompass,
  revetement: IconLayers,
  importation: IconPackage,
};

const TESTIMONIALS = [
  {
    quote:
      "Livraison en avance de deux semaines, budget respecté au centime près. TMA Holding m'a accompagné depuis la diaspora avec un professionnalisme impeccable.",
    author: "Ibrahim K.",
    role: "Entrepreneur — Villa Cocody",
    avatar: IMG.client1,
  },
  {
    quote:
      "Une rénovation qui a totalement transformé notre maison. Les équipes sont propres, ponctuelles, et les finitions d'un niveau exceptionnel.",
    author: "Aminata D.",
    role: "Propriétaire — Rénovation Riviera",
    avatar: IMG.client3,
  },
  {
    quote:
      "TMA Shop nous a fourni tout le carrelage et les sanitaires haut de gamme pour notre résidence de 12 appartements. Prix imbattable et qualité au rendez-vous.",
    author: "Fatou N.",
    role: "Promoteur immobilier",
    avatar: IMG.client2,
  },
];

const PROCESS = [
  { n: "01", title: "Prise de contact", desc: "Vous nous appelez ou écrivez sur WhatsApp. Réponse sous 24 h ouvrées." },
  { n: "02", title: "Étude & devis", desc: "Visite, analyse, chiffrage détaillé et transparent. Sans engagement." },
  { n: "03", title: "Planification", desc: "Validation du plan, des matériaux et du calendrier. Lancement du chantier." },
  { n: "04", title: "Exécution", desc: "Travaux sous la supervision d'un conducteur dédié. Reportings hebdomadaires." },
  { n: "05", title: "Livraison", desc: "Contrôle final, réception clé en main, mise en service. Satisfaction garantie." },
];

export default function HomePage() {
  const featured = featuredProducts().slice(0, 8);
  const recentProjects = PROJECTS.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <HeroSection
        image={IMG.heroHome}
        eyebrow="🇨🇮 Abidjan · Côte d'Ivoire"
        title="Construisez avec excellence."
        description="TMA Holding — entreprise BTP premium à Abidjan. Construction, rénovation, revêtement, conception 2D/3D et matériaux via TMA Shop. L'excellence du bâti, sur mesure."
        primaryCta={{ href: "/devis", label: COPY.ctaDevisLong }}
        secondaryCta={{ href: WA.devis, label: "Écrire sur WhatsApp" }}
      >
        <div className="mt-12 hidden md:block">
          <StatsSection stats={STATS} light />
        </div>
      </HeroSection>

      {/* CRÉDIBILITÉ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-end justify-between mb-14">
            <SectionTitle
              eyebrow="Pourquoi TMA Holding"
              title="L'excellence du BTP, à portée de chantier."
              description="Nous construisons, rénovons et équipons des ouvrages haut de gamme en Côte d'Ivoire. Nos clients ne reviennent pas : ils nous recommandent."
              className="max-w-2xl"
            />
            <Button href="/a-propos" variant="outlineDark" iconRight={<IconArrow className="w-4 h-4" />}>
              Découvrir le Groupe
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREDIBILITY.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-tma-stone bg-tma-bone p-7 transition-all hover:border-tma-electric hover:bg-white hover:shadow-premium hover:-translate-y-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-tma-electric/10 text-tma-electric">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-tma-night mb-2">
                  {title}
                </h3>
                <p className="text-sm text-tma-ash leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PRINCIPAUX */}
      <section className="py-20 md:py-28 bg-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-14">
            <SectionTitle
              eyebrow="Nos métiers"
              title="Un interlocuteur unique, des expertises complètes."
              description="De la conception à la livraison, en passant par le sourcing des matériaux : TMA Holding maîtrise toute la chaîne du bâtiment haut de gamme."
            />
            <Button href="/services" variant="dark" size="md" iconRight={<IconArrow className="w-4 h-4" />}>
              Tous nos services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} compact />
            ))}
          </div>
        </div>
      </section>

      {/* TMA SHOP mise en avant */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-tma-electric mb-4">
                <IconShop className="w-4 h-4" /> TMA Shop · E-commerce BTP
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] text-tma-night tracking-tight">
                Matériel BTP premium. <br />
                <span className="text-tma-electric">Jusqu'à -40 % grâce à l'import direct.</span>
              </h2>
              <p className="mt-5 text-[17px] text-tma-ash leading-relaxed max-w-xl">
                Carreaux, sanitaires, cuisines, robinetterie, matériaux : sourcés directement chez les fabricants, sans intermédiaire. Livraison 45 à 50 jours. Commandez sur WhatsApp.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {CATEGORIES.slice(1, 10).map((c) => (
                <Link
                  key={c.slug}
                  href={`/boutique?cat=${c.slug}`}
                  className="rounded-xl border border-tma-stone bg-tma-bone p-4 text-center hover:bg-tma-night hover:text-white hover:border-tma-night transition-all"
                >
                  <p className="text-xs font-semibold">{c.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            <Button href="/boutique" variant="dark" size="lg" iconRight={<IconArrow className="w-5 h-5" />}>
              Voir tout le catalogue
            </Button>
            <Button
              href={WA.catalogue}
              target="_blank"
              variant="whatsapp"
              size="lg"
              iconLeft={<IconWhatsApp className="w-5 h-5" />}
            >
              Recevoir le catalogue complet
            </Button>
          </div>
        </div>
      </section>

      {/* POURQUOI CHOISIR + STATS */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-tma-night">
        <div className="absolute inset-0 opacity-25">
          <img src={IMG.chantier} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-tma-night/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <SectionTitle
              eyebrow="L'effet TMA"
              title="Un niveau de qualité qu'on ne voit plus."
              description="Pourquoi 98 % de nos clients recommandent TMA Holding ? Parce que nous bâtissons comme si chaque projet était le nôtre."
              light
            />
            <ul className="space-y-4">
              {[
                "Conducteur de travaux dédié — 1 référent, 0 excuse",
                "Sourcing matériaux en direct Europe / Asie — prix fabricant",
                "Chantiers propres, ponctuels, reportings hebdomadaires",
                "Garantie décennale sur toute construction neuve",
                "Paiements sécurisés, étapes validées ensemble",
                "Service après-livraison pendant 12 mois",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-white/90">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-tma-electric text-white shrink-0">
                    <IconCheck className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <StatsSection stats={STATS} light />
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Process client"
            title="De l'idée à la remise des clés — 5 étapes claires."
            description="Un parcours transparent, sans mauvaise surprise. Vous savez toujours où en est votre projet."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PROCESS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-tma-stone p-6 hover:border-tma-electric hover:shadow-premium transition-all"
              >
                <p className="font-display text-4xl font-bold text-tma-electric mb-3">{s.n}</p>
                <h3 className="font-display text-base font-bold text-tma-night mb-2">{s.title}</h3>
                <p className="text-sm text-tma-ash leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section className="py-20 md:py-28 bg-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-14">
            <SectionTitle
              eyebrow="Réalisations"
              title="Ce que nous avons bâti, ce que nous bâtissons pour vous."
            />
            <Button href="/realisations" variant="dark" iconRight={<IconArrow className="w-4 h-4" />}>
              Toutes nos réalisations
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Ils nous ont fait confiance"
            title="Des clients qui parlent mieux que nous."
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTASection
        eyebrow="Votre projet mérite le meilleur"
        title="Lançons votre chantier ensemble."
        description="Un conseiller TMA vous rappelle sous 24 h. Devis 100 % gratuit, 100 % confidentiel, sans engagement."
        image={IMG.heroServices}
      />
    </>
  );
}
