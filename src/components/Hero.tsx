import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "../data/site";

const profileImages = [
  "/assets/profile/profile.jpg",
  "/assets/profile/profile1.jpg",
  "/assets/profile/profile2.jpg",
  "/assets/profile/profile3.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swap the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profileImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-12 pt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center w-full z-10">
        
        {/* Left Side: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" /> {site.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-6xl md:text-8xl font-bold tracking-tight leading-[0.95]"
          >
            {site.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-muted max-w-xl"
          >
            {site.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/80 transition">
              Explore My Work
            </a>
            <a href="/assets/resume/resume.pdf" target="_blank" rel="noreferrer"
               className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              View My CV
            </a>
          </motion.div>
        </div>

        {/* Right Side: Premium Spinning Profile Image */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
          
          {/* Outer Glowing Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-dashed border-accent/30"
          />

          {/* Inner Thin Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 md:w-[340px] md:h-[340px] rounded-full border border-white/10"
          />

          {/* The Profile Image Container */}
          <div className="relative z-20 w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-surface shadow-[0_0_50px_rgba(79,124,255,0.2)] bg-base">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={profileImages[currentIndex]}
                alt={site.name}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}