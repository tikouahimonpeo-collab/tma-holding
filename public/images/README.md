# TMA Holding — Dépôt des images Nanobanana

Règle : **toutes** les images du site doivent être générées avec **Nanobanana**
et rester strictement dans le champ BTP / construction / rénovation / matériaux.

## Comment utiliser ce dossier

1. Ouvrez [`lib/images.js`](../../lib/images.js) (source unique de vérité).
2. Pour chaque entrée, générez l'image avec le `prompt` fourni.
3. Déposez le fichier au chemin `target` indiqué (relatif à `/public`).
4. Quand **toutes** les images sont déposées, passez `USE_LOCAL = true`
   dans `lib/images.js` pour que le site serve les fichiers locaux au lieu
   du fallback Unsplash.

## Arborescence attendue

```
public/images/
├── hero/                          (visuels pleine largeur par page)
│   ├── home-construction-premium.jpg
│   ├── about-team-chantier.jpg
│   ├── services-montage-metiers.jpg
│   ├── shop-catalogue-premium.jpg
│   ├── realisations-villa-livree.jpg
│   ├── devis-consultation.jpg
│   └── contact-bureau-equipe.jpg
│
├── services/
│   ├── construction/
│   │   ├── villa-gros-oeuvre.jpg
│   │   └── immeuble-r5-chantier.jpg
│   ├── renovation/
│   │   ├── salon-renove-avant-apres.jpg
│   │   └── cuisine-renovee.jpg
│   ├── painting/
│   │   └── airless-mur-blanc.jpg
│   ├── enduit/
│   │   └── projection-mecanique.jpg
│   ├── conception/
│   │   └── plans-rendu-3d.jpg
│   ├── finition/
│   │   └── pose-carrelage-premium.jpg
│   └── importation/
│       └── conteneurs-port-abidjan.jpg
│
├── shop/
│   ├── carreaux/
│   │   ├── carreaux-ceramique-gris.jpg
│   │   └── carreaux-marbre-60x60.jpg
│   ├── sanitaires/
│   │   └── vasque-design.jpg
│   ├── cuisines/
│   │   └── cuisine-moderne-noir-bois.jpg
│   ├── robinetterie/
│   │   └── mitigeur-chrome.jpg
│   ├── accessoires-bain/
│   │   └── miroir-led.jpg
│   ├── revetements/
│   │   └── parquet-stratifie.jpg
│   ├── materiaux/
│   │   ├── sac-ciment-cpj425.jpg
│   │   ├── tas-sable-construction.jpg
│   │   ├── tas-gravier.jpg
│   │   └── pots-peinture-pro.jpg
│   └── equipements/
│       └── machine-projection-enduit.jpg
│
├── context/                       (réutilisable, cartes projets & encarts)
│   ├── villa-livree-nuit.jpg
│   ├── immeuble-facade-livree.jpg
│   ├── interieur-salon-premium.jpg
│   ├── chantier-equipe-action.jpg
│   └── equipe-portrait-chantier.jpg
│
└── team/                          (portraits témoignages)
    ├── client-1.jpg
    ├── client-2.jpg
    └── client-3.jpg
```

## Format & poids

- **Héros** : 1920×1080 (ratio 16:9), JPG qualité 80, ≤ 350 Ko.
- **Cartes services / produits** : 1200×800 (ratio 3:2), JPG qualité 80, ≤ 200 Ko.
- **Portraits** : 400×400 carré, JPG qualité 80, ≤ 60 Ko.

## Règles visuelles non négociables

- Photoréaliste, pas de cartoon, pas de surdesign.
- Contexte BTP Abidjan / Afrique de l'Ouest cohérent.
- Aucune marque, aucun logo, aucun texte visible.
- Palette sobre : bleu nuit, gris acier, blanc, touches bleu électrique.
- Jamais d'image hors sujet (lifestyle, paysages, bureaux corporate vides).

## Documentation complète

Le mapping section → image → prompt Nanobanana → alt SEO est dans
[`docs/IMAGES.md`](../../docs/IMAGES.md).
