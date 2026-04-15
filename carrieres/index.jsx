"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxArrowRight } from "react-icons/rx";
import { Navbar1 } from "../accueil/components/Navbar1";
import { Footer3 } from "../accueil/components/Footer3";
import { CORPORATE, waLink, IMG } from "../lib/brand";

function Header() {
  return (
    <section className="relative isolate overflow-hidden bg-tma-night pt-32 pb-20 text-white md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <img src={IMG.equipe} alt="" className="h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-tma-night/90 via-tma-night/80 to-tma-night" />
      </div>
      <div className="container-tma">
        <span className="eyebrow-light">Carrières</span>
        <h1 className="heading-xl mt-6 max-w-4xl text-balance">
          Rejoignez le groupe <br />
          <span className="text-tma-electric-200">qui bâtit l&apos;Afrique de demain.</span>
        </h1>
        <p className="lead mt-6 max-w-2xl text-white/70">
          1 200 collaborateurs, 4 pays, 1 exigence : l&apos;excellence.
          Chez TMA Holding, nous recrutons les talents qui partagent notre ambition.
        </p>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-tma">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pourquoi TMA</span>
          <h2 className="heading-lg mt-4 text-tma-night">
            Un employeur qui <span className="text-tma-electric">investit</span> dans ses équipes.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CORPORATE.careers.benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium text-center"
            >
              <div className="text-4xl">{b.icon}</div>
              <h3 className="mt-4 text-lg font-extrabold text-tma-night">{b.title}</h3>
              <p className="mt-2 text-sm text-tma-ash">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Jobs() {
  return (
    <section className="bg-tma-stone py-20 md:py-28">
      <div className="container-tma">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Offres ouvertes</span>
            <h2 className="heading-lg mt-4 text-tma-night">Postes à pourvoir.</h2>
          </div>
          <p className="max-w-md text-tma-ash">
            Candidature spontanée également bienvenue — envoyez-nous votre CV via WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-4">
          {CORPORATE.careers.jobs.map((j, i) => (
            <motion.a
              key={j.title}
              href={waLink(
                `Bonjour, je candidate au poste de ${j.title} (${j.location}). Voici mon profil :`
              )}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-tma-night/10 bg-white p-6 transition hover:-translate-y-1 hover:border-tma-electric hover:shadow-premium md:flex-row md:items-center md:gap-8"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-tma-electric">
                  <span>{j.dept}</span>
                  <span className="text-tma-ash">·</span>
                  <span>{j.type}</span>
                </div>
                <h3 className="mt-2 text-xl font-extrabold text-tma-night">{j.title}</h3>
                <div className="mt-1 text-sm text-tma-ash">{j.location}</div>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-tma-night transition group-hover:text-tma-electric">
                Postuler
                <RxArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Candidature", desc: "CV + lettre de motivation via WhatsApp ou formulaire." },
    { n: "02", title: "Entretien RH", desc: "Appel de présentation mutuelle (30 min)." },
    { n: "03", title: "Entretien métier", desc: "Cas pratique + échange avec l'équipe opérationnelle." },
    { n: "04", title: "Offre & onboarding", desc: "Proposition formelle sous 7 jours, parcours d'intégration structuré." },
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-tma">
        <span className="eyebrow">Parcours candidat</span>
        <h2 className="heading-lg mt-4 max-w-3xl text-tma-night">
          Un process <span className="text-tma-electric">clair</span>, rapide et transparent.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-tma-night/10 bg-tma-stone/50 p-6"
            >
              <div className="text-sm font-bold text-tma-electric">{s.n}</div>
              <h3 className="mt-3 text-lg font-extrabold text-tma-night">{s.title}</h3>
              <p className="mt-2 text-sm text-tma-ash">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaCareers() {
  return (
    <section className="bg-tma-night py-20 text-white md:py-28">
      <div className="container-tma text-center">
        <h2 className="heading-lg mx-auto max-w-3xl text-white">
          Aucune offre ne correspond ? <br />
          <span className="text-tma-electric-200">Envoyez-nous votre CV.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/70">
          Nous gardons les talents exceptionnels dans notre vivier. Votre profil
          sera contacté dès qu&apos;une opportunité correspondra.
        </p>
        <a
          href={waLink("Bonjour TMA Holding, je souhaite envoyer ma candidature spontanée. Voici mon profil :")}
          className="btn-whatsapp mt-8"
        >
          Envoyer ma candidature
        </a>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div>
      <Navbar1 />
      <Header />
      <Benefits />
      <Jobs />
      <Process />
      <CtaCareers />
      <Footer3 />
    </div>
  );
}
