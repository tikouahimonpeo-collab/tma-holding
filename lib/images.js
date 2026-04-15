// ============================================================
//  TMA HOLDING — REGISTRE IMAGES (source unique de vérité)
// ------------------------------------------------------------
//  Règle visuelle absolue : toutes les images du site doivent
//  être générées avec Nanobanana et rester strictement dans le
//  champ métier BTP / construction / rénovation / matériaux.
//
//  Chaque entrée fournit :
//    - key           : identifiant utilisé dans le code
//    - target        : chemin où déposer le fichier généré
//                      (/public/images/...)
//    - fallback      : URL provisoire (Unsplash BTP) utilisée
//                      tant que l'asset Nanobanana n'est pas
//                      encore déposé.
//    - alt           : texte alternatif SEO orienté métier
//    - category      : catégorie métier (hero, construction,
//                      renovation, ...). Sert aussi au fallback
//                      de sécurité (voir safeImage()).
//    - page / section: localisation exacte dans le site
//    - prompt        : prompt Nanobanana prêt à l'emploi
//    - styleNotes    : directives DA complémentaires
// ============================================================

const STYLE_BASE =
  "photoréaliste, lumière naturelle maîtrisée, cadrage large professionnel, " +
  "rendu 4K net, ambiance premium, couleurs sobres (bleu nuit, gris acier, " +
  "blanc, touches de bleu électrique), pas de texte, pas de logo, pas de " +
  "filigrane, contexte Côte d'Ivoire / Afrique de l'Ouest cohérent, aucun " +
  "effet cartoon ni surdesign.";

// ------------------------------------------------------------
//  REGISTRE COMPLET
// ------------------------------------------------------------

