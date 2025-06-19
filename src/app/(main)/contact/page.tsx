'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const ContactPage = ({ theme }: { theme: string }) => {
  const themeConfig = {
    light: {
      bg: 'bg-white',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      cardBg: 'bg-gray-50',
      border: 'border-gray-200',
      inputBg: 'bg-white',
      accent: 'text-blue-600'
    },
    dark: {
      bg: 'bg-gray-900',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      cardBg: 'bg-gray-800',
      border: 'border-gray-700',
      inputBg: 'bg-gray-700',
      accent: 'text-blue-400'
    },
    romantique: {
      bg: 'bg-rose-50',
      textPrimary: 'text-rose-900',
      textSecondary: 'text-rose-700',
      cardBg: 'bg-white',
      border: 'border-rose-200',
      inputBg: 'bg-white',
      accent: 'text-rose-600'
    },
    chocolat: {
      bg: 'bg-amber-50',
      textPrimary: 'text-amber-900',
      textSecondary: 'text-amber-800',
      cardBg: 'bg-white',
      border: 'border-amber-200',
      inputBg: 'bg-white',
      accent: 'text-amber-600'
    }
  }

  const currentTheme = themeConfig[theme as keyof typeof themeConfig] || themeConfig.light

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@wend-panga.edu",
      action: "Envoyer un message"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+226 25 45 67 89",
      action: "Appeler maintenant"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      value: "Secteur 15, Ouagadougou, Burkina Faso",
      action: "Voir sur la carte"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      value: "Lun-Ven: 8h-18h | Sam: 9h-13h",
      action: "Prendre rendez-vous"
    }
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
              Nous <span className={currentTheme.accent}>contacter</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${currentTheme.textSecondary}`}>
              Une question, une demande particulière ? Notre équipe est à votre écoute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className={`py-16 ${currentTheme.bg}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className={`text-2xl font-bold mb-8 ${currentTheme.textPrimary}`}>
                Nos <span className={currentTheme.accent}>coordonnées</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className={`p-6 rounded-xl ${currentTheme.cardBg} border ${currentTheme.border} shadow-sm`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${currentTheme.accent}`}>
                      {method.icon}
                    </div>
                    <h3 className={`font-bold mb-1 ${currentTheme.textPrimary}`}>{method.title}</h3>
                    <p className={`mb-3 ${currentTheme.textSecondary}`}>{method.value}</p>
                    <a href="#" className={`text-sm font-medium ${currentTheme.accent}`}>{method.action}</a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className={`text-2xl font-bold mb-8 ${currentTheme.textPrimary}`}>
                Envoyez-nous un <span className={currentTheme.accent}>message</span>
              </h2>
              
              <form className={`p-6 rounded-xl ${currentTheme.cardBg} border ${currentTheme.border} shadow-sm`}>
                <div className="mb-4">
                  <label className={`block mb-2 ${currentTheme.textPrimary}`}>Nom complet</label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                    placeholder="Votre nom"
                  />
                </div>
                
                <div className="mb-4">
                  <label className={`block mb-2 ${currentTheme.textPrimary}`}>Email</label>
                  <input 
                    type="email" 
                    className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                    placeholder="Votre email"
                  />
                </div>
                
                <div className="mb-4">
                  <label className={`block mb-2 ${currentTheme.textPrimary}`}>Téléphone</label>
                  <input 
                    type="tel" 
                    className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                    placeholder="Votre numéro"
                  />
                </div>
                
                <div className="mb-4">
                  <label className={`block mb-2 ${currentTheme.textPrimary}`}>Sujet</label>
                  <select 
                    className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                  >
                    <option>Sélectionnez un sujet</option>
                    <option>Demande d'information</option>
                    <option>Inscription</option>
                    <option>Rendez-vous</option>
                    <option>Autre</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className={`block mb-2 ${currentTheme.textPrimary}`}>Message</label>
                  <textarea 
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                    placeholder="Votre message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className={`w-full py-3 rounded-lg bg-gradient-to-r ${theme === 'light' ? 'from-blue-500 to-blue-600' : theme === 'dark' ? 'from-blue-400 to-blue-500' : theme === 'romantique' ? 'from-rose-500 to-pink-600' : 'from-amber-500 to-orange-600'} text-white font-semibold shadow-lg hover:shadow-xl transition-all`}
                >
                  Envoyer le message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage