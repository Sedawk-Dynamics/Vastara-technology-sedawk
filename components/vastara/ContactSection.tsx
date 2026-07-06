"use client"

import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

const contactDetails = [
  {
    icon: <Phone size={20} />,
    label: "Phone",
    items: [
      {
        text: "+91 9540295402",
        href: "tel:+919540295402",
      },
      {
        text: "+91 7030008011",
        href: "tel:+917030008011",
      },
    ],
  },
  {
    icon: <MessageCircle size={20} />,
    label: "WhatsApp",
    items: [
      {
        text: "+91 7030008011",
        href: "https://wa.me/917030008011",
      },
    ],
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    items: [
      {
        text: "vastarainternational@gmail.com",
        href: "mailto:vastarainternational@gmail.com",
      },
      {
        text: "info@vastarainternationalproperties.com",
        href: "mailto:info@vastarainternationalproperties.com",
      },
      {
        text: "reshuguptavastara@gmail.com",
        href: "mailto:reshuguptavastara@gmail.com",
      },
    ],
  },
  {
    icon: <MapPin size={20} />,
    label: "Address",
    items: [
      {
        text: "Sr No. 120/5, Row House No. 10, Ratan Park HSC Phase 2, Sus-Pashan, Pune 411021, Maharashtra",
        href: "https://maps.google.com/?q=18.543070,73.781616",
      },
    ],
  },
  {
    icon: <Clock size={20} />,
    label: "Working Hours",
    items: [
      {
        text: "9:00 AM – 6:00 PM, Monday to Saturday",
        href: null,
      },
    ],
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

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")

  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setIsLoading(true)
    setErrorMessage("")
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      } else {
        const errorData = await response.json()

        setSubmitStatus("error")

        setErrorMessage(
          errorData.error ||
            "Failed to send enquiry. Please try again."
        )

        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)

      setSubmitStatus("error")

      setErrorMessage(
        "An error occurred. Please try again later."
      )

      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="bg-white py-16 md:py-24"
      aria-label="Contact us"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center md:mb-16 md:gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A84C] md:w-10" />

            <span className="body-font text-xs font-semibold uppercase tracking-widest text-[#C9A84C] md:text-sm">
              Contact Us
            </span>

            <span className="h-px w-8 bg-[#C9A84C] md:w-10" />
          </div>

          <h2 className="section-heading max-w-2xl text-balance text-3xl font-bold text-[#1E1E1E] md:text-4xl lg:text-5xl">
            Get in Touch with{" "}
            <span className="text-[#C9A84C]">
              Vastara
            </span>
          </h2>

          <p className="body-font max-w-xl text-base leading-relaxed text-[#6E6E6E] md:text-lg">
            Ready to explore your next investment or development
            opportunity? Our team is here to guide you.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div className="flex flex-col gap-6">

            {/* Contact Information Card */}
            <div className="flex flex-col gap-6 rounded-lg bg-[#1E1E1E] p-6 md:rounded-xl md:p-8">

              <div>
                <h3 className="section-heading mb-2 text-xl font-bold text-white md:text-2xl">
                  Contact Information
                </h3>

                <p className="body-font text-sm leading-relaxed text-white/60 md:text-base">
                  Reach out through any channel. Our team responds
                  within one business day.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-4 md:gap-5">
                {contactDetails.map((contact) => (
                  <div
                    key={contact.label}
                    className="flex items-start gap-3 md:gap-4"
                  >
                    {/* Icon */}
                    <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm border border-[#C9A84C]/30 bg-[#C9A84C]/15 text-[#C9A84C]">
                      {contact.icon}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="body-font mb-1 text-xs font-semibold uppercase tracking-wider text-white/50">
                        {contact.label}
                      </div>

                      <div className="flex flex-col gap-1">
                        {contact.items.map((item, index) =>
                          item.href ? (
                            <a
                              key={index}
                              href={item.href}
                              target={
                                contact.label === "WhatsApp" ||
                                contact.label === "Address"
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                contact.label === "WhatsApp" ||
                                contact.label === "Address"
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="body-font break-words text-sm text-white transition-colors hover:text-[#C9A84C] md:text-base"
                            >
                              {item.text}
                            </a>
                          ) : (
                            <span
                              key={index}
                              className="body-font block text-sm text-white md:text-base"
                            >
                              {item.text}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto h-1 rounded-full bg-[#C9A84C]" />
            </div>

            {/* Google Map */}
            <div className="h-48 overflow-hidden rounded-lg border border-[#E8E0D0] md:h-52 md:rounded-xl">
              <iframe
                title="Vastara office location"
                src="https://www.google.com/maps?q=18.543070,73.781616&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Side — Enquiry Form */}
          <div className="rounded-lg border border-[#E8E0D0] bg-[#FAF8F3] p-6 md:rounded-xl md:p-8">

            {submitStatus === "success" ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center md:py-16">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-green-300 bg-green-100 text-green-600 md:h-16 md:w-16">
                  <CheckCircle size={28} />
                </div>

                <h3 className="section-heading text-xl font-bold text-[#1E1E1E] md:text-2xl">
                  Thank You!
                </h3>

                <p className="body-font text-sm text-[#6E6E6E] md:text-base">
                  Your enquiry has been received. Our team will get
                  back to you within one business day.
                </p>

                <button
                  type="button"
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
                  className="body-font mt-2 text-sm font-semibold text-[#C9A84C] hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 md:gap-5"
              >
                <h3 className="section-heading mb-1 text-xl font-bold text-[#1E1E1E] md:mb-2 md:text-2xl">
                  Send an Enquiry
                </h3>

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="flex gap-3 rounded-md border border-red-200 bg-red-50 p-3 md:p-4">
                    <AlertCircle
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-red-600"
                    />

                    <p className="body-font text-sm text-red-700 md:text-base">
                      {errorMessage}
                    </p>
                  </div>
                )}

                {/* Name and Phone */}
                <div className="grid gap-3 sm:grid-cols-2 md:gap-4">

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="fullName"
                      className="body-font text-xs font-semibold text-[#4A4A4A] md:text-sm"
                    >
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
                      className="body-font rounded-sm border border-[#E8E0D0] bg-white px-3 py-2.5 text-sm text-[#1E1E1E] transition-colors placeholder:text-[#A0A0A0] focus:border-[#C9A84C] focus:outline-none md:px-4 md:py-3"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="body-font text-xs font-semibold text-[#4A4A4A] md:text-sm"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="body-font rounded-sm border border-[#E8E0D0] bg-white px-3 py-2.5 text-sm text-[#1E1E1E] transition-colors placeholder:text-[#A0A0A0] focus:border-[#C9A84C] focus:outline-none md:px-4 md:py-3"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="body-font text-xs font-semibold text-[#4A4A4A] md:text-sm"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="body-font rounded-sm border border-[#E8E0D0] bg-white px-3 py-2.5 text-sm text-[#1E1E1E] transition-colors placeholder:text-[#A0A0A0] focus:border-[#C9A84C] focus:outline-none md:px-4 md:py-3"
                  />
                </div>

                {/* Interested In */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="interestedIn"
                    className="body-font text-xs font-semibold text-[#4A4A4A] md:text-sm"
                  >
                    I am interested in
                  </label>

                  <select
                    id="interestedIn"
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    className="body-font rounded-sm border border-[#E8E0D0] bg-white px-3 py-2.5 text-sm text-[#1E1E1E] transition-colors focus:border-[#C9A84C] focus:outline-none md:px-4 md:py-3"
                  >
                    <option value="">
                      Select an option
                    </option>

                    <option value="Farmhouse Planning">
                      Farmhouse Planning & Development
                    </option>

                    <option value="Real Estate Investment">
                      Real Estate Investment Opportunities
                    </option>

                    <option value="Industrial Land">
                      Industrial Land Readiness & Setup
                    </option>

                    <option value="Architectural Planning">
                      Architectural Planning & Coordination
                    </option>

                    <option value="Land Development">
                      Land Development
                    </option>

                    <option value="Partnership">
                      Partnership / Collaboration
                    </option>

                    <option value="Other">
                      Other Inquiry
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="body-font text-xs font-semibold text-[#4A4A4A] md:text-sm"
                  >
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
                    className="body-font resize-none rounded-sm border border-[#E8E0D0] bg-white px-3 py-2.5 text-sm text-[#1E1E1E] transition-colors placeholder:text-[#A0A0A0] focus:border-[#C9A84C] focus:outline-none md:px-4 md:py-3"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="body-font inline-flex items-center justify-center gap-2 rounded-sm bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9E7B2F] disabled:cursor-not-allowed disabled:opacity-50 md:px-7 md:py-4 md:text-base"
                >
                  <Send size={16} />

                  {isLoading
                    ? "Sending..."
                    : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}