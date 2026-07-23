import { person } from "@/app/config/site";

const links = [
  { href: person.gitHub, label: "GitHub" },
  { href: person.itch, label: "itch.io" },
  { href: person.linkedIn, label: "LinkedIn" },
  { href: person.companyUrl, label: "GOTH" },
];

const Footer = () => (
  <footer className="relative border-t border-white/10">
    <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-accent/60 to-transparent" />
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
          © {new Date().getFullYear()} {person.name}
        </p>
        <p className="text-xs text-muted/70">
          Le code de cette page est{" "}
          <a
            href={person.repoUrl}
            target="_blank"
            rel="me noopener noreferrer"
            className="underline decoration-muted/40 underline-offset-4 transition-colors hover:text-accent"
          >
            sur GitHub
          </a>
          , y compris les commits de 3h du matin.
        </p>
      </div>
      <nav className="flex gap-6">
        {links.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="me noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
