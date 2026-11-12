import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, FileText } from "lucide-react";
import { certificates } from "../data/certificates";
import type { Certificate } from "../data/certificates";

export default function Certifications() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-32 px-6 md:px-12 relative z-10 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text">
            Professional <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl">Continuous learning and verified technical credentials across networking, software development, and data science.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c, i) => (
            <motion.button
              key={c.title}
              onClick={() => setActive(c)}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="text-left rounded-2xl overflow-hidden border border-white/10 bg-surface/50 hover:border-accent/50 hover:bg-surface/80 transition-all duration-300 group flex flex-col relative"
            >
              {/* Realistic CSS Certificate Mockup */}
              <div className="aspect-[4/3] bg-[#0a0c13] flex items-center justify-center w-full p-6 relative overflow-hidden">
                {/* Background grid pattern for tech feel */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* The Certificate Paper */}
                <div className="w-full h-full max-w-[280px] bg-gradient-to-br from-[#1a1d2b] to-[#0f1118] rounded shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/20 relative flex flex-col items-center justify-center p-4 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                  {/* Gold/Blue border accent */}
                  <div className="absolute inset-2 border border-accent/20 rounded-sm"></div>
                  
                  {/* Certificate Content Details */}
                  <div className="text-[8px] uppercase tracking-widest text-accent/80 mb-2 z-10">Certificate of Completion</div>
                  <div className="text-xs font-display font-bold text-white text-center leading-tight mb-3 z-10 line-clamp-2">{c.title}</div>
                  <div className="w-12 h-[1px] bg-white/20 mb-2 z-10"></div>
                  <div className="text-[10px] text-muted text-center z-10">{c.issuer}</div>
                  
                  {/* Decorative Seal / Ribbon */}
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent/20 rotate-45 blur-md group-hover:bg-accent/40 transition-colors duration-500"></div>
                  
                  {/* PDF Icon overlay */}
                  <div className="absolute bottom-3 right-3 z-20 p-1.5 bg-black/40 rounded-md backdrop-blur-sm border border-white/10 group-hover:border-accent/50 transition-colors">
                    <FileText size={14} className="text-white/70 group-hover:text-accent transition-colors" />
                  </div>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between border-t border-white/5 bg-surface/80">
                <div>
                  <div className="text-xs text-accent uppercase tracking-wider mb-2">{c.issuer}</div>
                  <div className="font-semibold text-text text-lg leading-tight group-hover:text-white transition-colors">{c.title}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full h-[85vh] bg-surface rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10 bg-base/50">
                <div>
                  <div className="font-semibold text-text text-lg">{active.title}</div>
                  <div className="text-sm text-accent">{active.issuer}</div>
                </div>
                <div className="flex gap-2">
                  <a href={active.pdfUrl} download className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-text transition" title="Download PDF">
                    <Download size={20}/>
                  </a>
                  <a href={active.pdfUrl} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-text transition" title="Open in New Tab">
                    <ExternalLink size={20}/>
                  </a>
                  <button onClick={() => setActive(null)} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-text transition" title="Close">
                    <X size={20}/>
                  </button>
                </div>
              </div>
              
              {/* PDF Viewer */}
              <div className="flex-1 bg-black/50">
                <iframe 
                  src={`${active.pdfUrl}#toolbar=0&navpanes=0`} 
                  className="w-full h-full" 
                  title={active.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}