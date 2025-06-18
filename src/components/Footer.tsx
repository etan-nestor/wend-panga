'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'

const Footer = () => {
  const { theme } = useTheme()
  
  const socialLinks = [
    { icon: <Facebook size={20} />, name: 'Facebook', url: '#' },
    { icon: <Twitter size={20} />, name: 'Twitter', url: '#' },
    { icon: <Instagram size={20} />, name: 'Instagram', url: '#' },
    { icon: <Linkedin size={20} />, name: 'LinkedIn', url: '#' },
  ]

  const contactInfo = [
    { icon: <Phone size={20} />, text: '+226 XX XX XX XX' },
    { icon: <Mail size={20} />, text: 'contact@wend-panga.bf' },
    { icon: <MapPin size={20} />, text: 'Ouagadougou, Burkina Faso' },
  ]

  const footerLinks = [
    { 
      title: 'Cours', 
      links: [
        { name: 'Mathématiques', path: '/cours/maths' },
        { name: 'Physique-Chimie', path: '/cours/physique' },
        { name: 'SVT', path: '/cours/svt' },
        { name: 'Français', path: '/cours/francais' },
        { name: 'Philosophie', path: '/cours/philo' }
      ] 
    },
    { 
      title: 'Ressources', 
      links: [
        { name: 'Programmes', path: '/ressources/programmes' },
        { name: 'Méthodologie', path: '/ressources/methodologie' },
        { name: 'Fiches de révision', path: '/ressources/fiches' },
        { name: 'Annales corrigées', path: '/ressources/annales' }
      ] 
    },
    { 
      title: 'Aide', 
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
        { name: 'Tarifs', path: '/tarifs' },
        { name: 'Mentions légales', path: '/mentions-legales' },
        { name: 'CGU', path: '/cgu' }
      ] 
    },
  ]

  // Configuration des thèmes cohérente avec le Navbar
  const themeConfig = {
    light: {
      bg: 'bg-gradient-to-br from-[#FFFEDC] to-gray-100',
      text: 'text-gray-800',
      hover: 'hover:text-blue-600',
      border: 'border-gray-300',
      icon: 'text-blue-600'
    },
    dark: {
      bg: 'bg-gradient-to-br from-[#084C64] to-gray-900',
      text: 'text-gray-300',
      hover: 'hover:text-blue-400',
      border: 'border-gray-700',
      icon: 'text-blue-400'
    },
    romantique: {
      bg: 'bg-gradient-to-br from-[#DE0068] to-gray-900',
      text: 'text-pink-100',
      hover: 'hover:text-pink-300',
      border: 'border-pink-700',
      icon: 'text-pink-300'
    },
    chocolat: {
      bg: 'bg-gradient-to-br from-[#EA925E] to-gray-900',
      text: 'text-amber-100',
      hover: 'hover:text-amber-300',
      border: 'border-amber-700',
      icon: 'text-amber-400'
    }
  }

  const currentTheme = themeConfig[theme as keyof typeof themeConfig]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${currentTheme.bg} py-12`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            whileHover={{ y: -5 }}
            className="space-y-4"
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WEND-PANGA
            </Link>
            <p className={currentTheme.text}>
              Votre partenaire pour l'excellence académique. Cours de soutien, 
              vacances et préparation aux examens pour tous les niveaux.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${currentTheme.text} ${currentTheme.hover} transition-colors`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className={`text-lg font-semibold ${currentTheme.text}`}>{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link 
                      href={link.path} 
                      className={`${currentTheme.text} ${currentTheme.hover} transition-colors`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className={`text-lg font-semibold ${currentTheme.text}`}>Contactez-nous</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-3 ${currentTheme.text}`}
                >
                  <span className={`${currentTheme.icon} mt-0.5`}>{info.icon}</span>
                  <span>{info.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className={`border-t ${currentTheme.border} mt-8 pt-8 text-center ${currentTheme.text}`}
        >
          <p>&copy; {new Date().getFullYear()} WEND-PANGA. Tous droits réservés.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer