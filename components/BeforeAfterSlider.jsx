"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IMG } from "@/lib/brand";

/**
 * Slider avant/après interactif (drag + touch).
 * - Double image superposée, clip-path piloté par position du curseur
 * - Drag à la souris, swipe tactile, clavier (flèches)
 * - Accessible : role slider, aria values
 *
 * Props :
 *   before  : URL image "avant"
 *   after   : URL image "après"
 *   alt     : libellé accessibilité
 *   labelBefore / labelAfter : chips affichés
 */
export function BeforeAfter({
  before,
  after,
  alt = "Avant / après chantier TMA Holding",
  labelBefore = "Avant",
  labelAfter = "Après",
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState(50); // 0..100
  const dragging = useRef(false);

  const update = useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - r.left, 0), r.width);
    setPos((x / r.width) * 100);
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    update(e.clientX ?? e.touches?.[0]?.clientX ?? 0);
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    update(e.clientX ?? e.touches?.[0]?.clientX ?? 0);
  };
  const onUp = () => {
    dragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  const onKey = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 2));
  };

  return (
    <div
      ref={ref}
      onMouseDown={onDown}
      onTouchStart={onDown}
      onKeyDown={onKey}
      role="slider"
      aria-label={alt}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      className="group relative h-[420px] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl shadow-premium focus:outline-none focus:ring-4 focus:ring-tma-electric/40 md:h-[560px]"
    >
      {/* After (base) */}
      <img src={after} alt="" className="absolute inset-0 h-full w-full object-cover" draggable={false} />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={before} alt="" className="h-full w-full object-cover" draggable={false} />
      </div>

      {/* Chips labels */}
      <span className="absolute left-4 top-4 rounded-full bg-tma-night/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
        {labelBefore}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-tma-electric px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white shadow-glow">
        {labelAfter}
      </span>

      {/* Handle */}
      <div
        className="absolute top-0 h-full w-0.5 bg-white/90 transition-[left] duration-75"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M8 7l-4 5 4 5M16 7l4 5-4 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * Section complète avant/après pour une page (homepage ou réalisations).
 * Affiche 3 exemples dans un carrousel horizontal scrollable.
 */
const DEFAULT_ITEMS = [
  {
    before: IMG.chantier,
    after: IMG.villa,
    title: "Villa Cocody — construction neuve",
    meta: "5 mois · 420 m² · Budget respecté",
  },
  {
    before: IMG.renovation,
    after: IMG.interieur,
    title: "Rénovation Palmeraie",
    meta: "2,5 mois · 320 m² · 4 salles de bain italiennes",
  },
  {
    before: IMG.revetement,
    after: IMG.marbre,
    title: "Revêtement marbre Bingerville",
    meta: "6 semaines · 280 m² · Marbre italien Calacatta",
  },
];

export function BeforeAfterSection({ items = DEFAULT_ITEMS }) {
  const [idx, setIdx] = useState(0);
  const current = items[idx];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-tma">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">Transformations</span>
            <h2 className="heading-lg mt-4 text-tma-night">
              Avant / après. <br />
              <span className="text-tma-electric">Glissez pour voir la différence.</span>
            </h2>
            <p className="mt-4 text-tma-ash">
              Chaque chantier raconte une histoire. Glissez le curseur pour découvrir le
              travail accompli par nos équipes.
            </p>
          </div>

          <div className="flex gap-2">
            {items.map((it, i) => (
              <button
                key={it.title}
                onClick={() => setIdx(i)}
                aria-label={`Voir ${it.title}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === idx ? "w-10 bg-tma-electric" : "w-2.5 bg-tma-night/15 hover:bg-tma-night/30"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <BeforeAfter before={current.before} after={current.after} alt={current.title} />
          <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-bold text-tma-night">{current.title}</div>
              <div className="text-sm text-tma-ash">{current.meta}</div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
                className="btn-ghost !px-4 !py-2.5 !text-sm"
                aria-label="Précédent"
              >
                ← Précédent
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % items.length)}
                className="btn-dark !px-4 !py-2.5 !text-sm"
                aria-label="Suivant"
              >
                Suivant →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
