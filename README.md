# Portfolio — Kezon Lacheteau

Page personnelle statique, hébergée sur https://www.kezon-lacheteau.fr.

Elle ne présente ni projets ni prestations : l'activité commerciale est sur
[goth-tech.fr](https://www.goth-tech.fr).

## Stack

Next.js 16 (App Router, export statique), React 19, TypeScript, Tailwind CSS 4, motion.

Le site n'a aucun backend : `npm run build` produit du HTML statique dans `out/`.

## Développement

```bash
cd portfolio
npm install
npm run dev     # http://localhost:3000
npm run build   # export statique dans out/
npm run lint
```

## Contraintes de versions

Deux dépendances sont volontairement en retrait de la dernière version publiée :

- **TypeScript 6** — la 7.x est le compilateur natif et n'expose plus l'API JavaScript
  `require("typescript")` dont Next 16 a besoin pour son vérificateur de types.
- **ESLint 9** — `eslint-config-next` embarque `eslint-plugin-react`, qui ne supporte pas
  l'API de règles d'ESLint 10.
