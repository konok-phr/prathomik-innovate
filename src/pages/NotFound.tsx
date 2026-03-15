import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import prathomikLogo from "@/assets/prathomik-logo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col items-center justify-center bg-background relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4">
          <motion.img
            src={prathomikLogo}
            alt="Prathomik"
            className="h-10 w-auto mx-auto mb-8 opacity-60"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.1 }}
          />

          {/* Animated 404 */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="mb-6"
          >
            <h1 className="text-[8rem] sm:text-[12rem] font-bold leading-none text-gradient-cyan select-none">
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Page Not Found
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              The page <code className="text-primary/80 bg-primary/10 px-2 py-0.5 rounded text-sm">{location.pathname}</code> doesn't exist or has been moved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-cyan rounded-lg text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-cyan)] transition-all hover:scale-105"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </a>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 glass-card text-sm font-medium text-foreground hover:border-primary/30 transition-all hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </motion.div>
        </div>

        {/* Floating search icon decoration */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 text-primary/10"
        >
          <Search className="w-24 h-24" />
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
