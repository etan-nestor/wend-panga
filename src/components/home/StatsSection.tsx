'use client'

import { motion } from 'framer-motion'
import { Award, User, GraduationCap, Clock } from 'lucide-react'

const StatsSection = ({ theme }: { theme: string }) => {
  // Configuration des thèmes cohérente avec HeroSection
  const themeConfig = {
    light: {
      sectionBg: 'bg-gray-50',
      cardBg: 'bg-white',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      border: 'border-gray-200'
    },
    dark: {
      sectionBg: 'bg-gray-900',
      cardBg: 'bg-gray-800',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      iconBg: 'bg-blue-900/30',
      iconColor: 'text-blue-400',
      border: 'border-gray-700'
    },
    romantique: {
      sectionBg: 'bg-[#DE0068]/10',
      cardBg: 'bg-gray-800',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      iconBg: 'bg-pink-900/30',
      iconColor: 'text-pink-400',
      border: 'border-gray-700'
    },
    chocolat: {
      sectionBg: 'bg-[#EA925E]/10',
      cardBg: 'bg-gray-800',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      iconBg: 'bg-amber-900/30',
      iconColor: 'text-amber-400',
      border: 'border-gray-700'
    }
  }

  const currentTheme = themeConfig[theme as keyof typeof themeConfig] || themeConfig.light

  const stats = [
    { value: '95%', label: 'Taux de Réussite', icon: <Award className={`w-6 h-6 ${currentTheme.iconColor}`} /> },
    { value: '50+', label: 'Élèves Formés', icon: <User className={`w-6 h-6 ${currentTheme.iconColor}`} /> },
    { value: '10+', label: 'Professeurs Expérimentés', icon: <GraduationCap className={`w-6 h-6 ${currentTheme.iconColor}`} /> },
    { value: '5ans+', label: 'Expérience', icon: <Clock className={`w-6 h-6 ${currentTheme.iconColor}`} /> },
  ]

  return (
    <section className={`py-16 ${currentTheme.sectionBg}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${currentTheme.textPrimary}`}>
            Notre Impact
          </h2>
          <p className={`max-w-2xl mx-auto ${currentTheme.textSecondary}`}>
            Des résultats concrets qui parlent d'eux-mêmes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center border ${currentTheme.border} ${currentTheme.cardBg}`}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${currentTheme.iconBg}`}>
                  {stat.icon}
                </div>
              </div>
              <h3 className={`text-3xl font-bold mb-2 ${currentTheme.textPrimary}`}>
                {stat.value}
              </h3>
              <p className={currentTheme.textSecondary}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection