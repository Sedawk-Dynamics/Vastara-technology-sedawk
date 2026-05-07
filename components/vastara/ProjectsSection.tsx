"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

type FilterType = "all" | "ongoing" | "completed" | "upcoming"

const projects = [
  {
    id: 1,
    title: "Multimodal Transport Hub",
    category: "completed",
    tag: "Urban Design",
    location: "Swargate, Pune, India",
    description:
      "Large-scale transit hub planning project focused on mobility integration, pedestrian movement analysis, parking systems, and urban connectivity.",
    image: "/images/transport-hub.jpg",
    type: "Urban Design",
  },
  {
    id: 2,
    title: "Uithuizen City Transformation",
    category: "completed",
    tag: "International",
    location: "Groningen, Netherlands",
    description:
      "Urban revitalization project transforming shrinking neighborhoods into vibrant public spaces through participatory planning.",
    image: "/images/uithuizen.jpg",
    type: "Urban Planning",
  },
  {
    id: 3,
    title: "Beyond The Edge",
    category: "completed",
    tag: "Academic",
    location: "Pune, Maharashtra",
    description:
      "Award-level urban research project focused on complexity-driven planning for urban fringe development in Sus village.",
    image: "/images/beyond-edge.jpg",
    type: "Urban Research",
  },
  {
    id: 4,
    title: "Camposampiero Territory Model",
    category: "completed",
    tag: "International",
    location: "Veneto, Italy",
    description:
      "Regional planning project focused on water systems, mobility infrastructure, and future territorial development models.",
    image: "/images/camposampiero.jpg",
    type: "Regional Planning",
  },
  {
    id: 5,
    title: "Adaptive Landscapes",
    category: "completed",
    tag: "International",
    location: "Netherlands",
    description:
      "Resilient delta city planning project exploring sustainable flooding systems, agriculture, recreation, and energy landscapes.",
    image: "/images/adaptive-landscape.jpg",
    type: "Sustainability",
  },
  {
    id: 6,
    title: "Reconnect – Pawana Lake",
    category: "completed",
    tag: "Architecture",
    location: "Pawana Lake, Pune",
    description:
      "Luxury residential architectural project featuring equestrian spaces, recreation amenities, and landscape-focused living.",
    image: "/images/pawana-lake.jpg",
    type: "Architecture",
  },
  {
    id: 7,
    title: "Tivoli Residential Tower",
    category: "ongoing",
    tag: "Architecture",
    location: "Nagpur, Maharashtra",
    description:
      "200,000 sq. ft premium residential tower featuring luxury residences, podium gardens, and penthouse amenities.",
    image: "/images/tivoli.jpg",
    type: "Residential",
  },
  {
    id: 8,
    title: "Gupta's Bungalow",
    category: "completed",
    tag: "Luxury Residence",
    location: "Pune, India",
    description:
      "Custom-designed luxury residence reflecting client lifestyle with integrated landscapes and premium interiors.",
    image: "/images/bungalow.jpg",
    type: "Luxury Home",
  },
]

const filters: { label: string; value: FilterType }[] = [
  { label: "All Projects", value: "all" },
  { label: "Ongoing", value: "ongoing" },
  { label: "Completed", value: "completed" },
  { label: "Upcoming", value: "upcoming" },
]

const tagColors: Record<string, string> = {
  Completed: "bg-green-100 text-green-700 border-green-200",
  Ongoing: "bg-[#C9A84C]/10 text-[#9E7B2F] border-[#C9A84C]/30",
  Upcoming: "bg-blue-50 text-blue-700 border-blue-200",
}

export default function ProjectsSection() {
  const [active, setActive] = useState<FilterType>("all")

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 bg-[#FAF8F3]" aria-label="Featured projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase body-font">
              Our Portfolio
            </span>
            <span className="h-px w-10 bg-[#C9A84C]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] section-heading text-balance max-w-2xl">
            Featured{" "}
            <span className="text-[#C9A84C]">Projects</span>
          </h2>
          <p className="text-[#6E6E6E] leading-relaxed body-font max-w-xl text-lg">
            Explore our growing portfolio of land development, farmhouse, industrial, and investment projects across India.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2.5 rounded-sm text-sm font-semibold body-font border transition-all duration-200 ${active === f.value
                ? "bg-[#C9A84C] text-white border-[#C9A84C]"
                : "bg-white text-[#4A4A4A] border-[#E8E0D0] hover:border-[#C9A84C] hover:text-[#C9A84C]"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden border border-[#E8E0D0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-sm border body-font ${tagColors[project.tag]}`}>
                    {project.tag}
                  </span>
                  <span className="bg-white/90 text-[#4A4A4A] text-xs font-semibold px-2.5 py-1 rounded-sm border border-[#E8E0D0] body-font">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-1.5 text-[#6E6E6E] text-sm body-font">
                  <MapPin size={13} className="text-[#C9A84C]" />
                  {project.location}
                </div>
                <h3 className="text-[#1E1E1E] text-lg font-bold section-heading leading-snug">{project.title}</h3>
                <p className="text-[#6E6E6E] text-sm leading-relaxed body-font">{project.description}</p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold body-font hover:gap-2.5 transition-all mt-1"
                >
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
