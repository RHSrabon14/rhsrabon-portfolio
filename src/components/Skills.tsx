import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl">The tools, languages, and frameworks I use to build software, connect hardware, and design secure networks.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.category}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-white/10 bg-surface/50 hover:border-accent/50 hover:bg-surface/80 transition-all duration-300 group"
            >
              <h3 className="font-display text-xl font-semibold mb-4 text-text group-hover:text-accent transition-colors">
                {g.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-muted hover:border-cyan/50 hover:text-cyan transition-colors cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}