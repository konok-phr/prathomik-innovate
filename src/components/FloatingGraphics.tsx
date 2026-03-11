import { motion } from "framer-motion";

interface FloatingGraphicsProps {
  variant?: "dots" | "lines" | "mixed";
  density?: "low" | "medium" | "high";
}

const FloatingGraphics = ({ variant = "mixed", density = "medium" }: FloatingGraphicsProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" aria-hidden>
      {/* Simple gradient orbs - reduced complexity */}
      <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[80px]" />
      <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full bg-primary/[0.03] blur-[80px]" />

      {(variant === "lines" || variant === "mixed") && (
        <>
          <motion.div
            className="absolute top-[15%] right-[12%] w-14 h-14 border border-primary/10 rounded-lg"
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[20%] left-[8%] w-10 h-10 border border-primary/[0.08] rounded-full"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}

      {(variant === "dots" || variant === "mixed") && (
        <>
          <motion.div
            className="absolute top-[25%] left-[85%] text-primary/10 text-xl font-light"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            +
          </motion.div>
        </>
      )}
    </div>
  );
};

export default FloatingGraphics;
