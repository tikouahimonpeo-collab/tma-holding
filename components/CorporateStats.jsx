"use client";

import React from "react";
import { motion } from "framer-motion";
import { CORPORATE } from "@/lib/brand";

/**
 * Bandeau de chiffres clés "milliard $" — niveau corporate.
 * Fond tma-night, grands chiffres, sous-texte discret.
 */
export function CorporateStats({ variant = "dark" }) {
  const isDark = variant === "dark";
  return (
    <section
      className={`${
        isDark ? "bg-tma-night text-white" : "bg-tma-stone text-tma-night"
      } py-20 md:py-28`}
    >
      <div className="container-tma">
        <div className="mx-auto max-w-2xl text-center">
          <span className={isDark ? "eyebrow-light" : "eyebrow"}>Le Groupe en chiffres</span>
          <h2 className={`heading-lg mt-4 ${isDark ? "text-white" : "text-tma-night"}`}>
            Une trajectoire
            <span className={isDark ? "block text-tma-electric-200" : "block text-tma-electric"}>
              à l&apos;échelle continentale.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {CORPORATE.stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`rounded-2xl border p-8 backdrop-blur ${
                isDark ? "border-white/10 bg-white/5" : "border-tma-night/10 bg-white"
              }`}
            >
              <div
                className={`text-4xl font-extrabold leading-none md:text-5xl ${
                  isDark ? "text-white" : "text-tma-night"
                }`}
              >
                {s.k}
              </div>
              <div className="mt-3 text-sm font-semibold">{s.v}</div>
              <div
                className={`mt-1 text-[11px] uppercase tracking-[0.18em] ${
                  isDark ? "text-white/50" : "text-tma-ash"
                }`}
              >
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
