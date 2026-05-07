"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How does Vastara help investors grow their wealth through land?",
    answer:
      "Vastara identifies high-potential land parcels in growth corridors, manages all compliance and infrastructure readiness, and creates curated investment opportunities that deliver consistent capital appreciation. Our end-to-end management removes the complexity typically associated with land investment, allowing you to invest with confidence.",
  },
  {
    question: "How secure are investments with Vastara International Properties?",
    answer:
      "Every investment is backed by full legal documentation, registered land titles, and transparent compliance processes. We conduct thorough due diligence on each parcel, ensure all regulatory approvals are in place, and provide clients with complete documentation at every stage. Transparency and accountability are the foundations of our process.",
  },
  {
    question: "What industries and businesses do you support?",
    answer:
      "We support a wide range of industries including manufacturing, logistics, warehousing, technology parks, agro-processing, and more. We are particularly experienced in enabling international businesses to establish Indian operations — managing land sourcing, infrastructure preparation, and compliance end-to-end.",
  },
  {
    question: "What is your typical project timeline from land identification to readiness?",
    answer:
      "Project timelines vary based on scale and complexity, but typically range from 6–18 months for full land development and infrastructure readiness. We provide detailed project plans upfront and maintain transparent communication throughout, ensuring clients are informed at every milestone.",
  },
  {
    question: "Can international or NRI clients invest through Vastara?",
    answer:
      "Yes. Vastara has a specific focus on enabling international and NRI clients to invest in Indian real estate and land development. We handle all the complexities of cross-border investment including regulatory compliance, FEMA guidelines, documentation, and on-ground management, providing a completely managed experience.",
  },
  {
    question: "What makes Vastara different from other real estate developers?",
    answer:
      "Unlike typical real estate firms, Vastara offers a complete ecosystem — from land identification and excavation to architecture, interiors, and investment structuring. Backed by specialized SPVs with over two decades of execution experience, we provide end-to-end control and on-ground capability that few others can match.",
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 bg-[#FAF8F3]" aria-label="Frequently asked questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase body-font">
              FAQ
            </span>
            <span className="h-px w-10 bg-[#C9A84C]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] section-heading text-balance">
            Common{" "}
            <span className="text-[#C9A84C]">Questions</span>
          </h2>
          <p className="text-[#6E6E6E] leading-relaxed body-font text-lg">
            Everything you need to know about investing and partnering with Vastara.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-lg border transition-all duration-200 overflow-hidden ${
                open === idx ? "border-[#C9A84C] shadow-md" : "border-[#E8E0D0]"
              }`}
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === idx}
              >
                <span className={`font-semibold text-base body-font transition-colors ${open === idx ? "text-[#C9A84C]" : "text-[#1E1E1E]"}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center transition-all duration-200 ${open === idx ? "bg-[#C9A84C] text-white" : "bg-[#FAF8F3] text-[#4A4A4A]"}`}>
                  {open === idx ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              {open === idx && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-[#F2EDE4] mb-4" />
                  <p className="text-[#6E6E6E] leading-relaxed body-font">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
