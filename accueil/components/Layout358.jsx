"use client";

import React from "react";
import { PRODUCTS } from "@/lib/products";
import { WA, COPY } from "@/lib/brand";
import { RxChevronRight } from "react-icons/rx";

export function Layout358() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <section id="tma-shop" className="bg-tma-night px-[5%] py-20 text-white md:py-28">
      <div className="container-tma">
        <div className="mb-14 grid gap-8 md:mb-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="eyebrow-light">TMA Shop</span>
            <h2 className="heading-lg mt-4 text-balance text-white">
              Tout le matériau BTP. Direct usine. Livré en 24 h.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-base leading-relaxed text-white/70">
              Ciment, sable, gravier, carrelage, marbre, sanitaire, menuiserie
              alu et peinture airless. Commandez par WhatsApp, payez sur site,
              livraison assurée partout à Abidjan.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-2xl bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {p.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-tma-electric px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-white">{p.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/60">
                  {p.short}
                </p>
                <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/50">
                      {p.unit}
                    </div>
                    <div className="text-xl font-extrabold text-tma-electric-200">
                      {p.priceLabel}
                    </div>
                  </div>
                  <a
                    href={WA.commande(p.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-tma-electric text-white transition hover:scale-110"
                    aria-label={`Commander ${p.name} sur WhatsApp`}
                  >
                    <RxChevronRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href="/boutique" className="btn-primary">
            {COPY.ctaCatalogue}
            <RxChevronRight size={18} />
          </a>
          <a
            href={WA.catalogue}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            Catalogue WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
