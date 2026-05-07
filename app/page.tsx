import Navbar from "@/components/vastara/Navbar"
import HeroSection from "@/components/vastara/HeroSection"
import AboutSection from "@/components/vastara/AboutSection"
import ServicesSection from "@/components/vastara/ServicesSection"
import OpportunitiesSection from "@/components/vastara/OpportunitiesSection"
import WhyVastaraSection from "@/components/vastara/WhyVastaraSection"
import FounderSection from "@/components/vastara/FounderSection"
import InvestmentSection from "@/components/vastara/InvestmentSection"
import ProjectsSection from "@/components/vastara/ProjectsSection"
import TestimonialsSection from "@/components/vastara/TestimonialsSection"
import FAQSection from "@/components/vastara/FAQSection"
import CTASection from "@/components/vastara/CTASection"
import ContactSection from "@/components/vastara/ContactSection"
import Footer from "@/components/vastara/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OpportunitiesSection />
      <WhyVastaraSection />
      <FounderSection />
      <InvestmentSection />
      {/* <ProjectsSection /> */}
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
