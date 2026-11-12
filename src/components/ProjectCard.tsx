import { motion } from "framer-motion";
import type { Project } from "../data/projects";

export default function ProjectCard({ project, onClick, index }: { project: Project; onClick: () => void; index: number }) {
  // Duplicate images to create a seamless infinite loop
  const marqueeImages = [...project.images, ...project.images, ...project.images];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-surface/50 hover:border-accent/50 transition-colors"
    >
      {/* Interactive Image Marquee */}
      <div className="aspect-video overflow-hidden relative">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex h-full group-hover:[animation-play-state:paused]"
          style={{ width: "300%" }} // Needs to be wide enough to hold duplicates
        >
          {marqueeImages.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt={`${project.name} screenshot ${i}`} 
              className="h-full w-1/3 object-cover flex-shrink-0" 
            />
          ))}
        </motion.div>
      </div>
      
      <div className="p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-accent mb-2">{project.tagline}</div>
        <h3 className="font-display text-2xl font-semibold text-text mb-2">{project.name}</h3>
        <p className="text-muted text-sm line-clamp-2">{project.overview}</p>
      </div>
    </motion.div>
  );
}