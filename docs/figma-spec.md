# TMA Holding — Spec Figma Complète

**Marque :** TMA Holding · Bâtir l'excellence en Côte d'Ivoire
**Tagline technique :** Génie civil · Prestation de services & divers
**Objectif design :** premium, sobre, dark-first, conversion WhatsApp.

---

## 1. DESIGN TOKENS

### 1.1 Couleurs

| Token | Hex | Usage |
|---|---|---|
| `color/night/900` | `#0A1A2F` | Fond dominant, navbar, hero, CTA dark |
| `color/night/800` | `#0F2440` | Cards sur fond noir, surfaces |
| `color/night/700` | `#16304F` | Borders sur dark, hover |
| `color/electric/500` | `#1E90FF` | CTA primary, liens, accents actifs |
| `color/electric/400` | `#4DA8FF` | Hover electric |
| `color/electric/600` | `#0A6FD1` | Pressed electric |
| `color/gold/500` | `#D4A84B` | Accent rare (badge premium, séparateurs) |
| `color/gold/400` | `#E0BD6E` | Hover gold |
| `color/white/50` | `#FAFAFA` | Texte principal sur dark, fond light |
| `color/white/100` | `#F2F4F7` | Surface light alternate |
| `color/gray/300` | `#C2CBD6` | Texte secondaire light |
| `color/gray/500` | `#7A8698` | Placeholder, disabled |
| `color/gray/700` | `#3A4556` | Texte secondaire dark |
| `color/success/500` | `#25D366` | WhatsApp vert (officiel) |
| `color/danger/500` | `#E5484D` | Erreur, urgence |
| `color/overlay/dark` | `#0A1A2F` à 60% | Overlay photo |

### 1.2 Typographie (Inter)

| Token | Font-weight | Taille | Line-height | Letter-spacing | Usage |
|---|---|---|---|---|---|
| `display/xl` | 700 | 72px | 80px | -1.5% | Hero desktop |
| `display/lg` | 700 | 56px | 64px | -1% | Hero tablet, H1 |
| `display/md` | 700 | 44px | 52px | -0.5% | Hero mobile, H1 tablet |
| `heading/h1` | 700 | 40px | 48px | -0.5% | Section titles |
| `heading/h2` | 600 | 32px | 40px | 0 | Subsection |
| `heading/h3` | 600 | 24px | 32px | 0 | Card titles |
| `heading/h4` | 600 | 20px | 28px | 0 | Small titles |
| `body/lg` | 400 | 18px | 28px | 0 | Intro, lead text |
| `body/md` | 400 | 16px | 24px | 0 | Paragraphe standard |
| `body/sm` | 400 | 14px | 20px | 0 | Meta, captions |
| `label/md` | 600 | 14px | 20px | 2% | Tags, uppercase |
| `label/sm` | 600 | 12px | 16px | 5% | Badges, overlines |
| `button/lg` | 600 | 16px | 24px | 0 | CTA principal |
| `button/md` | 600 | 14px | 20px | 0 | CTA secondaire |

### 1.3 Spacing (base 4px)

`space/0=0` · `space/1=4` · `space/2=8` · `space/3=12` · `space/4=16` · `space/5=20` · `space/6=24` · `space/8=32` · `space/10=40` · `space/12=48` · `space/16=64` · `space/20=80` · `space/24=96` · `space/32=128`

### 1.4 Radius

`radius/none=0` · `radius/sm=4` · `radius/md=8` · `radius/lg=12` · `radius/xl=16` · `radius/2xl=24` · `radius/full=9999`

### 1.5 Shadows

- `shadow/sm` : 0 1px 2px rgba(10,26,47,.08)
- `shadow/md` : 0 4px 12px rgba(10,26,47,.12)
- `shadow/lg` : 0 12px 32px rgba(10,26,47,.18)
- `shadow/xl` : 0 24px 64px rgba(10,26,47,.24)
- `shadow/glow-electric` : 0 0 24px rgba(30,144,255,.35) (focus CTA)
- `shadow/glow-gold` : 0 0 20px rgba(212,168,75,.30) (premium hover)

### 1.6 Breakpoints

| Nom | Min | Container | Cols | Gutter |
|---|---|---|---|---|
| mobile | 0 | 100% - 32px | 4 | 16 |
| tablet | 768px | 720px | 8 | 20 |
| desktop | 1024px | 960px | 12 | 24 |
| wide | 1280px | 1200px | 12 | 24 |
| xl | 1440px | 1280px | 12 | 24 |

