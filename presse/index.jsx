"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxArrowTopRight, RxDownload } from "react-icons/rx";
import { Navbar1 } from "../accueil/components/Navbar1";
import { Footer3 } from "../accueil/components/Footer3";
import { PressLogos } from "../components/PressLogos";
import { CORPORATE, IMG } from "../lib/brand";

function Header() {
  return (
    <section className="relative isolate overflow-hidden bg-tma-night pt-32 pb-20 text-white md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <img src={IMG.heroRealisations} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-tma-night/95 via-tma-night/85 to-tma-night" />
      </div>
      <div className="container-tma">
        <span className="eyebrow-light">Espace presse</span>
        <h1 className="heading-xl mt-6 max-w-4xl text-balance">
          Actualité, communiqués <br />
          <span className="text-tma-electric-200">et dossier de presse.</span>
        </h1>
        <p className="lead mt-6 max-w-2xl text-white/70">
          Retrouvez les dernières annonces officielles du groupe TMA Holding
          et téléchargez notre media kit à destination des rédactions.
        </p>
      </div>
    </section>
  );
}

function Releases() {
  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  };
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-tma">
        <span className="eyebrow">Communiqués de presse</span>
        <h2 className="heading-lg mt-4 max-w-3xl text-tma-night">
          Les annonces <span className="text-tma-electric">officielles</span> du groupe.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CORPORATE.press.releases.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col justify-between rounded-2xl border border-tma-night/10 bg-white p-8 transition hover:-translate-y-1 hover:border-tma-electric hover:shadow-premium"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-tma-electric">
                  {formatDate(r.date)}
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-tma-night">{r.title}</h3>
                <p className="mt-3 text-sm text-tma-ash">{r.excerpt}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tma-night transition group-hover:text-tma-electric">
                Lire le communiqué
                <RxArrowTopRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MediaKit() {
  const assets = [
    { title: "Logo TMA Holding", detail: "SVG + PNG, fond clair & sombre", size: "1,2 Mo" },
    { title: "Charte graphique", detail: "Palette, typographie, règles d'usage", size: "3,4 Mo" },
    { title: "Photos dirigeants", detail: "Portraits haute définition", size: "8,6 Mo" },
    { title: "Visuels projets phares", detail: "15 réalisations emblématiques", size: "24,5 Mo" },
  ];
  return (
    <section className="bg-tma-stone py-20 md:py-28">
      <div className="container-tma">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Media Kit</span>
            <h2 className="heading-lg mt-4 text-tma-night">
              Un dossier de presse <br />
              <span className="text-tma-electric">complet et à jour.</span>
            </h2>
            <p className="mt-5 text-tma-ash">
              Tous nos assets officiels en un seul téléchargement : logos, photos
              dirigeants, visuels de chantiers, fiches institutionnelles.
            </p>
            <a
              href={CORPORATE.press.mediaKit}
              className="btn-primary mt-8 inline-flex"
            >
              Télécharger le media kit
              <RxDownload />
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="divide-y divide-tma-night/10 rounded-2xl border border-tma-night/10 bg-white">
              {assets.map((a) => (
                <div key={a.title} className="flex items-center justify-between px-6 py-5">
                  <div>
                    <div className="font-semibold text-tma-night">{a.title}</div>
                    <div className="text-xs text-tma-ash">{a.detail}</div>
                  </div>
                  <div className="text-xs text-tma-ash">{a.size}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PressContact() {
  return (
    <section className="bg-tma-night py-20 text-white md:py-28">
      <div className="container-tma">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow-light">Contact presse</span>
            <h2 className="heading-lg mt-4 text-white">
              Une interview, une sollicitation média ?
            </h2>
            <p className="mt-5 max-w-xl text-white/70">
              Nous répondons aux journalistes et rédactions sous 24 h ouvrées.
              Précisez le sujet, votre média et votre deadline.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.2em] text-tma-electric-200">
                Relations presse
              </div>
              <div className="mt-3 text-xl font-bold">{CORPORATE.press.contactName}</div>
              <a
                href={`mailto:${CORPORATE.press.contactEmail}`}
                className="mt-2 block text-tma-electric-200 hover:text-white"
              >
                {CORPORATE.press.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div>
      <Navbar1 />
      <Header />
      <PressLogos />
      <Releases />
      <MediaKit />
      <PressContact />
      <Footer3 />
    </div>
  );
}
