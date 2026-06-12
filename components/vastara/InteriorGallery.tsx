"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Building2,
} from "lucide-react"

interface Project {
  title: string
  desc: string
  images: string[]
}

const projects: Project[] = [
  {
    title: "Project 1",
    desc: "A thoughtfully crafted residence where warmth, practicality and luxury come together seamlessly. Natural finishes, bespoke cabinetry and carefully layered illumination shape spaces that feel welcoming, efficient and enduringly relevant.",
    images: [
      "/images/project/01 Mr Amit/1.jpg",
      "/images/project/01 Mr Amit/2.jpg",
      "/images/project/01 Mr Amit/3.jpg",
    ],
  },
  {
    title: "Project 2",
    desc: "A contemporary urban home defined by clarity, proportion and refined detailing. Rich textures, tailored furnishings, integrated storage and a restrained material palette create a cohesive environment that supports modern lifestyles while maintaining a strong visual identity.",
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
    desc: "Designed with a focus on harmony and effortless functionality, this residence reflects a measured approach to planning and execution.",
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
    desc: "This home reimagines classical influences through a contemporary perspective, combining architectural richness with practical living.",
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

function CarouselCard({
  project,
  delay,
}: {
  project: Project
  delay: number
}) {
  const [index, setIndex] = useState(0)
  const count = project.images.length

  const go = (dir: number) =>
    setIndex((prev) => (prev + dir + count) % count)

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-[34px] border border-[#E7E1D6] bg-white shadow-[0_24px_70px_-30px_rgba(40,35,20,0.25)] transition-all duration-700 hover:-translate-y-3 hover:border-[#C9A84C]/40 hover:shadow-[0_42px_90px_-35px_rgba(60,50,30,0.35)]">

        {/* Media */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#E5E0D8]">
          <div
            className="flex h-full transition-transform duration-700"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {project.images.map((src, idx) => {
              const isVideo = src.endsWith(".mp4")

              return (
                <div
                  key={idx}
                  className="relative h-full flex-[0_0_100%]"
                >
                  {isVideo ? (
                    <video
                      src={src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={src}
                      alt={`${project.title} ${idx + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-1000 group-hover:scale-[1.08]"
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />

          {/* Counter */}
          <span className="absolute right-5 top-5 z-10 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-xs font-medium text-[#1E1E1E] backdrop-blur-md">
            {index + 1} / {count}
          </span>

          {/* Navigation */}
          {count > 1 && (
            <>
              <button
                onClick={() => go(-1)}
                className="absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white/80 opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-[#C9A84C] hover:text-white group-hover:opacity-100"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={() => go(1)}
                className="absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white/80 opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-[#C9A84C] hover:text-white group-hover:opacity-100"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 gap-5 border-t border-[#ECE6DB] bg-gradient-to-b from-white to-[#FBF9F4] p-8">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="grid h-14 w-14 place-items-center rounded-full border border-[#D9C79A] bg-[#FAF8F3] text-[#C9A84C] shadow-[inset_0_0_10px_rgba(201,168,76,0.08)]">
              <Building2 size={24} strokeWidth={1.7} />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="mb-2 block text-sm font-medium tracking-[0.2em] text-[#C9A84C]">
              INTERIOR PROJECT
            </span>

            <h3 className="mb-3 text-[24px] font-semibold leading-tight text-[#1E1E1E]">
              {project.title}
            </h3>

            <p className="text-[15px] leading-[1.85] text-[#666]">
              {project.desc}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function ArchitectureShowcase() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 md:py-24">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project, idx) => (
          <CarouselCard
            key={project.title}
            project={project}
            delay={(idx % 3) * 0.05 + 0.05}
          />
        ))}
      </div>
    </section>
  )
}