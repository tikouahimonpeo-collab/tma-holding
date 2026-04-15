import { IMG } from "./brand";

// Réalisations TMA Holding — exemples premium (remplacez par vos vrais projets + photos)
export const PROJECTS = [
  {
    slug: "villa-cocody-prestige",
    title: "Villa Cocody Prestige",
    category: "Construction",
    location: "Cocody Angré, Abidjan",
    year: 2025,
    tags: ["Construction neuve", "Résidentiel", "Luxe"],
    cover: IMG.villa,
    gallery: [IMG.villa, IMG.interieur, IMG.cuisine, IMG.salleBain],
    budget: "240 M FCFA",
    surface: "420 m²",
    duration: "5 mois",
    summary:
      "Villa R+1 de prestige, piscine à débordement, finitions marbre et parquet massif. Livrée clé en main avec respect du budget et des délais.",
    story: [
      "Le client, un entrepreneur de retour de diaspora, voulait une résidence familiale qui reflète sa réussite sans ostentation. Notre équipe a conçu une architecture contemporaine jouant sur les volumes ouverts et les matériaux nobles.",
      "La construction a mobilisé 22 ouvriers, un conducteur de travaux dédié et des matériaux sélectionnés à la source (carrelage marbre italien, menuiserie alu Technal, sanitaire haut de gamme).",
      "Livraison en 5 mois, 100 % du budget respecté. Le client suit désormais chacune de nos réalisations et nous a confié un second projet.",
    ],
    results: [
      { k: "100%", v: "Budget respecté" },
      { k: "5 mois", v: "Livraison clé en main" },
      { k: "420 m²", v: "Surface construite" },
    ],
  },
  {
    slug: "immeuble-riviera-r5",
    title: "Immeuble Résidentiel Riviera R+5",
    category: "Construction",
    location: "Riviera Palmeraie, Abidjan",
    year: 2024,
    tags: ["Immeuble", "Résidentiel", "Investissement"],
    cover: IMG.immeuble,
    gallery: [IMG.immeuble, IMG.chantier, IMG.interieur, IMG.cuisine],
    budget: "1,2 Md FCFA",
    surface: "2 100 m²",
    duration: "14 mois",
    summary:
      "Immeuble R+5 de 18 appartements haut de gamme, parking sous-sol, rooftop aménagé. Revêtement Alucobond, façade signature.",
    story: [
      "Un promoteur immobilier nous a confié la construction complète d'un immeuble locatif premium destiné à la diaspora et aux expatriés.",
      "Nous avons géré l'ensemble : études techniques, gros œuvre, second œuvre, revêtement de façade Alucobond, espaces communs design et livraison des 18 lots.",
      "Taux d'occupation 100 % dès la livraison. Retour sur investissement en 7 ans estimé par le client.",
    ],
    results: [
      { k: "18", v: "Appartements livrés" },
      { k: "100%", v: "Occupation à la livraison" },
      { k: "14 mois", v: "Délais tenus" },
    ],
  },
  {
    slug: "renovation-palmeraie",
    title: "Rénovation Villa Palmeraie",
    category: "Rénovation",
    location: "Cocody Palmeraie, Abidjan",
    year: 2025,
    tags: ["Rénovation", "Intérieur", "Premium"],
    cover: IMG.interieur,
    gallery: [IMG.interieur, IMG.cuisine, IMG.salleBain, IMG.revetement],
    budget: "85 M FCFA",
    surface: "320 m²",
    duration: "2,5 mois",
    summary:
      "Rénovation totale d'une villa familiale : cuisine ouverte sur mesure, 4 salles de bain italiennes, peinture airless, carrelage marbre.",
    story: [
      "Les propriétaires voulaient moderniser sans reconstruire. Nous avons repensé la circulation, ouvert la cuisine sur le séjour et refait les 4 salles de bain à l'italienne.",
      "Peinture airless sur l'ensemble des murs (fini velouté haut de gamme), carrelage effet marbre au sol, dressing sur mesure dans la suite parentale.",
      "Livraison en 2,5 mois pendant que la famille était en voyage. Effet 'wow' total au retour.",
    ],
    results: [
      { k: "2,5 mois", v: "Rénovation complète" },
      { k: "4", v: "Salles de bain italiennes" },
      { k: "100%", v: "Clients conquis" },
    ],
  },
  {
    slug: "siege-entreprise-plateau",
    title: "Siège Corporate Le Plateau",
    category: "Commercial",
    location: "Le Plateau, Abidjan",
    year: 2024,
    tags: ["Commercial", "Corporate", "Aménagement"],
    cover: IMG.conception,
    gallery: [IMG.conception, IMG.interieur, IMG.revetement],
    budget: "180 M FCFA",
    surface: "680 m²",
    duration: "4 mois",
    summary:
      "Aménagement d'un siège social sur 680 m² : open-spaces, salles de réunion vitrées, réception signature, revêtement mural design.",
    story: [
      "Une entreprise de services financiers nous a confié l'aménagement complet de son nouveau siège dans la Tour du Plateau.",
      "Espaces ouverts acoustiquement traités, 6 salles de réunion vitrées, réception en marbre signature, mobilier intégré.",
      "Livraison à J-2 du déménagement prévu. Équipe client opérationnelle dès le premier jour.",
    ],
    results: [
      { k: "680 m²", v: "Aménagés" },
      { k: "4 mois", v: "Studio → opérationnel" },
      { k: "6", v: "Salles de réunion" },
    ],
  },
  {
    slug: "revetement-marbre-villa",
    title: "Revêtement Marbre & Granit Villa",
    category: "Revêtement",
    location: "Bingerville, Abidjan",
    year: 2025,
    tags: ["Revêtement", "Marbre", "Finitions"],
    cover: IMG.marbre,
    gallery: [IMG.marbre, IMG.revetement, IMG.salleBain],
    budget: "45 M FCFA",
    surface: "280 m²",
    duration: "6 semaines",
    summary:
      "Pose de marbre italien sur sols et escaliers, plan de travail granit, façade pierre naturelle.",
    story: [
      "Le client souhaitait des finitions d'exception pour sa villa. Nous avons sourcé directement le marbre Calacatta en Italie et le granit noir du Zimbabwe.",
      "Pose millimétrique par notre équipe spécialisée revêtement. Escalier suspendu en marbre 3 cm, plans de travail cuisine granit poli miroir.",
      "Résultat : une villa qui rivalise avec les références internationales. Photographiée par plusieurs magazines déco régionaux.",
    ],
    results: [
      { k: "280 m²", v: "Marbre posé" },
      { k: "Italie", v: "Sourcing direct" },
      { k: "6 sem.", v: "Exécution" },
    ],
  },
  {
    slug: "piscine-debordement-riviera",
    title: "Piscine à Débordement Riviera",
    category: "Aménagement",
    location: "Riviera Bonoumin, Abidjan",
    year: 2025,
    tags: ["Piscine", "Extérieur", "Luxe"],
    cover: IMG.revetement,
    gallery: [IMG.revetement, IMG.villa, IMG.chantier],
    budget: "32 M FCFA",
    surface: "12 × 5 m",
    duration: "8 semaines",
    summary:
      "Piscine à débordement avec plage immergée, local technique, éclairage LED, terrasse bois exotique.",
    story: [
      "Conception et réalisation complète d'une piscine à débordement offrant une vue plongeante sur le jardin.",
      "Étanchéité premium, liner bleu nuit, projecteurs LED RGB, filtration automatique, traitement au sel.",
      "Terrasse en bois ipé autour du bassin, douche extérieure et pool-house attenant.",
    ],
    results: [
      { k: "8 sem.", v: "Livraison" },
      { k: "60 m³", v: "Volume d'eau" },
      { k: "LED RGB", v: "Ambiance sur mesure" },
    ],
  },
];

export const projectBySlug = (slug) => PROJECTS.find((p) => p.slug === slug);
