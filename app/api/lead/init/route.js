// ============================================================
//  TMA HOLDING — POST /api/lead/init
//  One-shot : initialise la Google Sheet (headers, dropdowns,
//  freeze, formats conditionnels). Protégé par un token secret.
//
//  Utilisation :
//    curl -X POST https://tmaholding.ci/api/lead/init \
//         -H "x-init-token: $LEAD_INIT_TOKEN"
// ============================================================

import { NextResponse } from "next/server";
import { initSheet } from "@/lib/leads/sheets";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const expected = process.env.LEAD_INIT_TOKEN;
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "LEAD_INIT_TOKEN non configuré côté serveur." },
      { status: 500 }
    );
  }
  const token = req.headers.get("x-init-token");
  if (token !== expected) {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }

  try {
    await initSheet();
    return NextResponse.json({ ok: true, message: "Sheet initialisée avec succès." });
  } catch (err) {
    console.error("[TMA/leads] init error:", err);
    return NextResponse.json(
      { ok: false, error: err.message || "Init failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
