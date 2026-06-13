"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { ChevronLeft, ChevronRight, Home, MapPin, Ruler } from "lucide-react"

/* ---------------------------------------------------------------- *
 * Farmhouse projects. Images are placeholders (dummy) — swap with
 * real project photography later.
 * ---------------------------------------------------------------- */

interface Project {
  no: string
  title: string
  type: string
  location: string
  carpetArea: string
  desc: string[]
  images: string[]
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=80`

// const projects: Project[] = [
//   {
//     no: "Project 1",
//     title: "Luxury Farmhouse Retreat",
//     type: "Residential / Hospitality",
//     location: "Mulshi, Maharashtra",
//     carpetArea: "2750 Sq. Ft.",
//     desc: [
//       "Designed as a peaceful second home and premium holiday destination, this farmhouse seamlessly blends contemporary comfort with the charm of countryside living. Set amidst scenic natural surroundings, the residence features spacious interiors, inviting outdoor spaces, and panoramic views that create an ideal setting for relaxation, family gatherings and weekend escapes.",
//       "Thoughtfully planned to offer both personal enjoyment and rental potential, the project delivers a refined hospitality experience while maintaining privacy, comfort and a strong connection to nature.",
//     ],
//     images: [
//       u("photo-1564013799919-ab600027ffc6"),
//       u("photo-1580587771525-78b9dba3b914"),
//       u("photo-1600596542815-ffad4c1539a9"),
//     ],
//   },
//   {
//     no: "Project 2",
//     title: "Contemporary Villa",
//     type: "Private Residential",
//     location: "Pune, Maharashtra",
//     carpetArea: "5500 Sq. Ft.",
//     desc: [
//       "This residence celebrates the interplay between interior and exterior environments through expansive glazing, covered sit outs and carefully framed views. Deep sloping roofs and strategically positioned skylights enhance natural illumination, passive cooling, and architectural character.",
//       "Thoughtfully planned for modern family living, the design balances openness, privacy, and comfort while fostering a strong connection to the landscape. The result is a timeless home that combines elegance, functionality, and a rich spatial experience.",
//     ],
//     images: [
//       u("photo-1600585154340-be6161a56a0c"),
//       u("photo-1613490493576-7fde63acd811"),
//       u("photo-1600607687939-ce8a6c25118c"),
//     ],
//   },
//   {
//     no: "Project 3",
//     title: "Hillside Retreat Residence",
//     type: "Private Residential",
//     location: "Pune, Maharashtra",
//     carpetArea: "4790 Sq. Ft.",
//     desc: [
//       "Nestled against a lush hillside backdrop, this residence is designed as a serene retreat for family living and weekend escapes. The warm brick façade and sloping tiled roofs create a timeless architectural character.",
//       "The home features spacious bedrooms, an island kitchen, an outdoor barbeque area and a dedicated indoor games lounge with space for a billiards table. A swimming pool, productive kitchen garden, and generous covered terraces strengthen the connection to nature, creating an ideal setting for relaxation, recreation and family gatherings.",
//     ],
//     images: [
//       u("photo-1568605114967-8130f3a36994"),
//       u("photo-1512917774080-9991f1c4c750"),
//       u("photo-1600566753086-00f18fb6b3ea"),
//     ],
//   },
//   {
//     no: "Project 4",
//     title: "Lakeside Retreat Residence",
//     type: "Private Residential",
//     location: "Pune District, Maharashtra",
//     carpetArea: "3500 Sq. Ft.",
//     desc: [
//       "Set on a one-acre estate beside the serene waters of Pavana Lake, this residence is designed to immerse its occupants in the beauty of the surrounding landscape. The exposed brick architecture, sloping roofs and large openings create a warm, timeless character while framing views of the lake and nearby hills.",
//       "Thoughtfully planned for relaxed living and entertaining, the home features generous family spaces that extend onto outdoor terraces and landscaped grounds. The result is a tranquil retreat that combines comfort, privacy and a deep connection to nature in one of the region's most scenic settings.",
//     ],
//     images: [
//       u("photo-1502005229762-cf1b2da7c5d6"),
//       u("photo-1449844908441-8829872d2607"),
//       u("photo-1576941089067-2de3c901e126"),
//     ],
//   },
//   {
//     no: "Project 5",
//     title: "Courtyard Residence",
//     type: "Private Residential",
//     location: "Lonavala, Maharashtra",
//     carpetArea: "4550 Sq. Ft.",
//     desc: [
//       "This residence is organized around a central open-to-sky courtyard that brings light, ventilation and greenery into the heart of the home. The composition of stone-clad volumes, tiled roofs and sheltered walkways creates a timeless architectural language rooted in climate-responsive design.",
//       "Designed as a private retreat, the home features spacious living areas that seamlessly connect to outdoor terraces, landscaped courts and a lap pool. The result is a calm and immersive living environment where architecture, nature, and everyday life come together in harmony.",
//     ],
//     images: [
//       u("photo-1505843513577-22bb7d21e455"),
//       u("photo-1570129477492-45c003edd2be"),
//       u("photo-1600047509807-ba8f99d2cdde"),
//     ],
//   },
//   {
//     no: "Project 6",
//     title: "Contemporary Residence",
//     type: "Private Residential",
//     location: "Pune, Maharashtra",
//     carpetArea: "5200 Sq. Ft.",
//     desc: [
//       "This contemporary residence is designed around a generous arrival court that creates a strong sense of openness and arrival. Clean architectural lines, elevated living spaces, and minimalist forms are complemented by warm natural materials and carefully screened openings that enhance privacy while allowing ample daylight and ventilation.",
//       "The home features interconnected living spaces that overlook landscaped courts and outdoor gathering areas, creating a seamless flow between built form and nature. Thoughtfully planned for modern family living, the design balances functionality, comfort and elegance within a timeless architectural expression.",
//     ],
//     images: [
//       u("photo-1600210492486-724fe5c67fb0"),
//       u("photo-1583608205776-bfd35f0d9f83"),
//       u("photo-1598228723793-52759bba239c"),
//     ],
//   },
//   {
//     no: "Project 7",
//     title: "Garden Estate Residence",
//     type: "Private Residential",
//     location: "Pune, Maharashtra",
//     carpetArea: "2750 Sq. Ft.",
//     desc: [
//       "Set within a lush natural setting, this residence is designed around the idea of living close to the land. A productive kitchen garden, landscaped grounds, and carefully crafted outdoor spaces become an extension of the home, encouraging a lifestyle rooted in nature, wellness and simplicity.",
//       "The architecture combines understated elegance with functional living, creating bright, welcoming interiors that open towards expansive views of the surrounding hills. Conceived as a private family retreat, the home offers a peaceful environment for relaxation, gathering and year-round enjoyment of the outdoors.",
//     ],
//     images: [
//       u("photo-1572120360610-d971b9d7767c"),
//       u("photo-1605276374104-dee2a0ed3cd6"),
//       u("photo-1518780664697-55e3ad937233"),
//     ],
//   },
//   {
//     no: "Project 8",
//     title: "Urban Edge Residence",
//     type: "Private Residential",
//     location: "Pimpri-Chinchwad, Maharashtra",
//     carpetArea: "3250 Sq. Ft.",
//     desc: [
//       "Situated in Moshi, this residence is conceived as a quiet retreat within an evolving urban setting. The design emphasizes proportion, natural light and spatial clarity, creating bright and comfortable interiors that respond to the needs of contemporary family life.",
//       "A restrained material palette, carefully framed views, and landscaped open spaces contribute to a sense of calm and permanence. The result is a refined home that balances everyday functionality with architectural elegance.",
//     ],
//     images: [
//       u("photo-1600573472550-8090b5e0745e"),
//       u("photo-1600121848594-d8644e57abab"),
//       u("photo-1499793983690-e29da59ef1c2"),
//     ],
//   },
// ]

const projects: Project[] = [
  {
    no: "Project 1",
    title: "Luxury Farmhouse Retreat",
    type: "Residential / Hospitality",
    location: "Mulshi, Maharashtra",
    carpetArea: "2750 Sq. Ft.",
    desc: [
      "Designed as a peaceful second home and premium holiday destination, this farmhouse seamlessly blends contemporary comfort with the charm of countryside living. Set amidst scenic natural surroundings, the residence features spacious interiors, inviting outdoor spaces, and panoramic views that create an ideal setting for relaxation, family gatherings and weekend escapes.",
      "Thoughtfully planned to offer both personal enjoyment and rental potential, the project delivers a refined hospitality experience while maintaining privacy, comfort and a strong connection to nature.",
    ],
    images: [
      "/Farmland/Project 1a.jpg",
      "/Farmland/Project 1b.png",
    ],
  },

  {
    no: "Project 2",
    title: "Contemporary Villa",
    type: "Private Residential",
    location: "Pune, Maharashtra",
    carpetArea: "5500 Sq. Ft.",
    desc: [
      "This residence celebrates the interplay between interior and exterior environments through expansive glazing, covered sit outs and carefully framed views. Deep sloping roofs and strategically positioned skylights enhance natural illumination, passive cooling, and architectural character.",
      "Thoughtfully planned for modern family living, the design balances openness, privacy, and comfort while fostering a strong connection to the landscape. The result is a timeless home that combines elegance, functionality, and a rich spatial experience.",
    ],
    images: [
      "/Farmland/Project 2a.png",
    ],
  },

  {
    no: "Project 3",
    title: "Hillside Retreat Residence",
    type: "Private Residential",
    location: "Pune, Maharashtra",
    carpetArea: "4790 Sq. Ft.",
    desc: [
      "Nestled against a lush hillside backdrop, this residence is designed as a serene retreat for family living and weekend escapes. The warm brick façade and sloping tiled roofs create a timeless architectural character.",
      "The home features spacious bedrooms, an island kitchen, an outdoor barbeque area and a dedicated indoor games lounge with space for a billiards table. A swimming pool, productive kitchen garden, and generous covered terraces strengthen the connection to nature, creating an ideal setting for relaxation, recreation and family gatherings.",
    ],
    images: [
      "/Farmland/Project 3.jpg",
    ],
  },

  {
    no: "Project 4",
    title: "Lakeside Retreat Residence",
    type: "Private Residential",
    location: "Pune District, Maharashtra",
    carpetArea: "3500 Sq. Ft.",
    desc: [
      "Set on a one-acre estate beside the serene waters of Pavana Lake, this residence is designed to immerse its occupants in the beauty of the surrounding landscape. The exposed brick architecture, sloping roofs and large openings create a warm, timeless character while framing views of the lake and nearby hills.",
      "Thoughtfully planned for relaxed living and entertaining, the home features generous family spaces that extend onto outdoor terraces and landscaped grounds. The result is a tranquil retreat that combines comfort, privacy and a deep connection to nature in one of the region's most scenic settings.",
    ],
    images: [
      "/Farmland/Project 4.png",
    ],
  },

  {
    no: "Project 5",
    title: "Courtyard Residence",
    type: "Private Residential",
    location: "Lonavala, Maharashtra",
    carpetArea: "4550 Sq. Ft.",
    desc: [
      "This residence is organized around a central open-to-sky courtyard that brings light, ventilation and greenery into the heart of the home. The composition of stone-clad volumes, tiled roofs and sheltered walkways creates a timeless architectural language rooted in climate-responsive design.",
      "Designed as a private retreat, the home features spacious living areas that seamlessly connect to outdoor terraces, landscaped courts and a lap pool. The result is a calm and immersive living environment where architecture, nature, and everyday life come together in harmony.",
    ],
    images: [
      "/Farmland/Project 5.jpg",
    ],
  },

  {
    no: "Project 6",
    title: "Contemporary Residence",
    type: "Private Residential",
    location: "Pune, Maharashtra",
    carpetArea: "5200 Sq. Ft.",
    desc: [
      "This contemporary residence is designed around a generous arrival court that creates a strong sense of openness and arrival. Clean architectural lines, elevated living spaces, and minimalist forms are complemented by warm natural materials and carefully screened openings that enhance privacy while allowing ample daylight and ventilation.",
      "The home features interconnected living spaces that overlook landscaped courts and outdoor gathering areas, creating a seamless flow between built form and nature. Thoughtfully planned for modern family living, the design balances functionality, comfort and elegance within a timeless architectural expression.",
    ],
    images: [
      "/Farmland/Project 6.jpg",
    ],
  },

  {
    no: "Project 7",
    title: "Garden Estate Residence",
    type: "Private Residential",
    location: "Pune, Maharashtra",
    carpetArea: "2750 Sq. Ft.",
    desc: [
      "Set within a lush natural setting, this residence is designed around the idea of living close to the land. A productive kitchen garden, landscaped grounds, and carefully crafted outdoor spaces become an extension of the home, encouraging a lifestyle rooted in nature, wellness and simplicity.",
      "The architecture combines understated elegance with functional living, creating bright, welcoming interiors that open towards expansive views of the surrounding hills. Conceived as a private family retreat, the home offers a peaceful environment for relaxation, gathering and year-round enjoyment of the outdoors.",
    ],
    images: [
      "/Farmland/Project 7.jpg",
    ],
  },

  {
    no: "Project 8",
    title: "Urban Edge Residence",
    type: "Private Residential",
    location: "Pimpri-Chinchwad, Maharashtra",
    carpetArea: "3250 Sq. Ft.",
    desc: [
      "Situated in Moshi, this residence is conceived as a quiet retreat within an evolving urban setting. The design emphasizes proportion, natural light and spatial clarity, creating bright and comfortable interiors that respond to the needs of contemporary family life.",
      "A restrained material palette, carefully framed views, and landscaped open spaces contribute to a sense of calm and permanence. The result is a refined home that balances everyday functionality with architectural elegance.",
    ],
    images: [
      "/Farmland/Project 8.png",
    ],
  },
]

/* IntersectionObserver-driven scroll reveal. */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      } ${className}`}
    >
      {children}
    </div>
  )
}

