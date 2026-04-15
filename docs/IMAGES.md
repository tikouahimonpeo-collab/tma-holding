# TMA Holding — Stratégie visuelle Nanobanana

## Règle absolue

Toutes les images du site sont générées avec **Nanobanana** et restent
strictement dans le champ **BTP / construction / rénovation / matériaux /
architecture / finition**. Aucune image générique, aucun visuel hors
contexte, aucun placeholder lifestyle sans lien métier.

## Source unique de vérité

Le registre technique se trouve dans [`lib/images.js`](../lib/images.js).
Chaque entrée contient : `target`, `fallback`, `alt`, `category`, `page`,
`section`, `prompt`, `styleNotes`.

---

## Inventaire pages & sections

| Page | Sections avec image | Clés registre |
|------|--------------------|---------------|
| **/** (accueil) | Hero, services (x6), témoignages (x3), réalisations récentes, CTA final | `heroHome`, `construction`, `renovation`, `peinture`, `enduit`, `conception`, `revetement`, `client1`, `client2`, `client3`, `villa`, `immeuble`, `interieur` |
| **/a-propos** | Hero, bloc équipe, bloc valeurs | `heroAbout`, `equipe`, `chantier` |
| **/services** | Hero, 7 cartes services, 6 blocs détaillés | `heroServices`, `construction`, `constructionImmeuble`, `renovation`, `renovationCuisine`, `peinture`, `enduit`, `conception`, `revetement`, `importation` |
| **/boutique** | Hero, catégories, produits featured, catalogue complet | `heroShop`, + toutes les clés `shop-*` + `cuisine`, `salleBain`, `marbre`, `carrelage`, `sanitaire`, `robinet`, `ciment`, `sable`, `gravier`, `peinture`, `equipement`, `peintureShop` |
| **/boutique/[slug]** | Image produit plein écran, related products | Hérite de la clé image définie dans `lib/products.js` |
| **/realisations** | Hero, grille projets, avant/après | `heroRealisations`, `villa`, `immeuble`, `interieur`, `cuisine`, `renovation` |
| **/devis** | Hero | `heroDevis` |
| **/contact** | Hero, bloc carte | `heroContact` |

---

## Style Nanobanana (directives communes)

Style baseline injecté dans chaque prompt :

> photoréaliste, lumière naturelle maîtrisée, cadrage large professionnel,
> rendu 4K net, ambiance premium, couleurs sobres (bleu nuit, gris acier,
> blanc, touches de bleu électrique), pas de texte, pas de logo, pas de
> filigrane, contexte Côte d'Ivoire / Afrique de l'Ouest cohérent, aucun
> effet cartoon ni surdesign.

### Interdits

- Paysages sans lien métier.
- Personnes lifestyle hors BTP.
- Bureaux génériques non liés à l'architecture.
- Abstractions gadgets ou illustrations fantaisistes.
- Marques commerciales visibles, logos tiers, filigranes.

---

## Mapping détaillé (extrait — voir `lib/images.js` pour la source complète)

### Héros

- **heroHome** — `/images/hero/home-construction-premium.jpg`
  Vue large chantier BTP premium à Abidjan, villa R+1 en ossature béton,
  équipe en EPI, grue, lumière dorée. *Alt :* "Chantier BTP premium en
  Côte d'Ivoire — villa moderne en construction".

- **heroAbout** — `/images/hero/about-team-chantier.jpg`
  Équipe multiculturelle ouest-africaine (chef de chantier, architecte,
  ingénieur, conducteur de travaux) devant villa en gros œuvre.

- **heroServices** — `/images/hero/services-montage-metiers.jpg`
  Plan large immeuble R+5 en finition : enduit mécanique, peinture
  airless, matériaux premium au sol. Évoque la polyvalence métier.

- **heroShop** — `/images/hero/shop-catalogue-premium.jpg`
  Showroom matériaux BTP : dalles effet marbre, vasque design, robinetterie
  chromée, cuisine noire et bois. Ambiance galerie haut de gamme.

