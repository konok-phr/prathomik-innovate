import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-gradient-cyan">
          Prathomik
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
          <a href="#open-source" className="hover:text-primary transition-colors">Open Source</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          <a href="#careers" className="hover:text-primary transition-colors">Careers</a>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-gradient-cyan rounded-lg text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-cyan)] transition-all hover:scale-105"
        >
          Get in Touch
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
