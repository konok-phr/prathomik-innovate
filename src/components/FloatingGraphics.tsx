import { motion } from "framer-motion";

interface FloatingGraphicsProps {
  variant?: "dots" | "lines" | "mixed";
  density?: "low" | "medium" | "high";
}

const FloatingGraphics = ({ variant = "mixed", density = "medium" }: FloatingGraphicsProps) => {
  const count = density === "low" ? 4 : density === "medium" ? 7 : 10;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[80px]"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full bg-primary/[0.03] blur-[80px]"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating shapes */}
      {(variant === "dots" || variant === "mixed") && (
        <>
          {Array.from({ length: Math.ceil(count / 2) }).map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/20"
              style={{
                left: `${15 + (i * 70) / Math.ceil(count / 2)}%`,
                top: `${20 + ((i * 37) % 60)}%`,
              }}
              animate={{
                y: [0, -25 - i * 5, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </>
      )}

      {(variant === "lines" || variant === "mixed") && (
        <>
          {/* Rotating geometric wireframes */}
          <motion.div
            className="absolute top-[15%] right-[12%] w-14 h-14 border border-primary/10 rounded-lg hidden md:block"
            animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[20%] left-[8%] w-10 h-10 border border-primary/[0.08] rounded-full hidden md:block"
            animate={{ rotate: [0, -360], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[60%] right-[6%] w-8 h-8 border border-primary/[0.06] hidden lg:block"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            animate={{ rotate: [0, 360], borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated line segments */}
          <motion.div
            className="absolute top-[30%] left-[5%] w-20 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent hidden md:block"
            animate={{ x: [0, 40, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-[35%] right-[10%] w-16 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent hidden md:block"
            animate={{ x: [0, -30, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          />
        </>
      )}

      {/* Cross / plus marks */}
      <motion.div
        className="absolute top-[25%] left-[85%] text-primary/10 text-xl font-light hidden lg:block"
        animate={{ rotate: [0, 180, 360], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        +
      </motion.div>
      <motion.div
        className="absolute top-[70%] left-[15%] text-primary/[0.08] text-lg font-light hidden lg:block"
        animate={{ rotate: [45, 225, 45], opacity: [0.08, 0.25, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        +
      </motion.div>
    </div>
  );
};

export default FloatingGraphics;
