"use client";

import React from "react";
import { motion } from "framer-motion";
import { IMG } from "@/lib/brand";

const MILESTONES = [
  {
    year: "2015",
    title: "Création de TMA Holding",
    body: "Lancement de l'activité BTP à Abidjan. Premier contrat : une villa à Cocody, livrée en 4 mois, zéro réclamation.",
  },
  {
    year: "2018",
    title: "Ouverture du pôle Revêtement",
    body: "Spécialisation marbre, granit et carrelage premium. Partenariats directs avec fournisseurs italiens et turcs.",
  },
  {
    year: "2021",
    title: "Lancement de TMA Shop",
    body: "Distribution de matériaux BTP livrés en 24-48 h à Abidjan. Plus de 500 références au catalogue.",
  },
  {
    year: "2024",
    title: "1 Md FCFA de projets livrés",
    body: "Franchissement du milliard en volume annuel de chantiers. Équipe stabilisée à 45 collaborateurs.",
  },
  {
    year: "2025",
    title: "Expansion conception architecturale",
    body: "Pôle architecture renforcé. Projets pour la diaspora et les promoteurs institutionnels.",
  },
];

export function Story() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-tma">
        <div className="grid gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow">Notre histoire</span>
            <h2 className="heading-lg mt-4 text-tma-night">
              10 ans à bâtir <br /> ce qui dure.
            </h2>
            <p className="mt-6 text-tma-ash">
              Chaque chantier nous apprend quelque chose. Nous avons grandi en écoutant nos clients,
              en respectant nos engagements et en refusant les compromis sur la qualité.
            </p>
            <img
              src={IMG.chantier}
              alt="Chantier TMA Holding"
              className="mt-10 w-full rounded-2xl object-cover shadow-premium"
            />
          </motion.div>

          <div className="relative lg:col-span-7">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-tma-night/10 md:left-[15px]" />
            <ol className="space-y-10">
              {MILESTONES.map((m, i) => (
                <motion.li
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-10 md:pl-14"
                >
                  <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-tma-electric text-[10px] font-bold text-white shadow-glow md:h-8 md:w-8 md:text-xs">
                    {i + 1}
                  </span>
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-tma-electric">
                    {m.year}
                  </div>
                  <h3 className="heading-md mt-1 text-tma-night">{m.title}</h3>
                  <p className="mt-2 text-tma-ash">{m.body}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
