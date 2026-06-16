import ProjectGalleryBase from "@/components/vastara/ProjectGalleryBase"
import { u, type Project } from "@/components/vastara/galleryTypes"

/* DUMMY DATA — placeholder land-development projects & images. */
const projects: Project[] = [

  {
    title: "Hillcrest Land Parcel",
    location: "Mulshi, Maharashtra",
    year: "2023",
    specs: [
      { label: "Type", lines: ["Strategic Land", "Lifestyle"] },
      { label: "Status", lines: ["Development", "Ready"] },
      { label: "Area", lines: ["12", "acres"] },
    ],
    description: [
      "A scenic, infrastructure-aligned land parcel positioned to benefit from regional connectivity and emerging lifestyle demand, evaluated for its highest-value application across farmhouse and hospitality use.",
      "Ground readiness works — access planning, grading and drainage — were assessed to ensure the site can transition smoothly from acquisition to development while preserving its natural landform.",
    ],
    media: [
      { type: "image", src: u("photo-1477587458883-47145ed94245") },
      { type: "image", src: u("photo-1605640840605-14ac1855827b") },
      { type: "image", src: u("photo-1500382017468-9049fed747ef") },
      { type: "image", src: u("photo-1448630360428-65456885c650") },
    ],
  },
]

export default function LandDevelopmentGallery() {
  return <ProjectGalleryBase heading="Upcoming Projects" projects={projects} />
}
