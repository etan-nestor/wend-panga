// app/page.tsx
'use client'

import { useTheme } from '@/context/ThemeContext'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import ProgramsSection from '@/components/home/ProgramsSection'
import ApproachSection from '@/components/home/ApproachSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import QuickActions from '@/components/home/QuickActions'

const HomePage = () => {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection theme={theme} />
        <QuickActions theme={theme} />
        <StatsSection theme={theme} />
        <ProgramsSection theme={theme} />
        <ApproachSection theme={theme} />
        <TestimonialsSection theme={theme} />
      </main>
    </div>
  )
}

export default HomePage