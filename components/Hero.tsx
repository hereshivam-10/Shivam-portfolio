"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { hero, site } from "@/data/site";

const WORD = "SHIVAM".split("");

/**
 * The name sits behind the portrait: the cutout overlaps the last letters.
 * Layering (back to front): name -> portrait -> statement + buttons.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      {/* soft light behind the portrait */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_72%_42%,#1b1b1b_0%,#0a0a0a_70%)]"
      />

      <div className="shell flex min-h-[100svh] flex-col pb-10 pt-24 lg:pb-12">
        <p className="fade-up label mb-4 lg:mb-0" style={{ animationDelay: "0.1s" }}>
          {hero.eyebrow}
        </p>

        {/* Portrait: in the flow on mobile, pinned bottom-right on desktop */}
        <motion.div
          style={{ y }}
          className="relative z-[2] ml-auto -mr-3 mt-2 h-[44svh] w-[calc(44svh*0.8333)] max-w-[88vw] sm:mr-0 lg:absolute lg:bottom-0 lg:right-[4vw] lg:m-0 lg:h-[86svh] lg:w-[calc(86svh*0.8333)] lg:max-w-none"
        >
          <div className="portrait-in relative h-full w-full">
            <Image
              src="/images/portrait.webp"
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 90vw"
              className="object-contain object-bottom brightness-[0.86] contrast-[1.06] grayscale"
            />
          </div>
        </motion.div>

        <div className="relative -mt-[7vw] lg:mt-auto lg:pt-32">
          <h1
            aria-label="Shivam"
            className="relative z-[1] font-display text-[22vw] font-extrabold leading-[0.86] tracking-[-0.05em] lg:text-[clamp(8rem,14vw,17rem)]"
          >
            <span aria-hidden="true" className="flex overflow-hidden">
              {WORD.map((letter, i) => (
                <span key={i} className="rise" style={{ animationDelay: `${0.2 + i * 0.06}s` }}>
                  {letter}
                </span>
              ))}
            </span>
          </h1>

          <div
            className="fade-up relative z-[3] mt-6 flex flex-col gap-8 lg:mt-10 lg:max-w-[27rem]"
            style={{ animationDelay: "0.9s" }}
          >
            <p className="max-w-[30rem] text-lg leading-relaxed text-paper/90 sm:text-xl">{hero.statement}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="btn btn-primary">
                View work
              </a>
              <a href="#contact" className="btn btn-ghost">
                Let&apos;s work together
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="fade-up absolute bottom-12 left-[1.6vw] hidden flex-col items-center gap-3 lg:flex"
        style={{ animationDelay: "1.3s" }}
      >
        <span className="label [writing-mode:vertical-rl]">Scroll</span>
        <span className="relative block h-12 w-px bg-line">
          <span className="scroll-line absolute inset-0 bg-accent" />
        </span>
      </div>
    </section>
  );
}
