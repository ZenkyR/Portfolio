export type StackGroup = {
  label: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    label: "Le jour",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Prisma",
      "Docker",
      "Référencement local",
      "Maintenance & sécurité",
      "Dépannage informatique",
      "Sauvegardes",
    ],
  },
  {
    label: "Le reste du temps",
    items: [
      "Godot",
      "GDScript",
      "Kotlin",
      "Flutter",
      "Live2D Cubism",
      "OpenGL ES",
      "Physique Jolt",
      "Blender",
      "Krita",
      "Analyse de spectre audio",
      "Géométrie non-euclidienne",
      "Plans pour contrôler le monde",
      "Idées de 3h du matin",
      "Abandon stratégique",
      "Classement de projets par niveau de regret",
      "Argumenter contre un moteur de jeu",
      "Lire des licences propriétaires",
    ],
  },
];
