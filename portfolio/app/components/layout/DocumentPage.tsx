// Gabarit des pages simples hors accueil (404, pages d'appli) : fond, largeur et marges communes.
import type { ReactNode } from "react";
import Background from "@/app/components/layout/Background";

type DocumentPageProps = { children: ReactNode; centered?: boolean };

const DocumentPage = ({ children, centered = false }: DocumentPageProps) => (
  <>
    <Background />
    <main className={`max-w-5xl mx-auto px-6 py-24 ${centered ? "flex min-h-svh flex-col justify-center" : ""}`}>
      {children}
    </main>
  </>
);

export default DocumentPage;
