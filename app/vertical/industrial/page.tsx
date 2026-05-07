import Navbar from '@/components/vastara/Navbar'
import PageHero from '@/components/vastara/PageHero'
import BulletList from '@/components/vastara/BulletList'
import ImageGallery from '@/components/vastara/ImageGallery'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industrial Land Readiness & Setup | Vastara International Properties',
  description:
    'Industrial land preparation and setup for operational efficiency and speed.',
}

export default function IndustrialPage() {
  const bulletPoints = [
    'Identification of suitable industrial land',
    'Infrastructure readiness (access, utilities, logistics)',
    'Site preparation for immediate use',
    'Support for manufacturing, warehousing, and operations',
  ]

  const galleryImages = [
    '/images/industrial-1.jpg',
    '/Industrial.png',
    '/images/industrial-3.jpg',
  ]

  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <PageHero
          title="Industrial Land Readiness & Setup"
          subtitle="Built for operational efficiency and speed"
          backgroundImage="/Industrial.png"
        />

        {/* INTRO SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm tracking-widest uppercase font-semibold">
                Industrial Expertise
              </span>
              <span className="h-px w-10 bg-[#C9A84C]" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-6 font-playfair leading-tight">
              From Land Selection to{" "}
              <span className="text-[#C9A84C]">Operational Readiness</span>
            </h2>

            {/* Content */}
            <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-3xl mx-auto">
              We enable businesses to enter and operate in India with clarity and speed.
              Our role goes beyond land sourcing—we ensure the land is operationally viable.
            </p>

            <p className="text-[#6E6E6E] text-base leading-relaxed mt-4 max-w-3xl mx-auto">
              From selecting the right location to preparing the site and aligning it with industrial requirements,
              we make sure businesses can move forward without unnecessary delays.
            </p>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 bg-[#FAF8F3]">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-6 font-playfair">
                What This Includes
              </h2>

              <BulletList items={bulletPoints} />
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/Industrial.png"
                alt="Industrial Land Setup"
                className="object-cover w-full h-full"
              />
            </div>

          </div>
        </section>

        {/* GALLERY */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E1E1E] font-playfair">
                Industrial Sites & Infrastructure
              </h2>
              <p className="text-[#6E6E6E] mt-2">
                Real-world readiness across industrial environments
              </p>
            </div>

            <ImageGallery
              images={galleryImages}
              alt="Industrial Development"
            />
          </div>
        </section>

        {/* CTA */}
        <VerticalCTASection />

      </main>

      <Footer />
    </>
  )
}