**Grille de référence :** 12 colonnes · gutter 24 · container max **1280px** · marge latérale auto.

---

## 2. COMPOSANTS ATOMIQUES

### 2.1 Button

**Variantes :** `primary` · `dark` · `ghost` · `whatsapp`
**Tailles :** `sm (h36)` · `md (h44)` · `lg (h52)` · `xl (h60)`
**États :** default, hover, pressed, focus, disabled, loading

| Variante | Fond | Texte | Border | Hover |
|---|---|---|---|---|
| primary | `#1E90FF` | `#FFFFFF` | none | `#0A6FD1` |
| dark | `#0A1A2F` | `#FAFAFA` | none | `#16304F` |
| ghost | transparent | `#0A1A2F` | 1px `#0A1A2F` | fond `#0A1A2F`, texte blanc |
| whatsapp | `#25D366` | `#FFFFFF` | none | `#1EB155`, icône WA gauche |

- Radius : `radius/md=8`
- Padding lg : `16px 28px`
- Icon-left : space 8px
- Focus : ring 3px `rgba(30,144,255,.4)` + `shadow/glow-electric`
- Disabled : opacity 40%, cursor not-allowed

### 2.2 Input

- Hauteur : 48px (md) / 56px (lg)
- Fond : `#FAFAFA` (light), `#0F2440` (dark)
- Border : 1px `#C2CBD6` default · 2px `#1E90FF` focus · 2px `#E5484D` error
- Radius : 8px
- Padding : 14px 16px
- Label : `label/md` au-dessus, 8px gap
- Helper : `body/sm`, `#7A8698`
- Error : `body/sm`, `#E5484D`

### 2.3 Select

- Même anatomie qu'Input + icône chevron droite 16px
- Dropdown : fond blanc, `shadow/lg`, radius 8px, option h40 padding 12px 16px
- Option hover : fond `#F2F4F7`
- Option selected : fond `#1E90FF` 10%, texte `#0A1A2F`

### 2.4 Card

- Fond : `#FFFFFF` (light) / `#0F2440` (dark)
- Radius : 16px
- Shadow : `shadow/md` default · `shadow/lg` hover
- Padding : 24px (mobile) / 32px (desktop)
- Hover : translate Y -4px, transition 200ms ease-out
- Variante `card/premium` : border 1px `#D4A84B` 40%

### 2.5 Badge

- Hauteur : 24px
- Padding : 4px 10px
- Radius : `full`
- Typo : `label/sm` uppercase
- Variantes :
  - `badge/neutral` : fond `#F2F4F7` texte `#3A4556`
  - `badge/electric` : fond `#1E90FF` 15% texte `#1E90FF`
  - `badge/gold` : fond `#D4A84B` 15% texte `#D4A84B`
  - `badge/success` : fond `#25D366` 15% texte `#1EB155`
  - `badge/danger` : fond `#E5484D` 15% texte `#E5484D`

### 2.6 Navbar

- Hauteur : 80px desktop / 64px mobile
- Fond : `#0A1A2F` 90% + blur 16px
- Border-bottom : 1px `#16304F`
- Contenu desktop : Logo 140×32 · Nav links (6) gap 32 · CTA `primary` "Devis gratuit" + CTA `whatsapp` icon-only
- Contenu mobile : Logo · burger 44×44
- Scrolled state : fond `#0A1A2F` 100%, shadow/md
- Nav link : `body/md` couleur `#FAFAFA` 80% · active `#1E90FF` underline 2px
- Menu mobile : drawer full-screen, stagger fade-in 60ms

### 2.7 Footer

- Fond : `#0A1A2F`
- Padding : 80px top / 40px bottom
- Grille : 4 cols desktop (Logo+baseline · Nav · Contact · Réseaux) / 1 col mobile stack
- Séparateur : 1px `#16304F` avant mentions légales
- Typo : `body/sm`, couleur `#C2CBD6`
- WhatsApp CTA flottant toujours visible (voir §3.11)

### 2.8 ChipTag

- Hauteur : 32px
- Padding : 6px 14px
- Radius : `full`
- Border : 1px `#C2CBD6` (default) · 1px `#1E90FF` (active) + fond `#1E90FF` 10%
- Typo : `label/md`
- Usage : filtres portfolio, catégories boutique

---

## 3. COMPOSANTS SECTIONS

### 3.1 HeroDark

