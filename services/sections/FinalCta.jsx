"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { waLink, TEL, BRAND, IMG } from "@/lib/brand";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-tma-night py-24 text-white md:py-32">
      <div className="absolute inset-0 -z-10">
        <img src={IMG.chantier} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-tma-night via-tma-night/95 to-tma-night/70" />
      </div>
      <div className="container-tma">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <span className="eyebrow-light">Passons à l&apos;action</span>
            <h2 className="heading-xl mt-5 text-white text-balance">
              Votre projet mérite <br />
              <span className="text-tma-electric-200">un chiffrage sérieux.</span>
            </h2>
            <p className="lead mt-6 max-w-xl text-white/75">
              Parlez-nous de votre projet en 5 minutes sur WhatsApp — devis estimatif
              sous 48 h, rendez-vous sur site sous 7 jours, zéro engagement.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={waLink(
                  "Bonjour TMA Holding, je souhaite un devis pour mon projet. Voici les détails :"
                )}
                className="btn-whatsapp !px-7 !py-4 !text-base"
              >
                Démarrer sur WhatsApp
                <RxArrowTopRight />
              </a>
              <a href={TEL} className="btn-ghost !border-white/30 !bg-transparent !text-white hover:!bg-white hover:!text-tma-night">
                Appeler maintenant
              </a>
            </div>
            <div className="mt-8 text-xs uppercase tracking-[0.2em] text-white/50">
              Réponse 24 h · Devis gratuit · Confidentialité totale
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.2em] text-tma-electric-200">
                Nous joindre
              </div>
              <div className="mt-5 space-y-5 text-sm">
                <div>
                  <div className="text-xs text-white/50">Siège social</div>
                  <div className="mt-1 font-semibold">{BRAND.address.full}</div>
                </div>
                <div>
                  <div className="text-xs text-white/50">Téléphone</div>
                  <div className="mt-1 font-semibold">{BRAND.phone}</div>
                </div>
                <div>
                  <div className="text-xs text-white/50">Horaires</div>
                  <div className="mt-1 font-semibold">{BRAND.hours}</div>
                </div>
                <div>
                  <div className="text-xs text-white/50">Email</div>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="mt-1 block font-semibold text-tma-electric-200 hover:text-white"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
