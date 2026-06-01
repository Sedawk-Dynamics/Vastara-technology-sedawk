"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"

interface GalleryItem {
  src: string
  caption: string
}

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src)

/* Real interior project photos from /public/images/interior/. */
const gallery: GalleryItem[] = [
  { src: "/images/interior/4.jpg", caption: "Living Room" },
  { src: "/images/interior/10a.jpg", caption: "Bedroom Suite" },
  { src: "/images/interior/10b.mp4", caption: "Bedroom — Walkthrough" },
  { src: "/images/interior/8.jpg", caption: "Kitchen Partition" },
  { src: "/images/interior/12.jpg", caption: "En-suite Bathroom" },
  { src: "/images/interior/13.jpg", caption: "Executive Cabin" },
  { src: "/images/interior/16.jpg", caption: "Fitness Club — Reception" },
  { src: "/images/interior/17.jpg", caption: "Gym Corridor" },
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

export default function InteriorGallery() {
  return (
    <section
      className="mx-auto w-full max-w-[1280px] px-5 pb-16 sm:px-8 md:pb-24"
      aria-label="Interior project gallery"
    >
      <Reveal>
        <p className="mx-auto mb-9 max-w-3xl text-center text-[15px] font-medium text-[#C9A84C] body-font md:mb-12">
          Browse the gallery to discover how design transforms spaces into experiences.
        </p>
      </Reveal>

      {/* Photo grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {gallery.map((item, idx) => (
          <Reveal key={item.src} delay={(idx % 4) * 0.05} className="h-full">
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/[0.08] bg-[#ddd8cf] shadow-[0_28px_60px_-32px_rgba(60,50,30,0.45)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:border-[#C9A84C]/40 hover:shadow-[0_44px_80px_-34px_rgba(60,50,30,0.55)]">
              {isVideo(item.src) ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-1 p-4 text-sm font-semibold text-white opacity-0 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] body-font group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mx-auto mt-9 max-w-[78ch] text-center text-[15px] leading-[1.75] text-[#6E6E6E] body-font md:mt-12 md:text-base">
          Every interior tells a story—of aspirations, lifestyles, values, and identity. At Vastara, we
          approach each project as a unique journey, bringing together creativity, technical expertise, and
          meticulous attention to detail. Whether crafting intimate homes, dynamic workplaces, or welcoming
          hospitality settings, our commitment remains the same: to create spaces that inspire, perform, and
          endure. The result is an environment that not only looks exceptional but feels effortlessly aligned
          with the people who experience it every day.
        </p>
      </Reveal>
    </section>
  )
}
