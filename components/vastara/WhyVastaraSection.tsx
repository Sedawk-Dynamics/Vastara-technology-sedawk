import { CheckCircle2, Globe, BarChart3, ShieldCheck } from "lucide-react"

const advantages = [
  {
    icon: <CheckCircle2 size={32} />,
    title: "End-to-End Execution",
    description:
      "From land identification and compliance to infrastructure readiness and interior execution — we manage every stage so you can focus on growth.",
    stat: "25+",
    statLabel: "Projects Delivered",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Market Expertise",
    description:
      "Backed by over two decades of execution expertise across excavation, infrastructure, and interiors through our specialized SPV ecosystem.",
    stat: "25+",
    statLabel: "Years Experience",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Transparent Investment Process",
    description:
      "Every project is executed with full transparency, clear documentation, and disciplined processes — ensuring our clients invest with complete confidence.",
    stat: "35+",
    statLabel: "Investors Trusted",
  },
  {
    icon: <Globe size={32} />,
    title: "Global Expansion Vision",
    description:
      "We simplify entry for international clients by managing land sourcing, development, and compliance, bridging the gap between global vision and Indian execution.",
    stat: "Pan",
    statLabel: "India Presence",
  },
]

export default function WhyVastaraSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" aria-label="Why choose Vastara">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 12px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase body-font">
              Why Choose Us
            </span>
            <span className="h-px w-10 bg-[#C9A84C]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] section-heading text-balance max-w-2xl">
            The Vastara{" "}
            <span className="text-[#C9A84C]">Advantage</span>
          </h2>
          <p className="text-[#6E6E6E] leading-relaxed body-font max-w-xl text-lg">
            What truly sets us apart is our ability to combine strategic insight with real, on-ground execution.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => (
            <div
              key={adv.title}
              className="group relative flex flex-col gap-5 p-7 bg-[#FAF8F3] border border-[#E8E0D0] rounded-lg hover:border-[#C9A84C] hover:shadow-md transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute top-5 right-5 text-[#C9A84C]/10 text-6xl font-bold section-heading leading-none select-none">
                0{idx + 1}
              </div>

              {/* Icon */}
              <div className="text-[#C9A84C]">{adv.icon}</div>

              {/* Stat */}
              <div>
                <div className="text-3xl font-bold text-[#1E1E1E] section-heading">{adv.stat}</div>
                <div className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider body-font">{adv.statLabel}</div>
              </div>

              {/* Content */}
              <div className="h-px w-8 bg-[#C9A84C]" />
              <h3 className="text-[#1E1E1E] text-lg font-bold section-heading">{adv.title}</h3>
              <p className="text-[#6E6E6E] text-sm leading-relaxed body-font">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