- **heroRealisations** — `/images/hero/realisations-villa-livree.jpg`
  Villa contemporaine livrée à Cocody : façade blanc cassé + bois, piscine,
  palmiers. Projet abouti.

- **heroDevis** — `/images/hero/devis-consultation.jpg`
  Bureau d'étude : deux personnes sur plans A1, tablette avec rendu 3D,
  lumière naturelle. Évoque conseil expert.

- **heroContact** — `/images/hero/contact-bureau-equipe.jpg`
  Hall d'entrée bureau BTP premium : béton ciré, comptoir bois clair,
  écran affichant rendu architectural. Rassure sur la structure.

### Services

- **construction** → villa contemporaine R+1 en gros œuvre, coffrage propre.
- **constructionImmeuble** → immeuble R+5 avec grue et échafaudages.
- **renovation** → salon entièrement rénové, parquet chêne clair, peinture
  blanche satinée.
- **renovationCuisine** → cuisine appartement rénovée façades noir mat +
  quartz blanc.
- **peinture** → peintre pro en tenue blanche appliquant peinture airless
  sur mur intérieur.
- **enduit** → machine à projeter + ouvrier + mur en cours d'enduit
  mécanique.
- **conception** → écran 27" avec rendu 3D villa + plans A1 + tablette
  graphique.
- **revetement** → carreleur pro posant dalle marbre 60×60 avec niveau
  laser.
- **importation** → conteneurs au port d'Abidjan, grue portuaire,
  semi-remorque.

### TMA Shop (catalogue)

- **carrelage** → dalles grès cérame rectifié gris 60×120 packshot studio.
- **marbre** → dalle effet marbre Calacatta 60×60 packshot.
- **sanitaire** → vasque céramique blanche sur meuble noyer, miroir rond
  LED.
- **salleBain** → miroir LED anti-buée rétro-éclairé mural.
- **cuisine** → cuisine îlot façades noir mat, plan de travail quartz,
  crédence marbre.
- **robinet** → mitigeur chromé gros plan packshot fond noir.
- **peintureShop** → sol salon en parquet stratifié chêne clair.
- **ciment** → sac CPJ 42.5 de 50 kg sur palette atelier.
- **sable** → tas de sable lavé avec pelle sur dalle chantier.
- **gravier** → tas gravier concassé 5/15 sur dalle chantier.
- **peinture** → trois pots peinture pro 20 L sur bâche avec pinceau/rouleau.
- **equipement** → machine de projection d'enduit type PFT en hangar.

### Ambiances réutilisables

- **villa** → villa livrée, soirée, piscine à débordement, façade éclairée.
- **immeuble** → immeuble R+4 livré Cocody, façade claire, balcons filants.
- **interieur** → salon villa livrée, canapé sectionnel, baie vitrée sur
  jardin tropical.
- **chantier** → équipe de 5 ouvriers en EPI en pleine action, grue
  mobile.
- **equipe** → portrait groupé 4 pros BTP devant chantier flou.

### Témoignages

- **client1** → portrait homme 45 ans chemise claire, fond villa livrée.
- **client2** → portrait femme 38 ans tenue business, fond intérieur.
- **client3** → portrait homme 50 ans costume sombre, fond bureau.

---

## Contrôle qualité avant mise en ligne

Pour chaque image générée, vérifier :

1. L'image correspond-elle **exactement** au métier de sa section ?
2. Renforce-t-elle le positionnement BTP premium ?
3. Pourrait-elle exister dans le site d'une vraie grande entreprise
   de construction ?
4. Évite-t-elle l'effet "template générique" ?
5. S'accorde-t-elle à la palette bleu nuit / gris acier / blanc ?

Si la réponse est non à une seule de ces questions → régénérer avec
un prompt affiné.

---

## Flux de mise en production

1. Générer chaque image Nanobanana avec son prompt.
2. Compresser (Squoosh, TinyPNG) au format JPG qualité 80 / ≤ 350 Ko.
3. Déposer le fichier à son `target` dans `public/images/...`.
4. Une fois toutes les images en place, passer `USE_LOCAL = true`
   dans `lib/images.js`.
5. Lancer `npm run build` pour valider, puis déployer.
