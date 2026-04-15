"use client";

import React from "react";
import { IMG, WA } from "@/lib/brand";
import { RxChevronRight } from "react-icons/rx";

const PILLARS = [
  {
    title: "Qualité premium sans compromis",
    body:
      "Matériaux sourcés en direct (Italie, Espagne, Turquie, Chine), main-d'œuvre qualifiée payée au-dessus du marché, inspection systématique à chaque étape. Nous ne livrons jamais un chantier que nous ne recommanderions pas à notre famille.",
    img: IMG.construction,
    badge: "Garantie décennale",
  },
  {
    title: "Délais tenus, calendriers contractuels",
    body:
      "Chaque devis inclut un planning détaillé avec pénalités de retard contractuelles. Le temps, c'est votre argent. 94 % de nos chantiers 2024–2025 ont été livrés à la date promise ou en avance.",
    img: IMG.chantier,
    badge: "Pénalités de retard",
  },
  {
    title: "Accompagnement total, visibilité totale",
    body:
      "Un chef de projet dédié, joignable 6j/7 sur WhatsApp. Rapports hebdomadaires photo + vidéo. Drive partagé avec toutes les factures matériaux. Pour vous, comme pour la diaspora.",
    img: IMG.equipe,
    badge: "Chef de projet dédié",
  },
  {
    title: "Transparence financière, zéro surprise",
    body:
      "Devis détaillé ligne par ligne, échelonnement par étapes validées, justificatif pour chaque dépense matériaux. Aucun paiement cash non tracé. Ce que vous signez, c'est ce que vous payez.",
    img: IMG.conception,
    badge: "Zéro frais caché",
  },
];

export function Layout513() {
  return (
    <section id="pourquoi-nous" className="bg-tma-stone/50 px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container-tma">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <span className="eyebrow">Pourquoi TMA Holding</span>
          <h2 className="heading-lg mt-4 text-balance text-tma-night">
            Quatre engagements qui nous différencient.
          </h2>
          <p className="lead mt-5">
            Ce n'est pas du marketing. C'est ce qui est écrit dans chaque
            contrat que nous signons avec nos clients.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {PILLARS.map((p, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-premium"
            >
              <div className="relative h-64 overflow-hidden md:h-72">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute left-5 top-5 rounded-full bg-tma-electric px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {p.badge}
                </div>
              </div>
              <div className="p-8">
                <h3 className="heading-md text-tma-night">{p.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-tma-ash">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <a href="/contact" className="btn-primary">
            Obtenir mon devis
            <RxChevronRight size={18} />
          </a>
          <a href={WA.general} target="_blank" rel="noreferrer" className="btn-ghost">
            Discuter sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
