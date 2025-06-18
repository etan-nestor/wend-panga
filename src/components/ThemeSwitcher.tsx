'use client'

import { Moon, Sun, Heart, Coffee } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  const themes = {
    light: { 
      icon: <Sun size={18} />, 
      label: 'Clair',
      bg: 'bg-gradient-to-br from-[#FFFEDC] to-gray-300',
      text: 'text-amber-600'
    },
    dark: { 
      icon: <Moon size={18} />, 
      label: 'Nuit',
      bg: 'bg-gradient-to-br from-[#084C64] to-gray-900',
      text: 'text-blue-100'
    },
    romantique: { 
      icon: <Heart size={18} />, 
      label: 'Romantique',
      bg: 'bg-gradient-to-br from-[#DE0068] to-gray-900',
      text: 'text-pink-100'
    },
    chocolat: { 
      icon: <Coffee size={18} />, 
      label: 'Chocolat',
      bg: 'bg-gradient-to-br from-[#EA925E] to-gray-900',
      text: 'text-amber-900'
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`flex items-center gap-2 p-2 rounded-full ${themes[theme].bg} ${themes[theme].text} shadow-md hover:shadow-lg transition-all`}
      aria-label="Changer de thème"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {themes[theme].icon}
      </motion.div>
      <span className="sr-only md:not-sr-only font-medium">{themes[theme].label}</span>
    </motion.button>
  )
}