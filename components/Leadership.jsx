"use client";

import React from "react";
import { motion } from "framer-motion";
import { CORPORATE } from "@/lib/brand";

/**
 * Section Leadership — cartes photo + nom + rôle + bio.
 * Utilisable sur /a-propos et /investisseurs.
 */
export function Leadership({ anchor = "leadership" }) {
  return (
    <section id={anchor} className="bg-white py-24 md:py-32">
      <div className="container-tma">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Leadership</span>
          <h2 className="heading-lg mt-4 text-tma-night">
            Des dirigeants <br />
            <span className="text-tma-electric">qui portent la vision.</span>
          </h2>
          <p className="mt-5 text-tma-ash">
            Une équipe de direction resserrée, expérimentée, engagée sur la durée.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {CORPORATE.leadership.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-tma-stone">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-tma-night/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="text-xs uppercase tracking-[0.18em] text-tma-electric-200">
                    {p.role}
                  </div>
                  <h3 className="mt-1 text-xl font-bold leading-tight">{p.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-tma-ash">{p.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
