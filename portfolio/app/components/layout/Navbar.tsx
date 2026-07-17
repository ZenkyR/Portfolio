"use client";

import { motion } from "motion/react";
import ArrowUpRight from "@/app/components/ui/ArrowUpRight";
import Logo from "@/app/components/ui/Logo";
import { person } from "@/app/config/site";

const sections = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="fixed top-4 inset-x-0 z-50 px-4"
    >
      <nav className="glass-solid mx-auto flex max-w-2xl items-center justify-between gap-4 rounded-full px-5 py-3 text-sm sm:gap-6 sm:px-6">
        <a
          href="#home"
          aria-label="Retour en haut"
          className="transition-transform duration-300 hover:scale-110"
        >
          <Logo />
        </a>

        <div className="flex items-center gap-5">
          {sections.map(({ href, label }) => (
            <a key={href} href={href} className="text-muted transition-colors hover:text-paper">
              {label}
            </a>
          ))}
          <span className="h-4 w-px bg-white/15" />
          <a
            href={person.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-accent transition-colors hover:text-fuchsia"
          >
            {person.companyShort}
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
