import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
  {
    name: "Arif Rahman",
    role: "Managing Director, ShopEasy",
    text: "We switched to Prathomik POS six months ago and haven't looked back. The analytics dashboard alone has helped us increase revenue by 20%.",
  },
  {
    name: "Fatema Begum",
    role: "Principal, Sunshine Academy",
    text: "EduOS simplified our entire administrative workflow. From student enrollment to exam results — everything is now digital and effortless.",
  },
  {
    name: "Kamal Uddin",
    role: "CEO, DataBridge Solutions",
    text: "Prathomik's custom software development team built us a logistics platform that cut our delivery times in half. Exceptional quality and communication.",
  },
  {
    name: "Nusrat Jahan",
    role: "Operations Head, MediCare Plus",
    text: "Their attention to security and scalability gave us confidence to digitize our entire patient management system. Outstanding work.",
  },
];

const TestimonialsSection = () => {
  const displayTestimonials = testimonials.slice(0, 4);

  return (
    <section id="testimonials" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            What Our <span className="text-gradient-cyan">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {displayTestimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 sm:p-7 hover:border-primary/20 transition-all duration-300 relative overflow-hidden group"
            >
              <Quote className="w-7 h-7 text-primary/30 mb-3" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-primary text-xs font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/20 bg-primary/5 text-primary font-medium text-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            View All Testimonials
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export { testimonials };
export default TestimonialsSection;
