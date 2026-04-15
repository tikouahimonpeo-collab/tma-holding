import { IMG } from "./brand";

// ============================================================
//  TMA SHOP — Catalogue produits
//  Structure prête à brancher sur un CMS ou un backend.
// ============================================================

export const CATEGORIES = [
  { slug: "all", name: "Tous les produits", icon: "Grid3x3" },
  { slug: "carreaux", name: "Carreaux", icon: "LayoutGrid" },
  { slug: "sanitaires", name: "Sanitaires", icon: "Bath" },
  { slug: "cuisines", name: "Cuisines modernes", icon: "ChefHat" },
  { slug: "robinetterie", name: "Robinetterie", icon: "Droplet" },
  { slug: "accessoires-bain", name: "Accessoires salle de bain", icon: "ShowerHead" },
  { slug: "revetements", name: "Revêtements", icon: "Layers" },
  { slug: "materiaux", name: "Matériaux BTP", icon: "Package" },
  { slug: "equipements", name: "Équipements de chantier", icon: "HardHat" },
  { slug: "importes", name: "Articles importés", icon: "Ship" },
];

export const PRODUCTS = [
  {
    id: "p-001",
    slug: "carreaux-marbre-60x60",
    name: "Carreaux effet marbre poli 60×60",
    category: "carreaux",
    image: IMG.marbre,
    shortDescription:
      "Grès cérame effet marbre blanc veiné or. Rendu luxe pour salons et halls premium.",
    longDescription:
      "Carreaux haut de gamme en grès cérame rectifié, finition polie miroir. Format 60×60 cm, épaisseur 10 mm, fabrication européenne. Idéal pour des intérieurs haut-de-gamme : salons, halls, bureaux, boutiques. Rendu marbre naturel sans l'entretien du marbre véritable.",
    featured: true,
    tags: ["Premium", "Intérieur", "Poli"],
    availability: "En stock",
    priceVisible: false,
    badge: "Premium",
  },
  {
    id: "p-002",
    slug: "carreaux-ceramique-40x40",
    name: "Carreaux céramique 40×40 blanc mat",
    category: "carreaux",
    image: IMG.carrelage,
    shortDescription:
      "Carrelage mural et sol polyvalent. Excellent rapport qualité / prix.",
    longDescription:
      "Carrelage céramique classique blanc mat, format 40×40 cm. Pose facile, entretien simple. Parfait pour pièces de service, boutiques, bureaux et logements.",
    featured: false,
    tags: ["Économique", "Polyvalent"],
    availability: "En stock",
    priceVisible: false,
  },
  {
    id: "p-003",
    slug: "carreaux-exterieur-antiderapant",
    name: "Carreaux extérieurs antidérapants",
    category: "carreaux",
    image: IMG.revetement,
    shortDescription:
      "Carreaux grès cérame structurés, antidérapants R11. Terrasses et abords piscine.",
    longDescription:
      "Spécialement conçus pour extérieur : résistance au gel, aux UV, antidérapance R11. Format 30×60 cm, ton pierre naturelle. Idéal terrasses, plages de piscine, allées.",
    featured: true,
    tags: ["Extérieur", "Antidérapant"],
    availability: "En stock",
    priceVisible: false,
  },
  {
    id: "p-004",
    slug: "wc-suspendu-design",
    name: "WC suspendu design avec bâti-support",
    category: "sanitaires",
    image: IMG.sanitaire,
    shortDescription:
      "Pack complet WC suspendu + bâti-support + plaque de commande chromée.",
    longDescription:
      "Kit WC suspendu complet : cuvette céramique sans bride, bâti-support Geberit, réservoir double débit 3/6 L, plaque de commande inox chromé. Économie d'eau, hygiène et design moderne.",
    featured: true,
    tags: ["Design", "Économe"],
    availability: "En stock",
    priceVisible: false,
    badge: "Bestseller",
  },
  {
    id: "p-005",
    slug: "vasque-salle-bain-marbre",
    name: "Vasque marbre sur plan",
    category: "sanitaires",
    image: IMG.salleBain,
    shortDescription:
      "Vasque à poser en marbre naturel. Pièce unique haut de gamme.",
    longDescription:
      "Vasque à poser taillée dans la masse, marbre naturel poli. Diamètre 45 cm, profondeur 12 cm. Chaque pièce est unique par son veinage. Finition hydrofuge appliquée.",
    featured: false,
    tags: ["Marbre", "Premium"],
    availability: "Sur commande",
    priceVisible: false,
  },
  {
    id: "p-006",
    slug: "cuisine-moderne-equipee",
    name: "Cuisine moderne équipée sur mesure",
    category: "cuisines",
    image: IMG.cuisine,
    shortDescription:
      "Cuisine contemporaine avec îlot central, rangements, plan granit.",
    longDescription:
      "Cuisine moderne sur mesure : caissons mélaminé hydrofuge, façades laquées mat, plan de travail granit ou quartz au choix, îlot central avec évier intégré, rangements optimisés. Études, fabrication et pose incluses.",
    featured: true,
    tags: ["Sur mesure", "Îlot", "Premium"],
    availability: "Sur mesure",
    priceVisible: false,
    badge: "Sur mesure",
  },
  {
    id: "p-007",
    slug: "cuisine-compacte-design",
    name: "Cuisine compacte design",
    category: "cuisines",
    image: IMG.interieur,
    shortDescription:
      "Cuisine linéaire compacte, idéale appartements et petites surfaces.",
    longDescription:
      "Cuisine linéaire contemporaine, 2,40 m ou 3 m. Façades lisses laquées, plan de travail stratifié effet pierre, crédence verre. Solution clé en main pour appartements modernes.",
    featured: false,
    tags: ["Compact", "Design"],
    availability: "Sur commande",
    priceVisible: false,
  },
  {
    id: "p-008",
    slug: "mitigeur-chrome-premium",
    name: "Mitigeur lavabo chromé premium",
    category: "robinetterie",
    image: IMG.robinet,
    shortDescription:
      "Mitigeur monocommande cartouche céramique, finition chrome miroir.",
    longDescription:
      "Mitigeur haut de gamme pour lavabo. Corps laiton massif, cartouche céramique 35 mm, limiteur de débit, finition chrome poli. Garantie fabricant 5 ans.",
    featured: true,
    tags: ["Premium", "Garantie 5 ans"],
    availability: "En stock",
    priceVisible: false,
  },
  {
    id: "p-009",
    slug: "colonne-douche-encastree",
    name: "Colonne de douche encastrée thermostatique",
    category: "robinetterie",
    image: IMG.sanitaire,
    shortDescription:
      "Système thermostatique avec pomme pluie et douchette. Installation murale.",
    longDescription:
      "Ensemble de douche encastré : mitigeur thermostatique, pomme de douche pluie 250 mm, douchette sur flexible, finition chrome. Anti-brûlure, économie d'eau.",
    featured: false,
    tags: ["Thermostatique", "Pluie"],
    availability: "En stock",
    priceVisible: false,
  },
  {
    id: "p-010",
    slug: "pack-accessoires-bain-inox",
    name: "Pack accessoires salle de bain inox",
    category: "accessoires-bain",
    image: IMG.salleBain,
    shortDescription:
      "Kit complet : porte-serviette, porte-savon, crochets, barre. Inox brossé.",
    longDescription:
      "Ensemble d'accessoires assortis en inox 304 brossé : porte-serviette double, porte-savon, porte-papier, crochets, barre de maintien. Fixation murale incluse.",
    featured: false,
    tags: ["Inox", "Pack complet"],
    availability: "En stock",
    priceVisible: false,
  },
  {
    id: "p-011",
    slug: "miroir-led-salle-bain",
    name: "Miroir LED anti-buée salle de bain",
    category: "accessoires-bain",
    image: IMG.interieur,
    shortDescription:
      "Miroir rétro-éclairé LED avec fonction anti-buée et prise USB.",
    longDescription:
      "Miroir de salle de bain moderne avec éclairage LED intégré, fonction anti-buée automatique, interrupteur tactile, prise USB pour rasoir. Dimensions 80×60 cm.",
    featured: true,
    tags: ["LED", "Anti-buée"],
    availability: "En stock",
    priceVisible: false,
    badge: "Nouveau",
  },
  {
    id: "p-012",
    slug: "parquet-stratifie-chene",
    name: "Parquet stratifié effet chêne",
    category: "revetements",
    image: IMG.interieur,
    shortDescription:
      "Parquet stratifié haute résistance, rendu chêne naturel, pose clipsable.",
    longDescription:
      "Parquet stratifié classe 33, épaisseur 8 mm, décor chêne naturel, système clic rapide. Résistance à l'usure AC5, compatible pièces à fort passage. Garantie 15 ans.",
    featured: true,
    tags: ["Stratifié", "Classe 33"],
    availability: "En stock",
    priceVisible: false,
  },
  {
    id: "p-013",
    slug: "peinture-airless-20l",
    name: "Peinture airless mat velouté 20 L",
    category: "revetements",
    image: IMG.peintureShopMat,
    shortDescription:
      "Peinture acrylique haut rendement pour application airless.",
    longDescription:
      "Peinture mate veloutée haut rendement. Couvre 120 m² par seau en deux couches. Application airless ou rouleau, sans trace. Excellente résistance au lessivage.",
    featured: false,
    tags: ["Airless", "Haut rendement"],
    availability: "En stock",
    priceVisible: false,
  },
  {
    id: "p-014",
    slug: "ciment-cpj-425-50kg",
    name: "Ciment gris CPJ 42.5 — sac 50 kg",
    category: "materiaux",
    image: IMG.ciment,
    shortDescription:
      "Ciment haute résistance pour fondations, dalles et structures porteuses.",
    longDescription:
      "Ciment portland composé CPJ 42.5, classe de résistance supérieure. Conforme aux normes ISO et EN 197-1. Sac 50 kg, livraison par palette ou camion.",
    featured: true,
    tags: ["CPJ 42.5", "Bestseller"],
    availability: "En stock",
    priceVisible: false,
    badge: "Bestseller",
  },
  {
    id: "p-015",
    slug: "sable-lave-tonne",
    name: "Sable lavé fin — la tonne",
    category: "materiaux",
    image: IMG.sable,
    shortDescription:
      "Sable de lagune tamisé et lavé. Idéal maçonnerie et enduit premium.",
    longDescription:
      "Sable de lagune fin, lavé, tamisé 0/4 mm. Parfait pour mortier, enduit, chape. Livraison camion benne 10 T ou 20 T sur tout Abidjan.",
    featured: false,
    tags: ["Lavé", "0/4"],
    availability: "En stock",
    priceVisible: false,
  },
  {
    id: "p-016",
    slug: "gravier-concasse-0-20",
    name: "Gravier concassé 0/20 — la tonne",
    category: "materiaux",
    image: IMG.gravier,
    shortDescription:
      "Granulats calibrés pour béton armé et béton de propreté.",
    longDescription:
      "Gravier concassé calibre 0/20 mm, lavé, granulométrie contrôlée. Utilisation béton armé, fondations, dallages. Camion benne disponible.",
    featured: false,
    tags: ["Béton", "0/20"],
    availability: "En stock",
    priceVisible: false,
  },
  {
    id: "p-017",
    slug: "fer-a-beton-12mm",
    name: "Fer à béton HA Fe500 — 12 mm",
    category: "materiaux",
    image: IMG.chantier,
    shortDescription:
      "Barres haute adhérence, nuance Fe500, certifiées. Longueur 12 m.",
    longDescription:
      "Fer à béton haute adhérence Fe500, diamètre 12 mm, longueur 12 m. Idéal chaînages, poteaux, poutres. Certification origine et qualité. Toutes diamètres disponibles (6, 8, 10, 12, 14, 16, 20, 25 mm).",
    featured: false,
    tags: ["HA Fe500", "Certifié"],
    availability: "En stock",
    priceVisible: false,
  },
  {
    id: "p-018",
    slug: "betonniere-350l",
    name: "Bétonnière électrique 350 L",
    category: "equipements",
    image: IMG.equipement,
    shortDescription:
      "Bétonnière thermique ou électrique, cuve 350 L, robuste chantier.",
    longDescription:
      "Bétonnière professionnelle cuve 350 L, moteur 1 500 W, châssis acier renforcé, roues increvables. Destinée aux chantiers moyens et gros œuvre. Garantie 2 ans.",
    featured: false,
    tags: ["350 L", "Pro"],
    availability: "En stock",
    priceVisible: false,
  },
  {
    id: "p-019",
    slug: "echafaudage-multi-directionnel",
    name: "Échafaudage multidirectionnel modulaire",
    category: "equipements",
    image: IMG.chantier,
    shortDescription:
      "Échafaudage galvanisé, montage rapide, adapté chantiers R+1 à R+5.",
    longDescription:
      "Échafaudage tubulaire multidirectionnel, acier galvanisé à chaud, plateformes antidérapantes, stabilisateurs. Location ou vente. Montage par nos équipes si besoin.",
    featured: true,
    tags: ["Galvanisé", "Modulaire"],
    availability: "Location / Vente",
    priceVisible: false,
  },
  {
    id: "p-020",
    slug: "pompe-airless-pro",
    name: "Pompe airless professionnelle",
    category: "equipements",
    image: IMG.equipement,
    shortDescription:
      "Pompe airless haute performance pour peinture et enduit mécanisé.",
    longDescription:
      "Station airless pro 220 V, débit 3,5 L/min, pression 220 bars. Pulvérisation peinture, enduit, vernis. Accessoires inclus : pistolet, flexible 15 m, buses.",
    featured: false,
    tags: ["Airless", "Pro"],
    availability: "En stock",
    priceVisible: false,
  },
  {
    id: "p-021",
    slug: "luminaire-led-design-import",
    name: "Luminaire LED suspension design importé",
    category: "importes",
    image: IMG.interieur,
    shortDescription:
      "Suspension design contemporaine, LED intégrée, dimmable.",
    longDescription:
      "Suspension design italienne, corps métal noir mat, LED intégrée 36 W, lumière blanc chaud 3 000 K, dimmable. Idéale salon, salle à manger, réception.",
    featured: true,
    tags: ["Italie", "Dimmable"],
    availability: "Sur commande",
    priceVisible: false,
    badge: "Import",
  },
  {
    id: "p-022",
    slug: "porte-blindee-premium-import",
    name: "Porte blindée premium importée",
    category: "importes",
    image: IMG.villa,
    shortDescription:
      "Porte d'entrée blindée, isolation phonique et thermique, finitions nobles.",
    longDescription:
      "Porte blindée A2P**, double paroi acier, isolation thermique et phonique renforcée. Finitions intérieures / extérieures au choix : chêne massif, laque, placage métal. Serrure multipoints 5 points.",
    featured: false,
    tags: ["Blindée", "Import"],
    availability: "Sur commande",
    priceVisible: false,
  },
  {
    id: "p-023",
    slug: "fenetre-alu-double-vitrage",
    name: "Fenêtre aluminium double vitrage",
    category: "importes",
    image: IMG.conception,
    shortDescription:
      "Menuiserie alu rupture de pont thermique, double vitrage importé.",
    longDescription:
      "Fenêtre aluminium à rupture de pont thermique, double vitrage 4/16/4 argon, seuil bas alu, coloris au choix. Sur mesure. Fabrication européenne.",
    featured: false,
    tags: ["Alu", "Double vitrage"],
    availability: "Sur mesure",
    priceVisible: false,
  },
  {
    id: "p-024",
    slug: "escalier-marbre-sur-mesure",
    name: "Escalier marbre italien sur mesure",
    category: "revetements",
    image: IMG.marbre,
    shortDescription:
      "Habillage marches et contremarches en marbre italien, pose incluse.",
    longDescription:
      "Habillage complet d'escalier en marbre italien Carrara ou Calacatta. Marches en blocs pleins, contremarches assorties, nez de marche antidérapant possible. Mesures prises sur place, pose par notre équipe spécialisée.",
    featured: true,
    tags: ["Marbre", "Sur mesure"],
    availability: "Sur devis",
    priceVisible: false,
    badge: "Premium",
  },
];

// ============================================================
//  HELPERS
// ============================================================

export const productBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);

export const productsByCategory = (category) =>
  category === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

export const featuredProducts = () => PRODUCTS.filter((p) => p.featured);

export const relatedProducts = (product, limit = 4) =>
  PRODUCTS
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);

export const categoryName = (slug) =>
  CATEGORIES.find((c) => c.slug === slug)?.name || slug;
