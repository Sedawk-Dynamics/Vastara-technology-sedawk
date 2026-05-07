"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, TrendingUp, MapPin, Award } from "lucide-react"

const trustBadges = [
  { icon: <Award size={20} />, value: "100+", label: "Acres Developed" },
  { icon: <TrendingUp size={20} />, value: "35+", label: "Investors Served" },
  { icon: <MapPin size={20} />, value: "25+", label: "Projects Completed" },
]

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Premium land development by Vastara"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/85 via-[#1A1A1A]/60 to-transparent" />
      </div>

      {/* Geometric gold accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-24 right-0 w-px h-64 bg-[#C9A84C]/30" />
        <div className="absolute top-24 right-12 w-px h-48 bg-[#C9A84C]/20" />
        <div className="absolute bottom-24 right-6 w-32 h-px bg-[#C9A84C]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            {/* <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase body-font">
                Vastara International Properties
              </span>
            </div> */}

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight section-heading text-balance">
              Transforming Land Into{" "}
              <span className="text-[#C9A84C]">Profitable Opportunities</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-white/80 leading-relaxed body-font max-w-lg">
              Integrated real estate, industrial development, and investment solutions for modern investors. From ground to growth — complete development solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A84C] text-white font-semibold rounded-sm hover:bg-[#9E7B2F] transition-all duration-200 body-font group"
              >
                Explore Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/60 text-white font-semibold rounded-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200 body-font"
              >
                Partner With Us
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-4 pt-6 border-t border-white/20">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C]">
                    {badge.icon}
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl section-heading">{badge.value}</div>
                    <div className="text-white/60 text-xs body-font">{badge.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual Composition */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Card grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Farmhouse Card */}
              <div className="relative rounded-lg overflow-hidden h-48 group">
                <Image
                  src="/farmhouse-planing.jpeg"
                  alt="Luxury farmhouse development"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider body-font">Farmhouse Living</span>
                  <p className="text-white text-sm font-semibold section-heading">Nature + Luxury</p>
                </div>
                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C9A84C]" />
              </div>

              {/* Industrial Card */}
              <div className="relative rounded-lg overflow-hidden h-48 group">
                <Image
                  src="/Industrial.png"
                  alt="Industrial land development"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider body-font">Industrial</span>
                  <p className="text-white text-sm font-semibold section-heading">Ready-to-Build Zones</p>
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C9A84C]" />
              </div>
            </div>

            {/* Investment Card - full width */}
            <div className="relative rounded-lg overflow-hidden h-40 group">
              <Image
                src="/roi.jpeg"
                alt="Land development investments"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider body-font">Investment Plots</span>
                {/* <p className="text-white text-lg font-bold section-heading">High ROI Opportunities</p> */}
                <p className="text-white text-sm font-semibold section-heading"> High ROI Opportunities
                  Pan India Presence</p>
                {/* <p className="text-white/70 text-sm body-font">
                  High ROI Opportunities
                  Pan India Presence</p> */}
              </div>
              {/* Floating badge */}
              {/* <div className="absolute right-5 top-1/2 -translate-y-1/2 bg-[#C9A84C] text-white rounded-sm px-3 py-2 text-center">
                <div className="text-lg font-bold section-heading">25%+</div>
                <div className="text-xs body-font">Est. ROI</div>
              </div> */}
            </div>

            {/* Tagline strip */}
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-sm px-5 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
              <p className="text-white/90 text-sm italic body-font">
                &ldquo;From Ground to Growth — Complete Development Solutions&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
