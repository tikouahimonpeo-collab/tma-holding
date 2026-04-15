"use client";

import React from "react";

export function Stats38() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Nous avons transformé des centaines de projets en réalités
              concrètes
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Depuis des années, TMA Holding construit la confiance par
              l'excellence et la fiabilité. Chaque projet est une promesse
              tenue, chaque client une relation durable.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="border border-border-primary p-8">
            <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">
              Projets réalisés
            </h3>
            <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              500+
            </p>
            <div className="my-4 h-px w-full bg-border-primary" />
            <p className="text-right">
              Constructions, rénovations et revêtements livrés avec qualité
            </p>
          </div>
          <div className="border border-border-primary p-8">
            <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">
              Taux de satisfaction
            </h3>
            <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              98%
            </p>
            <div className="my-4 h-px w-full bg-border-primary" />
            <p className="text-right">
              Clients satisfaits qui nous recommandent et reviennent
            </p>
          </div>
          <div className="border border-border-primary p-8">
            <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">
              Années d'expérience
            </h3>
            <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              15+
            </p>
            <div className="my-4 h-px w-full bg-border-primary" />
            <p className="text-right">
              D'expertise dans le BTP et la rénovation haut de gamme
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
