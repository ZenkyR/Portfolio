import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className="h-screen flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Développeur Web Full-Stack
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            2 ans d&apos;expérience en développement web moderne
          </motion.p>
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-medium transition-colors">
              Me contacter
            </a>
            <a href="#projects" className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition-colors">
              Voir mes projets
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
