import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio de Kezon Lacheteau - Développeur Fullstack étudiant à Epitech et alternant à Avicom',
  description: 'Portfolio de Kezon Lacheteau, étudiant en informatique à Epitech et alternant chez Avicom. Découvrez mes projets, mon CV et comment me contacter.',
 // image: '/images/kezon-lacheteau-portfolio.png',
  url: 'https://kezon-lacheteau.fr',
  locale: 'fr_FR',
  type: 'website',
  site_name: 'Portfolio de Kezon Lacheteau',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
