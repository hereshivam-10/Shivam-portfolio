"use client";

import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { isPlaceholder, originLabel, type Project } from "@/data/projects";
import { ArrowUpRight, PlayIcon } from "./icons";

type Props = { project: Project; onOpen: (p: Project) => void };

export default function ProjectCard({ project, onOpen }: Props) {
  const reduce = useReducedMotion();
  const [preview, setPreview] = useState(false);
  const portrait = project.orientation === "portrait";

  const meta = (
    <>
      <span className="mt-4 flex items-start justify-between gap-4">
        <span className="font-display text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-[1.75rem]">
          {project.title}
        </span>
        {!isPlaceholder(project) && (
          <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        )}
      </span>
      <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-mute">
        <span>{project.type}</span>
        {project.origin && (
          <span className="border border-line px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-paper/80">
            {originLabel[project.origin]}
          </span>
        )}
        <span className="ml-auto tabular-nums">{project.year}</span>
      </span>
    </>
  );

  if (isPlaceholder(project)) {
    return (
      <li>
        <div className="group block">
          <span className="filmstrip relative flex aspect-video items-center justify-center border border-line bg-surface">
            <span className="label">Video coming soon</span>
          </span>
          {meta}
        </div>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => onOpen(project)}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse" && !reduce) setPreview(true);
        }}
        onPointerLeave={() => setPreview(false)}
        data-cursor="play"
        aria-label={`Open ${project.title}, ${project.type}`}
        className="group block w-full text-left"
      >
        <span className="relative block aspect-video overflow-hidden bg-surface">
          <span className="absolute inset-0 block transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            {project.thumbnail && (
              <Image
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw"
                className="object-cover"
              />
            )}
            {preview && project.video && (
              <video
                src={project.video}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                aria-hidden="true"
                tabIndex={-1}
                className={`absolute inset-0 h-full w-full ${portrait ? "object-contain" : "object-cover"}`}
              />
            )}
          </span>
          <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
          <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink transition-colors duration-300 group-hover:bg-accent">
            <PlayIcon className="ml-0.5 h-4 w-4" />
          </span>
          {portrait && (
            <span className="absolute right-3 top-3 border border-paper/30 bg-black/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em]">
              9:16
            </span>
          )}
        </span>
        {meta}
      </button>
    </li>
  );
}
