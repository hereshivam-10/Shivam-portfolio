import { tools } from "@/data/site";
import SectionHead from "./SectionHead";

export default function Tools() {
  return (
    <section id="tools" className="py-24 md:py-32">
      <div className="shell">
        <SectionHead index="04" title="Tools" />
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
