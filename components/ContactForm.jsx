"use client";
import { useState } from "react";
import { WA } from "@/lib/brand";
import { IconWhatsApp, IconCheck } from "./icons";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "Demande d'information",
    message: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Redirection vers WhatsApp avec un message prérempli (fallback sans backend)
    const text = `Bonjour TMA Holding,\n\nNom : ${form.nom}\nEmail : ${form.email}\nTéléphone : ${form.telephone}\nSujet : ${form.sujet}\n\nMessage :\n${form.message}`;
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
          Message envoyé !
        </h3>
        <p className="text-tma-ash">
          Nous vous répondrons sous 24 h. La conversation WhatsApp s'ouvre dans un nouvel onglet.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white border border-tma-stone p-6 md:p-10 shadow-premium">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Nom complet" name="nom" value={form.nom} onChange={update} required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={update} required />
        <Field label="Téléphone" name="telephone" type="tel" value={form.telephone} onChange={update} required />
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-tma-night">Sujet</label>
          <select
            name="sujet"
            value={form.sujet}
            onChange={update}
            className="rounded-xl border border-tma-stone bg-white px-4 py-3 text-[15px] focus:border-tma-electric focus:ring-2 focus:ring-tma-electric/20 focus:outline-none"
          >
            <option>Demande d'information</option>
            <option>Demande de devis</option>
            <option>Commande TMA Shop</option>
            <option>Projet construction</option>
            <option>Projet rénovation</option>
            <option>Autre</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold text-tma-night">Votre message</label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={update}
          required
          placeholder="Décrivez votre besoin en quelques lignes…"
          className="rounded-xl border border-tma-stone bg-white px-4 py-3 text-[15px] focus:border-tma-electric focus:ring-2 focus:ring-tma-electric/20 focus:outline-none resize-none"
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-tma-night text-white px-6 py-3 font-semibold hover:bg-tma-electric transition-colors"
        >
          Envoyer le message
        </button>
        <a
          href={WA.info}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 font-semibold hover:bg-[#1DAA52] transition-colors"
        >
          <IconWhatsApp className="w-5 h-5" /> Discuter sur WhatsApp
        </a>
      </div>

      <p className="mt-4 text-xs text-tma-ash text-center">
        En envoyant ce formulaire, vous acceptez d'être recontacté par TMA Holding. Vos données restent confidentielles.
      </p>
    </form>
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
