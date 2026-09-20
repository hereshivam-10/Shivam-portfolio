"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { categories, workCopy } from "@/data/site";
import MaskText from "./MaskText";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHead from "./SectionHead";

export default function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="shell">
        <div className="mb-10 md:mb-14">
  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
    AI COMMERCIALS
  </p>

  <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
    AI ADS
  </h2>

  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
    AI-powered commercial visuals crafted for brands, products and digital campaigns.
  </p>
</div>
        <div className="mt-20 space-y-28 md:mt-28 md:space-y-36">
          {categories.map((cat) => {
            const items = projects.filter(
  (p) => p.category?.trim().toUpperCase() === cat.id?.trim().toUpperCase()
);
      return (
              <div key={cat.id}>
                {cat.id === "COMMERCIAL EDITING" && (
  <div className="mb-10 md:mb-14">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
      BRAND & BUSINESS
    </p>
    <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
      COMMERCIAL EDITING
    </h2>
    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
      Professional video edits crafted for brands, businesses and promotional campaigns.
    </p>
  </div>
)}
                <div className="flex flex-col gap-5 border-t border-line pt-5 md:flex-row md:items-end md:justify-between md:gap-16">
                  <div>
                    <p className="label">{cat.number}</p>
                    <MaskText
                      as="h3"
                      className="mt-5 font-display text-[clamp(2rem,4.4vw,3.9rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]"
                    >
                      {cat.title}
                    </MaskText>
                  </div>
                </div>

                <ul className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <ProjectCard key={p.id} project={p} onOpen={setActive} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
