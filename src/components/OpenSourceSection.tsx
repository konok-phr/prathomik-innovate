import { motion } from "framer-motion";
import { GitBranch, Star, ExternalLink } from "lucide-react";

const OpenSourceSection = () => {
  return (
    <section id="open-source" className="relative py-20 sm:py-32">
      <div className="absolute inset-0 grid-pattern" />
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Open Source</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Contributing to the <span className="text-gradient-cyan">Community</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We believe in giving back. Our open-source contributions empower developers worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 hover:border-primary/30 transition-all duration-300 group hover:glow-cyan">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-gradient-cyan-soft flex items-center justify-center flex-shrink-0">
                <GitBranch className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-foreground">Log Tracker</h3>
                  <span className="px-2 py-0.5 text-xs font-mono rounded-full border border-primary/30 text-primary">Laravel Package</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  A powerful Laravel package for tracking and monitoring application logs in real-time. 
                  Debug faster, monitor better, and keep your applications healthy.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://kssadi.github.io/Laravel-Log-Tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-cyan rounded-lg text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-cyan)] transition-all hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Star className="w-4 h-4 text-primary" />
                    Open Source
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-muted-foreground text-sm mt-8"
          >
            And many more contributions across the open-source ecosystem...
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
