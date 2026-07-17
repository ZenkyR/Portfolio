"use client";

import { motion } from "motion/react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { revealDelayed } from "@/app/lib/motion";
import { stack } from "@/app/data/stack";

const Stack = () => (
  <section id="stack" aria-labelledby="stack-title" className="scroll-mt-24 max-w-5xl mx-auto px-6 py-16 md:py-20">
    <SectionHeading
      id="stack"
      index="03"
      title="Stack"
      intro="Ce qui paie les factures, et ce que j'ouvre quand elles sont payées."
    />

    <div className="space-y-8">
      {stack.map((group, index) => (
        <motion.div key={group.label} {...revealDelayed(index)}>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted mb-3 sm:text-[0.7rem] sm:mb-4">
            {group.label}
          </p>
          <ul className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
            {group.items.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-accent/25 bg-accent-strong/10 px-3 py-1.5 text-xs leading-none text-accent transition-colors duration-300 hover:border-accent/60 hover:bg-accent-strong/20 sm:px-4 sm:py-2 sm:text-sm sm:leading-normal"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Stack;
