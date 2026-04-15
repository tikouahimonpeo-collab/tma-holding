"use client";

import React from "react";
import { motion } from "framer-motion";
import { BRAND, IMG } from "@/lib/brand";

export function Header() {
  return (
    <section className="relative isolate overflow-hidden bg-tma-night text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={IMG.equipe}
          alt="Équipe TMA Holding"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tma-night/90 via-tma-night/80 to-tma-night" />
      </div>

      <div className="container-tma py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="eyebrow-light">À propos · Depuis 2015</span>
          <h1 className="heading-xl mt-5 text-white text-balance">
            L&apos;excellence BTP,
            <span className="block text-tma-electric-200">construite à Abidjan.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {BRAND.name} est né d&apos;une conviction : la Côte d&apos;Ivoire mérite des constructions
            qui rivalisent avec les standards internationaux. Depuis 10 ans, nous livrons des projets
            exigeants — villas, immeubles, bureaux, rénovations — avec la même obsession pour la
            qualité, les délais et la relation client.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
