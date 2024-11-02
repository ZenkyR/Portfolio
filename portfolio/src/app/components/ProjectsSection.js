import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "Site portfolio personnel développé avec Next.js, Tailwind CSS et Framer Motion. Mise en place d'une architecture moderne, optimisation des performances et implémentation d'animations fluides pour une expérience utilisateur engageante.",
      tags: ["Next.js", "React", "Node.js", "Tailwind"],
      image: "/img/portfolio.png",
      link: "https://www.kezon-lacheteau.fr/",
      github: "https://github.com/ZenkyR/Portfolio",
      highlights: [
        "Architecture basée sur les dernières pratiques Next.js",
        "Optimisation SEO et performance (100% Lighthouse)",
        "Animations fluides et responsive design"
      ]
    },
    {
    title: "Job Tourisme",
    description: "Plateforme de recherche d'emploi spécialisée dans le secteur du tourisme, développée chez Avicom. Un projet professionnel complet avec un système de filtrage avancé et une interface intuitive pour connecter les professionnels du tourisme.",
    tags: ["Symfony", "Twig", "Bootstrap", "MySQL"],
    image: "/img/job-tourisme.png",
    link: "https://job-tourisme.fr/",
    highlights: [
      "Système de filtrage avancé des offres",
      "Interface utilisateur optimisée pour différents appareils",
      "Gestion des offres et des candidatures"
    ]
  },
    {
      title: "CRM Avicom",
      description: "Développement d'un CRM sur mesure pour Avicom, une agence de communication. Gestion des clients, des projets et des factures. Interface intuitive et fonctionnalités avancées pour une gestion efficace de l'entreprise.",
      tags: ["Symfony", "Vue.js", "Bootstrap", "MySQL", "Docker"],
      image: "/img/crm.png",
      highlights: [
        "Gestion des clients et des projets",
        "Facturation et gestion des paiements",
        "Interface utilisateur intuitive"
      ]
    },
    {
      title: "ASTREC Application E-commerce ",
      description: "Création d'une plateforme e-commerce complète avec panier d'achat, système de paiement et gestion des commandes. Focus sur les bonnes pratiques de développement et la sécurité.",
      tags: ["Symfony", "React", "MySQL", "Stripe"],
      image: "/img/ecommerce-project.png",
      github: "https://github.com/ZenkyR/ASTREC",
      highlights: [
        "Authentication sécurisée",
        "Intégration paiement Stripe",
        "Gestion des commandes et des produits"
      ]
    },
    {
      title: "Virtualine - Moteur de Jeu 2D",
      description: "Développement d'un moteur de jeu en Flutter, conçu pour offrir une interface graphique intuitive dédiée à la création de jeux 2D. Ce projet personnel explore les capacités de Flutter dans le domaine du développement de jeux, avec des fonctionnalités avancées comme le rendu graphique, l'animation, le son, la gestion des collisions, la création de cartes, et la gestion des ennemis.",
      tags: ["Flutter", "Dart", "Moteur de jeu", "2D"],
      image: "/img/virtualine.png",
      github: "https://github.com/ZenkyR/Virtualine",
      highlights: [
        "Interface graphique intuitive pour la création de jeux 2D",
        "Système complet de rendu, d'animation et de son",
        "Gestion avancée des collisions, cartes, et ennemis"
      ]
    }
  ];    

  const maxHighlights = Math.max(...projects.map(project => project.highlights.length));

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <div className="mt-2 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90" />
                
                <div className="absolute top-4 right-4 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, maxHighlights).map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-sm text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full border border-blue-600/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;