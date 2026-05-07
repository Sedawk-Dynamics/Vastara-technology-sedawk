'use client'

import Image from "next/image"
import { useState } from "react"
import { CheckCircle, Plus, Minus } from "lucide-react"

const pillars = [
  {
    label: "Mission",
    text: "At Vastara International Properties Private Limited, our mission is to build resilient and future-ready infrastructure that drives holistic development across emerging regions and communities. We are committed to delivering high-quality, efficient, and sustainable construction solutions that strengthen connectivity, support local economies, and create meaningful livelihood opportunities. By integrating modern engineering practices with responsible resource management, renewable solutions, and community-centric planning, we aim to develop scalable ecosystems that enhance quality of life while preserving the environment. Our focus extends beyond construction—we strive to create strong foundations for inclusive growth, long-term impact, and empowered communities."
  },
  {
    label: "Vision",
    text: "To become a trusted leader in integrated land development, recognized for transforming land into meaningful, high-value opportunities across India and beyond. Every development we undertake is guided by long-term thinking — ensuring it contributes to sustainable growth, functionality and enduring value. We view land not merely as an asset, but as an opportunity to create spaces that enable business expansion, support investment potential and align with the evolving infrastructure needs of the future."
  },
  {
    label: "Values",
    text: "Our values are rooted in integrity, clarity, and accountability—ensuring every project is executed with transparency and professionalism, and that our clients can rely on us with complete confidence. Execution discipline is central to our approach, enabling us to deliver with reliability and precision rather than intent alone, while maintaining clear visibility across processes, timelines, and outcomes. At the core of our operations is a commitment to building strong, enduring relationships, grounded in trust, open communication, and a shared vision for success."
  },
]

const usps = [
  "End-to-end execution from raw land to ready-to-use spaces",
  "25+ years of specialized expertise through SPV-led execution",
  "Pan-India presence with strong regional market understanding",
  "Dedicated international client support with compliance setup",
  "In-house capabilities: architecture, interiors & excavation",
  "Focused on sustainable long-term value creation",
]

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="about" className="py-24 bg-[#FAF8F3]" aria-label="About Vastara">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
                  About Us
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-6">
                Integrated Solutions,{" "}
                <span className="text-[#C9A84C]">Delivered End-to-End</span>
              </h2>

              <p className="text-[#4A4A4A] leading-relaxed text-lg mb-4">
                Welcome to Vastara International Properties Private Limited—where land is transformed into opportunity through clarity, precision, and execution excellence.
              </p>

              <p className="text-[#6E6E6E] leading-relaxed">
                Vastara International Properties Private Limited is a dynamic real estate and land development company focused on creating high-potential property solutions across India.
              </p>
            </div>

            {/* USPs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {usps.map((usp) => (
                <div key={usp} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={16}
                    className="text-[#C9A84C] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[#4A4A4A] text-sm">{usp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden h-64">
              <Image
                src="/images/land-dev.jpg"
                alt="Vastara land development"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent" />

              {/* Stats */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex gap-6">
                  {[["25+", "Projects"], ["100+", "Acres"], ["35+", "Clients"]].map(
                    ([v, l]) => (
                      <div key={l} className="text-center">
                        <div className="text-white font-bold text-2xl">{v}</div>
                        <div className="text-white/70 text-xs">{l}</div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="flex flex-col gap-4">
              {pillars.map((p, index) => {
                const isOpen = openIndex === index

                return (
                  <div
                    key={p.label}
                    className="bg-white border border-[#E8E0D0] rounded-xl overflow-hidden transition-all duration-300"
                  >
                    {/* Header */}
                    <button
                      onClick={() => toggleCard(index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FCFAF5] transition"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-5 rounded-full bg-[#C9A84C]" />

                        <span className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider">
                          {p.label}
                        </span>
                      </div>

                      <div className="text-[#C9A84C]">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>

                    {/* Content */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="px-5 pb-5">
                        <p className="text-[#6E6E6E] text-sm leading-relaxed">
                          {p.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}