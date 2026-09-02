"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-20 flex flex-col items-center gap-1 text-primary transition-transform duration-200 ease-in-out hover:scale-105 hover:text-accent"
    >
      <FiArrowUp size={32} className="animate-bounce-up" />
      <span className="text-[10px] font-semibold uppercase tracking-widest [writing-mode:vertical-lr]">
        Top
      </span>
    </a>
  );
}
