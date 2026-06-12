"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  BadgeCheck,
  HardHat,
} from "lucide-react"

interface Project {
  title: string
  desc: string
  location: string
  year: string
  status: string
  images: string[]
}

const executionProjects: Project[] = [
  {
    title: "Casting Yard Dismantling",
    location: "Hapur Camp 1 & 2",
    year: "2026",
    status: "On-going",
    desc:
      "Executing large-scale casting yard dismantling, material demobilization and site clearance for land restoration and future utilization.",
    images: [
      "/execution/11/Project 11b_result.webp",
      "/execution/11/Project 11c_result.webp",
      "/execution/11/Project 11d_result.webp",
    ],
  },

  {
    title: "DC-09 Metro Corridor",
    location: "Delhi",
    year: "2024",
    status: "Completed",
    desc:
      "Executed tunnel muck disposal works for the Delhi Aerocity–Tughlakabad Metro Corridor across four underground stations.",
    images: [
      "/execution/10/10a_result.webp",
      "/execution/10/Project 10_result.webp",
      "/execution/10/Project 10.2_result.webp",
    ],
  },

  {
    title: "DC-08 Metro Package",
    location: "Delhi",
    year: "2022 – 2024",
    status: "Completed",
    desc:
      "Executed deep excavation, earthwork and underground infrastructure support for metro connectivity development.",
    images: ["/execution/9/Project 9_result.webp"],
  },

  {
    title: "Delhi–Meerut Rapid Rail",
    location: "Delhi",
    year: "2021 – 2024",
    status: "Completed",
    desc:
      "Executed excavation works for ramps, launching shafts, ventilation shafts and underground infrastructure support at Anand Vihar.",
    images: [
      "/execution/7/Project 7_result.webp",
      "/execution/7/Project 7.1_result.webp",
      "/execution/7/Project 7.2_result.webp",
    ],
  },

  {
    title: "Sarita Vihar Metro Depot",
    location: "Delhi",
    year: "2022 – 2023",
    status: "Completed",
    desc:
      "Executed underground ramp excavation including deep earthwork, material handling and construction support operations.",
    images: [
      "/execution/8/Project 8_result.webp",
      "/execution/8/Project 8a_result.webp",
    ],
  },

  {
    title: "Surya Water Supply",
    location: "Maharashtra",
    year: "2020 – 2021",
    status: "Completed",
    desc:
      "Executed pipeline trenching, earthwork, blasting and underground alignment preparation across the Mumbai–Palghar corridor.",
    images: [
      "/execution/6/6.1_result.webp",
      "/execution/6/6.2_result.webp",
      "/execution/6/6.3_result.webp",
    ],
  },

  {
    title: "Dedicated Freight Corridor",
    location: "Sohna, NCR Delhi",
    year: "2018 – 2021",
    status: "Completed",
    desc:
      "Executed excavation, drilling, blasting, crushing and transportation across a 129-kilometre corridor with centralized material management systems.",
    images: [
      "/execution/5/Project 5_result.webp",
      "/execution/5/Project 5.1_result.webp",
      "/execution/5/Project 5.2_result.webp",
      "/execution/5/Project 5.3_result.webp",
      "/execution/5/Project 5.4_result.webp",
      "/execution/5/Project 5.5_result.webp",
      "/execution/5/Project 5.6_result.webp",
      "/execution/5/Project 5.7_result.webp",
      "/execution/5/Project 5.9_result.webp",
      "/execution/5/Project 5.10_result.webp",
    ],
  },

  {
    title: "Jaquar Factory",
    location: "Bhiwadi, Rajasthan",
    year: "2016",
    status: "Completed",
    desc:
      "Executed early-stage excavation works, demolition, debris handling and rapid site preparation within a challenging 15-day schedule.",
    images: [
      "/execution/4/4.1_result.webp",
      "/execution/4/4.2_result.webp",
      "/execution/4/4.3_result.webp",
      "/execution/4/4.4_result.webp",
    ],
  },

  {
    title: "Delhi Metro CC-27",
    location: "Delhi",
    year: "2013 – 2015",
    status: "Completed",
    desc:
      "Executed hard rock excavation works for ramp and shaft excavation, tunnel muck disposal, material transportation and metro infrastructure coordination.",
    images: [
      "/execution/3/Project 3_result.webp",
      "/execution/3/Project 3.0_result.webp",
      "/execution/3/Project 3.1_result.webp",
      "/execution/3/Project 3.2_result.webp",
      "/execution/3/Project 3a_result.webp",
      "/execution/3/Project 3b_result.webp",
    ],
  },

  {
    title: "Delhi Metro CC-05",
    location: "Delhi Gate, Delhi",
    year: "2012 – 2013",
    status: "Completed",
    desc:
      "Executed hard rock excavation support works involving specialized drilling and controlled rock splitting operations for underground metro excavation where conventional blasting methods were not feasible.",
    images: [
      "/execution/2/Project DMRC CC-05.1.jpg",
      "/execution/2/Project DMRC CC-05.1a.jpg",
      "/execution/2/Project DMRC CC-05.3.jpg",
      "/execution/2/Project DMRC CC-05.4.jpg",
      "/execution/2/Project DMRC CC-05.6.jpg",
      "/execution/2/Project DMRC CC-05.7.jpg",
      "/execution/2/Project DMRC CC-05.10.jpg",
      "/execution/2/p.jpg",
    ],
  },

  {
    title: "IGI Airport Terminal 3",
    location: "Delhi",
    year: "2012",
    status: "Completed",
    desc:
      "Executed SMP dismantling and relocation of multiple batching plants, including 90, 120 and 160 capacity units for the IGI Airport Terminal 3 project under Larsen & Toubro. Also completed approximately 40,000 cubic meters of excavation for the ATC Tower within an intensive 15-day schedule through continuous 24-hour operations.",
    images: [
      "/execution/1/Project 1_result.webp",
      "/execution/1/Project 1a_result.webp",
      "/execution/1/Project 1b_result.webp",
    ],
  },
]

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`h-full transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  )
}

function ProjectCard({
  project,
  delay,
}: {
  project: Project
  delay: number
}) {
  const [index, setIndex] = useState(0)
  const count = project.images.length
  const go = (dir: number) => setIndex((prev) => (prev + dir + count) % count)

  return (
    <Reveal delay={delay}>
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
            <HardHat size={22} strokeWidth={1.6} />
          </span>
          <div className="pt-0.5">
            <h3 className="mb-2.5 text-xl font-semibold tracking-tight text-[#1E1E1E] section-heading">
              {project.title}
            </h3>

            {/* Meta */}
            <div className="mb-3.5 flex flex-col gap-1.5">
              <span className="flex items-center gap-2 text-[13px] text-[#4A4A4A] body-font">
                <MapPin size={14} className="text-[#C9A84C]" />
                <span className="font-semibold text-[#1E1E1E]">Location:</span>
                {project.location}
              </span>
              <span className="flex items-center gap-2 text-[13px] text-[#4A4A4A] body-font">
                <Calendar size={14} className="text-[#C9A84C]" />
                <span className="font-semibold text-[#1E1E1E]">Year:</span>
                {project.year}
              </span>
              <span className="flex items-center gap-2 text-[13px] text-[#4A4A4A] body-font">
                <BadgeCheck size={14} className="text-[#C9A84C]" />
                <span className="font-semibold text-[#1E1E1E]">Status:</span>
                {project.status}
              </span>
            </div>

            <p className="max-w-[40ch] text-[15px] leading-relaxed text-[#6E6E6E] body-font">
              {project.desc}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function ExecutionShowcase() {
  return (
    <section
      className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 md:py-24"
      aria-label="Ground Execution & Excavation"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {executionProjects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} delay={(idx % 3) * 0.05 + 0.05} />
        ))}
      </div>
    </section>
  )
}