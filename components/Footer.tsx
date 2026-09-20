import { hero, site } from "@/data/site";

const links = [site.links.instagram, site.links.email, site.links.whatsapp];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="shell">
        <div className="grid items-center gap-6 text-[13px] md:grid-cols-3">
          <p className="font-display text-lg font-extrabold uppercase tracking-[-0.02em]">{site.shortName}</p>
          <p className="label md:text-center">{hero.eyebrow}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.label === "Email" ? undefined : "_blank"}
                  rel={l.label === "Email" ? undefined : "noopener noreferrer"}
                  className="text-mute transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-xs text-mute">© 2026 {site.shortName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
