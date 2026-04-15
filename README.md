# TMA Holding — Site BTP premium Abidjan

Site vitrine + **TMA Shop** (catalogue e-commerce WhatsApp) pour **TMA Holding**,
entreprise BTP premium basée à Cocody Riviera Palmeraie, Abidjan.

**Stack** : Next.js 14 (App Router, JSX) · Tailwind CSS · Zéro dépendance UI
tierce (icônes SVG custom, composants maison).

## 🚀 Démarrage rapide

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 🗂️ Arborescence

```
tma-holding/
├── app/                        # Next.js App Router
│   ├── layout.jsx              # Layout global (Header, Footer, WhatsAppFloat, SEO, JSON-LD)
│   ├── page.jsx                # /                  (Accueil)
│   ├── a-propos/page.jsx       # /a-propos
│   ├── services/page.jsx       # /services
│   ├── boutique/page.jsx       # /boutique          (TMA Shop)
│   ├── boutique/[slug]/        # /boutique/:slug    (fiche produit dynamique)
│   ├── realisations/page.jsx   # /realisations
│   ├── devis/page.jsx          # /devis
│   ├── contact/page.jsx        # /contact
│   ├── sitemap.js              # Sitemap auto (pages + produits)
│   ├── manifest.js             # PWA manifest
│   └── globals.css             # Design tokens + utilitaires
│
├── components/                 # Composants partagés (Header, Footer, Button, ProductGrid…)
│   ├── Header.jsx              # Header sticky + menu mobile
│   ├── Footer.jsx              # Footer premium 4 colonnes
│   ├── WhatsAppFloat.jsx       # Bouton flottant WhatsApp
│   ├── HeroSection.jsx         # Hero principal + HeroSimple
│   ├── ProductGrid.jsx         # Grille produits filtrable
│   ├── ProjectsGrid.jsx        # Grille réalisations filtrable
│   ├── QuoteForm.jsx           # Formulaire devis → WhatsApp
│   ├── ContactForm.jsx         # Formulaire contact → WhatsApp
│   ├── Button.jsx              # Bouton réutilisable 7 variantes
│   └── icons.jsx               # SVG icons (aucune dép. externe)
│
├── lib/                        # Source unique de vérité (données + config)
│   ├── brand.js                # Contacts, WhatsApp, NAV, COPY, IMG
│   ├── images.js               # Registre images + prompts Nanobanana + alt SEO
│   ├── services.js             # Définition des 7 services
│   ├── products.js             # Catalogue TMA Shop (24 produits / 10 catégories)
│   └── projects.js             # Portfolio réalisations
│
├── public/
│   ├── images/                 # Assets Nanobanana (structuré par métier)
│   │   ├── hero/
│   │   ├── services/{construction,renovation,painting,enduit,conception,finition,importation}/
│   │   ├── shop/{carreaux,sanitaires,cuisines,robinetterie,accessoires-bain,revetements,materiaux,equipements}/
│   │   ├── context/
│   │   └── team/
│   └── logo-tma.svg
│
├── docs/
│   ├── IMAGES.md               # Stratégie visuelle (mapping section → image)
│   └── NANOBANANA_PROMPTS.md   # 34 prompts prêts à coller
│
├── tailwind.config.js          # Palette tma-night / tma-electric / tma-bone
├── next.config.js
└── jsconfig.json               # Alias @/*
```

## ✏️ Personnalisation rapide

| Je veux changer… | Je modifie… |
|---|---|
| Numéro WhatsApp, téléphones, email, adresse | [lib/brand.js](lib/brand.js) |
| Menu de navigation, copy des CTA | [lib/brand.js](lib/brand.js) |
| Une image partout sur le site | [lib/images.js](lib/images.js) |
| Ajouter un produit TMA Shop | [lib/products.js](lib/products.js) |
| Ajouter un service | [lib/services.js](lib/services.js) |
| Ajouter une réalisation | [lib/projects.js](lib/projects.js) |
| Palette de couleurs / typographie | [tailwind.config.js](tailwind.config.js) |

## 📞 Intégration WhatsApp Business

Numéro utilisé : **+86 132 6591 2468** (défini dans `lib/brand.js`).

L'objet `WA` expose des liens avec messages prérédigés :
- `WA.devis` — demande de devis
- `WA.rappel` — rappel
- `WA.info` — infos services
- `WA.catalogue` — catalogue complet
- `WA.prix(produit)` — prix d'un produit
- `WA.commande(produit)` — commande d'un produit
- `WA.service(service)` — info sur un service
- `WA.projet(projet)` — projet similaire
- `WA.general` — question générale

Présent partout : Header (CTA desktop), Footer, bouton flottant, chaque carte
produit, chaque service, page devis, page contact.

## 🖼️ Stratégie images (Nanobanana)

Toutes les images du site sont définies dans [lib/images.js](lib/images.js)
— 34 entrées avec chacune : chemin cible, prompt Nanobanana, alt SEO, catégorie
métier.

**Deux modes** pilotés par la constante `USE_LOCAL` dans `lib/images.js` :
- `false` (par défaut) → Unsplash BTP en fallback (dev)
- `true` → `/public/images/...` (prod, après génération Nanobanana)

### Générer les images

1. Ouvre [docs/NANOBANANA_PROMPTS.md](docs/NANOBANANA_PROMPTS.md)
2. Copie chaque prompt dans Nanobanana / Gemini / AI Studio
3. Renomme et dépose l'image au chemin indiqué (`public/images/...`)
4. Passe `USE_LOCAL = true` dans `lib/images.js`
5. Rebuild

Spécifications : héros 1920×1080 ≤ 350 Ko · cartes 1200×800 ≤ 200 Ko · portraits
400×400 ≤ 60 Ko.

## 🎨 Design system

| Token Tailwind | Hex | Usage |
|---|---|---|
| `tma-night` | `#0A1A2F` | Dominante, backgrounds dark |
| `tma-electric` | `#1E90FF` | Accent conversion, CTAs |
| `tma-bone` | `#FAFAFA` | Fond clair |
| `tma-stone` | `#F2F2F4` | Fond sections secondaires |
| `tma-ash` | — | Texte secondaire |

## 🔍 SEO

- Metadata par page (Open Graph + Twitter Card)
- JSON-LD `LocalBusiness` injecté dans `app/layout.jsx`
- Sitemap automatique incluant toutes les fiches produits
- Manifest PWA

## 🚢 Déploiement Vercel

1. Pousse ce repo sur GitHub (voir ci-dessous).
2. Importe-le sur [vercel.com/new](https://vercel.com/new).
3. Déploie — aucune variable d'environnement requise pour la vitrine.

## 📦 Publier sur GitHub

Le repo est déjà initialisé avec un commit initial. Pour le pousser :

```bash
# 1. Créer un repo vide sur github.com (sans README, sans .gitignore)
#    → https://github.com/new  (ex: "tma-holding-site")

# 2. Associer le remote et pousser
git remote add origin git@github.com:<ton-user>/tma-holding-site.git
git branch -M main
git push -u origin main
```

## 📄 Licence

Propriétaire — © TMA Holding. Tous droits réservés.
