"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"

interface GalleryItem {
  src: string
  caption: string
}

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src)

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`

/* 16 Gallery Items — dummy farmhouse imagery, swap with real photos later. */
const gallery: GalleryItem[] = [
  { src: u("photo-1600585154340-be6161a56a0c"), caption: "Luxury Living Room" },
  { src: u("photo-1505691938895-1758d7feb511"), caption: "Open Verandah" },
  { src: u("photo-1556909212-d5b604d0c90d"), caption: "Elegant Kitchen" },
  { src: u("photo-1580587771525-78b9dba3b914"), caption: "Poolside Deck" },
  { src: u("photo-1600566753190-17f0baa2a6c3"), caption: "Dining Pavilion" },
  { src: u("photo-1600607687939-ce8a6c25118c"), caption: "Central Courtyard" },
  { src: u("photo-1616594039964-ae9021a400a0"), caption: "Master Suite" },
  { src: u("photo-1416879595882-3373a0480b5b"), caption: "Landscaped Garden" },

  { src: u("photo-1600210492486-724fe5c67fb0"), caption: "Outdoor Lounge" },
  { src: u("photo-1564013799919-ab600027ffc6"), caption: "Guest Cottage" },
  { src: u("photo-1600047509807-ba8f99d2cdde"), caption: "Sunset Terrace" },
  { src: u("photo-1493809842364-78817add7ffb"), caption: "Reading Nook" },
  { src: u("photo-1530541930197-ff16ac917b0e"), caption: "Alfresco Dining" },
  { src: u("photo-1572331165267-854da2b10ccc"), caption: "Private Pool" },
  { src: u("photo-1518156677180-95a2893f3e9f"), caption: "Garden Walkway" },
  { src: u("photo-1505843513577-22bb7d21e455"), caption: "Lakeside View" },
]

/* Reveal Animation */
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
      { threshold: 0.15 }
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

export default function FarmhouseGallery() {
  return (
    <section
      className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 md:pb-24"
      aria-label="Farmhouse project gallery"
    >
      {/* Heading */}
      <h1 className="mx-auto mb-10 max-w-3xl text-center text-[30px] font-medium text-[#C9A84C]">Image Gallery</h1>
      <Reveal>
        <p className="mx-auto mb-10 max-w-3xl text-center text-[18px] font-medium text-[#C9A84C]">
          Browse the gallery to discover how architecture and landscape come
          together in everyday living.
        </p>
      </Reveal>

      {/* Horizontal Scroll Gallery */}
      <Reveal>
        <div className="overflow-x-auto overflow-y-hidden pb-4 scroll-smooth">
          <div
            className="grid grid-rows-2 gap-5"
            style={{
              gridAutoFlow: "column",
              gridAutoColumns: "280px",
              width: "max-content",
            }}
          >
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="group relative h-[360px] w-[260px] overflow-hidden rounded-2xl border border-black/[0.08] bg-[#ddd8cf] shadow-[0_28px_60px_-32px_rgba(60,50,30,0.45)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A84C]/40"
              >
                {isVideo(item.src) ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Caption */}
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-sm font-semibold text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Description */}
      <Reveal>
        <p className="mx-auto mt-10 max-w-[78ch] text-center text-[15px] leading-[1.75] text-[#6E6E6E] md:text-base">
      Explore our farmhouse gallery and discover how thoughtful design transforms land into timeless living experiences.
        </p>
      </Reveal>
    </section>
  )
}
