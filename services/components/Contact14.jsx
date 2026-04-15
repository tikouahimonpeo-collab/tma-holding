"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { BRAND, IMG, WA, TEL, MAILTO } from "@/lib/brand";

const BLOCKS = [
  {
    icon: BiEnvelope,
    label: "Email",
    value: BRAND.email,
    sub: "Réponse sous 24 h",
    href: MAILTO,
  },
  {
    icon: BiPhone,
    label: "Téléphone & WhatsApp",
    value: BRAND.phone,
    sub: "Lun – Sam · 08h – 19h",
    href: WA.general,
  },
  {
    icon: BiMap,
    label: "Bureau",
    value: BRAND.address.full,
    sub: "Accueil sur rendez-vous",
    href: "https://maps.google.com/?q=Cocody+Riviera+Palmeraie+Abidjan",
  },
];

export function Contact14() {
  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-tma">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="heading-lg mt-4 text-balance text-tma-night">
              Parlons de votre projet.
            </h2>
            <p className="lead mt-5 max-w-xl">
              Nous sommes basés à Cocody, disponibles 6 jours sur 7. Un projet
              en tête ? Une question ? Choisissez le canal qui vous convient —
              nous répondons toujours.
            </p>

            <div className="mt-10 grid gap-4">
              {BLOCKS.map(({ icon: Icon, label, value, sub, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-start gap-5 rounded-2xl border border-tma-night/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-tma-electric hover:shadow-premium"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-tma-night/5 text-tma-electric transition group-hover:bg-tma-electric group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <div className="flex-1">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-tma-ash">
                      {label}
                    </div>
                    <div className="mt-1 text-base font-semibold text-tma-night">
                      {value}
                    </div>
                    <div className="mt-0.5 text-sm text-tma-ash">{sub}</div>
                  </div>
                  <RxChevronRight className="mt-3 text-tma-ash transition group-hover:translate-x-1 group-hover:text-tma-electric" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-tma-night/8 shadow-premium">
            <img
              src={IMG.map}
              alt="Localisation TMA Holding — Cocody Riviera Palmeraie, Abidjan"
              className="aspect-square w-full object-cover md:aspect-[4/5]"
            />
            <a
              href="https://maps.google.com/?q=Cocody+Riviera+Palmeraie+Abidjan"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-tma-night shadow-premium transition hover:bg-tma-electric hover:text-white"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
