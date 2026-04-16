// ============================================================
//  TMA HOLDING — SOURCE DE VÉRITÉ BRANDING
//  Modifiez CE fichier pour changer contacts / copy partout.
// ============================================================

export const BRAND = {
  name: "TMA Holding",
  shop: "TMA Shop",
  tagline: "Génie civil · Prestation de services & divers",
  baseline: "Bâtir l'excellence en Côte d'Ivoire",
  description:
    "TMA Holding — entreprise BTP premium à Abidjan. Construction, rénovation, revêtement, peinture professionnelle, conception 2D/3D et matériaux via TMA Shop. Expertise, délais tenus, qualité garantie.",
  // Contact WhatsApp Business principal
  phone: "+86 132 6591 2468",
  phoneRaw: "+8613265912468",
  whatsapp: "8613265912468", // format wa.me, sans +
  // Ligne locale Côte d'Ivoire
  phoneLocal: "+225 05 85 31 81 52",
  phoneLocalRaw: "+2250585318152",
  email: "tmaholdingci@gmail.com",
  emailDevis: "tmaholdingci@gmail.com",
  address: {
    line1: "Cocody Riviera Palmeraie",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    full: "Cocody Riviera Palmeraie, Abidjan, Côte d'Ivoire",
  },
  hours: "Lun – Sam · 08h – 19h",
  social: {
    instagram: "https://instagram.com/tmaholding",
    facebook: "https://facebook.com/tmaholding",
    linkedin: "https://linkedin.com/company/tmaholding",
    tiktok: "https://tiktok.com/@tmaholding",
    youtube: "https://youtube.com/@tmaholding",
  },
  legal: {
    rccm: "CI-ABJ-2015-B-XXXX",
    year: new Date().getFullYear(),
  },
};

// ============================================================
//  LIENS D'ACTION — WhatsApp, tel:, mailto:
// ============================================================

export const waLink = (message) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message || "")}`;

export const WA = {
  devis: waLink(
    "Bonjour TMA Holding, je souhaite demander un devis pour un projet BTP. Voici les détails :"
  ),
  rappel: waLink(
    "Bonjour TMA Holding, je souhaite être rappelé pour mon projet de construction."
  ),
  info: waLink(
    "Bonjour TMA Holding, je veux plus d'informations sur vos services."
  ),
  catalogue: waLink(
    "Bonjour TMA Shop, je veux recevoir le catalogue complet avec les prix."
  ),
  prix: (produit) =>
    waLink(
      `Bonjour TMA Shop, je veux le prix de ce produit : ${produit}.`
    ),
  commande: (produit) =>
    waLink(
      `Bonjour TMA Shop, je souhaite commander ce produit : ${produit}. Merci de me confirmer le prix et la livraison.`
    ),
  service: (service) =>
    waLink(
      `Bonjour TMA Holding, je souhaite plus d'informations sur le service : ${service}.`
    ),
  projet: (projet) =>
    waLink(
      `Bonjour TMA Holding, je suis intéressé par un projet similaire à : ${projet}.`
    ),
  general: waLink("Bonjour TMA Holding, j'ai une question."),
};

export const TEL = `tel:${BRAND.phoneRaw}`;
export const TEL_LOCAL = `tel:${BRAND.phoneLocalRaw}`;
export const MAILTO = `mailto:${BRAND.email}`;
export const MAILTO_DEVIS = `mailto:${BRAND.emailDevis}`;

// ============================================================
//  NAVIGATION PRINCIPALE
// ============================================================

export const NAV = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "TMA Shop", href: "/boutique" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ============================================================
//  COPY — messages marketing clés réutilisables
// ============================================================

export const COPY = {
  ctaDevis: "Demander un devis",
  ctaDevisLong: "Obtenir mon devis gratuit",
  ctaCommander: "Commander sur WhatsApp",
  ctaWhatsapp: "Écrire sur WhatsApp",
  ctaAppeler: "Appeler maintenant",
  ctaVoirPlus: "Voir plus",
  ctaCatalogue: "Voir le catalogue",
  promise: "Réponse en 24 h · Devis gratuit · Confidentialité totale",
};

// ============================================================
//  IMAGERIE — Délègue au registre Nanobanana (lib/images.js).
//  La source unique de vérité des visuels est lib/images.js :
//  chaque image y est documentée avec son prompt, son alt,
//  sa catégorie métier et son chemin /public/images cible.
// ============================================================

import { img as srcOf } from "./images";

export const IMG = {
  heroHome: srcOf("heroHome"),
  heroServices: srcOf("heroServices"),
  heroRealisations: srcOf("heroRealisations"),
  heroShop: srcOf("heroShop"),
  heroContact: srcOf("heroContact"),
  heroAbout: srcOf("heroAbout"),
  heroDevis: srcOf("heroDevis"),
  construction: srcOf("construction"),
  renovation: srcOf("renovation"),
  revetement: srcOf("revetement"),
  conception: srcOf("conception"),
  enduit: srcOf("enduit"),
  importation: srcOf("importation"),
  villa: srcOf("villa"),
  immeuble: srcOf("immeuble"),
  interieur: srcOf("interieur"),
  cuisine: srcOf("cuisine"),
  salleBain: srcOf("salleBain"),
  ciment: srcOf("ciment"),
  carrelage: srcOf("carrelage"),
  marbre: srcOf("marbre"),
  sanitaire: srcOf("sanitaire"),
  robinet: srcOf("robinet"),
  sable: srcOf("sable"),
  gravier: srcOf("gravier"),
  peinture: srcOf("peinture"),
  peintureShopMat: srcOf("peintureShopMat"),
  chantier: srcOf("chantier"),
  equipe: srcOf("equipe"),
  equipement: srcOf("equipement"),
  client1: srcOf("client1"),
  client2: srcOf("client2"),
  client3: srcOf("client3"),
  logo: "/logo-tma.jpg",
};
