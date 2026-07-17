"use client";

import { motion } from "motion/react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { reveal } from "@/app/lib/motion";
import { person } from "@/app/config/site";

const About = () => (
  <section id="about" aria-labelledby="about-title" className="scroll-mt-24 max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-40 md:pb-20">
    <SectionHeading id="about" index="01" title="À propos" />

    <motion.div {...reveal} className="glass rounded-3xl p-6 sm:p-8 md:p-12 space-y-5">
      <p className="text-[length:var(--text-lead)] leading-relaxed text-balance">
        Le jour, je dirige <span className="font-medium text-accent">{person.company}</span> :
        des sites sur mesure pour les artisans, les indépendants et les petites entreprises,
        écrits à la main plutôt que sortis d&apos;un template, et suivis dans la durée.
      </p>
      <p className="text-[length:var(--text-lead)] leading-relaxed text-balance">
        Le reste du temps, je fais tenir des personnages par-dessus Android, j&apos;apprends à
        une IA à transformer une musique en attaques et j&apos;essaie de rendre lisible un espace
        qui a cessé d&apos;être euclidien. C&apos;est nettement moins rentable, mais c&apos;est là
        que j&apos;apprends le plus — et ça finit toujours par servir au travail.
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
    </motion.div>
  </section>
);

export default About;
