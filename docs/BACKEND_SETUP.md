# TMA Holding — Guide d'installation backend (A → Z)

Ce guide vous accompagne pas-à-pas pour mettre en place le **backend de collecte des leads** : chaque demande reçue via le site sera automatiquement enregistrée dans **Google Sheets**, les pièces jointes dans **Google Drive**, et une **notification email** sera envoyée à votre équipe.

> ⏱ Temps estimé : **30 minutes** (compte Google pro recommandé).

---

## Sommaire

1. [Vue d'ensemble](#1-vue-densemble)
2. [Installation des dépendances](#2-installation-des-dépendances)
3. [Google Cloud — Service Account](#3-google-cloud--créer-un-service-account)
4. [Google Sheets — créer le CRM](#4-google-sheets--créer-le-crm)
5. [Google Drive — dossier des pièces jointes](#5-google-drive--dossier-des-pièces-jointes)
6. [SMTP — configurer les emails de notification](#6-smtp--configurer-les-emails-de-notification)
7. [Cloudflare Turnstile — anti-bot (recommandé)](#7-cloudflare-turnstile--anti-bot-recommandé)
8. [Configurer `.env.local`](#8-configurer-envlocal)
9. [Initialiser la Sheet (one-shot)](#9-initialiser-la-sheet-one-shot)
10. [Tester le formulaire en local](#10-tester-le-formulaire-en-local)
11. [Mise en production](#11-mise-en-production-vercel)
12. [Sécurité & bonnes pratiques](#12-sécurité--bonnes-pratiques)
13. [Dépannage](#13-dépannage-faq)

---

## 1. Vue d'ensemble

```
Formulaire site (navigateur)
        │
        ▼
  POST /api/lead  ──► [validation Zod → sanitize → rate limit → captcha]
                              │
         ┌────────────────────┼────────────────────┐
         ▼                    ▼                    ▼
   Google Drive          Google Sheets         Email SMTP
  (pièces jointes)     (CRM 16 colonnes)   (notification équipe)
```

**Composants créés :**

| Fichier                         | Rôle                                            |
| ------------------------------- | ----------------------------------------------- |
| `lib/leads/google.js`           | Auth Service Account + clients Sheets/Drive     |
| `lib/leads/schema.js`           | Validation Zod stricte                          |
| `lib/leads/sanitize.js`         | Nettoyage XSS + neutralisation formules Sheets  |
| `lib/leads/id.js`               | Génération d'ID `TMA-YYYYMMDD-XXXXXX`           |
| `lib/leads/rateLimit.js`        | Rate limit IP en mémoire (5 req / 10 min)       |
| `lib/leads/captcha.js`          | Vérification Turnstile                          |
| `lib/leads/drive.js`            | Upload fichiers (1 dossier / lead)              |
| `lib/leads/sheets.js`           | Append + init (headers + dropdowns + formats)   |
| `lib/leads/email.js`            | Notification HTML responsive                    |
| `app/api/lead/route.js`         | Endpoint POST principal                         |
| `app/api/lead/init/route.js`    | Endpoint one-shot pour initialiser la Sheet     |
| `components/LeadForm.jsx`       | Formulaire frontend connecté                    |

---

## 2. Installation des dépendances

Dans le terminal, à la racine du projet :

```bash
npm install googleapis nodemailer zod
```

Ces 3 paquets ont déjà été ajoutés à `package.json`. Relancez le serveur dev **après installation** :

```bash
npm run dev
```

---

## 3. Google Cloud — créer un Service Account

> Un **Service Account** est un « robot » Google qui agit pour votre backend sans avoir besoin de se connecter manuellement (pas d'OAuth, pas de refresh token).

### 3.1 Créer un projet Google Cloud

1. Ouvrez <https://console.cloud.google.com/>
2. En haut à gauche, cliquez sur le sélecteur de projet → **Nouveau projet**
3. Nommez-le `tma-holding-backend` → **Créer**

### 3.2 Activer les APIs nécessaires

Dans le menu latéral → **APIs et services → Bibliothèque**, recherchez et activez :

- ✅ **Google Sheets API**
- ✅ **Google Drive API**

### 3.3 Créer le Service Account

1. Menu latéral → **IAM et administration → Comptes de service**
2. **Créer un compte de service**
   - Nom : `tma-leads`
   - ID : `tma-leads` (auto-généré)
   - Description : « Backend TMA Holding — collecte leads »
3. Cliquez **Créer et continuer** (les rôles sont optionnels, vous pouvez **Ignorer**)
4. Cliquez **OK**

### 3.4 Générer la clé privée JSON

1. Dans la liste, cliquez sur le service account créé
2. Onglet **Clés → Ajouter une clé → Créer une clé**
3. Sélectionnez **JSON** → **Créer**
4. **Un fichier `.json` se télécharge automatiquement.** Conservez-le précieusement — il contient :
   ```json
   {
     "type": "service_account",
     "client_email": "tma-leads@tma-holding-backend.iam.gserviceaccount.com",
     "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
     ...
   }
   ```

> ⚠️ **Ce fichier est un secret.** Ne le committez jamais, ne l'envoyez jamais par email/Slack non chiffré.

### 3.5 Noter l'email du service account

L'email ressemble à `tma-leads@tma-holding-backend.iam.gserviceaccount.com`. Vous en aurez besoin aux étapes 4 et 5.

---

## 4. Google Sheets — créer le CRM

### 4.1 Créer la Sheet

1. Ouvrez <https://sheets.google.com>
2. **+ Blanc** pour créer une nouvelle feuille
3. Renommez-la **TMA Holding — CRM Leads**
4. Renommez l'onglet en bas : **Leads**

### 4.2 Partager avec le Service Account

1. Cliquez **Partager** (bouton bleu en haut à droite)
2. Collez l'email du service account (`tma-leads@...iam.gserviceaccount.com`)
3. Rôle : **Éditeur** ✍️
4. **Décochez** « Prévenir les utilisateurs »
5. **Partager**

### 4.3 Récupérer l'ID de la Sheet

L'URL ressemble à :

```
https://docs.google.com/spreadsheets/d/1AbCdEf123GhIjKl456MnOpQr789/edit#gid=0
                                         └───────── l'ID ─────────┘
```

Copiez cet ID → ce sera la valeur de `GOOGLE_SHEETS_ID`.

> Les 16 colonnes (ID, Date, Nom, Téléphone, Email, Entreprise, Service, Budget, Message, Provenance, URL, Statut, Assigné à, Notes, Lien Drive, Dernière mise à jour) + dropdowns + styles seront ajoutés **automatiquement** à l'étape 9.

---

## 5. Google Drive — dossier des pièces jointes

### 5.1 Créer le dossier racine

1. Ouvrez <https://drive.google.com>
2. **+ Nouveau → Dossier** → nommez-le **TMA Holding — Pièces jointes leads**
3. Ouvrez ce dossier

### 5.2 Partager avec le Service Account

1. Clic droit sur le dossier → **Partager**
2. Collez l'email du service account
3. Rôle : **Éditeur**
4. **Décochez** « Prévenir »
5. **Partager**

### 5.3 Récupérer l'ID du dossier

L'URL du dossier :

```
https://drive.google.com/drive/folders/1XyZ9876aBcDeF...
                                         └── l'ID ──┘
```

Copiez cet ID → ce sera `GOOGLE_DRIVE_FOLDER_ID`.

---

## 6. SMTP — configurer les emails de notification

### Option A — Gmail (simple, gratuit)

> ⚠️ **Prérequis** : la validation en deux étapes doit être **activée** sur le compte Google.

1. <https://myaccount.google.com/apppasswords> (connecté au compte qui enverra les emails)
2. Nom de l'app : `TMA Holding Backend`
3. Google génère un mot de passe à **16 caractères** (`xxxx xxxx xxxx xxxx`)
4. Dans `.env.local` :
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=contact@tmaholding.ci
   SMTP_PASS=xxxxxxxxxxxxxxxx
   ```

### Option B — SendGrid (production, 100 emails/jour gratuit)

1. Compte sur <https://sendgrid.com>
2. Settings → API Keys → **Create API Key** (Full Access)
3. Dans `.env.local` :
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=SG.xxx...votre-cle
   ```
4. **Vérifiez le domaine d'envoi** (Sender Authentication) pour ne pas tomber en spam.

### Option C — Mailgun / Amazon SES

Même principe : créez une clé SMTP, renseignez `SMTP_HOST/PORT/USER/PASS`.

### 6.1 Destinataire

```
LEAD_NOTIFY_TO=commercial@tmaholding.ci
```

Vous pouvez mettre plusieurs emails séparés par virgule : `commercial@…, cfo@…`.

---

## 7. Cloudflare Turnstile — anti-bot (recommandé)

Turnstile est l'alternative gratuite et privacy-friendly à reCAPTCHA.

1. <https://dash.cloudflare.com> → compte gratuit
2. Menu **Turnstile → Add Site**
   - Nom : `TMA Holding`
   - Domaines : `tmaholding.ci`, `localhost`
   - Widget mode : **Managed** (recommandé)
3. Récupérez :
   - **Site Key** (publique) → `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
   - **Secret Key** → `TURNSTILE_SECRET_KEY`

Si vous **ne configurez pas** Turnstile, le captcha est **désactivé** (l'API laisse passer). En production, c'est **fortement recommandé** de l'activer.

---

## 8. Configurer `.env.local`

À la racine du projet, copiez le template :

```bash
cp .env.example .env.local
```

Ouvrez `.env.local` et remplissez toutes les valeurs collectées ci-dessus.

**Astuce `GOOGLE_PRIVATE_KEY`** : dans le JSON téléchargé à l'étape 3.4, la valeur contient des `\n`. Copiez-la **telle quelle** entre guillemets doubles :

```env
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQI...\n-----END PRIVATE KEY-----\n"
```

Le code remplacera automatiquement les `\n` en vrais sauts de ligne.

**Générer un `LEAD_INIT_TOKEN`** :

```bash
openssl rand -hex 32
```

---

## 9. Initialiser la Sheet (one-shot)

Cette commande crée automatiquement :
- Les 16 en-têtes stylés
- Le **figement** de la première ligne
- Le **filtre automatique** sur toute la plage
- Un **dropdown** sur la colonne Statut (Nouveau / À contacter / En cours / Converti / Perdu)
- Des **formats conditionnels colorés** par statut

Démarrez le serveur :

```bash
npm run dev
```

Dans un autre terminal, exécutez :

```bash
curl -X POST http://localhost:3000/api/lead/init \
  -H "x-init-token: $LEAD_INIT_TOKEN"
```

Vous devez recevoir :

```json
{"ok":true,"message":"Sheet initialisée avec succès."}
```

Rechargez votre Google Sheet → tout est en place ✅.

> À faire **une seule fois** par environnement.

---

## 10. Tester le formulaire en local

### Option 1 — Utiliser `components/LeadForm.jsx`

Ajoutez-le n'importe où dans une page :

```jsx
import { LeadForm } from "@/components/LeadForm";

export default function Page() {
  return (
    <section className="mx-auto max-w-2xl p-10">
      <LeadForm service="construction" />
    </section>
  );
}
```

### Option 2 — Appel direct via `curl`

```bash
curl -X POST http://localhost:3000/api/lead \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Jean Kouassi",
    "phone": "+225 05 85 31 81 52",
    "email": "jean@example.com",
    "service": "construction",
    "message": "Je souhaite construire une villa R+1 à Cocody.",
    "consent": true
  }'
```

**Vérifications :**

- ✅ Vous recevez `{ ok: true, id: "TMA-..." }`
- ✅ Une ligne apparaît dans Google Sheets avec statut "Nouveau"
- ✅ Vous recevez un email HTML propre
- ✅ Si vous envoyez des fichiers (multipart) : un sous-dossier `TMA-XXX — Jean Kouassi` est créé dans Drive

---

## 11. Mise en production (Vercel)

1. Poussez votre code sur GitHub / GitLab
2. Vercel → **Add New Project** → importez le repo
3. **Environment Variables** → ajoutez **toutes** les variables de `.env.local`
   - ⚠️ Pour `GOOGLE_PRIVATE_KEY` : **Vercel convertit automatiquement** les `\n`. Collez la valeur entière y compris les guillemets et les `\n` littéraux.
4. **Deploy**

### Re-initialiser la Sheet en production

```bash
curl -X POST https://tmaholding.ci/api/lead/init \
  -H "x-init-token: VOTRE_TOKEN_PROD"
```

### Rate limiting multi-instance

Le rate limit en mémoire **ne fonctionne pas** sur Vercel (fonctions serverless). Pour un vrai rate limit production, remplacez `lib/leads/rateLimit.js` par une implémentation Upstash Redis :

```bash
npm install @upstash/ratelimit @upstash/redis
```

Puis utilisez :

```js
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const limiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "10 m"),
});
```

Variables d'env : `UPSTASH_REDIS_REST_URL` et `UPSTASH_REDIS_REST_TOKEN`.

---

## 12. Sécurité & bonnes pratiques

| Risque                        | Mitigation dans ce backend                                                 |
| ----------------------------- | -------------------------------------------------------------------------- |
| **XSS dans emails**           | `escapeHtml` appliqué à tous les champs affichés dans les notifications    |
| **Sheets formula injection**  | `neutralizeFormula` préfixe `'` devant `=`, `+`, `-`, `@`                  |
| **Spam / bots**               | Honeypot `website` invisible + Cloudflare Turnstile                        |
| **Brute-force / flood**       | Rate limit 5 req / 10 min / IP + dedup 48 h                                |
| **Fichiers malveillants**     | Whitelist MIME + taille max 8 Mo + 5 fichiers max                          |
| **Fuite de clés**             | `.env.local` dans `.gitignore`, secrets uniquement côté serveur            |
| **Enumération d'emails**      | Réponse identique pour un doublon (pas de message distinct)                |
| **Leak d'erreurs techniques** | Messages génériques côté client, détails uniquement dans les logs serveur  |

### À ne jamais faire

- ❌ Committer `.env.local` ou le JSON du service account
- ❌ Utiliser `GOOGLE_PRIVATE_KEY` dans du code frontend (`NEXT_PUBLIC_`)
- ❌ Désactiver le consent checkbox
- ❌ Stocker des mots de passe ou numéros de carte dans la Sheet

### À faire régulièrement

- ✅ **Rotation de la clé SMTP** tous les 6 mois
- ✅ **Audit des accès** au service account dans Google Cloud → IAM
- ✅ **Backup** de la Sheet (Fichier → Télécharger → .xlsx) tous les mois
- ✅ Vérifier que le domaine d'envoi email n'est pas sur une blacklist (<https://mxtoolbox.com>)

---

## 13. Dépannage (FAQ)

<details>
<summary><strong>« The caller does not have permission »</strong></summary>

Vous avez oublié de partager la Sheet ou le dossier Drive avec l'email du service account. Revenez aux étapes 4.2 et 5.2.

</details>

<details>
<summary><strong>« GOOGLE_PRIVATE_KEY manquant »</strong></summary>

Vérifiez que vous avez bien `.env.local` (pas `.env`) et que vous avez **redémarré** `npm run dev` après avoir ajouté la variable.

</details>

<details>
<summary><strong>L'email arrive en spam</strong></summary>

- Gmail → utilisez un domaine avec SPF/DKIM configurés
- SendGrid → activez **Sender Authentication** (obligatoire)
- Vérifiez que l'expéditeur (`LEAD_NOTIFY_FROM`) utilise un domaine que vous contrôlez

</details>

<details>
<summary><strong>Upload Drive échoue avec fichiers > quelques Mo</strong></summary>

Sur Vercel, les fonctions serverless ont une limite de body de 4,5 Mo par défaut. Réduisez `MAX_FILE_SIZE` dans `app/api/lead/route.js` à 4 Mo, ou utilisez un upload direct vers Drive via une URL signée (signed URL) côté client.

</details>

<details>
<summary><strong>Rate limit fonctionne pas en prod</strong></summary>

Le rate limit en mémoire n'est pas persistant entre les invocations serverless. Suivez la section **Rate limiting multi-instance** pour passer sur Upstash Redis.

</details>

<details>
<summary><strong>Captcha Turnstile bloque les utilisateurs légitimes</strong></summary>

Vérifiez que le domaine est bien déclaré dans Cloudflare → Turnstile → Settings. En mode **Managed**, les utilisateurs ne voient rien — si un challenge s'affiche, passez en mode **Non-interactive**.

</details>

---

## Support

- Contact technique : `contact@tmaholding.ci`
- Documentation officielle googleapis : <https://github.com/googleapis/google-api-nodejs-client>
- Nodemailer : <https://nodemailer.com>

— Backend TMA Holding — v1.0
