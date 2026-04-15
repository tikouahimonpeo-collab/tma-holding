"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio11() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Projets réalisés avec excellence
          </h2>
          <p className="md:text-md">
            Chaque construction raconte une histoire de qualité et de
            savoir-faire
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Villa Cocody prestige</a>
            </h3>
            <p>
              Construction complète d'une villa haut de gamme avec finitions
              premium
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Construction
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Luxe
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Abidjan
                </a>
              </li>
            </ul>
            <Button
              title="Voir détails"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">Voir détails</a>
            </Button>
          </article>
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Immeuble résidentiel Riviera</a>
            </h3>
            <p>
              Édifice de 8 étages avec appartements modernes et services haut de
              gamme
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Construction
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Résidentiel
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Immeuble
                </a>
              </li>
            </ul>
            <Button
              title="Voir détails"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">Voir détails</a>
            </Button>
          </article>
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Rénovation intérieure Palmeraie</a>
            </h3>
            <p>
              Transformation complète avec peinture airless, cuisine et salle de
              bain premium
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Rénovation
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Intérieur
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Premium
                </a>
              </li>
            </ul>
            <Button
              title="Voir détails"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">Voir détails</a>
            </Button>
          </article>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button title="Tous les projets" variant="secondary" size="primary">
            Tous les projets
          </Button>
        </div>
      </div>
    </section>
  );
}
