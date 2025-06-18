'use client'

import { motion } from 'framer-motion'

const AnimatedFloatingBadges = ({ theme }: { theme: string }) => {
  const badges = [
    { text: "Excellence", top: "5%", left: "5%", delay: 0.1, size: "md" },
    { text: "Rigueur", top: "75%", left: "80%", delay: 0.3, size: "lg" },
    { text: "Méthode", top: "30%", left: "75%", delay: 0.5, size: "sm" },
    { text: "Persévérance", top: "60%", left: "10%", delay: 0.7, size: "md" },
    { text: "Réussite", top: "15%", left: "70%", delay: 0.9, size: "sm" }
  ]

  // Configuration des couleurs et tailles selon le thème
  const themeColors = {
    light: {
      bg: 'bg-blue-600',
      text: 'text-white'
    },
    dark: {
      bg: 'bg-blue-400',
      text: 'text-white'
    },
    romantique: {
      bg: 'bg-pink-500',
      text: 'text-white'
    },
    chocolat: {
      bg: 'bg-amber-500',
      text: 'text-white'
    }
  }

  const sizeClasses = {
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2'
  }

  const colors = themeColors[theme as keyof typeof themeColors] || themeColors.light

  return (
    <>
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{ 
            delay: badge.delay,
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
            ease: "easeInOut"
          }}
          className={`absolute ${colors.bg} ${colors.text} ${sizeClasses[badge.size as keyof typeof sizeClasses]} rounded-full font-bold shadow-lg z-20`}
          style={{ 
            top: badge.top, 
            left: badge.left,
          }}
        >
          {badge.text}
        </motion.div>
      ))}
    </>
  )
}

export default AnimatedFloatingBadges