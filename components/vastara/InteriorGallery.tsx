"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"

interface GalleryItem {
  src: string
  caption: string
}

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src)

/* 16 Gallery Items */
const gallery: GalleryItem[] = [
  { src: "/images/interior/1.jpg", caption: "Luxury Living Room" },
  { src: "/images/interior/2.jpg", caption: "Modern Bedroom" },
  { src: "/images/interior/3.jpg", caption: "Elegant Kitchen" },
  { src: "/images/interior/4.jpg", caption: "Living Room" },
  { src: "/images/interior/5.jpg", caption: "Dining Area" },
  { src: "/images/interior/6.jpg", caption: "Premium Hallway" },
  { src: "/images/interior/7.jpg", caption: "Workspace Design" },
  { src: "/images/interior/8.jpg", caption: "Kitchen Partition" },

  { src: "/images/interior/9.jpg", caption: "Luxury Bathroom" },
  { src: "/images/interior/10a.jpg", caption: "Bedroom Suite" },
  { src: "/images/interior/10b.mp4", caption: "Bedroom Walkthrough" },
  { src: "/images/interior/11.jpg", caption: "Guest Room" },
  { src: "/images/interior/12.jpg", caption: "En-suite Bathroom" },
  { src: "/images/interior/13.jpg", caption: "Executive Cabin" },
  { src: "/images/interior/16.jpg", caption: "Fitness Club Reception" },
  { src: "/images/interior/17.jpg", caption: "Gym Corridor" },
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
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-7"
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default function InteriorGallery() {
  return (
    <section
      className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 md:pb-24"
      aria-label="Interior project gallery"
    >
      {/* Heading */}
      <Reveal>
        <p className="mx-auto mb-10 max-w-3xl text-center text-[15px] font-medium text-[#C9A84C]">
          Browse the gallery to discover how design transforms
          spaces into experiences.
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
            {gallery.map((item, idx) => (
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
          Every interior tells a story—of aspirations, lifestyles,
          values, and identity. At Vastara, we approach each project
          as a unique journey, bringing together creativity,
          technical expertise, and meticulous attention to detail.
        </p>
      </Reveal>
    </section>
  )
}