- Fond : `#0A1A2F` + texture bruit subtile (2% opacity)
- Hauteur : 100vh (min 720px) desktop · 85vh mobile
- Grille : texte gauche 6 cols · visuel droite 6 cols
- Contenu :
  - Overline `label/md` couleur `#D4A84B` (ex : "BÂTIR L'EXCELLENCE")
  - H1 `display/xl` blanc
  - Paragraphe `body/lg` couleur `#C2CBD6` max 480px
  - Cluster CTA : `primary` "Demander un devis" + `ghost` inversé "Voir réalisations"
  - Row stats : 3 chiffres clés en bas (`heading/h2` electric + `label/sm` gray)
- Visuel : photo chantier ou villa en mask radius 16 · ratio 4:5
- Scroll indicator : flèche animée bas-centre

### 3.2 HeroVideo

- Full-bleed 100vw · hauteur 90vh
- Vidéo background autoplay muted loop · poster image WebP
- Overlay : dégradé `#0A1A2F` 0% → 70% bas
- Contenu centré bas : H1 `display/lg` + CTA pair
- Contrôle son : bouton icon-only bas-droite
- Mobile : vidéo remplacée par image statique (perf)

### 3.3 StatsRow

- Fond : `#0F2440`
- Hauteur : 160px desktop / auto mobile
- 4 stats : icône 40px + chiffre `display/md` electric + label `body/sm` gray
- Séparateurs verticaux 1px `#16304F` entre stats
- Animation : compteur incrémenté au scroll-in
- Mobile : grid 2×2

### 3.4 ServicesGrid

- 5 services : Construction · Rénovation · Revêtement · Architecture · TMA Shop
- Grille desktop : 3-2 (3 en haut, 2 centrés en bas) ou 5 cols équivalentes
- Mobile : 1 col stack
- Card service :
  - Icône 48px electric
  - H3 titre noir
  - Body-md description 2 lignes max
  - Lien "En savoir plus →" electric
  - Hover : lift + border gold 1px

### 3.5 PortfolioGrid

- Filtres top : ChipTags (Tous · Villas · Immeubles · Rénovation · Showroom)
- Grille masonry 3 cols desktop · 2 cols tablet · 1 col mobile
- Card projet :
  - Image ratio 4:5 radius 16
  - Overlay hover dégradé + badge catégorie + titre blanc + flèche
  - Click → `Projet[detail]`
- Charge progressive : skeleton puis fade-in

### 3.6 TestimonialSlider

- Fond `#0A1A2F` · padding 96px
- Carrousel 1 témoignage visible (3 dots)
- Contenu card :
  - Guillemet or `#D4A84B` 64px
  - Citation `heading/h3` blanc italique
  - Avatar 64px + nom `body/lg` blanc + rôle `body/sm` gray
- Auto-play 6s · pause on hover · swipe mobile

### 3.7 BeforeAfterSlider

- Composant interactif : curseur glissant vertical
- Image ratio 16:10 radius 16
- Poignée centrale cercle 40px `#FAFAFA` + flèches
- Labels "AVANT" / "APRÈS" coins hauts, fond `#0A1A2F` 80%
- Mobile : tap-drag facilité, tap-target curseur 56px

### 3.8 ProductCard (TMA Shop)

- Image produit ratio 1:1 fond `#F2F4F7` padding 24
- Badge promo coin haut-gauche (badge/danger si -X%)
- Nom `heading/h4` noir 2 lignes max
- Catégorie `label/sm` gray
- Prix `heading/h3` noir + ancien prix barré `body/md` gray
- Prix FCFA affiché "4 900 FCFA/m²"
- CTA icon : panier ou WhatsApp direct
- Hover : zoom image 1.05 · shadow/lg

### 3.9 ContactForm3Steps

- Étape 1 : Projet (type de service chips + budget range)
- Étape 2 : Vos infos (nom · email · tel · localisation)
- Étape 3 : Détails (textarea + upload plans optionnel)
- Stepper top : 3 pastilles numérotées · progress bar electric
- Boutons : Précédent `ghost` · Suivant `primary` · Dernier écran : Envoyer + WhatsApp direct
- Validation inline · erreurs `body/sm` danger
- Sur submit : confirmation + redirect WhatsApp avec message pré-rempli

### 3.10 FAQAccordion

- Liste 8-10 questions
- Item : titre `heading/h4` + icône plus/moins rotation 180° · transition 200ms
- Body `body/md` gray 700 · max-width 720px
- Un seul item ouvert à la fois (option)
- Fond `#FAFAFA` (light) ou `#0F2440` (dark)

