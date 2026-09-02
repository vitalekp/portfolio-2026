import { projects } from "@/data/profile";
import RevealOnScroll from "./RevealOnScroll";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="mx-auto max-w-6xl px-8 py-20 lg:px-16">
      <RevealOnScroll>
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
          Things, I worked on
        </h2>
      </RevealOnScroll>

      <div className="mt-8 space-y-6">
        {featured.map((project, index) => (
          <RevealOnScroll key={project.title} delay={index * 0.1}>
            <article className="rounded-lg bg-surface p-8 shadow-sm ring-1 ring-border transition-shadow duration-300 hover:shadow-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                Featured
              </p>
              <h3 className="mt-2 text-xl font-bold text-primary">{project.title}</h3>
              <p className="mt-2 text-foreground/80">{project.description}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Problem
                  </h4>
                  <p className="mt-1 text-sm text-foreground/80">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Solution
                  </h4>
                  <p className="mt-1 text-sm text-foreground/80">{project.solution}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-1">
                {project.impact.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>

              <ProjectFooter project={project} />
            </article>
          </RevealOnScroll>
        ))}

        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((project, index) => (
            <RevealOnScroll key={project.title} delay={index * 0.1}>
              <article className="h-full rounded-lg bg-surface p-6 shadow-sm ring-1 ring-border transition-shadow duration-300 hover:shadow-lg">
                <h3 className="text-lg font-bold text-primary">{project.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{project.description}</p>
                <p className="mt-3 text-sm text-foreground/70">
                  <span className="font-semibold text-foreground/90">Problem: </span>
                  {project.problem}
                </p>
                <p className="mt-2 text-sm text-foreground/70">
                  <span className="font-semibold text-foreground/90">Solution: </span>
                  {project.solution}
                </p>
                <ProjectFooter project={project} />
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectFooter({
  project,
}: {
  project: { stack: string[]; liveUrl?: string; repoUrl?: string };
}) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
      <ul className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="text-xs text-muted">
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="relative font-medium text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            Live
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            className="relative font-medium text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}
