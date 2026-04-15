"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCheck } from "react-icons/rx";
import { SERVICES } from "../data/services";

/**
 * Onglets horizontaux pour le service Revêtement (#05).
 * Contenu : Sols / Murs intérieurs / Façades extérieures.
 */
export function RevetementTabs() {
  const service = SERVICES.find((s) => s.slug === "revetement");
  const [active, setActive] = useState(0);

  if (!service?.tabs) return null;

  return (
    <div className="rounded-3xl border border-tma-night/10 bg-white p-6 shadow-sm md:p-10">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="eyebrow">Explorez nos univers de finition</span>
          <h3 className="heading-md mt-3 text-tma-night">
            Trois univers,{" "}
            <span className="text-tma-gold">quinze matériaux référencés.</span>
          </h3>
        </div>
      </div>

      {/* Onglets */}
      <div
        role="tablist"
        className="mt-8 flex flex-wrap gap-2 border-b border-tma-night/10"
      >
        {service.tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`relative px-5 py-3 text-sm font-semibold transition-all md:text-base ${
              active === i
                ? "text-tma-night"
                : "text-tma-ash hover:text-tma-night"
            }`}
          >
            {t.label}
            {active === i && (
              <motion.span
                layoutId="tab-underline"
                className="absolute inset-x-0 -bottom-px h-[3px] rounded-full bg-tma-gold"
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Contenu */}
      <div className="mt-8 min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {service.tabs[active].items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-tma-stone/60 p-4 text-tma-night"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-tma-gold text-white">
                  <RxCheck className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
