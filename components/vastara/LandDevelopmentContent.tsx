"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import Image from "next/image"
import {
  TrendingUp,
  Compass,
  Gem,
  Search,
  ClipboardCheck,
  Layers,
  Sprout,
  Trees,
  Factory,
  Home,
  Building2,
  Landmark,
  type LucideIcon,
} from "lucide-react"

/* ---------------------------------------------------------------- *
 * Content — transcribed verbatim from the source document.
 * Wording and order must not change.
 * ---------------------------------------------------------------- */

const philosophyParagraphs = [
  "We believe development should respond to the land, not the other way around. Every site possesses distinct physical, environmental and economic characteristics that influence its future potential. Our role is to understand these characteristics before defining a development strategy, ensuring that every intervention is grounded in context, practicality and long-term relevance.",
  "Our decisions are guided by a simple principle: good development should leave a place stronger than it was before. Whether through improved infrastructure, enhanced usability, economic opportunity or responsible stewardship of natural resources, we strive to create outcomes that generate lasting value for both the site and the region it serves.",
]

const principles: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: TrendingUp,
    title: "1. Growth - Understand the Land",
    desc: "Exceptional developments begin with a deep understanding of where growth is headed. We evaluate infrastructure expansion, industrial investments, economic activity, demographic trends and market momentum to identify locations positioned for long-term appreciation. This forward-looking approach enables us to secure opportunities at the right stage of the growth cycle and establish a strong foundation for future value creation.",
  },
  {
    icon: Compass,
    title: "2. Potential - Develop According to the Land's Nature",
    desc: "Every parcel of land possesses unique opportunities. Our expertise lies in identifying and realizing its highest-value application through strategic planning, market alignment and intelligent land use. By matching each site with the most suitable development strategy, we enhance efficiency, strengthen commercial viability and create assets that perform at their full potential.",
  },
  {
    icon: Gem,
    title: "3. Value - Leave the Place Better Than Before",
    desc: "Great developments shape the future of a region. We focus on creating assets that attract investment, stimulate economic activity, strengthen connectivity and elevate the overall value of the surrounding area. Through thoughtful execution and long-term vision, each project becomes a catalyst for sustained growth, delivering enduring benefits for investors, communities and future generations.",
  },
]

const process: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Search,
    title: "Site Assessment & Development Strategy",
    desc: "We establish a comprehensive understanding of the site through the evaluation of location dynamics, accessibility, environmental conditions, regulatory considerations, infrastructure networks and surrounding growth patterns. This forms the basis of a clear and informed development strategy.",
  },
  {
    icon: ClipboardCheck,
    title: "Feasibility & Highest-Best Use Analysis",
    desc: "Each opportunity is assessed from technical, commercial, financial and operational perspectives to determine its highest and best use. This ensures that development decisions are supported by both market realities and implementation feasibility.",
  },
  {
    icon: Layers,
    title: "Infrastructure Planning & Site Readiness",
    desc: "Drawing upon our expertise in excavation, civil infrastructure and project execution, we evaluate the physical requirements necessary to prepare land for future development. This includes access planning, grading, utilities, drainage systems and supporting infrastructure.",
  },
  {
    icon: Sprout,
    title: "Long-Term Value Creation",
    desc: "Beyond project delivery, our focus remains on creating assets that retain relevance and utility over time. We seek development models that are adaptable, resilient and positioned to support future growth while preserving long-term value.",
  },
]

const opportunities: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Trees,
    title: "Farmhouse & Lifestyle Developments",
    desc: "Nature-responsive developments that integrate architecture, landscape, wellness, hospitality and recreation to create distinctive lifestyle destinations and long-term investment assets.",
  },
  {
    icon: Factory,
    title: "Industrial & Logistics Readiness",
    desc: "Strategically planned land solutions for manufacturing, warehousing, logistics, processing facilities and industrial operations requiring infrastructure-ready development platforms.",
  },
  {
    icon: Home,
    title: "Residential & Community Development",
    desc: "Well-planned residential environments designed to support future growth, community development and enhanced quality of life.",
  },
  {
    icon: Building2,
    title: "Commercial & Mixed-Use Projects",
    desc: "Integrated developments that combine commercial, hospitality, retail, institutional and community functions to maximize land utilization and long-term economic viability.",
  },
  {
    icon: Landmark,
    title: "Strategic Land Investments",
    desc: "Land assets positioned to benefit from future infrastructure expansion, industrial growth corridors, urbanization trends and emerging regional development opportunities.",
  },
]

