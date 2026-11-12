import { motion } from "framer-motion";
import { Award, GraduationCap, Certificate, Rocket, Trophy } from "lucide-react";
import { achievements } from "../data/achievements";

const getIcon = (type: string) => {
  switch (type) {
    case "award": return <Award size={20} />;
    case "academic": return <GraduationCap size={20} />;
    case "training": return <Certificate size={20} />;
    case "milestone": return <Rocket size={20} />;
    case "sports": return <Trophy size={20} />;
    default: return <Award size={20} />;
  }
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 md:px-12 relative z-10 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text">
            Achievements & <span className="text-accent">Milestones</span>
          </h2>
          <p className="text-muted mt-4">Key academic milestones, technical projects, and extracurricular activities.</p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12 mb-24">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute -left-[41px] md:-left-[49px] top-1 w-10 h-10 rounded-full bg-surface border border-accent/50 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(79,124,255,0.3)] z-10">
                {getIcon(item.type)}
              </div>
              
              <div className="bg-surface/50 border border-white/10 p-6 rounded-2xl hover:border-accent/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="font-display text-xl font-semibold text-text">{item.title}</h3>
                  <span className="text-xs uppercase tracking-wider text-accent font-medium bg-accent/10 px-3 py-1 rounded-full w-fit">
                    {item.date}
                  </span>
                </div>
                <div className="text-sm text-muted mb-3 font-medium">{item.organization}</div>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cricket Media Gallery Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold text-text mb-2">Clemon Indoor Cricket</h3>
            <p className="text-muted">Tournament memories from 2022 & 2026</p>
          </div>

          <div className="space-y-16">
            
            {/* 2022 Gallery */}
            <div>
              <h4 className="text-xl font-display font-semibold text-accent mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent"></span> 2022 Tournament
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6">
                {/* Video 2022 */}
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 aspect-video relative group">
                  <video controls className="w-full h-full object-cover">
                    <source src="/public/assets/videos/Clemon_indoor_2022.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Photos 2022 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 rounded-xl overflow-hidden border border-white/10 aspect-video md:aspect-square">
                    <img src="./public/assets/achievements/clemon_2022_main.jpeg" alt="Cricket 2022" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-white/10 aspect-square">
                    <img src="./public/assets/achievements/clemon_2022_1.jpeg" alt="Cricket 2022" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-white/10 aspect-square">
                    <img src="./public/assets/achievements/clemon_2022_2.jpeg" alt="Cricket 2022" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2026 Gallery */}
            <div>
              <h4 className="text-xl font-display font-semibold text-accent mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent"></span> 2026 Tournament
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Photos 2026 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-white/10 aspect-square">
                    <img src="./public/assets/achievements/clemon_2026_main.jpeg" alt="Cricket 2026" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-white/10 aspect-square">
                    <img src="./public/assets/achievements/clemon_2026_1.jpeg" alt="Cricket 2026" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                  </div>
                </div>
                {/* Video 2026 */}
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 aspect-video relative group">
                  <video controls className="w-full h-full object-cover">
                    <source src="./public/assets/videos/Clemon_indoor_2026.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}