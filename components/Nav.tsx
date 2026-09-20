"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] border-b transition-colors duration-500 ${
          scrolled || open ? "border-line bg-ink/85 backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
      >
        <nav aria-label="Main" className="shell flex h-16 items-center justify-between">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="font-display text-lg font-extrabold uppercase tracking-[-0.02em]"
          >
            {site.shortName}
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {site.available && (
              <span className="label hidden items-center gap-2 xl:flex">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Available for projects
              </span>
            )}
            <ul className="flex items-center gap-8">
              {links.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-accent ${
                        isActive ? "text-accent" : "text-paper"
                      }`}
                    >
                      {l.label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            type="button"
            className="-mr-3 flex h-12 w-12 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-6 bg-paper transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-paper transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[65] flex flex-col justify-between bg-ink px-5 pb-8 pt-24 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => (
                <li key={l.href} className="overflow-hidden">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-1 font-display text-[13vw] font-extrabold uppercase leading-[1] tracking-[-0.03em]"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease: [0.2, 0.7, 0.1, 1] }}
                  >
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              {site.available && (
                <p className="label flex items-center gap-2">
                  <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  Available for projects
                </p>
              )}
              <a href={site.links.email.href} className="block text-lg text-paper">
                {site.links.email.display}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
