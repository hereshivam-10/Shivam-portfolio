import { services } from "@/data/site";
import SectionHead from "./SectionHead";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="shell">
        <div className="border-t border-line pt-5">
  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
    SERVICES
  </p>
  <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
    WHAT I DO
  </h2>
  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
    Editing, AI content and commercial visuals built for brands, creators and businesses.
  </p>
</div>
        <ul className="mt-16">
          {services.map((s) => (
            <li
              key={s.number}
              className="grid gap-6 border-t border-line py-10 last:border-b md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-12 md:py-12"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="label w-8 shrink-0 tabular-nums text-accent">{s.number}</span>
                <h3 className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-extrabold uppercase leading-[1] tracking-[-0.03em]">
                  {s.title}
                </h3>
              </div>
              <ul className="grid gap-x-8 gap-y-2 pl-14 text-lg text-mute sm:grid-cols-2 md:pl-0">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
