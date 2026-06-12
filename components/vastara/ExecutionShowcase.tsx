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

  const total = project.images.length

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total)
  }

  return (
    <Reveal delay={delay}>
      <article className="flex h-full flex-col overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_40px_90px_-30px_rgba(0,0,0,0.35)]">
        
        {/* Image Carousel */}
        <div className="relative aspect-square overflow-hidden group">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {project.images.map((img, i) => (
              <div key={i} className="min-w-full h-full">
                <img
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <span className="absolute left-5 top-5 rounded-full bg-[#C9A84C] px-4 py-2 text-sm font-semibold text-white z-20">
            {project.status}
          </span>

          <span className="absolute right-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            {index + 1}/{total}
          </span>

          {total > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {project.images.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setIndex(dotIndex)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  dotIndex === index
                    ? "w-6 bg-[#C9A84C]"
                    : "w-2 bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-7">
          <div className="mb-4 flex items-center gap-3">
            <HardHat className="text-[#C9A84C]" size={22} />
            <h3 className="text-xl font-semibold text-[#1E1E1E]">
              {project.title}
            </h3>
          </div>

          <div className="mb-4 flex flex-wrap gap-4 text-sm text-[#6E6E6E]">
            <span className="flex items-center gap-1">
              <MapPin size={16} />
              {project.location}
            </span>

            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {project.year}
            </span>

            <span className="flex items-center gap-1 text-green-600">
              <BadgeCheck size={16} />
              {project.status}
            </span>
          </div>

          <p className="text-[15px] leading-7 text-[#6E6E6E]">
            {project.desc}
          </p>
        </div>
      </article>
    </Reveal>
  )
}

export default function ExecutionShowcase() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-5 py-16 md:py-24">
      <div className="grid auto-rows-fr grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
        {executionProjects.map((project, idx) => (
          <div key={project.title} className="h-full">
            <ProjectCard
              project={project}
              delay={(idx % 3) * 0.05}
            />
          </div>
        ))}
      </div>
    </section>
  )
}