function CarouselCard({ project, delay }: { project: Project; delay: number }) {
  const [index, setIndex] = useState(0)
  const count = project.images.length
  const go = (dir: number) => setIndex((prev) => (prev + dir + count) % count)

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-[0_28px_60px_-32px_rgba(60,50,30,0.45)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2.5 hover:border-[#C9A84C]/40 hover:shadow-[0_44px_80px_-34px_rgba(60,50,30,0.55)]">
        {/* Media / carousel */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#ddd8cf]">
          <div
            className="flex h-full transition-transform duration-[550ms] ease-[cubic-bezier(.22,1,.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {project.images.map((src, idx) => (
              <div key={idx} className="relative h-full flex-[0_0_100%]">
                <img
                  src={src}
                  alt={`${project.title} — view ${idx + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
                />
              </div>
            ))}
          </div>

          {/* Legibility overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

          {/* Counter */}
          <span className="absolute right-4 top-4 z-10 rounded-full border border-white/90 bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#1E1E1E] backdrop-blur-md">
            {index + 1} / {count}
          </span>

          {/* Nav arrows */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-3.5 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/90 bg-white/80 text-[#1E1E1E] opacity-0 shadow-[0_6px_18px_-8px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-white active:scale-90 group-hover:opacity-100"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-3.5 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/90 bg-white/80 text-[#1E1E1E] opacity-0 shadow-[0_6px_18px_-8px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-white active:scale-90 group-hover:opacity-100"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {project.images.map((_, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setIndex(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`h-[7px] rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.3)] transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] ${
                  idx === index
                    ? "w-[22px] bg-[#C9A84C] shadow-[0_0_12px_rgba(201,168,76,0.8)]"
                    : "w-[7px] bg-white/65 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex min-h-[210px] flex-1 items-start gap-[18px] border-t border-black/[0.08] bg-gradient-to-b from-white/70 to-[#FAF8F3]/85 p-7 backdrop-blur-md">
          <span className="grid h-12 w-12 flex-none place-items-center rounded-full border border-[#C9A84C]/35 bg-[radial-gradient(circle_at_30%_25%,rgba(201,168,76,0.14),transparent_70%)] text-[#C9A84C] shadow-[inset_0_0_12px_rgba(201,168,76,0.12)]">
            <Home size={22} strokeWidth={1.6} />
          </span>
          <div className="pt-0.5">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A84C] body-font">
              {project.no}
            </p>
            <h3 className="mb-2.5 text-xl font-semibold tracking-tight text-[#1E1E1E] section-heading">
              {project.title}
            </h3>

            {/* Spec meta */}
            <div className="mb-3.5 flex flex-col gap-1.5">
              <span className="flex items-center gap-2 text-[13px] text-[#4A4A4A] body-font">
                <Home size={14} className="text-[#C9A84C]" />
                <span className="font-semibold text-[#1E1E1E]">Type:</span>
                {project.type}
              </span>
              <span className="flex items-center gap-2 text-[13px] text-[#4A4A4A] body-font">
                <MapPin size={14} className="text-[#C9A84C]" />
                <span className="font-semibold text-[#1E1E1E]">Location:</span>
                {project.location}
              </span>
              <span className="flex items-center gap-2 text-[13px] text-[#4A4A4A] body-font">
                <Ruler size={14} className="text-[#C9A84C]" />
                <span className="font-semibold text-[#1E1E1E]">Carpet Area:</span>
                {project.carpetArea}
              </span>
            </div>

            {/* Description */}
            <div className="max-w-[40ch] space-y-2.5">
              {project.desc.map((para, idx) => (
                <p
                  key={idx}
                  className="body-font text-[15px] leading-relaxed text-[#6E6E6E]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function FarmhouseShowcase() {
  return (
    <section
      className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 md:py-24"
      aria-label="Farmhouse Planning & Development"
    >
      {/* Header */}
      <Reveal className="mb-12 text-center md:mb-16">
        <p className="mb-4 inline-flex items-center gap-3.5 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#C9A84C] body-font">
          <span className="h-px w-[34px] bg-gradient-to-r from-transparent to-[#C9A84C]" />
          Farmhouse Planning &amp; Development
          <span className="h-px w-[34px] bg-gradient-to-r from-[#C9A84C] to-transparent" />
        </p>
        <h2 className="section-heading text-3xl font-semibold leading-tight tracking-tight text-[#1E1E1E] md:text-5xl">
          Our Farmhouse Projects
        </h2>
      </Reveal>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project, idx) => (
          <CarouselCard key={project.no} project={project} delay={(idx % 3) * 0.05 + 0.05} />
        ))}
      </div>
    </section>
  )
}
