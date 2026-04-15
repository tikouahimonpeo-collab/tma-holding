"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND, NAV, WA } from "@/lib/brand";
import { Button } from "./Button";
import { IconMenu, IconClose, IconWhatsApp, IconPhone } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêche le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-white/98 shadow-sm border-b border-tma-stone"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-8">
        {/* Logo officiel TMA Holding */}
        <Link
          href="/"
          aria-label={BRAND.name}
          className="flex items-center shrink-0"
        >
          <span
            className={`inline-flex items-center justify-center overflow-hidden rounded-xl transition-colors ${
              scrolled ? "bg-transparent" : "bg-white"
            }`}
          >
            <img
              src="/logo-tma.jpg"
              alt={`${BRAND.name} — logo officiel`}
              width={1080}
              height={1080}
              className="block h-12 w-12 md:h-14 md:w-14 object-contain"
            />
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[14px] font-medium transition-colors ${
                scrolled
                  ? "text-tma-night hover:text-tma-electric"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            href={WA.info}
            target="_blank"
            variant="whatsapp"
            size="sm"
            iconLeft={<IconWhatsApp className="w-4 h-4" />}
          >
            WhatsApp
          </Button>
          <Button href="/devis" variant={scrolled ? "dark" : "light"} size="sm">
            Demander un devis
          </Button>
        </div>

        {/* Bouton menu mobile */}
        <button
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
          className={`lg:hidden rounded-full p-2 ${
            scrolled ? "text-tma-night" : "text-white"
          }`}
        >
          <IconMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-tma-night text-white animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 md:px-8 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              aria-label={BRAND.name}
              className="flex items-center"
            >
              <span className="inline-flex items-center justify-center overflow-hidden rounded-xl bg-white">
                <img
                  src="/logo-tma.jpg"
                  alt={`${BRAND.name} — logo officiel`}
                  width={1080}
                  height={1080}
                  className="block h-12 w-12 object-contain"
                />
              </span>
            </Link>
            <button
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-white"
            >
              <IconClose className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 px-6 py-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-display font-semibold py-3 border-b border-white/10 hover:text-tma-electric"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-8 flex flex-col gap-3">
            <Button
              href={WA.info}
              target="_blank"
              variant="whatsapp"
              size="lg"
              iconLeft={<IconWhatsApp className="w-5 h-5" />}
            >
              Écrire sur WhatsApp
            </Button>
            <Button href="/devis" variant="primary" size="lg" onClick={() => setOpen(false)}>
              Demander un devis
            </Button>
            <Button
              href={`tel:${BRAND.phoneRaw}`}
              variant="outline"
              size="lg"
              iconLeft={<IconPhone className="w-5 h-5" />}
            >
              {BRAND.phone}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
