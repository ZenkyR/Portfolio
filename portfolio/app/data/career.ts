import { person } from "@/app/config/site";

export type CareerStep = {
  period: string;
  role: string;
  org: string;
  url: string;
  internal?: boolean;
};

export const career: CareerStep[] = [
  {
    period: "Depuis mars 2025",
    role: "Fondateur & développeur web",
    org: person.companyShort,
    url: person.companyUrl,
  },
  {
    period: "2023 — 2024",
    role: "Développeur Full-Stack Symfony/Vue.js",
    org: "Avicom'",
    url: "https://avicom.fr/",
  },
  {
    period: "2022 — 2024",
    role: "Formation Développeur Web",
    org: "Epitech",
    url: "https://www.epitech.eu/",
  },
  {
    period: "Tous les soirs",
    role: "Le reste, celui qui ne tient pas sur un CV",
    org: "Voir plus bas",
    url: "#projects",
    internal: true,
  },
];
