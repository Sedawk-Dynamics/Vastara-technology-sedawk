import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

interface ApproachSectionProps {
  heading: string
  bullets: string[]
  image: string
}

export default function ApproachSection({ heading, bullets, image }: ApproachSectionProps) {
  return (
    <section className="py-20 px-6 bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] font-playfair mb-8">
            {heading}
          </h3>
          <ul className="space-y-5">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <Check size={24} className="text-[#C9A84C] flex-shrink-0 mt-1" />
                <span className="text-base text-[#4A4A4A] leading-relaxed font-inter">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right: Image */}
        <div className="relative h-96 md:h-[500px]">
          <Image
            src={image}
            alt={heading}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
