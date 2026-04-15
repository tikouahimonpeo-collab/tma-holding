// ============================================================
//  TMA HOLDING — Notifications email (Nodemailer SMTP)
//  Envoi d'un email propre et responsive à chaque nouveau lead.
// ============================================================

import nodemailer from "nodemailer";
import { escapeHtml } from "./sanitize";

let cachedTransporter = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "[TMA/leads] SMTP_HOST / SMTP_USER / SMTP_PASS manquants dans .env.local"
    );
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return cachedTransporter;
}

/** Envoie l'email de notification interne (équipe commerciale). */
export async function sendLeadNotification(lead) {
  const to = process.env.LEAD_NOTIFY_TO || process.env.SMTP_USER;
  const from =
    process.env.LEAD_NOTIFY_FROM ||
    `"TMA Holding — Leads" <${process.env.SMTP_USER}>`;

  const subject = `🔔 Nouveau lead ${lead.id} — ${lead.fullName} (${lead.service})`;
  const html = renderEmailHtml(lead);
  const text = renderEmailText(lead);

  const transporter = getTransporter();
  await transporter.sendMail({
    from,
    to,
    subject,
    html,
    text,
    replyTo: lead.email || undefined,
  });
}

function renderEmailHtml(lead) {
  const rows = [
    ["ID", lead.id],
    ["Date", lead.date],
    ["Nom complet", lead.fullName],
    ["Téléphone", lead.phone],
    ["Email", lead.email || "—"],
    ["Entreprise", lead.company || "—"],
    ["Service", lead.service],
    ["Budget", lead.budget || "—"],
    ["Provenance", lead.provenance || "Site web"],
    ["Page", lead.pageUrl || "—"],
  ];

  const rowsHtml = rows
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;background:#f9fafb;font-weight:600;color:#0A1A2F;width:180px">${escapeHtml(
          k
        )}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#111827">${escapeHtml(
          v
        )}</td>
      </tr>`
    )
    .join("");

  const driveBlock = lead.driveUrl
    ? `<p style="margin:16px 0 0"><a href="${escapeHtml(
        lead.driveUrl
      )}" style="display:inline-block;padding:10px 16px;background:#1E90FF;color:#fff;border-radius:8px;text-decoration:none;font-weight:600">📎 Ouvrir le dossier Drive</a></p>`
    : "";

  const waHref = `https://wa.me/${String(lead.phone).replace(/[^0-9]/g, "")}`;

  return `
  <!doctype html>
  <html lang="fr">
    <body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;color:#111827">
      <div style="max-width:640px;margin:0 auto;padding:32px 20px">
        <div style="background:#0A1A2F;color:#fff;border-radius:16px 16px 0 0;padding:28px">
          <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;opacity:.7">TMA Holding · CRM</div>
          <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;line-height:1.2">
            Nouveau lead — <span style="color:#42A1FF">${escapeHtml(lead.fullName)}</span>
          </h1>
          <div style="margin-top:6px;font-size:14px;opacity:.8">${escapeHtml(
            lead.service
          )} · ${escapeHtml(lead.provenance || "Site web")}</div>
        </div>

        <div style="background:#fff;border-radius:0 0 16px 16px;padding:24px 20px;box-shadow:0 10px 30px rgba(10,26,47,.08)">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            ${rowsHtml}
          </table>

          <div style="margin-top:20px;padding:16px;background:#f9fafb;border-radius:10px;border-left:4px solid #1E90FF">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#6b7280;font-weight:700">Message</div>
            <div style="margin-top:8px;white-space:pre-wrap;color:#111827;line-height:1.55">${escapeHtml(
              lead.message || ""
            )}</div>
          </div>

          <div style="margin-top:22px;display:flex;gap:10px;flex-wrap:wrap">
            <a href="${waHref}" style="display:inline-block;padding:10px 16px;background:#25D366;color:#fff;border-radius:8px;text-decoration:none;font-weight:600">💬 WhatsApp direct</a>
            <a href="tel:${escapeHtml(
              String(lead.phone).replace(/\s/g, "")
            )}" style="display:inline-block;padding:10px 16px;background:#0A1A2F;color:#fff;border-radius:8px;text-decoration:none;font-weight:600">📞 Appeler</a>
            ${
              lead.email
                ? `<a href="mailto:${escapeHtml(
                    lead.email
                  )}" style="display:inline-block;padding:10px 16px;background:#fff;color:#0A1A2F;border:1px solid #0A1A2F;border-radius:8px;text-decoration:none;font-weight:600">✉️ Répondre</a>`
                : ""
            }
          </div>
          ${driveBlock}

          <p style="margin:28px 0 0;font-size:12px;color:#6b7280;text-align:center">
            TMA Holding · Cocody Riviera Palmeraie · Abidjan<br/>
            Ce message a été généré automatiquement par votre site.
          </p>
        </div>
      </div>
    </body>
  </html>`;
}

function renderEmailText(lead) {
  return [
    `NOUVEAU LEAD — ${lead.id}`,
    `----------------------------------`,
    `Date       : ${lead.date}`,
    `Nom        : ${lead.fullName}`,
    `Téléphone  : ${lead.phone}`,
    `Email      : ${lead.email || "—"}`,
    `Entreprise : ${lead.company || "—"}`,
    `Service    : ${lead.service}`,
    `Budget     : ${lead.budget || "—"}`,
    `Provenance : ${lead.provenance || "Site web"}`,
    `Page       : ${lead.pageUrl || "—"}`,
    ``,
    `Message :`,
    lead.message || "",
    ``,
    lead.driveUrl ? `Dossier Drive : ${lead.driveUrl}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
