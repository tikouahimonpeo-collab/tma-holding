#!/usr/bin/env node
// ============================================================
//  TMA Holding — Validateur d'images Nanobanana
// ------------------------------------------------------------
//  Scanne /public/images/ et rapporte ce qui est présent
//  ou manquant par rapport au registre lib/images.js.
//
//  Usage :
//    node scripts/check-images.mjs
//    node scripts/check-images.mjs --verbose
// ============================================================

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const VERBOSE = process.argv.includes("--verbose");

// Couleurs ANSI minimales
const c = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

async function fileStats(absPath) {
  try {
    const st = await fs.stat(absPath);
    return { exists: true, size: st.size };
  } catch {
    return { exists: false, size: 0 };
  }
}

function fmtSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} Ko`;
  return `${(bytes / 1024 / 1024).toFixed(2)} Mo`;
}

function weightBudget(category) {
  if (category === "hero") return 350 * 1024; // 350 Ko
  if (category === "testimonial") return 80 * 1024; // 80 Ko
  return 250 * 1024; // 250 Ko par défaut
}

/**
 * Parse lib/images.js en texte brut pour éviter d'avoir à
 * configurer "type": "module" côté projet. On extrait les
 * triplets (key, target, category) de chaque entrée.
 */
async function parseRegistry() {
  const src = await fs.readFile(
    path.join(ROOT, "lib", "images.js"),
    "utf8"
  );
  const body = src.slice(src.indexOf("export const IMAGES = {"));
  const entryRe =
    /(\w+):\s*\{\s*target:\s*["']([^"']+)["'][\s\S]*?category:\s*["']([^"']+)["']/g;
  const entries = [];
  let m;
  while ((m = entryRe.exec(body))) {
    entries.push([m[1], { target: m[2], category: m[3] }]);
  }
  return entries;
}

async function main() {
  const entries = await parseRegistry();
  if (!entries.length) {
    console.error(
      "\x1b[31mImpossible de parser lib/images.js. Vérifiez le format.\x1b[0m"
    );
    process.exit(2);
  }

  const results = [];

  for (const [key, meta] of entries) {
    const relPath = meta.target.startsWith("/")
      ? meta.target.slice(1)
      : meta.target;
    const absPath = path.join(ROOT, "public", relPath);
    const stats = await fileStats(absPath);
    const budget = weightBudget(meta.category);
    const oversized = stats.exists && stats.size > budget;
    results.push({ key, meta, absPath, stats, oversized, budget });
  }

  const present = results.filter((r) => r.stats.exists);
  const missing = results.filter((r) => !r.stats.exists);
  const oversized = results.filter((r) => r.oversized);

  // ---------- Synthèse ----------
  console.log(
    `\n${c.bold}${c.cyan}TMA Holding — Audit images Nanobanana${c.reset}\n`
  );
  console.log(
    `  ${c.green}${present.length}${c.reset} / ${entries.length} présentes   ` +
      `${c.red}${missing.length}${c.reset} manquantes   ` +
      `${c.yellow}${oversized.length}${c.reset} trop lourdes\n`
  );

  // ---------- Barre de progression ----------
  const pct = Math.round((present.length / entries.length) * 100);
  const filled = Math.round((pct / 100) * 30);
  const bar = "█".repeat(filled) + "░".repeat(30 - filled);
  console.log(`  ${c.green}${bar}${c.reset}  ${pct} %\n`);

  // ---------- Manquantes ----------
  if (missing.length) {
    console.log(`${c.bold}${c.red}📭 Images manquantes${c.reset}`);
    const byCategory = missing.reduce((acc, r) => {
      (acc[r.meta.category] ||= []).push(r);
      return acc;
    }, {});
    for (const [cat, list] of Object.entries(byCategory)) {
      console.log(`\n  ${c.bold}${cat}${c.reset}`);
      for (const r of list) {
        console.log(
          `    ${c.red}✗${c.reset} ${r.meta.target}  ${c.dim}(${r.key})${c.reset}`
        );
      }
    }
    console.log("");
  }

  // ---------- Trop lourdes ----------
  if (oversized.length) {
    console.log(`${c.bold}${c.yellow}⚠  Images trop lourdes${c.reset}`);
    for (const r of oversized) {
      console.log(
        `  ${c.yellow}!${c.reset} ${r.meta.target}  ${fmtSize(
          r.stats.size
        )} > ${fmtSize(r.budget)}`
      );
    }
    console.log("");
  }

  // ---------- Mode verbose ----------
  if (VERBOSE) {
    console.log(`${c.bold}${c.cyan}📸 Présentes${c.reset}`);
    for (const r of present) {
      const sizeTxt = r.oversized
        ? `${c.yellow}${fmtSize(r.stats.size)}${c.reset}`
        : `${c.gray}${fmtSize(r.stats.size)}${c.reset}`;
      console.log(`  ${c.green}✓${c.reset} ${r.meta.target}  ${sizeTxt}`);
    }
    console.log("");
  }

  // ---------- Suggestion suivante ----------
  if (missing.length === 0) {
    console.log(
      `${c.bold}${c.green}🎉 Toutes les 34 images sont présentes !${c.reset}\n`
    );
    console.log(`Prochaine étape :`);
    console.log(
      `  1. Ouvre ${c.cyan}lib/images.js${c.reset} et passe ${c.bold}USE_LOCAL = true${c.reset}`
    );
    console.log(`  2. ${c.cyan}npm run build${c.reset}`);
    console.log(`  3. Commit + push\n`);
  } else {
    console.log(
      `${c.dim}Relance ce script après avoir déposé plus d'images :${c.reset}`
    );
    console.log(`  ${c.cyan}node scripts/check-images.mjs${c.reset}`);
    console.log(
      `  ${c.cyan}node scripts/check-images.mjs --verbose${c.reset}  (détail complet)\n`
    );
  }

  process.exit(missing.length ? 1 : 0);
}

main().catch((err) => {
  console.error(`${c.red}Erreur :${c.reset}`, err.message);
  process.exit(2);
});
