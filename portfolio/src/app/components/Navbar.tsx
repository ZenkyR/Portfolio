"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full px-6 py-4 backdrop-blur-sm bg-black/30 z-50"
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center gap-4">
        <a href="#home" className="text-lg font-bold hover:text-blue-400 transition-colors">
          Kezon Lacheteau
        </a>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-blue-400 transition-colors">
            À propos
          </a>
          <a
            href="https://www.goth-tech.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            GOTH
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
