import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "wave" | "gradient" | "dots";
  flip?: boolean;
}

const SectionDivider = ({ variant = "gradient", flip = false }: SectionDividerProps) => {
  if (variant === "wave") {
    return (
      <div className={`relative w-full h-16 sm:h-24 overflow-hidden ${flip ? "rotate-180" : ""}`}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <motion.path
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z"
            fill="hsl(var(--primary) / 0.03)"
            initial={{ d: "M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z" }}
            animate={{
              d: [
                "M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z",
                "M0,60 C360,20 720,80 1080,40 C1260,20 1380,60 1440,40 L1440,100 L0,100 Z",
                "M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,70 C480,30 960,90 1440,60 L1440,100 L0,100 Z"
            fill="hsl(var(--primary) / 0.02)"
            animate={{
              d: [
                "M0,70 C480,30 960,90 1440,60 L1440,100 L0,100 Z",
                "M0,60 C480,90 960,30 1440,70 L1440,100 L0,100 Z",
                "M0,70 C480,30 960,90 1440,60 L1440,100 L0,100 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="relative w-full py-6 flex justify-center gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}
      </div>
    );
  }

  // gradient
  return (
    <div className="relative w-full h-px">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default SectionDivider;
