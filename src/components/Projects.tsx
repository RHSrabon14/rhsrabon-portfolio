import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import ProjectModal from "./ProjectModal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  
  return (
    <section id="projects" className="py-32 px-6 md:px-12 relative z-10 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl">A selection of systems I've designed and built, combining software, hardware, and real-world problem-solving.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} onClick={() => setActive(p)} />
          ))}
        </div>
      </div>
      
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}