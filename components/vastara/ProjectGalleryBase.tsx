"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import type { Project } from "@/components/vastara/galleryTypes"

/* ---------------------------------------------------------------- *
 * Shared gallery base — the thumbnail-strip + image-display +
 * project-data viewer. Per-vertical wrappers pass their own
 * `heading` and `projects`, so each section can read differently.
 * Types + the `u()` helper live in ./galleryTypes (a plain module),
 * so server-component wrappers can build their data safely.
 * ---------------------------------------------------------------- */

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

export default function ProjectGalleryBase({
  heading,
  projects,
}: {
  heading: string
  projects: Project[]
}) {
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
            {heading}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-12 md:gap-16">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <GalleryViewer project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
