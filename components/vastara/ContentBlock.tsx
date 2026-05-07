import React from 'react'

interface ContentBlockProps {
  title?: string
  description: string
}

export default function ContentBlock({ title, description }: ContentBlockProps) {
  return (
    <div className="py-12">
      {title && (
        <h2 className="text-4xl font-bold text-[#1E1E1E] mb-6 font-playfair">
          {title}
        </h2>
      )}
      <p className="text-lg text-[#4A4A4A] leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  )
}
