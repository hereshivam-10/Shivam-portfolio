import { contactCopy, site } from "@/data/site";
import { ArrowUpRight } from "./icons";


const channels = [site.links.instagram, site.links.email, site.links.whatsapp];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="shell">
        <div className="border-t border-line pt-5">
          <p className="label">06</p>
          <div className="mt-8">
  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
    LET'S TALK
  </p>

  <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.88] tracking-[-0.045em] sm:text-6xl md:text-8xl">
    START A
    <span className="block">PROJECT</span>
  </h2>
</div>
          <p className="mt-10 max-w-[30rem] text-xl leading-relaxed text-mute">{contactCopy.sub}</p>
          <a href={site.links.email.href} className="btn btn-primary mt-8">
            {contactCopy.cta}
          </a>
        </div>

        <ul className="mt-20 md:mt-28">
          {channels.map((c) => (
            <li key={c.label} className="border-t border-line last:border-b">
              <a
                href={c.href}
                target={c.label === "Email" ? undefined : "_blank"}
                rel={c.label === "Email" ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-between gap-6 py-6 transition-colors hover:text-accent md:py-8"
              >
                <span className="label w-28 shrink-0 group-hover:text-accent">{c.label}</span>
                <span className="min-w-0 flex-1 break-words font-display text-xl font-bold tracking-[-0.02em] sm:text-3xl">
                  {c.display}
                </span>
                <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
