'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const TestimonialsSection = ({ theme }: { theme: string }) => {
  const themeConfig = {
    light: {
      sectionBg: 'bg-white',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      cardBg: 'bg-gray-50',
      border: 'border-gray-200',
      quoteColor: 'text-gray-300',
      accent: 'text-blue-600'
    },
    dark: {
      sectionBg: 'bg-gray-900',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      cardBg: 'bg-gray-800',
      border: 'border-gray-700',
      quoteColor: 'text-gray-500',
      accent: 'text-blue-400'
    },
    romantique: {
      sectionBg: 'bg-rose-50',
      textPrimary: 'text-rose-900',
      textSecondary: 'text-rose-700',
      cardBg: 'bg-white',
      border: 'border-rose-200',
      quoteColor: 'text-rose-200',
      accent: 'text-rose-600'
    },
    chocolat: {
      sectionBg: 'bg-amber-50',
      textPrimary: 'text-amber-900',
      textSecondary: 'text-amber-800',
      cardBg: 'bg-white',
      border: 'border-amber-200',
      quoteColor: 'text-amber-200',
      accent: 'text-amber-600'
    }
  }

  const currentTheme = themeConfig[theme as keyof typeof themeConfig] || themeConfig.light

  const testimonials = [
    {
      quote: "Grâce à Wend-Panga, j'ai pu améliorer mes notes en maths de 3 points en un trimestre.",
      author: "Aïcha K., Terminale S",
      role: "Élève"
    },
    {
      quote: "L'approche personnalisée a permis à mon fils de reprendre confiance en lui.",
      author: "M. Traoré",
      role: "Parent d'élève"
    },
    {
      quote: "Les cours de vacances m'ont bien préparé pour ma rentrée en Première.",
      author: "Boubacar D.",
      role: "Élève"
    }
  ]

  return (
    <section className={`py-16 ${currentTheme.sectionBg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${currentTheme.textPrimary}`}>
            Ils <span className={currentTheme.accent}>témoignent</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${currentTheme.textSecondary}`}>
            Ce que nos élèves et parents disent de nous
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-lg border ${currentTheme.border} ${currentTheme.cardBg} shadow-sm hover:shadow-md transition-all`}
            >
              <Quote className={`w-8 h-8 mb-4 ${currentTheme.quoteColor}`} />
              <p className={`italic mb-4 ${currentTheme.textSecondary}`}>
                "{testimonial.quote}"
              </p>
              <div>
                <p className={`font-semibold ${currentTheme.textPrimary}`}>
                  {testimonial.author}
                </p>
                <p className={`text-sm ${currentTheme.textSecondary}`}>
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection