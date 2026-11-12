import { AnimatePresence, motion } from "framer-motion";
import { X, GitBranch, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface max-w-3xl w-full rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto border border-white/10"
          >
            <div className="relative">
              <div
                role="img"
                aria-label={`${project.name} preview`}
                className="w-full aspect-video bg-gradient-to-br from-accent/30 via-surface to-black/40"
              />
              <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black text-white transition" aria-label="Close">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <div>
                <h3 className="font-display text-3xl font-bold text-text">{project.name}</h3>
                <p className="text-accent mt-2">{project.tagline}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-text mb-2">Overview</h4>
                <p className="text-muted">{project.overview}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-text mb-2">Problem</h4>
                <p className="text-muted">{project.problem}</p>
              </div>

              <div>
                <h4 className="font-semibold text-text mb-2">My Contribution</h4>
                <p className="text-muted">{project.contribution}</p>
              </div>

              <div>
                <h4 className="font-semibold text-text mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs rounded-full border border-white/20 text-text bg-white/5">{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-text mb-2">Key Features</h4>
                <ul className="text-muted space-y-1 list-disc pl-5">
                  {project.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/10">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-text transition">
                    <GitBranch size={16} /> GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent hover:bg-accent/80 text-white transition">
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}