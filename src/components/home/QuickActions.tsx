'use client'

import { motion } from 'framer-motion'
import { BookOpen, User, ArrowRight, BookText, Layers } from 'lucide-react'

const QuickActions = ({ theme }: { theme: string }) => {
  // Configuration des thèmes améliorée
  const themeConfig = {
    light: {
      bg: 'bg-gray-50', // Plus doux que blanc pur
      cardBg: 'bg-white',
      border: 'border-gray-200',
      text: 'text-gray-800',
      accentText: 'text-blue-600 hover:text-blue-700',
      cardHover: 'hover:shadow-lg'
    },
    dark: {
      bg: 'bg-gray-900',
      cardBg: 'bg-gray-800',
      border: 'border-gray-700',
      text: 'text-gray-100',
      accentText: 'text-blue-400 hover:text-blue-300',
      cardHover: 'hover:shadow-gray-800'
    },
    romantique: {
      bg: 'bg-rose-50', // Fond plus subtil
      cardBg: 'bg-white',
      border: 'border-rose-200',
      text: 'text-rose-900',
      accentText: 'text-rose-600 hover:text-rose-700',
      cardHover: 'hover:shadow-rose-200'
    },
    chocolat: {
      bg: 'bg-amber-50',
      cardBg: 'bg-white',
      border: 'border-amber-200',
      text: 'text-amber-900',
      accentText: 'text-amber-600 hover:text-amber-700',
      cardHover: 'hover:shadow-amber-200'
    }
  }

  const currentTheme = themeConfig[theme as keyof typeof themeConfig] || themeConfig.light

  // Actions avec couleurs mieux adaptées
  const actions = [
    {
      title: "S'inscrire maintenant",
      icon: <User size={24} />,
      link: "/inscription",
      iconColor: {
        light: "bg-blue-100 text-blue-600",
        dark: "bg-blue-900/30 text-blue-300",
        romantique: "bg-rose-100 text-rose-600",
        chocolat: "bg-amber-100 text-amber-600"
      }
    },
    {
      title: "Résultats",
      icon: <BookOpen size={24} />,
      link: "/resultats",
      iconColor: {
        light: "bg-emerald-100 text-emerald-600",
        dark: "bg-emerald-900/30 text-emerald-300",
        romantique: "bg-fuchsia-100 text-fuchsia-600",
        chocolat: "bg-green-100 text-green-600"
      }
    },
    {
      title: "Cours",
      icon: <BookText size={24} />,
      link: "/cours",
      iconColor: {
        light: "bg-indigo-100 text-indigo-600",
        dark: "bg-indigo-900/30 text-indigo-300",
        romantique: "bg-purple-100 text-purple-600",
        chocolat: "bg-orange-100 text-orange-600"
      }
    },
    {
      title: "Ressources",
      icon: <Layers size={24} />,
      link: "/ressources",
      iconColor: {
        light: "bg-amber-100 text-amber-600",
        dark: "bg-amber-900/30 text-amber-300",
        romantique: "bg-pink-100 text-pink-600",
        chocolat: "bg-yellow-100 text-yellow-600"
      }
    }
  ]

  return (
    <section className={`py-16 ${currentTheme.bg}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl border ${currentTheme.cardBg} ${currentTheme.border} ${currentTheme.cardHover} transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-full ${action.iconColor[theme as keyof typeof action.iconColor] || action.iconColor.light} flex items-center justify-center mb-4`}>
                {action.icon}
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${currentTheme.text}`}>
                {action.title}
              </h3>
              <a 
                href={action.link} 
                className={`inline-flex items-center ${currentTheme.accentText} font-medium group transition-colors`}
              >
                Accéder 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickActions