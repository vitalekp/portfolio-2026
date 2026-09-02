import { about, skills } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold">About</h2>

      <div className="mt-6 grid gap-10 sm:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          {about.bio.map((paragraph) => (
            <p key={paragraph} className="opacity-80">
              {paragraph}
            </p>
          ))}
          <ul className="mt-4 space-y-2 text-sm">
            {about.focus.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="opacity-80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide opacity-60">
                {group.category}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
