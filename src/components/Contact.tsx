import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-4 opacity-80">
        Open to new opportunities — feel free to reach out.
      </p>
      <div className="mt-4 flex gap-6 text-sm">
        <a href={`mailto:${profile.email}`} className="underline underline-offset-4">
          {profile.email}
        </a>
        <a href={profile.github} className="underline underline-offset-4">
          GitHub
        </a>
      </div>
    </section>
  );
}
