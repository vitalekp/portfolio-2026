"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-4 max-w-xl opacity-80">
        {profile.availability} — feel free to reach out about roles, freelance work, or just
        to say hi.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid max-w-lg gap-4">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-lg border border-border bg-background px-4 py-2 outline-none focus:border-accent"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-lg border border-border bg-background px-4 py-2 outline-none focus:border-accent"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="rounded-lg border border-border bg-background px-4 py-2 outline-none focus:border-accent"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 w-fit rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "sent" && (
          <p className="text-sm text-green-600 dark:text-green-400">
            Thanks! Your message has been sent — I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 dark:text-red-400">
            Something went wrong. Please email me directly instead.
          </p>
        )}
      </form>

      <div className="mt-8 flex gap-6 text-sm">
        <a href={`mailto:${profile.email}`} className="underline underline-offset-4">
          {profile.email}
        </a>
        <a href={profile.github} className="underline underline-offset-4">
          GitHub
        </a>
        <a href={profile.linkedin} className="underline underline-offset-4">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
