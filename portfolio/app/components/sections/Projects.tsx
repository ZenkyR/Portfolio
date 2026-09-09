"use client";

import { motion } from "motion/react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import ProjectSwarm from "@/app/components/ui/ProjectSwarm";
import { reveal, revealDelayed } from "@/app/lib/motion";
import Portal from "@/app/components/thumbs/Portal";
import Spectrum from "@/app/components/thumbs/Spectrum";
import Checks from "@/app/components/thumbs/Checks";
import Overlay from "@/app/components/thumbs/Overlay";
import Clues from "@/app/components/thumbs/Clues";
import Funnel from "@/app/components/thumbs/Funnel";
import Rose from "@/app/components/thumbs/Rose";
import { projects, type ProjectThumb } from "@/app/data/projects";

const thumbs: Record<ProjectThumb, () => React.JSX.Element> = {
  portal: Portal,
  spectrum: Spectrum,
  checks: Checks,
  overlay: Overlay,
  clues: Clues,
  funnel: Funnel,
  rose: Rose,
};

const Projects = () => (
  <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24 max-w-5xl mx-auto px-6 py-16 md:py-20">
    <SectionHeading
      id="projects"
      index="04"
      title="Projets"
      intro="Sept bestioles. Certaines sont mortes. Attrapez-en une, mais à vos risques."
    />

    <motion.div {...reveal}>
      <ProjectSwarm thumbs={thumbs} />
    </motion.div>

    <motion.p
      {...revealDelayed(projects.length, 0.08)}
      className="mt-8 text-xs text-muted/70 sm:text-sm"
    >
      Les autres restent en dépôt privé. J&apos;en ouvrirai peut-être d&apos;autres, si j&apos;y
      pense.
    </motion.p>
  </section>
);

export default Projects;
