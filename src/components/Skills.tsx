import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";
import RevealOnScroll from "./RevealOnScroll";
import { skills } from "@/data/profile";

const iconMap: Record<string, IconType> = {
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-8 py-20 lg:px-16">
      <RevealOnScroll>
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
          I&apos;m good at this
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-8">
          {skills.map((name) => {
            const Icon = iconMap[name];
            return (
              <div
                key={name}
                title={name}
                className="group flex flex-col items-center gap-2 text-foreground/70 transition duration-200 ease-in-out hover:-translate-y-1 hover:text-accent"
              >
                {Icon ? <Icon size={36} /> : <span className="text-sm">{name}</span>}
                <span className="text-xs opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </RevealOnScroll>
    </section>
  );
}
