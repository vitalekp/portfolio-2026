import { projects } from "@/data/profile";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-8 space-y-6">
        {featured.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-border bg-muted p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              Featured project
            </p>
            <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 opacity-80">{project.description}</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide opacity-60">
                  Problem
                </h4>
                <p className="mt-1 text-sm opacity-80">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide opacity-60">
                  Solution
                </h4>
                <p className="mt-1 text-sm opacity-80">{project.solution}</p>
              </div>
            </div>

            <ul className="mt-6 space-y-1">
              {project.impact.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="opacity-80">{point}</span>
                </li>
              ))}
            </ul>

            <ProjectFooter project={project} />
          </article>
        ))}

        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm opacity-80">{project.description}</p>
              <p className="mt-3 text-sm opacity-70">
                <span className="font-medium opacity-90">Problem: </span>
                {project.problem}
              </p>
              <p className="mt-2 text-sm opacity-70">
                <span className="font-medium opacity-90">Solution: </span>
                {project.solution}
              </p>
              <ProjectFooter project={project} />
            </article>
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
          <li key={tech} className="text-xs opacity-60">
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 text-sm">
        {project.liveUrl && (
          <a href={project.liveUrl} className="underline underline-offset-4">
            Live
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} className="underline underline-offset-4">
            Code
          </a>
        )}
      </div>
    </div>
  );
}
