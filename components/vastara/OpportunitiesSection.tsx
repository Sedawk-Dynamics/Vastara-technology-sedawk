import Image from "next/image"
import Link from "next/link"
import { MapPin, TrendingUp, ArrowRight } from "lucide-react"

const opportunities = [
  {
    id: "farmhouse",
    tag: "Farmhouse Living",
    title: "Luxury Nature-Based Living",
    description: "Premium farmhouse projects combining nature, privacy, and lifestyle with strong long-term investment value. Ideal for weekend retreats and permanent residences.",
    image: "/Farmhouse-Living.png",
    location: "Pune Region, Maharashtra",
    roi: "10-12%",
    roiLabel: "Expected Returns",
    href: "/vertical/farmhouse",
  },
  {
    id: "industrial",
    tag: "Industrial Development",
    title: "Ready-to-Build Industrial Zones",
    description: "Strategically located industrial land with full infrastructure readiness, compliance support, and end-to-end project management for businesses and global investors",
    image: "/Industrial.png",
    location: "Pan India",
    roi: "12-15%",
    roiLabel: "Capital Appreciation",
    href: "/vertical/industrial",
  },
  {
    id: "investment",
    tag: "Investment Plots",
    title: "High ROI Land Opportunities",
    description: "Curated strategic land parcels in high-growth corridors, selected for future infrastructure development, industrial expansion, and residential demand",
    image: "/Plot-Inv.png",
    location: "Growth Corridors India",
    roi: "25%+",
    roiLabel: "Annual ROI",
    href: "/vertical/investment",
  },
]

export default function OpportunitiesSection() {
  return (
    <section id="investment" className="py-24 bg-[#FAF8F3]" aria-label="Featured opportunities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase body-font">
              Featured Opportunities
            </span>
            <span className="h-px w-10 bg-[#C9A84C]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] section-heading text-balance max-w-2xl">
            Invest in{" "}
            <span className="text-[#C9A84C]">High-Value Land</span>
          </h2>
          <p className="text-[#6E6E6E] leading-relaxed body-font max-w-xl text-lg">
            Explore our curated portfolio of land and development opportunities designed for long-term prosperity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opp) => (
            <article
              key={opp.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-[#E8E0D0] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={opp.image}
                  alt={opp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag - Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#C9A84C] text-white text-xs font-semibold px-3 py-1.5 rounded-sm body-font uppercase tracking-wide">
                    {opp.tag}
                  </span>
                </div>
                {/* ROI Badge - Bottom Right */}
                <div className="absolute bottom-4 right-4 bg-white/95 rounded-sm px-3 py-2 text-center shadow">
                  <div className="text-[#C9A84C] text-lg font-bold section-heading leading-none">{opp.roi}</div>
                  <div className="text-[#6E6E6E] text-[10px] body-font">{opp.roiLabel}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                {/* Location */}
                <div className="flex items-center gap-1.5 text-[#6E6E6E] text-sm body-font">
                  <MapPin size={14} className="text-[#C9A84C]" />
                  {opp.location}
                </div>

                <h3 className="text-[#1E1E1E] text-xl font-bold section-heading">{opp.title}</h3>
                <p className="text-[#6E6E6E] text-sm leading-relaxed body-font">{opp.description}</p>

                {/* ROI strip */}
                <div className="flex items-center gap-2 py-3 border-t border-[#E8E0D0] mt-1">
                  <TrendingUp size={15} className="text-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-sm font-semibold body-font">{opp.roi} {opp.roiLabel}</span>
                </div>

                {/* CTA */}

                {/* CTA */}
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#C9A84C] text-white text-sm font-semibold rounded-sm hover:bg-[#9E7B2F] transition-colors body-font group/btn"
                >
                  Enquire Now
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={opp.href}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm font-semibold rounded-sm hover:bg-[#C9A84C] hover:text-white transition-all body-font group/btn"
                >
                  Read More
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
