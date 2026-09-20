"use client";

import { useEffect, useRef } from "react";
import { originLabel, type Project } from "@/data/projects";
import { CloseIcon } from "./icons";

type Props = { project: Project | null; onClose: () => void };

/** Native <dialog>: focus trap, Esc to close and focus return come for free. */
export default function ProjectModal({ project, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  const portrait = project?.orientation === "portrait";

  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      {project && (
        <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="flex items-center justify-center bg-black">
            {project.video && (
              <video
                key={project.id}
                src={project.video}
                poster={project.thumbnail}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className={
                  portrait
                    ? "aspect-[9/16] h-[70svh] max-h-[78svh] w-auto bg-black object-contain lg:h-[82svh] lg:max-h-[82svh]"
                    : "aspect-video w-full bg-black object-contain"
                }
              />
            )}
          </div>

          <div className="relative flex flex-col p-6 sm:p-8 lg:p-10">
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close project"
              className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center text-paper hover:text-accent"
            >
              <CloseIcon />
            </button>

            <p className="label text-accent">{project.category}</p>
            <h2
              id="project-title"
              className="mt-4 pr-10 font-display text-3xl font-extrabold leading-[1] tracking-[-0.03em] sm:text-4xl"
            >
              {project.title}
            </h2>
            <p className="mt-3 flex flex-wrap items-center gap-3 text-sm text-mute">
              <span>{project.type}</span>
              {project.origin && (
                <span className="border border-line px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-paper/80">
                  {originLabel[project.origin]}
                </span>
              )}
            </p>

            <p className="mt-6 text-base leading-relaxed text-paper/85">{project.description}</p>

            <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
              <div className="flex justify-between gap-6 py-3">
                <dt className="text-mute">Role</dt>
                <dd className="text-right">{project.role}</dd>
              </div>
              <div className="flex justify-between gap-6 py-3">
                <dt className="text-mute">Year</dt>
                <dd>{project.year}</dd>
              </div>
              {project.tools.length > 0 && (
                <div className="flex justify-between gap-6 py-3">
                  <dt className="text-mute">Tools</dt>
                  <dd className="text-right">{project.tools.join(", ")}</dd>
                </div>
              )}
            </dl>

            {project.process && project.process.length > 0 && (
              <div className="mt-8">
                <h3 className="label">Process</h3>
                <ol className="mt-3 space-y-2 text-sm leading-relaxed text-paper/85">
                  {project.process.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="tabular-nums text-mute">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
