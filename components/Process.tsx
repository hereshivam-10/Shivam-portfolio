import { processSteps } from "@/data/site";
import SectionHead from "./SectionHead";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="shell">
        <div className="border-t border-line pt-5">
  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
    PROCESS
  </p>
  <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
    HOW I WORK
  </h2>
  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
    From the first idea to the final polished video, every project follows a clear creative process.
  </p>
</div>
        <ol className="mt-16 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.number} className="border-t border-line pt-6 sm:pr-8">
              <span
                aria-hidden="true"
                className="block font-display text-[5.5rem] font-extrabold leading-none tracking-[-0.05em] text-transparent [-webkit-text-stroke:1px_#3a3a3a]"
              >
                {step.number}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-3 max-w-[18rem] text-base leading-relaxed text-mute">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
