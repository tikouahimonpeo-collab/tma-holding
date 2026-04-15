"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { WA } from "@/lib/brand";
import { RxChevronRight } from "react-icons/rx";

const FILTERS = [
  { id: "all", label: "Tous" },
  { id: "ciment", label: "Ciment & Béton" },
  { id: "carrelage", label: "Carrelage & Marbre" },
  { id: "sanitaire", label: "Sanitaire" },
  { id: "cuisine", label: "Cuisine & Alu" },
  { id: "peinture", label: "Peinture" },
];

export function Product10() {
  const [active, setActive] = useState("all");
  const list = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="produits" className="px-[5%] py-20 md:py-28">
      <div className="container-tma">
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Catalogue 2026</span>
            <h2 className="heading-lg mt-4 text-balance text-tma-night">
              Produits BTP sélectionnés à la source.
            </h2>
            <p className="lead mt-5">
              Ciment certifié, sable lavé de lagune, carrelage italien, marbre
              Calacatta, robinetterie premium. Prix direct usine.
            </p>
          </div>
        </div>

        {/* Filtres */}
        <div className="no-scrollbar mb-10 flex gap-2 overflow-x-auto pb-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold transition ${
                active === f.id
                  ? "border-tma-electric bg-tma-electric text-white shadow-premium"
                  : "border-tma-night/15 bg-white text-tma-night hover:border-tma-electric hover:text-tma-electric"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grille produits */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article
              key={p.slug}
              id={p.category}
              className="group flex flex-col overflow-hidden rounded-2xl border border-tma-night/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-tma-electric hover:shadow-premium"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {p.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-tma-night px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-tma-night">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-tma-ash">
                  {p.short}
                </p>

                <div className="mt-5 flex items-end justify-between border-t border-tma-night/8 pt-5">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-tma-ash">{p.unit}</div>
                    <div className="text-2xl font-extrabold text-tma-night">{p.priceLabel}</div>
                  </div>
                  <a
                    href={WA.commande(p.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp !px-4 !py-2.5 !text-xs"
                  >
                    Commander
                    <RxChevronRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-tma-night/15 bg-tma-stone/40 p-8 text-center">
          <h3 className="text-lg font-bold text-tma-night">
            Vous ne trouvez pas un produit ?
          </h3>
          <p className="mt-2 text-sm text-tma-ash">
            Notre équipe sourcing peut importer sur commande. Décrivez-nous ce qu'il vous faut sur WhatsApp.
          </p>
          <a href={WA.catalogue} target="_blank" rel="noreferrer" className="btn-primary mt-5">
            Faire une demande spéciale
          </a>
        </div>
      </div>
    </section>
  );
}
