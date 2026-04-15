// ============================================================
//  TMA HOLDING — SOURCE DE VÉRITÉ SERVICES
//  Modifiez ce fichier pour mettre à jour la page /services.
// ============================================================

import { IMG } from "@/lib/brand";

/**
 * Les 6 expertises TMA Holding.
 * Chaque service contient : slug, numéro, titre, sous-titre, description,
 * prestations, bénéfices, specs chiffrées, image, accent colorimétrique,
 * CTA principal et message WhatsApp pré-rempli.
 */
export const SERVICES = [
  {
    slug: "construction",
    number: "01",
    eyebrow: "Génie civil & gros œuvre",
    title: "Construction",
    subtitle: "Des fondations à la remise des clés, la rigueur d'un constructeur intégré.",
    intro:
      "TMA Holding construit l'habitat des familles et des investisseurs qui refusent le compromis. Villas de caractère, immeubles locatifs, résidences R+2 à R+5, maisons basses d'une à cinq chambres : chaque projet est piloté comme un chantier industriel — planification rigoureuse, équipes qualifiées, matériaux sélectionnés et contrôle qualité à chaque phase.",
    secondary:
      "Nos conducteurs de travaux accompagnent le client à chaque étape critique : étude du terrain, validation des plans, choix des finitions, arbitrages budgétaires. Nous construisons selon les standards professionnels en vigueur, dans le respect des délais annoncés et de l'enveloppe convenue.",
    img: IMG.construction,
    imgAlt: "Chantier de villa R+2 TMA Holding en phase de gros œuvre, vue drone, ciel tropical",
    accent: "#1E90FF",
    prestations: [
      "Villas individuelles de 1 à 5 chambres",
      "Immeubles résidentiels R+2, R+3, R+4, R+5",
      "Maisons basses & habitats familiaux",
      "Gros œuvre, second œuvre et finitions intégrés",
      "Suivi de chantier dédié avec reporting régulier",
      "Gestion administrative et technique globale",
    ],
    benefices: [
      "Un interlocuteur unique du plan à la livraison",
      "Devis détaillé, ferme et transparent",
      "Équipes formées, matériaux contrôlés",
      "Adaptation au budget sans compromis qualité",
      "Respect des délais, reporting régulier",
    ],
    specs: [
      { k: "150+", v: "Chantiers livrés" },
      { k: "R+5", v: "Capacité max." },
      { k: "100%", v: "Délais tenus" },
    ],
    cta: "Demander un devis construction",
    ctaSecondary: "Planifier une visite technique",
    waMessage:
      "Bonjour TMA Holding, je souhaite construire un bien immobilier. Voici mon projet :",
  },
  {
    slug: "renovation",
    number: "02",
    eyebrow: "Rénovation & réhabilitation",
    title: "Rénovation",
    subtitle: "Donner une seconde vie à vos espaces, avec goût et matériaux importés.",
    intro:
      "Une rénovation réussie, c'est bien plus qu'un coup de peinture. C'est repenser les volumes, hiérarchiser la lumière, choisir les bons matériaux, et conjuguer esthétique et fonctionnalité. TMA Holding transforme vos salons, chambres, cuisines, jardins et espaces extérieurs en lieux qui vous ressemblent et qui valorisent durablement votre patrimoine.",
    secondary:
      "Grâce à notre réseau d'importation direct depuis la Chine, nous mettons à votre disposition des cuisines équipées modernes, du mobilier contemporain et des finitions haut de gamme à des tarifs inaccessibles au marché traditionnel.",
    img: IMG.cuisine,
    imgAlt: "Cuisine rénovée avec îlot central contemporain, marbre et éclairage chaleureux",
    accent: "#D4A84B",
    prestations: [
      "Rénovation complète ou partielle (salons, chambres, cuisines, SDB)",
      "Aménagement extérieur et jardins",
      "Cuisines équipées importées à prix réduit",
      "Réagencement et transformation d'espaces",
      "Mise aux normes électriques et sanitaires",
      "Finitions décoratives sur mesure",
    ],
    benefices: [
      "Transformation visible dès la première semaine",
      "Accès privilégié aux matériaux importés",
      "Valorisation immédiate de votre bien",
      "Un chantier, une équipe, un prix",
      "Conseil décoration inclus",
    ],
    specs: [
      { k: "-30%", v: "Coût matériaux import" },
      { k: "4 sem.", v: "Rénovation type" },
      { k: "48 h", v: "Devis chiffré" },
    ],
    cta: "Rénover mon espace",
    ctaSecondary: "Voir nos réalisations",
    waMessage:
      "Bonjour TMA Holding, je souhaite rénover un espace. Voici les détails :",
  },
  {
    slug: "peinture",
    number: "03",
    eyebrow: "Peinture & enduit mécanisés",
    title: "Peinture & Enduit mécanisés",
    subtitle:
      "La technologie airless au service de chantiers plus rapides, plus nets, plus rentables.",
    intro:
      "Ce qui nécessite deux jours à la main, nous le réalisons en quelques heures. TMA Holding est l'une des rares entreprises de Côte d'Ivoire à disposer d'un parc industriel complet de 7 machines de peinture airless et d'une machine d'enduit mécanisé. Une capacité de production qui change tout — pour les grands chantiers, les projets sous contrainte de délai, et les clients exigeants sur la qualité de finition.",
    secondary:
      "La projection mécanisée garantit une épaisseur homogène, une pénétration supérieure dans le support, une réduction drastique de la main-d'œuvre et un rendu visuel irréprochable. Facturation transparente au m², sur devis détaillé — vous savez exactement ce que vous payez, et pour quelle surface.",
    img: IMG.peinture,
    imgAlt:
      "Ouvrier TMA équipé en pleine projection airless sur façade, jet de peinture visible en contre-jour",
    accent: "#D4A84B",
    prestations: [
      "Peinture airless intérieure et extérieure (7 machines)",
      "Enduit mécanisé sur murs et plafonds",
      "Traitement de grandes surfaces (résidences, immeubles, industries)",
      "Préparation et protection des supports",
      "Finitions mates, satinées, velours, laquées",
      "Reprise et restauration de façades",
    ],
    benefices: [
      "Jusqu'à 10× plus rapide que la peinture manuelle",
      "Finition homogène, sans traces de rouleau",
      "Tarification claire au m², sans surprise",
      "Disponibilité immédiate d'une équipe industrielle",
      "Idéal pour chantiers sous pression de délai",
    ],
    specs: [
      { k: "7", v: "Machines airless" },
      { k: "10×", v: "Plus rapide" },
      { k: "m²", v: "Facturation" },
    ],
    cta: "Obtenir un devis au m²",
    ctaSecondary: "Parler à un expert",
    waMessage:
      "Bonjour TMA Holding, je souhaite un devis peinture mécanisée au m². Voici les détails :",
  },
  {
    slug: "conception",
    number: "04",
    eyebrow: "Conception 2D / 3D & accompagnement",
    title: "Conception 2D / 3D",
    subtitle: "Visualisez votre projet avant de poser la première pierre.",
    intro:
      "Un bon projet commence par une bonne vision. Envoyez-nous votre plan, votre esquisse, ou simplement votre idée : nos concepteurs la transforment en plans 2D techniques et rendus 3D réalistes qui vous permettent de voir, décider et valider — avant le premier investissement.",
    secondary:
      "Mais nous allons plus loin qu'un simple cabinet de design. TMA Holding vous accompagne de bout en bout : choix des matériaux, arbitrages techniques, optimisation budgétaire, et surtout — accès à notre réseau d'importation directe depuis la Chine. Conteneurs complets, matériaux haut de gamme à coût maîtrisé, livraison sur site ou à domicile.",
    img: IMG.conception,
    imgAlt: "Poste d'architecte TMA Holding avec écran affichant un rendu 3D de villa moderne",
    accent: "#7DBEFF",
    prestations: [
      "Conception de plans 2D techniques",
      "Modélisation 3D et rendus photoréalistes",
      "Étude et optimisation budgétaire du projet",
      "Sourcing et importation de matériaux (Chine)",
      "Gestion de conteneurs et logistique",
      "Livraison domicile ou chantier",
    ],
    benefices: [
      "Voir votre projet avant de le financer",
      "Économies substantielles via l'import direct",
      "Un seul interlocuteur de l'idée à la livraison",
      "Décisions éclairées, arbitrages chiffrés",
      "Délais de réalisation optimisés",
    ],
    specs: [
      { k: "2D/3D", v: "Rendus réalistes" },
      { k: "CN", v: "Import direct" },
      { k: "5 étapes", v: "De l'idée à la clé" },
    ],
    cta: "Envoyer mon plan",
    ctaSecondary: "Demander une estimation",
    waMessage:
      "Bonjour TMA Holding, je souhaite une conception 2D/3D pour mon projet. Voici mon plan :",
  },
  {
    slug: "revetement",
    number: "05",
    eyebrow: "Revêtement intérieur & extérieur",
    title: "Revêtement intérieur & extérieur",
    subtitle: "La signature visuelle d'un bien qui valorise durablement son propriétaire.",
    intro:
      "Le revêtement, c'est la première chose qu'on voit — et la dernière qui vieillit. TMA Holding sélectionne, importe et pose les finitions qui transforment un espace ordinaire en lieu de caractère. Du sol au plafond, de la façade à la terrasse : chaque surface devient une occasion d'exprimer le standing et la personnalité d'un bien.",
    secondary: null,
    img: IMG.interieur,
    imgAlt:
      "Salon premium avec sol époxy brillant, mur penti gris et éclairage chaleureux, finitions TMA Holding",
    accent: "#D4A84B",
    prestations: [
      "Résine époxy (résidentiel, commercial, industriel)",
      "Parquets nobles (massif, contrecollé, stratifié premium)",
      "Penti gris (enduit architectural)",
      "Papiers peints haut de gamme importés",
      "Alucobond — bardage aluminium composite",
      "Bardages bois, pierre reconstituée, clins",
    ],
    benefices: [
      "Des finitions qui tiennent dans le temps, même sous climat tropical",
      "Valorisation immédiate à la revente ou à la location",
      "Esthétique contemporaine, matériaux certifiés",
      "Pose maîtrisée par des équipes spécialisées",
      "Entretien simplifié, durabilité garantie",
    ],
    specs: [
      { k: "3", v: "Univers : sols, murs, façades" },
      { k: "15+", v: "Matériaux référencés" },
      { k: "10 ans", v: "Durabilité moyenne" },
    ],
    cta: "Choisir mes finitions",
    ctaSecondary: "Télécharger le catalogue",
    waMessage:
      "Bonjour TMA Holding, je souhaite un devis revêtement intérieur/extérieur. Voici mon projet :",
    // Contenu spécifique pour les onglets revêtement
    tabs: [
      {
        label: "Sols",
        items: [
          "Résine époxy (résidentiel, commercial, industriel)",
          "Parquets nobles (bois massif, contrecollé, stratifié)",
          "Carrelages grand format et pierres naturelles",
          "Microciment et finitions béton ciré",
        ],
      },
      {
        label: "Murs intérieurs",
        items: [
          "Peinture décorative premium",
          "Penti gris — enduit architectural moderne",
          "Papiers peints haut de gamme importés",
          "Finitions effets (béton ciré, stuc, métallisé)",
        ],
      },
      {
        label: "Façades extérieures",
        items: [
          "Penti gris façades",
          "Alucobond — bardage aluminium composite",
          "Bardages bois et pierre reconstituée",
          "Protection et étanchéité longue durée",
        ],
      },
    ],
  },
  {
    slug: "shop",
    number: "06",
    eyebrow: "TMA Shop — E-commerce BTP",
    title: "TMA Shop",
    subtitle: "La plateforme d'approvisionnement qui simplifie tous vos achats de chantier.",
    intro:
      "TMA Shop est la branche e-commerce de TMA Holding — une plateforme pensée pour ceux qui construisent, rénovent, équipent. Matériaux de gros œuvre, équipements professionnels, sanitaires de luxe, mobilier contemporain, installations de loisirs : tout ce qu'un chantier ou un intérieur premium requiert, réuni dans un catalogue clair, avec des prix négociés et une logistique fiable.",
    secondary:
      "Particulier en rénovation, entrepreneur en quête d'approvisionnement régulier, ou promoteur sur un gros programme : TMA Shop sécurise votre chaîne d'achat — produits locaux sélectionnés, imports directs depuis la Chine, livraison Abidjan et intérieur du pays.",
    img: IMG.heroShop,
    imgAlt:
      "Composition still-life produits TMA Shop : robinetterie design, ciment, luminaire, carrelage",
    accent: "#25D366",
    prestations: [
      "Matériaux de gros œuvre (sable, ciment, gravier, ferraille)",
      "Machines et équipements de chantier",
      "Sanitaires de luxe (vasques, robinetterie design, baignoires)",
      "Matériel électrique (câbles, tableaux, luminaires décoratifs)",
      "Mobilier haut de gamme importé",
      "Piscines complètes, jacuzzis et équipements loisirs",
    ],
    benefices: [
      "Un seul fournisseur pour tout un chantier",
      "Rapport qualité/prix imbattable via import direct",
      "Disponibilité vérifiée, délais annoncés",
      "Conseil produit par nos techniciens BTP",
      "Facturation professionnelle pour les entreprises",
    ],
    specs: [
      { k: "6", v: "Familles produits" },
      { k: "24–48 h", v: "Livraison Abidjan" },
      { k: "B2B/B2C", v: "Double canal" },
    ],
    cta: "Commander sur TMA Shop",
    ctaSecondary: "Recevoir le catalogue pro",
    waMessage:
      "Bonjour TMA Shop, je souhaite un devis pour les produits suivants :",
    // Familles produits TMA Shop
    families: [
      { icon: "🔧", title: "Gros œuvre", desc: "Sable · Ciment · Gravier · Ferraille · Agrégats" },
      { icon: "⚙️", title: "Machines & équipements", desc: "Bétonnières · Groupes · Outillage pro · Échafaudages" },
      { icon: "🚿", title: "Sanitaires de luxe", desc: "Vasques · Robinetterie design · Baignoires · Douches" },
      { icon: "⚡", title: "Matériel électrique", desc: "Câbles · Tableaux · Luminaires · Appareillages" },
      { icon: "🛋️", title: "Mobilier haut de gamme", desc: "Salons · Chambres · Salle à manger · Outdoor" },
      { icon: "🏊", title: "Piscines & jacuzzis", desc: "Piscines kit complet · Jacuzzis · Spas · Pool-house" },
    ],
  },
];

