import { motion } from "framer-motion";
import prathomikLogo from "@/assets/prathomik-logo.png";

const PageLoader = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
    <motion.img
      src={prathomikLogo}
      alt="Loading..."
      className="h-12 w-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    />
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-primary"
          animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  </div>
);

export default PageLoader;
