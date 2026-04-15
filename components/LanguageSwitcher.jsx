"use client";

import React, { useState } from "react";
import { CORPORATE } from "@/lib/brand";

/**
 * Sélecteur FR/EN minimaliste pour la navbar.
 * Version MVP : stocke la langue en localStorage.
 * Pour un vrai i18n, migrer vers next-intl (cf. docs/figma-spec.md).
 */
export function LanguageSwitcher({ className = "" }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "fr";
    return window.localStorage.getItem("tma-lang") || "fr";
  });

  const onChange = (code) => {
    setLang(code);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("tma-lang", code);
      document.documentElement.lang = code;
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-tma-night/15 bg-white/80 p-0.5 backdrop-blur ${className}`}
    >
      {CORPORATE.locales.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => onChange(l.code)}
          aria-label={`Passer en ${l.name}`}
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all ${
            lang === l.code
              ? "bg-tma-night text-white shadow-sm"
              : "text-tma-night/60 hover:text-tma-night"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
