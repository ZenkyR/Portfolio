"use client";

import { motion } from "motion/react";
import ArrowUpRight from "@/app/components/ui/ArrowUpRight";
import { person } from "@/app/config/site";

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 max-w-5xl mx-auto px-6 pt-16 pb-28 md:pt-24 md:pb-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass relative overflow-hidden rounded-3xl px-6 py-14 sm:px-8 sm:py-16 md:px-16 md:py-24 text-center"
      >
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-accent-strong/25 blur-[110px]"
        />

        <div className="relative">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent mb-5 sm:text-xs sm:mb-6">
            Et maintenant ?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-balance mb-5 sm:mb-6">
            Un site à faire, une machine
            <br className="hidden md:block" /> qui ne veut plus rien savoir ?
          </h2>
          <p className="text-sm text-muted max-w-lg mx-auto mb-8 leading-relaxed sm:text-base sm:mb-10">
            C&apos;est mon métier, et ça se passe chez {person.companyShort} : sites sur mesure, maintenance,
            informatique. Si c&apos;est plutôt une idée bizarre notée à 3h du matin, écrivez
            quand même — on verra ce qu&apos;on peut en tirer.
          </p>

          <a
            href={person.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent-strong to-fuchsia px-6 py-3 text-sm font-medium text-white shadow-[0_12px_45px_-10px] shadow-accent-strong/70 transition-shadow duration-300 hover:shadow-[0_16px_55px_-8px] hover:shadow-fuchsia/80 sm:px-8 sm:py-4 sm:text-base"
          >
            Me contacter via {person.companyShort}
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
