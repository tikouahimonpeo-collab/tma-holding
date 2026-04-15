"use client";

import React from "react";

const STATS = [
  { k: "150+", l: "Projets livrés", s: "Villas, immeubles, rénovations, aménagements" },
  { k: "98%", l: "Clients satisfaits", s: "Qui nous recommandent ou reviennent" },
  { k: "10 ans", l: "D'expertise BTP", s: "Sur le marché ivoirien et ouest-africain" },
  { k: "1,5 Md", l: "FCFA livrés en 2025", s: "De projets clés en main" },
];

export function Stats50() {
  return (
    <section id="chiffres" className="relative px-[5%] py-20 md:py-28">
      <div className="container-tma">
        <div className="mb-14 grid gap-12 md:mb-20 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <span className="eyebrow">Preuve chiffrée</span>
            <h2 className="heading-lg mt-4 text-balance text-tma-night">
              Nos réalisations parlent plus fort que nos promesses.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="lead">
              Chaque chiffre ci-dessous représente une famille installée dans
              sa maison, un investisseur qui touche ses premiers loyers, un
              entrepreneur qui ouvre son nouveau bureau. C'est la seule
              mesure qui compte pour nous.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-4 md:gap-6">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-tma-night/10 bg-white p-8 transition hover:-translate-y-1 hover:border-tma-electric hover:shadow-premium"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-tma-electric/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative text-4xl font-extrabold leading-none tracking-tight text-tma-night md:text-5xl">
                {s.k}
              </div>
              <div className="relative mt-4 text-sm font-semibold uppercase tracking-wider text-tma-electric">
                {s.l}
              </div>
              <p className="relative mt-2 text-sm leading-relaxed text-tma-ash">
                {s.s}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
