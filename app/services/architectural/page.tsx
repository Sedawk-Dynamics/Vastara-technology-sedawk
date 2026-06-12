import { Metadata } from 'next'
import Navbar from '@/components/vastara/Navbar'
import PageHero from '@/components/vastara/PageHero'
import ArchitectureShowcase from '@/components/vastara/ArchitectureShowcase'
import InteriorGallery from '@/components/vastara/InteriorGallery'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'

export const metadata: Metadata = {
  title:
    'Architectural Planning & Coordination | Vastara International Properties',
  description:
    'Design aligned with execution from day one. Architecture, civil and interior works that are visually refined, highly functional, and built to endure.',
}

export default function ArchitecturalPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <PageHero
          title="Architecture, Civil & Interior Works"
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