"use client";
import { useEffect, useState } from "react";
import { WA } from "@/lib/brand";
import { IconWhatsApp, IconClose } from "./icons";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[300px] max-w-[calc(100vw-40px)] rounded-2xl bg-white shadow-2xl border border-tma-stone overflow-hidden animate-fade-up">
          <div className="bg-[#25D366] text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconWhatsApp className="w-5 h-5" />
              <span className="font-semibold">TMA Holding</span>
            </div>
            <button
              aria-label="Fermer"
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-white"
            >
              <IconClose className="w-4 h-4" />
            </button>
          </div>
          <div className="p-5">
            <p className="text-sm text-tma-ink mb-4">
              Bonjour 👋 <br /> Comment pouvons-nous vous aider aujourd'hui ?
            </p>
            <div className="flex flex-col gap-2">
              <QuickAction href={WA.devis} label="Demander un devis" />
              <QuickAction href={WA.catalogue} label="Recevoir le catalogue TMA Shop" />
              <QuickAction href={WA.rappel} label="Être rappelé" />
              <QuickAction href={WA.info} label="Plus d'infos sur vos services" />
            </div>
            <p className="text-[11px] text-tma-ash mt-4 text-center">
              Réponse sous quelques minutes · Lun–Sam · 08h–19h
            </p>
          </div>
        </div>
      )}
      <button
        aria-label="Contact WhatsApp"
        onClick={() => setOpen((v) => !v)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <IconWhatsApp className="relative w-7 h-7" />
      </button>
    </div>
  );
}

function QuickAction({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg bg-tma-stone hover:bg-tma-electric/10 hover:text-tma-electric px-3 py-2 text-sm font-medium text-tma-night transition-colors"
    >
      <IconWhatsApp className="w-4 h-4 text-[#25D366]" />
      {label}
    </a>
  );
}
