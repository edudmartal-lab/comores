# Comores Airways

Site vitrine professionnel en français pour Comores Airways, agence de voyage et de services aériens.

Le site est construit avec Next.js App Router, TypeScript et Tailwind CSS. Il est statique, sans base de données, sans paiement en ligne et sans réservation instantanée fictive. Les formulaires préparent un email vers le contact principal de Comores Airways.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

Commandes utiles :

```bash
npm run build
npm run start
npm run typecheck
```

## Déployer sur Vercel

1. Importer le dépôt GitHub dans Vercel.
2. Garder les réglages par défaut pour un projet Next.js.
3. Vérifier que la commande de build est `npm run build`.
4. Déployer.

Le site ne nécessite aucune variable d'environnement pour fonctionner.

## Structure

```text
app/
  page.tsx
  reservation/page.tsx
  services/page.tsx
  destinations/page.tsx
  omra-hajj/page.tsx
  contact/page.tsx
components/
  composants réutilisables du site
lib/
  site-data.ts
public/images/
  brand/
  destinations/
```

## Où ajouter les images

Les visuels de marque fournis ont été copiés dans `public/images/brand`.

Les images de destinations sont dans `public/images/destinations`. Plusieurs photos des Comores et du Karthala sont déjà intégrées au site. Les fichiers SVG restants sont des placeholders propres. Pour utiliser de vraies photos supplémentaires, remplacez les fichiers existants en gardant les mêmes noms, ou modifiez les chemins dans `lib/site-data.ts`.

## Contacts

Les coordonnées sont centralisées dans `lib/site-data.ts` (`COORDINATES`). Le site
n'affiche aucun nom de représentant : uniquement les téléphones et les emails.

- Téléphone (Paris) : +33 6 35 16 70 81
- Téléphone (Comores – Moroni) : +269 325 48 25
- Téléphone (Comores – Moroni) : +269 733 45 09
- Email : contact@comoresairways.com
- Réservation : resa@comoresairways.com
- Siège : Quartier Oazis, Moroni – Union des Comores

Recommandations :

- Photos : `.jpg` ou `.webp`, environ 1600 px de large.
- Logo : `.svg` ou `.png` transparent.
- Poids conseillé : moins de 500 Ko par image.

## Identité graphique

Couleurs principales :

- Bleu profond : `#0D47A1`
- Vert émeraude : `#0B8F66`
- Turquoise : `#00B6C7`
- Blanc cassé : `#F7F7F2`
- Gris clair : `#ECEFF3`

La direction visuelle reprend les courbes dynamiques bleu/vert/turquoise, l'inspiration aviation et océan Indien, avec une mise en page volontairement sobre et rassurante.

## Prochaines améliorations possibles

- Remplacer les placeholders par des photos réelles des Comores, de Mohéli, du Karthala et des destinations clés.
- Ajouter un vrai fichier logo officiel en SVG dans `public/images/brand`.
- Connecter les formulaires à un service d'envoi d'email si l'agence souhaite recevoir les demandes sans passer par `mailto`.
- Ajouter une page mentions légales lorsque les informations juridiques seront disponibles.
- Ajouter des témoignages clients vérifiés, sans inventer d'avis.
