"use client";

import { motion } from "motion/react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { revealDelayed } from "@/app/lib/motion";
import Portal from "@/app/components/thumbs/Portal";
import Spectrum from "@/app/components/thumbs/Spectrum";
import Checks from "@/app/components/thumbs/Checks";
import Overlay from "@/app/components/thumbs/Overlay";
import {
  projects,
  statusLabel,
  type ProjectStatus,
  type ProjectThumb,
} from "@/app/data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  encours: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  prototype: "border-accent/30 bg-accent-strong/10 text-accent",
  abandonne: "border-white/10 bg-white/5 text-muted",
};

const thumbs: Record<ProjectThumb, () => React.JSX.Element> = {
  portal: Portal,
  spectrum: Spectrum,
  checks: Checks,
  overlay: Overlay,
};

const Projects = () => (
  <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24 max-w-5xl mx-auto px-6 py-16 md:py-20">
    <SectionHeading
      id="projects"
      index="04"
      title="Projets"
      intro="Aucun n'a de client, aucun n'a de date de rendu. C'est exactement l'intérêt."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => {
        const Thumb = thumbs[project.thumb];

        return (
        <motion.article
          key={project.name}
          {...revealDelayed(index, 0.08)}
          className="glass glass-hover flex flex-col rounded-2xl p-5 sm:p-6 md:p-8"
        >
          <div
            aria-hidden="true"
            className="mb-5 flex h-24 items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-black/20 sm:mb-6 sm:h-28"
          >
            <Thumb />
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
            <span
              className={`rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] ${statusStyles[project.status]}`}
            >
              {statusLabel(project)}
            </span>
          </div>

          <p className="mb-3 text-paper/90 text-balance">{project.summary}</p>
          <p className="mb-6 text-sm leading-relaxed text-muted">{project.detail}</p>

          <ul className="mt-auto flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-accent/20 bg-accent-strong/10 px-2.5 py-1 font-mono text-[0.65rem] text-accent"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.article>
        );
      })}
    </div>

    <motion.p {...revealDelayed(4, 0.08)} className="mt-8 text-xs text-muted/70 sm:text-sm">
      Pas de liens : tout est en dépôt privé. J&apos;en ouvrirai peut-être un jour, si
      j&apos;y pense. Certains oui, d&apos;autres non. À voir.
    </motion.p>
  </section>
);

export default Projects;
