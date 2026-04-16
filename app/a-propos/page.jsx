import { BRAND, WA, IMG } from "@/lib/brand";
import { HeroSimple } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { CTASection } from "@/components/CTASection";
import { StatsSection } from "@/components/StatsSection";
import { Button } from "@/components/Button";
import {
  IconCheck,
  IconArrow,
  IconWhatsApp,
  IconShield,
  IconAward,
  IconSparkle,
  IconHammer,
} from "@/components/icons";

export const metadata = {
  title: "À propos TMA Holding | Entreprise BTP Abidjan depuis 2015",
  description:
    "TMA Holding : 10 ans d'expertise BTP premium à Cocody Riviera Palmeraie (Abidjan). Vision, équipe, valeurs et engagement qualité pour la construction et la rénovation en Côte d'Ivoire.",
  keywords: [
    "TMA Holding",
    "entreprise BTP Abidjan",
    "société construction Côte d'Ivoire",
    "BTP Cocody Riviera",
  ],
  alternates: { canonical: "https://tma-holding.net/a-propos" },
  openGraph: {
    title: "À propos de TMA Holding — BTP premium Abidjan",
    description:
      "10 ans d'engagement pour le BTP ivoirien. Équipe, valeurs, histoire.",
    url: "https://tma-holding.net/a-propos",
  },
};

const VALUES = [
  {
    icon: IconShield,
    title: "Exigence",
    desc: "Des standards élevés à chaque étape. Ce qui est bien fait n'a pas besoin d'être refait.",
  },
  {
    icon: IconAward,
    title: "Excellence",
    desc: "Nous visons le sans-faute. Des chantiers propres, des finitions premium, des délais tenus.",
  },
  {
    icon: IconSparkle,
    title: "Innovation",
    desc: "Nous adoptons les meilleures techniques : airless, enduit mécanique, sourcing international.",
  },
  {
    icon: IconHammer,
    title: "Engagement",
    desc: "Un chantier, un mot, un contrat. TMA Holding s'engage, et tient ses engagements.",
  },
];

const AMBITIONS = [
  "Devenir la référence incontournable du BTP haut de gamme en Côte d'Ivoire et au-delà.",
  "Bâtir 1 000 projets premium livrés d'ici 2030, sans compromis sur la qualité.",
  "Former une nouvelle génération d'artisans africains aux standards internationaux.",
  "Proposer via TMA Shop un catalogue BTP compétitif, transparent et fiable.",
];

const STATS = [
  { k: "650+", v: "Projets livrés" },
  { k: "98%", v: "Satisfaction client" },
  { k: "10 ans", v: "D'expertise" },
  { k: "+50", v: "Artisans partenaires" },
];

export default function AboutPage() {
  return (
    <>
      <HeroSimple
        image={IMG.heroAbout}
        eyebrow="Le Groupe"
        title="TMA Holding — bâtir l'excellence en Côte d'Ivoire."
        description="Depuis 2015, nous concevons et construisons des projets BTP haut de gamme pour des particuliers exigeants, des investisseurs, des promoteurs et des entreprises."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionTitle
              eyebrow="Notre histoire"
              title="Une entreprise née d'une conviction simple : le BTP ivoirien mérite l'excellence."
            />
            <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-tma-ash">
              <p>
                TMA Holding a été fondée à Abidjan sur un constat : trop de projets de construction en Côte d'Ivoire souffrent de délais non tenus, de finitions médiocres et d'un manque de transparence financière.
              </p>
              <p>
                Nous avons bâti une entreprise qui fait exactement l'inverse. Des équipes formées aux standards internationaux, un sourcing direct des matériaux, un pilotage rigoureux, et une exigence de finition au niveau des plus grandes marques mondiales.
              </p>
              <p>
                Aujourd'hui, TMA Holding est le partenaire de référence pour la construction de villas haut de gamme, d'immeubles résidentiels premium, de locaux commerciaux et de toutes les rénovations qui exigent un vrai savoir-faire. TMA Shop, notre branche e-commerce BTP, prolonge cette promesse avec un catalogue de matériaux premium à prix direct.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-premium">
              <img
                src={IMG.equipe}
                alt="Équipe TMA Holding sur chantier de construction haut de gamme en Côte d'Ivoire"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
                width={1400}
                height={1750}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-tma-night text-white p-6 shadow-2xl max-w-xs">
              <p className="text-tma-electric-200 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                Depuis 2015
              </p>
              <p className="font-display text-2xl font-bold leading-tight">
                10 ans d'engagement continu pour le BTP ivoirien.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              eyebrow: "Notre vision",
              title: "Devenir la référence du BTP premium en Afrique de l'Ouest.",
              text: "Un groupe reconnu pour son exigence, ses finitions exceptionnelles et sa capacité à livrer les projets les plus ambitieux.",
            },
            {
              eyebrow: "Notre mission",
              title: "Construire des ouvrages qui traversent le temps et racontent une ambition.",
              text: "Chaque projet est porté comme le nôtre : budget tenu, délais respectés, qualité imposée sur chaque détail.",
            },
            {
              eyebrow: "Notre ambition",
              title: "1 000 projets premium livrés d'ici 2030.",
              text: "Sans compromis sur la qualité. Avec une équipe formée, des partenaires fiables, et le soutien d'un catalogue TMA Shop de plus en plus riche.",
            },
          ].map((b) => (
            <div key={b.eyebrow} className="rounded-2xl bg-white p-8 border border-tma-stone shadow-sm">
              <p className="text-tma-electric text-xs font-bold tracking-[0.2em] uppercase mb-3">
                {b.eyebrow}
              </p>
              <h3 className="font-display text-xl font-bold text-tma-night leading-snug mb-4">
                {b.title}
              </h3>
              <p className="text-[15px] text-tma-ash leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Nos valeurs"
            title="Quatre principes qui gouvernent chacun de nos chantiers."
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-tma-stone bg-tma-bone p-7 text-center hover:border-tma-electric hover:shadow-premium transition-all"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-tma-electric/10 text-tma-electric">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-tma-night mb-2">{title}</h3>
                <p className="text-sm text-tma-ash leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-tma-night text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <StatsSection stats={STATS} light />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SectionTitle
            eyebrow="Positionnement"
            title="Pourquoi nous confier votre projet ?"
            description="Parce qu'un projet BTP premium ne se confie pas à n'importe qui. TMA Holding réunit l'exigence des groupes internationaux et la proximité d'une entreprise locale."
          />
          <ul className="space-y-4">
            {AMBITIONS.map((a) => (
              <li key={a} className="flex gap-3 items-start">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-tma-electric text-white shrink-0">
                  <IconCheck className="w-3.5 h-3.5" />
                </span>
                <span className="text-tma-night text-[16px] leading-relaxed">{a}</span>
              </li>
            ))}
            <li className="pt-6 flex flex-wrap gap-3">
              <Button href="/services" variant="dark" iconRight={<IconArrow className="w-4 h-4" />}>
                Voir nos services
              </Button>
              <Button
                href={WA.info}
                target="_blank"
                variant="whatsapp"
                iconLeft={<IconWhatsApp className="w-5 h-5" />}
              >
                Parler à un conseiller
              </Button>
            </li>
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="Prêt à construire ?"
        title="Votre projet commence par une conversation."
        description="Qu'il s'agisse d'une villa, d'une rénovation, d'un immeuble ou d'une simple commande de matériaux — écrivez-nous sur WhatsApp. Réponse en quelques minutes."
      />
    </>
  );
}
