import { motion } from "framer-motion";
import { Globe, Smartphone, Brain, Database, Cloud, Cpu } from "lucide-react";
import FloatingGraphics from "./FloatingGraphics";

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
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <FloatingGraphics variant="dots" density="low" />
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-mono text-sm tracking-widest uppercase"
          >
            What We Do
          </motion.span>
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
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group glass-card p-8 hover:border-primary/30 transition-all duration-300 hover:glow-cyan relative overflow-hidden"
            >
              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/[0.06] to-transparent rounded-bl-full"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              />
              <motion.div
                className="w-12 h-12 rounded-lg bg-gradient-cyan-soft flex items-center justify-center mb-5 group-hover:glow-cyan transition-all"
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
              >
                <service.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              {/* Bottom line animation on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-cyan origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
