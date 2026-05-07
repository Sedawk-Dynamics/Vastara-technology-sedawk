import { Metadata } from 'next'
import Navbar from '@/components/vastara/Navbar'
import PageHero from '@/components/vastara/PageHero'
import IntroSection from '@/components/vastara/IntroSection'
import ApproachSection from '@/components/vastara/ApproachSection'
import ImageGallery from '@/components/vastara/ImageGallery'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'

export const metadata: Metadata = {
  title: 'Architectural Planning & Coordination | Vastara International Properties',
  description: 'Design aligned with execution from day one. Architectural planning and coordination services for premium real estate projects.',
}

export default function ArchitecturalPage() {
  const galleryImages = [
    '/1.png',
    '/2.png',
    '/images/architectural-3.jpg',
  ]

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
          title="Architectural Planning & Coordination"
          subtitle="Design aligned with execution from day one"
          backgroundImage="/images/architectural-1.jpg"
        />

        <IntroSection
          eyebrow="Our Services"
          heading="Designing with Execution in Mind"
          paragraphs={paragraphs}
        />

        <ApproachSection
          heading="Our Approach"
          bullets={bulletPoints}
          image="/images/architectural-2.jpg"
        />

        <section className="pt-32 pb-24 px-6">
          <div className="max-w-7xl xl:max-w-[1400px] mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] font-playfair mb-12 text-center">
              Our Portfolio
            </h3>
            <ImageGallery images={galleryImages} alt="Architectural Projects" />
          </div>
        </section>

        <VerticalCTASection />
      </main>
      <Footer />
    </>
  )
}