### 3.11 CTABand

- Fond `#0A1A2F` avec pattern subtil gold
- Padding vertical 96px
- H2 `heading/h1` blanc centré + sous-texte `body/lg` gray
- CTA pair primary + whatsapp · cluster centré
- Variante : fond image villa avec overlay

### 3.12 WhatsAppFloat

- Position fixed bottom-right · offset 24px
- Cercle 60px · fond `#25D366` · icône WA blanche 32px
- Shadow `shadow/lg`
- Badge pulsant "1" si message auto-programmé
- Tooltip hover : "Chattons maintenant"
- Mobile : offset 16px · taille 56px
- Animation entry : bounce-in après 4s scroll

---

## 4. PAGES — SECTIONS & INTENT

### 4.1 Home (`/`)

| Ordre | Section | Intent |
|---|---|---|
| 1 | Navbar | Navigation persistante |
| 2 | HeroDark | Capter + CTA principal devis |
| 3 | StatsRow | Preuve sociale chiffrée |
| 4 | ServicesGrid | Couverture offre |
| 5 | PortfolioGrid (3 mises en avant) | Preuve visuelle |
| 6 | BeforeAfterSlider | Démonstration transformation |
| 7 | TestimonialSlider | Confiance |
| 8 | CTABand "Parlons de votre projet" | Conversion mid-funnel |
| 9 | ProductCard row (3 best-sellers TMA Shop) | Cross-sell |
| 10 | FAQAccordion (6 Q) | Lever objections |
| 11 | ContactForm3Steps | Capture lead |
| 12 | Footer | Navigation + mentions |

### 4.2 Services (`/services`)

1. Navbar
2. Hero services (H1 `display/lg` + intro)
3. Tabs/anchors : Construction · Rénovation · Revêtement · Architecture
4. Section par service (alterné image gauche/droite) : H2 + bullets bénéfices + CTA + image
5. Process en 4 étapes (icônes + descriptions)
6. TestimonialSlider filtré
7. CTABand
8. Footer

### 4.3 Realisations (`/realisations`)

1. Navbar
2. Hero minimal (H1 + filtres ChipTags)
3. PortfolioGrid complet (masonry, 12+ projets)
4. CTABand
5. Footer

### 4.4 Projet[detail] (`/realisations/[slug]`)

1. Navbar
2. Hero projet (image plein écran + badge catégorie + H1 nom projet + meta : lieu · durée · surface)
3. BeforeAfterSlider
4. Galerie masonry 8-12 photos (lightbox)
5. Description projet (`body/lg` 2 colonnes desktop)
6. Specs techniques (table : surface · budget range · matériaux · équipe)
7. Témoignage client
8. Projets similaires (3 cards)
9. CTABand
10. Footer

### 4.5 Boutique (`/boutique`)

1. Navbar
2. Hero boutique (H1 + search input large)
3. Sidebar filtres desktop (catégorie, prix, dispo) / drawer mobile
4. ProductCard grid (4 cols desktop / 2 tablet / 2 mobile)
5. Pagination ou infinite scroll
6. Section "Pourquoi TMA Shop" (3 USP icônes)
7. Footer

### 4.6 Produit[detail] (`/boutique/[slug]`)

1. Navbar
2. Grille 2 cols : galerie gauche (thumbs + image principale zoom) · infos droite
3. Infos droite : catégorie · nom · prix · description · quantité · CTA WhatsApp direct `primary` + `whatsapp`
4. Tabs : Description · Spécifications · Livraison
5. Produits similaires (4 cards)
6. CTABand
7. Footer

### 4.7 A-propos (`/a-propos`)

1. Navbar
2. Hero a-propos (H1 + baseline + photo équipe)
3. Notre histoire (2 cols texte + image)
4. Valeurs (3 cards icônes)
5. Équipe (cards dirigeants : photo + nom + rôle + LinkedIn)
6. Partenaires/certifications (logos grid)
7. CTABand
8. Footer

### 4.8 Contact (`/contact`)

1. Navbar
2. Hero contact (H1 + sous-titre)
3. Grille 2 cols : ContactForm3Steps gauche · Bloc infos droite (adresse Cocody Riviera Palmeraie + tel + WhatsApp + horaires + map embed)
4. WhatsApp CTA card large
5. FAQAccordion contact-specific
6. Footer

---

## 5. RESPONSIVE — ÉTATS PAR COMPOSANT

