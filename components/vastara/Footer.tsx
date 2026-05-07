"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Investment", href: "#investment" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  { label: "Land Development", href: "#services" },
  { label: "Farmhouse Planning", href: "#farmhouse" },
  { label: "Industrial Setup", href: "#industrial" },
  { label: "Investment Advisory", href: "#investment" },
  { label: "Architecture & Interiors", href: "#services" },
  { label: "Ground Execution", href: "#services" },
]

const socialLinks = [
  { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
  { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
  { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
  { icon: <Youtube size={18} />, href: "#", label: "YouTube" },
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer style={{ backgroundColor: "#1A1A1A" }} aria-label="Site footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Link href="#home">
              <Image
                src="/Footer-logo.png"
                alt="Vastara International Properties"
                width={380}
                height={120}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed body-font">
              From Ground to Growth — Vastara delivers integrated real estate, land development, and investment solutions across India.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:7030008011" className="flex items-center gap-2.5 text-white/70 text-sm hover:text-[#C9A84C] transition-colors body-font">
                <Phone size={14} className="text-[#C9A84C]" />
                +91 7030008011
              </a>
              <a href="mailto:info@vastarainternationalproperties.com" className="flex items-center gap-2.5 text-white/70 text-sm hover:text-[#C9A84C] transition-colors body-font">
                <Mail size={14} className="text-[#C9A84C]" />
                info@vastarainternationalproperties.com
              </a>
              <div className="flex items-start gap-2.5 text-white/70 text-sm body-font">
                <MapPin size={14} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                Sus-Pashan, Pune 411021, Maharashtra
              </div>
            </div>
            {/* Socials */}
            <div className="flex gap-3 mt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#C9A84C] hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-base section-heading">Quick Links</h3>
            <div className="h-px w-8 bg-[#C9A84C]" />
            <nav className="flex flex-col gap-2.5" aria-label="Footer quick links">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-white/60 text-sm body-font hover:text-[#C9A84C] hover:pl-1 transition-all duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Services */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-base section-heading">Our Services</h3>
            <div className="h-px w-8 bg-[#C9A84C]" />
            <nav className="flex flex-col gap-2.5" aria-label="Footer services links">
              {serviceLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-white/60 text-sm body-font hover:text-[#C9A84C] hover:pl-1 transition-all duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4 — Newsletter */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-base section-heading">Newsletter</h3>
            <div className="h-px w-8 bg-[#C9A84C]" />
            <p className="text-white/60 text-sm leading-relaxed body-font">
              Stay updated with the latest investment opportunities, project launches, and market insights from Vastara.
            </p>
            {subscribed ? (
              <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-sm px-4 py-3 text-[#C9A84C] text-sm body-font">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white text-sm body-font placeholder:text-white/40 focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#C9A84C] text-white text-sm font-semibold rounded-sm hover:bg-[#9E7B2F] transition-colors body-font"
                >
                  <Send size={14} />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs body-font text-center sm:text-left">
            &copy; {new Date().getFullYear()} Vastara International Properties Private Limited. All rights reserved.
          </p>
          <p className="text-white/40 text-xs body-font">
            Sr No. 120/5, Sus-Pashan, Pune 411021, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  )
}
