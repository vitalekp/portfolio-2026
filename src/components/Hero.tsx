"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 overflow-hidden px-8 pb-24 pt-12 sm:pt-20 lg:grid-cols-2 lg:gap-8 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="z-10 flex min-w-0 flex-col justify-center"
      >
        <p className="text-4xl font-bold text-accent sm:text-5xl">
          {profile.greeting} <span className="animate-wave">👋</span>
        </p>
        <p className="mt-6 text-2xl text-primary sm:text-3xl">
          my name is <span className="font-bold">{profile.name}</span>
        </p>
        <p className="mt-2 text-xl font-medium text-accent sm:text-2xl">{profile.tagline}</p>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          {profile.description}
        </p>

        <a
          href="#contact"
          className="mt-8 w-fit rounded-md bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-200 ease-in-out hover:scale-105 hover:bg-primary-hover"
        >
          Get in touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="relative flex min-w-0 items-center justify-center lg:justify-end"
      >
        <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-primary text-6xl font-bold text-white shadow-2xl sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]">
          {profile.initials}
          <span className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-accent sm:h-20 sm:w-20" />
        </div>
      </motion.div>
    </section>
  );
}
