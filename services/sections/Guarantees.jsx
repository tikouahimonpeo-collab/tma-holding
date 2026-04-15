"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxCheckCircled, RxLockClosed, RxTimer, RxRocket } from "react-icons/rx";

const ITEMS = [
  {
    icon: RxCheckCircled,
    title: "Garantie décennale",
    desc: "Couverture 10 ans sur le gros œuvre. Assurance souscrite auprès de SUNU Assurances.",
  },
  {
    icon: RxTimer,
    title: "Délais contractualisés",
    desc: "Pénalités de retard incluses au contrat. 97 % de nos projets livrés à temps.",
  },
  {
    icon: RxLockClosed,
    title: "Prix fermé, pas de surprise",
    desc: "Devis descriptif détaillé ligne par ligne. Aucun supplément sans avenant signé.",
  },
  {
    icon: RxRocket,
    title: "Pilotage chantier digital",
    desc: "Rapports hebdo photo/vidéo via WhatsApp. Dashboard client en temps réel.",
  },
];

export function Guarantees() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-tma">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow">Nos engagements</span>
            <h2 className="heading-lg mt-4 text-tma-night">
              L&apos;excellence <br />
              <span className="text-tma-electric">contractualisée.</span>
            </h2>
            <p className="mt-5 text-tma-ash">
              Chaque engagement est inscrit noir sur blanc au contrat. Nous sommes
              redevables de nos promesses — c&apos;est la base d&apos;un partenariat sain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["ISO 9001", "ISO 14001", "ISO 45001", "SUNU décennale"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-tma-night/15 bg-tma-stone px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-tma-night"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
            {ITEMS.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-premium"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tma-electric/10 text-tma-electric">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-tma-night">{it.title}</h3>
                  <p className="mt-2 text-sm text-tma-ash">{it.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
