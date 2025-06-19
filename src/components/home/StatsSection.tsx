'use client'

import { motion } from 'framer-motion'
import { Award, User, GraduationCap, Clock } from 'lucide-react'

const StatsSection = ({ theme }: { theme: string }) => {
  // Configuration des thèmes enrichie
  const themeConfig = {
    light: {
      sectionBg: 'bg-gradient-to-br from-blue-50/30 to-gray-50',
      cardBg: 'bg-white',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
      iconColor: 'text-blue-600',
      border: 'border-white',
      shadow: 'shadow-lg shadow-blue-100/50',
      hoverShadow: 'hover:shadow-xl hover:shadow-blue-200/40'
    },
    dark: {
      sectionBg: 'bg-gradient-to-br from-gray-900 to-blue-900/20',
      cardBg: 'bg-gray-800',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      iconBg: 'bg-gradient-to-br from-blue-900/40 to-blue-800/30',
      iconColor: 'text-blue-400',
      border: 'border-gray-700',
      shadow: 'shadow-lg shadow-blue-900/30',
      hoverShadow: 'hover:shadow-xl hover:shadow-blue-800/30'
    },
    romantique: {
      sectionBg: 'bg-gradient-to-br from-pink-50/70 to-rose-50/50',
      cardBg: 'bg-white',
      textPrimary: 'text-rose-900',
      textSecondary: 'text-rose-700/90',
      iconBg: 'bg-gradient-to-br from-pink-100 to-rose-50',
      iconColor: 'text-rose-600',
      border: 'border-rose-100',
      shadow: 'shadow-lg shadow-rose-100/50',
      hoverShadow: 'hover:shadow-xl hover:shadow-rose-200/40'
    },
    chocolat: {
      sectionBg: 'bg-gradient-to-br from-amber-50/70 to-orange-50/50',
      cardBg: 'bg-white',
      textPrimary: 'text-amber-900',
      textSecondary: 'text-amber-800/90',
      iconBg: 'bg-gradient-to-br from-amber-100 to-amber-50',
      iconColor: 'text-amber-600',
      border: 'border-amber-100',
      shadow: 'shadow-lg shadow-amber-100/50',
      hoverShadow: 'hover:shadow-xl hover:shadow-amber-200/40'
    }
  }

  const currentTheme = themeConfig[theme as keyof typeof themeConfig] || themeConfig.light

  const stats = [
    { 
      value: '95%', 
      label: 'Taux de Réussite', 
      icon: <Award className="w-6 h-6" />,
      delay: 0.1
    },
    { 
      value: '50+', 
      label: 'Élèves Formés', 
      icon: <User className="w-6 h-6" />,
      delay: 0.2
    },
    { 
      value: '10+', 
      label: 'Professeurs Expérimentés', 
      icon: <GraduationCap className="w-6 h-6" />,
      delay: 0.3
    },
    { 
      value: '5ans+', 
      label: 'Expérience', 
      icon: <Clock className="w-6 h-6" />,
      delay: 0.4
    },
  ]

  return (
    <section className={`py-20 md:py-28 ${currentTheme.sectionBg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre avec animation améliorée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold mb-4 ${currentTheme.textPrimary}`}
            whileHover={{ scale: 1.02 }}
          >
            Notre <span className="underline decoration-wavy decoration-2 underline-offset-8">Impact</span>
          </motion.h2>
          <motion.p 
            className={`max-w-2xl mx-auto text-lg md:text-xl ${currentTheme.textSecondary}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Des résultats concrets qui parlent d'eux-mêmes
          </motion.p>
        </motion.div>

        {/* Grille de statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: stat.delay, 
                duration: 0.6,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ 
                y: -10,
                transition: { type: 'spring', stiffness: 300 } 
              }}
              className={`p-8 rounded-2xl ${currentTheme.cardBg} border ${currentTheme.border} ${currentTheme.shadow} ${currentTheme.hoverShadow} transition-all duration-300`}
            >
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ rotate: 5 }}
              >
                <div className={`p-4 rounded-2xl ${currentTheme.iconBg} ${currentTheme.shadow}`}>
                  <motion.div
                    className={currentTheme.iconColor}
                    whileHover={{ scale: 1.2 }}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.h3 
                className={`text-4xl font-extrabold mb-3 ${currentTheme.textPrimary}`}
                whileHover={{ scale: 1.05 }}
              >
                {stat.value}
              </motion.h3>
              
              <motion.p 
                className={`text-lg ${currentTheme.textSecondary} font-medium`}
                whileHover={{ x: 2 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Élément décoratif animé */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div 
            className={`inline-block h-1 w-24 rounded-full ${theme === 'light' ? 'bg-blue-600' : theme === 'dark' ? 'bg-blue-400' : theme === 'romantique' ? 'bg-rose-600' : 'bg-amber-600'}`}
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection