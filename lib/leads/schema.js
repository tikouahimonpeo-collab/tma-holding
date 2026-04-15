// ============================================================
//  TMA HOLDING — Validation des leads (Zod)
//  Schéma strict, sécurisé, rejet précoce des payloads invalides.
// ============================================================

import { z } from "zod";

// Téléphone international simple : +XXX... (8 à 20 chiffres, espaces tolérés)
const phoneRegex = /^\+?[0-9\s().-]{8,25}$/;

export const SERVICES = [
  "construction",
  "renovation",
  "revetement",
  "conception",
  "shop",
  "autre",
];

export const PROVENANCES = [
  "Site web",
  "WhatsApp",
  "Instagram",
  "Facebook",
  "LinkedIn",
  "TikTok",
  "Bouche-à-oreille",
  "Google",
  "Presse",
  "Autre",
];

export const BUDGETS = [
  "< 5 M FCFA",
  "5 – 20 M FCFA",
  "20 – 50 M FCFA",
  "50 – 150 M FCFA",
  "> 150 M FCFA",
  "Non défini",
];

export const leadSchema = z.object({
  // Honeypot — doit rester vide (si rempli → bot)
  website: z.string().max(0).optional().or(z.literal("")),

  // Données client
  fullName: z
    .string()
    .trim()
    .min(2, "Nom trop court")
    .max(100, "Nom trop long"),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Numéro de téléphone invalide")
    .max(25),
  email: z.string().trim().email("Email invalide").max(150).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),

  service: z.enum(SERVICES).default("autre"),
  budget: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Message trop court").max(4000),

  provenance: z.string().trim().max(50).optional().default("Site web"),
  pageUrl: z.string().trim().max(500).optional().or(z.literal("")),

  // Turnstile / reCAPTCHA token (vérif côté serveur)
  captchaToken: z.string().max(4000).optional().or(z.literal("")),

  // Métadonnées consenties
  consent: z.coerce.boolean().refine((v) => v === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
});

export function parseLead(raw) {
  return leadSchema.safeParse(raw);
}
