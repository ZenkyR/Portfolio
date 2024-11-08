import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const cvPath = '/Kezon-Lacheteau-CV.pdf';
    window.open(cvPath, '_blank');
  };

  const menuItems = [
    { href: '#about', label: 'À propos' },
    { href: '#projects', label: 'Projets' },
    { href: '#skills', label: 'Compétences' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed w-full px-6 py-4 backdrop-blur-sm bg-black/30 z-50"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold"
          >
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Portfolio
            </a>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 px-5">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <Download size={18} />
              <span>CV</span>
            </motion.button>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-blue-400 transition-colors px-5"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-4 py-6 bg-black/95 backdrop-blur-sm mt-4 rounded-lg">
                <div className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="text-lg hover:text-blue-400 transition-colors py-2"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.button
                    onClick={handleDownloadCV}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Download size={18} />
                    <span>Télécharger CV</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
