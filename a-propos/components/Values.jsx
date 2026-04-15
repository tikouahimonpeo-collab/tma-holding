"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  RxLightningBolt,
  RxTarget,
  RxLockClosed,
  RxPerson,
} from "react-icons/rx";

const VALUES = [
  {
    icon: RxTarget,
    title: "Qualité sans compromis",
    body: "Matériaux sélectionnés à la source, finitions contrôlées, garantie décennale systématique. Ce qui porte notre nom doit durer.",
  },
  {
    icon: RxLightningBolt,
    title: "Délais tenus",
    body: "Planning affiché dès le devis, jalons hebdomadaires, pénalités si nous dépassons. 98 % de nos chantiers sont livrés dans les temps.",
  },
  {
    icon: RxLockClosed,
    title: "Transparence totale",
    body: "Devis détaillés, factures claires, zéro frais caché. Le client voit chaque ligne, chaque choix, chaque avancement.",
  },
  {
    icon: RxPerson,
    title: "Proximité client",
    body: "Un interlocuteur dédié par projet. Vous n'expliquez jamais deux fois. WhatsApp en direct, visites chantier à la demande.",
  },
];

export function Values() {
  return (
    <section className="bg-tma-stone py-24 md:py-32">
      <div className="container-tma">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nos valeurs</span>
          <h2 className="heading-lg mt-4 text-tma-night">
            Les principes non négociables
          </h2>
          <p className="mt-5 text-tma-ash">
            Nous avons refusé des projets qui ne respectaient pas ces règles. Elles définissent
            qui nous sommes — et qui nous ne serons jamais.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-premium"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tma-night text-tma-electric-200">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-tma-night">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tma-ash">{v.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
