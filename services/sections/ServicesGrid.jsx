"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxArrowRight } from "react-icons/rx";
import { SERVICES } from "../data/services";

/**
 * Grille 6 cartes preview — aperçu des 6 expertises.
 * Clic sur carte → scroll vers la section détail correspondante.
 */
export function ServicesGrid() {
  return (
    <section id="services-grid" className="bg-white py-24 md:py-32">
      <div className="container-tma">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nos expertises</span>
          <h2 className="heading-lg mt-4 text-tma-night">
            Six expertises intégrées,{" "}
            <span className="text-tma-gold">une seule signature.</span>
          </h2>
          <p className="lead mt-6">
            Cliquez sur une expertise pour découvrir le détail, les prestations
            incluses et les bénéfices clients.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.slug}
              href={`#${s.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-tma-night/8 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-premium"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.imgAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Badge numéro */}
                <div
                  className="absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-bold tracking-[0.18em] text-tma-night"
                  style={{ backgroundColor: s.accent === "#D4A84B" ? "#D4A84B" : "#FFFFFF" }}
                >
                  {s.number}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-tma-night/60 via-transparent to-transparent" />
              </div>

              {/* Contenu */}
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="text-xl font-bold text-tma-night md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-tma-ash md:text-base">
                  {s.subtitle}
                </p>

                {/* 3 bullets courts */}
                <ul className="mt-5 space-y-2">
                  {s.prestations.slice(0, 3).map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-tma-night/80"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-tma-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-tma-night transition-all group-hover:gap-3 group-hover:text-tma-gold">
                    {s.cta}
                    <RxArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
