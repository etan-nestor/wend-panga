'use client'

import { motion } from 'framer-motion'

const AnimatedBadges = () => {
  const badges = ["Discipline", "Travail", "Succès"]

  return (
    <div className="flex gap-2 mb-4">
      {badges.map((badge, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              delay: index * 0.2,
              type: 'spring',
              stiffness: 100,
              damping: 10
            } 
          }}
          whileHover={{ 
            y: -5,
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm`}
        >
          {badge}
        </motion.span>
      ))}
    </div>
  )
}

export default AnimatedBadges