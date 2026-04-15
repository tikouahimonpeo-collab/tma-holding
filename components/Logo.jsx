"use client";

import React from "react";

/**
 * Logo TMA Holding.
 * - Affiche /logo-tma.png si disponible (raster fidèle fourni par le client).
 * - Fallback sur /logo-tma.svg (version vectorielle stylisée).
 * - Props :
 *    size      : hauteur en px de la marque (par défaut 40)
 *    withText  : true → affiche "TMA Holding" + tagline à droite
 *    onDark    : true → texte en blanc (pour footer / fond sombre)
 */
export function Logo({ size = 40, withText = true, onDark = false, className = "" }) {
  // SVG stylisé par défaut. Pour utiliser un PNG fourni, dépose-le dans /public/logo-tma.png
  // puis remplace /logo-tma.svg ci-dessous par /logo-tma.png.
  return (
    <a href="/" className={`flex items-center gap-3 ${className}`} aria-label="TMA Holding — Accueil">
      <img
        src="/logo-tma.svg"
        alt="TMA Holding"
        style={{ height: size, width: size }}
        className="flex-shrink-0 object-contain"
      />
      {withText && (
        <span className="flex flex-col leading-none">
          <span
            className={`text-lg font-extrabold tracking-tight md:text-xl ${
              onDark ? "text-white" : "text-tma-night"
            }`}
          >
            TMA <span className="text-tma-electric">Holding</span>
          </span>
          <span
            className={`hidden text-[10px] font-medium uppercase tracking-[0.18em] md:block ${
              onDark ? "text-white/60" : "text-tma-ash"
            }`}
          >
            Génie civil · Services
          </span>
        </span>
      )}
    </a>
  );
}
