import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-black/10 py-6 text-center text-sm opacity-60 dark:border-white/10">
        {new Date().getFullYear()} — Built with Next.js
      </footer>
    </>
  );
}
