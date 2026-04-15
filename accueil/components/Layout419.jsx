"use client";

import React from "react";
import { IMG, WA } from "@/lib/brand";
import { RxChevronRight } from "react-icons/rx";

const SERVICES = [
  {
    k: "01",
    title: "Construction neuve",
    sub: "Villas · Immeubles · Clôtures",
    body:
      "De la fondation à la remise des clés. Nous sélectionnons les matériaux à la source, encadrons des équipes fidélisées et livrons des ouvrages qui traversent les décennies. Chaque chantier est dirigé par un chef de projet dédié.",
    img: IMG.construction,
  },
  {
    k: "02",
    title: "Rénovation premium",
    sub: "Maisons · Appartements · Bureaux",
    body:
      "Redonnez vie à vos espaces. Peinture airless, revêtement sur mesure, cuisine et salle de bain italiennes, menuiserie alu sur devis. Nous travaillons pendant votre absence et livrons en 2 à 3 mois maximum.",
    img: IMG.renovation,
  },
  {
    k: "03",
    title: "Revêtement haut de gamme",
    sub: "Marbre · Granit · Carrelage · Alucobond",
    body:
      "Finitions d'exception pour façades et intérieurs. Marbre italien Calacatta, granit du Zimbabwe, carrelage grand format, façade ventilée Alucobond. Pose millimétrique par notre équipe spécialisée.",
    img: IMG.revetement,
  },
  {
    k: "04",
    title: "Conception architecturale",
    sub: "Plans 2D · Rendus 3D · Permis",
    body:
      "Notre bureau d'études intégré conçoit votre projet avant même la première pierre. Plans techniques, rendus 3D photoréalistes, dossier de permis de construire. Vous visualisez et validez chaque détail.",
    img: IMG.conception,
  },
];

export function Layout419() {
  return (
    <section id="services" className="px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container-tma">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <span className="eyebrow">Nos services</span>
            <h2 className="heading-lg mt-4 text-balance text-tma-night">
              Nous construisons bien plus que des murs.
            </h2>
            <p className="lead mt-5">
              Quatre domaines d'expertise pour transformer vos ambitions en
              réalisations concrètes. Chaque projet démarre par une rencontre,
              continue par une promesse écrite, se termine par une livraison
              impeccable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="btn-primary">
                {" "}
                Demander un devis
                <RxChevronRight size={18} />
              </a>
              <a href="/services" className="btn-ghost">
                Explorer nos services
              </a>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ol className="grid gap-4">
              {SERVICES.map((s) => (
                <li
                  key={s.k}
                  className="group grid gap-6 overflow-hidden rounded-3xl border border-tma-night/10 bg-white p-5 transition hover:-translate-y-1 hover:border-tma-electric hover:shadow-premium md:grid-cols-[180px_1fr] md:p-6"
                >
                  <div className="relative h-44 overflow-hidden rounded-2xl md:h-full">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-tma-electric">
                      <span>{s.k}</span>
                      <span className="divider-gold !w-8" />
                      <span>{s.sub}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-tma-night md:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-tma-ash md:text-base">
                      {s.body}
                    </p>
                    <a
                      href="/services"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-tma-electric transition hover:gap-2"
                    >
                      En savoir plus <RxChevronRight size={16} />
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
