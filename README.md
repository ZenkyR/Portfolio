# kezon-lacheteau.fr

Ma page perso. Une page, six sections, mon nom en très gros.

Le jour je fais des sites pour de vrais gens, et ça se passe sur
[goth-tech.fr](https://www.goth-tech.fr), qui est le site sérieux. Ici c'est le
reste : des jeux, des outils, des idées étranges, quelques plans pour devenir
dictateur mondial. La majorité est abandonnée.

Pas de CV à télécharger. Pas de barres de compétences à 85 %. Pas de formulaire de contact. Pas de photos de moi où je fais semblant de travailler.

## Ce qui bouge

Trois choses tournent en boucle.

Les compétences du soir sont dans une **tornade** : des anneaux empilés, chacun à
sa vitesse, qui dérivent d'autant plus qu'ils sont hauts. Les compétences sont des étiquettes, et elles tournent autour d'un axe invisible. Le tout est un peu hypnotique.

Les projets sont des **bestioles** qui se baladent. Elles fuient le curseur, celle
qu'on touche explose et se recompose en fiche, les autres détalent. Chacune porte
un tracé cardiaque : ce qui tourne bat, un prototype somnole, un projet abandonné
est en ligne plate avec les yeux éteints.

L'À propos affirme que l'ADN humain n'est que des lignes de code mal optimisées,
alors il y a une **hélice** à côté. Vraies bases appariées, A face à T, et un
troisième brin qui est le code. Ça s'appelle un ADN triplex,
et c'est le code qui prend la place du troisième brin.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind 4, motion.

Quatre dépendances de production.

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
│   ├── thumbs/    une vignette par projet
│   └── ui/        le reste, dont les bestioles et l'hélice
├── config/        tout ce qui change si je change de nom
├── data/          les projets, le parcours, la stack
└── lib/           les animations
```

Rien en dur. Le nom, les URLs, les liens vivent dans `config/site.ts`. Changer de
domaine tient en une ligne.

## Pourquoi TypeScript 6 et ESLint 9

Parce que j'ai essayé les dernières versions, et non.

**TypeScript 7** est le compilateur natif : il n'expose plus l'API JavaScript que
le vérificateur de types de Next charge au build. Next en conclut que TypeScript
n'est pas installé, tente de le réinstaller en boucle, et meurt. `typescript-eslint`
plafonne d'ailleurs à `typescript <6.1.0` dans ses peer dependencies.

**ESLint 10** casse `eslint-plugin-react`, qu'`eslint-config-next` embarque et qui
plafonne à `^9.7`. Next annonce supporter `eslint >=9.0.0`. Sa propre dépendance
n'est pas d'accord.

Les deux monteront quand l'écosystème suivra.
