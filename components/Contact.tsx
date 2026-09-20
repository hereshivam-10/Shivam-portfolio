import { contactCopy, site } from "@/data/site";
import { ArrowUpRight } from "./icons";
import MaskText from "./MaskText";

const channels = [site.links.instagram, site.links.email, site.links.whatsapp];

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="shell">
        <div className="border-t border-line pt-5">
          <p className="label">06</p>
          <MaskText className="mt-8 font-display text-[clamp(3rem,10.5vw,10.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.045em]">
            {contactCopy.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </MaskText>
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
