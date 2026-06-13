import { Metadata } from 'next'
import Navbar from '@/components/vastara/Navbar'
import PageHero from '@/components/vastara/PageHero'
import FarmhouseShowcase from '@/components/vastara/FarmhouseShowcase'
import FarmhouseGallery from '@/components/vastara/FarmhouseGallery'
import VerticalCTASection from '@/components/vastara/VerticalCTASection'
import Footer from '@/components/vastara/Footer'

export const metadata: Metadata = {
  title:
    'Farmhouse Planning & Development | Vastara International Properties',
  description:
    'A return to space, nature and meaningful living. Thoughtfully crafted farmhouse residences and retreats designed to respond to the land.',
}

const introParagraphs = [
  'Farmhouse living is more than a home; it is a lifestyle that reconnects people with nature, open skies, fresh air and a more intentional way of life. Away from the congestion of the city, these homes offer a sanctuary where architecture, landscape and everyday experiences come together to create a sense of calmness, freedom and wellbeing.Designed to celebrate natural surroundings, each farmhouse becomes a place for family gatherings, weekend retreats, wellness experiences, remote working, farming, entertaining guests or simply enjoying the beauty of the outdoors. Large verandahs, courtyards, expansive lawns, private pools and panoramic views transform daily living into an immersive experience of comfort and connection.Our farmhouse designs are thoughtfully crafted to respond to the land, climate and aspirations of their owners. Whether inspired by rustic countryside charm, contemporary luxury, Mediterranean elegance, or timeless vernacular architecture, every design balances aesthetics, functionality and a deep relationship with the landscape.From intimate weekend homes to expansive estate residences, these farmhouses are envisioned as places where memories are created, generations gather and life finds its natural rhythm.',

  // 'Designed to celebrate natural surroundings, each farmhouse becomes a place for family gatherings, weekend retreats, wellness experiences, remote working, farming, entertaining guests or simply enjoying the beauty of the outdoors. Large verandahs, courtyards, expansive lawns, private pools and panoramic views transform daily living into an immersive experience of comfort and connection.',

  // 'Our farmhouse designs are thoughtfully crafted to respond to the land, climate and aspirations of their owners. Whether inspired by rustic countryside charm, contemporary luxury, Mediterranean elegance, or timeless vernacular architecture, every design balances aesthetics, functionality and a deep relationship with the landscape.',

  // 'From intimate weekend homes to expansive estate residences, these farmhouses are envisioned as places where memories are created, generations gather and life finds its natural rhythm.',
]

const designPhilosophy = [
  {
    number: '01',
    title: 'Nature-Centric Planning',
    description:
      'Every farmhouse is positioned to maximise views, natural ventilation, daylight and outdoor experiences while preserving the character of the land.',
  },
  {
    number: '02',
    title: 'Indoor–Outdoor Living',
    description:
      'Verandahs, courtyards, terraces, decks, pools and landscaped gardens blur the boundaries between built spaces and nature.',
  },
  {
    number: '03',
    title: 'Timeless Architecture',
    description:
      'From sloping roofs and exposed materials to elegant contemporary forms, each design is created to remain relevant and beautiful for decades.',
  },
  {
    number: '04',
    title: 'Wellness & Retreat Living',
    description:
      'The homes encourage relaxation, mindfulness, family bonding and a deeper connection with the natural environment.',
  },
  {
    number: '05',
    title: 'Flexible Lifestyle Spaces',
    description:
      'Designed for personal use, weekend getaways, hospitality, Airbnb rentals, wellness retreats or multi-generational living.',
  },
]

export default function FarmhousePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <PageHero
          title="Farmhouse Planning & Development"
          // subtitle="A Return to Space, Nature & Meaningful Living"
          backgroundImage="/farmhouse-planing.jpeg"
        />

        {/* INTRO SECTION */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            {/* Heading */}
            <div className="mb-10 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                A Return to Space, Nature &amp; Meaningful Living
              </span>
              <span className="h-px w-10 bg-[#C9A84C]" />
            </div>

            {/* Intro Paragraphs */}
            <div className="space-y-7 text-center">
              {introParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="body-font text-[17px] leading-[2] text-[#4A4A4A] md:text-[18px]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

         
        </section>

        <FarmhouseShowcase />
          {/* DESIGN PHILOSOPHY */}
          <section className="mt-24">
            <div className="mx-auto max-w-7xl">
              {/* Heading */}
              <div className="mb-14 text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#C9A84C]" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                    Design Philosophy
                  </span>
                  <span className="h-px w-10 bg-[#C9A84C]" />
                </div>

                {/* <h2 className="font-serif text-4xl text-[#1F1F1F] md:text-5xl">
                  Crafted Around Nature & Living
                </h2> */}
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {designPhilosophy.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-[30px] border border-[#E8E3D8] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    {/* Number Box */}
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E3D3A5] text-lg font-medium text-[#C9A84C]">
                      {item.number}
                    </div>

                    {/* Title */}
                    <h3 className="mb-5 font-serif text-[28px] leading-snug text-[#1F1F1F]">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[17px] leading-[1.9] text-[#5A5A5A]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
           
            <section>
        <p className="mx-auto mt-10 max-w-[78ch] text-center text-[15px] leading-[1.75] text-[#6E6E6E] md:text-base">
           Explore our farmhouse gallery and discover how thoughtful design transforms land into timeless living experiences.
        </p>
      </section>
         
        <VerticalCTASection />
      </main>

      <Footer />
    </>
  )
}