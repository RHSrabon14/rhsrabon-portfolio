import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr_2fr] gap-12"
        >
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="w-12 h-1 bg-accent mt-6"></div>
          </div>

          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              I'm <span className="text-text font-medium">Rashedul Hasan Srabon</span>, a BCSE student at the 
              International University of Business Agriculture and Technology (IUBAT), Dhaka, Bangladesh.
            </p>
            <p>
              My work sits at the intersection of three connected areas: <span className="text-text">Full-Stack Development</span>, 
              <span className="text-text"> Computer Networking</span>, and <span className="text-text">IoT & Smart Systems</span>. 
              I enjoy building applications that connect reliable backend services, interactive user interfaces, real-time data, and hardware to create practical solutions.
            </p>
            <p>
              I believe technology is most valuable when it solves real problems and makes people's lives better — 
              especially in healthcare, safety, and education.
            </p>
          </div>
        </motion.div>

        {/* Timeline / Journey */}
        <div className="mt-24">
          <h3 className="font-display text-2xl font-semibold mb-8 text-text">My Journey</h3>
          
          <div className="space-y-6 border-l-2 border-white/10 pl-6 ml-3">
            {[
              { year: "Present", title: "BCSE at IUBAT", desc: "Pursuing a Bachelor of Computer Science and Engineering, focusing on software engineering, networking, and IoT." },
              { year: "2024", title: "Full-Stack & IoT Projects", desc: "Building ElderSafe (IoT elderly monitoring) and Smart IUBAT Bus Tracking using MERN, FastAPI, and ESP32." },
              { year: "2023", title: "Networking & Certifications", desc: "Completed Cisco CCNA coursework, IBM Data Science, and Grameenphone Academy certifications." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-base"></div>
                <div className="text-sm text-accent font-medium mb-1">{item.year}</div>
                <div className="text-xl font-semibold text-text mb-2">{item.title}</div>
                <p className="text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}