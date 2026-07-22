export type ProjectStatus = "encours" | "jouable" | "prototype" | "abandonne";

export type ProjectThumb = "portal" | "spectrum" | "checks" | "overlay";

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
  prototype: "Prototype",
  abandonne: "Abandonné",
};

export const statusLabel = ({ status, endedIn }: Project) =>
  endedIn ? `${statusLabels[status]} — ${endedIn}` : statusLabels[status];

export const projects: Project[] = [
  {
    name: "Non-euclidien",
    thumb: "portal",
    status: "encours",
    summary: "Un FPS roguelite où l'espace ne se comporte pas comme il devrait.",
    detail:
      "Des salles reliées par des portails qui repositionnent le joueur, changent sa gravité et le font ressortir sous un angle impossible. On n'y apprend pas une carte, on y apprend un système. Le plus dur n'est pas le portail : c'est que le monde reste lisible une fois qu'il a cessé d'être euclidien.",
    stack: ["Godot 4.6", "GDScript", "Jolt"],
  },
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
    name: "WebWatcher",
    thumb: "checks",
    status: "abandonne",
    endedIn: "2025",
    summary: "De la surveillance de sites, jusqu'à la facturation.",
    detail:
      "Inspection automatisée des pages, files d'attente pour étaler les vérifications, comptes, tableaux de bord et paiement. Pensé comme une offre à part de mon activité, mené assez loin pour être utilisable, puis arrêté.",
    stack: ["Next.js", "Puppeteer", "BullMQ", "Prisma", "Stripe"],
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
];
