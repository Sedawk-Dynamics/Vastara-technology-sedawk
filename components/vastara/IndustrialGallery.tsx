import ProjectGalleryBase from "@/components/vastara/ProjectGalleryBase"
import { u, type Project } from "@/components/vastara/galleryTypes"

/* DUMMY DATA — placeholder industrial projects, images and a sample video. */
const projects: Project[] = [
  {
    title: "Kamal Industrial Complex",
    location: "UPSIDC, Hapur Road, UP",
    year: "2023",
    specs: [
      { label: "Type", lines: ["Industrial", "3-Block Shed"] },
      { label: "Structure", lines: ["RCC Frame", "PEB Roof"] },
      { label: "Area", lines: ["80,000", "sq ft"] },
    ],
    description: [
      "A turnkey industrial complex built using a pre-engineered building technique, featuring structural bays with a base span of 24 metres, tapering at the gable ends with a gentle eave setback.",
      "Commissioned by a mid-sized FMCG manufacturer, the project aligned with a philosophy of economy and durability — prepared for operational readiness from day one.",
    ],
    media: [
      { type: "image", src: u("photo-1504307651254-35680f356dfd") },
      { type: "image", src: u("photo-1503387762-592deb58ef4e") },
      { type: "image", src: u("photo-1581094794329-c8112a89af12") },
      { type: "image", src: u("photo-1590725140246-20acdee442be") },
      {
        type: "video",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster: u("photo-1504307651254-35680f356dfd"),
      },
    ],
  },

]

export default function IndustrialGallery() {
  return <ProjectGalleryBase heading="Upcoming Setup" projects={projects} />
}
