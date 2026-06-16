/* Shared, framework-agnostic types + helpers for the project gallery.
 * Plain module (no "use client") so it can be imported and called from
 * both server and client components. */

export type Media =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster: string }

export interface Project {
  title: string
  location: string
  year: string
  specs: { label: string; lines: string[] }[]
  description: string[]
  media: Media[]
}

/* Unsplash URL helper. */
export const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`
