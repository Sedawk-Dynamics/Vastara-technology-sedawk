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
          title="Ground Excavation & Execution"
          backgroundImage="/execution/2/Project DMRC CC-05.1.jpg"
        />

        {/* INTRO SECTION */}
        <section className="bg-[#F8F8F6] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            {/* Heading */}
            <div className="mb-14 flex items-center justify-center gap-5">
              <span className="h-px w-12 bg-[#C9A84C] md:w-20" />

              <span className="text-center text-[12px] font-medium uppercase tracking-[0.35em] text-[#C9A84C] md:text-[13px]">
                Execution & Infrastructure Expertise
              </span>

              <span className="h-px w-12 bg-[#C9A84C] md:w-20" />
            </div>

            {/* Content */}
            <div className="mx-auto max-w-[72rem]">
              <p className="text-center text-[18px] leading-[2] text-[#3F4A56] md:text-[22px]">
                For over three decades, we have been delivering
                specialized excavation, rock cutting, drilling,
                blasting, demolition, and underground infrastructure
                support services across some of India&apos;s most
                demanding infrastructure projects. Our experience spans
                metro rail systems, airports, rapid rail corridors,
                freight corridors, industrial facilities, water
                infrastructure, and large-scale urban developments.
              </p>

              <p className="mt-8 text-center text-[18px] leading-[2] text-[#3F4A56] md:text-[22px]">
                From complex hard rock excavation in sensitive urban
                environments to large-volume earthwork and
                multi-location infrastructure support operations, our
                team has consistently demonstrated the capability to
                execute projects safely, efficiently, and within
                challenging timelines. Through a combination of
                technical expertise, specialized equipment, operational
                planning, and committed manpower, we have successfully
                contributed to the development of critical national
                infrastructure across multiple states.
              </p>
            </div>
          </div>
        </section>

        <ExecutionShowcase />

        <VerticalCTASection />
      </main>

      <Footer />
    </>
  )
}