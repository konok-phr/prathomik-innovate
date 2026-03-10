import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafiq Ahmed",
    role: "Founder, RetailBD",
    text: "Prathomik POS transformed how we manage our retail chain. The real-time inventory tracking and subscription model made it incredibly easy to scale across all our stores.",
  },
  {
    name: "Dr. Nasreen Sultana",
    role: "Professor, University of Dhaka",
    text: "Project Tracker has been a game-changer for managing thesis work. My students and I can now collaborate seamlessly, and I can track their progress in real-time.",
  },
  {
    name: "Tanvir Hasan",
    role: "CTO, EduConnect",
    text: "EduOS is the most comprehensive education management system we've seen. It handles everything from attendance to finances — a true all-in-one solution.",
  },
  {
    name: "Samira Khan",
    role: "IT Director, Green Valley School",
    text: "The team at Prathomik delivered beyond our expectations. Their technical expertise and attention to detail made our digital transformation smooth and successful.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-32">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            What Our <span className="text-gradient-cyan">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-7 hover:border-primary/20 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-primary text-xs font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
