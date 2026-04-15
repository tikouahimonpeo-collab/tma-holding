# 🎥 Dossier vidéos — TMA Holding

Place ici tes vidéos de chantiers / hero.

## Spécifications vidéo hero (recommandées)

| Paramètre | Valeur |
|---|---|
| **Nom fichier** | `tma-chantier-hero.mp4` |
| **Format** | MP4 (H.264) — universel |
| **Résolution** | 1920 × 1080 (ou 1280 × 720 pour alléger) |
| **Durée** | 15–25 secondes en boucle |
| **Poids** | < 3 Mo (compresser avec [Handbrake](https://handbrake.fr) ou [Compressor.io](https://compressor.io)) |
| **Son** | Aucun (muet — la vidéo joue automatiquement, muted) |
| **Codec** | H.264 baseline profile (compat iOS/Android) |
| **FPS** | 24 ou 30 |

## Comment l'activer sur le site

Édite `accueil/index.jsx` :

```jsx
<HeroVideo videoSrc="/videos/tma-chantier-hero.mp4" />
```

La vidéo sera lue en **autoplay / loop / muted / playsinline**. Si elle ne charge pas, le composant affiche l'image poster (Unsplash via `IMG.heroHome` dans `lib/brand.js`).

## Contenu idéal pour la vidéo hero

Montages courts et percutants — pas de voix, pas de texte incrusté :

1. Drone survol villa/immeuble TMA (5 s)
2. Gros plan pose marbre / carrelage (3 s)
3. Plan large équipe sur chantier (3 s)
4. Time-lapse construction (5 s)
5. Livraison clé client souriant (4 s)

Total ~20 s, fondu enchaîné, retour au plan 1.

## Alternative : hébergement externe

Si le poids est un souci, héberge sur **Cloudflare Stream** / **Bunny Stream** / **Vimeo Pro** et passe l'URL :

```jsx
<HeroVideo videoSrc="https://customer-xyz.cloudflarestream.com/.../manifest.m3u8" />
```

⚠️ Pour les URL externes, vérifie que le `next.config.js` autorise le domaine.
