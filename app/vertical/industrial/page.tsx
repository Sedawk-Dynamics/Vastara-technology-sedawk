import { Metadata } from 'next'
import Navbar from '@/components/vastara/Navbar'
import IndustrialContent from '@/components/vastara/IndustrialContent'
import IndustrialGallery from '@/components/vastara/IndustrialGallery'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'

export const metadata: Metadata = {
  title: 'Industrial Land Readiness & Setup | Vastara International Properties',
  description:
    'Enabling industrial growth through infrastructure, execution and local expertise. From land selection to operational readiness — built for industry, prepared for growth.',
}

export default function IndustrialPage() {
  return (
    <>
      <Navbar />
      <IndustrialContent />
      {/* <IndustrialGallery /> */}
      <VerticalCTASection />
      <Footer />
    </>
  )
}
