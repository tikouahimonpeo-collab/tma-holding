"use client";

import React from "react";
import { WA, IMG, COPY } from "@/lib/brand";

export function Cta53() {
  return (
    <section id="cta" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-tma">
        <div className="relative overflow-hidden rounded-3xl shadow-premium">
          <img
            src={IMG.chantier}
            alt="Chantier TMA Holding Abidjan"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
          <div className="relative flex flex-col items-start gap-6 p-10 md:p-16 lg:p-24">
            <span className="eyebrow-light">Passez à l'action</span>
            <h2 className="heading-lg max-w-3xl text-balance text-white">
              Obtenez votre devis en 24 h, gratuit et sans engagement.
            </h2>
            <p className="max-w-2xl text-base text-white/80 md:text-lg">
              Réponse rapide. Estimation honnête. {COPY.leadFreeZone}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary">
                {COPY.ctaDevisLong}
              </a>
              <a
                href={WA.devis}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
                  <path d="M19.1 17.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5 3.5 1.4 3.5.9 4.2.9.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3z" />
                </svg>
                WhatsApp direct
              </a>
            </div>
            <p className="mt-2 text-sm text-white/70">
              {COPY.promiseHeader}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
