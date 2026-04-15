"use client";

// ============================================================
//  TMA HOLDING — Formulaire de lead connecté au backend
//
//  Props :
//    service     : valeur par défaut du champ service
//    compact     : version réduite (sans budget ni entreprise)
//    onSuccess   : callback(leadId) après succès
//
//  Usage :
//    <LeadForm service="construction" />
//
//  Le composant :
//   - envoie en multipart/form-data (supporte les pièces jointes)
//   - affiche un succès / erreur
//   - contient le honeypot "website" (anti-bot)
//   - injecte Turnstile si NEXT_PUBLIC_TURNSTILE_SITE_KEY est défini
// ============================================================

import React, { useRef, useState, useEffect } from "react";
import { RxPaperPlane, RxCheckCircled, RxExclamationTriangle } from "react-icons/rx";

const SERVICE_OPTIONS = [
  { value: "construction", label: "Construction & Génie civil" },
  { value: "renovation", label: "Rénovation" },
  { value: "revetement", label: "Revêtement & Finitions" },
  { value: "conception", label: "Conception architecturale" },
  { value: "shop", label: "TMA Shop — Matériaux" },
  { value: "autre", label: "Autre / Je ne sais pas encore" },
];

const BUDGET_OPTIONS = [
  "< 5 M FCFA",
  "5 – 20 M FCFA",
  "20 – 50 M FCFA",
  "50 – 150 M FCFA",
  "> 150 M FCFA",
  "Non défini",
];

export function LeadForm({ service = "autre", compact = false, onSuccess }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");
  const [leadId, setLeadId] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  // Lazy-load Cloudflare Turnstile si configuré
  useEffect(() => {
    if (!TURNSTILE_KEY) return;
    if (document.getElementById("cf-turnstile-script")) return;
    const s = document.createElement("script");
    s.id = "cf-turnstile-script";
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    s.defer = true;
    document.body.appendChild(s);

    window.onTmaTurnstileSuccess = (t) => setCaptchaToken(t);
  }, [TURNSTILE_KEY]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const fd = new FormData(formRef.current);
      fd.set("pageUrl", typeof window !== "undefined" ? window.location.href : "");
      if (captchaToken) fd.set("captchaToken", captchaToken);

      const res = await fetch("/api/lead", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }
      setLeadId(data.id);
      setStatus("success");
      onSuccess?.(data.id);
      formRef.current?.reset();
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-500/20 bg-green-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-600">
          <RxCheckCircled className="h-8 w-8" />
        </div>
        <h3 className="mt-5 text-xl font-extrabold text-tma-night">
          Demande reçue, merci !
        </h3>
        <p className="mt-2 text-sm text-tma-ash">
          Référence : <span className="font-mono font-bold">{leadId}</span>
          <br />
          Notre équipe vous rappelle sous 24 h ouvrées.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-tma-electric hover:underline"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
      encType="multipart/form-data"
    >
      {/* Honeypot anti-bot — doit rester vide */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0 }}>
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom complet *" name="fullName" required placeholder="Jean Kouassi" />
        <Field
          label="Téléphone / WhatsApp *"
          name="phone"
          type="tel"
          required
          placeholder="+225 05 85 31 81 52"
          inputMode="tel"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" placeholder="vous@entreprise.com" />
        {!compact && (
          <Field label="Entreprise (optionnel)" name="company" placeholder="Raison sociale" />
        )}
      </div>

      <div className={compact ? "" : "grid gap-4 sm:grid-cols-2"}>
        <Select label="Service demandé *" name="service" defaultValue={service} required>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
        {!compact && (
          <Select label="Budget estimé" name="budget" defaultValue="Non défini">
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
        )}
      </div>

      <Field
        as="textarea"
        rows={5}
        label="Votre projet en quelques lignes *"
        name="message"
        required
        placeholder="Décrivez votre projet : surface, localisation, délai souhaité…"
      />

      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-tma-ash">
          Plans, photos, cahier des charges (optionnel)
        </label>
        <input
          type="file"
          name="files"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.xls,.xlsx"
          className="mt-2 block w-full cursor-pointer rounded-lg border border-tma-night/15 bg-white px-3 py-2 text-sm file:mr-3 file:rounded file:border-0 file:bg-tma-night file:px-3 file:py-1.5 file:text-xs file:font-bold file:text-white hover:file:bg-tma-electric"
        />
        <p className="mt-1 text-[11px] text-tma-ash">Max 5 fichiers · 8 Mo chacun</p>
      </div>

      <input type="hidden" name="provenance" value="Site web" />
      <input type="hidden" name="pageUrl" value="" />

      <label className="flex items-start gap-3 text-xs text-tma-ash">
        <input
          type="checkbox"
          name="consent"
          value="true"
          required
          className="mt-0.5 h-4 w-4 flex-shrink-0 accent-tma-electric"
        />
        <span>
          J&apos;accepte que TMA Holding utilise ces informations pour me contacter dans le
          cadre de ma demande. Aucune donnée ne sera partagée à des tiers.
        </span>
      </label>

      {TURNSTILE_KEY && (
        <div
          className="cf-turnstile"
          data-sitekey={TURNSTILE_KEY}
          data-callback="onTmaTurnstileSuccess"
          data-theme="light"
        />
      )}

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          <RxExclamationTriangle className="mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-tma-electric px-6 py-4 text-base font-bold text-white shadow-premium transition hover:bg-tma-electric-500 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          "Envoi en cours…"
        ) : (
          <>
            Envoyer ma demande <RxPaperPlane />
          </>
        )}
      </button>

      <p className="text-[11px] text-tma-ash">
        Réponse sous 24 h · Devis gratuit · Données protégées (RGPD)
      </p>
    </form>
  );
}

// --- helpers UI --------------------------------------------------

function Field({ as = "input", label, name, ...props }) {
  const Cmp = as;
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-tma-ash">
        {label}
      </span>
      <Cmp
        name={name}
        {...props}
        className="block w-full rounded-lg border border-tma-night/15 bg-white px-3.5 py-2.5 text-sm text-tma-night placeholder:text-tma-ash/70 focus:border-tma-electric focus:outline-none focus:ring-2 focus:ring-tma-electric/20"
      />
    </label>
  );
}

function Select({ label, name, children, ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-tma-ash">
        {label}
      </span>
      <select
        name={name}
        {...props}
        className="block w-full rounded-lg border border-tma-night/15 bg-white px-3.5 py-2.5 text-sm text-tma-night focus:border-tma-electric focus:outline-none focus:ring-2 focus:ring-tma-electric/20"
      >
        {children}
      </select>
    </label>
  );
}
