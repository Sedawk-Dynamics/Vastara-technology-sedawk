"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import Image from "next/image"
import {
  MapPin,
  Network,
  HardHat,
  ClipboardCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react"

/* ---------------------------------------------------------------- *
 * Content — transcribed verbatim from the source document.
 * Wording and order must not change.
 * ---------------------------------------------------------------- */

const introParagraphs = [
  "Industrial projects succeed when location, infrastructure, compliance and execution come together seamlessly. At Vastara, we help businesses identify, prepare and operationalize industrial sites by bringing together land development expertise, infrastructure readiness, regulatory coordination and on-ground execution capabilities.",
  "Whether supporting manufacturing facilities, logistics hubs, warehousing operations, processing units, industrial parks or international businesses establishing a presence in India, our focus is on creating sites that are aligned with operational requirements from day one.",
]

const whatThisIncludes: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: MapPin,
    title: "Industrial Site Identification",
    desc: "Selection of suitable land based on operational requirements, connectivity, workforce accessibility, logistics networks and industry-specific needs.",
  },
  {
    icon: Network,
    title: "Infrastructure Readiness",
    desc: "Assessment and planning of access roads, utilities, power availability, water requirements, drainage systems and supporting infrastructure essential for industrial operations.",
  },
  {
    icon: HardHat,
    title: "Site Preparation & Ground Development",
    desc: "Earthworks, excavation, grading, land conditioning and infrastructure preparation to ensure the site is ready for development and construction.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Project Coordination",
    desc: "Support across approvals, documentation, local coordination and stakeholder engagement to facilitate smoother project execution.",
  },
  {
    icon: TrendingUp,
    title: "Expansion & Future Planning",
    desc: "Evaluation of future growth requirements, scalability and infrastructure capacity to support long-term operational objectives.",
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

export default function IndustrialContent() {
  return (
    <main className="bg-white">
      {/* ===================== HERO ===================== */}
      <section className="relative flex h-[70vh] min-h-[460px] w-full items-center justify-center overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1920&q=80"
          alt="Industrial Land Readiness & Setup"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#1E1E1E]/90" />
        <Reveal className="relative z-10 max-w-4xl px-6 text-center">
          <GoldRule />
          <h1 className="section-heading text-4xl font-bold tracking-tight text-white md:text-6xl">
            Industrial Land Readiness &amp; Setup
          </h1>
          <p className="body-font mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Enabling Industrial Growth Through Infrastructure, Execution and Local Expertise
          </p>
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

      {/* ===================== WHAT THIS INCLUDES ===================== */}
      <section className="bg-[#FAF8F3] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>What This Includes?</SectionHeading>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {whatThisIncludes.map((item, i) => (
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

      {/* ===================== SUPPORTING BUSINESSES ENTERING INDIA ===================== */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <GoldRule />
            <h2 className="section-heading mb-8 text-3xl font-bold leading-tight text-[#1E1E1E] md:text-4xl">
              Supporting Businesses Entering India
            </h2>
            <div className="space-y-5">
              <p className="body-font text-lg leading-[1.9] text-[#4A4A4A]">
                As India continues to attract global industrial investment, successful market
                entry depends on the effective alignment of location, infrastructure, approvals
                and execution. Businesses benefit from local insight, reliable coordination and a
                clear development pathway.
              </p>
              <p className="body-font text-lg leading-[1.9] text-[#4A4A4A]">
                Vastara acts as a strategic development partner, bridging the gap between
                investment intent and operational reality while supporting a smooth and efficient
                establishment process.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative h-80 overflow-hidden rounded-3xl shadow-[0_40px_80px_-40px_rgba(60,50,30,0.55)] md:h-[460px]">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80"
              alt="Supporting Businesses Entering India"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
          </Reveal>
        </div>
      </section>

      {/* ===================== BUILDING THE FOUNDATIONS ===================== */}
      <section className="bg-[#FAF8F3] px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-4xl text-center">
          <GoldRule />
          <h2 className="section-heading mb-8 text-3xl font-bold leading-tight text-[#1E1E1E] md:text-5xl">
            Building the Foundations for Industrial Success
          </h2>
          <p className="body-font text-lg leading-[1.9] text-[#4A4A4A]">
            Every successful industrial project begins with a site that is prepared for
            performance. Through our integrated capabilities across land development, excavation,
            infrastructure, compliance support, architecture and execution management, we help
            create industrial environments that support productivity, scalability and long-term
            operational success.
          </p>
        </Reveal>
      </section>

      {/* ===================== CLOSING STATEMENT ===================== */}
      <section className="relative overflow-hidden bg-[#1A1A1A] px-6 py-24 md:py-32">
        <span className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <span className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
          <GoldRule />
          <p className="section-heading text-3xl font-bold leading-snug text-white md:text-5xl md:leading-[1.25]">
            From Land Selection to Operational Readiness.
          </p>
          <p className="section-heading mt-4 text-2xl font-bold leading-snug text-[#C9A84C] md:text-4xl">
            Built for Industry. Prepared for Growth.
          </p>
        </Reveal>
      </section>
    </main>
  )
}
