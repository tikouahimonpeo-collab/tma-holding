"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxArrowRight } from "react-icons/rx";
import { SERVICES } from "../data/services";

/**
 * Grille 6 familles produits TMA Shop — affichée sous le ServiceDetail #06.
 */
export function ShopFamilies() {
  const service = SERVICES.find((s) => s.slug === "shop");
  if (!service?.families) return null;

  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="eyebrow">Catalogue TMA Shop</span>
          <h3 className="heading-md mt-3 text-tma-night">
            Six familles produits,{" "}
            <span className="text-tma-gold">un seul fournisseur.</span>
          </h3>
        </div>
        <a
          href="/boutique"
          className="inline-flex items-center gap-2 text-sm font-semibold text-tma-night hover:text-tma-gold"
        >
          Voir le catalogue complet
          <RxArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {service.families.map((f, i) => (
          <motion.a
            key={f.title}
            href="/boutique"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            className="group rounded-2xl border border-tma-night/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-tma-gold/50 hover:shadow-premium md:p-7"
          >
            <div className="text-4xl">{f.icon}</div>
            <h4 className="mt-5 text-lg font-bold text-tma-night">{f.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-tma-ash">
              {f.desc}
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-tma-gold opacity-0 transition-all group-hover:opacity-100">
              Découvrir →
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
