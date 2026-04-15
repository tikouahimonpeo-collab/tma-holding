"use client";

import React from "react";
import { BRAND, WA, TEL, IMG } from "@/lib/brand";
import { RxChevronRight } from "react-icons/rx";

export function Layout141() {
  return (
    <section id="whatsapp" className="px-[5%] py-20 md:py-28">
      <div className="container-tma">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0e4d2f] via-[#128C7E] to-[#25D366] p-1">
          <div className="grid items-center gap-0 rounded-[22px] bg-tma-night text-white md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#25D366]">
                <svg viewBox="0 0 32 32" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M19.1 17.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5 3.5 1.4 3.5.9 4.2.9.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3z" />
                </svg>
                Contact direct
              </span>
              <h2 className="heading-md mt-5 text-balance text-white">
                Parlez à notre équipe sur WhatsApp.
                <span className="block text-tma-electric-200">
                  Une réponse réelle en moins de 60 min.
                </span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
                Pas de formulaire interminable. Pas de robot. Un humain à
                Abidjan qui connaît nos chantiers, nos prix et nos délais.
                Envoyez-nous un message — photo, vidéo, document, tout passe.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WA.general}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  Écrire sur WhatsApp
                  <RxChevronRight size={18} />
                </a>
                <a href={TEL} className="btn-ghost border-white/20 bg-white/5 text-white hover:bg-white hover:text-tma-night">
                  {BRAND.phone}
                </a>
              </div>
              <div className="mt-6 text-xs text-white/50">
                {BRAND.hours}
              </div>
            </div>
            <div className="relative h-64 overflow-hidden md:h-full md:min-h-[420px]">
              <img
                src={IMG.equipe}
                alt="Équipe TMA Holding"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-tma-night/80 via-transparent to-transparent" />
              {/* Message bubble mockup */}
              <div className="absolute bottom-6 right-6 max-w-[240px] rounded-2xl bg-white/95 p-4 text-xs shadow-premium backdrop-blur md:bottom-10 md:right-10">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#25D366]" />
                  <span className="font-bold text-tma-night">TMA Holding</span>
                </div>
                <p className="mt-2 text-tma-night/80">
                  Bonjour ! Merci de votre message, je vous réponds dans l'heure avec une première estimation 👷‍♂️
                </p>
                <p className="mt-1 text-[10px] text-tma-ash">en ligne maintenant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
