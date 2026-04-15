import { IMG } from "./brand";

export const SERVICES = [
  {
    slug: "construction",
    title: "Construction",
    tagline: "Villas, immeubles et ouvrages clé en main",
    image: IMG.construction,
    short:
      "Nous construisons des villas haut de gamme, des immeubles R+1 à R+5 et des ouvrages sur mesure. Études, gros œuvre, second œuvre, livraison clé en main.",
    bullets: [
      "Villas 1 à 5 chambres et plus",
      "Immeubles R+1, R+2, R+3, R+4, R+5",
      "Maisons basses et résidences familiales",
      "Bureaux, commerces et locaux professionnels",
      "Études techniques et suivi de chantier",
      "Garantie décennale et livraison clé en main",
    ],
    benefit: "Budget respecté, délais tenus, qualité durable.",
  },
  {
    slug: "renovation",
    title: "Rénovation",
    tagline: "Moderniser sans reconstruire",
    image: IMG.renovation,
    short:
      "Transformez votre habitat avec une rénovation complète ou partielle : salon, chambre, cuisine, façade, jardin, intérieur et extérieur.",
    bullets: [
      "Rénovation totale ou partielle",
      "Cuisine, salon, chambre, salle de bain",
      "Façade et ravalement",
      "Jardin et aménagement extérieur",
      "Reprise électricité, plomberie, carrelage",
      "Accompagnement design et coordination",
    ],
    benefit: "Un habitat repensé, plus moderne et plus confortable.",
  },
  {
    slug: "peinture",
    title: "Peinture professionnelle",
    tagline: "Application airless — rapidité et finition",
    image: IMG.peinture,
    short:
      "Peinture au m² en mode airless pour une rapidité d'exécution inégalée, une finition propre et sans trace, et une réduction significative de la main-d'œuvre.",
    bullets: [
      "Devis au m² clair et transparent",
      "Technologie airless haute performance",
      "Rapidité d'exécution (x3 vs rouleau)",
      "Finition velouté sans trace",
      "Réduction coût main-d'œuvre",
      "Peintures acryliques premium",
    ],
    benefit: "Jusqu'à 3× plus rapide qu'une peinture traditionnelle.",
  },
  {
    slug: "enduit",
    title: "Enduit mécanique",
    tagline: "Rendu homogène, application rapide",
    image: IMG.enduit,
    short:
      "Application d'enduit mécanisé pour des surfaces parfaitement lisses, homogènes, et une cadence de chantier optimisée.",
    bullets: [
      "Enduit monocouche ou multicouche",
      "Application par machine haute pression",
      "Rendu homogène sans jointure",
      "Temps de chantier divisé par 2",
      "Finition taloché, gratté ou lissé",
      "Intérieur et extérieur",
    ],
    benefit: "Une finition professionnelle à grande cadence.",
  },
  {
    slug: "conception",
    title: "Conception 2D / 3D",
    tagline: "Voyez votre projet avant de le construire",
    image: IMG.conception,
    short:
      "Plans techniques, modélisation 3D et visualisation réaliste pour valider votre projet avant le premier coup de pelle.",
    bullets: [
      "Plans d'architecture détaillés",
      "Modélisation 3D photo-réaliste",
      "Visite virtuelle du projet",
      "Plans techniques et permis",
      "Implantation et façades",
      "Révisions illimitées avant validation",
    ],
    benefit: "Décidez en connaissance de cause, sans mauvaise surprise.",
  },
  {
    slug: "revetement",
    title: "Revêtement & finition",
    tagline: "Carrelage, marbre, sanitaire, finitions premium",
    image: IMG.revetement,
    short:
      "Pose de carrelage, marbre, granit, habillage mural, équipements sanitaires et toutes les finitions qui font la différence.",
    bullets: [
      "Carrelage sols et murs",
      "Marbre et pierre naturelle",
      "Habillage mural décoratif",
      "Installation sanitaire complète",
      "Finitions peinture et laque",
      "Détails premium sur mesure",
    ],
    benefit: "Des finitions dignes des plus belles adresses.",
  },
  {
    slug: "importation",
    title: "Importation & fourniture",
    tagline: "Sourcing matériaux et équipements",
    image: IMG.equipement,
    short:
      "Sourcing de matériaux, équipements et articles importés à prix compétitifs. Accompagnement à l'achat, transport et dédouanement.",
    bullets: [
      "Sourcing Europe, Asie, Moyen-Orient",
      "Matériaux premium à prix direct",
      "Équipements BTP et chantier",
      "Mobilier, luminaires, sanitaires",
      "Accompagnement logistique complet",
      "Solutions compétitives et transparentes",
    ],
    benefit: "Des prix directs fabricant, sans intermédiaire.",
  },
];

export const serviceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
