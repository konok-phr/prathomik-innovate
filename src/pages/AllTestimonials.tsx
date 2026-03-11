import { motion } from "framer-motion";
import { Quote, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { testimonials } from "@/components/TestimonialsSection";

const AllTestimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <section className="relative pt-28 pb-20 sm:pt-32">
        <div className="container px-4 sm:px-6">
          <Link
            to="/#testimonials"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase">Testimonials</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              What Our <span className="text-gradient-cyan">Clients Say</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Hear from the organizations and individuals who trust Prathomik for their technology needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card p-6 sm:p-7 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllTestimonials;
