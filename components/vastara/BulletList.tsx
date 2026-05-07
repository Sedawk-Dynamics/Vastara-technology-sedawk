import React from 'react'
import { Check } from 'lucide-react'

interface BulletListProps {
  items: string[]
}

export default function BulletList({ items }: BulletListProps) {
  return (
    <div className="py-8">
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <Check className="w-6 h-6 text-[#C9A84C] flex-shrink-0 mt-1" />
            <span className="text-lg text-[#4A4A4A]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
