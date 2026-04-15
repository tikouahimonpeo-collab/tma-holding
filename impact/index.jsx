"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar1 } from "../accueil/components/Navbar1";
import { Footer3 } from "../accueil/components/Footer3";
import { CORPORATE, IMG, waLink } from "../lib/brand";

function Header() {
  return (
    <section className="relative isolate overflow-hidden bg-tma-night pt-32 pb-20 text-white md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <img src={IMG.chantier} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-tma-night/90 via-tma-night/85 to-tma-night" />
      </div>
      <div className="container-tma">
        <span className="eyebrow-light">Impact & ESG</span>
        <h1 className="heading-xl mt-6 max-w-4xl text-balance">
          Bâtir durablement, <br />
          <span className="text-tma-electric-200">impacter positivement.</span>
        </h1>
        <p className="lead mt-6 max-w-2xl text-white/70">
          Notre croissance est indissociable de notre responsabilité
          environnementale, sociale et de la gouvernance du groupe.
        </p>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-tma">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nos 3 piliers</span>
          <h2 className="heading-lg mt-4 text-tma-night">
            Une démarche <span className="text-tma-electric">mesurée et auditée.</span>
          </h2>
          <p className="mt-5 text-tma-ash">
            Nos indicateurs extra-financiers sont certifiés chaque année par un auditeur indépendant.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {CORPORATE.esg.pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl border border-tma-night/10 bg-tma-stone/50 p-8"
            >
              <div className="h-1 w-12 rounded-full bg-tma-gold" />
              <h3 className="mt-5 text-2xl font-extrabold text-tma-night">{p.title}</h3>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-5xl font-extrabold text-tma-electric">{p.metric}</span>
              </div>
              <p className="mt-1 text-sm text-tma-ash">{p.metricLabel}</p>
              <ul className="mt-6 space-y-3 border-t border-tma-night/10 pt-6">
                {p.actions.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm text-tma-night">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-tma-electric" />
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Foundation() {
  return (
    <section className="bg-tma-night py-20 text-white md:py-28">
      <div className="container-tma">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="eyebrow-light">Fondation TMA Impact</span>
            <h2 className="heading-lg mt-4 text-white">
              Former 500 jeunes Ivoiriens <br />
              <span className="text-tma-electric-200">aux métiers du BTP.</span>
            </h2>
            <p className="mt-6 text-white/70">
              Notre fondation finance des cursus qualifiants pour les jeunes issus
              de milieux défavorisés. Maçons, coffreurs, carreleurs, conducteurs
              d&apos;engins : des métiers d&apos;avenir, avec un débouché garanti sur nos chantiers.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "500", v: "Jeunes formés d'ici 2030" },
                { k: "80 %", v: "Intégrés sur nos chantiers" },
                { k: "1,5 M€", v: "Budget pluriannuel" },
              ].map((x) => (
                <div key={x.v} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-extrabold">{x.k}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/60">
                    {x.v}
                  </div>
                </div>
              ))}
            </div>
            <a
              href={waLink("Bonjour, je souhaite en savoir plus sur la Fondation TMA Impact.")}
              className="btn-whatsapp mt-8"
            >
              En savoir plus
            </a>
          </div>
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-premium">
              <img src={IMG.equipe} alt="Fondation TMA Impact" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-tma-night/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const items = [
    { title: "ISO 9001:2015", desc: "Management qualité" },
    { title: "ISO 14001:2015", desc: "Management environnemental" },
    { title: "ISO 45001:2018", desc: "Santé & sécurité au travail" },
    { title: "B Corp (en cours)", desc: "Certification impact à horizon 2027" },
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-tma">
        <span className="eyebrow">Certifications</span>
        <h2 className="heading-lg mt-4 max-w-3xl text-tma-night">
          Audités, certifiés, <span className="text-tma-electric">engagés.</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium"
            >
              <div className="h-1 w-10 rounded-full bg-tma-gold" />
              <h3 className="mt-4 text-lg font-extrabold text-tma-night">{c.title}</h3>
              <p className="mt-2 text-sm text-tma-ash">{c.desc}</p>
            </motion.div>
          ))}
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
      <Pillars />
      <Foundation />
      <Certifications />
      <Footer3 />
    </div>
  );
}
