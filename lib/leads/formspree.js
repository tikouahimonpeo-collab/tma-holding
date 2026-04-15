// ============================================================
//  TMA HOLDING — Forwarder Formspree
//  Envoie le lead validé vers l'endpoint Formspree configuré.
// ============================================================

const FORMSPREE_BASE = "https://formspree.io/f";

function getFormId() {
  const id = process.env.FORMSPREE_FORM_ID;
  if (!id) {
    throw new Error(
      "[TMA/leads] FORMSPREE_FORM_ID manquant dans .env.local — récupère ton ID sur https://formspree.io"
    );
  }
  return id;
}

/**
 * Envoie un lead à Formspree.
 * @param {object} lead        données validées et sanitisées
 * @param {Array}  files       fichiers { name, type, buffer }
 * @returns {Promise<{ok: boolean, formspreeId?: string, error?: string}>}
 */
export async function submitToFormspree(lead, files = []) {
  const endpoint = `${FORMSPREE_BASE}/${getFormId()}`;

  // Subject + noms lisibles pour que l'email Formspree soit propre.
  const fd = new FormData();
  fd.append("_subject", `🔔 Nouveau lead ${lead.id} — ${lead.fullName} (${lead.service})`);
  fd.append("_replyto", lead.email || "");
  fd.append("_format", "plain");

  fd.append("ID Lead", lead.id);
  fd.append("Date", lead.date);
  fd.append("Nom complet", lead.fullName);
  fd.append("Téléphone / WhatsApp", lead.phone);
  fd.append("Email", lead.email || "");
  fd.append("Entreprise", lead.company || "");
  fd.append("Service demandé", lead.service);
  fd.append("Budget", lead.budget || "");
  fd.append("Message", lead.message);
  fd.append("Provenance", lead.provenance || "Site web");
  fd.append("URL de la page", lead.pageUrl || "");

  // Fichiers (support payant Formspree "Professional", sinon ignorés côté dashboard).
  for (const f of files) {
    const blob = new Blob([f.buffer], { type: f.type || "application/octet-stream" });
    fd.append("file", blob, f.name);
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: fd,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return {
      ok: false,
      error: `Formspree ${res.status}: ${text.slice(0, 200)}`,
    };
  }

  const data = await res.json().catch(() => ({}));
  return { ok: true, formspreeId: data.id };
}
