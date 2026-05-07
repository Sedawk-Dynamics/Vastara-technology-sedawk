import Navbar from '@/components/vastara/Navbar'
import PageHero from '@/components/vastara/PageHero'
import BulletList from '@/components/vastara/BulletList'
import ImageGallery from '@/components/vastara/ImageGallery'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Investment Opportunities | Vastara International Properties',
  description:
    'Practical, structured, and growth-focused investment opportunities grounded in real factors.',
}

export default function InvestmentPage() {
  const bulletPoints = [
    'Carefully selected land opportunities',
    'Focus on long-term appreciation',
    'Clear positioning and usability',
    'Transparent evaluation approach',
  ]

  const galleryImages = [
    '/images/investment-1.jpg',
    '/images/investment-2.jpg',
    '/images/investment-3.jpg',
  ]

  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <PageHero
          title="Real Estate Investment Opportunities"
          subtitle="Practical, structured, and growth-focused"
          backgroundImage="/images/investment-1.jpg"
        />

        {/* INTRO SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm tracking-widest uppercase font-semibold">
                Investment Approach
              </span>
              <span className="h-px w-10 bg-[#C9A84C]" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-6 font-playfair leading-tight">
              Investing in Land with{" "}
              <span className="text-[#C9A84C]">Clarity & Confidence</span>
            </h2>

            {/* Content */}
            <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-3xl mx-auto">
              We focus on investment opportunities that are grounded in practicality—not speculation.
              Every opportunity is evaluated based on real factors like location growth, usability,
              infrastructure potential, and exit value.
            </p>

            <p className="text-[#6E6E6E] text-base leading-relaxed mt-4 max-w-3xl mx-auto">
              This ensures that investors are not just buying land, but entering a structured,
              well-thought-out opportunity designed for long-term value creation.
            </p>
          </div>
        </section>

        {/* CRITERIA SECTION */}
        <section className="py-20 bg-[#FAF8F3]">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-6 font-playfair">
                What Investors Can Expect
              </h2>

              <BulletList items={bulletPoints} />
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/investment-2.jpg"
                alt="Investment Land"
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
                Investment Opportunities
              </h2>
              <p className="text-[#6E6E6E] mt-2">
                Carefully curated land opportunities across high-growth locations
              </p>
            </div>

            <ImageGallery
              images={galleryImages}
              alt="Investment Opportunities"
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