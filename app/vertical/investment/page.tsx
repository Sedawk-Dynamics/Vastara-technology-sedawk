import { Metadata } from 'next'
import Navbar from '@/components/vastara/Navbar'
import InvestmentContent from '@/components/vastara/InvestmentContent'
import InvestmentGallery from '@/components/vastara/InvestmentGallery'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'

export const metadata: Metadata = {
  title: 'Real Estate Investment Opportunities | Vastara International Properties',
  description:
    'Practical, structured and growth-focused real estate investment opportunities backed by location strength, infrastructure visibility and long-term value potential.',
}

export default function InvestmentPage() {
  return (
    <>
      <Navbar />
      <InvestmentContent />
      {/* <InvestmentGallery /> */}
      <VerticalCTASection />
      <Footer />
    </>
  )
}
