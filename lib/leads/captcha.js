// ============================================================
//  TMA HOLDING — Vérification captcha (Cloudflare Turnstile)
//  Optionnel : si TURNSTILE_SECRET_KEY absent, on bypass en dev.
// ============================================================

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(token, remoteIp) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  // En dev sans secret configuré : on laisse passer mais on log.
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      console.warn("[TMA/leads] TURNSTILE_SECRET_KEY absent en production — captcha désactivé.");
    }
    return { ok: true, bypassed: true };
  }

  if (!token) return { ok: false, reason: "missing_token" };

  try {
    const body = new URLSearchParams();
    body.append("secret", secret);
    body.append("response", token);
    if (remoteIp) body.append("remoteip", remoteIp);

    const res = await fetch(VERIFY_URL, {
      method: "POST",
      body,
    });
    const data = await res.json();
    return { ok: !!data.success, reason: data["error-codes"]?.join(",") };
  } catch (err) {
    console.error("[TMA/leads] Turnstile verify failed:", err);
    return { ok: false, reason: "verify_error" };
  }
}
