/**
 * CENTRAL PROJECT DATA
 * --------------------
 * Every card, modal and the showreel read from this file.
 *
 * To fill a placeholder:  add `video` and `thumbnail` paths (files in /public).
 * A project with no `video` is shown as a "Video coming soon" tile.
 *
 * `origin` controls the label under the title. Only use "client" for work that
 * was really made for a client. Leave it out if you are unsure.
 *   "client"   -> Client work
 *   "personal" -> Personal project
 *   "spec"     -> Spec project
 *
 * `orientation`: "portrait" (9:16) or "landscape" (16:9). Portrait videos are
 * letterboxed inside the 16:9 cards so nothing gets cropped.
 */

export type CategoryId = "AI CONTENT" | "COMMERCIAL EDITING" | "AI × EDITING";
export type Origin = "client" | "personal" | "spec";

export interface Project {
  id: string;
  title: string;
  category: CategoryId;
  type: string;
  description: string;
  thumbnail?: string; // 16:9 .webp poster, e.g. "/images/ai-ad-01.webp"
  video?: string; // e.g. "/videos/ai-ad-01.mp4" or a full https:// URL
  orientation: "landscape" | "portrait";
  year: string;
  role: string;
  tools: string[];
  featured: boolean;
  origin?: Origin;
  process?: string[];
}

export const originLabel: Record<Origin, string> = {
  client: "Client work",
  personal: "Personal project",
  spec: "Spec project",
};

export const isPlaceholder = (p: Project) => !p.video;

/** The showreel at the top of the page. Replace the file to update it. */
export const showreel = {
  title: "Showreel",
  video: "/videos/showreel.mp4",
  thumbnail: "/images/showreel.webp",
};

export const projects: Project[] = [
  /* ------------------------------ AI CONTENT ------------------------------ */
  {
    id: "ai-ad-01",
    title: "AI Ad 01",
    category: "AI CONTENT",
    type: "AI Commercial",
    description:
      "A product film for a wine bottle, built from AI-generated shots and cut into a short commercial.",
    thumbnail: "/images/ai-ad-01.webp",
    video: "/videos/ai-ad-01.mp4",
    orientation: "landscape",
    year: "2026",
    role: "AI content + video editing",
    tools: [], // add the tools used, e.g. ["Veo", "CapCut"]
    featured: true,
  },
  {
    id: "ai-ad-02",
    title: "AI Ad 02",
    category: "AI CONTENT",
    type: "AI Content",
    description:
      "An AI-generated jungle scene with dinosaurs, edited into a short cinematic sequence.",
    thumbnail: "/images/ai-ad-02.webp",
    video: "/videos/ai-ad-02.mp4",
    orientation: "landscape",
    year: "2026",
    role: "AI content + video editing",
    tools: [],
    featured: true,
  },
  {
    id: "ai-ad-03",
    title: "AI Ad 03",
    category: "AI CONTENT",
    type: "AI Content",
    description: "Add this project's description in data/projects.ts.",
    orientation: "landscape",
    year: "2026",
    role: "AI content + video editing",
    tools: [],
    featured: true,
  },

  /* -------------------------- COMMERCIAL EDITING -------------------------- */
  {
    id: "hair-oil-commercial",
    title: "Hair Oil Commercial",
    category: "COMMERCIAL EDITING",
    type: "Product Commercial",
    description:
      "A vertical product commercial for a hair oil. Original video editing work: pacing, transitions and colour built around the bottle and packaging.",
    thumbnail: "/images/hair-oil-commercial.webp",
    video: "/videos/hair-oil-commercial.mp4",
    orientation: "portrait",
    year: "2026",
    role: "Video editing",
    tools: [],
    featured: true,
  },
  {
    id: "beauty-parlour-commercial",
    title: "Beauty Parlour Commercial",
    category: "COMMERCIAL EDITING",
    type: "Commercial Edit",
    description: "Add this project's description in data/projects.ts.",
    orientation: "landscape",
    year: "2026",
    role: "Video editing",
    tools: [],
    featured: true,
  },
  {
    id: "interior-walkthrough",
    title: "Interior Walkthrough",
    category: "COMMERCIAL EDITING",
    type: "Commercial Edit",
    description:
      "A vertical walkthrough edit of a finished interior, moving room to room. If this was made for a client, change origin to \"client\".",
    thumbnail: "/images/interior-walkthrough.webp",
    video: "/videos/interior-walkthrough.mp4",
    orientation: "portrait",
    year: "2026",
    role: "Video editing",
    tools: [],
    featured: true,
    origin: "personal",
  },

  /* ------------------------------ AI × EDITING ---------------------------- */
  {
    id: "ai-storytelling",
    title: "AI Storytelling",
    category: "AI × EDITING",
    type: "AI Story",
    description: "A cinematic AI-generated historical storytelling project, combining AI visuals, character scenes and video editing to create an immersive narrative.",
    thumbnail: "/images/Storytelling-cover.jpg",
    video: "/videos/Storytelling.mp4",
    orientation: "landscape",
    year: "2026",
    role: "AI content + video editing",
    tools: [],
    featured: true,
    origin: "client",
  },
  {
    id: "educational-video",
    title: "Educational Video",
    category: "AI × EDITING",
    type: "Educational Edit",
    description: "Add this project's description in data/projects.ts.",
    thumbnail: "/images/Educational-cover.jpg",
    video: "/videos/Educational-edits.mp4",
    orientation: "landscape",
    year: "2026",
    role: "Video editing",
    tools: [],
    featured: true,
    origin: "client",
  },
];
