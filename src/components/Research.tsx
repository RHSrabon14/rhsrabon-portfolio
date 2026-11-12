import { motion } from "framer-motion";
import { Users, Brain, Cpu, Shield, FileText } from "lucide-react";
import { interests, researchProjects } from "../data/research";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "users": return <Users size={24} />;
    case "brain": return <Brain size={24} />;
    case "cpu": return <Cpu size={24} />;
    case "shield": return <Shield size={24} />;
    default: return <FileText size={24} />;
  }
};

export default function Research() {
  return (
    <section id="research" className="py-32 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text">
            Research & <span className="text-accent">Interests</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl">The technical domains I am actively exploring, studying, and applying in my projects.</p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-surface/50 hover:border-accent/50 transition-colors group flex gap-5 items-start"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Projects Section (Currently Empty) */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h3 className="font-display text-2xl font-semibold text-text mb-6">Research Projects</h3>
          
          {researchProjects.length > 0 ? (
            <div className="space-y-4">
               {/* This will show if you add projects later */}
               {researchProjects.map((proj, i) => (
                 <div key={i} className="p-6 bg-surface/50 border border-white/10 rounded-2xl">
                    <h4 className="text-xl font-bold text-text">{proj.title}</h4>
                    <p className="text-muted mt-2">{proj.abstract}</p>
                 </div>
               ))}
            </div>
          ) : (
            <div className="p-10 border border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center text-center bg-surface/20">
              <FileText size={48} className="text-muted mb-4 opacity-50" />
              <p className="text-muted text-lg">No formal research papers published yet.</p>
              <p className="text-sm text-muted/60 mt-2">Currently exploring these topics through practical projects like ElderSafe and Smart Bus Tracking.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}