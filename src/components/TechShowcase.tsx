import { motion } from "framer-motion";
import { Workflow, Layers, Zap } from "lucide-react";

const TechShowcase = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container relative z-10 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Workflow,
              title: "Agile Development",
              desc: "Iterative sprints, continuous delivery, and transparent communication at every stage.",
            },
            {
              icon: Layers,
              title: "Scalable Architecture",
              desc: "Microservices, cloud-native infrastructure, and systems built to handle millions of users.",
            },
            {
              icon: Zap,
              title: "AI-First Approach",
              desc: "Machine learning models, intelligent automation, and data-driven decision systems.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-cyan-soft rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-cyan-soft flex items-center justify-center mx-auto mb-6 group-hover:glow-cyan transition-all"
                >
                  <item.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
