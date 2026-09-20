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
        <SectionHead index="01" title={workCopy.title} sub={workCopy.sub} />

        <div className="mt-20 space-y-28 md:mt-28 md:space-y-36">
          {categories.map((cat) => {
            const items = projects.filter((p) => p.category === cat.id);
            return (
              <div key={cat.id}>
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
                  <p className="max-w-[26rem] text-base leading-relaxed text-mute md:text-right">{cat.sub}</p>
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
