"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Prise de brief",
    desc: "Écoute approfondie : usage, surface, budget, délais, contraintes site.",
  },
  {
    n: "02",
    title: "Étude de faisabilité",
    desc: "Analyse technique + étude de sol + chiffrage préliminaire sous 7 jours.",
  },
  {
    n: "03",
    title: "Conception & permis",
    desc: "Plans 3D, BIM, maquettes. Dépôt & obtention du permis de construire.",
  },
  {
    n: "04",
    title: "Devis détaillé & contrat",
    desc: "Descriptif de 150 lignes, planning Gantt, contrat signé avec notre cabinet.",
  },
  {
    n: "05",
    title: "Exécution chantier",
    desc: "Pilotage par un chef de projet dédié, rapports hebdo photo + WhatsApp.",
  },
  {
    n: "06",
    title: "Livraison & SAV",
    desc: "Réception tripartite, garantie décennale, SAV réactif sur 10 ans.",
  },
];

export function Process() {
  return (
    <section className="bg-tma-night py-24 text-white md:py-32">
      <div className="container-tma">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-light">Notre méthodologie</span>
          <h2 className="heading-lg mt-4 text-white">
            6 étapes. <br />
            <span className="text-tma-electric-200">Zéro mauvaise surprise.</span>
          </h2>
          <p className="mt-5 text-white/70">
            Un processus industriel éprouvé sur 650+ projets, qui sécurise
            budget, délai et qualité dès la première rencontre.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-tma-electric/40 hover:bg-white/8"
            >
              <div className="absolute -right-4 -top-4 text-7xl font-black text-white/5 transition group-hover:text-tma-electric/15">
                {s.n}
              </div>
              <div className="relative">
                <div className="text-sm font-bold tracking-[0.2em] text-tma-electric-200">
                  ÉTAPE {s.n}
                </div>
                <h3 className="mt-3 text-xl font-extrabold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