/* ---------------------------------------------------------------- *
 * IntersectionObserver-driven scroll reveal.
 * ---------------------------------------------------------------- */
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

/* ---------------------------------------------------------------- */

export default function LandDevelopmentContent() {
  return (
    <main className="bg-white">
      {/* ===================== HERO ===================== */}
      <section className="relative flex h-[70vh] min-h-[460px] w-full items-center justify-center overflow-hidden pt-20">
        <Image
          src="/land-devlop-hero.jpeg"
          alt="Land Development"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-[#1E1E1E]/85" />
        <Reveal className="relative z-10 px-6 text-center">
          <GoldRule />
          <h1 className="section-heading text-5xl font-bold tracking-tight text-white md:text-7xl">
            Land Development
          </h1>
        </Reveal>
      </section>

      {/* ===================== INTRO ===================== */}
      <section className="px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="body-font text-lg leading-[1.9] text-[#4A4A4A] md:text-xl md:leading-[1.9]">
            We believe meaningful development happens when the unique strengths of a local
            landscape are aligned with broader economic, infrastructure and investment
            opportunities. By connecting local potential with regional and national growth
            drivers, we help transform land into assets that create value for landowners,
            investors businesses and communities alike.
          </p>
        </Reveal>
      </section>

      {/* ===================== PHILOSOPHY ===================== */}
      <section className="bg-[#FAF8F3] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>Our Development Philosophy</SectionHeading>

          <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
            {philosophyParagraphs.map((para, i) => (
              <p
                key={i}
                className="body-font text-lg leading-[1.9] text-[#4A4A4A]"
              >
                {para}
              </p>
            ))}
          </Reveal>

          {/* Growth · Potential · Value */}
          <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
            {principles.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={i * 0.08} className="h-full">
                  <article className="group flex h-full flex-col rounded-3xl border border-black/[0.07] bg-white p-8 shadow-[0_28px_60px_-34px_rgba(60,50,30,0.45)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:border-[#C9A84C]/40 hover:shadow-[0_44px_80px_-34px_rgba(60,50,30,0.5)]">
                    <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-[#C9A84C]/30 bg-[radial-gradient(circle_at_30%_25%,rgba(201,168,76,0.16),transparent_70%)] text-[#C9A84C] shadow-[inset_0_0_14px_rgba(201,168,76,0.12)] transition-transform duration-500 group-hover:scale-110">
                      <Icon size={26} strokeWidth={1.6} />
                    </span>
                    <h3 className="section-heading mb-4 text-xl font-semibold leading-snug text-[#1E1E1E]">
                      {item.title}
                    </h3>
                    <p className="body-font text-[15px] leading-[1.8] text-[#6E6E6E]">
                      {item.desc}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================== APPROACH ===================== */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <GoldRule />
            <h2 className="section-heading mb-8 text-3xl font-bold leading-tight text-[#1E1E1E] md:text-5xl">
              Our Development Approach
            </h2>
            <p className="body-font text-lg leading-[1.9] text-[#4A4A4A]">
              Land derives its greatest value when viewed within the context of the larger
              systems that influence it. Every site exists within a network of infrastructure,
              economic activity, environmental resources and community aspirations. Our approach
              is to understand these relationships and position land in a manner that supports
              both local opportunity and long-term regional growth. By evaluating land not as an
              isolated asset but as part of a broader ecosystem, we are able to identify
              development pathways that are commercially viable, infrastructure-aligned and
              capable of generating enduring value over time.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative h-80 overflow-hidden rounded-3xl shadow-[0_40px_80px_-40px_rgba(60,50,30,0.55)] md:h-[460px]">
            <Image
              src="/land-development.jpeg"
              alt="Our Development Approach"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
          </Reveal>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="bg-[#FAF8F3] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading>Our Development Process</SectionHeading>

          <div className="relative">
            {/* vertical connector line */}
            <span className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-[#C9A84C]/50 via-[#C9A84C]/30 to-transparent md:block" />
            <div className="space-y-7">
              {process.map((step, i) => {
                const Icon = step.icon
                return (
                  <Reveal key={step.title} delay={i * 0.06}>
                    <article className="group relative flex gap-5 rounded-3xl border border-black/[0.07] bg-white p-7 shadow-[0_24px_55px_-36px_rgba(60,50,30,0.45)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:border-[#C9A84C]/40 md:gap-7">
                      <span className="relative z-10 grid h-14 w-14 flex-none place-items-center rounded-2xl border border-[#C9A84C]/30 bg-white text-[#C9A84C] shadow-[inset_0_0_14px_rgba(201,168,76,0.12)] transition-transform duration-500 group-hover:scale-110">
                        <Icon size={26} strokeWidth={1.6} />
                      </span>
                      <div className="pt-1">
                        <h3 className="section-heading mb-2.5 text-xl font-semibold text-[#1E1E1E]">
                          {step.title}
                        </h3>
                        <p className="body-font text-[15px] leading-[1.8] text-[#6E6E6E]">
                          {step.desc}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OPPORTUNITIES ===================== */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>Our Development Opportunities</SectionHeading>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={(i % 3) * 0.07} className="h-full">
                  <article className="group flex h-full flex-col rounded-3xl border border-black/[0.07] bg-gradient-to-b from-white to-[#FAF8F3]/70 p-8 shadow-[0_28px_60px_-34px_rgba(60,50,30,0.4)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:border-[#C9A84C]/40 hover:shadow-[0_44px_80px_-34px_rgba(60,50,30,0.5)]">
                    <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-[#C9A84C]/30 bg-[radial-gradient(circle_at_30%_25%,rgba(201,168,76,0.16),transparent_70%)] text-[#C9A84C] shadow-[inset_0_0_14px_rgba(201,168,76,0.12)] transition-transform duration-500 group-hover:scale-110">
                      <Icon size={26} strokeWidth={1.6} />
                    </span>
                    <h3 className="section-heading mb-3 text-lg font-semibold leading-snug text-[#1E1E1E]">
                      {item.title}
                    </h3>
                    <p className="body-font text-[15px] leading-[1.8] text-[#6E6E6E]">
                      {item.desc}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl text-center">
            <p className="body-font text-lg leading-[1.9] text-[#4A4A4A]">
              By preserving natural landforms, optimizing resource utilization, minimizing
              unnecessary intervention, and designing efficient infrastructure systems, we create
              developments that are environmentally responsible, operationally resilient and
              economically sustainable over the long term.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== LET'S BUILD VALUE TOGETHER ===================== */}
      <section className="bg-[#FAF8F3] px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-4xl text-center">
          <GoldRule />
          <h2 className="section-heading mb-8 text-3xl font-bold leading-tight text-[#1E1E1E] md:text-5xl">
            Let&apos;s Build Value Together
          </h2>
          <div className="space-y-6">
            <p className="body-font text-lg leading-[1.9] text-[#4A4A4A]">
              Whether you are a landowner evaluating development potential, an investor seeking
              strategic opportunities or an organization planning future expansion, we offer a
              multidisciplinary perspective that combines land assessment, development planning,
              architectural insight, infrastructure expertise and execution capability.
            </p>
            <p className="body-font text-lg leading-[1.9] text-[#4A4A4A]">
              We welcome opportunities to collaborate on projects that create enduring value for
              stakeholders while contributing positively to the economic, physical and
              environmental development of the region.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ===================== GUIDING PRINCIPLE ===================== */}
      <section className="relative overflow-hidden bg-[#1A1A1A] px-6 py-24 md:py-32">
        {/* subtle gold ambiance */}
        <span className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <span className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
          <GoldRule />
          <p className="mb-10 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C] body-font">
            Our Guiding Principle
          </p>
          <p className="section-heading text-3xl font-bold leading-snug text-white md:text-5xl md:leading-[1.25]">
            Understand the Land. Respect its Nature. Leave it Better Than Before.
          </p>
          <p className="body-font mx-auto mt-10 max-w-2xl text-lg leading-[1.9] text-white/70">
            This principle guides our approach to land development, industrial readiness,
            farmhouse communities and strategic real estate opportunities — ensuring that every
            project is grounded in practicality, responsibility and long-term value creation.
          </p>
        </Reveal>
      </section>
    </main>
  )
}
