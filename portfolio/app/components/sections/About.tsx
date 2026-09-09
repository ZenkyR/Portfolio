"use client";

import { motion } from "motion/react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { reveal } from "@/app/lib/motion";
import DnaHelix from "@/app/components/ui/DnaHelix";
import { person } from "@/app/config/site";

const About = () => (
  <section id="about" aria-labelledby="about-title" className="scroll-mt-24 max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-40 md:pb-20">
    <SectionHeading id="about" index="01" title="À propos" />

    <motion.div
      {...reveal}
      className="glass relative isolate overflow-hidden rounded-3xl p-6 sm:p-8 md:p-12 lg:pr-56 space-y-5"
    >
      <p className="text-[length:var(--text-lead)] leading-relaxed text-balance">
        Le jour, je dirige{" "}
        <a
          href={person.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
        >
          {person.company}
        </a>{" "}
        : des sites sur mesure pour les artisans, les indépendants et les petites entreprises,
        écrits à la main parce que j&apos;aime pas les CMS.
      </p>
      <p className="text-[length:var(--text-lead)] leading-relaxed text-balance">
        Le reste du temps, je fais des jeux, des outils, et beaucoup d&apos;idées étranges,
        quelques plans pour devenir dictateur mondial... l&apos;ADN humain n&apos;est que des
        lignes de code mal optimisées, et je suis là pour le prouver.
      </p>
      <p className="text-muted leading-relaxed">
        Ce site est ma page perso. Pour les prestations, tout se passe sur{" "}
        <a
          href={person.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-paper underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
        >
          {new URL(person.companyUrl).host.replace(/^www\./, "")}
        </a>
        .
      </p>

      <DnaHelix />
    </motion.div>
  </section>
);

export default About;
