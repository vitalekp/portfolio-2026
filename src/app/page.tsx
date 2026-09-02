import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialRail from "@/components/SocialRail";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <SocialRail />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted">
        {new Date().getFullYear()} — Built with Next.js
      </footer>
      <BackToTop />
    </>
  );
}
