import type { Metadata } from "next";
import Link from "next/link";
import DocumentPage from "@/app/components/layout/DocumentPage";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

const NotFound = () => (
  <DocumentPage centered>
      <div className="flex items-center gap-4 mb-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Erreur 404</p>
        <span className="h-px flex-1 bg-linear-to-r from-accent/50 to-transparent" />
      </div>

      <h1 className="text-[length:var(--text-display)] font-semibold tracking-[-0.045em] leading-[0.88]">
        <span className="block py-[0.06em] text-gradient">Page</span>
        <span className="block py-[0.06em] text-gradient">introuvable</span>
      </h1>

      <p className="mt-6 text-[length:var(--text-lead)] text-muted max-w-md leading-snug text-balance sm:mt-8 sm:max-w-xl sm:leading-relaxed">
        Soit l&apos;adresse est fausse, soit j&apos;ai supprimé la page sans faire de
        redirection. Statistiquement, c&apos;est la deuxième.
      </p>

      <div className="mt-8 sm:mt-12">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent-strong to-fuchsia px-6 py-3 text-sm font-medium text-white sm:px-7 sm:py-3.5 shadow-[0_10px_40px_-10px] shadow-accent-strong/70 transition-shadow duration-300 hover:shadow-[0_14px_50px_-8px] hover:shadow-fuchsia/70"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
          Revenir à l&apos;accueil
        </Link>
      </div>
  </DocumentPage>
);

export default NotFound;
