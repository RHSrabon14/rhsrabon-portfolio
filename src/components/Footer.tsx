import { motion } from "framer-motion";
import { Mail, Phone, GraduationCap, ArrowUp } from "lucide-react";
import { site } from "../data/site";

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05060a] border-t border-white/10 relative z-10 overflow-hidden">
      
      <div className="py-12 border-b border-white/5 overflow-hidden flex whitespace-nowrap opacity-20 hover:opacity-40 transition-opacity duration-500 select-none pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex text-6xl md:text-8xl font-display font-bold text-transparent uppercase tracking-tighter"
          style={{ WebkitTextStroke: "1px #8a8fa3" }}
        >
          <span className="mx-4">Full-Stack Developer</span>
          <span className="mx-4 text-accent">•</span>
          <span className="mx-4">IoT Solutions</span>
          <span className="mx-4 text-accent">•</span>
          <span className="mx-4">Networking</span>
          <span className="mx-4 text-accent">•</span>
          <span className="mx-4">Full-Stack Developer</span>
          <span className="mx-4 text-accent">•</span>
          <span className="mx-4">IoT Solutions</span>
          <span className="mx-4 text-accent">•</span>
          <span className="mx-4">Networking</span>
          <span className="mx-4 text-accent">•</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
        
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="font-display text-3xl font-bold text-text mb-2">{site.initials}</div>
          <p className="text-sm text-muted mb-1">{site.name}</p>
          <p className="text-xs text-muted/60">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-2 text-sm text-muted">
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={16} /> {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={16} /> {site.phone}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href={site.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-white text-muted transition-all duration-300" title="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-[#0a66c2] hover:text-white text-muted transition-all duration-300" title="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href={site.gpAcademy} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-[#00a9e0] hover:text-white text-muted transition-all duration-300" title="Grameenphone Academy">
            <GraduationCap size={20} />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="p-4 rounded-full bg-surface border border-white/10 hover:border-accent text-muted hover:text-accent transition-all group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}