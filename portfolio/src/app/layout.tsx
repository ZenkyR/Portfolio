import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kezon-lacheteau.fr"),
  title: "Kezon Lacheteau — Développeur web",
  description:
    "Page personnelle de Kezon Lacheteau, développeur web et fondateur de GOTH, sites web et informatique pour artisans et petites entreprises dans l'Ain et la région lyonnaise.",
  openGraph: {
    title: "Kezon Lacheteau — Développeur web",
    description: "Développeur web, fondateur de GOTH.",
    url: "https://www.kezon-lacheteau.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
