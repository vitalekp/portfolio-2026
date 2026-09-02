import { about } from "@/data/profile";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-8 py-4 lg:px-16">
      <RevealOnScroll className="max-w-2xl space-y-4">
        {about.bio.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-foreground/80">
            {paragraph}
          </p>
        ))}
        <ul className="mt-4 space-y-2 text-sm">
          {about.focus.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-foreground/70">{item}</span>
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </section>
  );
}
