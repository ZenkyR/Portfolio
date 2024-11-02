import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">© 2024 Kezon Lacheteau - Tous droits réservés</p>
        <div className="flex gap-6">
          <a href="https://github.com/ZenkyR?tab=overview&from=2024-11-01&to=2024-11-01" target="_blank" rel="noopener noreferrer"
           className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/kezon-lacheteau-911656216/" target="_blank" rel="noopener noreferrer"
           className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:kezon.lacheteau@epitech.eu" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;