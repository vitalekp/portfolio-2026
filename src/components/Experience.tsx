import { experience } from "@/data/profile";
import RevealOnScroll from "./RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-8 py-20 lg:px-16">
      <RevealOnScroll>
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Experience</h2>
      </RevealOnScroll>

      <ol className="mt-8 space-y-10 border-l-2 border-border pl-6">
        {experience.map((item, index) => (
          <RevealOnScroll key={`${item.company}-${item.period}`} delay={index * 0.1}>
            <li className="relative">
              <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-bold text-primary">
                {item.role} · {item.company}
              </h3>
              <p className="mt-2 max-w-2xl text-foreground/80">{item.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <li key={tech} className="text-xs text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          </RevealOnScroll>
        ))}
      </ol>
    </section>
  );
}
