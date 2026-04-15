"use client";

import React from "react";
import { motion } from "framer-motion";
import { IMG } from "@/lib/brand";

export function ServicesHeader() {
  return (
    <section className="relative isolate overflow-hidden bg-tma-night pt-32 pb-20 text-white md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <img src={IMG.heroServices} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-tma-night/90 via-tma-night/80 to-tma-night" />
      </div>
      <div className="container-tma">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow-light">Nos activités</span>
          <h1 className="heading-xl mt-6 max-w-4xl text-balance">
            4 métiers. <br />
            <span className="text-tma-electric-200">Une exécution sans compromis.</span>
          </h1>
          <p className="lead mt-6 max-w-2xl text-white/70">
            De la conception architecturale au gros œuvre, de la finition haut de gamme
            à la distribution de matériaux : TMA Holding couvre l&apos;intégralité de la chaîne BTP.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
