"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { showreel } from "@/data/projects";
import { showreelCopy } from "@/data/site";
import SectionHead from "./SectionHead";
import { FullscreenIcon, MuteIcon, PauseIcon, PlayIcon, VolumeIcon } from "./icons";

const fmt = (s: number) => {
  if (!Number.isFinite(s)) return "0:00";
  return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")}`;
};

type FsVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

/** Poster first. The video only loads after the visitor presses play. */
export default function Showreel() {
  const box = useRef<HTMLDivElement>(null);
  const vid = useRef<FsVideo>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = () => {
    const v = vid.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };
  const toggleMute = () => {
    const v = vid.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };
  const fullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }
    if (box.current?.requestFullscreen) box.current.requestFullscreen().catch(() => {});
    else vid.current?.webkitEnterFullscreen?.();
  };
  const seek = (value: number) => {
    const v = vid.current;
    if (v && duration) v.currentTime = (value / 100) * duration;
  };

  const progress = duration ? (time / duration) * 100 : 0;

  return (
    <section id="showreel" className="py-24 md:py-32">
      <div className="shell">
        <div className="mb-10 md:mb-14">
  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
    SHOWREEL
  </p>

  <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
    A SELECTION OF MY WORK
  </h2>

  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
    Cinematic edits, AI visuals and commercial content crafted for brands, creators and digital audiences.
  </p>
</div>
      </div>

      <div className="mx-auto mt-12 max-w-[1800px] px-[2.5vw] sm:px-[3vw]">
        <div ref={box} className="relative aspect-video w-full overflow-hidden bg-black">
          {!started ? (
            <button
              type="button"
              onClick={() => setStarted(true)}
              data-cursor="play"
              aria-label="Play showreel"
              className="group absolute inset-0 block h-full w-full"
            >
              <Image
                src={showreel.thumbnail}
                alt="Still frame from Shivam's showreel"
                fill
                sizes="(min-width: 1800px) 1750px, 95vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <span className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/15" />
              <span className="absolute bottom-5 left-5 flex items-center gap-4 sm:bottom-8 sm:left-8">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-ink transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                  <PlayIcon className="ml-1 h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <span className="label text-paper">Play showreel</span>
              </span>
            </button>
          ) : (
            <>
              <video
                ref={vid}
                src={showreel.video}
                poster={showreel.thumbnail}
                autoPlay
                playsInline
                preload="metadata"
                className="h-full w-full cursor-pointer object-contain"
                onClick={toggle}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-10 sm:gap-5 sm:px-6 sm:pb-4">
                <button
                  type="button"
                  onClick={toggle}
                  aria-label={playing ? "Pause showreel" : "Play showreel"}
                  className="flex h-11 w-11 shrink-0 items-center justify-center text-paper hover:text-accent"
                >
                  {playing ? <PauseIcon /> : <PlayIcon />}
                </button>
                <input
                  type="range"
                  className="seek"
                  min={0}
                  max={100}
                  step={0.1}
                  value={progress}
                  onChange={(e) => seek(Number(e.target.value))}
                  style={{ "--p": `${progress}%` } as React.CSSProperties}
                  aria-label="Seek"
                />
                <span className="hidden shrink-0 text-xs tabular-nums text-paper/80 sm:block" aria-hidden="true">
                  {fmt(time)} / {fmt(duration)}
                </span>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={muted ? "Unmute" : "Mute"}
                  aria-pressed={muted}
                  className="flex h-11 w-11 shrink-0 items-center justify-center text-paper hover:text-accent"
                >
                  {muted ? <MuteIcon /> : <VolumeIcon />}
                </button>
                <button
                  type="button"
                  onClick={fullscreen}
                  aria-label="Toggle fullscreen"
                  className="flex h-11 w-11 shrink-0 items-center justify-center text-paper hover:text-accent"
                >
                  <FullscreenIcon />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
