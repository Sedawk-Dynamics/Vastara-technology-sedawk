"use client"

import { TrendingUp, ShieldCheck, Clock } from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

const growthData = [
  { year: "2019", value: 100 },
  { year: "2020", value: 112 },
  { year: "2021", value: 128 },
  { year: "2022", value: 152 },
  { year: "2023", value: 184 },
  { year: "2024", value: 220 },
  { year: "2025", value: 270 },
]

const metrics = [
  {
    icon: <TrendingUp size={22} />,
    value: "10–12%+",
    label: "Annual Appreciation",
    desc: "Consistent land value growth across high-potential corridors.",
  },
  {
    icon: <ShieldCheck size={22} />,
    value: "100%",
    label: "Transparent Deals",
    desc: "Full documentation and compliance on every transaction.",
  },
  {
    icon: <Clock size={22} />,
    value: "5–7 Yr",
    label: "Optimal Hold Period",
    desc: "Maximum value realization in medium-term land investments.",
  },
]

export default function InvestmentSection() {
  return (
    <section id="farmhouse" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
              Investment Intelligence
            </span>
            <span className="h-px w-10 bg-[#C9A84C]" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] max-w-2xl">
            Why Smart Investors{" "}
            <span className="text-[#C9A84C]">Choose Land</span>
          </h2>

          <p className="text-[#6E6E6E] max-w-xl text-lg">
            Land has consistently outperformed other asset classes in India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Chart */}
          <div className="bg-[#FAF8F3] border border-[#E8E0D0] rounded-xl p-6">
            <div className="flex justify-between mb-6">
              <div>
                <div className="font-bold text-lg">
                  Land Value Appreciation Index
                </div>
                <div className="text-sm text-[#6E6E6E]">
                  2019–2025 Growth Trend
                </div>
              </div>
              <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 px-3 py-1 text-sm text-[#C9A84C] font-semibold">
                +170% 6Y
              </div>
            </div>

            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#C9A84C" stopOpacity={0.02} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#E8E0D0" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#C9A84C"
                  strokeWidth={2.5}
                  fill="url(#goldGrad)"
                  dot={{ r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-6">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`group relative flex flex-col items-center text-center gap-3 p-6 bg-[#FAF8F3] border border-[#E8E0D0] rounded-lg 
                transition-all duration-300 ease-out 
                hover:-translate-y-1 hover:shadow-xl hover:border-[#C9A84C]/60
                ${i === 2 ? "col-span-2 max-w-sm mx-auto" : ""}`}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#C9A84C]/10 via-transparent to-transparent pointer-events-none" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-md bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] 
                transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:text-white group-hover:scale-110">
                  {m.icon}
                </div>

                {/* Value */}
                <div className="text-3xl font-bold text-[#1E1E1E] transition-colors duration-300 group-hover:text-[#C9A84C]">
                  {m.value}
                </div>

                {/* Label */}
                <div className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider">
                  {m.label}
                </div>

                {/* Description */}
                <p className="text-[#6E6E6E] text-sm leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}