/**
 * Piliers "Pourquoi TMA Holding" affichés après le Hero.
 */
export const PILLARS = [
  {
    icon: "⚙️",
    title: "Maîtrise technique",
    desc: "Un savoir-faire complet couvrant gros œuvre, second œuvre et finitions. Des équipes formées, des méthodes éprouvées.",
  },
  {
    icon: "🤝",
    title: "Accompagnement intégral",
    desc: "Un interlocuteur unique du plan à la livraison — décisions claires, délais tenus, reporting transparent.",
  },
  {
    icon: "🏭",
    title: "Équipements industriels",
    desc: "7 machines airless, une machine d'enduit mécanisé, un réseau d'import Chine — une capacité rare en Côte d'Ivoire.",
  },
];

/**
 * Chiffres clés — bandeau corporate.
 */
export const KEY_FIGURES = [
  { k: "150", suffix: "+", v: "Chantiers livrés" },
  { k: "7", suffix: "", v: "Machines airless" },
  { k: "12", suffix: " ans", v: "d'Expertise terrain" },
  { k: "100", suffix: "%", v: "Livrés dans les délais" },
];

/**
 * Garanties — bandeau final.
 */
export const GUARANTEES = [
  { icon: "📋", title: "Devis gratuit", desc: "Chiffrage en moins de 24 h" },
  { icon: "🔧", title: "Suivi de chantier", desc: "Conducteur dédié, reporting régulier" },
  { icon: "📦", title: "Matériaux certifiés", desc: "Sourcing local & import contrôlé" },
  { icon: "⏱️", title: "Délais tenus", desc: "Planning écrit, engagement ferme" },
];
