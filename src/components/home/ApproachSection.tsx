'use client'

import { motion } from 'framer-motion'
import { Check, Users, Book, BarChart2, Clipboard, Clock } from 'lucide-react'

const ApproachSection = ({ theme }: { theme: string }) => {
  const themeConfig = {
    light: {
      sectionBg: 'bg-gray-50',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      featureText: 'text-gray-700',
      iconColor1: 'text-blue-500',
      iconColor2: 'text-purple-500',
      cardBg: 'bg-white',
      border: 'border-gray-200'
    },
    dark: {
      sectionBg: 'bg-gray-900',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      featureText: 'text-gray-300',
      iconColor1: 'text-blue-400',
      iconColor2: 'text-purple-400',
      cardBg: 'bg-gray-800',
      border: 'border-gray-700'
    },
    romantique: {
      sectionBg: 'bg-[#DE0068]/10',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      featureText: 'text-gray-300',
      iconColor1: 'text-pink-400',
      iconColor2: 'text-purple-400',
      cardBg: 'bg-gray-800',
      border: 'border-gray-700'
    },
    chocolat: {
      sectionBg: 'bg-[#EA925E]/10',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      featureText: 'text-gray-300',
      iconColor1: 'text-amber-400',
      iconColor2: 'text-orange-400',
      cardBg: 'bg-gray-800',
      border: 'border-gray-700'
    }
  }

  const currentTheme = themeConfig[theme as keyof typeof themeConfig] || themeConfig.light

  const features = [
    { icon: <Users className="w-5 h-5" />, text: "Effectifs réduits (max 10 élèves)" },
    { icon: <Book className="w-5 h-5" />, text: "Supports pédagogiques actualisés" },
    { icon: <BarChart2 className="w-5 h-5" />, text: "Évaluations régulières" },
    { icon: <Clipboard className="w-5 h-5" />, text: "Fiches de progression" },
    { icon: <Clock className="w-5 h-5" />, text: "Emplois du temps flexibles" }
  ]

  return (
    <section className={`py-16 ${currentTheme.sectionBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${currentTheme.textPrimary}`}>
              Notre Méthodologie
            </h2>
            <p className={`mb-6 ${currentTheme.textSecondary}`}>
              Une approche centrée sur l'élève avec des méthodes éprouvées pour des résultats durables.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className={`flex items-start gap-3 ${currentTheme.featureText}`}
                >
                  <span className={`mt-0.5 ${index % 2 === 0 ? currentTheme.iconColor1 : currentTheme.iconColor2}`}>
                    {feature.icon}
                  </span>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className={`rounded-xl overflow-hidden shadow-xl border ${currentTheme.border} ${currentTheme.cardBg}`}>
              <img 
                src="/images/method.jpg" 
                alt="Méthode pédagogique" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ApproachSection