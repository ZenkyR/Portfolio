"use client";

import { motion } from "motion/react";
import { reveal } from "@/app/lib/motion";

type SectionHeadingProps = {
  id: string;
  index: string;
  title: string;
  intro?: string;
};

const SectionHeading = ({ id, index, title, intro }: SectionHeadingProps) => (
  <>
    <motion.div {...reveal} className="flex items-center gap-4 mb-4">
      <h2 id={`${id}-title`} className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {index} — {title}
      </h2>
      <span className="h-px flex-1 bg-linear-to-r from-accent/50 to-transparent" />
    </motion.div>

    {intro && (
      <motion.p {...reveal} className="text-sm text-muted mb-8 max-w-xl sm:text-base sm:mb-10">
        {intro}
      </motion.p>
    )}
  </>
);

export default SectionHeading;
