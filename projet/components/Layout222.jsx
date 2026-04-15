"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout222() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Matériaux premium
                </h3>
                <p>
                  Nous sélectionnons les meilleurs matériaux disponibles pour
                  garantir durabilité.
                </p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Délais respectés
                </h3>
                <p>
                  Chaque projet est livré à temps, sans compromis sur la qualité
                  du travail.
                </p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Accompagnement total
                </h3>
                <p>
                  Notre équipe vous guide à chaque étape, du concept jusqu'à la
                  livraison finale.
                </p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Innovation technique
                </h3>
                <p>
                  Nous utilisons les technologies modernes pour optimiser chaque
                  aspect du projet.
                </p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
