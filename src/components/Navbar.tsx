'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Home, Info, BookOpen, BookmarkCheck, LineChart, Users, Mail, Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useTheme } from '@/context/ThemeContext'
import { usePathname } from 'next/navigation'
import Image from 'next/image';

// Définition des types
type NavItem = {
  name: string
  path: string
  icon: React.ReactNode
  subItems?: SubItem[]
}

type SubItem = {
  name: string
  path: string
}

type ThemeType = 'light' | 'dark' | 'romantique' | 'chocolat'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { theme } = useTheme()
  const pathname = usePathname()

  const navItems: NavItem[] = [
    { name: 'Accueil', path: '/', icon: <Home size={18} /> },
    { name: 'À propos', path: '/apropos', icon: <Info size={18} /> },
    {
      name: 'Programmes',
      path: '/programmes',
      icon: <BookOpen size={18} />,
      subItems: [
        { name: 'Cours de soutien', path: '/cours-soutien' },
        { name: 'Cours de vacances', path: '/cours-vacances' },
        { name: 'Cours en ligne', path: '/cours-en-ligne' }
      ]
    },
    { name: 'Résultats', path: '/resultats', icon: <BookmarkCheck size={18} /> },
    { name: 'Services', path: '/services', icon: <LineChart size={18} /> },
    { name: 'Inscription', path: '/inscription', icon: <Users size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ]

  // Configuration des thèmes avec typage correct
  const themeConfig: Record<ThemeType, {
    bg: string
    text: string
    hover: string
    active: string
    border: string
    dropdown: string
  }> = {
    light: {
      bg: 'bg-[#FFFEDC]',
      text: 'text-gray-900',
      hover: 'hover:text-blue-600',
      active: 'text-blue-600',
      border: 'border-blue-600',
      dropdown: 'bg-white shadow-lg'
    },
    dark: {
      bg: 'bg-[#084C64]',
      text: 'text-white',
      hover: 'hover:text-blue-300',
      active: 'text-blue-300',
      border: 'border-blue-300',
      dropdown: 'bg-gray-800 shadow-lg'
    },
    romantique: {
      bg: 'bg-[#DE0068]',
      text: 'text-white',
      hover: 'hover:text-pink-200',
      active: 'text-pink-200',
      border: 'border-pink-200',
      dropdown: 'bg-[#DE0068] shadow-lg'
    },
    chocolat: {
      bg: 'bg-[#EA925E]',
      text: 'text-white',
      hover: 'hover:text-amber-200',
      active: 'text-amber-200',
      border: 'border-amber-200',
      dropdown: 'bg-[#EA925E] shadow-lg'
    }
  }

  const currentTheme = themeConfig[theme as ThemeType]
  const isActive = (path: string) => pathname === path

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed w-full ${currentTheme.bg} backdrop-blur-md shadow-lg z-50`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
          >
            <Image src='/images/logo.png' alt='Logo WEND-PANGA' width={30} height={30} className='rounded-full' />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 items-center">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.subItems ? (
                <>
                  <button
                    className={`flex items-center gap-1 ${currentTheme.text} ${currentTheme.hover} transition-colors ${isActive(item.path) ? `${currentTheme.active} border-b-2 ${currentTheme.border}` : ''}`}
                  >
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`absolute top-full left-0 mt-2 w-48 rounded-md ${currentTheme.dropdown} py-1 z-50`}
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className={`block px-4 py-2 ${currentTheme.text} ${isActive(subItem.path) ? currentTheme.active : currentTheme.hover} transition-colors`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.path}
                  className={`${currentTheme.text} ${isActive(item.path) ? `${currentTheme.active} border-b-2 ${currentTheme.border}` : currentTheme.hover} transition-colors pb-1`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
         
        </nav>
        <div className="hidden md:block">
    <ThemeSwitcher />
  </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitcher />
          <button
            className={`p-2 rounded-md ${currentTheme.text} hover:bg-opacity-20 hover:bg-white transition-colors`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${currentTheme.bg} shadow-lg overflow-hidden`}
          >
            <div className="container mx-auto px-4 py-2 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className={`w-full flex items-center justify-between py-3 px-2 ${currentTheme.text} ${currentTheme.hover} transition-colors`}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          {item.name}
                        </div>
                        <ChevronDown size={16} className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-8"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.path}
                                className={`block py-2 ${currentTheme.text} ${isActive(subItem.path) ? currentTheme.active : currentTheme.hover} transition-colors`}
                                onClick={() => {
                                  setMobileMenuOpen(false)
                                  setOpenDropdown(null)
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`flex items-center gap-3 py-3 px-2 ${currentTheme.text} ${isActive(item.path) ? currentTheme.active : currentTheme.hover} transition-colors`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar