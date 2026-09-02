import { profile } from "@/data/profile";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "My Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-6 lg:px-[var(--spacing-page-inset,4rem)]">
        <a href="#top" className="text-xl font-bold text-primary">
          {profile.initials.toLowerCase()}
        </a>
        <ul className="hidden gap-8 text-xs font-semibold uppercase tracking-widest sm:flex">
          {links.map((link) => (
            <li key={link.href} className="group relative">
              <a href={link.href} className="pb-1 text-foreground/80 transition hover:text-primary">
                {link.label}
              </a>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 ease-in-out group-hover:w-full" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