export const IMAGES = {
  // ============== HEROES ==============
  heroHome: {
    target: "/images/hero/home-construction-premium.jpg",
    fallback:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80",
    alt: "Chantier BTP premium en Côte d'Ivoire — villa moderne en construction",
    category: "hero",
    page: "/",
    section: "Hero accueil",
    prompt:
      "Vue large d'un chantier BTP haut de gamme à Abidjan en fin de journée : " +
      "ossature béton d'une villa contemporaine R+1, équipes d'ouvriers en EPI " +
      "complets (casques, gilets haute visibilité), grue en arrière-plan, " +
      "lumière dorée de fin de journée, ciel bleu profond. Atmosphère ordonnée, " +
      "propre, maîtrisée. " + STYLE_BASE,
    styleNotes:
      "Dominante bleu nuit + orange chantier. Doit pouvoir recevoir un overlay sombre à 50%.",
  },
  heroAbout: {
    target: "/images/hero/about-team-chantier.jpg",
    fallback:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1800&q=80",
    alt: "Équipe TMA Holding en concertation sur un chantier de villa à Abidjan",
    category: "hero",
    page: "/a-propos",
    section: "Hero À propos",
    prompt:
      "Équipe BTP multiculturelle ouest-africaine de 4 personnes en EPI : " +
      "chef de chantier, architecte en chemise blanche manches retroussées et " +
      "plans à la main, ingénieur avec tablette, conducteur de travaux. " +
      "Debout devant une villa contemporaine en gros œuvre à Abidjan. " +
      "Discussion professionnelle, regards concentrés. Lumière matinale. " +
      STYLE_BASE,
    styleNotes: "Mettre en avant l'expertise humaine et la mixité de l'équipe.",
  },
  heroServices: {
    target: "/images/hero/services-montage-metiers.jpg",
    fallback:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80",
    alt: "Savoir-faire BTP : construction, rénovation, peinture, revêtement",
    category: "hero",
    page: "/services",
    section: "Hero Services",
    prompt:
      "Plan large cinématographique d'un chantier d'immeuble R+5 en phase de " +
      "finition : façade propre en cours d'enduit mécanique, échafaudages " +
      "nets, ouvriers appliquant de la peinture airless, matériaux premium " +
      "(carreaux, sacs de ciment, profilés) organisés au premier plan. " +
      "Ambiance maîtrise et excellence opérationnelle. " + STYLE_BASE,
    styleNotes:
      "Doit évoquer la polyvalence : construction + rénovation + finition en un seul cadre.",
  },
  heroShop: {
    target: "/images/hero/shop-catalogue-premium.jpg",
    fallback:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1800&q=80",
    alt: "TMA Shop — catalogue matériaux BTP et finitions premium à Abidjan",
    category: "hero",
    page: "/boutique",
    section: "Hero TMA Shop",
    prompt:
      "Showroom matériaux BTP premium : présentation ordonnée de grandes dalles " +
      "effet marbre adossées à un mur, vasque design posée sur comptoir en " +
      "quartz, robinetterie chromée, cuisine moderne noire et bois en fond, " +
      "éclairage architectural chaud. Aucune personne. Ambiance galerie " +
      "haut de gamme. " + STYLE_BASE,
    styleNotes: "Doit donner envie d'explorer le catalogue. Très peu de texte en overlay.",
  },
  heroRealisations: {
    target: "/images/hero/realisations-villa-livree.jpg",
    fallback:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
    alt: "Villa contemporaine livrée par TMA Holding — Cocody, Abidjan",
    category: "hero",
    page: "/realisations",
    section: "Hero Réalisations",
    prompt:
      "Villa contemporaine fraîchement livrée à Abidjan (Cocody) : façade " +
      "épurée blanc cassé et bois, grandes baies vitrées, piscine à l'avant, " +
      "palmiers, ciel bleu tropical, lumière d'après-midi. Architecture " +
      "nette, finition parfaite. Aucune personne. " + STYLE_BASE,
    styleNotes: "Projet 'livré, clé en main' — pas de chantier visible.",
  },
  heroDevis: {
    target: "/images/hero/devis-consultation.jpg",
    fallback:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80",
    alt: "Consultation projet BTP et chiffrage avec un conseiller TMA Holding",
    category: "hero",
    page: "/devis",
    section: "Hero Devis",
    prompt:
      "Bureau d'étude BTP clair : deux personnes penchées sur un plan " +
      "architectural format A1 posé sur grande table en bois. Tablette à côté " +
      "affichant un rendu 3D de villa. Tasse de café. Lumière naturelle " +
      "venant d'une grande fenêtre. Atmosphère de conseil expert et sérieux. " +
      STYLE_BASE,
    styleNotes: "Doit transmettre : accompagnement, sérieux, expertise.",
  },
  heroContact: {
    target: "/images/hero/contact-bureau-equipe.jpg",
    fallback:
      "https://images.unsplash.com/photo-1580983230786-4b0c69a15e16?auto=format&fit=crop&w=1800&q=80",
    alt: "Bureau TMA Holding Cocody Riviera Palmeraie — accueil client",
    category: "hero",
    page: "/contact",
    section: "Hero Contact",
    prompt:
      "Hall d'entrée d'un bureau BTP premium : mur en béton ciré anthracite, " +
      "logo lumineux subtil, comptoir d'accueil en bois clair, grand écran " +
      "affichant un rendu architectural flou. Personne assise en arrière-plan " +
      "travaillant sur ordinateur. Ambiance pro, calme, accueillante. " +
      STYLE_BASE,
    styleNotes: "Doit rassurer : entreprise structurée, accueil client soigné.",
  },

  // ============== SERVICES ==============
  construction: {
    target: "/images/services/construction/villa-gros-oeuvre.jpg",
    fallback:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    alt: "Villa contemporaine en gros œuvre — structure béton et coffrage",
    category: "construction",
    page: "/services",
    section: "Carte service Construction",
    prompt:
      "Chantier de villa contemporaine R+1 à Abidjan en phase de gros œuvre : " +
      "dalle béton coulée, poteaux et poutres apparents, coffrages propres, " +
      "acier d'armature visible, 3 ouvriers en EPI s'activant, matériel " +
      "rangé au sol. Ciel clair, ombre nette. Rigueur et propreté du chantier. " +
      STYLE_BASE,
    styleNotes:
      "Communique : maîtrise du gros œuvre, rigueur, chantier organisé.",
  },
  constructionImmeuble: {
    target: "/images/services/construction/immeuble-r5-chantier.jpg",
    fallback:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    alt: "Immeuble résidentiel R+5 en construction à Abidjan",
    category: "construction",
    page: "/services",
    section: "Bloc détaillé Construction",
    prompt:
      "Immeuble résidentiel R+5 en construction à Abidjan : structure béton " +
      "élevée, grue jaune sur le côté, échafaudages métalliques organisés, " +
      "filets de protection, équipe BTP visible au niveau intermédiaire. " +
      "Vue en contre-plongée, ciel dégagé. " + STYLE_BASE,
    styleNotes:
      "Échelle : doit impressionner par la taille du chantier.",
  },
  renovation: {
    target: "/images/services/renovation/salon-renove-avant-apres.jpg",
    fallback:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    alt: "Salon entièrement rénové — parquet, peinture et éclairage modernisés",
    category: "renovation",
    page: "/services",
    section: "Carte service Rénovation",
    prompt:
      "Salon d'une maison entièrement rénové : parquet stratifié chêne clair " +
      "neuf, murs peints blanc satiné, canapé gris anthracite, éclairage " +
      "indirect chaud, fenêtre large donnant sur végétation tropicale. " +
      "Aucune personne. Atmosphère 'après rénovation' aboutie. " + STYLE_BASE,
    styleNotes: "Mettre en avant la modernisation, la propreté, la finition.",
  },
  renovationCuisine: {
    target: "/images/services/renovation/cuisine-renovee.jpg",
    fallback:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    alt: "Cuisine modernisée — façades mates et plan de travail en quartz",
    category: "renovation",
    page: "/services",
    section: "Bloc détaillé Rénovation",
    prompt:
      "Cuisine d'appartement rénovée : façades laquées noir mat, poignées " +
      "discrètes, plan de travail quartz blanc, crédence en carreaux métro " +
      "gris, hotte inox intégrée, éclairage sous meuble. Propreté irréprochable, " +
      "aucun élément cheap. " + STYLE_BASE,
    styleNotes: "Doit s'aligner avec la catégorie TMA Shop cuisines.",
  },
  peinture: {
    target: "/images/services/painting/airless-mur-blanc.jpg",
    fallback:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
    alt: "Application de peinture airless sur façade par un peintre professionnel",
    category: "peinture",
    page: "/services",
    section: "Carte service Peinture professionnelle",
    prompt:
      "Peintre professionnel en tenue blanche complète pulvérisant une peinture " +
      "airless sur un grand mur intérieur : pistolet airless visible, brume " +
      "fine de peinture, mur déjà à moitié recouvert de blanc satiné parfait, " +
      "bâches de protection au sol nettement posées. Lumière nette, rendu " +
      "impeccable. " + STYLE_BASE,
    styleNotes: "Doit montrer la technologie airless : vitesse et qualité.",
  },
  enduit: {
    target: "/images/services/enduit/projection-mecanique.jpg",
    fallback:
      "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?auto=format&fit=crop&w=1200&q=80",
    alt: "Enduit mécanique projeté sur mur par machine professionnelle",
    category: "enduit",
    page: "/services",
    section: "Carte service Enduit mécanique",
    prompt:
      "Application d'enduit mécanique projeté sur un mur extérieur d'immeuble : " +
      "machine à projeter professionnelle au premier plan, tuyau haute " +
      "pression, ouvrier en EPI dirigeant le jet, mur en cours de traitement " +
      "avec moitié enduite moitié brute. Poussière fine, scène technique " +
      "nette. " + STYLE_BASE,
    styleNotes: "Doit démontrer la dimension technique + gain de temps.",
  },
  conception: {
    target: "/images/services/conception/plans-rendu-3d.jpg",
    fallback:
      "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1200&q=80",
    alt: "Conception 2D et rendu 3D d'une villa par un architecte TMA",
    category: "conception",
    page: "/services",
    section: "Carte service Conception 2D/3D",
    prompt:
      "Bureau d'étude : grand écran 27 pouces affichant un rendu 3D " +
      "photoréaliste d'une villa contemporaine, plans architecturaux A1 à " +
      "côté, règle, stylo, tablette graphique, main d'architecte annotant " +
      "un plan. Ambiance focus créatif. " + STYLE_BASE,
    styleNotes: "Doit rassurer : expertise technique avant la construction.",
  },
  revetement: {
    target: "/images/services/finition/pose-carrelage-premium.jpg",
    fallback:
      "https://images.unsplash.com/photo-1556912167-f556f1f39faa?auto=format&fit=crop&w=1200&q=80",
    alt: "Pose de grands carreaux effet marbre par un carreleur professionnel",
    category: "revetement",
    page: "/services",
    section: "Carte service Revêtement & finition",
    prompt:
      "Carreleur professionnel posant une grande dalle effet marbre 60×60 " +
      "sur sol de salon : genouillères, truelle crantée, colle étalée, " +
      "niveau à bulle laser visible. Pose parfaitement alignée, joints " +
      "fins. Lumière neutre. Précision artisanale. " + STYLE_BASE,
    styleNotes: "Doit communiquer : finition premium, pose maîtrisée.",
  },
  importation: {
    target: "/images/services/importation/conteneurs-port-abidjan.jpg",
    fallback:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    alt: "Conteneurs de matériaux BTP importés au port autonome d'Abidjan",
    category: "importation",
    page: "/services",
    section: "Carte service Importation",
    prompt:
      "Terminal du port autonome d'Abidjan : rangées de conteneurs maritimes " +
      "empilés (rouge, bleu, vert), grue portuaire en mouvement, semi-remorque " +
      "au premier plan chargé d'un conteneur marqué sobrement. Ciel clair, " +
      "logistique professionnelle. " + STYLE_BASE,
    styleNotes: "Doit évoquer la supply chain internationale.",
  },

  // ============== CONTEXTE / AMBIANCES ==============
  villa: {
    target: "/images/context/villa-livree-nuit.jpg",
    fallback:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    alt: "Villa premium livrée par TMA Holding — façade éclairée en soirée",
    category: "construction",
    page: "Réutilisable",
    section: "Carte projet / encart",
    prompt:
      "Villa contemporaine premium vue de l'extérieur en début de soirée : " +
      "façade blanche et bois, grandes baies vitrées éclairées de l'intérieur, " +
      "piscine à débordement, palmiers, ciel crépusculaire bleu-orangé. " +
      "Architecture pure. " + STYLE_BASE,
    styleNotes: "Image 'dream home' — fort pouvoir d'aspiration.",
  },
  immeuble: {
    target: "/images/context/immeuble-facade-livree.jpg",
    fallback:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    alt: "Immeuble résidentiel R+4 livré à Cocody par TMA Holding",
    category: "construction",
    page: "Réutilisable",
    section: "Carte projet",
    prompt:
      "Immeuble résidentiel R+4 livré à Cocody : façade claire avec balcons " +
      "filants, menuiseries aluminium anthracite, rez-de-chaussée commerces. " +
      "Vue en légère contre-plongée, ciel dégagé, végétation tropicale en " +
      "bord de rue. " + STYLE_BASE,
    styleNotes: "Projet livré, habité. Pas de chantier visible.",
  },
  interieur: {
    target: "/images/context/interieur-salon-premium.jpg",
    fallback:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    alt: "Salon haut de gamme livré — finition intérieure TMA Holding",
    category: "renovation",
    page: "Réutilisable",
    section: "Carte projet intérieur",
    prompt:
      "Salon d'une villa livrée : grand canapé sectionnel gris clair, table " +
      "basse marbre, grand tapis beige, baie vitrée pleine hauteur sur " +
      "jardin tropical, sol en dalle effet pierre. Lumière naturelle " +
      "douce. Aucune personne. Finition impeccable. " + STYLE_BASE,
    styleNotes: "Doit montrer la qualité de finition d'un projet terminé.",
  },
  chantier: {
    target: "/images/context/chantier-equipe-action.jpg",
    fallback:
      "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?auto=format&fit=crop&w=1200&q=80",
    alt: "Équipe TMA Holding en pleine action sur un chantier de construction",
    category: "construction",
    page: "Réutilisable",
    section: "Bloc ambiance",
    prompt:
      "Chantier BTP ivoirien en pleine activité : équipe de 5 ouvriers en " +
      "EPI (casques, gilets, bottes) coordonnée, un contremaître avec plans, " +
      "grue mobile, matériaux organisés. Vue grand-angle. Scène vivante " +
      "mais ordonnée. " + STYLE_BASE,
    styleNotes: "Communique : équipe sérieuse, chantier organisé.",
  },
  equipe: {
    target: "/images/context/equipe-portrait-chantier.jpg",
    fallback:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    alt: "Portrait de l'équipe projet TMA Holding devant un chantier",
    category: "about",
    page: "/a-propos",
    section: "Bloc valeurs / équipe",
    prompt:
      "Portrait groupé de 4 professionnels BTP ouest-africains devant " +
      "un chantier flou en fond : architecte femme en chemise blanche, chef " +
      "de chantier avec casque, ingénieur avec tablette, jeune conducteur " +
      "de travaux. Regards confiants, légers sourires, cadrage poitrine. " +
      STYLE_BASE,
    styleNotes: "Doit humaniser la marque et renforcer la crédibilité.",
  },

  // ============== TMA SHOP — PRODUITS ==============
  carrelage: {
    target: "/images/shop/carreaux/carreaux-ceramique-gris.jpg",
    fallback:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Carreaux grès cérame rectifiés gris — pose intérieure",
    category: "shop-carreaux",
    page: "/boutique",
    section: "Catalogue — Carreaux",
    prompt:
      "Packshot catalogue : grandes dalles de grès cérame rectifié gris " +
      "anthracite mat 60×120 présentées en léger angle sur fond blanc " +
      "dégradé gris, texture fine visible, reflet subtil. Esthétique " +
      "catalogue premium. " + STYLE_BASE,
    styleNotes: "Format produit catalogue. Éclairage studio.",
  },
  marbre: {
    target: "/images/shop/carreaux/carreaux-marbre-60x60.jpg",
    fallback:
      "https://images.unsplash.com/photo-1617850687395-620757feb1f3?auto=format&fit=crop&w=1200&q=80",
    alt: "Carreaux effet marbre poli blanc veiné or 60×60",
    category: "shop-carreaux",
    page: "/boutique",
    section: "Catalogue — Carreaux effet marbre",
    prompt:
      "Packshot catalogue : grand carreau effet marbre blanc Calacatta " +
      "veiné or 60×60 posé légèrement incliné sur fond studio blanc, " +
      "reflet profond, veinage or contrasté. " + STYLE_BASE,
    styleNotes: "Doit évoquer luxe + hall d'entrée premium.",
  },
  sanitaire: {
    target: "/images/shop/sanitaires/vasque-design.jpg",
    fallback:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    alt: "Vasque salle de bain design céramique blanche sur meuble suspendu",
    category: "shop-sanitaires",
    page: "/boutique",
    section: "Catalogue — Sanitaires",
    prompt:
      "Packshot : vasque rectangulaire céramique blanche posée sur meuble " +
      "suspendu bois noyer, robinet chromé fixé au mur, miroir rond " +
      "rétro-éclairé en fond, carrelage terracotta mat. Éclairage " +
      "architectural chaud. " + STYLE_BASE,
    styleNotes: "Ambiance salle de bain haut de gamme.",
  },
  salleBain: {
    target: "/images/shop/accessoires-bain/miroir-led.jpg",
    fallback:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    alt: "Miroir LED anti-buée rétro-éclairé pour salle de bain",
    category: "shop-accessoires-bain",
    page: "/boutique",
    section: "Catalogue — Accessoires salle de bain",
    prompt:
      "Packshot : miroir rectangulaire rétro-éclairé LED anti-buée mural, " +
      "halo doux autour, fixé sur mur gris béton, vasque partielle visible " +
      "en bas de cadre. Ambiance spa moderne. " + STYLE_BASE,
    styleNotes: "Lumière diffuse mettant en valeur le halo LED.",
  },
  cuisine: {
    target: "/images/shop/cuisines/cuisine-moderne-noir-bois.jpg",
    fallback:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Cuisine moderne façades noir mat et plan de travail quartz",
    category: "shop-cuisines",
    page: "/boutique",
    section: "Catalogue — Cuisines modernes",
    prompt:
      "Cuisine contemporaine en îlot : façades noir mat sans poignées, " +
      "plan de travail quartz blanc, crédence marbre veiné, hotte aspirante " +
      "intégrée, suspensions noires. Lumière naturelle + éclairage LED " +
      "sous meubles. Aucune personne. " + STYLE_BASE,
    styleNotes: "Doit s'aligner avec la rénovation cuisine.",
  },
  robinet: {
    target: "/images/shop/robinetterie/mitigeur-chrome.jpg",
    fallback:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    alt: "Mitigeur lavabo chromé premium finition miroir",
    category: "shop-robinetterie",
    page: "/boutique",
    section: "Catalogue — Robinetterie",
    prompt:
      "Packshot : mitigeur lavabo monocommande chromé finition miroir posé " +
      "sur vasque céramique blanche, goutte d'eau suspendue, reflets nets, " +
      "fond noir profond. Focus rapproché. " + STYLE_BASE,
    styleNotes: "Rendu catalogue produit — détail luxueux.",
  },
  peintureShop: {
    target: "/images/shop/revetements/parquet-stratifie.jpg",
    fallback:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    alt: "Parquet stratifié effet chêne clair — pose dans salon moderne",
    category: "shop-revetements",
    page: "/boutique",
    section: "Catalogue — Revêtements",
    prompt:
      "Sol de salon entièrement posé en parquet stratifié effet chêne clair, " +
      "lames longues AC5, mur blanc, canapé partiel en haut de cadre, " +
      "lumière rasante mettant en valeur la texture du bois. " + STYLE_BASE,
    styleNotes: "Doit prouver la qualité du rendu chêne clair.",
  },
  ciment: {
    target: "/images/shop/materiaux/sac-ciment-cpj425.jpg",
    fallback:
      "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&w=1200&q=80",
    alt: "Sac de ciment gris CPJ 42.5 de 50 kg pour chantier BTP",
    category: "shop-materiaux",
    page: "/boutique",
    section: "Catalogue — Matériaux BTP",
    prompt:
      "Sac de ciment gris CPJ 42.5 de 50 kg neuf posé debout sur palette " +
      "en bois, fond atelier gris béton, petite poussière de ciment au sol, " +
      "étiquette générique sans marque lisible. Éclairage industriel " +
      "sobre. " + STYLE_BASE,
    styleNotes: "Aucune marque commerciale visible.",
  },
  sable: {
    target: "/images/shop/materiaux/tas-sable-construction.jpg",
    fallback:
      "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80",
    alt: "Tas de sable lavé pour béton — livraison chantier Abidjan",
    category: "shop-materiaux",
    page: "/boutique",
    section: "Catalogue — Matériaux BTP",
    prompt:
      "Tas de sable fin lavé jaune clair sur une dalle béton de chantier, " +
      "pelle plantée dedans, ciel dégagé, conteneur de chantier flou en " +
      "arrière-plan. Matériau propre, prêt à l'emploi. " + STYLE_BASE,
    styleNotes: "Doit paraître livré et prêt à l'emploi.",
  },
  gravier: {
    target: "/images/shop/materiaux/tas-gravier.jpg",
    fallback:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    alt: "Gravier concassé 5/15 pour béton — livraison BTP",
    category: "shop-materiaux",
    page: "/boutique",
    section: "Catalogue — Matériaux BTP",
    prompt:
      "Tas de gravier concassé gris 5/15 sur dalle de chantier, texture " +
      "nette, pelle déposée sur le côté. Lumière naturelle neutre. " +
      STYLE_BASE,
    styleNotes: "Gros plan texture + plan large du tas.",
  },
  peintureShopMat: {
    target: "/images/shop/materiaux/pots-peinture-pro.jpg",
    fallback:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
    alt: "Pots de peinture professionnelle pour bâtiment — blanc satiné",
    category: "shop-materiaux",
    page: "/boutique",
    section: "Catalogue — Peintures",
    prompt:
      "Trois pots de peinture professionnelle 20 L (blanc, gris perle, " +
      "noir) alignés sur bâche de protection sur parquet, pinceau large et " +
      "rouleau neufs à côté, mur partiellement peint en blanc en fond. " +
      "Éclairage neutre, étiquettes sobres sans marque. " + STYLE_BASE,
    styleNotes: "Doit se lier à la section peinture airless.",
  },
  equipement: {
    target: "/images/shop/equipements/machine-projection-enduit.jpg",
    fallback:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    alt: "Machine de projection d'enduit professionnelle pour chantier",
    category: "shop-equipements",
    page: "/boutique",
    section: "Catalogue — Équipements de chantier",
    prompt:
      "Machine de projection d'enduit professionnelle (type PFT) sur roues, " +
      "dans un hangar d'équipements BTP, éclairage industriel, sol béton, " +
      "flexibles enroulés. Perspective 3/4, produit dominant le cadre. " +
      STYLE_BASE,
    styleNotes: "Aucune marque commerciale visible.",
  },

  // ============== TÉMOIGNAGES (clients) ==============
  client1: {
    target: "/images/team/client-1.jpg",
    fallback:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    alt: "Portrait d'un client propriétaire ayant fait construire sa villa avec TMA Holding",
    category: "testimonial",
    page: "/",
    section: "Bloc témoignages",
    prompt:
      "Portrait professionnel d'un homme ouest-africain 45 ans, chemise " +
      "claire décontractée, sourire léger, fond flou suggérant une villa " +
      "livrée, lumière naturelle douce, cadrage poitrine. Aucune marque. " +
      STYLE_BASE,
    styleNotes: "Style portrait authentique, pas 'stock photo'.",
  },
  client2: {
    target: "/images/team/client-2.jpg",
    fallback:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    alt: "Portrait d'une cliente architecte ayant collaboré avec TMA Holding",
    category: "testimonial",
    page: "/",
    section: "Bloc témoignages",
    prompt:
      "Portrait professionnel d'une femme ouest-africaine 38 ans, tenue " +
      "business élégante, regard confiant, fond d'intérieur contemporain " +
      "flou, cadrage poitrine. " + STYLE_BASE,
    styleNotes: "Style portrait authentique.",
  },
  client3: {
    target: "/images/team/client-3.jpg",
    fallback:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    alt: "Portrait d'un client promoteur immobilier partenaire de TMA Holding",
    category: "testimonial",
    page: "/",
    section: "Bloc témoignages",
    prompt:
      "Portrait professionnel d'un homme ouest-africain 50 ans, costume " +
      "sombre sans cravate, cadrage poitrine, fond bureau moderne flou. " +
      STYLE_BASE,
    styleNotes: "Style portrait authentique.",
  },
};

// ------------------------------------------------------------
//  HELPERS
// ------------------------------------------------------------

/**
 * Renvoie l'URL active d'une image. Par défaut, utilise le
 * fallback Unsplash tant que l'asset Nanobanana n'a pas été
 * déposé dans /public/images. Une fois le fichier généré,
 * mettez USE_LOCAL = true (ou passez par variable d'env).
 */
const USE_LOCAL = false;

export function img(key) {
  const entry = IMAGES[key];
  if (!entry) return "";
  return USE_LOCAL ? entry.target : entry.fallback;
}

export function imgMeta(key) {
  return IMAGES[key] || null;
}

/** Toutes les entrées regroupées par catégorie (utile pour docs). */
export function imagesByCategory() {
  return Object.entries(IMAGES).reduce((acc, [key, v]) => {
    const cat = v.category || "uncategorized";
    (acc[cat] = acc[cat] || []).push({ key, ...v });
    return acc;
  }, {});
}
