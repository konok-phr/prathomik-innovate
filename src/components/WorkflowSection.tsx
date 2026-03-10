import { motion } from "framer-motion";
import { MessageSquare, Search, Code2, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery & Consultation",
    description: "We start by understanding your vision, goals, and challenges through in-depth conversations and requirement analysis.",
  },
  {
    icon: Search,
    step: "02",
    title: "Research & Planning",
    description: "Our team conducts market research, defines the tech stack, creates wireframes, and builds a detailed project roadmap.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Design & Development",
    description: "Agile sprints bring your product to life — pixel-perfect UI, clean architecture, and rigorous code reviews at every stage.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Testing & Launch",
    description: "Comprehensive QA, performance optimization, and seamless deployment to production with zero downtime.",
  },
  {
    icon: HeadphonesIcon,
    step: "05",
    title: "Support & Scale",
    description: "Post-launch monitoring, continuous improvements, and scaling infrastructure as your user base grows.",
  },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our <span className="text-gradient-cyan">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A proven methodology that turns your ideas into production-ready software, on time and on budget.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px]">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent origin-top"
            />
          </div>

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className={`relative flex items-start gap-6 mb-16 last:mb-0 md:w-1/2 ${
                  isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.2, type: "spring", stiffness: 300 }}
                  className={`absolute top-2 z-10 w-4 h-4 rounded-full bg-gradient-cyan glow-cyan ${
                    isLeft
                      ? "left-6 md:left-auto md:-right-2"
                      : "left-6 md:-left-2"
                  }`}
                />

                {/* Card */}
                <div className={`ml-16 md:ml-0 glass-card p-6 group hover:border-primary/30 transition-all duration-500 hover:glow-cyan w-full`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-cyan-soft flex items-center justify-center group-hover:glow-cyan transition-all">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-primary font-mono text-sm font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
