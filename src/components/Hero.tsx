import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-4xl flex-col gap-6 px-6 pb-20 pt-16 sm:pt-24">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-semibold text-accent-foreground">
          {profile.initials}
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          {profile.availability}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-accent">
          {profile.role} · {profile.yearsOfExperience} years of experience
        </p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{profile.name}</h1>
        <p className="mt-4 max-w-xl text-lg opacity-80">{profile.tagline}</p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition hover:opacity-90"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:bg-muted"
        >
          Get in touch
        </a>
        <a
          href={profile.resumeUrl}
          className="rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:bg-muted"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
