"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout367() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Avantages</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Pourquoi choisir TMA Shop
            </h2>
            <p className="md:text-md">
              Nous simplifions votre approvisionnement BTP avec qualité,
              rapidité et transparence.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      className="size-12"
                      alt="Relume logo 1"
                    />
                  </div>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Devis instantané
                  </h3>
                  <p>
                    Décrivez votre projet sur WhatsApp. Nous vous proposons un
                    devis détaillé en moins de 2 heures sans engagement.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Demander</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Détails
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      className="size-12"
                      alt="Relume logo 2"
                    />
                  </div>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Devis instantané
                  </h3>
                  <p>
                    Décrivez votre projet sur WhatsApp. Nous vous proposons un
                    devis détaillé en moins de 2 heures sans engagement.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Demander</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Détails
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary md:col-span-2 md:row-span-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 text-sm font-semibold">Premium</p>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Service client WhatsApp 7j/7
                  </h3>
                  <p>
                    Conseil expert, suivi de commande, assistance technique.
                    Nous répondons en moins d'une heure à toute question.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Contacter" variant="secondary">
                    Contacter
                  </Button>
                  <Button
                    title="Détails"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Détails
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
