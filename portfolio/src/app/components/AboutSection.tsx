"use client";

import { motion } from "motion/react";
import { MapPin, Briefcase, Code, GraduationCap, Award } from "lucide-react";

type Step = {
  icon: typeof Award;
  title: string;
  period: string;
  org: string;
  url: string;
};

const parcours: Step[] = [
  {
    icon: Briefcase,
    title: "Fondateur — sites web et informatique",
    period: "Depuis mars 2025",
    org: "GOTH",
    url: "https://www.goth-tech.fr",
  },
  {
    icon: Award,
    title: "Développeur Full-Stack Symfony/Vue.js",
    period: "2023 - 2024",
    org: "Avicom'",
    url: "https://avicom.fr/",
  },
  {
    icon: GraduationCap,
    title: "Formation Développeur Web",
    period: "2022 - 2024",
    org: "Epitech",
    url: "https://www.epitech.eu/",
  },
];

const stack = ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"];

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          À propos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-full border-4 border-blue-500 flex items-center justify-center bg-gray-800">
                <span className="text-6xl font-bold text-blue-400">KL</span>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 right-4 md:right-12 bg-blue-500 text-white p-4 rounded-full"
              >
                <Code className="w-6 h-6" />
              </motion.div>
            </div>

            <div className="space-y-4 bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Ain et région lyonnaise</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Développeur web, fondateur de GOTH</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Qui suis-je ?</h3>
              <p className="text-gray-300 leading-relaxed">
                Développeur web, je dirige GOTH, où je conçois des sites sur mesure pour des
                artisans et des petites entreprises. J&apos;écris chaque projet à la main plutôt
                que de partir d&apos;un template, et je l&apos;accompagne dans la durée : mises à
                jour, sécurité et visibilité.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ce site est ma page personnelle. Pour les prestations, tout se passe sur{" "}
                <a
                  href="https://www.goth-tech.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  goth-tech.fr
                </a>
                .
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-400">Mon parcours</h3>
              <div className="space-y-4">
                {parcours.map((step, index) => (
                  <motion.div
                    key={step.org}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-4 bg-gray-800 p-4 rounded-lg"
                  >
                    <step.icon className="w-6 h-6 text-blue-400 shrink-0" />
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-gray-400">
                        {step.period}{" "}
                        <a
                          href={step.url}
                          className="text-blue-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {step.org}
                        </a>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {stack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
