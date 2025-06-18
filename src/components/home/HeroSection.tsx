'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import AnimatedBadges from '@/components/ui/AnimatedBadges'
import AnimatedFloatingBadges from '../ui/AnimatedFloatingBadges'

const HeroSection = ({ theme }: { theme: string }) => {
  const themeColors = {
    light: {
      bg: 'bg-gradient-to-br from-[#FFFEDC] to-gray-100',
      text: 'text-gray-900',
      buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
      buttonSecondary: 'bg-white hover:bg-gray-100 text-blue-600 border border-blue-600',
      floatingBadge: 'bg-blue-600'
    },
    dark: {
      bg: 'bg-gradient-to-br from-[#084C64] to-gray-900',
      text: 'text-white',
      buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
      buttonSecondary: 'bg-gray-800 hover:bg-gray-700 text-white',
      floatingBadge: 'bg-blue-400'
    },
    romantique: {
      bg: 'bg-gradient-to-br from-[#DE0068] to-gray-900',
      text: 'text-white',
      buttonPrimary: 'bg-pink-600 hover:bg-pink-700 text-white',
      buttonSecondary: 'bg-purple-800 hover:bg-purple-700 text-white',
      floatingBadge: 'bg-pink-500'
    },
    chocolat: {
      bg: 'bg-gradient-to-br from-[#EA925E] to-gray-900',
      text: 'text-white',
      buttonPrimary: 'bg-amber-600 hover:bg-amber-700 text-white',
      buttonSecondary: 'bg-brown-800 hover:bg-brown-700 text-white',
      floatingBadge: 'bg-amber-500'
    }
  }

  const colors = themeColors[theme as keyof typeof themeColors] || themeColors.light

  return (
    <section className={`relative pt-16 pb-32 md:py-25 overflow-hidden ${colors.bg} min-h-[80vh] flex items-center`}>
      {/* Arrière-plan avec opacité ajustée */}
      <div className="absolute inset-0 bg-[url('/images/10.jpg')] bg-cover bg-center opacity-30 mix-blend-multiply" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 order-2 md:order-1 mt-10 md:mt-0"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <AnimatedBadges />
          </motion.div>

          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${colors.text}`}>
            <span className="block">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block text-[25px] text-green-500 font-bold"
              >
                COURS D'APPUI WEND-PANGA Chez Mr LUC
              </motion.span>
            </span>
            <motion.span
              className="block text-2xl md:text-3xl mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Élever les ambitions, bâtir les réussites !
            </motion.span>
          </h1>

          <motion.p
            className={`text-xl mb-8 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            La clé de votre réussite scolaire avec notre accompagnement personnalisé
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="/programmes"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${colors.buttonPrimary} px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all`}
            >
              Découvrir nos programmes <ChevronRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:w-1/2 relative order-1 md:order-2"
        >
          <div className="relative">
            <motion.img
              src="/images/1.png"
              alt="Élèves en cours"
              className="w-3/4 max-w-sm mx-auto rounded-lg shadow-1xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <AnimatedFloatingBadges theme={theme} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection