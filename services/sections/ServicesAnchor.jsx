"use client";

import React, { useEffect, useState } from "react";
import { SERVICES } from "../data/services";

/**
 * Barre d'ancres sticky — apparaît après le Hero.
 * Highlight automatique du service en cours via IntersectionObserver.
 */
export function ServicesAnchor() {
  const [active, setActive] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const ids = SERVICES.map((s) => s.slug);
    const observers = ids
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(id);
          },
          { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
        );
        obs.observe(el);
        return obs;
      })
      .filter(Boolean);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  if (!mounted) return null;

  return (
    <nav
      aria-label="Navigation des services"
      className="sticky top-[84px] z-30 hidden border-b border-tma-night/10 bg-white/95 backdrop-blur-md shadow-sm md:block"
    >
      <div className="container-tma">
        <ul className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
          {SERVICES.map((s) => (
            <li key={s.slug} className="flex-shrink-0">
              <a
                href={`#${s.slug}`}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active === s.slug
                    ? "bg-tma-night text-white"
                    : "text-tma-night/70 hover:bg-tma-stone hover:text-tma-night"
                }`}
              >
                <span
                  className={`text-[10px] font-bold tracking-[0.15em] ${
                    active === s.slug ? "text-tma-gold" : "text-tma-ash"
                  }`}
                >
                  {s.number}
                </span>
                {s.title}
              </a>
            </li>
          ))}
          <li className="ml-auto flex-shrink-0 pl-4">
            <a
              href="#cta-final"
              className="inline-flex items-center gap-2 rounded-full bg-tma-gold px-4 py-2 text-sm font-semibold text-tma-night transition hover:bg-tma-gold/90"
            >
              Devis gratuit →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
