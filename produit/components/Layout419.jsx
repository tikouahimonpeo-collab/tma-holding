"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout419() {
  return (
    <section id="relume" className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:ml-[5vw] md:mr-12 lg:mr-20">
                <p className="mb-3 font-semibold md:mb-4">Avantages</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Pourquoi choisir le ciment TMA Holding
                </h2>
                <p className="md:text-md">
                  Nous livrons rapidement, sans compromis sur la qualité, avec
                  des prix qui respectent votre budget
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Commander maintenant" variant="secondary">
                    Commander maintenant
                  </Button>
                  <Button
                    title="Demander devis"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Demander devis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Qualité certifiée
              </h3>
              <p>
                Normes internationales respectées. Composition optimale pour
                résistance maximale et durabilité exceptionnelle sur tous types
                de projets.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Qualité certifiée
              </h3>
              <p>
                Normes internationales respectées. Composition optimale pour
                résistance maximale et durabilité exceptionnelle sur tous types
                de projets.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Qualité certifiée
              </h3>
              <p>
                Normes internationales respectées. Composition optimale pour
                résistance maximale et durabilité exceptionnelle sur tous types
                de projets.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 4"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Qualité certifiée
              </h3>
              <p>
                Normes internationales respectées. Composition optimale pour
                résistance maximale et durabilité exceptionnelle sur tous types
                de projets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
