import { Metadata } from 'next'
import Navbar from '@/components/vastara/Navbar'
import PageHero from '@/components/vastara/PageHero'
import IntroSection from '@/components/vastara/IntroSection'
import ApproachSection from '@/components/vastara/ApproachSection'
import ArchitectureShowcase from '@/components/vastara/ArchitectureShowcase'
import InteriorGallery from '@/components/vastara/InteriorGallery'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'

export const metadata: Metadata = {
  title: 'Architectural Planning & Coordination | Vastara International Properties',
  description:
    'Design aligned with execution from day one. Architecture, civil and interior works that are visually refined, highly functional, and built to endure.',
}

export default function ArchitecturalPage() {
  const bulletPoints = [
    'Functional and efficient planning',
    'Alignment with compliance and site conditions',
    'Coordination with engineers and consultants',
    'Design that supports execution, not just visuals',
  ]

  const paragraphs = [
    'Design is not treated as an isolated step—it is aligned with execution from the beginning.',
    'We provide architectural support that ensures every project is functional, compliant, and aligned with its intended use. Our coordination ensures that design decisions are practical and executable on ground.',
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <PageHero
          title="Architecture, Civil &amp; Interior Works"
          // subtitle="Design aligned with execution from day one"
          backgroundImage="/images/architectural-1.jpg"
        />

      

       

        <ArchitectureShowcase />

        <InteriorGallery />

        <VerticalCTASection />
      </main>
      <Footer />
    </>
  )
}
