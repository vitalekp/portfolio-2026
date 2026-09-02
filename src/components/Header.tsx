import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <span className="font-semibold">{profile.name}</span>
        <ul className="flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:opacity-70">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
