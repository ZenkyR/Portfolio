"use client";

import { motion } from "framer-motion";
import { Code, Globe, Database, Server, Terminal, Monitor } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      name: "Frontend",
      icon: Globe,
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript/TypeScript",
        "Vue.js",
        "Sass",
        "HTML/CSS",
        "Bootstrap",
        "Twig",
        "Flutter",
        "Dart",
      ],
    },
    {
      name: "Backend",
      icon: Server,
      items: [
        "Node.js",
        "Express",
        "Python",
        "PHP",
        "Django",
        "Ruby on Rails",
        "REST API",
        "Java",
        "Spring Boot",
        "Kotlin",
        "Laravel",
        "GO",
      ],
    },
    {
      name: "Base de données",
      icon: Database,
      items: ["MongoDB", "MySQL", "SQLite"],
    },
    {
      name: "DevOps & Cloud",
      icon: Server,
      items: ["Docker", "AWS", "Google Cloud"],
    },
    {
      name: "Outils",
      icon: Monitor,
      items: [
        "Git",
        "GitHub",
        "GiKraken",
        "GitBucket",
        "VS Code",
        "Figma",
        "Jira",
        "Notion",
        "Slack",
        "Trello",
        "Postman",
        "Discord",
      ],
    },
    {
      name: "Autres",
      icon: Terminal,
      items: ["Linux", "Bash", "Command Line", "Nginx", "Apache"],
    },

    {
      name: "Cadrer un projet et conceptualiser une solution web",
      icon: Code,
      items: [
        "Rédiger un Cahier Des Charges",
        "Rédiger des spécifications techniques",
        "Déployer un environnement de travail",
        "Réaliser une maquette",
        "Identifier les fonctionnalités à développer",
        "Rédiger une présentation",
      ],
    },
    {
      name: "Développer une solution web",
      icon: Code,
      items: [
        "Développer le prototype",
        "Rédiger le code de la solution",
        "Intégrer les différents éléments",
        "Implémenter la partie 'front-end'",
        "Implémenter la logique et la base de données",
        "Implémenter des règles d'authentification",
        "Implémenter un plan de tests",
        "Déployer une application web",
      ],
    },
    {
      name: "Déployer un système d’assurance qualité tout au long du cycle de vie d’une solution web",
      icon: Code,
      items: [
        "Rédiger une documentation technique",
        "Rédiger une documentation utilisateur",
        "Monitorer le lancement",
        "Identifier des améliorations qualitatives et de performance'",
        "Analyser la qualité de l’ergonomie et la qualité de l’accessibilité",
        "Rédiger un document argumentatif",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Compétences
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <skill.icon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-400">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
