"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxCheck, RxChevronLeft, RxChevronRight, RxCheckCircled, RxExclamationTriangle } from "react-icons/rx";
import { BRAND, WA, waLink } from "@/lib/brand";

/**
 * Formulaire devis premium en 3 étapes — branché au backend.
 * Étape 1 : type de projet (select visuel)
 * Étape 2 : détails (surface, budget, délai)
 * Étape 3 : coordonnées + envoi
 *
 * À la soumission :
 *  1) POST vers /api/lead (Sheets + Drive + email notification)
 *  2) Ouvre WhatsApp avec message pré-rempli (expérience utilisateur continue)
 *  3) Affiche écran de succès avec référence TMA-xxxxx
 */

const PROJECTS = [
  { id: "construction", label: "Construction neuve", icon: "🏗️", note: "Villa, immeuble, local" },
  { id: "renovation", label: "Rénovation", icon: "🏠", note: "Totale ou partielle" },
  { id: "revetement", label: "Revêtement / Finitions", icon: "◼️", note: "Marbre, carrelage, peinture" },
  { id: "conception", label: "Conception architecturale", icon: "📐", note: "Plans, études, permis" },
  { id: "materiaux", label: "Achat de matériaux", icon: "📦", note: "Via TMA Shop" },
  { id: "autre", label: "Autre projet", icon: "✨", note: "Parlons-en" },
];

const BUDGETS = [
  "< 10 M FCFA",
  "10 – 30 M FCFA",
  "30 – 100 M FCFA",
  "100 – 500 M FCFA",
  "> 500 M FCFA",
  "Je ne sais pas encore",
];

const DELAYS = [
  "Dès que possible",
  "Dans 1 mois",
  "Dans 3 mois",
  "Dans 6 mois",
  "Pas de date arrêtée",
];

// Mapping UI → valeurs acceptées par le backend Zod schema
const SERVICE_MAP = {
  construction: "construction",
  renovation: "renovation",
  revetement: "revetement",
  conception: "conception",
  materiaux: "shop",
  autre: "autre",
};

export function QuoteFormSteps() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitResult, setSubmitResult] = useState(null); // { id, waUrl }
  const [data, setData] = useState({
    projectType: "",
    surface: "",
    budget: "",
    delay: "",
    name: "",
    phone: "",
    email: "",
    city: "Abidjan",
    message: "",
    consent: true,
    website: "", // honeypot
  });

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const canNext = useMemo(() => {
    if (step === 0) return !!data.projectType;
    if (step === 1) return !!data.budget && !!data.delay;
    if (step === 2) return !!data.name && !!data.phone;
    return false;
  }, [step, data]);

  const waMessage = useMemo(() => {
    const projectLabel = PROJECTS.find((p) => p.id === data.projectType)?.label || "Projet";
    return [
      `Bonjour ${BRAND.name}, je souhaite un devis.`,
      ``,
      `📋 *Projet* : ${projectLabel}`,
      data.surface ? `📐 *Surface estimée* : ${data.surface}` : "",
      data.budget ? `💰 *Budget* : ${data.budget}` : "",
      data.delay ? `⏱️ *Délai* : ${data.delay}` : "",
      ``,
      `👤 *Nom* : ${data.name}`,
      `📱 *Téléphone* : ${data.phone}`,
      data.email ? `✉️ *Email* : ${data.email}` : "",
      data.city ? `📍 *Ville* : ${data.city}` : "",
      ``,
      data.message ? `💬 *Détails* : ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }, [data]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canNext || submitting) return;

    setSubmitting(true);
    setSubmitError("");

    const projectLabel = PROJECTS.find((p) => p.id === data.projectType)?.label || "Projet";
    const fullMessage = [
      `Projet : ${projectLabel}`,
      data.surface ? `Surface estimée : ${data.surface}` : "",
      data.delay ? `Délai souhaité : ${data.delay}` : "",
      data.city ? `Ville : ${data.city}` : "",
      data.message ? `\nDétails :\n${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.name,
          phone: data.phone,
          email: data.email || "",
          company: "",
          service: SERVICE_MAP[data.projectType] || "autre",
          budget: data.budget || "",
          message: fullMessage,
          provenance: "Site web",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          consent: !!data.consent,
          website: data.website || "",
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Erreur lors de l'envoi. Réessayez dans quelques instants.");
      }

      // Succès : on prépare l'URL WhatsApp et on affiche la confirmation.
      const waUrl = waLink(waMessage);
      setSubmitResult({ id: json.id, waUrl, duplicate: !!json.duplicate });
      // Ouverture automatique du WhatsApp (bloquée sur iOS si pas dans un user-gesture
      // direct — on propose donc aussi un bouton explicite dans l'écran succès).
      try {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      } catch {
        // Ignoré : l'utilisateur utilisera le bouton de fallback.
      }
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Écran de succès
  if (submitResult) {
    return (
      <section className="bg-tma-stone py-24 md:py-32">
        <div className="container-tma">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-premium md:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-600">
              <RxCheckCircled className="h-10 w-10" />
            </div>
            <h3 className="mt-6 text-2xl font-extrabold text-tma-night md:text-3xl">
              {submitResult.duplicate
                ? "Votre demande est déjà enregistrée"
                : "Demande reçue, merci !"}
            </h3>
            <p className="mt-3 text-sm text-tma-ash md:text-base">
              {submitResult.duplicate ? (
                <>Notre équipe vous contacte sous 24 h ouvrées. Inutile de renvoyer la demande.</>
              ) : (
                <>
                  Votre référence :{" "}
                  <span className="font-mono font-bold text-tma-night">{submitResult.id}</span>
                  <br />
                  Un commercial vous rappelle sous <strong>24 h ouvrées</strong>.
                </>
              )}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={submitResult.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !px-6 !py-3"
              >
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
                  <path d="M19.1 17.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5 3.5 1.4 3.5.9 4.2.9.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3z" />
                </svg>
                Continuer sur WhatsApp
              </a>
              <a href={`tel:${BRAND.phoneRaw}`} className="btn-ghost !px-6 !py-3">
                Appeler {BRAND.phone}
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setSubmitResult(null);
                setStep(0);
                setData({
                  projectType: "",
                  surface: "",
                  budget: "",
                  delay: "",
                  name: "",
                  phone: "",
                  email: "",
                  city: "Abidjan",
                  message: "",
                  consent: true,
                  website: "",
                });
              }}
              className="mt-6 text-sm font-semibold text-tma-electric hover:underline"
            >
              Envoyer une autre demande
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-tma-stone py-24 md:py-32">
      <div className="container-tma">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Devis gratuit · Réponse 24 h</span>
          <h2 className="heading-lg mt-4 text-tma-night">
            3 étapes. 2 minutes. <br />
            <span className="text-tma-electric">Un devis clair.</span>
          </h2>
          <p className="mt-4 text-tma-ash">
            Dites-nous l&apos;essentiel, on vous rappelle avec un interlocuteur dédié
            et un chiffrage précis.
          </p>
        </div>

        {/* Progress */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="flex items-center justify-between">
            {["Projet", "Détails", "Contact"].map((label, i) => (
              <div key={label} className="flex flex-1 items-center">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all ${
                      i < step
                        ? "bg-tma-electric text-white"
                        : i === step
                        ? "bg-tma-night text-white ring-4 ring-tma-electric/30"
                        : "bg-white text-tma-ash border border-tma-night/10"
                    }`}
                  >
                    {i < step ? <RxCheck size={18} /> : i + 1}
                  </div>
                  <span
                    className={`hidden text-sm font-medium md:inline ${
                      i === step ? "text-tma-night" : "text-tma-ash"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < 2 && (
                  <div className="mx-3 h-px flex-1 bg-tma-night/10">
                    <div
                      className="h-px bg-tma-electric transition-all duration-500"
                      style={{ width: i < step ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-6 shadow-premium md:p-10"
        >
          {/* Honeypot anti-bot — invisible humainement, requis par le backend */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0 }}>
            <label htmlFor="website">Ne pas remplir</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={data.website}
              onChange={(e) => update("website", e.target.value)}
            />
          </div>
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-xl font-bold text-tma-night">
                  Quel est votre projet ?
                </h3>
                <p className="mt-1 text-sm text-tma-ash">Choisissez la catégorie la plus proche.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {PROJECTS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => update("projectType", p.id)}
                      className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition-all ${
                        data.projectType === p.id
                          ? "border-tma-electric bg-tma-electric-50 shadow-glow"
                          : "border-tma-night/10 bg-white hover:border-tma-electric/40 hover:bg-tma-stone"
                      }`}
                    >
                      <span className="text-2xl">{p.icon}</span>
                      <span>
                        <span className="block font-semibold text-tma-night">{p.label}</span>
                        <span className="block text-xs text-tma-ash">{p.note}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-tma-night">Parlons chiffres</h3>
                <p className="mt-1 text-sm text-tma-ash">
                  Plus vous êtes précis, plus notre estimation sera juste. Aucune info ne sera partagée.
                </p>

                <div>
                  <label className="block text-sm font-semibold text-tma-night">
                    Surface estimée (optionnel)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex : 250 m²"
                    value={data.surface}
                    onChange={(e) => update("surface", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-tma-night/15 bg-white px-4 py-3 text-sm text-tma-night placeholder:text-tma-ash focus:border-tma-electric focus:outline-none focus:ring-4 focus:ring-tma-electric/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-tma-night">
                    Budget prévisionnel *
                  </label>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => update("budget", b)}
                        className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                          data.budget === b
                            ? "border-tma-electric bg-tma-electric text-white shadow-glow"
                            : "border-tma-night/10 bg-white text-tma-night hover:border-tma-electric/40"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-tma-night">Délai souhaité *</label>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {DELAYS.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => update("delay", d)}
                        className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                          data.delay === d
                            ? "border-tma-electric bg-tma-electric text-white shadow-glow"
                            : "border-tma-night/10 bg-white text-tma-night hover:border-tma-electric/40"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-tma-night">Comment vous joindre ?</h3>
                <p className="text-sm text-tma-ash">Votre devis vous sera envoyé sous 24 h.</p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Nom complet *"
                    value={data.name}
                    onChange={(v) => update("name", v)}
                    placeholder="Votre nom"
                  />
                  <Field
                    label="Téléphone / WhatsApp *"
                    type="tel"
                    value={data.phone}
                    onChange={(v) => update("phone", v)}
                    placeholder="+225 ..."
                  />
                  <Field
                    label="Email (optionnel)"
                    type="email"
                    value={data.email}
                    onChange={(v) => update("email", v)}
                    placeholder="vous@email.com"
                  />
                  <Field
                    label="Ville"
                    value={data.city}
                    onChange={(v) => update("city", v)}
                    placeholder="Abidjan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-tma-night">
                    Détails supplémentaires (optionnel)
                  </label>
                  <textarea
                    value={data.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={3}
                    placeholder="Ex : terrain à Bingerville, 3 chambres, piscine souhaitée..."
                    className="mt-2 w-full rounded-xl border border-tma-night/15 bg-white px-4 py-3 text-sm text-tma-night placeholder:text-tma-ash focus:border-tma-electric focus:outline-none focus:ring-4 focus:ring-tma-electric/20"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs text-tma-ash">
                  <input
                    type="checkbox"
                    checked={!!data.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    className="mt-0.5 h-4 w-4 flex-shrink-0 accent-tma-electric"
                  />
                  <span>
                    J&apos;accepte que TMA Holding utilise ces informations pour traiter ma
                    demande. Aucune donnée n&apos;est partagée à des tiers.
                  </span>
                </label>

                <p className="rounded-xl bg-tma-stone p-3 text-xs text-tma-ash">
                  🔒 Vos informations sont enregistrées de manière sécurisée. Après envoi,
                  WhatsApp s&apos;ouvre automatiquement pour un contact instantané.
                </p>

                {submitError && (
                  <div className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700">
                    <RxExclamationTriangle className="mt-0.5 flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nav */}
          <div className="mt-8 flex items-center justify-between gap-3">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="btn-ghost !px-5 !py-3"
              >
                <RxChevronLeft size={18} /> Précédent
              </button>
            ) : (
              <div />
            )}

            {step < 2 ? (
              <button
                type="button"
                onClick={() => canNext && setStep((s) => s + 1)}
                disabled={!canNext}
                className="btn-primary !px-6 !py-3 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continuer <RxChevronRight size={18} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canNext || submitting}
                className="btn-whatsapp !px-6 !py-3 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {submitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="12" cy="12" r="9" opacity="0.25" />
                      <path d="M21 12a9 9 0 0 0-9-9" strokeLinecap="round" />
                    </svg>
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
                      <path d="M19.1 17.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5 3.5 1.4 3.5.9 4.2.9.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3z" />
                    </svg>
                    Envoyer ma demande
                  </>
                )}
              </button>
            )}
          </div>
        </form>

        <p className="mx-auto mt-6 max-w-lg text-center text-xs text-tma-ash">
          Préférez un appel direct ? <a href={`tel:${BRAND.phoneRaw}`} className="font-semibold text-tma-electric hover:underline">{BRAND.phone}</a>
        </p>
      </div>
    </section>
  );
}

function Field({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-tma-night">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-tma-night/15 bg-white px-4 py-3 text-sm text-tma-night placeholder:text-tma-ash focus:border-tma-electric focus:outline-none focus:ring-4 focus:ring-tma-electric/20"
      />
    </div>
  );
}
