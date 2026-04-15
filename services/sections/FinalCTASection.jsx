"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxArrowTopRight, RxMobile } from "react-icons/rx";
import { BRAND, WA, TEL } from "@/lib/brand";

/**
 * CTA final de la page Services — bloc conversion premium.
 */
export function FinalCTASection() {
  return (
    <section
      id="cta-final"
      className="relative overflow-hidden bg-tma-night py-24 text-white md:py-32"
    >
      {/* Gradient ambient */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-tma-gold/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-tma-electric/15 blur-[120px]"
      />

      <div className="container-tma relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow-light">Prochaine étape</span>

          <h2 className="heading-lg mt-6 text-white">
            Parlons de{" "}
            <span className="text-tma-gold">votre projet.</span>
          </h2>

          <p className="lead mt-6 text-white/75">
            Qu'il s'agisse d'une villa, d'une rénovation, d'un devis peinture ou
            d'une commande sur TMA Shop — un expert vous rappelle sous 24 h.
            Pas de frais cachés, pas de surprise. Juste de la qualité.
          </p>

          {/* 3 CTA principaux */}
          <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a href="/contact" className="btn-primary">
              Demander un devis gratuit
              <RxArrowTopRight />
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
            <a
              href={TEL}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white hover:text-tma-night"
            >
              <RxMobile />
              {BRAND.phone}
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/50">
            Réponse garantie en moins de 24 h ouvrées
          </p>
        </motion.div>
      </div>
    </section>
  );
}
