'use client'

import { motion } from 'framer-motion'
import { Users, Book, BarChart2, Clipboard, Clock, Home, Sun } from 'lucide-react'
import Image from 'next/image'

const ApproachSection = ({ theme }: { theme: string }) => {
  // Configuration des thèmes optimisée
  const themeConfig = {
    light: {
      sectionBg: 'bg-gradient-to-br from-blue-50 to-gray-50',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      featureBg: 'bg-white',
      featureBorder: 'border-gray-200',
      iconPrimary: 'text-blue-600',
      iconSecondary: 'text-purple-600',
      accentGradient: 'from-blue-500 to-purple-600',
      shadow: 'shadow-lg'
    },
    dark: {
      sectionBg: 'bg-gradient-to-br from-gray-900 to-gray-800',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      featureBg: 'bg-gray-800',
      featureBorder: 'border-gray-700',
      iconPrimary: 'text-blue-400',
      iconSecondary: 'text-purple-400',
      accentGradient: 'from-blue-400 to-purple-500',
      shadow: 'shadow-lg shadow-gray-900/30'
    },
    romantique: {
      sectionBg: 'bg-gradient-to-br from-rose-50 to-pink-50',
      textPrimary: 'text-rose-900',
      textSecondary: 'text-rose-700', // Changé de rose-800 à rose-700 pour meilleure visibilité
      featureBg: 'bg-white',
      featureBorder: 'border-rose-200',
      iconPrimary: 'text-rose-600',
      iconSecondary: 'text-pink-600',
      accentGradient: 'from-rose-500 to-pink-600',
      shadow: 'shadow-lg shadow-rose-200/30'
    },
    chocolat: {
      sectionBg: 'bg-gradient-to-br from-amber-50 to-orange-50',
      textPrimary: 'text-amber-900',
      textSecondary: 'text-amber-800',
      featureBg: 'bg-white',
      featureBorder: 'border-amber-200',
      iconPrimary: 'text-amber-600',
      iconSecondary: 'text-orange-600',
      accentGradient: 'from-amber-500 to-orange-600',
      shadow: 'shadow-lg shadow-amber-200/30'
    }
  }

  const currentTheme = themeConfig[theme as keyof typeof themeConfig] || themeConfig.light

  const features = [
    { icon: <Users className="w-5 h-5" />, text: "Effectifs Reduits (max 60)", color: 'primary' },
    { icon: <Book className="w-5 h-5" />, text: "Supports pédagogiques", color: 'secondary' },
    { icon: <BarChart2 className="w-5 h-5" />, text: "Évaluations régulières", color: 'primary' },
    { icon: <Clipboard className="w-5 h-5" />, text: "Fiches de progression", color: 'secondary' },
    { icon: <Clock className="w-5 h-5" />, text: "Emplois du temps flexibles", color: 'primary' },
    { icon: <Home className="w-5 h-5" />, text: "Cours à domicile ", color: 'secondary' },
  ]

  return (
    <section className={`py-20 ${currentTheme.sectionBg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-center">
          {/* Partie texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <motion.h2
              className={`text-3xl md:text-4xl xl:text-[2.5rem] font-bold mb-6 leading-tight ${currentTheme.textPrimary}`}
              whileHover={{ scale: 1.02 }}
            >
              Notre Approche <span
                className={`bg-gradient-to-r ${currentTheme.accentGradient} bg-clip-text text-transparent`}
              >
                Pédagogique
              </span>
            </motion.h2>

            <motion.p
              className={`text-lg md:text-xl mb-8 ${currentTheme.textSecondary}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Une méthodologie centrée sur les besoins de chaque élève pour des progrès durables et mesurables.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className={`p-4 rounded-lg ${currentTheme.featureBg} border ${currentTheme.featureBorder} ${currentTheme.shadow} flex items-start gap-3 transition-all`}
                >
                  <div className={`p-2 rounded-full ${feature.color === 'primary'
                      ? `bg-${currentTheme.iconPrimary.replace('text-', 'bg-')}/10 ${currentTheme.iconPrimary}`
                      : `bg-${currentTheme.iconSecondary.replace('text-', 'bg-')}/10 ${currentTheme.iconSecondary}`
                    }`}>
                    {feature.icon}
                  </div>
                  <span className={`flex-1 ${currentTheme.textPrimary}`}>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partie image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 relative"
          >
            <div className={`relative rounded-2xl overflow-hidden ${currentTheme.shadow} border-2 ${currentTheme.featureBorder}`}>
              {/* Overlay de dégradé */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-20 ${currentTheme.accentGradient} z-10`}></div>

              {/* Image */}
              <Image
                src="/images/app.jpg"
                alt="Élèves en cours avec un professeur"
                width={600}
                height={400}
                className="w-full h-auto object-cover relative z-0"
                priority
              />

              {/* Badge animé */}
              <motion.div
                className={`absolute -bottom-4 -right-4 z-20 px-6 py-3 rounded-full ${currentTheme.featureBg} ${currentTheme.shadow} border ${currentTheme.featureBorder}`}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  delay: 0.4
                }}
              >
                <span className={`font-bold bg-gradient-to-r ${currentTheme.accentGradient} bg-clip-text text-transparent`}>
                  Méthode Validée
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ApproachSection