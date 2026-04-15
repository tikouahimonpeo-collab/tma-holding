#!/usr/bin/env bash
# ============================================================
#  TMA Holding — Import Gemini batch 2 (slots manquants)
# ============================================================

set -euo pipefail

SRC="/Users/mac/Downloads/nano banana image "
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
    echo "✗ MISSING: $src_name" >&2
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

echo "→ Import batch 2…"
echo ""

echo "── HÉRO TMA SHOP ──"
convert "4.png" "hero/shop-catalogue-premium.jpg" 1920

echo ""
echo "── CARREAUX & REVÊTEMENTS ──"
convert "22.png" "shop/carreaux/carreaux-ceramique-gris.jpg" 1400
convert "23.png" "shop/carreaux/carreaux-marbre-60x60.jpg" 1400
convert "28.png" "shop/revetements/parquet-stratifie.jpg" 1400

echo ""
echo "── MATÉRIAUX ──"
convert "30.png" "shop/materiaux/tas-sable-construction.jpg" 1400

echo ""
echo "── TÉMOIGNAGES ──"
# 34b (homme costume) → client3 ; 34c (femme business) → client2
convert "34c.png" "team/client-2.jpg" 600
convert "34b.png" "team/client-3.jpg" 600

echo ""
echo "✓ Batch 2 terminé."
