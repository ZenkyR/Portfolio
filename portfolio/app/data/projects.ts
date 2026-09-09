export type ProjectStatus = "encours" | "jouable" | "termine" | "prototype" | "abandonne";

export type ProjectThumb =
  | "portal"
  | "spectrum"
  | "checks"
  | "overlay"
  | "clues"
  | "funnel"
  | "rose";

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  name: string;
  thumb: ProjectThumb;
  status: ProjectStatus;
  endedIn?: string;
  summary: string;
  detail: string;
  stack: string[];
  links?: ProjectLink[];
};

const statusLabels: Record<ProjectStatus, string> = {
  encours: "En cours",
  jouable: "Jouable",
  termine: "Terminé",
  prototype: "Prototype",
  abandonne: "Abandonné",
};

export const statusLabel = ({ status, endedIn }: Project) =>
  endedIn ? `${statusLabels[status]} ${endedIn}` : statusLabels[status];

export const projects: Project[] = [
  {
    name: "ARIA Protocol",
    thumb: "spectrum",
    status: "jouable",
    summary: "Un bullet hell où le boss, c'est votre musique.",
    detail:
      "On charge un morceau, ARIA le découpe en sept bandes de fréquences et s'en sert pour attaquer. Elle regarde aussi comment on joue et s'adapte. Chaque musique donne un combat différent. Certaines sont injouables.",
    stack: ["Godot 4.7", "GDScript", "Analyse audio"],
    links: [
      { label: "Jouer sur itch.io", url: "https://zenkyr.itch.io/aria-protocol" },
      { label: "Code", url: "https://github.com/ZenkyR/Aria_Protocole" },
    ],
  },
  {
    name: "Long Coat",
    thumb: "clues",
    status: "prototype",
    summary: "Une aventure 3D qui a l'air douce.",
    detail:
      "Nom de code. Un monde qu'on rouvre par morceaux, des énigmes, une enquête, des combats au tour par tour à enchaînements. Mourir ne remet rien à zéro, ça renvoie au hub et ça débloque la suite. Ça commence mignon. Ça ne le reste pas.",
    stack: ["Godot 4.7", "GDScript", "3D"],
  },
  {
    name: "Rosace",
    thumb: "rose",
    status: "prototype",
    summary: "Où se classe une fiche Google selon l'endroit d'où on cherche.",
    detail:
      "Le rang d'un établissement dépend de l'endroit d'où on cherche, donc une position unique ne veut rien dire. Rosace rejoue la requête depuis 73 points semés autour de l'adresse, douze rayons et six anneaux, puis dessine la carte. En rose et pas en grille, parce qu'une zone de chalandise est un disque.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Puppeteer"],
  },
  {
    name: "Corbeau",
    thumb: "funnel",
    status: "termine",
    summary: "L'outil qui trie mes pistes commerciales à ma place.",
    detail:
      "Il ramasse ce qu'une entreprise publie sur elle-même, repère ce qui manque à sa présence en ligne, et classe les dossiers par ce qu'il y a à y gagner. Une étape, un script, la même base. Je relis tout avant que ça sorte.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Puppeteer", "API Claude"],
  },
  {
    name: "Fox Girl Compagnon",
    thumb: "overlay",
    status: "prototype",
    summary: "Une compagne Live2D qui vit par-dessus les autres applications.",
    detail:
      "Overlay système Android en Kotlin natif. Le sprite capte les touches qui le visent et laisse passer les autres. Rater ça rend inutilisable l'application en dessous.",
    stack: ["Kotlin", "Live2D Cubism", "OpenGL ES", "Android"],
    links: [{ label: "Code", url: "https://github.com/ZenkyR/foxgirlsupremacy" }],
  },
  {
    name: "Non-euclidien",
    thumb: "portal",
    status: "abandonne",
    summary: "Un FPS roguelite où l'espace ne se comporte pas comme il devrait.",
    detail:
      "Des salles reliées par des portails qui repositionnent le joueur, changent sa gravité et le font ressortir sous un angle impossible. Le portail était la partie facile. Garder le monde lisible une fois qu'il a cessé d'être euclidien, je n'y suis jamais arrivé.",
    stack: ["Godot 4.6", "GDScript", "Jolt"],
  },
  {
    name: "WebWatcher",
    thumb: "checks",
    status: "abandonne",
    endedIn: "2025",
    summary: "De la surveillance de sites, jusqu'à la facturation.",
    detail:
      "Inspection automatisée des pages, files d'attente pour étaler les vérifications, comptes, tableaux de bord, paiement. C'était une offre à part de mon activité. Ça marchait. J'ai arrêté.",
    stack: ["Next.js", "Puppeteer", "BullMQ", "Prisma", "Stripe"],
  },
];
