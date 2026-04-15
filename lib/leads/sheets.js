// ============================================================
//  TMA HOLDING — Persistence leads dans Google Sheets
//
//  Structure de la feuille (16 colonnes figées) :
//    A  ID Lead
//    B  Date
//    C  Nom complet
//    D  Téléphone / WhatsApp
//    E  Email
//    F  Entreprise
//    G  Service demandé
//    H  Budget
//    I  Message
//    J  Provenance
//    K  URL de la page
//    L  Statut
//    M  Assigné à
//    N  Notes commerciales
//    O  Lien Drive
//    P  Dernière mise à jour
// ============================================================

import { getSheetsClient, CONFIG } from "./google";

export const COLUMNS = [
  "ID Lead",
  "Date",
  "Nom complet",
  "Téléphone / WhatsApp",
  "Email",
  "Entreprise",
  "Service demandé",
  "Budget",
  "Message",
  "Provenance",
  "URL de la page",
  "Statut",
  "Assigné à",
  "Notes commerciales",
  "Lien Drive",
  "Dernière mise à jour",
];

export const STATUTS = [
  "Nouveau",
  "À contacter",
  "En cours",
  "Converti",
  "Perdu",
];

/** Append d'un lead dans la feuille. */
export async function appendLead(row) {
  const sheets = getSheetsClient();
  const values = [
    [
      row.id,
      row.date,
      row.fullName,
      row.phone,
      row.email || "",
      row.company || "",
      row.service || "",
      row.budget || "",
      row.message || "",
      row.provenance || "Site web",
      row.pageUrl || "",
      "Nouveau",
      "",
      "",
      row.driveUrl || "",
      row.date,
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: CONFIG.sheetId(),
    range: `${CONFIG.sheetTab}!A:P`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values },
  });
}

/**
 * Vérifie si un email ou téléphone existe déjà dans la feuille
 * (dedup simple, 48h rolling). Retourne l'ID existant si trouvé.
 */
export async function findDuplicate({ email, phone }) {
  if (!email && !phone) return null;
  const sheets = getSheetsClient();

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: CONFIG.sheetId(),
    range: `${CONFIG.sheetTab}!A2:P`,
    majorDimension: "ROWS",
  });

  const rows = res.data.values || [];
  const now = Date.now();
  const WINDOW = 48 * 60 * 60 * 1000; // 48h

  for (let i = rows.length - 1; i >= 0; i--) {
    const r = rows[i];
    const [id, dateStr, , rowPhone, rowEmail] = r;
    // Parse DD/MM/YYYY HH:mm
    const m = (dateStr || "").match(/(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})/);
    const ts = m
      ? new Date(+m[3], +m[2] - 1, +m[1], +m[4], +m[5]).getTime()
      : 0;
    if (ts && now - ts > WINDOW) break;
    const eMatch = email && rowEmail && rowEmail.toLowerCase() === email.toLowerCase();
    const pMatch = phone && rowPhone && normPhone(rowPhone) === normPhone(phone);
    if (eMatch || pMatch) return id;
  }
  return null;
}

function normPhone(p) {
  return String(p).replace(/[^0-9+]/g, "");
}

/**
 * Initialise la feuille (one-shot) :
 *  - Crée l'onglet si absent
 *  - Écrit les headers + met un style header
 *  - Ajoute une validation de liste sur la colonne Statut
 *  - Fige la première ligne
 */
export async function initSheet() {
  const sheets = getSheetsClient();
  const spreadsheetId = CONFIG.sheetId();
  const tabName = CONFIG.sheetTab;

  // 1) S'assurer que l'onglet existe
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  let tab = meta.data.sheets.find((s) => s.properties.title === tabName);

  if (!tab) {
    const add = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: { title: tabName, gridProperties: { rowCount: 5000, columnCount: 20 } },
            },
          },
        ],
      },
    });
    tab = { properties: add.data.replies[0].addSheet.properties };
  }
  const sheetId = tab.properties.sheetId;

  // 2) Headers
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${tabName}!A1:P1`,
    valueInputOption: "RAW",
    requestBody: { values: [COLUMNS] },
  });

  // 3) Style header + freeze + dropdown Statut + filtre
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          repeatCell: {
            range: { sheetId, startRowIndex: 0, endRowIndex: 1 },
            cell: {
              userEnteredFormat: {
                backgroundColor: { red: 0.04, green: 0.1, blue: 0.18 },
                textFormat: {
                  foregroundColor: { red: 1, green: 1, blue: 1 },
                  bold: true,
                  fontSize: 11,
                },
                horizontalAlignment: "LEFT",
                verticalAlignment: "MIDDLE",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
              },
            },
            fields:
              "userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment,padding)",
          },
        },
        {
          updateSheetProperties: {
            properties: { sheetId, gridProperties: { frozenRowCount: 1 } },
            fields: "gridProperties.frozenRowCount",
          },
        },
        // Dropdown Statut (col L = index 11)
        {
          setDataValidation: {
            range: {
              sheetId,
              startRowIndex: 1,
              endRowIndex: 5000,
              startColumnIndex: 11,
              endColumnIndex: 12,
            },
            rule: {
              condition: {
                type: "ONE_OF_LIST",
                values: STATUTS.map((v) => ({ userEnteredValue: v })),
              },
              strict: true,
              showCustomUi: true,
            },
          },
        },
        // Auto-filter sur toute la plage
        {
          setBasicFilter: {
            filter: {
              range: { sheetId, startRowIndex: 0, endColumnIndex: 16 },
            },
          },
        },
        // Formats conditionnels Statut
        ...STATUTS.map((statut, i) => ({
          addConditionalFormatRule: {
            rule: {
              ranges: [
                {
                  sheetId,
                  startRowIndex: 1,
                  endRowIndex: 5000,
                  startColumnIndex: 11,
                  endColumnIndex: 12,
                },
              ],
              booleanRule: {
                condition: {
                  type: "TEXT_EQ",
                  values: [{ userEnteredValue: statut }],
                },
                format: {
                  backgroundColor: statusColor(statut),
                  textFormat: { bold: true },
                },
              },
            },
            index: i,
          },
        })),
      ],
    },
  });
}

function statusColor(s) {
  switch (s) {
    case "Nouveau":
      return { red: 0.89, green: 0.95, blue: 1 };
    case "À contacter":
      return { red: 1, green: 0.95, blue: 0.78 };
    case "En cours":
      return { red: 1, green: 0.87, blue: 0.62 };
    case "Converti":
      return { red: 0.78, green: 0.94, blue: 0.82 };
    case "Perdu":
      return { red: 0.98, green: 0.8, blue: 0.8 };
    default:
      return { red: 1, green: 1, blue: 1 };
  }
}
