import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Code, GraduationCap, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          À Propos de Moi
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-400 text-center">Kezon Lacheteau</h3>
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-full border-4 border-blue-500 flex items-center justify-center bg-gray-800">
                <span className="text-6xl font-bold text-blue-400">KL</span>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-4 rounded-full"
              >
                <Code className="w-6 h-6" />
              </motion.div>
            </div>

            <div className="space-y-4 bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Basé à Lyon, France</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <span>Développeur Web Full-Stack</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span>2 ans d&apos;expérience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Qui suis-je ?</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                Passionné par le développement depuis mes débuts, je crée des expériences numériques 
                qui combinent design moderne et performances optimales. Mon approche est centrée sur 
                l&apos;innovation et la résolution créative des problèmes.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-400">Mon Parcours</h3>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4 bg-gray-800 p-4 rounded-lg"
                >
                  <GraduationCap className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Formation Développeur Web</h4>
                    <p className="text-gray-400">2022 - 2024 <a href="https://www.epitech.eu/" className="text-blue-400 hover:underline"
                     target="_blank" rel="noreferrer">Epitech</a></p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4 bg-gray-800 p-4 rounded-lg"
                >
                  <Award className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Développeur Full-Stack Symfony/Vue.js</h4>
                    <p className="text-gray-400">2023 - 2024 <a href="https://avicom.fr/" className="text-blue-400 hover:underline"
                     target="_blank" rel="noreferrer">Avicom&apos;</a></p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Technologies Préférées</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'sqlite'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;