// ============================================================
//  TMA HOLDING — Authentification Google (Service Account)
//  Centralise la JWT GoogleAuth + instancie Sheets et Drive.
// ============================================================
//
// Variables d'environnement requises (fichier .env.local) :
//   GOOGLE_SERVICE_ACCOUNT_EMAIL   email du service account
//   GOOGLE_PRIVATE_KEY             clé privée (avec \n littéraux)
//   GOOGLE_SHEETS_ID               ID de la Google Sheet
//   GOOGLE_DRIVE_FOLDER_ID         ID du dossier Drive racine
//
// ⚠️  La Service Account doit être AJOUTÉE EN TANT QU'ÉDITEUR
//     sur la Sheet et le dossier Drive (partage classique).
// ============================================================

import { google } from "googleapis";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive",
];

let cachedAuth = null;

/** Retourne une instance GoogleAuth JWT mémoïsée. */
export function getAuth() {
  if (cachedAuth) return cachedAuth;

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");

  if (!email || !key) {
    throw new Error(
      "[TMA/leads] GOOGLE_SERVICE_ACCOUNT_EMAIL ou GOOGLE_PRIVATE_KEY manquant dans .env.local"
    );
  }

  cachedAuth = new google.auth.JWT({
    email,
    key,
    scopes: SCOPES,
  });

  return cachedAuth;
}

export function getSheetsClient() {
  return google.sheets({ version: "v4", auth: getAuth() });
}

export function getDriveClient() {
  return google.drive({ version: "v3", auth: getAuth() });
}

export const CONFIG = {
  sheetId: () => requireEnv("GOOGLE_SHEETS_ID"),
  driveFolderId: () => requireEnv("GOOGLE_DRIVE_FOLDER_ID"),
  sheetTab: process.env.GOOGLE_SHEETS_TAB || "Leads",
};

function requireEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`[TMA/leads] Variable d'env manquante : ${name}`);
  return v;
}
