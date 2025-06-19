'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import AnimatedBadges from '@/components/ui/AnimatedBadges'
import AnimatedFloatingBadges from '../ui/AnimatedFloatingBadges'

const HeroSection = ({ theme }: { theme: string }) => {
  const themeColors = {
    light: {
      bg: 'bg-gradient-to-br from-[#FFFEDC] to-gray-100',
      text: 'text-gray-300',
      buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
      buttonSecondary: 'bg-white hover:bg-gray-100 text-blue-600 border border-blue-600',
      floatingBadge: 'bg-blue-600',
      overlayColor: 'bg-gradient-to-b from-black/70 from-black/70 '
    },
    dark: {
      bg: 'bg-gradient-to-br from-[#084C64] to-gray-900',
      text: 'text-white',
      buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
      buttonSecondary: 'bg-gray-800 hover:bg-gray-700 text-white',
      floatingBadge: 'bg-blue-400',
      overlayColor: 'from-[#084C64] to-gray-900/40'
    },
    romantique: {
      bg: 'bg-gradient-to-br from-[#DE0068] to-gray-900',
      text: 'text-white',
      buttonPrimary: 'bg-pink-600 hover:bg-pink-700 text-white',
      buttonSecondary: 'bg-purple-800 hover:bg-purple-700 text-white',
      floatingBadge: 'bg-pink-500',
      overlayColor: 'from-pink-900/40 to-gray-900/40'
    },
    chocolat: {
      bg: 'bg-gradient-to-br from-[#EA925E] to-gray-900',
      text: 'text-white',
      buttonPrimary: 'bg-amber-600 hover:bg-amber-700 text-white',
      buttonSecondary: 'bg-brown-800 hover:bg-brown-700 text-white',
      floatingBadge: 'bg-amber-500',
      overlayColor: 'from-amber-900/40 to-gray-900/40'
    }
  }

  const colors = themeColors[theme as keyof typeof themeColors] || themeColors.light

  return (
    <section className={`relative pt-22 pb-32 md:py-28 overflow-hidden ${colors.bg} min-h-[80vh] flex items-center`}>
      {/* Vidéo de fond */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/Background.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
        {/* Couche transparente avec dégradé selon le thème */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.overlayColor}`}></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 order-2 md:order-1 mt-6 md:mt-0"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <AnimatedBadges />
          </motion.div>

          <h1 className={`text-4xl md:text-6xl font-bold mb-2 ${colors.text}`}>

            <span className="block">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block text-[28px] font-bold"
              >
                {/* Texte principal avec dégradé de couleur */}
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  COURS D'APPUI WEND-PANGA
                </motion.span>

                {/* Partie "Mr LUC" avec animation spéciale */}
                <motion.span
                  className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
                  animate={{
                    scale: [1, 1.05, 1],
                    textShadow: ['0 0 0px rgba(0,0,0,0)', '0 0 10px rgba(236,72,153,0.5)', '0 0 0px rgba(0,0,0,0)']
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2
                  }}
                >
                  Chez Mr LUC
                </motion.span>

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
            className={`text-xl mb-8 ${theme === 'light' ? 'text-gray-200' : 'text-gray-200'}`}
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