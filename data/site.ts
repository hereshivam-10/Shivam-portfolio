/**
 * Everything personal or copy-related lives here.
 * Change a value once and it updates across the whole site.
 */

const email = "shivambhardwaj77700@gmail.com";
const whatsappNumber = "918347718079"; // country code + number, digits only
const instagramHandle = "fy_ai0";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "Shivam Bhardwaj",
  shortName: "Shivam",
  title: "Video Editor & AI Content Creator",
  location: "India",
  experience: "6 months",
  available: true,
  seo: {
    title: "Shivam — Video Editor & AI Content Creator",
    description:
      "Portfolio of Shivam, a Video Editor and AI Content Creator specializing in commercial videos, AI advertisements, social media content and visual storytelling.",
  },
  links: {
    email: {
      label: "Email",
      display: email,
      href: `mailto:${email}?subject=${encodeURIComponent("Project enquiry")}`,
    },
    whatsapp: {
      label: "WhatsApp",
      display: "+91 83477 18079",
      href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Shivam, I'd like to talk about a project.")}`,
    },
    instagram: {
      label: "Instagram",
      display: `@${instagramHandle}`,
      href: `https://instagram.com/${instagramHandle}`,
    },
  },
} as const;

export const hero = {
  eyebrow: "Video Editor × AI Content Creator",
  statement:
    "I create cinematic edits, commercial content and AI-powered visuals for brands, creators and digital audiences.",
};

export const showreelCopy = {
  title: "Showreel",
  sub: "A short selection of my editing and AI content work.",
};

export const workCopy = {
  title: "Selected work",
  sub: "Selected projects across AI content, commercial editing and storytelling.",
};

export const categories = [
  {
    id: "AI CONTENT",
    number: "01",
    title: "AI Content",
    sub: "AI-generated commercials and visual storytelling.",
  },
  {
  id: "COMMERCIAL_EDITING",
number: "02",
title: "Commercial Editing",
sub: "Original commercial and promotional video editing created for brands and businesses.",
  },
  {
    id: "AI × EDITING",
    number: "03",
    title: "AI × Editing",
    sub: "Combining AI-generated visuals with professional editing, storytelling and sound design.",
  },
] as const;

export const services = [
  {
    number: "01",
    title: "Video editing",
    items: ["Short-form videos", "Educational content", "Social media content", "Talking-head editing"],
  },
  {
    number: "02",
    title: "AI content creation",
    items: ["AI commercials", "AI storytelling", "AI visual generation", "AI product content"],
  },
  {
    number: "03",
    title: "Commercial content",
    items: ["Product advertisements", "Brand videos", "Social media ads", "Promotional videos"],
  },
  {
    number: "04",
    title: "AI × editing",
    items: [
      "AI-generated footage",
      "Story development",
      "Professional editing",
      "Sound design",
      "Final content production",
    ],
  },
];

export const processSteps = [
  { number: "01", title: "Understand", text: "Understand the idea, audience and objective." },
  { number: "02", title: "Create", text: "Develop visuals, AI assets and creative direction." },
  { number: "03", title: "Edit", text: "Build pacing, storytelling, sound and motion." },
  { number: "04", title: "Deliver", text: "Export polished, platform-ready content." },
];

/** Only tools Shivam actually uses. */
export const tools = ["CapCut", "Veo", "Kling", "Gemini", "Photoshop"];

export const about = {
  paragraphs: [
    "Hi, I'm Shivam — a Video Editor and AI Content Creator with 6 months of experience making AI-powered videos, commercial content, product visuals and social media content.",
    "I work across AI content creation and professional editing, for clients in interiors, design, commercial promotion and education. I combine editing, storytelling, motion, sound design and AI-generated visuals to turn ideas into polished content.",
  ],
  skills: [
    "Video editing",
    "AI content creation",
    "Commercial ads",
    "Short-form content",
    "AI storytelling",
    "Motion & sound design",
  ],
};

export const contactCopy = {
  heading: ["Let's create", "something."],
  sub: "Have a project, campaign or content idea in mind?",
  cta: "Start a project",
};
