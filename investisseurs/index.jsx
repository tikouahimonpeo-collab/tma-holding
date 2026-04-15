"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxDownload, RxArrowTopRight } from "react-icons/rx";
import { Navbar1 } from "../accueil/components/Navbar1";
import { Footer3 } from "../accueil/components/Footer3";
import { CorporateStats } from "../components/CorporateStats";
import { CORPORATE, BRAND, waLink } from "../lib/brand";
import { IMG } from "../lib/brand";

function Header() {
  return (
    <section className="relative isolate overflow-hidden bg-tma-night pt-32 pb-20 text-white md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <img src={IMG.heroServices} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-tma-night/90 via-tma-night/85 to-tma-night" />
      </div>
      <div className="container-tma">
        <span className="eyebrow-light">Relations Investisseurs</span>
        <h1 className="heading-xl mt-6 max-w-4xl text-balance">
          Une trajectoire de croissance <br />
          <span className="text-tma-electric-200">rigoureuse et transparente.</span>
        </h1>
        <p className="lead mt-6 max-w-2xl text-white/70">
          Depuis 2015, TMA Holding délivre une performance financière soutenue,
          avec une gouvernance de standards internationaux et un reporting rigoureux.
        </p>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-tma">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Performance 2024–2025</span>
            <h2 className="heading-lg mt-4 text-tma-night">
              Indicateurs clés <br />
              <span className="text-tma-electric">consolidés.</span>
            </h2>
            <p className="mt-5 text-tma-ash">
              Reporting audité par KPMG Côte d&apos;Ivoire. Comptes consolidés
              disponibles dans la section Rapports.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {CORPORATE.investors.highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-tma-night/10 bg-tma-stone/60 p-6"
                >
                  <div className="text-2xl font-extrabold text-tma-night">{h.split(":")[0]}</div>
                  <div className="mt-1 text-sm text-tma-ash">{h.split(":")[1]}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reports() {
  return (
    <section className="bg-tma-stone py-20 md:py-28">
      <div className="container-tma">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Rapports & publications</span>
            <h2 className="heading-lg mt-4 text-tma-night">Centre de documentation.</h2>
          </div>
          <p className="max-w-md text-tma-ash">
            Rapports annuels, états financiers consolidés, présentations investisseurs.
          </p>
        </div>

        <div className="mt-12 divide-y divide-tma-night/10 rounded-2xl border border-tma-night/10 bg-white">
          {CORPORATE.investors.reports.map((r) => (
            <a
              key={`${r.year}-${r.title}`}
              href={r.href}
              className="group flex flex-col gap-2 px-6 py-5 transition hover:bg-tma-stone/50 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-5">
                <span className="flex h-10 w-16 items-center justify-center rounded-md bg-tma-night text-xs font-bold text-white">
                  {r.year}
                </span>
                <div>
                  <div className="font-semibold text-tma-night">{r.title}</div>
                  <div className="text-xs text-tma-ash">PDF · {r.size}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-tma-electric">
                Télécharger
                <RxDownload className="transition-transform group-hover:translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Governance() {
  const items = [
    {
      title: "Conseil d'administration",
      desc: "5 membres dont 2 administrateurs indépendants, élus pour 3 ans.",
    },
    {
      title: "Comité d'audit",
      desc: "Supervise les comptes consolidés, les risques et la conformité.",
    },
    {
      title: "Comité des rémunérations",
      desc: "Définit les politiques de rémunération du management et des administrateurs.",
    },
    {
      title: "Comité RSE & Impact",
      desc: "Pilote la trajectoire ESG et le reporting extra-financier.",
    },
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-tma">
        <span className="eyebrow">Gouvernance</span>
        <h2 className="heading-lg mt-4 max-w-3xl text-tma-night">
          Une gouvernance <span className="text-tma-electric">institutionnelle</span> et indépendante.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium"
            >
              <div className="h-1 w-10 rounded-full bg-tma-gold" />
              <h3 className="mt-4 text-lg font-extrabold text-tma-night">{it.title}</h3>
              <p className="mt-2 text-sm text-tma-ash">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IRContact() {
  return (
    <section className="bg-tma-night py-20 text-white md:py-28">
      <div className="container-tma">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow-light">Contact</span>
            <h2 className="heading-lg mt-4 text-white">
              Une question sur nos publications ou notre gouvernance ?
            </h2>
            <p className="mt-5 max-w-xl text-white/70">
              Notre département Relations Investisseurs est à votre disposition pour toute
              demande de documentation ou d&apos;échange avec la direction financière.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.2em] text-tma-electric-200">
                Relations investisseurs
              </div>
              <div className="mt-3 text-xl font-bold">{CORPORATE.investors.contactName}</div>
              <a
                href={`mailto:${CORPORATE.investors.contactEmail}`}
                className="mt-2 block text-tma-electric-200 hover:text-white"
              >
                {CORPORATE.investors.contactEmail}
              </a>
              <a
                href={waLink("Bonjour, je contacte le service Relations Investisseurs de TMA Holding.")}
                className="btn-whatsapp mt-6 w-full"
              >
                Contacter via WhatsApp <RxArrowTopRight />
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
      <CorporateStats variant="light" />
      <Highlights />
      <Reports />
      <Governance />
      <IRContact />
      <Footer3 />
    </div>
  );
}
