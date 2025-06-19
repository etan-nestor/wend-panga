'use client'

import { motion } from 'framer-motion'
import { Award, User, GraduationCap, Clock } from 'lucide-react'

const StatsSection = ({ theme }: { theme: string }) => {
  // Configuration des thèmes synchronisée avec la navbar
  const themeConfig = {
    light: {
      sectionBg: 'bg-[#FFFEDC]',
      cardBg: 'bg-white',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-700',
      iconBg: 'from-blue-100 to-blue-50',
      iconColor: 'text-blue-600',
      border: 'border-blue-100',
      shadow: 'shadow-lg shadow-blue-100/50',
      hoverShadow: 'hover:shadow-xl hover:shadow-blue-200/40',
      accent: 'bg-gradient-to-r from-blue-600 to-purple-600'
    },
    dark: {
      sectionBg: 'bg-[#084C64]',
      cardBg: 'bg-gray-800',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      iconBg: 'from-blue-900/40 to-blue-800/30',
      iconColor: 'text-blue-400',
      border: 'border-gray-700',
      shadow: 'shadow-lg shadow-blue-900/30',
      hoverShadow: 'hover:shadow-xl hover:shadow-blue-800/30',
      accent: 'bg-gradient-to-r from-blue-400 to-cyan-400'
    },
    romantique: {
      sectionBg: 'bg-[#DE0068]',
      cardBg: 'bg-[#DE0068]',
      textPrimary: 'text-white',
      textSecondary: 'text-pink-100',
      iconBg: 'from-pink-500/30 to-rose-500/20',
      iconColor: 'text-pink-200',
      border: 'border-pink-300/30',
      shadow: 'shadow-lg shadow-pink-900/30',
      hoverShadow: 'hover:shadow-xl hover:shadow-pink-800/40',
      accent: 'bg-gradient-to-r from-pink-500 to-purple-500'
    },
    chocolat: {
      sectionBg: 'bg-[#EA925E]',
      cardBg: 'bg-[#EA925E]',
      textPrimary: 'text-white',
      textSecondary: 'text-amber-100',
      iconBg: 'from-amber-600/30 to-orange-500/20',
      iconColor: 'text-amber-200',
      border: 'border-amber-300/30',
      shadow: 'shadow-lg shadow-amber-900/30',
      hoverShadow: 'hover:shadow-xl hover:shadow-amber-800/40',
      accent: 'bg-gradient-to-r from-amber-600 to-orange-600'
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
        {/* Titre avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold mb-4 ${currentTheme.textPrimary}`}
            whileHover={{ scale: 1.02 }}
          >
            Notre <span 
              className="relative inline-block before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:rounded-full"
              style={{ background: theme === 'light' ? 'linear-gradient(90deg, #4f46e5, #c026d3)' : 
                              theme === 'dark' ? 'linear-gradient(90deg, #60a5fa, #22d3ee)' :
                              theme === 'romantique' ? 'linear-gradient(90deg, #ec4899, #a855f7)' :
                              'linear-gradient(90deg, #f59e0b, #ea580c)' }}
            >
              Impact
            </span>
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: stat.delay, 
                duration: 0.6,
                type: 'spring'
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { type: 'spring', stiffness: 300 } 
              }}
              className={`p-8 rounded-xl ${currentTheme.cardBg} border ${currentTheme.border} ${currentTheme.shadow} ${currentTheme.hoverShadow} transition-all duration-300 relative overflow-hidden`}
            >
              {/* Effet d'accent */}
              <div 
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: theme === 'light' ? 'linear-gradient(90deg, #4f46e5, #c026d3)' : 
                                theme === 'dark' ? 'linear-gradient(90deg, #60a5fa, #22d3ee)' :
                                theme === 'romantique' ? 'linear-gradient(90deg, #ec4899, #a855f7)' :
                                'linear-gradient(90deg, #f59e0b, #ea580c)' }}
              ></div>

              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1 }}
              >
                <div className={`p-4 rounded-full bg-gradient-to-r ${currentTheme.iconBg} ${currentTheme.shadow}`}>
                  <motion.div className={currentTheme.iconColor}>
                    {stat.icon}
                  </motion.div>
                </div>
              </motion.div>
              
              <h3 className={`text-4xl font-extrabold mb-3 ${currentTheme.textPrimary}`}>
                {stat.value}
              </h3>
              
              <p className={`text-lg ${currentTheme.textSecondary}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Séparateur animé */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div 
            className="h-1 w-24 rounded-full"
            style={{ background: theme === 'light' ? 'linear-gradient(90deg, #4f46e5, #c026d3)' : 
                            theme === 'dark' ? 'linear-gradient(90deg, #60a5fa, #22d3ee)' :
                            theme === 'romantique' ? 'linear-gradient(90deg, #ec4899, #a855f7)' :
                            'linear-gradient(90deg, #f59e0b, #ea580c)' }}
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