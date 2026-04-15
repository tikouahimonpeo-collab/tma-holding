"use client";
import { useState } from "react";
import { WA } from "@/lib/brand";
import { IconWhatsApp, IconCheck, IconArrow } from "./icons";

const TYPES = [
  "Construction neuve",
  "Rénovation",
  "Peinture professionnelle",
  "Enduit mécanique",
  "Revêtement & finitions",
  "Conception 2D / 3D",
  "Importation matériaux",
  "Commande TMA Shop",
  "Autre",
];

const BUDGETS = [
  "Moins de 5 M FCFA",
  "5 à 15 M FCFA",
  "15 à 50 M FCFA",
  "50 à 150 M FCFA",
  "Plus de 150 M FCFA",
  "À définir",
];

const DELAIS = [
  "Dès que possible",
  "Dans le mois",
  "Dans les 3 mois",
  "Dans les 6 mois",
  "À planifier",
];

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    type: TYPES[0],
    budget: BUDGETS[2],
    localisation: "Abidjan",
    description: "",
    delai: DELAIS[1],
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const text = `🏗️ Nouvelle demande de devis TMA Holding

👤 Client : ${form.prenom} ${form.nom}
📞 Téléphone : ${form.telephone}
📧 Email : ${form.email}

🛠️ Type de projet : ${form.type}
📍 Localisation : ${form.localisation}
💰 Budget : ${form.budget}
⏱️ Délai souhaité : ${form.delai}

📝 Description :
${form.description}`;
    const url = `https://wa.me/8613265912468?text=${encodeURIComponent(text)}`;
    setSent(true);
    window.open(url, "_blank");
  };

  if (sent) {
    return (
      <div className="rounded-2xl bg-white border border-tma-stone p-10 text-center shadow-premium">
        <div className="mx-auto h-14 w-14 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-5">
          <IconCheck className="w-7 h-7 text-[#25D366]" />
        </div>
        <h3 className="font-display text-2xl font-bold text-tma-night mb-3">
          Demande envoyée !
        </h3>
        <p className="text-tma-ash mb-6">
          Votre demande de devis a bien été transmise à l'équipe TMA Holding. Nous vous répondons sous 24 h ouvrées.
        </p>
        <a
          href={WA.devis}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 font-semibold hover:bg-[#1DAA52] transition-colors"
        >
          <IconWhatsApp className="w-5 h-5" /> Continuer sur WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white border border-tma-stone p-6 md:p-10 shadow-premium">
      <div className="mb-8">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-tma-night mb-2">
          Demande de devis gratuit
        </h3>
        <p className="text-tma-ash">
          Complétez ce formulaire en 2 minutes. Réponse garantie sous 24 h.
        </p>
      </div>

      <Fieldset legend="Vos coordonnées">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Prénom" name="prenom" value={form.prenom} onChange={update} required />
          <Field label="Nom" name="nom" value={form.nom} onChange={update} required />
          <Field label="Téléphone" type="tel" name="telephone" value={form.telephone} onChange={update} required />
          <Field label="Email" type="email" name="email" value={form.email} onChange={update} required />
        </div>
      </Fieldset>

      <Fieldset legend="Votre projet">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select label="Type de projet" name="type" value={form.type} onChange={update} options={TYPES} />
          <Select label="Budget estimatif" name="budget" value={form.budget} onChange={update} options={BUDGETS} />
          <Field label="Localisation" name="localisation" value={form.localisation} onChange={update} required />
          <Select label="Délai souhaité" name="delai" value={form.delai} onChange={update} options={DELAIS} />
        </div>
        <div className="mt-4 flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-tma-night">
            Description de votre besoin
          </label>
          <textarea
            name="description"
            rows={5}
            value={form.description}
            onChange={update}
            required
            placeholder="Nombre de pièces, surface, style, contraintes, état actuel…"
            className="rounded-xl border border-tma-stone bg-white px-4 py-3 text-[15px] focus:border-tma-electric focus:ring-2 focus:ring-tma-electric/20 focus:outline-none resize-none"
          />
        </div>
      </Fieldset>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 rounded-xl bg-tma-stone p-4 text-sm">
        {[
          "Réponse sous 24 h",
          "Devis 100 % gratuit",
          "Confidentialité totale",
        ].map((x) => (
          <div key={x} className="flex items-center gap-2 text-tma-night">
            <IconCheck className="w-4 h-4 text-tma-electric" /> {x}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-tma-electric text-white px-6 py-4 font-semibold hover:bg-tma-electric-500 transition-colors shadow-premium"
        >
          Envoyer ma demande <IconArrow className="w-5 h-5" />
        </button>
        <a
          href={WA.devis}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-4 font-semibold hover:bg-[#1DAA52] transition-colors"
        >
          <IconWhatsApp className="w-5 h-5" /> Direct WhatsApp
        </a>
      </div>
    </form>
  );
}

function Fieldset({ legend, children }) {
  return (
    <fieldset className="mb-6">
      <legend className="text-sm font-semibold text-tma-electric uppercase tracking-[0.15em] mb-4">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

function Field({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-tma-night">{label}</label>
      <input
        {...props}
        className="rounded-xl border border-tma-stone bg-white px-4 py-3 text-[15px] focus:border-tma-electric focus:ring-2 focus:ring-tma-electric/20 focus:outline-none"
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-tma-night">{label}</label>
      <select
        {...props}
        className="rounded-xl border border-tma-stone bg-white px-4 py-3 text-[15px] focus:border-tma-electric focus:ring-2 focus:ring-tma-electric/20 focus:outline-none"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
