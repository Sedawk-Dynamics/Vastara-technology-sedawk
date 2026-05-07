import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden" aria-label="Call to action">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Vastara premium real estate development"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/75" />
      </div>

      {/* Gold geometric accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-12 w-20 h-20 border border-[#C9A84C]/30 rounded-lg" />
        <div className="absolute bottom-12 right-12 w-16 h-16 border border-[#C9A84C]/30 rounded-lg" />
        <div className="absolute top-1/2 left-8 -translate-y-1/2 w-px h-24 bg-[#C9A84C]/20" />
        <div className="absolute top-1/2 right-8 -translate-y-1/2 w-px h-24 bg-[#C9A84C]/20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase body-font">
            Let&apos;s Build Together
          </span>
          <span className="h-px w-10 bg-[#C9A84C]" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white section-heading text-balance">
          Let&apos;s Build Your Next{" "}
          <span className="text-[#C9A84C]">Investment Opportunity</span>
        </h2>

        <p className="text-white/75 text-lg leading-relaxed body-font max-w-2xl">
          Whether you are an investor, a business looking to establish in India, or a landowner seeking development — Vastara International Properties is your complete partner from ground to growth.
        </p>

        {/* Trust strip */}
        <div className="flex flex-wrap justify-center gap-6">
          {["100+ Acres Developed", "25+ Projects", "50+ Investors", "Pan India"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/80 text-sm body-font">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              {item}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-white font-semibold rounded-sm hover:bg-[#9E7B2F] transition-colors body-font group"
          >
            <Calendar size={18} />
            Schedule Consultation
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/50 text-white font-semibold rounded-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors body-font group"
          >
            Explore Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
