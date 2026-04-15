import Link from "next/link";
import { WA, IMG } from "@/lib/brand";
import { SERVICES } from "@/lib/services";
import { HeroSimple } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { IconArrow, IconWhatsApp } from "@/components/icons";

export const metadata = {
  title: "Services — Construction, rénovation, peinture airless, revêtement & plus",
  description:
    "Nos expertises BTP : construction (villas, R+1 à R+5), rénovation, peinture professionnelle airless, enduit mécanique, conception 2D/3D, revêtement premium et importation de matériaux.",
};

// ============================================================
//  DÉTAILS DES EXPERTISES (cartes avec sous-sections à puces)
//  Format : { id, title, shortDescription, sections: [{ title, items }], service, variant? }
// ============================================================
const EXPERTISES = [
  {
    id: "construction",
    title: "Construction",
    shortDescription:
      "Du gros œuvre à la livraison clé en main. Villas haut de gamme, immeubles résidentiels, locaux commerciaux — études structurées, chantiers pilotés, délais tenus.",
    service: "Construction",
    sections: [
      {
        title: "Types d'ouvrages",
        items: [
          "Villas 1 à 5 chambres et plus",
          "Maisons basses et résidences familiales",
          "Immeubles R+1 à R+5",
          "Bureaux, commerces et locaux professionnels",
        ],
      },
      {
        title: "Ce qui est inclus",
        items: [
          "Études techniques et plans d'exécution",
          "Gros œuvre (fondations, structure béton, élévation)",
          "Second œuvre (menuiseries, plomberie, électricité)",
          "Pilotage chantier par conducteur de travaux dédié",
        ],
      },
      {
        title: "Nos garanties",
        items: [
          "Respect du budget et des délais contractuels",
          "Garantie décennale sur le gros œuvre",
          "Suivi photo et rapport de chantier hebdo",
        ],
      },
    ],
  },
  {
    id: "renovation",
    title: "Rénovation",
    shortDescription:
      "Modernisez votre bien sans le reconstruire. Transformation complète ou partielle, intérieur comme extérieur, avec la même exigence qu'une construction neuve.",
    service: "Rénovation",
    sections: [
      {
        title: "Pièces et zones traitées",
        items: [
          "Salon, chambre, cuisine, salle de bain",
          "Façade et ravalement extérieur",
          "Jardin, terrasse, aménagement extérieur",
          "Plafond, revêtement sol et mural",
        ],
      },
      {
        title: "Travaux techniques",
        items: [
          "Reprise électricité et plomberie aux normes",
          "Pose carrelage, parquet, faïence",
          "Peinture complète et finitions",
          "Remplacement menuiseries et serrureries",
        ],
      },
      {
        title: "Design & conseil",
        items: [
          "Étude d'aménagement intérieur",
          "Conseil décoration et palette",
          "Visite avant/après avec livrables photo",
        ],
      },
    ],
  },
  {
    id: "peinture",
    title: "Peinture professionnelle",
    shortDescription:
      "Application airless haute performance : jusqu'à 3× plus rapide qu'une peinture traditionnelle, avec une finition velouté parfaitement uniforme. Devis au m², 100 % transparent.",
    service: "Peinture professionnelle",
    variant: "dark",
    sections: [
      {
        title: "Technologies utilisées",
        items: [
          "Pulvérisation airless haute pression",
          "Rouleau et brosse pour finitions manuelles",
          "Préparation murs : ponçage, enduit, apprêt",
        ],
      },
      {
        title: "Rendus possibles",
        items: [
          "Mat velouté, satiné, brillant",
          "Façade extérieure résistante intempéries",
          "Peinture sols industriels et résines",
        ],
      },
      {
        title: "Performance chantier",
        items: [
          "Rapidité × 3 vs rouleau traditionnel",
          "Zéro trace, zéro coulure",
          "Réduction coût main-d'œuvre significative",
          "Protection totale du chantier pendant application",
        ],
      },
    ],
  },
  {
    id: "enduit",
    title: "Enduit mécanique",
    shortDescription:
      "Projection mécanisée de l'enduit : temps de chantier divisé par 2, rendu plus homogène qu'une application manuelle. Idéal pour grandes surfaces intérieures comme extérieures.",
    service: "Enduit mécanique",
    sections: [
      {
        title: "Application",
        items: [
          "Machine à projeter haute pression type PFT",
          "Équipe formée, sécurité chantier maîtrisée",
          "Intérieur et extérieur, neuf ou rénovation",
        ],
      },
      {
        title: "Finitions disponibles",
        items: [
          "Enduit taloché",
          "Enduit gratté",
          "Enduit lissé à la finition",
          "Aspect pierre ou ciment ciré",
        ],
      },
      {
        title: "Avantages vs méthode manuelle",
        items: [
          "Temps de chantier divisé par 2",
          "Rendu sans jointure ni raccord visible",
          "Meilleure adhérence au support",
        ],
      },
    ],
  },
  {
    id: "conception",
    title: "Conception 2D / 3D",
    shortDescription:
      "Visualisez votre projet avant le premier coup de pelle. Plans techniques, modélisation 3D photoréaliste, visite virtuelle — validez en connaissance de cause.",
    service: "Conception 2D / 3D",
    sections: [
      {
        title: "Livrables 2D",
        items: [
          "Plans techniques et d'exécution",
          "Plans de masse et d'implantation",
          "Façades, coupes, détails constructifs",
          "Dossier permis de construire",
        ],
      },
      {
        title: "Livrables 3D",
        items: [
          "Modélisation photoréaliste extérieure",
          "Rendu intérieur par pièce",
          "Visite virtuelle navigable",
          "Étude d'intégration paysagère",
        ],
      },
      {
        title: "Processus",
        items: [
          "Révisions illimitées avant validation finale",
          "Intégration directe au chiffrage global",
          "Alignement avec vos contraintes budgétaires",
        ],
      },
    ],
  },
  {
    id: "revetement",
    title: "Revêtement & finition",
    shortDescription:
      "Les finitions qui font la différence. Carrelage, marbre, sanitaire haut de gamme, habillage mural — chaque détail posé à la main par nos équipes expérimentées.",
    service: "Revêtement & finition",
    variant: "dark",
    sections: [
      {
        title: "Sols & murs",
        items: [
          "Carrelage grès cérame, effet marbre, mosaïque",
          "Marbre et pierre naturelle",
          "Parquet massif, stratifié AC4/AC5",
          "Habillage mural décoratif (bois, béton ciré, pierre)",
        ],
      },
      {
        title: "Sanitaire & salle de bain",
        items: [
          "Pose douche italienne, baignoire, WC suspendu",
          "Vasques et meubles sur mesure",
          "Robinetterie premium, finition chromée ou noire",
          "Miroirs LED et accessoires haut de gamme",
        ],
      },
      {
        title: "Qualité d'exécution",
        items: [
          "Alignements et joints au millimètre",
          "Contrôle des niveaux au laser",
          "Finitions de luxe dignes des plus belles adresses",
        ],
      },
    ],
  },
  {
    id: "importation",
    title: "Importation & fourniture",
    shortDescription:
      "Accès direct aux fabricants Chine, Asie, Europe et Moyen-Orient. Matériaux premium, équipements de chantier et articles décoratifs — sans intermédiaire.",
    service: "Importation & fourniture",
    sections: [
      {
        title: "Sourcing géographique",
        items: [
          "Chine (matériaux BTP, sanitaires, cuisines)",
          "Europe (équipements pro, menuiseries)",
          "Moyen-Orient (marbre, pierres rares)",
          "Asie du Sud-Est (mobilier, décoration)",
        ],
      },
      {
        title: "Catégories disponibles",
        items: [
          "Matériaux BTP : ciment, sable, gravier, ferraille",
          "Finitions : carreaux, marbre, sanitaire, robinetterie",
          "Équipements de chantier pro",
          "Mobilier, luminaires, articles décoratifs",
        ],
      },
      {
        title: "Accompagnement logistique",
        items: [
          "Sélection et négociation fournisseurs",
          "Contrôle qualité avant expédition",
          "Gestion douanes et livraison Abidjan",
          "Délai standard 45 à 50 jours",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroSimple
        image={IMG.heroServices}
        eyebrow="Nos services"
        title="Sept expertises, un seul interlocuteur."
        description="De la conception à la livraison, TMA Holding maîtrise toute la chaîne du BTP haut de gamme. Chaque service est pensé pour maximiser la qualité et tenir vos délais."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`#expertise-${s.slug}`}
              className="rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium px-4 py-2 hover:bg-white hover:text-tma-night transition-colors"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </HeroSimple>

      {/* VUE D'ENSEMBLE — grille compacte */}
      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Vue d'ensemble"
            title="Tous les métiers du BTP premium réunis."
            description="Chaque service TMA Holding est dirigé par un chef de métier expérimenté. Nous n'externalisons pas ce qui fait notre réputation : la qualité d'exécution."
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISES DÉTAILLÉES — cartes avec sous-sections à puces */}
      <section className="py-20 md:py-28 bg-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Expertises détaillées"
            title="Des solutions complètes pour vos projets BTP."
            description="Chaque expertise est structurée pour couvrir tout le spectre du besoin — du cadrage technique à la finition la plus fine. Choisissez le métier qui vous intéresse."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {EXPERTISES.map((e) => (
              <ExpertiseCard key={e.id} expertise={e} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Besoin d'un chiffrage ?"
        title="Un devis gratuit en 24 h, c'est tout ce qu'il faut pour commencer."
        description="Décrivez-nous votre projet. Nous revenons vers vous sous 24 h avec un chiffrage clair, détaillé et sans engagement."
      />
    </>
  );
}

// ============================================================
//  ExpertiseCard — carte service avec sous-sections à puces
//  Palette TMA : bleu nuit + bleu électrique + blanc
//  Variante "dark" pour alterner visuellement
// ============================================================
function ExpertiseCard({ expertise }) {
  const isDark = expertise.variant === "dark";

  const base = isDark
    ? "bg-tma-night text-white border-tma-night"
    : "bg-white text-tma-night border-tma-stone";

  const subtitleColor = isDark ? "text-white/80" : "text-tma-ash";
  const sectionTitleColor = isDark ? "text-white" : "text-tma-night";
  const itemColor = isDark ? "text-white/85" : "text-tma-night/85";
  const bulletColor = isDark
    ? "bg-tma-electric-200"
    : "bg-tma-electric";
  const primaryBtn = isDark
    ? "bg-tma-electric text-white hover:bg-white hover:text-tma-night"
    : "bg-tma-night text-white hover:bg-tma-electric";
  const secondaryBtn = isDark
    ? "border border-white/30 text-white hover:bg-white hover:text-tma-night"
    : "border border-tma-stone text-tma-night hover:border-tma-electric hover:text-tma-electric";
  const eyebrowColor = isDark ? "text-tma-electric-200" : "text-tma-electric";

  return (
    <article
      id={`expertise-${expertise.id}`}
      className={`rounded-3xl border ${base} p-8 md:p-10 shadow-premium hover:shadow-xl transition-shadow scroll-mt-24`}
    >
      {/* Header */}
      <div className="mb-6">
        <p
          className={`${eyebrowColor} text-xs font-bold tracking-[0.2em] uppercase mb-3`}
        >
          Expertise TMA
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
          {expertise.title}
        </h3>
        <p className={`mt-4 ${subtitleColor} leading-relaxed`}>
          {expertise.shortDescription}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6 mb-8">
        {expertise.sections.map((section, i) => (
          <div key={i}>
            <h4
              className={`${sectionTitleColor} font-display text-base font-semibold mb-3`}
            >
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span
                    className={`mt-2 h-2 w-2 rounded-full ${bulletColor} shrink-0`}
                  />
                  <span className={`${itemColor} text-sm leading-relaxed`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3">
        <Link
          href="/devis"
          className={`inline-flex items-center gap-2 rounded-full ${primaryBtn} px-6 py-3 text-sm font-semibold transition-colors`}
        >
          Demander un devis <IconArrow className="w-4 h-4" />
        </Link>
        <a
          href={WA.service(expertise.service)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full ${secondaryBtn} px-6 py-3 text-sm font-semibold transition-colors`}
        >
          <IconWhatsApp className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </article>
  );
}
