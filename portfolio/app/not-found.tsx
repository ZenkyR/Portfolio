import type { Metadata } from "next";
import Background from "@/app/components/layout/Background";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

const NotFound = () => (
  <>
    <Background />
    <main className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">Erreur 404</p>
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
        Cette page n&apos;est pas là
      </h1>
      <p className="text-muted max-w-md mb-10 leading-relaxed">
        Elle est peut-être ailleurs, dans une autre pièce. Le portail, lui, ne s&apos;ouvre que
        dans un sens.
      </p>
      <a
        href="/"
        className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent-strong to-fuchsia px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px] shadow-accent-strong/70 transition-shadow duration-300 hover:shadow-[0_14px_50px_-8px] hover:shadow-fuchsia/70"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
        Revenir à l&apos;accueil
      </a>
    </main>
  </>
);

export default NotFound;
