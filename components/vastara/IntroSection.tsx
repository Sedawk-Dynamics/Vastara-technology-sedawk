import React from 'react'

interface IntroSectionProps {
  eyebrow: string
  heading: string
  paragraphs: string[]
}

export default function IntroSection({ eyebrow, heading, paragraphs }: IntroSectionProps) {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-center">
      <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">
        {eyebrow}
      </p>
      <h2 className="text-5xl md:text-6xl font-bold text-[#1E1E1E] font-playfair mb-8">
        {heading}
      </h2>
      <div className="space-y-6">
        {paragraphs.map((para, idx) => (
          <p key={idx} className="text-lg text-[#4A4A4A] leading-relaxed font-inter">
            {para}
          </p>
        ))}
      </div>
    </section>
  )
}
