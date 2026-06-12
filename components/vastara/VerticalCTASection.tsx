import React from 'react'
import Link from 'next/link'
import ContactSection from '@/components/vastara/ContactSection'

export default function VerticalCTASection() {
  return (
    <>
      <section className="py-16">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            href="#contact"
            className="flex items-center justify-center px-8 py-4 rounded-lg bg-[#C9A84C] text-white text-lg font-semibold hover:bg-[#9E7B2F] transition-colors duration-200"
          >
            Contact Us
          </Link>

          <a
            href="https://wa.me/917709008011"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 rounded-lg border-2 border-[#C9A84C] text-[#C9A84C] text-lg font-semibold hover:bg-[#FDF8F1] transition-colors duration-200"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* Contact form target — makes the "Contact Us" #contact link work on every page */}
      {/* <ContactSection /> */}
    </>
  )
}
