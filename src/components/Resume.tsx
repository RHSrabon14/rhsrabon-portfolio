import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

export default function Resume() {
  const pdfUrl = "./public/assets/resume/resume .pdf";

  return (
    <section id="resume" className="py-32 px-6 md:px-12 relative z-10 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text">
            My <span className="text-accent">Resume</span>
          </h2>
          <p className="text-muted mt-4">View my full CV directly on the website, or download a copy.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <a 
            href={pdfUrl} 
            download 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent/80 text-white font-medium transition-colors w-full md:w-auto"
          >
            <Download size={20} /> Download CV
          </a>
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 text-text transition-colors w-full md:w-auto"
          >
            <ExternalLink size={20} /> Open in New Tab
          </a>
        </motion.div>

        {/* Embedded PDF Viewer */}
        <div className="w-full h-[80vh] rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl">
          <iframe 
            src={`${pdfUrl}#toolbar=1&navpanes=0`} 
            className="w-full h-full" 
            title="Rashedul Hasan Srabon Resume"
          />
        </div>
      </div>
    </section>
  );
}