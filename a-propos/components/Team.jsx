"use client";

import React from "react";
import { motion } from "framer-motion";
import { IMG } from "@/lib/brand";

const STATS = [
  { k: "45", v: "Collaborateurs" },
  { k: "150+", v: "Projets livrés" },
  { k: "98%", v: "Délais respectés" },
  { k: "10 ans", v: "Expertise cumulée" },
];

export function Team() {
  return (
    <section className="relative isolate overflow-hidden bg-tma-night py-24 text-white md:py-32">
      <div className="absolute inset-0 -z-10">
        <img src={IMG.equipe} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-tma-night/85 to-tma-night" />
      </div>

      <div className="container-tma">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-light">L&apos;équipe</span>
          <h2 className="heading-lg mt-4 text-white">
            Des femmes et des hommes <br /> qui construisent avec fierté.
          </h2>
          <p className="mt-5 text-white/70">
            Architectes, conducteurs de travaux, maçons, carreleurs, peintres, commerciaux — chaque
            métier est porté par des professionnels formés et engagés sur la durée.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="text-4xl font-extrabold text-white md:text-5xl">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
