"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Mehta",
    designation: "Private Investor",
    company: "Mehta Capital Group",
    rating: 5,
    quote:
      "Vastara brought an entirely new level of professionalism to land investment. Their end-to-end approach — from site selection to compliance to development — is unlike anything else in the market. I've seen returns that exceeded my expectations within 3 years.",
    initial: "R",
  },
  {
    name: "Priya Nair",
    designation: "Business Owner",
    company: "TechFab Industries",
    rating: 5,
    quote:
      "Establishing our manufacturing unit in India seemed overwhelming — until we partnered with Vastara. They handled everything: land identification, regulatory clearances, and infrastructure setup. The process was transparent and the execution was flawless.",
    initial: "P",
  },
  {
    name: "Anand Sharma",
    designation: "NRI Investor",
    company: "Sharma Holdings, Dubai",
    rating: 5,
    quote:
      "As an NRI, investing in Indian land always felt risky due to compliance and on-ground management challenges. Vastara solved all of that. Their clarity, documentation, and communication gave me complete confidence throughout the investment journey.",
    initial: "A",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="py-24 bg-white" aria-label="Client testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase body-font">
              Testimonials
            </span>
            <span className="h-px w-10 bg-[#C9A84C]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] section-heading text-balance max-w-2xl">
            Trusted by{" "}
            <span className="text-[#C9A84C]">Investors & Businesses</span>
          </h2>
        </div>

        {/* Testimonial Cards — Desktop: show 3, Mobile: slider */}
        {/* Mobile Slider */}
        <div className="lg:hidden">
          <div className="bg-[#FAF8F3] border border-[#E8E0D0] rounded-xl p-8 relative">
            <Quote size={48} className="text-[#C9A84C]/20 mb-4" />
            <div className="flex mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} fill="#C9A84C" className="text-[#C9A84C]" />
              ))}
            </div>
            <p className="text-[#4A4A4A] leading-relaxed body-font italic mb-6">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center text-white font-bold text-lg section-heading">
                {t.initial}
              </div>
              <div>
                <div className="text-[#1E1E1E] font-bold body-font">{t.name}</div>
                <div className="text-[#6E6E6E] text-sm body-font">{t.designation}, {t.company}</div>
              </div>
            </div>
            {/* Nav */}
            <div className="flex gap-3 mt-6">
              <button onClick={prev} className="w-10 h-10 border border-[#E8E0D0] rounded-sm flex items-center justify-center text-[#4A4A4A] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors" aria-label="Previous testimonial">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="w-10 h-10 border border-[#E8E0D0] rounded-sm flex items-center justify-center text-[#4A4A4A] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors" aria-label="Next testimonial">
                <ChevronRight size={18} />
              </button>
              <div className="flex items-center gap-2 ml-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-[#C9A84C]" : "w-1.5 bg-[#E8E0D0]"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: All 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`flex flex-col gap-4 p-8 rounded-xl border transition-all duration-300 ${
                idx === 1
                  ? "bg-[#1E1E1E] border-[#C9A84C]/30 shadow-xl scale-105"
                  : "bg-[#FAF8F3] border-[#E8E0D0]"
              }`}
            >
              <Quote size={36} className={idx === 1 ? "text-[#C9A84C]/40" : "text-[#C9A84C]/20"} />
              <div className="flex">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#C9A84C" className="text-[#C9A84C]" />
                ))}
              </div>
              <p className={`leading-relaxed body-font italic flex-1 text-sm ${idx === 1 ? "text-white/80" : "text-[#4A4A4A]"}`}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E8E0D0]/20">
                <div className="w-11 h-11 rounded-full bg-[#C9A84C] flex items-center justify-center text-white font-bold section-heading">
                  {t.initial}
                </div>
                <div>
                  <div className={`font-bold body-font text-sm ${idx === 1 ? "text-white" : "text-[#1E1E1E]"}`}>{t.name}</div>
                  <div className={`text-xs body-font ${idx === 1 ? "text-white/60" : "text-[#6E6E6E]"}`}>{t.designation}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
