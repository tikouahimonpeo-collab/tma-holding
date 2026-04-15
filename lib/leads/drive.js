// ============================================================
//  TMA HOLDING — Upload fichiers vers Google Drive
//  - Crée un sous-dossier par lead : TMA-YYYYMMDD-XXXX
//  - Upload chaque pièce jointe + renvoie une URL de dossier
// ============================================================

import { Readable } from "stream";
import { getDriveClient, CONFIG } from "./google";
import { safeFilename } from "./sanitize";

/** Crée un sous-dossier nommé d'après le leadId dans le dossier racine. */
export async function createLeadFolder(leadId, leadName) {
  const drive = getDriveClient();
  const name = `${leadId} — ${leadName || "Lead"}`.slice(0, 150);

  const { data } = await drive.files.create({
    requestBody: {
      name,
      mimeType: "application/vnd.google-apps.folder",
      parents: [CONFIG.driveFolderId()],
    },
    fields: "id, webViewLink",
    supportsAllDrives: true,
  });

  return { id: data.id, url: data.webViewLink };
}

/**
 * Upload un fichier (Buffer) dans un dossier Drive donné.
 * @param {string} folderId
 * @param {{name: string, type: string, buffer: Buffer}} file
 */
export async function uploadFileToFolder(folderId, file) {
  const drive = getDriveClient();
  const stream = Readable.from(file.buffer);

  const { data } = await drive.files.create({
    requestBody: {
      name: safeFilename(file.name),
      parents: [folderId],
    },
    media: {
      mimeType: file.type || "application/octet-stream",
      body: stream,
    },
    fields: "id, webViewLink, webContentLink",
    supportsAllDrives: true,
  });

  return { id: data.id, url: data.webViewLink };
}

/** Pipeline : crée le dossier + upload tous les fichiers. */
export async function uploadLeadFiles(leadId, leadName, files = []) {
  if (!files.length) return { folderUrl: "", files: [] };

  const folder = await createLeadFolder(leadId, leadName);
  const uploaded = [];
  for (const f of files) {
    try {
      const r = await uploadFileToFolder(folder.id, f);
      uploaded.push({ name: f.name, url: r.url });
    } catch (err) {
      console.error(`[TMA/leads] Drive upload failed for ${f.name}:`, err.message);
    }
  }
  return { folderUrl: folder.url, files: uploaded };
}
