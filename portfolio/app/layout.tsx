import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { description, knowsAbout, person, siteUrl, title } from "@/app/config/site";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${person.name}`,
  },
  description,
  applicationName: person.name,
  keywords: [
    person.name,
    person.companyShort,
    "Global Online Tech Hub",
    "création site web",
    "site web sur mesure",
    "maintenance site web",
    "informatique",
    "développeur web",
    "Ain",
    "Lyon",
  ],
  authors: [{ name: person.name, url: person.companyUrl }],
  creator: person.name,
  publisher: person.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: person.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#070510",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  url: siteUrl,
  jobTitle: person.jobTitle,
  description,
  sameAs: [person.companyUrl, person.linkedIn, person.gitHub],
  worksFor: {
    "@type": "Organization",
    name: person.company,
    url: person.companyUrl,
  },
  knowsAbout,
  areaServed: person.area,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-accent-strong focus:px-5 focus:py-3 focus:text-white"
        >
          Aller au contenu
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
