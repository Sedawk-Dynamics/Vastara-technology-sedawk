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
                technical expertise, specialized equipment,
                operational planning, and committed manpower, we have
                successfully contributed to the development of critical
                national infrastructure across multiple states.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT SHOWCASE */}
        <ExecutionShowcase />

       {/* INTRO SECTION */}
<section className="bg-[#F8F8F6] px-6 py-14 md:px-10 md:py-20">
  <div className="mx-auto max-w-6xl">
    {/* Heading */}
    <div className="mb-12 flex items-center justify-center gap-5">
      <span className="h-px w-12 bg-[#C9A84C] md:w-20" />

      <span className="text-center text-[11px] font-medium uppercase tracking-[0.35em] text-[#C9A84C] md:text-[12px]">
        Execution & Infrastructure Expertise
      </span>

      <span className="h-px w-12 bg-[#C9A84C] md:w-20" />
    </div>

    {/* Content */}
    <div className="mx-auto max-w-[68rem]">
      <p className="text-center text-[15px] leading-[1.9] text-[#3F4A56] md:text-[18px]">
        For over three decades, we have been delivering
        specialized excavation, rock cutting, drilling,
        blasting, demolition, and underground infrastructure
        support services across some of India&apos;s most
        demanding infrastructure projects. Our experience spans
        metro rail systems, airports, rapid rail corridors,
        freight corridors, industrial facilities, water
        infrastructure, and large-scale urban developments.
      </p>

      <p className="mt-7 text-center text-[15px] leading-[1.9] text-[#3F4A56] md:text-[18px]">
        From complex hard rock excavation in sensitive urban
        environments to large-volume earthwork and
        multi-location infrastructure support operations, our
        team has consistently demonstrated the capability to
        execute projects safely, efficiently, and within
        challenging timelines. Through a combination of
        technical expertise, specialized equipment,
        operational planning, and committed manpower, we have
        successfully contributed to the development of critical
        national infrastructure across multiple states.
      </p>
    </div>
  </div>
</section>

{/* PROJECT SHOWCASE */}
<ExecutionShowcase />

{/* CLOSING STATEMENT */}
<section className="bg-[#F8F8F6] px-6 py-14 md:px-10 md:py-18">
  <div className="mx-auto max-w-[72rem]">
    {/* Main Text */}
    <p className="text-center text-[15px] leading-[1.9] text-[#4B5563] md:text-[18px]">
      Each project in our journey reflects a commitment to
      engineering excellence, operational efficiency, and
      reliable execution. Whether supporting underground metro
      systems, airport developments, freight corridors, water
      infrastructure or industrial facilities, we continue to
      build on our experience with a focus on safety,
      innovation, and timely delivery. Our track record stands
      as a testament to our ability to undertake complex
      challenges and contribute meaningfully to the
      nation&apos;s infrastructure growth.
    </p>

    {/* Quote */}
    <p className="mx-auto mt-8 max-w-[52rem] text-center text-[16px] italic leading-[1.8] text-[#6B7280] md:text-[20px]">
      “Transforming challenging terrain into critical
      infrastructure through expertise, precision and execution
      excellence.”
    </p>
  </div>
</section>

        <VerticalCTASection />
      </main>

      <Footer />
    </>
  )
}