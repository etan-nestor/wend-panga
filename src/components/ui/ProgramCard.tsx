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
  // Couleurs selon le thème
  const themeColors = {
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      secondaryText: 'text-gray-600',
      border: 'border-gray-100',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      featureText: 'text-gray-700'
    },
    dark: {
      bg: 'bg-gray-800',
      text: 'text-white',
      secondaryText: 'text-gray-300',
      border: 'border-gray-700',
      iconBg: 'bg-blue-900/20',
      iconColor: 'text-blue-400',
      featureText: 'text-gray-300'
    },
    romantique: {
      bg: 'bg-gray-800',
      text: 'text-white',
      secondaryText: 'text-gray-300',
      border: 'border-gray-700',
      iconBg: 'bg-pink-900/20',
      iconColor: 'text-pink-400',
      featureText: 'text-gray-300'
    },
    chocolat: {
      bg: 'bg-gray-800',
      text: 'text-white',
      secondaryText: 'text-gray-300',
      border: 'border-gray-700',
      iconBg: 'bg-amber-900/20',
      iconColor: 'text-amber-400',
      featureText: 'text-gray-300'
    }
  }

  const colors = themeColors[theme as keyof typeof themeColors] || themeColors.light

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${colors.bg} border ${colors.border}`}
    >
      <div className={`w-12 h-12 rounded-full ${colors.iconBg} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>
        {title}
      </h3>
      <p className={`mb-4 ${colors.secondaryText}`}>
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className={`w-4 h-4 mt-0.5 ${colors.iconColor}`} />
            <span className={colors.featureText}>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ProgramCard