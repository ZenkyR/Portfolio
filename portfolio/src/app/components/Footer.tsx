const links = [
  { href: "https://github.com/ZenkyR", label: "GitHub" },
  { href: "https://www.linkedin.com/in/kezon-lacheteau-911656216/", label: "LinkedIn" },
  { href: "https://www.goth-tech.fr", label: "GOTH" },
];

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">© {new Date().getFullYear()} Kezon Lacheteau</p>
        <nav className="flex gap-6">
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
