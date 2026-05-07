import Link from "next/link"
import { ArrowUpRight, Mountain, Home, Factory, TrendingUp, Palette, Shovel } from "lucide-react"

const services = [
  {
    icon: <Mountain size={28} />,
    title: "Land Development",
    description:
      "We identify high-potential land parcels and transform them into development-ready assets through planning, infrastructure preparation, and value enhancement for residential, commercial, and industrial use.",
  },
  {
    icon: <Home size={28} />,
    title: "Farmhouse Planning & Development",
    description:
      "We design and develop premium farmhouse projects that combine nature, privacy, and lifestyle with strong long-term investment value.",
  },
  {
    icon: <Factory size={28} />,
    title: "Industrial Land Readiness & Setup",
    description:
      "We support businesses and international clients in establishing operations in India by providing suitable industrial land, infrastructure preparation, and end-to-end project readiness.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Real Estate Investment",
    description:
      "We curate strategic land and development opportunities focused on long-term appreciation, usability, and sustainable value creation.",
  },
  {
    icon: <Palette size={28} />,
    title: "Architecture & Interior Design",
    description:
      "From architectural planning to turnkey interior execution, we deliver residential and commercial spaces that are refined, functional, and future-ready.",
  },
  {
    icon: <Shovel size={28} />,
    title: "Ground Execution & Excavation",
    description:
      "Through our specialized SPVs, we deliver hard rock excavation, earthworks, debris removal, and site preparation—ensuring land is fully ready for development.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white" aria-label="Our services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase body-font">
              What We Do
            </span>
            <span className="h-px w-10 bg-[#C9A84C]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] section-heading text-balance max-w-2xl">
            Transforming Land Into{" "}
            <span className="text-[#C9A84C]"> Premium Opportunities</span>
          </h2>
          <p className="text-[#6E6E6E] leading-relaxed body-font max-w-2xl text-lg">
            From raw land to ready spaces — Vastara delivers complete, integrated development solutions under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col gap-4 p-7 bg-[#FAF8F3] border border-[#E8E0D0] rounded-lg hover:border-[#C9A84C] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Gold top border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-lg" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-sm bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-[#1E1E1E] text-xl font-bold section-heading">{service.title}</h3>
              <p className="text-[#6E6E6E] text-sm leading-relaxed body-font flex-1">{service.description}</p>

              {/* Learn More */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold body-font hover:gap-2.5 transition-all duration-200"
              >
                Learn More <ArrowUpRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
