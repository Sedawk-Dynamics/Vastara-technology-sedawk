import ProjectGalleryBase from "@/components/vastara/ProjectGalleryBase"
import { u, type Project } from "@/components/vastara/galleryTypes"

/* DUMMY DATA — placeholder investment opportunities & images. */
const projects: Project[] = [

  {
    title: "Metro Corridor Plots",
    location: "Ring Road Expansion, Pune",
    year: "2023",
    specs: [
      { label: "Type", lines: ["Residential", "Plotted"] },
      { label: "Usability", lines: ["Development", "Ready"] },
      { label: "Area", lines: ["9", "acres"] },
    ],
    description: [
      "Development-ready plots aligned with proposed infrastructure expansion and logistics networks, offering clear future use across residential and community development applications.",
      "Selected for practical fundamentals — access, infrastructure visibility, compliance readiness and liquidity — designed for investors seeking real assets with development relevance.",
    ],
    media: [
      { type: "image", src: u("photo-1582510003544-4d00b7f74220") },
      { type: "image", src: u("photo-1554435493-93422e8220c8") },
      { type: "image", src: u("photo-1486406146926-c627a92ad1ab") },
      { type: "image", src: u("photo-1567496898669-ee935f5f647a") },
    ],
  },
]

export default function InvestmentGallery() {
  return <ProjectGalleryBase heading="Upcoming Opportunities" projects={projects} />
}
