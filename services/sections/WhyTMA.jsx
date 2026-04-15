"use client";

import React from "react";
import { motion } from "framer-motion";
import { PILLARS } from "../data/services";

/**
 * Bloc « Pourquoi TMA Holding » — 3 piliers.
 */
export function WhyTMA() {
  return (
    <section className="bg-tma-bone py-24 md:py-32">
      <div className="container-tma">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Notre différence</span>
          <h2 className="heading-lg mt-4 text-tma-night">
            Trois piliers, <br className="hidden md:block" />
            une seule promesse :{" "}
            <span className="text-tma-gold">l'exécution irréprochable.</span>
          </h2>
          <span className="divider-gold mt-6" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-tma-night/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-tma-gold/50 hover:shadow-premium md:p-10"
            >
              {/* Numéro discret */}
              <div className="absolute right-6 top-6 text-5xl font-extrabold text-tma-stone">
                0{i + 1}
              </div>

              <div className="text-5xl">{p.icon}</div>
              <h3 className="mt-6 text-xl font-bold text-tma-night md:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-tma-ash">
                {p.desc}
              </p>

              <div className="mt-8 h-[2px] w-10 rounded-full bg-tma-gold transition-all group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
