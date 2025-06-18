// app/layout.tsx
import { ThemeProvider } from '@/context/ThemeContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WEND-PANGA - Cours de Soutien Scolaire',
  description: 'Cours de soutien, vacances et préparation aux examens pour les classes de 3ème, Seconde, Première et Terminale.',
  keywords: 'cours de soutien, éducation, Burkina Faso, mathématiques, physique, préparation examens',
  openGraph: {
    title: 'WEND-PANGA - Excellence Académique',
    description: 'Discipline, Travail, Succès - Votre partenaire pour la réussite scolaire',
    url: 'https://wend-panga.opennumeric.com',
    siteName: 'WEND-PANGA',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}