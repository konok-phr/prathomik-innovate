import { motion } from "framer-motion";
import { Globe, Smartphone, Brain, Database, Cloud, Cpu } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    description: "Scalable, performant web applications built with modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform and native mobile apps that deliver seamless user experiences.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI/ML models and data pipelines.",
  },
  {
    icon: Database,
    title: "SaaS Products",
    description: "End-to-end SaaS product development with subscription management and multi-tenancy.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Cloud-native solutions with auto-scaling, CI/CD, and infrastructure as code.",
  },
  {
    icon: Cpu,
    title: "System Integration",
    description: "Seamless integration of complex systems, APIs, and third-party services.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our <span className="text-gradient-cyan">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We deliver comprehensive technology solutions that drive innovation and business growth.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group glass-card p-8 hover:border-primary/30 transition-all duration-300 hover:glow-cyan"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-cyan-soft flex items-center justify-center mb-5 group-hover:glow-cyan transition-all">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
