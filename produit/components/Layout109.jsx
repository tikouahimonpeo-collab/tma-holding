"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout109() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Assistance</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              Besoin d'aide immédiate
            </h3>
          </div>
          <div>
            <p className="mb-5 md:mb-6 md:text-md">
              Nos experts sont disponibles sur WhatsApp pour répondre à vos
              questions et finaliser votre commande en quelques minutes
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Réponse en moins de 5 minutes</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Conseils techniques gratuits</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Commande simple et sécurisée</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Contacter maintenant" variant="secondary">
                Contacter maintenant
              </Button>
              <Button
                title="WhatsApp"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
