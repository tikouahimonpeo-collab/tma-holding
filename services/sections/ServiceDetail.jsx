"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxArrowTopRight, RxCheck } from "react-icons/rx";
import { waLink } from "@/lib/brand";

/**
 * Bloc détail d'un service — layout alterné gauche/droite.
 * Utilisé 6 fois sur la page Services avec alternance visuelle.
 *
 * @param {object} service  - objet service depuis services/data/services.js
 * @param {number} index    - index dans la liste (pour alternance + bg)
 * @param {ReactNode} extra - contenu additionnel sous le bloc (encart, onglets, frise…)
 */
export function ServiceDetail({ service, index, extra = null }) {
  const reversed = index % 2 === 1;
  const alternateBg = index % 2 === 1;

  return (
    <section
      id={service.slug}
      className={`scroll-mt-20 ${alternateBg ? "bg-tma-stone/50" : "bg-white"} py-24 md:py-32`}
    >
      <div className="container-tma">
        <div
          className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-20 ${
            reversed ? "lg:[&>div:first-child]:order-last" : ""
          }`}
        >
          {/* ——— Image ——— */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-premium">
              <img
                src={service.img}
                alt={service.imgAlt}
                className="aspect-[4/5] w-full object-cover md:aspect-[4/5]"
              />
              {/* Badge numéro */}
              <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full bg-white/95 px-4 py-2 backdrop-blur">
                <span className="text-xs font-bold tracking-[0.2em] text-tma-gold">
                  {service.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-tma-night">
                  {service.eyebrow}
                </span>
              </div>
              {/* Overlay dégradé */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-tma-night/40 to-transparent" />
            </div>
          </motion.div>

          {/* ——— Texte ——— */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <h2 className="heading-lg text-tma-night">{service.title}</h2>
            <p className="mt-4 text-xl font-medium text-tma-gold md:text-2xl">
              {service.subtitle}
            </p>

            <p className="mt-6 text-base leading-relaxed text-tma-night/80 md:text-lg">
              {service.intro}
            </p>

            {service.secondary && (
              <p className="mt-4 text-base leading-relaxed text-tma-night/70 md:text-lg">
                {service.secondary}
              </p>
            )}

            {/* Prestations */}
            <div className="mt-10">
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-tma-ash">
                Prestations incluses
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.prestations.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-tma-night">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-tma-gold/15 text-tma-gold">
                      <RxCheck className="h-3.5 w-3.5" strokeWidth={1} />
                    </span>
                    <span className="text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs chiffrées */}
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-tma-night/10 pt-6">
              {service.specs.map((x) => (
                <div key={x.v}>
                  <div className="text-2xl font-extrabold text-tma-night md:text-3xl">
                    {x.k}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-tma-ash">
                    {x.v}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={waLink(service.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                {service.cta}
                <RxArrowTopRight />
              </a>
              {service.ctaSecondary && (
                <a href="/contact" className="btn-ghost">
                  {service.ctaSecondary}
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Contenu additionnel (encart, onglets, frise…) */}
        {extra && <div className="mt-16 md:mt-20">{extra}</div>}
      </div>
    </section>
  );
}
