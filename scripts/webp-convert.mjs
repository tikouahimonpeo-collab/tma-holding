#!/usr/bin/env node
// ============================================================
//  TMA Holding — Conversion WebP via sharp
// ------------------------------------------------------------
//  Convertit tous les .jpg de public/images en .webp (q=78),
//  supprime l'original. Gain attendu ~ -50 % de poids.
// ============================================================

import { readdir, stat, unlink } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const IMG_DIR = join(ROOT, "public/images");

async function walk(dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) await walk(full, out);
    else if (e.isFile() && /\.(jpe?g)$/i.test(e.name)) out.push(full);
  }
  return out;
}

async function main() {
  const files = await walk(IMG_DIR);
  let beforeTotal = 0, afterTotal = 0;

  console.log(`→ Conversion WebP de ${files.length} fichiers\n`);

  for (const file of files) {
    const out = file.replace(/\.(jpe?g)$/i, ".webp");
    const before = (await stat(file)).size;

    await sharp(file)
      .webp({ quality: 78, effort: 5 })
      .toFile(out);

    const after = (await stat(out)).size;
    beforeTotal += before;
    afterTotal += after;

    const rel = relative(IMG_DIR, file);
    const gain = Math.round(100 - (after * 100) / before);
    console.log(
      `  ${rel.padEnd(55)} ${String(Math.round(before / 1024)).padStart(4)} Ko → ${String(
        Math.round(after / 1024)
      ).padStart(4)} Ko  (-${gain} %)`
    );

    await unlink(file);
  }

  console.log("");
  console.log(`✓ ${files.length} fichiers convertis`);
  console.log(`  Avant : ${Math.round(beforeTotal / 1024)} Ko`);
  console.log(`  Après : ${Math.round(afterTotal / 1024)} Ko`);
  console.log(`  Gain  : -${Math.round(100 - (afterTotal * 100) / beforeTotal)} %`);
}

main().catch((err) => {
  console.error("✗", err.message);
  process.exit(1);
});
