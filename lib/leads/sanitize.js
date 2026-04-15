// ============================================================
//  TMA HOLDING — Sanitization défensive
//  Nettoyage des chaînes avant persistence (Sheets/Drive/Email).
// ============================================================

/** Escape HTML pour éviter XSS dans les emails HTML. */
export function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Neutralise les formules Google Sheets (injection CSV/Sheets).
 * Si la cellule commence par = + - @, on préfixe une apostrophe.
 */
export function neutralizeFormula(str = "") {
  const s = String(str);
  if (/^[=+\-@\t\r]/.test(s)) return "'" + s;
  return s;
}

/** Trim + collapse whitespace + caps sur la longueur. */
export function clean(str, max = 4000) {
  return String(str || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

/** Nettoie tous les champs string d'un objet lead. */
export function sanitizeLead(lead) {
  const out = {};
  for (const [k, v] of Object.entries(lead)) {
    if (typeof v === "string") {
      out[k] = neutralizeFormula(clean(v, k === "message" ? 4000 : 300));
    } else {
      out[k] = v;
    }
  }
  return out;
}

/** Génère un nom de fichier sûr pour Drive. */
export function safeFilename(name = "fichier") {
  return String(name)
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .slice(0, 120);
}
