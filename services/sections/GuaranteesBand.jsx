"use client";

import React from "react";
import { motion } from "framer-motion";
import { GUARANTEES } from "../data/services";

/**
 * Bandeau 4 garanties — affiché après les 6 services détaillés.
 */
export function GuaranteesBand() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-tma">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nos engagements</span>
          <h2 className="heading-lg mt-4 text-tma-night">
            Quatre engagements{" "}
            <span className="text-tma-gold">non négociables.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center rounded-2xl border border-tma-night/10 bg-tma-bone p-8 text-center transition-all hover:border-tma-gold/50 hover:bg-white hover:shadow-premium"
            >
              <div className="text-4xl">{g.icon}</div>
              <h3 className="mt-5 text-lg font-bold text-tma-night">
                {g.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-tma-ash">
                {g.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
