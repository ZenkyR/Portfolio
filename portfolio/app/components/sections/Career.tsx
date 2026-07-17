"use client";

import { motion } from "motion/react";
import ArrowUpRight from "@/app/components/ui/ArrowUpRight";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { revealDelayed } from "@/app/lib/motion";
import { career } from "@/app/data/career";

const Career = () => (
  <section
    id="career"
    aria-labelledby="career-title"
    className="scroll-mt-24 max-w-5xl mx-auto px-6 py-16 md:py-20"
  >
    <SectionHeading id="career" index="02" title="Parcours" intro="La partie qui tient sur un CV." />

    <ul className="space-y-4">
      {career.map((step, index) => (
        <motion.li key={step.org} {...revealDelayed(index)}>
          <a
            href={step.url}
            target={step.internal ? undefined : "_blank"}
            rel={step.internal ? undefined : "noopener noreferrer"}
            className="glass glass-hover group grid grid-cols-1 md:grid-cols-[11rem_1fr_auto] md:items-center gap-2 md:gap-8 rounded-2xl p-6 md:px-8"
          >
            <span className="font-mono text-xs text-accent">{step.period}</span>
            <span className="text-lg tracking-tight">{step.role}</span>
            <span className="flex items-center gap-1.5 text-muted transition-colors group-hover:text-accent">
              {step.org}
              {step.internal ? (
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              ) : (
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </span>
          </a>
        </motion.li>
      ))}
    </ul>
  </section>
);

export default Career;
