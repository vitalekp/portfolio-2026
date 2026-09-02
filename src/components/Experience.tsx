import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Experience</h2>

      <ol className="mt-8 space-y-10 border-l border-border pl-6">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-accent" />
            <p className="text-sm font-medium uppercase tracking-wide opacity-60">
              {item.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold">
              {item.role} · {item.company}
            </h3>
            <p className="mt-2 max-w-2xl opacity-80">{item.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <li key={tech} className="text-xs opacity-60">
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
