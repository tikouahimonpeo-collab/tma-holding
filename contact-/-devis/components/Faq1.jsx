"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { WA } from "@/lib/brand";

const FAQS = [
  {
    q: "Quels sont vos délais de construction ?",
    a: "Une villa standard est livrée en 4 à 6 mois. Un immeuble R+3 en 10 à 14 mois. Une rénovation complète en 2 à 3 mois. Nous vous remettons un calendrier détaillé avec pénalités contractuelles en cas de retard — c'est notre engagement écrit.",
  },
  {
    q: "Acceptez-vous les paiements échelonnés ?",
    a: "Oui. Notre structure standard : 30 % à la signature du contrat, 40 % pendant les travaux (par tranches validées sur site), 30 % à la livraison après votre inspection. Pour les gros projets (> 500 M FCFA) nous adaptons le calendrier. Aucun paiement cash non tracé, tout est facturé.",
  },
  {
    q: "Je suis en diaspora, comment puis-je suivre mon chantier ?",
    a: "Vous recevez chaque semaine un rapport photo + vidéo HD de votre chantier, une visioconférence mensuelle avec votre chef de projet, et un accès à un drive partagé avec toutes les factures matériaux. 40 % de nos clients sont diaspora — c'est notre spécialité.",
  },
  {
    q: "Livrez-vous les matériaux TMA Shop ?",
    a: "Oui, partout à Abidjan et en banlieue en 24 à 48 h. Commandez directement sur WhatsApp, nous confirmons prix et date, livraison et déchargement assuré. Livraison offerte dès 500 000 FCFA d'achat.",
  },
  {
    q: "Quelles garanties offrez-vous ?",
    a: "Garantie décennale complète sur la structure (gros œuvre, étanchéité, toiture), garantie 2 ans sur les revêtements et finitions, garantie 1 an sur la robinetterie et l'électricité. Tout est écrit dans votre contrat — pas de promesses orales.",
  },
  {
    q: "Travaillez-vous avec des petits budgets ?",
    a: "Oui. Nous construisons à partir de 35 M FCFA pour une petite maison de 80 m². Aucun projet n'est trop petit s'il est sérieux. Nous sommes transparents sur ce qui est réalisable avec votre budget — pas de mauvaise surprise en cours de route.",
  },
  {
    q: "Proposez-vous la conception architecturale ?",
    a: "Oui. Notre bureau d'études intégré réalise plans 2D, rendus 3D photoréalistes, permis de construire et dossier technique complet. Vous visualisez votre projet avant de poser la première pierre.",
  },
];

export function Faq1() {
  return (
    <section id="faq" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-tma">
        <div className="mb-12 grid gap-10 md:mb-16 md:grid-cols-2 md:gap-16">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="heading-lg mt-4 text-balance text-tma-night">
              Les questions que vous vous posez. Les réponses directes.
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="lead">
              Pas de détours, pas de flou. Voici ce que nos clients demandent le
              plus souvent avant de nous confier leur projet.
            </p>
          </div>
        </div>

        <Accordion type="multiple" className="mx-auto grid max-w-4xl gap-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-tma-night/10 bg-white px-6 shadow-sm transition hover:border-tma-electric/40"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-tma-night md:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-tma-ash md:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mx-auto mt-14 flex max-w-4xl flex-col items-center gap-4 rounded-2xl bg-tma-night p-8 text-center text-white md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="text-xl font-bold">Votre question n'est pas ici ?</h3>
            <p className="mt-1 text-sm text-white/70">
              Notre équipe répond en moins d'une heure en journée sur WhatsApp.
            </p>
          </div>
          <a
            href={WA.general}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp flex-shrink-0"
          >
            Poser ma question
          </a>
        </div>
      </div>
    </section>
  );
}
