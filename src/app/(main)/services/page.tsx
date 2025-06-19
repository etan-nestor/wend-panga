'use client'

import ServiceCard from '@/components/ui/ServiceCard'
import { motion } from 'framer-motion'
import { BookOpen, Home, Monitor, Calendar, Clock, Users } from 'lucide-react'


const ServicesPage = ({ theme }: { theme: string }) => {
  const themeConfig = {
    light: {
      bg: 'bg-white',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      cardBg: 'bg-gray-50',
      border: 'border-gray-200',
      accent: 'text-blue-600'
    },
    dark: {
      bg: 'bg-gray-900',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      cardBg: 'bg-gray-800',
      border: 'border-gray-700',
      accent: 'text-blue-400'
    },
    romantique: {
      bg: 'bg-rose-50',
      textPrimary: 'text-rose-900',
      textSecondary: 'text-rose-700',
      cardBg: 'bg-white',
      border: 'border-rose-200',
      accent: 'text-rose-600'
    },
    chocolat: {
      bg: 'bg-amber-50',
      textPrimary: 'text-amber-900',
      textSecondary: 'text-amber-800',
      cardBg: 'bg-white',
      border: 'border-amber-200',
      accent: 'text-amber-600'
    }
  }

  const currentTheme = themeConfig[theme as keyof typeof themeConfig] || themeConfig.light

  const services = [
    {
      title: "Soutien Scolaire",
      description: "Accompagnement régulier pour toutes les matières principales",
      icon: <BookOpen className="w-8 h-8" />,
      features: [
        "Primaire à Terminale",
        "Suivi personnalisé",
        "Bilans trimestriels"
      ]
    },
    {
      title: "Cours à Domicile",
      description: "Enseignement individuel à votre domicile",
      icon: <Home className="w-8 h-8" />,
      features: [
        "Horaires flexibles",
        "100% personnalisé",
        "Toutes matières"
      ]
    },
    {
      title: "Cours en Ligne",
      description: "Plateforme interactive avec ressources pédagogiques",
      icon: <Monitor className="w-8 h-8" />,
      features: [
        "Classes virtuelles",
        "Accès 24h/24",
        "Exercices interactifs"
      ]
    },
    {
      title: "Stages Vacances",
      description: "Programmes intensifs pendant les congés scolaires",
      icon: <Calendar className="w-8 h-8" />,
      features: [
        "Révisions accélérées",
        "Préparation examens",
        "Groupes de niveau"
      ]
    },
    {
      title: "Ateliers Thématiques",
      description: "Modules spécialisés par compétence",
      icon: <Clock className="w-8 h-8" />,
      features: [
        "Méthodologie",
        "Orientation scolaire",
        "Gestion du stress"
      ]
    },
    {
      title: "Groupes d'Étude",
      description: "Apprentissage collaboratif en petit groupe",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Max 6 élèves",
        "Échanges constructifs",
        "Tarifs réduits"
      ]
    }
  ]

  return (
    <div className={`min-h-screen ${currentTheme.bg}`}>
      {/* Hero Section */}
      <section className={`py-20 ${currentTheme.bg}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${currentTheme.textPrimary}`}>
              Nos <span className={currentTheme.accent}>Services</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${currentTheme.textSecondary}`}>
              Des solutions éducatives adaptées à chaque besoin et à chaque budget
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`py-16 ${currentTheme.bg}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                theme={theme}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl font-bold mb-6 ${currentTheme.textPrimary}`}>
            Prêt à <span className={currentTheme.accent}>commencer</span> ?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${currentTheme.textSecondary}`}>
            Contactez-nous pour trouver la solution qui correspond à vos besoins
          </p>
          <button className={`px-8 py-3 rounded-lg bg-gradient-to-r ${theme === 'light' ? 'from-blue-500 to-blue-600' : theme === 'dark' ? 'from-blue-400 to-blue-500' : theme === 'romantique' ? 'from-rose-500 to-pink-600' : 'from-amber-500 to-orange-600'} text-white font-semibold shadow-lg hover:shadow-xl transition-all`}>
            Nous contacter
          </button>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage