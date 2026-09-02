import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/profile";

const links = [
  { href: profile.github, label: "GitHub", icon: FiGithub },
  { href: profile.linkedin, label: "LinkedIn", icon: FiLinkedin },
  { href: `mailto:${profile.email}`, label: "Email", icon: FiMail },
];

export default function SocialRail() {
  return (
    <div className="fixed bottom-0 left-6 z-10 hidden flex-col items-center gap-6 pb-8 lg:flex">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-foreground/60 transition hover:-translate-y-1 hover:text-accent"
        >
          <Icon size={20} />
        </a>
      ))}
      <span className="mt-2 h-16 w-px bg-border" />
    </div>
  );
}
