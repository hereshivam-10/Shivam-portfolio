import { tools } from "@/data/site";

export default function Tools() {
  return (
    <section id="tools" className="py-24 md:py-32">
      <div className="shell">
        <div className="border-t border-line pt-5">
  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
    TOOLS & WORKFLOW
  </p>

  <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
    TOOLS I USE
  </h2>

  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
    A focused creative toolkit for AI generation, video editing and visual production.
  </p>
</div>
        <ul className="mt-16 grid grid-cols-2 md:grid-cols-5">
          {tools.map((tool) => (
            <li
              key={tool}
              className="border-t border-line py-8 font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
