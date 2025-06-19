'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface ProgramCardProps {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  theme: string
  index: number
}

const ProgramCard = ({ title, description, icon, features, theme, index }: ProgramCardProps) => {
  // Configuration complète des thèmes
  const themeConfig = {
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      featureText: 'text-gray-700',
      shadow: 'shadow-md hover:shadow-lg',
      checkColor: 'text-blue-500'
    },
    dark: {
      bg: 'bg-gray-800',
      text: 'text-white',
      secondaryText: 'text-gray-300',
      border: 'border-gray-700',
      iconBg: 'bg-blue-900/30',
      iconColor: 'text-blue-400',
      featureText: 'text-gray-300',
      shadow: 'shadow-lg hover:shadow-xl shadow-gray-900/30',
      checkColor: 'text-blue-400'
    },
    romantique: {
      bg: 'bg-white',
      text: 'text-rose-900',
      secondaryText: 'text-rose-700',
      border: 'border-rose-200',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600',
      featureText: 'text-rose-800',
      shadow: 'shadow-md hover:shadow-lg shadow-rose-200/30',
      checkColor: 'text-rose-500'
    },
    chocolat: {
      bg: 'bg-white',
      text: 'text-amber-900',
      secondaryText: 'text-amber-800',
      border: 'border-amber-200',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      featureText: 'text-amber-800',
      shadow: 'shadow-md hover:shadow-lg shadow-amber-200/30',
      checkColor: 'text-amber-500'
    }
  }

  const currentTheme = themeConfig[theme as keyof typeof themeConfig] || themeConfig.light

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`p-6 rounded-xl border ${currentTheme.border} ${currentTheme.shadow} transition-all ${currentTheme.bg}`}
    >
      <div className={`w-12 h-12 rounded-full ${currentTheme.iconBg} flex items-center justify-center mb-4 ${currentTheme.iconColor}`}>
        {icon}
      </div>
      
      <h3 className={`text-xl font-bold mb-2 ${currentTheme.text}`}>
        {title}
      </h3>
      
      <p className={`mb-4 ${currentTheme.secondaryText}`}>
        {description}
      </p>
      
      <ul className="space-y-2.5">
        {features.map((feature, i) => (
          <motion.li 
            key={i} 
            className="flex items-start gap-2"
            whileHover={{ x: 3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${currentTheme.checkColor}`} />
            <span className={currentTheme.featureText}>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ProgramCard