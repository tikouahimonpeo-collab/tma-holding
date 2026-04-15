#!/usr/bin/env bash
# ============================================================
#  TMA Holding — Conversion WebP pour toutes les images JPG
# ------------------------------------------------------------
#  Utilise cwebp si présent, sinon fallback sips.
#  Remplace chaque .jpg par un .webp au même chemin, supprime
#  le .jpg original. Gain attendu : -50 % sur la taille totale.
# ============================================================

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG_DIR="$ROOT/public/images"

# Vérif binaire
if command -v cwebp >/dev/null 2>&1; then
  ENGINE="cwebp"
elif command -v sips >/dev/null 2>&1; then
  ENGINE="sips"
else
  echo "✗ Ni cwebp ni sips disponibles" >&2
  exit 1
fi

echo "→ Conversion WebP via $ENGINE"
echo ""

total_before=0
total_after=0
count=0

while IFS= read -r -d '' file; do
  base="${file%.jpg}"
  target="${base}.webp"

  size_before=$(stat -f %z "$file")
  total_before=$((total_before + size_before))

  if [[ "$ENGINE" == "cwebp" ]]; then
    cwebp -q 78 -mt -quiet "$file" -o "$target"
  else
    # sips supporte webp sur macOS 11+
    sips -s format webp -s formatOptions 78 "$file" --out "$target" >/dev/null
  fi

  size_after=$(stat -f %z "$target")
  total_after=$((total_after + size_after))
  count=$((count + 1))

  gain=$((100 - (size_after * 100 / size_before)))
  rel="${file#$IMG_DIR/}"
  printf "  %-55s %4d Ko → %4d Ko  (-%2d%%)\n" \
    "$rel" \
    $((size_before / 1024)) \
    $((size_after / 1024)) \
    "$gain"

  # Supprimer le JPG original
  rm "$file"
done < <(find "$IMG_DIR" -type f -name "*.jpg" -print0)

echo ""
echo "✓ $count fichiers convertis"
echo "  Total avant : $((total_before / 1024)) Ko"
echo "  Total après : $((total_after / 1024)) Ko"
echo "  Gain        : -$((100 - (total_after * 100 / total_before))) %"
