"use client";

import { motion } from "motion/react";
import ArrowUpRight from "@/app/components/ui/ArrowUpRight";
import { person } from "@/app/config/site";

const lines = person.name.split(" ");

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="glass inline-flex w-fit items-center gap-2.5 rounded-full px-4 py-2 mb-10"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-paper/80">
          {person.tagline}
        </span>
      </motion.div>

      <h1 className="text-[length:var(--text-display)] font-semibold tracking-[-0.045em] leading-[0.88]">
        {lines.map((line, index) => (
          <span key={line} className="block overflow-hidden py-[0.06em]">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="block text-gradient"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-8 text-[length:var(--text-lead)] text-muted max-w-xl leading-relaxed text-balance"
      >
        Je passe mon temps libre à construire des systèmes : des moteurs, des overlays, des
        mondes qui tiennent mal debout. Beaucoup finissent au fond d&apos;un dossier, et
        c&apos;est très bien comme ça.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className="mt-12 flex flex-wrap items-center gap-4"
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent-strong to-fuchsia px-7 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px] shadow-accent-strong/70 transition-shadow duration-300 hover:shadow-[0_14px_50px_-8px] hover:shadow-fuchsia/70"
        >
          Voir les projets
          <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
        </a>
        <a
          href={person.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glass glass-hover group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
        >
          Mon activité, c&apos;est {person.companyShort}
          <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
