"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
import { BRAND, IMG, WA, COPY } from "@/lib/brand";

export function Header84() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-tma-night text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMG.heroHome}
          alt="Chantier TMA Holding à Abidjan"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tma-night via-tma-night/90 to-tma-night/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,144,255,0.25),transparent_55%)]" />
      </div>

      <div className="container-tma flex flex-col gap-16 py-20 md:py-32 lg:min-h-[88vh] lg:flex-row lg:items-center lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-tma-electric animate-pulse" />
            BTP Premium · Abidjan · Depuis 2015
          </motion.span>

          <h1 className="heading-xl mt-6 text-balance text-white">
            {BRAND.baseline}.
            <span className="block text-tma-electric-200">
              Bâtissons votre réussite.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Construction, rénovation, revêtement haut de gamme et conception
            architecturale. TMA Holding transforme les projets ambitieux en
            réalisations exceptionnelles — dans les délais, dans le budget,
            sans compromis sur la qualité.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="/contact" className="btn-primary !px-8 !py-4 !text-base">
              {COPY.ctaDevisLong}
              <RxChevronRight size={18} />
            </a>
            <a
              href={WA.general}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp !px-8 !py-4 !text-base"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
                <path d="M19.1 17.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5 3.5 1.4 3.5.9 4.2.9.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3z" />
              </svg>
              WhatsApp direct
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-tma-electric" />
              Réponse sous 24 h
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-tma-electric" />
              Garantie décennale
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-tma-electric" />
              Paiement échelonné
            </div>
          </div>
        </motion.div>

        {/* Side card — preuve sociale */}
        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative ml-auto w-full max-w-sm rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl lg:self-end"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-tma-gold"><path d="M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.3 5.8 22l2.4-8.1L2 9.4h7.6z"/></svg>
            Portfolio 2025
          </div>
          <div className="mt-4 text-4xl font-extrabold leading-none text-white md:text-5xl">
            1,5 Md
            <span className="ml-1 text-lg font-semibold text-tma-electric-200">FCFA</span>
          </div>
          <p className="mt-2 text-sm text-white/70">
            De projets livrés en 2025 — villas, immeubles, bureaux et rénovations premium.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
            {[
              ["150+", "Projets"],
              ["98%", "Satisfaction"],
              ["10 ans", "Expertise"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="text-lg font-bold text-white">{k}</div>
                <div className="text-[10px] uppercase tracking-wider text-white/60">{v}</div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>

      {/* Bande défilante marques/mots */}
      <div className="relative border-t border-white/10 bg-tma-night-800/50 py-5">
        <div className="container-tma flex flex-wrap items-center justify-between gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/50">
          <span>Construction</span>
          <span>·</span>
          <span>Rénovation</span>
          <span>·</span>
          <span>Revêtement Marbre</span>
          <span>·</span>
          <span>Conception Architecturale</span>
          <span>·</span>
          <span>TMA Shop — Matériaux BTP</span>
        </div>
      </div>
    </section>
  );
}
