"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxArrowDown, RxArrowTopRight } from "react-icons/rx";
import { IMG, WA } from "@/lib/brand";

/**
 * Hero de la page Services — full-bleed 85vh.
 * Image de fond : chantier en construction (remplacer par photo #1 du brief).
 */
export function ServicesHero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[85vh] items-end overflow-hidden bg-tma-night pt-32 pb-20 text-white md:pt-40 md:pb-28"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMG.heroServices}
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
        {/* Dégradé gauche plus dense pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-tma-night/95 via-tma-night/75 to-tma-night/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-tma-night/40 via-transparent to-tma-night" />
      </div>

      <div className="container-tma">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="eyebrow-light">Nos services</span>

          <h1 className="heading-xl mt-6 text-balance">
            Bâtir, transformer, équiper —{" "}
            <span className="text-tma-gold">avec l'exigence</span> d'une
            entreprise qui maîtrise toute la chaîne.
          </h1>

          <p className="lead mt-8 max-w-2xl text-white/75">
            De la première esquisse au dernier coup de pinceau, TMA Holding
            conçoit, réalise et équipe vos projets immobiliers en Côte d'Ivoire.
            Six expertises intégrées, des équipements industriels de dernière
            génération, et un engagement sans compromis sur la qualité
            d'exécution.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#services-grid" className="btn-primary">
              Découvrir nos 6 expertises
              <RxArrowDown />
            </a>
            <a
              href={WA.devis}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Discuter sur WhatsApp
              <RxArrowTopRight />
            </a>
          </div>
        </motion.div>

        {/* Indicateur scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50 md:flex"
        >
          <span className="h-px w-10 bg-tma-gold" />
          Défilez pour explorer
        </motion.div>
      </div>
    </section>
  );
}
