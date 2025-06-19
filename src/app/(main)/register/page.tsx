'use client'

import { motion } from 'framer-motion'
import { BookOpen, Home, Monitor, Calendar, User, School, Phone, Mail, Clock } from 'lucide-react'
import { useState } from 'react'

const RegisterPage = ({ theme }: { theme: string }) => {
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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    programType: '',
    subjects: [],
    grade: '',
    school: '',
    address: '',
    schedule: ''
  })

  const programTypes = [
    { value: 'support', label: 'Appuis Scolaires', icon: <BookOpen className="w-5 h-5" /> },
    { value: 'home', label: 'Cours à Domicile', icon: <Home className="w-5 h-5" /> },
    { value: 'online', label: 'Cours en Ligne', icon: <Monitor className="w-5 h-5" /> },
    { value: 'vacation', label: 'Stages Vacances', icon: <Calendar className="w-5 h-5" /> }
  ]

  const subjects = [
    'Mathématiques',
    'Physique-Chimie',
    'SVT',
    'Français',
    'Anglais',
    'Philosophie',
    'Histoire-Géographie'
  ]

  const grades = [
    'CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2',
    '6ème', '5ème', '4ème', '3ème',
    '2nde', '1ère', 'Terminale'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData(prev => {
      const newSubjects = checked
        ? [...prev.subjects, value]
        : prev.subjects.filter(subject => subject !== value)
      return { ...prev, subjects: newSubjects }
    })
  }

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
              Inscription aux <span className={currentTheme.accent}>cours</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${currentTheme.textSecondary}`}>
              Complétez ce formulaire pour inscrire votre enfant à nos programmes éducatifs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className={`py-16 ${currentTheme.bg}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`max-w-4xl mx-auto p-6 md:p-8 rounded-xl ${currentTheme.cardBg} border ${currentTheme.border} shadow-sm`}
          >
            <h2 className={`text-2xl font-bold mb-8 ${currentTheme.textPrimary}`}>
              Informations <span className={currentTheme.accent}>personnelles</span>
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block mb-2 ${currentTheme.textPrimary}`}>
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" /> Prénom de l'élève
                    </span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                    required
                  />
                </div>
                
                <div>
                  <label className={`block mb-2 ${currentTheme.textPrimary}`}>
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" /> Nom de l'élève
                    </span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block mb-2 ${currentTheme.textPrimary}`}>
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email du parent
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                    required
                  />
                </div>
                
                <div>
                  <label className={`block mb-2 ${currentTheme.textPrimary}`}>
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Téléphone du parent
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className={`block mb-2 ${currentTheme.textPrimary}`}>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Type de programme
                  </span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {programTypes.map((program) => (
                    <div key={program.value} className="flex items-center">
                      <input
                        type="radio"
                        id={program.value}
                        name="programType"
                        value={program.value}
                        checked={formData.programType === program.value}
                        onChange={handleChange}
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor={program.value}
                        className={`w-full p-3 rounded-lg border ${currentTheme.border} flex items-center gap-2 cursor-pointer peer-checked:border-2 peer-checked:${theme === 'light' ? 'border-blue-500 bg-blue-50' : theme === 'dark' ? 'border-blue-400 bg-blue-900/20' : theme === 'romantique' ? 'border-rose-500 bg-rose-50' : 'border-amber-500 bg-amber-50'}`}
                      >
                        <span className={currentTheme.accent}>{program.icon}</span>
                        <span className={currentTheme.textPrimary}>{program.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className={`block mb-2 ${currentTheme.textPrimary}`}>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Matières souhaitées
                  </span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {subjects.map((subject) => (
                    <div key={subject} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`subject-${subject}`}
                        value={subject}
                        checked={formData.subjects.includes(subject)}
                        onChange={handleCheckboxChange}
                        className={`mr-2 rounded ${currentTheme.accent.replace('text', 'border')}`}
                      />
                      <label htmlFor={`subject-${subject}`} className={currentTheme.textPrimary}>
                        {subject}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block mb-2 ${currentTheme.textPrimary}`}>
                    <span className="flex items-center gap-2">
                      <School className="w-4 h-4" /> Classe/Niveau
                    </span>
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                    required
                  >
                    <option value="">Sélectionnez la classe</option>
                    {grades.map((grade) => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className={`block mb-2 ${currentTheme.textPrimary}`}>
                    <span className="flex items-center gap-2">
                      <School className="w-4 h-4" /> École actuelle
                    </span>
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                    required
                  />
                </div>
              </div>
              
              {formData.programType === 'home' && (
                <div>
                  <label className={`block mb-2 ${currentTheme.textPrimary}`}>
                    <span className="flex items-center gap-2">
                      <Home className="w-4 h-4" /> Adresse pour cours à domicile
                    </span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={2}
                    className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                    required={formData.programType === 'home'}
                  ></textarea>
                </div>
              )}
              
              <div>
                <label className={`block mb-2 ${currentTheme.textPrimary}`}>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Disponibilités horaires
                  </span>
                </label>
                <textarea
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleChange}
                  rows={2}
                  className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.inputBg} ${currentTheme.textPrimary}`}
                  placeholder="Ex: Lundi et Mercredi après 16h, Samedi matin"
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg bg-gradient-to-r ${theme === 'light' ? 'from-blue-500 to-blue-600' : theme === 'dark' ? 'from-blue-400 to-blue-500' : theme === 'romantique' ? 'from-rose-500 to-pink-600' : 'from-amber-500 to-orange-600'} text-white font-semibold shadow-lg hover:shadow-xl transition-all`}
                >
                  Soumettre l'inscription
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default RegisterPage