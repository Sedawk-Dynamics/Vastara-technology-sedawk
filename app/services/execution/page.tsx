import { Metadata } from 'next'
import Navbar from '@/components/vastara/Navbar'
import PageHero from '@/components/vastara/PageHero'
import IntroSection from '@/components/vastara/IntroSection'
import ApproachSection from '@/components/vastara/ApproachSection'
import ImageGallery from '@/components/vastara/ImageGallery'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'

export const metadata: Metadata = {
  title: 'Ground Execution & Excavation | Vastara International Properties',
  description: 'Built on strong groundwork and precision execution. Professional ground execution, excavation, and site preparation services.',
}

export default function ExecutionPage() {
  const galleryImages = [
    '/images/execution-1.jpg',
    '/images/execution-2.jpg',
    '/Excavation.png',
  ]

  const bulletPoints = [
    'Earthwork and land leveling',
    'Hard rock excavation',
    'Site clearing and debris management',
    'Preparing land for construction readiness',
  ]

  const paragraphs = [
    'Execution is where most projects fail—we treat it as a core strength.',
    'Backed by specialized execution units, we handle all critical groundwork required before development begins.',
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <PageHero
          title="Ground Execution & Excavation"
          subtitle="Built on strong groundwork and precision execution"
          backgroundImage="/images/execution-1.jpg"
        />

        <IntroSection
          eyebrow="Execution Excellence"
          heading="Execution That Drives Project Success"
          paragraphs={paragraphs}
        />

        <ApproachSection
          heading="Our Capabilities"
          bullets={bulletPoints}
          image="/images/execution-2.jpg"
        />

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] font-playfair mb-12 text-center">
              Execution Projects
            </h3>
            <ImageGallery images={galleryImages} alt="Execution Projects" />
          </div>
        </section>

        <VerticalCTASection />
      </main>
      <Footer />
    </>
  )
}
