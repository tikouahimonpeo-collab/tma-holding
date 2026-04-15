"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { IMG } from "@/lib/brand";

const QUOTES = [
  {
    text: "TMA Holding a construit ma villa de 380 m² en 5 mois, budget et délais respectés au centime près. Aucun chantier que j'ai visité en Côte d'Ivoire n'est aussi bien tenu. Je les ai rappelés pour mon immeuble.",
    author: "Kouadio Yao",
    role: "Entrepreneur, Villa Cocody Angré",
    avatar: IMG.client1,
  },
  {
    text: "Depuis Paris, j'ai suivi mon chantier semaine après semaine grâce à leurs rapports photo et vidéo. À mon retour, la maison était exactement comme convenu. Pour la diaspora, TMA c'est la confiance.",
    author: "Amara Diallo",
    role: "Diaspora · France · Villa Bingerville",
    avatar: IMG.client2,
  },
  {
    text: "J'ai confié 3 projets à TMA en 4 ans : rénovation, immeuble locatif, puis aménagement de bureaux. Résultats impeccables à chaque fois, ROI conforme. Je ne travaille plus avec personne d'autre.",
    author: "Fatima Traoré",
    role: "Investisseur immobilier, Abidjan",
    avatar: IMG.client3,
  },
];

export function Testimonial6() {
  return (
    <section id="temoignages" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-tma">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <span className="eyebrow">Témoignages clients</span>
          <h2 className="heading-lg mt-4 text-balance text-tma-night">
            Ce ne sont pas nos mots. Ce sont les leurs.
          </h2>
          <p className="lead mt-5">
            Des clients qui ont osé nous faire confiance. Et qui reviennent.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {QUOTES.map((q, i) => (
            <figure
              key={i}
              className="card-premium flex h-full flex-col justify-between"
            >
              <div>
                <div className="mb-4 flex gap-0.5 text-tma-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <BiSolidStar key={k} size={18} />
                  ))}
                </div>
                <blockquote className="text-[15px] leading-relaxed text-tma-night md:text-base">
                  « {q.text} »
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-tma-night/8 pt-5">
                <img
                  src={q.avatar}
                  alt={q.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-tma-night">{q.author}</div>
                  <div className="text-xs text-tma-ash">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
