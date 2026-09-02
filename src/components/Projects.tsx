import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-black/10 p-6 dark:border-white/15"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm opacity-80">{project.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="text-xs opacity-60">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 text-sm">
              {project.link && (
                <a href={project.link} className="underline underline-offset-4">
                  Live
                </a>
              )}
              {project.repo && (
                <a href={project.repo} className="underline underline-offset-4">
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
