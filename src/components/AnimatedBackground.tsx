import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: ["-10%", "10%", "-10%"], y: ["-10%", "5%", "-10%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{ x: ["10%", "-10%", "10%"], y: ["5%", "-5%", "5%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent2/20 blur-[120px]"
      />
    </div>
  );
}