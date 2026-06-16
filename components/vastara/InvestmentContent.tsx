"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import Image from "next/image"
import {
  Target,
  MapPin,
  TrendingUp,
  Network,
  ShieldCheck,
  Banknote,
  Home,
  Building2,
  Warehouse,
  Hotel,
  Landmark,
  type LucideIcon,
} from "lucide-react"

/* ---------------------------------------------------------------- *
 * Content — transcribed verbatim from the source document.
 * Wording and order must not change.
 * ---------------------------------------------------------------- */

const introParagraphs = [
  "India's real estate market is entering a more structured phase, where value is increasingly shaped by infrastructure expansion, industrial growth, urban migration, warehousing demand and the need for development-ready land. For investors, the opportunity lies in identifying assets that can serve a clear future use — residential, commercial, industrial, hospitality or mixed-use.",
  "At Vastara, we focus on land and development opportunities that are backed by practical fundamentals: location strength, access, infrastructure visibility, usability, compliance readiness and exit potential. Our approach is designed for investors who seek real assets with clear purpose, development relevance and long-term value potential.",
]

const approachFactors: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Target,
    title: "Investing with Clarity & Confidence",
    desc: "Every investment opportunity is evaluated through a structured framework that focuses on the factors that influence long-term performance and future relevance.",
  },
  {
    icon: MapPin,
    title: "Location & Connectivity",
    desc: "Assessing accessibility, transportation networks, surrounding infrastructure and regional growth drivers that contribute to future demand.",
  },
  {
    icon: TrendingUp,
    title: "Development Potential",
    desc: "Understanding how the land can be utilized effectively based on market requirements, surrounding development and regulatory considerations.",
  },
  {
    icon: Network,
    title: "Infrastructure Influence",
    desc: "Evaluating the impact of existing and proposed infrastructure projects, industrial developments, logistics networks and urban expansion on future growth.",
  },
  {
    icon: ShieldCheck,
    title: "Practical Usability",
    desc: "Identifying opportunities that can support residential, commercial, industrial, hospitality or mixed-use applications based on their inherent characteristics.",
  },
  {
    icon: Banknote,
    title: "Exit & Liquidity Considerations",
    desc: "Understanding the pathways through which value can be realized, whether through development, leasing, partnerships, operational use or future disposition.",
  },
]

const opportunityCategories: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Home,
    title: "Residential Development Opportunities",
    desc: "Land suitable for plotted developments, residential communities, second homes and future urban expansion.",
  },
  {
    icon: Building2,
    title: "Commercial & Mixed-Use Opportunities",
    desc: "Strategically located assets capable of supporting retail, office, service-oriented businesses and integrated developments.",
  },
  {
    icon: Warehouse,
    title: "Industrial & Logistics Assets",
    desc: "Opportunities aligned with manufacturing, warehousing, logistics, processing facilities and industrial growth corridors.",
  },
  {
    icon: Hotel,
    title: "Hospitality & Lifestyle Projects",
    desc: "Sites suited for resorts, wellness retreats, farmhouse communities, destination developments and experiential hospitality ventures.",
  },
  {
    icon: Landmark,
    title: "Strategic Land Holdings",
    desc: "Land parcels located in regions benefiting from infrastructure investment, economic development and long-term growth potential.",
  },
]

/* IntersectionObserver-driven scroll reveal. */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}

/* Decorative section eyebrow rule (no text — purely visual). */
function GoldRule() {
  return (
    <span className="mx-auto mb-6 flex w-fit items-center gap-3">
      <span className="h-px w-9 bg-gradient-to-r from-transparent to-[#C9A84C]" />
      <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A84C]" />
      <span className="h-px w-9 bg-gradient-to-r from-[#C9A84C] to-transparent" />
    </span>
  )
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mb-12 text-center md:mb-16">
      <GoldRule />
      <h2 className="section-heading text-3xl font-bold leading-tight text-[#1E1E1E] md:text-5xl">
        {children}
      </h2>
    </Reveal>
  )
}

function Card({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: LucideIcon
  title: string
  desc: string
  delay: number
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col rounded-3xl border border-black/[0.07] bg-gradient-to-b from-white to-[#FAF8F3]/70 p-8 shadow-[0_28px_60px_-34px_rgba(60,50,30,0.4)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:border-[#C9A84C]/40 hover:shadow-[0_44px_80px_-34px_rgba(60,50,30,0.5)]">
        <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-[#C9A84C]/30 bg-[radial-gradient(circle_at_30%_25%,rgba(201,168,76,0.16),transparent_70%)] text-[#C9A84C] shadow-[inset_0_0_14px_rgba(201,168,76,0.12)] transition-transform duration-500 group-hover:scale-110">
          <Icon size={26} strokeWidth={1.6} />
        </span>
        <h3 className="section-heading mb-3 text-lg font-semibold leading-snug text-[#1E1E1E]">
          {title}
        </h3>
        <p className="body-font text-[15px] leading-[1.8] text-[#6E6E6E]">{desc}</p>
      </article>
    </Reveal>
  )
}

/* ---------------------------------------------------------------- */

export default function InvestmentContent() {
  return (
    <main className="bg-white">
      {/* ===================== HERO ===================== */}
      <section className="relative flex h-[70vh] min-h-[460px] w-full items-center justify-center overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
          alt="Real Estate Investment Opportunities"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-[#1E1E1E]/85" />
        <Reveal className="relative z-10 px-6 text-center">
          <GoldRule />
          <h1 className="section-heading text-4xl font-bold tracking-tight text-white md:text-6xl">
            Real Estate Investment Opportunities
          </h1>
        </Reveal>
      </section>

      {/* ===================== INTRO ===================== */}
      <section className="px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          {introParagraphs.map((para, i) => (
            <p
              key={i}
              className="body-font text-lg leading-[1.9] text-[#4A4A4A] md:text-xl md:leading-[1.9]"
            >
              {para}
            </p>
          ))}
        </Reveal>
      </section>

      {/* ===================== INVESTMENT APPROACH ===================== */}
      <section className="bg-[#FAF8F3] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>Investment Approach</SectionHeading>

          {/* Factor cards */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {approachFactors.map((item, i) => (
              <Card
                key={item.title}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                delay={(i % 3) * 0.07}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OPPORTUNITY CATEGORIES ===================== */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>Opportunity Categories</SectionHeading>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {opportunityCategories.map((item, i) => (
              <Card
                key={item.title}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                delay={(i % 3) * 0.07}
              />
            ))}
          </div>

          <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl text-center">
            <p className="body-font text-lg leading-[1.9] text-[#4A4A4A]">
              We work with investors, landowners, developers, business houses and strategic
              partners to identify and structure opportunities across emerging and established
              locations. Whether the objective is land acquisition, industrial expansion,
              farmhouse development, hospitality projects or long-term asset creation, Vastara
              brings a grounded understanding of land, execution and market direction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== CLOSING STATEMENT ===================== */}
      <section className="relative overflow-hidden bg-[#1A1A1A] px-6 py-24 md:py-32">
        <span className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <span className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
          <GoldRule />
          <p className="section-heading text-3xl font-bold leading-snug text-white md:text-5xl md:leading-[1.25]">
            Invest with clarity. Build with purpose. Create value that lasts.
          </p>
        </Reveal>
      </section>
    </main>
  )
}
