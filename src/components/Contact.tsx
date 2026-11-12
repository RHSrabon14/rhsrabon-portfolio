import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Send, Mail, Phone, GraduationCap } from "lucide-react";
import { site } from "../data/site";

// Custom SVGs for brands since lucide-react removed them
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

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative z-10 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-muted mt-4">If you're building something meaningful — or just want to talk tech — reach out.</p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-display font-semibold text-text mb-6">Contact Info</h3>
              
              <div className="space-y-4">
                <button 
                  onClick={copyEmail}
                  className="flex items-center gap-4 text-lg text-muted hover:text-accent transition-colors group w-full text-left"
                >
                  <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-wider text-muted mb-1">Email</div>
                    <div className="flex items-center gap-2 text-text group-hover:text-accent transition-colors">
                      {site.email}
                      {copied ? <Check size={16} className="text-cyan" /> : <Copy size={16} className="opacity-50 group-hover:opacity-100" />}
                    </div>
                  </div>
                </button>

                <a 
                  href={`tel:${site.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 text-lg text-muted hover:text-accent transition-colors group w-full"
                >
                  <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted mb-1">Phone</div>
                    <div className="text-text group-hover:text-accent transition-colors">{site.phone}</div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold text-text mb-6">Social Profiles</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href={site.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-5 py-4 rounded-xl bg-surface border border-white/10 hover:border-accent/50 hover:bg-white/5 text-muted hover:text-text transition-all group">
                  <GithubIcon size={20} className="group-hover:text-accent transition-colors" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-5 py-4 rounded-xl bg-surface border border-white/10 hover:border-accent/50 hover:bg-white/5 text-muted hover:text-text transition-all group">
                  <LinkedinIcon size={20} className="group-hover:text-accent transition-colors" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a href={site.gpAcademy} target="_blank" rel="noreferrer" className="col-span-2 flex items-center gap-3 px-5 py-4 rounded-xl bg-surface border border-white/10 hover:border-accent/50 hover:bg-white/5 text-muted hover:text-text transition-all group">
                  <GraduationCap size={20} className="group-hover:text-accent transition-colors" />
                  <span className="font-medium">Grameenphone Academy</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 p-6 md:p-8 rounded-3xl bg-surface border border-white/10 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input required name="name" placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-base border border-white/10 focus:border-accent outline-none text-text placeholder:text-muted/50 transition-colors" />
              <input required type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-base border border-white/10 focus:border-accent outline-none text-text placeholder:text-muted/50 transition-colors" />
            </div>
            <input required name="subject" placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-base border border-white/10 focus:border-accent outline-none text-text placeholder:text-muted/50 transition-colors" />
            <textarea required name="message" rows={5} placeholder="Message" className="w-full px-4 py-3 rounded-xl bg-base border border-white/10 focus:border-accent outline-none text-text placeholder:text-muted/50 transition-colors resize-none" />
            
            <button 
              disabled={status === "sending"} 
              className="w-full py-4 rounded-xl bg-accent hover:bg-accent/80 text-white font-medium disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
            >
              {status === "sending" ? "Sending..." : <><Send size={18} /> Send Message</>}
            </button>
            
            {status === "sent" && <p className="text-cyan text-sm text-center">Message sent — thank you!</p>}
            {status === "error" && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again later.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}