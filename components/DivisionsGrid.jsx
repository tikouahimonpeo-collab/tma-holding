"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { CORPORATE } from "@/lib/brand";

/**
 * "Le Groupe" — grille des divisions/filiales.
 * Chaque card : nom, tagline, description courte, couleur d'accent.
 */
export function DivisionsGrid() {
  return (
    <section className="bg-tma-stone py-24 md:py-32">
      <div className="container-tma">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">Structure du Groupe</span>
            <h2 className="heading-lg mt-4 text-tma-night">
              Quatre divisions, <br />
              <span className="text-tma-electric">une ambition.</span>
            </h2>
          </div>
          <p className="max-w-md text-tma-ash">
            Un Groupe intégré couvrant l&apos;intégralité de la chaîne de valeur BTP —
            de la conception à la livraison, en passant par la distribution de matériaux.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CORPORATE.divisions.map((d, i) => (
            <motion.a
              key={d.slug}
              href={`/services#${d.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-tma-night/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-premium md:p-8"
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: d.accent }}
              />
              <div>
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: d.accent }}
                >
                  {d.tagline}
                </div>
                <h3 className="mt-3 text-2xl font-extrabold text-tma-night">{d.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-tma-ash">{d.desc}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-tma-night transition-colors group-hover:text-tma-electric">
                Découvrir
                <RxArrowTopRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
