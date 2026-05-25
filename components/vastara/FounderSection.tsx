import Image from "next/image"
import Link from "next/link"
import { Linkedin, User, Award, BarChart2, Globe2, TrendingUp } from "lucide-react"

const achievements = [
  { icon: <Award size={16} />, value: "100+", label: "Acres Developed" },
  { icon: <BarChart2 size={16} />, value: "25+", label: "Projects Delivered" },
  { icon: <TrendingUp size={16} />, value: "50+", label: "Investors Trusted" },
  { icon: <Globe2 size={16} />, value: "Pan India", label: "Global Vision" },
]

export default function FounderSection() {
  return (
    <section className="bg-[#FAF8F3]" aria-label="Meet our founder">

      {/* ================= JAY BHAGWAN SECTION ================= */}
      <div className="py-24 border-t border-[#E8E0D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Image */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/jb.jpeg"
                  alt="Jay Bhagwan"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Achievement cards (same style) */}
              <div className="absolute -bottom-6 -right-4 grid grid-cols-2 gap-3 w-56">
                {achievements.map((a) => (
                  <div key={a.label} className="bg-white border rounded-lg p-3 shadow-md">
                    <div className="text-[#C9A84C]">{a.icon}</div>
                    <div className="font-bold text-sm">{a.value}</div>
                    <div className="text-xs text-[#6E6E6E]">{a.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Content */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
                  Leadership
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E]">
                Execution Excellence{" "}
                <span className="text-[#C9A84C]">That Builds Foundations</span>
              </h2>

              <div>
                <div className="text-2xl font-bold text-[#1E1E1E]">
                  Jay Bhagwan
                </div>
                <div className="text-[#C9A84C] font-semibold mt-1">
                  Director | Vastara International Properties Private Limited
                </div>
              </div>

              <div className="h-px bg-[#E8E0D0] w-full" />

              <p className="text-[#4A4A4A] leading-relaxed text-lg">
                Mr. Jay Bhagwan brings over 30+ years of deep-rooted expertise in infrastructure execution,
                specializing in large-scale excavation, mining operations, and complex earthworks.
              </p>

              <p className="text-[#6E6E6E] leading-relaxed">
                Having worked alongside industry leaders such as Larsen & Toubro and Delhi Metro Rail Corporation (DMRC),
                he has delivered high-impact projects across challenging terrains where precision and discipline are critical.
              </p>

              <p className="text-[#4A4A4A] leading-relaxed text-lg">
                At Vastara, he anchors execution excellence—ensuring seamless project delivery,
                optimized resource utilization, and uncompromising quality standards across every development.
              </p>

              <p className="text-[#6E6E6E] leading-relaxed">
                His practical understanding of ground realities and solution-driven mindset enables the company
                to build stable, future-ready developments rooted in strength, reliability, and sustainability.
              </p>

              <div className="border-l-4 border-[#C9A84C] pl-5 py-1 bg-[#C9A84C]/5 rounded-r-lg">
                <p className="text-[#4A4A4A] italic">
                  “True development is built on a strong foundation — both in the ground we construct
                  and the values we stand upon.”
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white text-sm"
                >
                  <User size={15} /> View Full Profile
                </Link>

                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm"
                >
                  <Linkedin size={15} /> Connect
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= EXISTING LEADERSHIP SECTION ================= */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Content */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase body-font">
                  Leadership
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] section-heading">
                Meet the Vision{" "}
                <span className="text-[#C9A84C]">Behind Vastara</span>
              </h2>

              <div>
                <div className="text-2xl font-bold text-[#1E1E1E]">Reshu Gupta</div>
                <div className="text-[#C9A84C] font-semibold mt-1">
                  Director | Vastara International Properties Private Limited
                </div>
              </div>

              <div className="h-px bg-[#E8E0D0] w-full" />

              <p className="text-[#4A4A4A] leading-relaxed text-lg">
                Ms. Reshu Gupta brings a rare combination of architectural depth, strategic investment acumen, and global perspective to Vastara International Properties Private Limited. With over two decades of experience across architecture, interior environments, and real estate development, she has consistently worked at the intersection of design excellence and value creation.
              </p>



              <p className="text-[#6E6E6E] leading-relaxed">
                Her core strength lies in translating vision into well-structured, execution-ready developments. With a strong foundation in architectural planning and spatial design, she ensures that every project reflects clarity of thought, functional efficiency, and refined aesthetics. Her exposure to international design standards and evolving global real estate trends enables her to bring a forward-looking approach to every development.
              </p>


              <p className="text-[#4A4A4A] leading-relaxed text-lg">
                Beyond design, Ms. Gupta plays a critical role in shaping the company’s investment strategy—identifying opportunities, evaluating project viability, and aligning developments with long-term growth and sustainability. Her ability to integrate creative vision with financial prudence ensures that each project is not only thoughtfully designed but also commercially robust.
              </p>

              <p className="text-[#6E6E6E] leading-relaxed">
                At Vastara, she is instrumental in defining the company’s design philosophy and strategic direction, contributing to the creation of stable, future-ready assets built on strong fundamentals and enduring value.
              </p>

              <div className="border-l-4 border-[#C9A84C] pl-5 py-1 bg-[#C9A84C]/5 rounded-r-lg">
                <p className="text-[#4A4A4A] italic">
                  “Great developments are not just constructed—they are envisioned with clarity, executed with precision, and sustained through purpose.”
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white text-sm"
                >
                  <User size={15} /> View Full Profile
                </Link>

                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm"
                >
                  <Linkedin size={15} /> Connect
                </Link>
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/reshu-gupta.jpeg"
                  alt="Reshu Gupta"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 grid grid-cols-2 gap-3 w-56">
                {achievements.map((a) => (
                  <div key={a.label} className="bg-white border rounded-lg p-3 shadow-md">
                    <div className="text-[#C9A84C]">{a.icon}</div>
                    <div className="font-bold text-sm">{a.value}</div>
                    <div className="text-xs text-[#6E6E6E]">{a.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}