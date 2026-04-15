"use client";

import React from "react";
import { CORPORATE } from "@/lib/brand";

/**
 * Bandeau "Ils parlent de nous" — logos médias (texte stylisé).
 * Remplacer par vrais SVG/PNG logos dans /public/press/logos/*.
 */
export function PressLogos() {
  return (
    <section className="border-y border-tma-night/8 bg-white py-12">
      <div className="container-tma">
        <div className="text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-tma-ash">
            Ils parlent de TMA Holding
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
          {CORPORATE.pressLogos.map((logo) => (
            <span
              key={logo}
              className="text-base font-extrabold uppercase tracking-[0.18em] text-tma-night/40 transition-colors hover:text-tma-night md:text-lg"
              style={{ fontFamily: "'Inter', serif" }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
