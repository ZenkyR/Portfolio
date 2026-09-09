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
      "On charge n'importe quel morceau : ARIA l'analyse en direct sur sept bandes de fréquences et en tire ses attaques, tout en observant les habitudes du joueur pour s'y adapter. Le spectre affiché n'est pas un décor, c'est l'adversaire lui-même. Chaque musique donne un combat différent.",
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
    summary: "Une aventure 3D qui a l'air douce, et qui ne l'est pas.",
    detail:
      "Nom de code. Un monde interconnecté qu'on rouvre par morceaux, des énigmes, une enquête, et des combats au tour par tour à enchaînements. La mort ne remet rien à zéro : elle renvoie au hub et débloque la suite. Tout le pari tient à l'écart entre ce que le jeu montre au début et ce qu'il raconte à la fin.",
    stack: ["Godot 4.7", "GDScript", "3D"],
  },
  {
    name: "Rosace",
    thumb: "rose",
    status: "prototype",
    summary: "Où se classe une fiche Google selon l'endroit d'où on cherche.",
    detail:
      "Le rang d'un établissement dans les résultats locaux dépend du point de recherche, donc une position unique ne veut rien dire. Rosace rejoue la même requête depuis 73 points semés en rose autour de l'adresse, douze rayons et six anneaux, puis dessine la carte. Un semis carré aurait dépensé ses points dans les coins, là où la zone de chalandise n'est pas.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Puppeteer"],
  },
  {
    name: "Corbeau",
    thumb: "funnel",
    status: "termine",
    summary: "L'outil qui trie mes pistes commerciales à ma place.",
    detail:
      "Il rassemble ce qu'une entreprise publie déjà sur elle-même, mesure ce qui manque à sa présence en ligne, et classe les dossiers par ce qu'il y a à y gagner. Chaque étape est un script séparé qui écrit dans la même base, et rien ne sort de l'outil sans que je l'aie relu.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Puppeteer", "API Claude"],
  },
  {
    name: "Fox Girl Compagnon",
    thumb: "overlay",
    status: "prototype",
    summary: "Une compagne Live2D qui vit par-dessus les autres applications.",
    detail:
      "Overlay système Android en Kotlin natif. Toute la difficulté tient en une phrase : ne capter que les touches qui visent le sprite et laisser passer les autres, sinon l'app en dessous devient inutilisable.",
    stack: ["Kotlin", "Live2D Cubism", "OpenGL ES", "Android"],
    links: [{ label: "Code", url: "https://github.com/ZenkyR/foxgirlsupremacy" }],
  },
  {
    name: "Non-euclidien",
    thumb: "portal",
    status: "abandonne",
    summary: "Un FPS roguelite où l'espace ne se comporte pas comme il devrait.",
    detail:
      "Des salles reliées par des portails qui repositionnent le joueur, changent sa gravité et le font ressortir sous un angle impossible. On n'y apprend pas une carte, on y apprend un système. Le plus dur n'était pas le portail : c'était que le monde reste lisible une fois qu'il a cessé d'être euclidien. Je n'y suis pas arrivé.",
    stack: ["Godot 4.6", "GDScript", "Jolt"],
  },
  {
    name: "WebWatcher",
    thumb: "checks",
    status: "abandonne",
    endedIn: "2025",
    summary: "De la surveillance de sites, jusqu'à la facturation.",
    detail:
      "Inspection automatisée des pages, files d'attente pour étaler les vérifications, comptes, tableaux de bord et paiement. Pensé comme une offre à part de mon activité, mené assez loin pour être utilisable, puis arrêté.",
    stack: ["Next.js", "Puppeteer", "BullMQ", "Prisma", "Stripe"],
  },
];
