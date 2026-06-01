"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"

/* Interior placeholder photos — swappable. */
const IMG = {
  a: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  b: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  c: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",
  d: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=900&q=80",
  e: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  f: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  g: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  h: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  i: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=900&q=80",
}

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
    desc: "Designed with a focus on harmony and effortless functionality, this residence reflects a measured approach to planning and execution. Balanced compositions, subtle material transitions and purposeful detailing result in an environment that feels composed, comfortable and distinctly personal.",
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
    desc: "This home reimagines classical influences through a contemporary perspective, combining architectural richness with practical living. Elegant forms, handcrafted elements and meticulously coordinated finishes establish a distinctive character while ensuring fluidity, comfort and everyday ease.",
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
  {
    title: "Project 5",
    desc: "Conceived around simplicity and well-being, these interiors celebrate openness, restraint and natural brightness. Carefully curated materials, streamlined furniture and unobtrusive detailing create an atmosphere that feels calm, sophisticated and perfectly suited to contemporary urban living.",
    images: [
      "/images/project/05 Mr Anuj/1.jpg",
      "/images/project/05 Mr Anuj/2.jpg",
      "/images/project/05 Mr Anuj/3.jpg",
      "/images/project/05 Mr Anuj/4.jpg",
      "/images/project/05 Mr Anuj/5.jpg",
      "/images/project/05 Mr Anuj/6.jpg",
    ],
  },
  {
    title: "Project 6",
    desc: "A refined dining and entertainment setting designed to encourage connection and hospitality. Expressive materials, sculptural lighting and custom-crafted features work together to deliver a space that feels polished, memorable and effortlessly inviting.",
    images: [
      "/images/project/06 ketan kale/1.jpg",
      "/images/project/06 ketan kale/2.jpg",
      "/images/project/06 ketan kale/3.jpg",
    ],
  },
  {
    title: "Project 7",
    desc: "This residence brings together contemporary sensibilities and residential comfort through a rich interplay of textures, finishes and bespoke design interventions. From the carefully composed common areas to the individually tailored private spaces, every element contributes to an environment that feels cohesive, elegant and deeply connected to family living.",
    images: [
      "/images/project/07 Mumbai Mr Sawant/1.jpg",
      "/images/project/07 Mumbai Mr Sawant/2.jpg",
      "/images/project/07 Mumbai Mr Sawant/3.jpg",
      "/images/project/07 Mumbai Mr Sawant/4.jpg",
      "/images/project/07 Mumbai Mr Sawant/5.jpg",
      "/images/project/07 Mumbai Mr Sawant/6.jpg",
      "/images/project/07 Mumbai Mr Sawant/7.jpg",
      "/images/project/07 Mumbai Mr Sawant/8.jpg",
    ],
  },
  {
    title: "Project 8",
    desc: "Defined by clean geometry, restrained detailing and a warm material palette, this home embodies quiet sophistication. Decorative niches, custom-built furniture and thoughtfully integrated features enhance both visual appeal and usability, resulting in spaces that feel serene, refined and naturally timeless.",
    images: [
      "/images/project/08 viman nagar pradeep patil/28.jpg",
      "/images/project/08 viman nagar pradeep patil/29.jpg",
      "/images/project/08 viman nagar pradeep patil/30.jpg",
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
          {project.images.map((src, idx) => {
  const isVideo = src.endsWith(".mp4")

  return (
    <div key={idx} className="relative h-full flex-[0_0_100%]">
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
>
  Your browser does not support the video tag.
</video>
      ) : (
        <img
          src={src}
          alt={`${project.title} — view ${idx + 1}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
        />
      )}
    </div>
  )
})}
          </div>

          {/* Legibility overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40" />

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
            <h3 className="mb-2.5 text-xl font-semibold tracking-tight text-[#1E1E1E] section-heading">
              {project.title}
            </h3>
            <p className="max-w-[38ch] text-[15px] leading-relaxed text-[#6E6E6E] body-font">
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
    <section
      className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 md:py-24"
      aria-label="Architecture, Civil & Interior Works"
    >
      {/* Header */}
      <Reveal className="mb-12 text-center md:mb-16">
        <p className="mb-4 inline-flex items-center gap-3.5 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#C9A84C] body-font">
          <span className="h-px w-[34px] bg-gradient-to-r from-transparent to-[#C9A84C]" />
          Architecture, Civil &amp; Interior Works
          <span className="h-px w-[34px] bg-gradient-to-r from-[#C9A84C] to-transparent" />
        </p>
        {/* <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#1E1E1E] section-heading md:text-5xl">
          Spaces designed to be experienced
        </h2> */}
        <p className="mx-auto mt-6 max-w-[70ch] text-left text-base leading-[1.75] text-[#6E6E6E] body-font md:text-[17px]">
          At Vastara Interior Works, we believe exceptional interiors are created through a thoughtful balance
          of design intelligence, craftsmanship, and human experience. Every project begins with a deep
          understanding of how people live, work, gather, and unwind within a space. From contemporary
          residences and executive offices to hospitality environments and wellness destinations, our work
          focuses on creating environments that are visually refined, highly functional, and deeply connected
          to their purpose. Through careful planning, material selection, lighting design, custom detailing,
          and seamless execution, we transform spaces into meaningful experiences that stand the test of time.
        </p>
      </Reveal>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project, idx) => (
          <CarouselCard key={project.title} project={project} delay={(idx % 3) * 0.05 + 0.05} />
        ))}
      </div>
    </section>
  )
}
