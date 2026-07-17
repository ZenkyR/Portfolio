# kezon-lacheteau.fr

Ma page perso. Une page, six sections, mon nom en très gros.

Le jour je fais des sites pour de vrais gens, et ça se passe sur
[goth-tech.fr](https://www.goth-tech.fr), qui est le site sérieux. Ici je parle de ce
que je fabrique le soir : des moteurs, des overlays, des mondes qui tiennent mal
debout. Tout n'aboutit pas. C'est un peu le sujet.

Ce qu'il n'y a pas : de CV à télécharger, de barres de compétences à 85 %, de
formulaire de contact qui se transforme en relais de spam.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind 4, motion.

Quatre dépendances de production. Il y en avait sept, dont une bibliothèque d'icônes
complète pour afficher une flèche.

## Lancer le truc

```bash
cd portfolio
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Structure

```
app/
├── components/
│   ├── layout/    ce qui entoure la page
│   ├── sections/  ce qu'on lit
│   └── ui/        le logo et une flèche
├── config/        tout ce qui change si je change de nom
├── data/          les projets, le parcours, la stack
└── lib/           les animations
```

Une seule règle : rien en dur. Le nom, les URLs, les liens vivent dans
`config/site.ts`. Changer de domaine, c'est une ligne.

## Pourquoi TypeScript 6 et ESLint 9

Parce que j'ai essayé les dernières versions, et non.

**TypeScript 7** est le compilateur natif : il n'expose plus l'API JavaScript que le
vérificateur de types de Next charge au build. Next en conclut que TypeScript n'est
pas installé, tente de le réinstaller en boucle, et meurt.

**ESLint 10** casse `eslint-plugin-react`, qu'`eslint-config-next` embarque et qui
plafonne à `^9.7`. Next annonce fièrement supporter `eslint >=9.0.0`. Sa propre
dépendance n'est pas d'accord.

Les deux sauteront quand l'écosystème suivra. Inutile de les monter « juste pour
voir », c'est déjà fait.

## L'override postcss

Next embarque sa propre copie de postcss en 8.4.31, avec une XSS corrigée en 8.5.10.
`npm audit fix --force` propose de régler ça en installant **Next 9.3.3** : sept
versions majeures en arrière pour éviter une faille qui ne me concerne pas. Un
override déduplique sur 8.5.19 à la place.

À supprimer le jour où Next embarquera une version à jour.
