import { Metadata } from 'next'
import Navbar from '@/components/vastara/Navbar'
import LandDevelopmentContent from '@/components/vastara/LandDevelopmentContent'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'

export const metadata: Metadata = {
  title: 'Land Development | Vastara International Properties',
  description:
    'Turning potential into high-value assets. Strategic land identification, development, and infrastructure planning.',
}

export default function LandDevelopmentPage() {
  return (
    <>
      <Navbar />
      <LandDevelopmentContent />
      <VerticalCTASection />
      <Footer />
    </>
  )
}
