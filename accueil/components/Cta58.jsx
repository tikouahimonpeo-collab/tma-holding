"use client";

import React, { useState } from "react";

export function Cta58() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: brancher à votre backend / Mailchimp / Brevo
    setSent(true);
    setEmail("");
  };

  return (
    <section className="px-[5%] py-20">
      <div className="container-tma">
        <div className="relative overflow-hidden rounded-3xl border border-tma-night/10 bg-tma-stone px-8 py-14 md:px-16 md:py-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-tma-electric/15 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="eyebrow">Newsletter TMA</span>
            <h2 className="heading-lg mt-4 text-balance text-tma-night">
              Conseils BTP, offres exclusives, nouveaux produits.
            </h2>
            <p className="lead mt-5 mx-auto max-w-xl">
              Un email par mois, pas plus. Les astuces construction à
              Abidjan, les offres TMA Shop avant tout le monde, les coulisses
              de nos chantiers.
            </p>

            <form
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-md border border-tma-night/15 bg-white px-5 py-3.5 text-sm text-tma-night placeholder:text-tma-ash focus:border-tma-electric focus:outline-none focus:ring-4 focus:ring-tma-electric/15"
              />
              <button type="submit" className="btn-primary whitespace-nowrap !py-3.5">
                {sent ? "Merci ! 🎉" : "Je m'inscris"}
              </button>
            </form>
            <p className="mt-4 text-xs text-tma-ash">
              Zéro spam. Désinscription en un clic. Vos données ne sont pas partagées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
