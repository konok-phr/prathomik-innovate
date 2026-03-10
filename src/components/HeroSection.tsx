import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";
import ParticleGrid from "./ParticleGrid";
import CodeTerminal from "./CodeTerminal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive particle grid */}
      <ParticleGrid />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-glow/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Floating geometric elements */}
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
          {/* Left — text */}
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
              <span className="text-foreground">We are</span>
              <br />
              <span className="text-gradient-cyan">Prathomik</span>
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

          {/* Right — code terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-end"
          >
            <CodeTerminal />
          </motion.div>
        </div>

        {/* Tech stack ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex items-center justify-center gap-8 flex-wrap text-muted-foreground/50 text-sm font-mono"
        >
          {["React", "Laravel", "Flutter", "Python", "TensorFlow", "AWS", "Docker", "Next.js", "PostgreSQL", "TypeScript"].map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1, color: "hsl(185, 80%, 50%)" }}
              className="hover:text-primary transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
