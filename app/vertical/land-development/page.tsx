import { Metadata } from 'next'
import Navbar from '@/components/vastara/Navbar'
import LandDevelopmentContent from '@/components/vastara/LandDevelopmentContent'
import LandDevelopmentGallery from '@/components/vastara/LandDevelopmentGallery'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'

export const metadata: Metadata = {
  title: 'Land Development | Vastara International Properties',
  description:
    'Understand the land. Respect its nature. Leave it better than before. Strategic land identification, development, and infrastructure planning.',
}

export default function VerticalLandDevelopmentPage() {
  return (
    <>
      <Navbar />
      <LandDevelopmentContent />
      {/* <LandDevelopmentGallery /> */}
      <VerticalCTASection />
      <Footer />
    </>
  )
}
