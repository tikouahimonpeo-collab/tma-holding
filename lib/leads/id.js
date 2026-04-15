// ============================================================
//  TMA HOLDING — Générateur d'ID Lead
//  Format : TMA-YYYYMMDD-XXXX (XXXX = base36 timestamp+random).
// ============================================================

import { randomBytes } from "crypto";

export function generateLeadId(date = new Date()) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  const rand = randomBytes(3).toString("hex").toUpperCase(); // 6 hex chars
  return `TMA-${y}${m}${d}-${rand}`;
}

/** Formatte la date ISO en local français lisible pour Sheets. */
export function formatDate(date = new Date()) {
  const d = date;
  const pad = (n) => String(n).padStart(2, "0");
  return (
    `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}` +
    ` ${pad(d.getHours())}:${pad(d.getMinutes())}`
  );
}
