"use client";

import React from "react";
import { motion } from "framer-motion";
import { CORPORATE } from "@/lib/brand";

/**
 * Présence géographique — 4 pays d'Afrique de l'Ouest.
 * Affichage cards + mini map stylisée (SVG simple).
 */
export function PresenceMap() {
  return (
    <section className="relative isolate overflow-hidden bg-tma-night py-24 text-white md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(30,144,255,0.18),transparent_55%)]" />

      <div className="container-tma">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow-light">Présence régionale</span>
            <h2 className="heading-lg mt-4 text-white">
              4 pays. <br />
              <span className="text-tma-electric-200">Un seul standard d&apos;excellence.</span>
            </h2>
            <p className="mt-5 text-white/70">
              Implanté à Abidjan depuis 10 ans, le Groupe TMA déploie ses opérations
              à travers l&apos;Afrique de l&apos;Ouest avec un modèle éprouvé.
            </p>

            <div className="mt-10 grid gap-3">
              {CORPORATE.presence.map((p, i) => (
                <motion.div
                  key={p.country}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{p.flag}</span>
                    <div>
                      <div className="font-semibold text-white">{p.country}</div>
                      <div className="text-xs text-white/60">{p.city}</div>
                    </div>
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-tma-electric-200">
                    Depuis {p.since}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map stylisée — représentation schématique Afrique de l'Ouest */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
              <svg viewBox="0 0 400 300" className="h-full w-full">
                {/* Dots de fond (grille) */}
                <defs>
                  <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.7" fill="rgba(255,255,255,0.07)" />
                  </pattern>
                  <radialGradient id="glow">
                    <stop offset="0%" stopColor="#1E90FF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#1E90FF" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="400" height="300" fill="url(#dots)" />

                {/* 4 points pays */}
                {[
                  { x: 180, y: 200, label: "Abidjan", delay: 0 },
                  { x: 120, y: 140, label: "Dakar", delay: 0.3 },
                  { x: 200, y: 130, label: "Ouaga.", delay: 0.6 },
                  { x: 230, y: 210, label: "Accra", delay: 0.9 },
                ].map((p) => (
                  <g key={p.label}>
                    <circle cx={p.x} cy={p.y} r="28" fill="url(#glow)">
                      <animate
                        attributeName="r"
                        values="18;32;18"
                        dur="3s"
                        repeatCount="indefinite"
                        begin={`${p.delay}s`}
                      />
                    </circle>
                    <circle cx={p.x} cy={p.y} r="5" fill="#1E90FF" />
                    <text
                      x={p.x}
                      y={p.y - 14}
                      textAnchor="middle"
                      className="text-[10px] font-semibold"
                      fill="white"
                      style={{ fontFamily: "Inter", letterSpacing: "0.1em", textTransform: "uppercase" }}
                    >
                      {p.label}
                    </text>
                  </g>
                ))}

                {/* Lignes reliant les points à Abidjan */}
                <g stroke="rgba(30,144,255,0.35)" strokeWidth="1" strokeDasharray="3 3" fill="none">
                  <line x1="180" y1="200" x2="120" y2="140" />
                  <line x1="180" y1="200" x2="200" y2="130" />
                  <line x1="180" y1="200" x2="230" y2="210" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
