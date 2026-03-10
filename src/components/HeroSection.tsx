import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Sparkles, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import ParticleGrid from "./ParticleGrid";
import CodeTerminal from "./CodeTerminal";

import techReact from "@/assets/tech-react.png";
import techPhp from "@/assets/tech-php.png";
import techLaravel from "@/assets/tech-laravel.png";
import techFlutter from "@/assets/tech-flutter.png";
import techPython from "@/assets/tech-python.png";
import techJava from "@/assets/tech-java.png";
import techAws from "@/assets/tech-aws.png";
import techDocker from "@/assets/tech-docker.png";
import techNextjs from "@/assets/tech-nextjs.png";
import techTypescript from "@/assets/tech-typescript.png";

const techStack = [
  { name: "React", logo: techReact },
  { name: "PHP", logo: techPhp },
  { name: "Laravel", logo: techLaravel },
  { name: "Flutter", logo: techFlutter },
  { name: "Python", logo: techPython },
  { name: "Java", logo: techJava },
  { name: "AWS", logo: techAws },
  { name: "Docker", logo: techDocker },
  { name: "Next.js", logo: techNextjs },
  { name: "TypeScript", logo: techTypescript },
];

const heroTexts = [
  "Custom Software",
  "AI/ML Solutions",
  "Mobile Apps",
  "Cloud Architecture",
  "Web Platforms",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
};

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleGrid />

      {/* Ambient glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-glow/5 blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-24 right-[15%] w-16 h-16 border border-primary/20 rounded-lg hidden md:block"
        animate={{ y: [-10, 10, -10], rotate: [45, 55, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-[10%] w-10 h-10 border border-primary/30 rounded-full hidden md:block"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-[8%] w-3 h-3 bg-primary/40 rounded-full hidden lg:block"
        animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[20%] w-2 h-2 bg-primary/30 rounded-full hidden lg:block"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container relative z-10 px-4 sm:px-6 py-20 lg:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 md:mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-xs sm:text-sm text-primary font-medium">
                Building the Future of Software
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 md:mb-4">
                <span className="text-foreground">We Build</span>
              </h1>
              <div className="h-[1.3em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative mb-4 md:mb-6">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={textIndex}
                    initial={{ y: 80, opacity: 0, rotateX: -40 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -80, opacity: 0, rotateX: 40 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                    className="text-gradient-cyan block absolute inset-0"
                    style={{ lineHeight: "1.3" }}
                  >
                    {heroTexts[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 md:mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Crafting intelligent software solutions — from custom web & mobile apps
              to AI/ML-powered systems. We transform ideas into scalable digital products.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05, boxShadow: "var(--shadow-cyan-lg)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-cyan rounded-lg font-semibold text-primary-foreground transition-colors"
              >
                Explore Our Products
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 glass-card font-semibold text-foreground transition-colors"
              >
                <Code2 className="w-4 h-4 text-primary" />
                Our Services
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Code Terminal */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-end"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <CodeTerminal />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <p className="text-center text-sm font-mono text-muted-foreground/50 mb-8 tracking-widest uppercase">
            Technologies We Use
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.4 + i * 0.08,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.15, y: -6 }}
                className="flex flex-col items-center gap-2.5 cursor-default group"
              >
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:glow-cyan transition-all duration-300 group-hover:shadow-xl">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-muted-foreground/50 group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <motion.a
            href="#services"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-muted-foreground/40 hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
