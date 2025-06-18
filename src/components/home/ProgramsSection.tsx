'use client'

import { BookOpen, Calendar, Monitor } from 'lucide-react'
import ProgramCard from '@/components/ui/ProgramCard'

const ProgramsSection = ({ theme }: { theme: string }) => {
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
    }
  ]

  return (
    <section className={`py-16 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <div className="container mx-auto px-4">
        {/* ... (même en-tête que précédemment) ... */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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