#!/usr/bin/env bash
# ============================================================
#  TMA Holding — Import Gemini/Nanobanana → public/images/
# ------------------------------------------------------------
#  Convertit les PNG Gemini en JPG optimisés et les place
#  aux bons emplacements du registre lib/images.js.
#
#  Dépendance : sips (natif macOS)
# ============================================================

set -euo pipefail

SRC="/Users/mac/Downloads/nano banana image gemini pour site"
DEST_ROOT="$(cd "$(dirname "$0")/.." && pwd)/public/images"

convert() {
  local src_name="$1"
  local dest_rel="$2"
  local width="$3"
  local quality="${4:-78}"

  local src_file="$SRC/$src_name"
  local dest_file="$DEST_ROOT/$dest_rel"
  local dest_dir="$(dirname "$dest_file")"

  mkdir -p "$dest_dir"

  if [[ ! -f "$src_file" ]]; then
    echo "✗ MISSING source: $src_name" >&2
    return 1
  fi

  sips \
    -s format jpeg \
    -s formatOptions "$quality" \
    --resampleWidth "$width" \
    "$src_file" \
    --out "$dest_file" >/dev/null

  local sz=$(stat -f %z "$dest_file")
  local sz_kb=$((sz / 1024))
  printf "  ✓ %-60s %4d Ko\n" "$dest_rel" "$sz_kb"
}

echo "→ Conversion et import des images Gemini…"
echo ""

echo "── HÉROS ──"
convert "Gemini_Generated_Image_jz37agjz37agjz37.png" "hero/home-construction-premium.jpg" 1920
convert "Gemini_Generated_Image_cspe68cspe68cspe.png" "hero/about-team-chantier.jpg" 1920
convert "Gemini_Generated_Image_wnufc9wnufc9wnuf.png" "hero/services-montage-metiers.jpg" 1920
convert "Gemini_Generated_Image_twl98ztwl98ztwl9.png" "hero/realisations-villa-livree.jpg" 1920
convert "Gemini_Generated_Image_mv7wqdmv7wqdmv7w.png" "hero/devis-consultation.jpg" 1920
convert "Gemini_Generated_Image_of44j0of44j0of44.png" "hero/contact-bureau-equipe.jpg" 1920

echo ""
echo "── SERVICES ──"
convert "Gemini_Generated_Image_oke0rsoke0rsoke0.png" "services/construction/villa-gros-oeuvre.jpg" 1600
convert "Gemini_Generated_Image_hp6z70hp6z70hp6z.png" "services/construction/immeuble-r5-chantier.jpg" 1600
convert "Gemini_Generated_Image_g4krdcg4krdcg4kr.png" "services/renovation/salon-renove-avant-apres.jpg" 1600
convert "Gemini_Generated_Image_lti3ntlti3ntlti3.png" "services/renovation/cuisine-renovee.jpg" 1600
convert "Gemini_Generated_Image_ruhokvruhokvruho.png" "services/painting/airless-mur-blanc.jpg" 1600
convert "Gemini_Generated_Image_u7utd8u7utd8u7ut.png" "services/enduit/projection-mecanique.jpg" 1600
convert "Gemini_Generated_Image_kg7ss2kg7ss2kg7s.png" "services/conception/plans-rendu-3d.jpg" 1600
convert "Gemini_Generated_Image_l86z7fl86z7fl86z.png" "services/finition/pose-carrelage-premium.jpg" 1600
convert "Gemini_Generated_Image_tcgqr8tcgqr8tcgq.png" "services/importation/conteneurs-port-abidjan.jpg" 1600

echo ""
echo "── CONTEXTE ──"
convert "Gemini_Generated_Image_twl98ztwl98ztwl9.png" "context/villa-livree-nuit.jpg" 1600
convert "Gemini_Generated_Image_z8j9x1z8j9x1z8j9.png" "context/immeuble-facade-livree.jpg" 1600
convert "Gemini_Generated_Image_a4b2toa4b2toa4b2.png" "context/interieur-salon-premium.jpg" 1600
convert "Gemini_Generated_Image_gkkm1zgkkm1zgkkm.png" "context/chantier-equipe-action.jpg" 1600
convert "Gemini_Generated_Image_cspe68cspe68cspe.png" "context/equipe-portrait-chantier.jpg" 1600

echo ""
echo "── TMA SHOP ──"
convert "Gemini_Generated_Image_jprhyxjprhyxjprh.png" "shop/sanitaires/vasque-design.jpg" 1400
convert "Gemini_Generated_Image_yuxk6iyuxk6iyuxk.png" "shop/accessoires-bain/miroir-led.jpg" 1400
convert "Gemini_Generated_Image_ur0zvzur0zvzur0z.png" "shop/cuisines/cuisine-moderne-noir-bois.jpg" 1400
convert "Gemini_Generated_Image_3554lx3554lx3554.png" "shop/robinetterie/mitigeur-chrome.jpg" 1400
convert "Gemini_Generated_Image_lngj2ulngj2ulngj.png" "shop/materiaux/sac-ciment-cpj425.jpg" 1400
convert "Gemini_Generated_Image_rd5528rd5528rd55.png" "shop/materiaux/tas-gravier.jpg" 1400
convert "Gemini_Generated_Image_tnqvntnqvntnqvnt.png" "shop/materiaux/pots-peinture-pro.jpg" 1400
convert "Gemini_Generated_Image_u7utd8u7utd8u7ut.png" "shop/equipements/machine-projection-enduit.jpg" 1400

echo ""
echo "✓ Import terminé."
