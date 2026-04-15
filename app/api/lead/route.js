// ============================================================
//  TMA HOLDING — API POST /api/lead
//  Pipeline Formspree :
//   1. Parse multipart/form-data ou JSON
//   2. Rate limit par IP
//   3. Validation Zod (+ honeypot)
//   4. Sanitization
//   5. Forward vers Formspree (capture + email + dashboard)
//   6. Response JSON { ok, id } (référence TMA-xxxxx)
// ============================================================

import { NextResponse } from "next/server";
import { parseLead } from "@/lib/leads/schema";
import { sanitizeLead } from "@/lib/leads/sanitize";
import { generateLeadId, formatDate } from "@/lib/leads/id";
import { rateLimit, getClientIp } from "@/lib/leads/rateLimit";
import { submitToFormspree } from "@/lib/leads/formspree";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const MAX_FILES = 5;
const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8 Mo
const ALLOWED_MIME = /^(image\/(jpeg|png|webp|heic|gif)|application\/pdf|application\/(vnd\.openxmlformats-officedocument\.(wordprocessingml\.document|spreadsheetml\.sheet))|application\/msword|application\/vnd\.ms-excel)$/i;

export async function POST(req) {
  try {
    // --- 1. Rate limit IP ------------------------------------
    const ip = getClientIp(req);
    const rl = rateLimit(`ip:${ip}`);
    if (!rl.ok) {
      return NextResponse.json(
        { ok: false, error: "Trop de requêtes. Réessayez dans quelques minutes." },
        { status: 429, headers: { "Retry-After": String(Math.ceil(rl.retryAfterMs / 1000)) } }
      );
    }

    // --- 2. Parse payload -----------------------------------
    const ct = req.headers.get("content-type") || "";
    let payload = {};
    let files = [];

    if (ct.includes("multipart/form-data")) {
      const form = await req.formData();
      for (const [k, v] of form.entries()) {
        if (v instanceof File) {
          if (files.length >= MAX_FILES) continue;
          if (v.size > MAX_FILE_SIZE) continue;
          if (v.type && !ALLOWED_MIME.test(v.type)) continue;
          const buf = Buffer.from(await v.arrayBuffer());
          files.push({ name: v.name, type: v.type, buffer: buf });
        } else {
          payload[k] = v;
        }
      }
    } else {
      payload = await req.json().catch(() => ({}));
    }

    // --- 3. Validation --------------------------------------
    const parsed = parseLead(payload);
    if (!parsed.success) {
      const first = parsed.error.issues?.[0];
      return NextResponse.json(
        {
          ok: false,
          error: first?.message || "Données invalides",
          field: first?.path?.[0],
        },
        { status: 400 }
      );
    }

    // Honeypot → on simule un succès (ne pas informer le bot)
    if (parsed.data.website && parsed.data.website.length > 0) {
      return NextResponse.json({ ok: true, id: "noop" }, { status: 200 });
    }

    const lead = sanitizeLead(parsed.data);

    // --- 4. Préparation row ---------------------------------
    const now = new Date();
    const id = generateLeadId(now);
    const date = formatDate(now);
    const row = { ...lead, id, date };

    // --- 5. Forward vers Formspree --------------------------
    const result = await submitToFormspree(row, files);
    if (!result.ok) {
      console.error("[TMA/leads] Formspree forward failed:", result.error);
      return NextResponse.json(
        { ok: false, error: "Erreur lors de l'enregistrement. Réessayez dans quelques instants." },
        { status: 502 }
      );
    }

    // --- 6. Réponse ----------------------------------------
    return NextResponse.json({ ok: true, id }, { status: 200 });
  } catch (err) {
    console.error("[TMA/leads] POST /api/lead error:", err);
    return NextResponse.json(
      { ok: false, error: "Erreur serveur. Réessayez dans quelques instants." },
      { status: 500 }
    );
  }
}

// GET volontairement bloqué
export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
