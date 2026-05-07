// "use client"

import Navbar from '@/components/vastara/Navbar'
import PageHero from '@/components/vastara/PageHero'
import ContentBlock from '@/components/vastara/ContentBlock'
import BulletList from '@/components/vastara/BulletList'
import ImageGallery from '@/components/vastara/ImageGallery'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farmhouse Planning & Development | Vastara International Properties',
  description:
    'Thoughtful farmhouse developments designed for lifestyle and long-term value.',
}

export default function FarmhousePage() {
  const bulletPoints = [
    'Thoughtful land subdivision and layout planning',
    'Balance of open spaces and functional design',
    'Focus on long-term usability and resale value',
    'End-to-end development execution',
  ]

  const galleryImages = [
    '/3.jpeg',
    '/4.jpeg',
    '/images/farmhouse-3.jpg',
  ]

  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <PageHero
          title="Farmhouse Planning & Development"
          subtitle="Designed for lifestyle and long-term value"
          backgroundImage="/farmhouse-planing.jpeg"
        />

        {/* INTRO SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm tracking-widest uppercase font-semibold">
                Our Philosophy
              </span>
              <span className="h-px w-10 bg-[#C9A84C]" />
            </div>

            {/* NEW HEADING (important improvement) */}
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-6 font-playfair leading-tight">
              A Structured Approach to{" "}
              <span className="text-[#C9A84C]">Farmhouse Development</span>
            </h2>

            {/* Content */}
            <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-3xl mx-auto">
              Our farmhouse developments are designed with a dual perspective—lifestyle and long-term value.
              Instead of treating farmhouses as standalone plots, we plan them as structured developments where
              layout, access, and environment work together.
            </p>

            <p className="text-[#6E6E6E] text-base leading-relaxed mt-4 max-w-3xl mx-auto">
              The focus remains on usability, privacy, and future appreciation rather than just visual appeal.
            </p>
          </div>
        </section>

        {/* APPROACH SECTION */}
        <section className="py-20 bg-[#FAF8F3]">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-6 font-playfair">
                How We Approach It
              </h2>

              <BulletList items={bulletPoints} />
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/ok.jpeg"
                alt="Farmhouse Planning"
                className="object-cover w-full h-full"
              />
            </div>

          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E1E1E] font-playfair">
                Project Gallery
              </h2>
              <p className="text-[#6E6E6E] mt-2">
                A glimpse into our thoughtfully developed spaces
              </p>
            </div>

            <ImageGallery
              images={galleryImages}
              alt="Farmhouse Development"
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