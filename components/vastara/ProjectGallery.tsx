"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

/* ---------------------------------------------------------------- *
 * DUMMY DATA — placeholder projects, images and a sample video.
 * Replace `media`, specs and copy with real project content later.
 * ---------------------------------------------------------------- */

type Media =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster: string }

interface Project {
  title: string
  location: string
  year: string
  specs: { label: string; lines: string[] }[]
  description: string[]
  media: Media[]
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`

const projects: Project[] = [
  {
    title: "Kamal Industrial Complex",
    location: "UPSIDC, Hapur Road, UP",
    year: "2023",
    specs: [
      { label: "Type", lines: ["Industrial", "3-Block Shed"] },
      { label: "Structure", lines: ["RCC Frame", "PEB Roof"] },
      { label: "Area", lines: ["80,000", "sq ft"] },
    ],
    description: [
      "The principal engineer for this project was Ar. Rahul Gupta (Noida), under whose expert guidance Ar. Sunita Verma designed and managed the construction of this turnkey industrial complex. Built using a pre-engineered building technique, the facility features structural bays with a base span of 24 metres, tapering at the gable ends with a gentle eave setback.",
      "The complex was commissioned by a mid-sized FMCG manufacturer from Ghaziabad, a client known for their efficiency, pragmatism, and focus on operational excellence — traits that aligned perfectly with the project's philosophy of economy and durability.",
    ],
    media: [
      { type: "image", src: u("photo-1504307651254-35680f356dfd") },
      { type: "image", src: u("photo-1503387762-592deb58ef4e") },
      { type: "image", src: u("photo-1590725140246-20acdee442be") },
      { type: "image", src: u("photo-1565793298595-6a879b1d9492") },
      { type: "image", src: u("photo-1581094794329-c8112a89af12") },
      { type: "image", src: u("photo-1541888946425-d81bb19240f5") },
      {
        type: "video",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster: u("photo-1416339306562-f3d12fefd36f"),
      },
    ],
  },
  {
    title: "Riverside Logistics Park",
    location: "MIDC, Bhiwandi, Maharashtra",
    year: "2022",
    specs: [
      { label: "Type", lines: ["Warehousing", "Grade-A"] },
      { label: "Structure", lines: ["Steel Frame", "Insulated Roof"] },
      { label: "Area", lines: ["1,20,000", "sq ft"] },
    ],
    description: [
      "Developed as a Grade-A warehousing destination, Riverside Logistics Park was conceived to serve regional distribution networks with clear-height bays, dock-level loading and an efficient circulation plan that prioritises rapid turnaround for heavy freight.",
      "The site was prepared through extensive ground levelling and infrastructure readiness works, ensuring utilities, drainage and access roads were operational from day one for the anchor logistics tenant.",
    ],
    media: [
      { type: "image", src: u("photo-1553413077-190dd305871c") },
      { type: "image", src: u("photo-1586528116311-ad8dd3c8310d") },
      { type: "image", src: u("photo-1581092160562-40aa08e78837") },
      { type: "image", src: u("photo-1487958449943-2429e8be8625") },
      {
        type: "video",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        poster: u("photo-1416339306562-f3d12fefd36f"),
      },
    ],
  },
  {
    title: "Greenfield Residential Township",
    location: "NH-48 Corridor, Pune",
    year: "2024",
    specs: [
      { label: "Type", lines: ["Residential", "Plotted Layout"] },
      { label: "Structure", lines: ["Phased Civil", "Landscaped"] },
      { label: "Area", lines: ["18", "acres"] },
    ],
    description: [
      "A nature-responsive plotted township master-planned along an emerging growth corridor, Greenfield integrates landscaped avenues, community open spaces and future-ready infrastructure into a cohesive residential environment.",
      "Development followed a phased approach — beginning with site assessment and feasibility, progressing through infrastructure planning and culminating in a layout positioned for long-term appreciation and quality of life.",
    ],
    media: [
      { type: "image", src: u("photo-1500382017468-9049fed747ef") },
      { type: "image", src: u("photo-1448630360428-65456885c650") },
      { type: "image", src: u("photo-1416339306562-f3d12fefd36f") },
      { type: "image", src: u("photo-1564013799919-ab600027ffc6") },
      { type: "image", src: u("photo-1480074568708-e7b720bb3f09") },
    ],
  },
]

/* IntersectionObserver-driven scroll reveal (matches site convention). */
function Reveal({
  children,
  className = "",
}: {
  children: ReactNode
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
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}

function GalleryViewer({ project }: { project: Project }) {
  const [active, setActive] = useState(0)
  const total = project.media.length
  const current = project.media[active]

  // Reset to first media whenever the project changes.
  useEffect(() => {
    setActive(0)
  }, [project])

  const go = (dir: number) => setActive((p) => (p + dir + total) % total)

  return (
    <div className="overflow-hidden rounded-2xl border border-[#C9A84C]/30 bg-white shadow-[0_30px_70px_-40px_rgba(60,50,30,0.45)]">
      {/* Thumbnail strip */}
      <div className="flex gap-2.5 overflow-x-auto border-b border-black/[0.06] bg-[#FAF8F3]/60 p-3.5">
        {project.media.map((m, i) => {
          const isActive = i === active
          const thumbSrc = m.type === "video" ? m.poster : m.src
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View ${m.type} ${i + 1}`}
              className={`relative h-14 w-20 flex-none overflow-hidden rounded-md border transition-all duration-300 ${
                isActive
                  ? "border-[#C9A84C] ring-2 ring-[#C9A84C]/40"
                  : "border-black/10 opacity-80 hover:opacity-100"
              }`}
            >
              {m.type === "video" ? (
                <span className="grid h-full w-full place-items-center bg-[#F2EDE4] text-[#9E7B2F]">
                  <Play size={16} className="fill-current" />
                  <span className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider">
                    Video
                  </span>
                </span>
              ) : (
                <img
                  src={thumbSrc}
                  alt={`Thumbnail ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Main row: media + details */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr]">
        {/* Media */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd8cf] lg:aspect-auto lg:min-h-[420px]">
          {current.type === "video" ? (
            <video
              key={current.src}
              src={current.src}
              poster={current.poster}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={current.src}
              alt={`${project.title} — view ${active + 1}`}
              className="h-full w-full object-cover"
            />
          )}

          {/* Prev / counter / next control */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/80 bg-white/85 px-2 py-1.5 shadow-[0_6px_18px_-8px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="grid h-7 w-7 place-items-center rounded-full text-[#1E1E1E] transition-colors hover:bg-[#C9A84C] hover:text-white"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="min-w-[42px] text-center text-xs font-semibold tabular-nums text-[#1E1E1E]">
              {active + 1} / {total}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="grid h-7 w-7 place-items-center rounded-full text-[#1E1E1E] transition-colors hover:bg-[#C9A84C] hover:text-white"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col p-7 md:p-9">
          <h3 className="section-heading text-2xl font-semibold text-[#1E1E1E] md:text-3xl">
            {project.title}
          </h3>
          <p className="body-font mt-1 text-sm text-[#6E6E6E]">{project.location}</p>
          <p className="body-font mt-2 text-sm text-[#9E7B2F]">{project.year}</p>

          {/* Spec table */}
          <div className="mt-6 grid grid-cols-3 gap-px border-y border-black/[0.08] bg-black/[0.06]">
            {project.specs.map((spec) => (
              <div key={spec.label} className="bg-white px-3 py-4">
                <p className="body-font mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9E7B2F]">
                  {spec.label}
                </p>
                {spec.lines.map((line, li) => (
                  <p
                    key={li}
                    className="body-font text-sm leading-snug text-[#1E1E1E]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mt-6 space-y-4">
            {project.description.map((para, pi) => (
              <p
                key={pi}
                className="body-font text-[14px] leading-[1.75] text-[#4A4A4A]"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectGallery() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <Reveal className="mb-10 text-center md:mb-14">
          <span className="mx-auto mb-6 flex w-fit items-center gap-3">
            <span className="h-px w-9 bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A84C]" />
            <span className="h-px w-9 bg-gradient-to-r from-[#C9A84C] to-transparent" />
          </span>
          <h2 className="section-heading text-3xl font-bold leading-tight text-[#1E1E1E] md:text-5xl">
            Featured Projects
          </h2>
        </Reveal>

        {/* Project selector tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setActiveProject(i)}
              className={`body-font rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                i === activeProject
                  ? "border-[#C9A84C] bg-[#C9A84C] text-white shadow-[0_10px_24px_-12px_rgba(201,168,76,0.8)]"
                  : "border-black/15 text-[#4A4A4A] hover:border-[#C9A84C] hover:text-[#9E7B2F]"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <Reveal>
          <GalleryViewer project={projects[activeProject]} />
        </Reveal>
      </div>
    </section>
  )
}