| Composant | Mobile (<768) | Tablet (768-1023) | Desktop (≥1024) |
|---|---|---|---|
| Navbar | h64 · burger | h72 · nav réduit | h80 · full nav |
| HeroDark | stack vertical, H1 display/md | 2 cols 50/50, H1 display/lg | 6/6 cols, H1 display/xl |
| ServicesGrid | 1 col | 2 cols | 3+2 ou 5 cols |
| PortfolioGrid | 1 col | 2 cols | 3 cols masonry |
| ProductCard grid | 2 cols | 3 cols | 4 cols |
| TestimonialSlider | 1 card full | 1 card max 600 | 1 card centrée max 800 |
| BeforeAfterSlider | ratio 4:3 | ratio 16:10 | ratio 16:10 |
| ContactForm3Steps | stepper top, inputs full-width | idem | 2 cols form + side |
| Footer | 1 col stack | 2 cols | 4 cols |
| WhatsAppFloat | 56px · bottom-16 | 60px | 60px · bottom-24 |
| Button lg | full-width | auto | auto |

**Tap targets mobile :** 44×44px min absolu. CTA primary 52px hauteur sur mobile.

---

## 6. ANIMATIONS & INTERACTIONS

| Interaction | Détail | Timing | Easing |
|---|---|---|---|
| Hover card | translateY -4px + shadow/md → shadow/lg | 200ms | ease-out |
| Hover button | brightness +8% | 150ms | ease-out |
| Click button | scale 0.97 | 100ms | ease-in |
| Scroll reveal section | opacity 0→1 + translateY 24→0 | 600ms | cubic-bezier(.2,.8,.2,1) |
| Parallax hero | fond -20% scroll speed | RAF | linear |
| Compteur stats | incrément 0 → valeur | 1800ms | ease-out |
| Navbar scroll | opacity fond 90→100 + shadow | 250ms | ease-out |
| Page transition | fade 200ms entrant + translateY 8px | 300ms | ease-out |
| Drawer menu mobile | slide-in right + stagger items 60ms | 280ms | ease-out |
| Before/After drag | follow cursor immédiat | RAF | linear |
| Accordion open | height auto + rotate icône | 220ms | ease-in-out |
| Modal/lightbox | scale 0.96→1 + overlay fade | 200ms | ease-out |
| WhatsAppFloat entry | translateY 60→0 + bounce | 500ms | cubic-bezier(.68,-.55,.27,1.55) |

**Règle globale :** `prefers-reduced-motion` → désactiver parallax, réduire durées 50%, supprimer bounce.

---

## 7. ACCESSIBILITÉ — CHECKLIST

- [ ] Contraste texte/fond ≥ 4.5:1 (WCAG AA) sur toutes combinaisons
- [ ] Titres hiérarchisés (un seul H1 par page, H2→H3→H4 ordonnés)
- [ ] Focus visible sur tous les éléments interactifs : ring 3px electric 40%
- [ ] Tap targets ≥ 44×44px sur mobile (icônes, liens, boutons)
- [ ] Labels explicites sur tous les inputs (pas juste placeholder)
- [ ] Messages d'erreur liés (aria-describedby) + icône + couleur
- [ ] Images avec alt descriptif (ou alt="" si décoratif)
- [ ] Vidéos : contrôles clavier · option sous-titres · bouton mute visible
- [ ] Navigation clavier : tab-order logique, skip link "Aller au contenu"
- [ ] ARIA sur composants custom : slider (role=slider + aria-valuenow), accordion (aria-expanded), tabs (role=tablist)
- [ ] Motion réduit respecté (prefers-reduced-motion)
- [ ] Formulaires : autocomplete attributs, type tel/email corrects
- [ ] Langue document : `lang="fr-CI"` (ou `fr-FR`)
- [ ] Logo avec alt "TMA Holding — retour à l'accueil"
- [ ] WhatsAppFloat : aria-label "Discuter sur WhatsApp avec TMA Holding"
- [ ] Modals : focus trap + ESC pour fermer + return focus déclencheur
- [ ] Couleur jamais seul vecteur d'information (ajouter icône/texte)

---

## 8. LIVRABLES FIGMA

- Fichier Figma organisé : `01_Foundations` · `02_Components` · `03_Sections` · `04_Pages` · `05_Prototype`
- Library publiée : tous tokens + composants en `Variants` + `Component Properties`
- Prototypes 3 flows : Lead devis · Achat TMA Shop · Diaspora
- Export assets : `@1x` `@2x` `@3x` PNG/WebP + SVG icônes
- Documentation usage dans description composant Figma
