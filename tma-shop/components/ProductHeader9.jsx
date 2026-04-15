"use client";

import React from "react";
import { IMG, WA, COPY } from "@/lib/brand";
import { RxChevronRight } from "react-icons/rx";

const CATEGORIES = [
  { id: "ciment", label: "Ciment & Béton" },
  { id: "carrelage", label: "Carrelage & Marbre" },
  { id: "sanitaire", label: "Sanitaire" },
  { id: "cuisine", label: "Cuisine & Alu" },
  { id: "peinture", label: "Peinture" },
];

export function ProductHeader9() {
  return (
    <section
      id="shop-hero"
      className="relative isolate overflow-hidden bg-tma-night text-white"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={IMG.heroShop}
          alt="TMA Shop — matériaux BTP Abidjan"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tma-night via-tma-night/90 to-tma-night/40" />
      </div>

      <div className="container-tma py-20 md:py-28 lg:py-36">
        <div className="flex items-center gap-2 text-xs text-white/60">
          <a href="/" className="transition hover:text-white">Accueil</a>
          <RxChevronRight size={14} />
          <span className="text-white">TMA Shop</span>
        </div>

        <div className="mt-6 grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-tma-electric" />
              Catalogue en direct · Livraison 24 h
            </span>
            <h1 className="heading-xl mt-5 text-balance">
              Tout le BTP.
              <span className="block text-tma-electric-200">Direct usine. Sans intermédiaire.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-white/75 md:text-lg">
              Ciment, sable, gravier, carrelage, marbre italien, sanitaire,
              menuiserie alu, peinture airless. Prix transparents, livraison
              rapide Abidjan et banlieue, paiement sur site ou WhatsApp Pay.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WA.catalogue}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp !px-7 !py-4"
              >
                Demander le catalogue
                <RxChevronRight size={18} />
              </a>
              <a href="#produits" className="btn-ghost border-white/20 bg-white/5 text-white !px-7 !py-4 hover:bg-white hover:text-tma-night">
                Voir les produits
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {CATEGORIES.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-tma-electric hover:bg-tma-electric hover:text-white"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur md:p-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-tma-gold">
                Offre de lancement · Avril 2026
              </div>
              <h3 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
                -10 % sur votre 1ʳᵉ commande
              </h3>
              <p className="mt-3 text-sm text-white/70">
                Code <span className="font-mono font-bold text-tma-electric-200">TMA10</span> à mentionner lors de la prise de commande WhatsApp. Livraison offerte dès 500 000 FCFA.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
                <div>
                  <div className="text-xl font-bold text-white">24 h</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/60">Livraison</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">500+</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/60">Références</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">4.8★</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/60">247 avis</div>
                </div>
              </div>
              <p className="mt-6 text-xs text-white/50">{COPY.guarantee}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
