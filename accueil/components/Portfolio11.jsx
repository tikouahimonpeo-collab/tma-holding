"use client";

import React from "react";
import { PROJECTS } from "@/lib/projects";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio11() {
  const featured = PROJECTS.slice(0, 6);
  return (
    <section id="realisations" className="px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container-tma">
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Réalisations</span>
            <h2 className="heading-lg mt-4 text-balance text-tma-night">
              Des projets qui inspirent. Des clients qui recommandent.
            </h2>
            <p className="lead mt-5">
              Une sélection de nos réalisations récentes à Abidjan et en
              banlieue. Chaque projet est une histoire de rigueur, de goût et
              de confiance.
            </p>
          </div>
          <a href="/realisations" className="btn-ghost flex-shrink-0">
            Toutes les réalisations <RxChevronRight size={18} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {featured.map((p, i) => (
            <a
              key={p.slug}
              href={`/projet#${p.slug}`}
              className={`group relative block overflow-hidden rounded-2xl bg-tma-night ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  i === 0 ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/5]"
                }`}
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tma-night via-tma-night/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <div className="mb-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3
                  className={`font-bold tracking-tight ${
                    i === 0 ? "text-2xl md:text-4xl" : "text-lg md:text-xl"
                  }`}
                >
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-white/70 md:text-sm">
                  {p.location} · {p.year}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-tma-electric-200 opacity-0 transition group-hover:opacity-100">
                  Voir le projet <RxChevronRight size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
