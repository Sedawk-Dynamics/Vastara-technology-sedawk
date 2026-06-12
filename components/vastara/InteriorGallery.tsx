"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"

interface Project {
  title: string
  desc: string
  images: string[]
}

interface GalleryItem {
  src: string
  caption: string
}

const projects: Project[] = [
  {
    title: "Project 1",
    desc: "A thoughtfully crafted residence where warmth, practicality and luxury come together seamlessly.",
    images: [
      "/images/project/01 Mr Amit/1.jpg",
      "/images/project/01 Mr Amit/2.jpg",
      "/images/project/01 Mr Amit/3.jpg",
    ],
  },
  {
    title: "Project 2",
    desc: "A contemporary urban home defined by clarity, proportion and refined detailing.",
    images: [
      "/images/project/02 Mr Desai/1.jpg",
      "/images/project/02 Mr Desai/2.jpg",
      "/images/project/02 Mr Desai/3.jpg",
      "/images/project/02 Mr Desai/4.jpg",
      "/images/project/02 Mr Desai/5.jpg",
      "/images/project/02 Mr Desai/6.jpg",
      "/images/project/02 Mr Desai/7.jpg",
      "/images/project/02 Mr Desai/8.jpg",
    ],
  },
  {
    title: "Project 3",
    desc: "Designed with a focus on harmony and effortless functionality.",
    images: [
      "/images/project/03 Mr Kunal Saxena/1.jpg",
      "/images/project/03 Mr Kunal Saxena/2.jpg",
      "/images/project/03 Mr Kunal Saxena/3.jpg",
      "/images/project/03 Mr Kunal Saxena/4.jpg",
      "/images/project/03 Mr Kunal Saxena/5.jpg",
    ],
  },
  {
    title: "Project 4",
    desc: "This home reimagines classical influences through a contemporary perspective.",
    images: [
      "/images/project/04 Mr Satish/1.jpg",
      "/images/project/04 Mr Satish/2.jpg",
      "/images/project/04 Mr Satish/3.jpg",
      "/images/project/04 Mr Satish/4.jpg",
      "/images/project/04 Mr Satish/5.jpg",
      "/images/project/04 Mr Satish/6.jpg",
      "/images/project/04 Mr Satish/Video 1.mp4",
      "/images/project/04 Mr Satish/Video 2.mp4",
      "/images/project/04 Mr Satish/Video 3.mp4",
    ],
  },
]

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src)

/* Convert project images into gallery items */
const gallery: GalleryItem[] = projects.flatMap((project) =>
  project.images.map((img) => ({
    src: img,
    caption: project.title,
  }))
)

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

export default function ProjectGallery() {
  return (
    <section
      className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 md:py-24"
      aria-label="Project gallery"
    >
      {/* Heading */}
      <Reveal>
        <h2 className="mx-auto mb-4 text-center text-[30px] font-medium text-[#C9A84C]">
          Image Gallery
        </h2>
      </Reveal>

      <Reveal>
        <p className="mx-auto mb-10 max-w-3xl text-center text-[18px] font-medium text-[#6E6E6E]">
          Explore our curated collection of completed interior and residential
          spaces.
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
                key={`${item.src}-${idx}`}
                className="group relative h-[360px] w-[260px] overflow-hidden rounded-[28px] border border-[#E7E1D6] bg-[#ddd8cf] shadow-[0_28px_60px_-32px_rgba(60,50,30,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A84C]/40"
              >
                {isVideo(item.src) ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
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
          Discover thoughtfully designed interiors and architectural spaces,
          crafted with precision, elegance, and timeless aesthetics.
        </p>
      </Reveal>
    </section>
  )
}