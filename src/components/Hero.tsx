import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-20">
      <p className="text-sm uppercase tracking-wide opacity-60">{profile.role}</p>
      <h1 className="text-4xl font-bold sm:text-5xl">{profile.name}</h1>
      <p className="max-w-xl text-lg opacity-80">{profile.tagline}</p>
      <div className="mt-4 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/15 px-5 py-2 text-sm font-medium dark:border-white/20"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}
