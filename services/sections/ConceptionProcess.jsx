"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Frise horizontale 5 étapes — sous le ServiceDetail #04 Conception.
 */
export function ConceptionProcess() {
  const steps = [
    {
      n: "01",
      title: "Envoi du plan",
      desc: "Photo, esquisse ou plan existant — envoyez-nous votre point de départ.",
    },
    {
      n: "02",
      title: "Conception 2D",
      desc: "Nos dessinateurs produisent les plans techniques exploitables.",
    },
    {
      n: "03",
      title: "Rendu 3D",
      desc: "Visualisation réaliste — décidez en voyant, pas en imaginant.",
    },
    {
      n: "04",
      title: "Sourcing matériaux",
      desc: "Import direct Chine, conteneurs optimisés, coûts maîtrisés.",
    },
    {
      n: "05",
      title: "Livraison & chantier",
      desc: "Logistique jusqu'à votre domicile ou chantier, clé en main.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-tma-night/10 bg-white p-8 md:p-12"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between">
        <div>
          <span className="eyebrow">Notre méthode</span>
          <h3 className="heading-md mt-3 text-tma-night">
            De l'idée à la clé en{" "}
            <span className="text-tma-gold">5 étapes maîtrisées.</span>
          </h3>
        </div>
      </div>

      <div className="relative mt-10">
        {/* Ligne de liaison */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-5 hidden h-[2px] bg-gradient-to-r from-tma-gold/40 via-tma-gold to-tma-gold/40 md:block"
        />

        <ol className="grid gap-8 md:grid-cols-5 md:gap-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-tma-gold bg-white text-sm font-bold text-tma-night">
                {s.n}
              </div>
              <h4 className="mt-4 text-base font-bold text-tma-night">
                {s.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-tma-ash">
                {s.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.div>
  );
}
