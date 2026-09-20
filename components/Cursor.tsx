"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Small follower dot for mouse users. Grows into a "Play" disc over anything
 * marked data-cursor="play". Never shown on touch devices or with reduced motion.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduce) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      tx = e.clientX;
      ty = e.clientY;
      wrap.current?.setAttribute("data-visible", "true");
    };
    const over = (e: MouseEvent) => {
      const target = (e.target as Element | null)?.closest?.("[data-cursor]");
      const mode = target?.getAttribute("data-cursor") ?? "";
      wrap.current?.setAttribute("data-mode", mode);
      if (label.current) label.current.textContent = mode === "play" ? "Play" : "";
    };
    const leave = () => wrap.current?.setAttribute("data-visible", "false");
    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      if (wrap.current) wrap.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div ref={wrap} className="cursor" aria-hidden="true" data-mode="" data-visible="false">
      <div className="cursor-dot">
        <span ref={label} />
      </div>
    </div>
  );
}
