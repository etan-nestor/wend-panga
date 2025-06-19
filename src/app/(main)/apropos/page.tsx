'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Award, Heart } from 'lucide-react'
import Image from 'next/image'

const AboutPage = ({ theme }: { theme: string }) => {
  const themeConfig = {
    light: {
      bg: 'bg-white',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      cardBg: 'bg-gray-50',
      border: 'border-gray-200',
      accent: 'text-blue-600'
    },
    dark: {
      bg: 'bg-gray-900',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      cardBg: 'bg-gray-800',
      border: 'border-gray-700',
      accent: 'text-blue-400'
    },
    romantique: {
      bg: 'bg-rose-50',
      textPrimary: 'text-rose-900',
      textSecondary: 'text-rose-700',
      cardBg: 'bg-white',
      border: 'border-rose-200',
      accent: 'text-rose-600'
    },
    chocolat: {
      bg: 'bg-amber-50',
      textPrimary: 'text-amber-900',
      textSecondary: 'text-amber-800',
      cardBg: 'bg-white',
      border: 'border-amber-200',
      accent: 'text-amber-600'
    }
  }

  const currentTheme = themeConfig[theme as keyof typeof themeConfig] || themeConfig.light

  const stats = [
    { value: "10+", label: "Années d'expérience", icon: <Award className="w-6 h-6" /> },
    { value: "500+", label: "Élèves accompagnés", icon: <Users className="w-6 h-6" /> },
    { value: "95%", label: "Taux de réussite", icon: <BookOpen className="w-6 h-6" /> },
    { value: "100%", label: "Engagement", icon: <Heart className="w-6 h-6" /> }
  ]

  return (
    <div className={`min-h-screen ${currentTheme.bg}`}>
      {/* Hero Section */}
      <section className={`py-20 ${currentTheme.bg}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${currentTheme.textPrimary}`}>
              Notre <span className={currentTheme.accent}>Histoire</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${currentTheme.textSecondary}`}>
              Wend-Panga, plus qu'un centre de soutien scolaire, une famille éducative
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`py-16 ${currentTheme.bg}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <Image
                src="/images/about.jpg"
                alt="Équipe pédagogique"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className={`text-3xl font-bold mb-6 ${currentTheme.textPrimary}`}>
                Notre <span className={currentTheme.accent}>Mission</span>
              </h2>
              <p className={`mb-6 ${currentTheme.textSecondary}`}>
                Fondé en 2013, Wend-Panga est né de la passion pour l'éducation et du constat des difficultés rencontrées par les élèves dans notre système scolaire.
              </p>
              <p className={`mb-6 ${currentTheme.textSecondary}`}>
                Notre approche combine méthodes pédagogiques modernes et valeurs traditionnelles africaines pour offrir un accompagnement sur mesure.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} text-center`}
                  >
                    <div className={`mx-auto mb-2 ${currentTheme.accent}`}>
                      {stat.icon}
                    </div>
                    <h3 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>{stat.value}</h3>
                    <p className={currentTheme.textSecondary}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl font-bold mb-4 ${currentTheme.textPrimary}`}>
              Nos <span className={currentTheme.accent}>Valeurs</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${currentTheme.textSecondary}`}>
              Les piliers fondamentaux de notre approche pédagogique
            </p>
          </motion.div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl ${currentTheme.cardBg} border ${currentTheme.border} shadow-sm`}
            >
              <h3 className={`text-xl font-bold mb-3 ${currentTheme.textPrimary}`}>Excellence</h3>
              <p className={currentTheme.textSecondary}>
                Nous visons l'excellence académique tout en cultivant la curiosité intellectuelle et l'amour d'apprendre.
              </p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl ${currentTheme.cardBg} border ${currentTheme.border} shadow-sm`}
            >
              <h3 className={`text-xl font-bold mb-3 ${currentTheme.textPrimary}`}>Équité</h3>
              <p className={currentTheme.textSecondary}>
                Nous croyons en un accès équitable à une éducation de qualité, indépendamment du milieu social.
              </p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl ${currentTheme.cardBg} border ${currentTheme.border} shadow-sm`}
            >
              <h3 className={`text-xl font-bold mb-3 ${currentTheme.textPrimary}`}>Communauté</h3>
              <p className={currentTheme.textSecondary}>
                Nous bâtissons une communauté éducative solidaire où élèves, parents et enseignants collaborent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage