import { useState } from "react";
import { site } from "../data/site";
import FullscreenMenu from ".//FullscreenMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between backdrop-blur-md bg-base/40 border-b border-white/5">
        <a href="#home" className="font-display text-xl tracking-widest text-text hover:text-accent transition-colors">
          {site.initials}
        </a>
        <button
          onClick={() => setOpen(true)}
          className="text-sm uppercase tracking-[0.2em] text-text hover:text-accent transition-colors"
          aria-label="Open menu"
        >
          Menu
        </button>
      </header>
      <FullscreenMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}