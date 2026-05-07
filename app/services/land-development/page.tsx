import { Metadata } from 'next'
import Navbar from '@/components/vastara/Navbar'
import PageHero from '@/components/vastara/PageHero'
import IntroSection from '@/components/vastara/IntroSection'
import ApproachSection from '@/components/vastara/ApproachSection'
import ImageGallery from '@/components/vastara/ImageGallery'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'

export const metadata: Metadata = {
  title: 'Land Development | Vastara International Properties',
  description: 'Turning potential into high-value assets. Strategic land identification, development, and infrastructure planning.',
}

export default function LandDevelopmentPage() {
  const galleryImages = [
    '/images/land-development-1.jpg',
    '/images/land-development-2.jpg',
    '/images/land-development-3.jpg',
  ]

  const bulletPoints = [
    'Identification of high-potential land parcels',
    'Practical feasibility and land-use alignment',
    'Infrastructure readiness planning',
    'Value enhancement for development or exit',
  ]

  const paragraphs = [
    'We approach land development with a clear objective—convert potential into usable, high-value assets.',
    'Our team identifies strategically located land parcels and evaluates them from a practical lens: accessibility, future growth, usability, and development feasibility.',
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <PageHero
          title="Land Development"
          subtitle="Turning potential into high-value assets"
          backgroundImage="/images/land-development-1.jpg"
        />

        <IntroSection
          eyebrow="Core Competency"
          heading="Structured Development for Real-World Value"
          paragraphs={paragraphs}
        />

        <ApproachSection
          heading="Our Process"
          bullets={bulletPoints}
          image="/images/land-development-2.jpg"
        />

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] font-playfair mb-12 text-center">
              Development Projects
            </h3>
            <ImageGallery images={galleryImages} alt="Land Development Projects" />
          </div>
        </section>

        <VerticalCTASection />
      </main>
      <Footer />
    </>
  )
}
