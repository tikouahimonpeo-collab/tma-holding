// ============================================================
//  TMA HOLDING — Rate limiting en mémoire (simple LRU)
//  Limite : 5 soumissions / IP / 10 min par défaut.
//
//  ⚠️  En mémoire process : fonctionne en mono-instance.
//  Pour multi-instance (Vercel serverless ≠ persistant) → passer
//  à Upstash Redis ou KV store. Cf docs/BACKEND_SETUP.md.
// ============================================================

const WINDOW_MS = 10 * 60 * 1000; // 10 min
const MAX_HITS = 5;
const MAX_ENTRIES = 5000;

const store = new Map(); // key → { hits: [], }

/**
 * @param {string} key  identifiant (IP, email, …)
 * @returns {{ok: boolean, remaining: number, retryAfterMs: number}}
 */
export function rateLimit(key, { windowMs = WINDOW_MS, max = MAX_HITS } = {}) {
  if (!key) return { ok: true, remaining: max, retryAfterMs: 0 };

  const now = Date.now();
  const entry = store.get(key) || { hits: [] };

  // Purge des hits expirés
  entry.hits = entry.hits.filter((t) => now - t < windowMs);

  if (entry.hits.length >= max) {
    const oldest = entry.hits[0];
    return {
      ok: false,
      remaining: 0,
      retryAfterMs: Math.max(0, windowMs - (now - oldest)),
    };
  }

  entry.hits.push(now);
  store.set(key, entry);

  // LRU basique : évite la croissance infinie
  if (store.size > MAX_ENTRIES) {
    const firstKey = store.keys().next().value;
    store.delete(firstKey);
  }

  return { ok: true, remaining: max - entry.hits.length, retryAfterMs: 0 };
}

/** Extrait l'IP client d'une Request Next.js (best-effort). */
export function getClientIp(req) {
  const h = req.headers;
  return (
    h.get("cf-connecting-ip") ||
    h.get("x-real-ip") ||
    (h.get("x-forwarded-for") || "").split(",")[0].trim() ||
    "unknown"
  );
}
