"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxCheck, RxArrowTopRight } from "react-icons/rx";
import { IMG, waLink } from "@/lib/brand";

const SERVICES = [
  {
    slug: "construction",
    eyebrow: "Génie civil & gros œuvre",
    title: "Construction neuve",
    subtitle: "De la villa premium à l'immeuble R+15.",
    img: IMG.construction,
    accent: "#1E90FF",
    bullets: [
      "Villas haut de gamme (300 à 1 500 m²)",
      "Immeubles résidentiels R+5 à R+15",
      "Bâtiments commerciaux & industriels",
      "Infrastructures publiques (écoles, centres de santé)",
    ],
    specs: [
      { k: "420", v: "Projets livrés" },
      { k: "48", v: "Mois délai moyen tour R+10" },
      { k: "10 ans", v: "Garantie décennale" },
    ],
  },
  {
    slug: "renovation",
    eyebrow: "Rénovation & réhabilitation",
    title: "Rénovation & revêtement",
    subtitle: "Transformer l'existant avec des matériaux nobles.",
    img: IMG.renovation,
    accent: "#D4A84B",
    bullets: [
      "Marbre italien, granit, carrelage technique",
      "Sourcing direct Europe / Moyen-Orient / Asie",
      "Rénovation complète clé en main",
      "Restauration patrimoine & bâtiments anciens",
    ],
    specs: [
      { k: "180", v: "Chantiers de rénovation" },
      { k: "2 500+", v: "Références matériaux" },
      { k: "48 h", v: "Devis chiffré" },
    ],
  },
  {
    slug: "conception",
    eyebrow: "Architecture & ingénierie",
    title: "Conception architecturale",
    subtitle: "Un studio intégré, du concept au permis.",
    img: IMG.conception,
    accent: "#7DBEFF",
    bullets: [
      "Études de faisabilité & programmation",
      "Permis de construire clé en main",
      "Plans 3D, maquettes BIM, visites virtuelles",
      "Bureau d'études structure & fluides intégré",
    ],
    specs: [
      { k: "12", v: "Architectes DPLG" },
      { k: "100 %", v: "Permis obtenus" },
      { k: "3D", v: "BIM niveau 2" },
    ],
  },
  {
    slug: "shop",
    eyebrow: "Distribution matériaux BTP",
    title: "TMA Shop",
    subtitle: "Plateforme B2B & B2C — livraison 24–48 h.",
    img: IMG.ciment,
    accent: "#25D366",
    bullets: [
      "Ciment, fer à béton, agrégats, peintures",
      "Catalogue de 2 500+ références",
      "Livraison 24-48 h sur Abidjan et région",
      "Tarifs pros dégressifs pour grands comptes",
    ],
    specs: [
      { k: "2 500+", v: "Références en stock" },
      { k: "24–48 h", v: "Livraison" },
      { k: "B2B / B2C", v: "Canaux disponibles" },
    ],
  },
];

export function ServiceBlocks() {
  return (
    <section className="bg-white">
      {SERVICES.map((s, idx) => (
        <div
          key={s.slug}
          id={s.slug}
          className={`${idx % 2 === 0 ? "bg-white" : "bg-tma-stone/60"} py-20 md:py-28`}
        >
          <div className="container-tma">
            <div
              className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                idx % 2 === 1 ? "lg:[&>div:first-child]:order-last" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-premium">
                  <img src={s.img} alt={s.title} className="aspect-[4/3] w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-tma-night/70 via-tma-night/10 to-transparent p-6">
                    <div
                      className="inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white"
                      style={{ backgroundColor: s.accent }}
                    >
                      {String(idx + 1).padStart(2, "0")} / 04
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {s.specs.map((x) => (
                    <div
                      key={x.v}
                      className="rounded-xl border border-tma-night/10 bg-white p-3 text-center"
                    >
                      <div className="text-lg font-extrabold text-tma-night">{x.k}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-tma-ash">
                        {x.v}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div
                  className="text-xs font-bold uppercase tracking-[0.22em]"
                  style={{ color: s.accent }}
                >
                  {s.eyebrow}
                </div>
                <h2 className="heading-lg mt-4 text-tma-night">{s.title}</h2>
                <p className="mt-3 text-xl font-medium text-tma-ash">{s.subtitle}</p>

                <ul className="mt-8 grid gap-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-tma-night">
                      <span
                        className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: s.accent }}
                      >
                        <RxCheck className="h-4 w-4" />
                      </span>
                      <span className="text-base leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={waLink(
                      `Bonjour TMA Holding, je suis intéressé par votre service "${s.title}". Voici mon projet :`
                    )}
                    className="btn-whatsapp"
                  >
                    Demander un devis
                    <RxArrowTopRight />
                  </a>
                  <a href="/realisations" className="btn-ghost">
                    Voir des réalisations
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
