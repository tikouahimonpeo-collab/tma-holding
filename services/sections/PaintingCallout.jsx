"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Encart comparatif peinture manuelle vs. airless mécanisé.
 * Affiché sous le ServiceDetail #03 — Peinture & Enduit.
 */
export function PaintingCallout() {
  const rows = [
    { label: "Temps pour 200 m²", manual: "2 jours", machine: "3 à 4 heures" },
    { label: "Finition", manual: "Traces de rouleau", machine: "Projection homogène" },
    { label: "Main-d'œuvre", manual: "4 à 5 ouvriers", machine: "1 à 2 opérateurs" },
    { label: "Reprises", manual: "Fréquentes", machine: "Quasi nulles" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-3xl bg-tma-night text-white shadow-premium"
    >
      <div className="grid md:grid-cols-2">
        {/* Pitch */}
        <div className="bg-gradient-to-br from-tma-night via-tma-night-500 to-tma-night p-10 md:p-12">
          <span className="eyebrow-light">Démonstration chiffrée</span>
          <h3 className="heading-md mt-4 text-white">
            « 2 jours à la main{" "}
            <span className="text-tma-gold">
              = quelques heures à la machine.
            </span>{" "}
            »
          </h3>
          <p className="mt-5 text-white/75">
            Nos 7 machines airless et notre unité d'enduit mécanisé transforment
            un poste traditionnellement long et coûteux en un chantier maîtrisé,
            propre et prédictible. Moins de temps, moins de reprises, moins de
            surprises sur la facture finale.
          </p>
        </div>

        {/* Tableau comparatif */}
        <div className="bg-tma-night-700/60 p-8 md:p-12">
          <div className="grid grid-cols-3 gap-4 border-b border-white/15 pb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/50">
            <span></span>
            <span className="text-center">Manuel</span>
            <span className="text-center text-tma-gold">TMA Airless</span>
          </div>

          {rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-3 gap-4 border-b border-white/10 py-4 last:border-0"
            >
              <span className="text-sm text-white/70">{r.label}</span>
              <span className="text-center text-sm text-white/60 line-through">
                {r.manual}
              </span>
              <span className="text-center text-sm font-semibold text-white">
                {r.machine}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
