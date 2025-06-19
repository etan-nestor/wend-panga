'use client'

import { BookOpen, Calendar, Monitor, Home } from 'lucide-react'
import ProgramCard from '@/components/ui/ProgramCard'

const ProgramsSection = ({ theme }: { theme: string }) => {
  const themeConfig = {
    light: {
      sectionBg: 'bg-white',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      accent: 'text-blue-600'
    },
    dark: {
      sectionBg: 'bg-gray-900',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      accent: 'text-blue-400'
    },
    romantique: {
      sectionBg: 'bg-rose-50',
      textPrimary: 'text-rose-900',
      textSecondary: 'text-rose-700',
      accent: 'text-rose-600'
    },
    chocolat: {
      sectionBg: 'bg-amber-50',
      textPrimary: 'text-amber-900',
      textSecondary: 'text-amber-800',
      accent: 'text-amber-600'
    }
  }

  const currentTheme = themeConfig[theme as keyof typeof themeConfig] || themeConfig.light

  const programs = [
    { 
      title: 'Appuis Scolaires', 
      description: 'Cours de soutien réguliers pour consolider les acquis', 
      icon: <BookOpen className="w-6 h-6" />,
      features: [
        'Suivi hebdomadaire',
        'Groupes de niveau',
        'Bilans personnalisés'
      ]
    },
    { 
      title: 'Cours de Vacances', 
      description: 'Programmes intensifs pendant les congés scolaires', 
      icon: <Calendar className="w-6 h-6" />,
      features: [
        'Révisions accélérées',
        'Préparation rentrée',
        'Stages intensifs'
      ]
    },
    { 
      title: 'Cours en Ligne', 
      description: 'Plateforme digitale pour apprendre à distance', 
      icon: <Monitor className="w-6 h-6" />,
      features: [
        'Accès 24h/24',
        'Ressources numériques',
        'Tutoriels vidéo'
      ]
    },
    { 
      title: 'Cours à Domicile', 
      description: 'Enseignement personnalisé chez vous', 
      icon: <Home className="w-6 h-6" />,
      features: [
        'Horaires flexibles',
        'Programme sur mesure',
        '100% individualisé'
      ]
    }
  ]

  return (
    <section className={`py-16 ${currentTheme.sectionBg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${currentTheme.textPrimary}`}>
            Nos <span className={currentTheme.accent}>Programmes</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${currentTheme.textSecondary}`}>
            Des solutions adaptées à chaque besoin éducatif
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
              features={program.features}
              theme={theme}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection