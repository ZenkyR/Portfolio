import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio de Kezon Lacheteau - Développeur Fullstack étudiant à Epitech et alternant à Avicom',
  description: 'Portfolio de Kezon Lacheteau, étudiant en informatique à Epitech et alternant chez Avicom. Découvrez mes projets, mon CV et comment me contacter.',
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
