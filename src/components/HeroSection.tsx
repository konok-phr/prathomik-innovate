import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import ParticleGrid from "./ParticleGrid";
import CodeTerminal from "./CodeTerminal";

import techReact from "@/assets/tech-react.png";
import techPhp from "@/assets/tech-php.png";
import techLaravel from "@/assets/tech-laravel.png";
import techFlutter from "@/assets/tech-flutter.png";
import techPython from "@/assets/tech-python.png";
import techTensorflow from "@/assets/tech-tensorflow.png";
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
  { name: "TensorFlow", logo: techTensorflow },
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

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-glow/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <motion.div
        className="absolute top-20 right-[15%] w-16 h-16 border border-primary/20 rounded-lg rotate-45"
        animate={{ y: [-10, 10, -10], rotate: [45, 50, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-[10%] w-10 h-10 border border-primary/30 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-[8%] w-20 h-20 border border-primary/10 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[25%]"
        animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Terminal className="w-6 h-6 text-primary/20" />
      </motion.div>

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Building the Future of Software</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="text-foreground">We Build</span>
              <br />
              <span className="h-[1.2em] block overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={textIndex}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-gradient-cyan block"
                  >
                    {heroTexts[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Crafting intelligent software solutions — from custom web & mobile apps
              to AI/ML-powered systems. We transform ideas into scalable digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#products"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-cyan rounded-lg font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-cyan-lg)] hover:scale-105"
              >
                Explore Our Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 glass-card font-semibold text-foreground hover:border-primary/40 transition-all hover:scale-105"
              >
                <Code2 className="w-4 h-4 text-primary" />
                Our Services
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-end"
          >
            <CodeTerminal />
          </motion.div>
        </div>

        {/* Tech stack with logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex items-center justify-center gap-6 flex-wrap"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.08 }}
              whileHover={{ scale: 1.15, y: -4 }}
              className="flex flex-col items-center gap-2 cursor-default group"
            >
              <div className="w-12 h-12 rounded-xl bg-card/80 border border-border/50 flex items-center justify-center group-hover:border-primary/40 group-hover:glow-cyan transition-all duration-300">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xs font-mono text-muted-foreground/60 group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
