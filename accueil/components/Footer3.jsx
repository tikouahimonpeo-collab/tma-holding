"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { BRAND, WA, TEL, MAILTO, NAV } from "@/lib/brand";
import { Logo } from "@/components/Logo";

export function Footer3() {
  const year = BRAND.legal.year;
  return (
    <footer className="bg-tma-night text-white">
      <div className="container-tma py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Logo size={48} onDark />

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
              {BRAND.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { i: BiLogoInstagram, u: BRAND.social.instagram, n: "Instagram" },
                { i: BiLogoFacebookCircle, u: BRAND.social.facebook, n: "Facebook" },
                { i: BiLogoLinkedinSquare, u: BRAND.social.linkedin, n: "LinkedIn" },
                { i: BiLogoYoutube, u: BRAND.social.youtube, n: "YouTube" },
              ].map(({ i: Icon, u, n }) => (
                <a
                  key={n}
                  href={u}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={n}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-tma-electric hover:text-tma-electric"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="text-white/80 transition hover:text-tma-electric">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/contact" className="text-white/80 transition hover:text-tma-electric">
                  Devis
                </a>
              </li>
            </ul>
          </div>

          {/* TMA Shop */}
          <div className="md:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              TMA Shop
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/boutique#ciment" className="text-white/80 transition hover:text-tma-electric">Ciment & Béton</a></li>
              <li><a href="/boutique#carrelage" className="text-white/80 transition hover:text-tma-electric">Carrelage & Marbre</a></li>
              <li><a href="/boutique#sanitaire" className="text-white/80 transition hover:text-tma-electric">Sanitaire</a></li>
              <li><a href="/boutique#cuisine" className="text-white/80 transition hover:text-tma-electric">Cuisine & Alu</a></li>
              <li><a href={WA.catalogue} target="_blank" rel="noreferrer" className="text-tma-electric-200 transition hover:text-white">Catalogue WhatsApp →</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Contact
            </h4>
            <address className="space-y-3 text-sm not-italic text-white/80">
              <p>{BRAND.address.full}</p>
              <p>{BRAND.hours}</p>
              <p>
                <a href={TEL} className="transition hover:text-tma-electric">{BRAND.phone}</a>
              </p>
              <p>
                <a href={MAILTO} className="transition hover:text-tma-electric">{BRAND.email}</a>
              </p>
            </address>
            <a
              href={WA.general}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp mt-5 !py-2.5 !text-sm"
            >
              WhatsApp direct
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/50">
            © {year} {BRAND.name}. Tous droits réservés. · RCCM {BRAND.legal.rccm}
          </p>
          <ul className="flex flex-wrap gap-6 text-xs text-white/50">
            <li><a href="#" className="transition hover:text-white">Politique de confidentialité</a></li>
            <li><a href="#" className="transition hover:text-white">Conditions d'utilisation</a></li>
            <li><a href="#" className="transition hover:text-white">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
