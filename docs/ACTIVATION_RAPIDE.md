# 🚀 TMA Holding — Activation Formspree en 2 minutes

Compte cible : **tmaholdingci@gmail.com**

## ÉTAPE 1 — Créer un compte Formspree (1 min)

1. Ouvre **<https://formspree.io/register>**
2. Inscris-toi avec `tmaholdingci@gmail.com` + un mot de passe
3. Valide l'email (Formspree envoie un lien de confirmation)

## ÉTAPE 2 — Créer le form (30 s)

1. Depuis ton dashboard Formspree, clique **+ New Form**
2. Nom : `TMA Holding — Leads`
3. Email de notification : `tmaholdingci@gmail.com` (pré-rempli)
4. Clique **Create Form**

## ÉTAPE 3 — Copier l'ID (5 s)

Tu es redirigé sur la page du form. L'URL ressemble à :

```
https://formspree.io/forms/xanbkgjz/submissions
                           └── ID ──┘
```

Copie cet **ID court à 8 caractères** (ex: `xanbkgjz`).

## ÉTAPE 4 — Coller dans `.env.local` (5 s)

Ouvre `/Users/mac/Downloads/tma-holding (3)/.env.local` et remplace :

```env
FORMSPREE_FORM_ID=xanbkgjz
```

(remplace `xanbkgjz` par **ton** ID)

Sauvegarde le fichier.

## ÉTAPE 5 — Dis-moi « ok c'est fait »

Je redémarre le serveur, j'envoie un lead de test, et tu vérifies ton email + ton dashboard Formspree.

---

## 🎁 Ce que tu obtiens avec Formspree

- **Dashboard** : toutes les soumissions listées avec recherche/filtre
- **Email instantané** : chaque lead arrive sur `tmaholdingci@gmail.com`
- **Export CSV** : pour garder une copie Sheets-compatible
- **Protection spam** : Akismet intégré en plus de notre honeypot
- **Webhooks** : pour pousser vers Slack, Zapier, etc. plus tard
- **50 soumissions/mois gratuites** (largement suffisant pour démarrer)
