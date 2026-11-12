import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Here we map EXACTLY what images show up when you hover over each menu item.
const navItems = [
  { id: "home", label: "Home", images: ["/assets/profile/profile.jpg", "/assets/profile/profile1.jpg"] },
  { id: "about", label: "About", images: ["/assets/profile/profile2.jpg", "/assets/profile/profile3.jpg"] },
  
  // PROJECTS: Shows your actual project screenshots
  { id: "projects", label: "Projects", images: ["/assets/projects/bus_1.png", "/assets/projects/eldersafe1.jpeg", "/assets/projects/bus_2.png"] },
  
  // SKILLS
  { id: "skills", label: "Skills", images: ["/assets/profile/profile4.jpg", "/assets/profile/profile5.jpg"] },
  
  // CERTIFICATIONS: Now without /public/ in the path!
  { 
    id: "certifications", 
    label: "Certifications", 
    images: [
      "/assets/certificates_images/Certificate1.png",
      "/assets/certificates_images/Certificate2.png",
      "/assets/certificates_images/Certificate3.png",
      "/assets/certificates_images/Certificate4.png",
      "/assets/certificates_images/Certificate5.png",
      "/assets/certificates_images/Certificate6.png",
      "/assets/certificates_images/Certificate7.png",
      "/assets/certificates_images/Certificate8.png"
    ] 
  },

  // ACHIEVEMENTS: All 5 Clemon Cricket photos
  { 
    id: "achievements", 
    label: "Achievements", 
    images: [
      "/assets/achievements/clemon_2022_main.jpg",
      "/assets/achievements/clemon_2022_1.jpg",
      "/assets/achievements/clemon_2022_2.jpg",
      "/assets/achievements/clemon_2026_main.jpg",
      "/assets/achievements/clemon_2026_1.jpg"
    ] 
  },

  // HERE ARE THE MISSING ONES FIXED:
  { id: "research", label: "Research", images: ["/assets/profile/profile1.jpg", "/assets/profile/profile2.jpg"] },
  { id: "resume", label: "Resume", images: ["/assets/profile/profile3.jpg", "/assets/profile/profile4.jpg"] },
  { id: "contact", label: "Contact", images: ["/assets/profile/profile5.jpg", "/assets/profile/profile6.jpg"] },
];

export default function FullscreenMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Default images for the marquee when nothing is hovered
  const defaultImages = ["/assets/projects/bus_1.png", "/assets/projects/eldersafe1.jpeg", "/assets/profile/profile.jpg"];
  
  const activeImages = hovered 
    ? navItems.find(item => item.id === hovered)?.images || defaultImages
    : defaultImages;

  // Duplicate the images to ensure a seamless marquee loop
  const marqueeImages = [...activeImages, ...activeImages, ...activeImages, ...activeImages];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }} 
          animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }} 
          exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          onMouseMove={handleMouseMove}
          className="fixed inset-0 z-[60] bg-[#05060a] overflow-hidden flex flex-col md:flex-row"
        >
          {/* Dynamic Animated Background Glows */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div
              animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-accent/10 blur-[150px]"
            />
            <motion.div
              animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full bg-accent2/10 blur-[150px]"
            />
          </div>

          <button 
            onClick={onClose} 
            className="absolute top-8 right-8 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 text-text transition-colors" 
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          {/* Left Side: Kinetic Typography */}
          <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center px-12 md:px-24">
            <nav className="flex flex-col gap-2 md:gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onClose}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (i * 0.05), duration: 0.8, ease: "easeOut" }}
                  className="group relative inline-flex items-center w-fit"
                >
                  <span className="text-xs md:text-sm text-accent font-mono mr-4 md:mr-8 opacity-50 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </span>
                  <motion.span 
                    className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text transition-colors duration-300"
                    style={{
                      color: hovered === item.id ? "#4f7cff" : "#e7e9f0",
                      // Kinetic effect: text shifts slightly based on mouse position
                      x: hovered === item.id ? (mousePos.x / window.innerWidth - 0.5) * 20 : 0,
                      y: hovered === item.id ? (mousePos.y / window.innerHeight - 0.5) * 20 : 0,
                    }}
                  >
                    {item.label}
                  </motion.span>
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Right Side: Dynamic Marquee */}
          <div className="hidden md:flex relative z-10 w-1/2 h-full items-center justify-center overflow-hidden border-l border-white/5 bg-black/20 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={hovered || "default"}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex w-full overflow-hidden"
              >
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex gap-6 px-3"
                >
                  {marqueeImages.map((src, i) => (
                    <motion.div
                      key={i}
                      className="w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-2xl relative group flex-shrink-0"
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                      <img 
                        src={src} 
                        alt="Menu visual" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}