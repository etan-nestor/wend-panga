'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'romantique' | 'chocolat'
type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark', 'romantique', 'chocolat')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
    
    // Application des dégradés selon le thème
    const body = document.body
    body.className = ''
    switch(theme) {
      case 'dark':
        body.classList.add('bg-gradient-to-br', 'from-[#084C64]', 'to-gray-900')
        break
      case 'romantique':
        body.classList.add('bg-gradient-to-br', 'from-[#DE0068]', 'to-gray-900')
        break
      case 'chocolat':
        body.classList.add('bg-gradient-to-br', 'from-[#EA925E]', 'to-gray-900')
        break
      default: // light
        body.classList.add('bg-gradient-to-br', 'from-[#FFFEDC]', 'to-gray-100')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => {
      switch(prev) {
        case 'light': return 'dark'
        case 'dark': return 'romantique'
        case 'romantique': return 'chocolat'
        default: return 'light'
      }
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}