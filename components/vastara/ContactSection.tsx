"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react"

const contactDetails = [
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 7030008011",
    href: "tel:7030008011",
  },
  {
    icon: <MessageCircle size={20} />,
    label: "WhatsApp",
    value: "+91 7030008011",
    href: "https://wa.me/917030008011",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value:
      "vastarainternational@gmail.com\ninfo@vastarainternationalproperties.com\nreshuguptavastara@gmail.com",
    href: "mailto:vastarainternational@gmail.com",
  },
  {
    icon: <MapPin size={20} />,
    label: "Address",
    value: "Sr No. 120/5, Row House No. 10, Ratan Park HSC Phase 2, Sus-Pashan, Pune 411021, Maharashtra",
    href: "https://maps.google.com/?q=18.543070,73.781616",
  },
  {
    icon: <Clock size={20} />,
    label: "Working Hours",
    value: "9:00 AM – 6:00 PM, Monday to Saturday",
    href: null,
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interestedIn: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          interestedIn: "",
          message: "",
        })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        const errorData = await response.json()
        setSubmitStatus("error")
        setErrorMessage(errorData.error || "Failed to send enquiry. Please try again.")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
      setErrorMessage("An error occurred. Please try again later.")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white" aria-label="Contact us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-3 md:gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 md:w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs md:text-sm font-semibold tracking-widest uppercase body-font">
              Contact Us
            </span>
            <span className="h-px w-8 md:w-10 bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] section-heading text-balance max-w-2xl">
            Get in Touch with{" "}
            <span className="text-[#C9A84C]">Vastara</span>
          </h2>
          <p className="text-[#6E6E6E] leading-relaxed body-font max-w-xl text-base md:text-lg">
            Ready to explore your next investment or development opportunity? Our team is here to guide you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left — Contact Info */}
          <div className="flex flex-col gap-6">
            {/* Contact Information Card */}
            <div className="bg-[#1E1E1E] rounded-lg md:rounded-xl p-6 md:p-8 flex flex-col gap-6">
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold section-heading mb-2">Contact Information</h3>
                <p className="text-white/60 body-font leading-relaxed text-sm md:text-base">
                  Reach out through any channel. Our team responds within one business day.
                </p>
              </div>

              <div className="flex flex-col gap-4 md:gap-5">
                {contactDetails.map((c) => (
                  <div key={c.label} className="flex gap-3 md:gap-4 items-start">
                    <div className="w-10 h-10 rounded-sm bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] flex-shrink-0 mt-0.5">
                      {c.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white/50 text-xs font-semibold uppercase tracking-wider body-font mb-1">
                        {c.label}
                      </div>
                      {c.href ? (
                        <div className="flex flex-col gap-1">
                          {c.value.split("\n").map((item, index) => (
                            <a
                              key={index}
                              href={`mailto:${item}`}
                              className="text-white text-sm md:text-base body-font hover:text-[#C9A84C] transition-colors break-words"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <span className="text-white text-sm md:text-base body-font block">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-1 rounded-full bg-[#C9A84C] mt-auto" />
            </div>

            {/* Map Embed */}
            <div className="rounded-lg md:rounded-xl overflow-hidden border border-[#E8E0D0] h-48 md:h-52">
              <iframe
                title="Vastara office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5!2d73.781616!3d18.543070!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMyJzM1LjEiTiA3M8KwNDYnNTMuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#FAF8F3] border border-[#E8E0D0] rounded-lg md:rounded-xl p-6 md:p-8">
            {submitStatus === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12 md:py-16">
                <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-green-600">
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1E1E1E] section-heading">Thank You!</h3>
                <p className="text-[#6E6E6E] body-font text-sm md:text-base">
                  Your enquiry has been received. Our team will get back to you within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitStatus("idle")
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      interestedIn: "",
                      message: "",
                    })
                  }}
                  className="text-[#C9A84C] font-semibold text-sm body-font hover:underline mt-2"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                <h3 className="text-[#1E1E1E] text-xl md:text-2xl font-bold section-heading mb-1 md:mb-2">
                  Send an Enquiry
                </h3>

                {/* Error Alert */}
                {submitStatus === "error" && (
                  <div className="flex gap-3 p-3 md:p-4 bg-red-50 border border-red-200 rounded-md">
                    <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm md:text-base body-font">{errorMessage}</p>
                  </div>
                )}

                {/* Name & Phone - Grid on desktop, stacked on mobile */}
                <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-xs md:text-sm font-semibold text-[#4A4A4A] body-font">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Rajesh Rawat"
                      className="px-3 md:px-4 py-2.5 md:py-3 bg-white border border-[#E8E0D0] rounded-sm text-sm text-[#1E1E1E] body-font placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs md:text-sm font-semibold text-[#4A4A4A] body-font">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="px-3 md:px-4 py-2.5 md:py-3 bg-white border border-[#E8E0D0] rounded-sm text-sm text-[#1E1E1E] body-font placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs md:text-sm font-semibold text-[#4A4A4A] body-font">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vastarainternational@gmail.com"
                    className="px-3 md:px-4 py-2.5 md:py-3 bg-white border border-[#E8E0D0] rounded-sm text-sm text-[#1E1E1E] body-font placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>

                {/* Interested In */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="interestedIn" className="text-xs md:text-sm font-semibold text-[#4A4A4A] body-font">
                    I am interested in
                  </label>
                  <select
                    id="interestedIn"
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    className="px-3 md:px-4 py-2.5 md:py-3 bg-white border border-[#E8E0D0] rounded-sm text-sm text-[#1E1E1E] body-font focus:outline-none focus:border-[#C9A84C] transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="Farmhouse Planning">Farmhouse Planning & Development</option>
                    <option value="Real Estate Investment">Real Estate Investment Opportunities</option>
                    <option value="Industrial Land">Industrial Land Readiness & Setup</option>
                    <option value="Architectural Planning">Architectural Planning & Coordination</option>
                    <option value="Land Development">Land Development</option>
                    <option value="Partnership">Partnership / Collaboration</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs md:text-sm font-semibold text-[#4A4A4A] body-font">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="px-3 md:px-4 py-2.5 md:py-3 bg-white border border-[#E8E0D0] rounded-sm text-sm text-[#1E1E1E] body-font placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 md:py-4 bg-[#C9A84C] text-white font-semibold rounded-sm hover:bg-[#9E7B2F] disabled:opacity-50 disabled:cursor-not-allowed transition-colors body-font text-sm md:text-base"
                >
                  <Send size={16} />
                  {isLoading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

