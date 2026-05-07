import React from 'react'
import Image from 'next/image'

interface PageHeroProps {
  title: string
  subtitle: string
  backgroundImage: string
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-96 md:h-[500px] w-full overflow-hidden pt-28 mb-12 md:mb-16">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="absolute inset-0 object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-playfair">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 font-light">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
