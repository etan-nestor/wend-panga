'use client'

import { motion } from 'framer-motion'
import { BookOpen, User, ArrowRight } from 'lucide-react'

const QuickActions = ({ theme }: { theme: string }) => {
  const actions = [
    {
      title: "S'inscrire maintenant",
      icon: <User size={24} />,
      link: "/inscription",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Voir les résultats",
      icon: <BookOpen size={24} />,
      link: "/resultats",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Cours en ligne",
      icon: <BookOpen size={24} />,
      link: "/cours-en-ligne",
      color: "bg-purple-100 text-purple-600"
    }
  ]

  return (
    <section className={`py-16 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} border ${theme === 'light' ? 'border-gray-100' : 'border-gray-700'}`}
            >
              <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center mb-4`}>
                {action.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {action.title}
              </h3>
              <a href={action.link} className={`inline-flex items-center ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'} font-medium`}>
                Accéder <ArrowRight className="ml-1" size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickActions