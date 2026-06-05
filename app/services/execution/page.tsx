import { Metadata } from "next"
import Navbar from "@/components/vastara/Navbar"
import PageHero from "@/components/vastara/PageHero"
import ExecutionShowcase from "@/components/vastara/ExecutionShowcase"
import VerticalCTASection from "@/components/vastara/VerticalCTASection"
import Footer from "@/components/vastara/Footer"

export const metadata: Metadata = {
  title:
    "Earthworks, Excavation & Infrastructure Execution | Vastara International Properties",
  description:
    "Over three decades of expertise in excavation, rock cutting, drilling, blasting, demolition, metro systems, freight corridors, airport infrastructure, and large-scale earthwork execution.",
}

export default function ExecutionPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <PageHero
          title="Earthworks, Excavation & Infrastructure Execution"
          backgroundImage="/execution/2/Project DMRC CC-05.3.jpg"
        />

        <ExecutionShowcase />

        <VerticalCTASection />
      </main>

      <Footer />
    </>
  )
}