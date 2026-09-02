import { about, skills } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-4 max-w-2xl opacity-80">{about.summary}</p>

      <div id="skills" className="mt-10 grid gap-6 sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold uppercase tracking-wide opacity-60">
              {group.category}
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-black/10 px-3 py-1 text-sm dark:border-white/15"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
