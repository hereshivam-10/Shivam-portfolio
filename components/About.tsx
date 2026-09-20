import { about, site } from "@/data/site";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="shell">
        <SectionHead index="05" title="About" />

        <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-24">
          <div className="max-w-[40rem] space-y-6 text-lg leading-[1.75] text-paper/85 sm:text-xl sm:leading-[1.7]">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <dl className="!mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6 text-base">
              <div>
                <dt className="label">Based in</dt>
                <dd className="mt-1">{site.location}</dd>
              </div>
              <div>
                <dt className="label">Experience</dt>
                <dd className="mt-1">{site.experience}</dd>
              </div>
            </dl>
          </div>

          <ul className="self-start">
            {about.skills.map((skill) => (
              <li
                key={skill}
                className="border-t border-line py-4 text-sm font-semibold uppercase tracking-[0.08em] last:border-b"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
