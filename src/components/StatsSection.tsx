import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Rocket, Code, Globe2 } from "lucide-react";

const stats = [
  { icon: Rocket, value: 50, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 30, suffix: "+", label: "Happy Clients" },
  { icon: Code, value: 100, suffix: "K+", label: "Lines of Code" },
  { icon: Globe2, value: 12, suffix: "+", label: "Countries Served" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-gradient-cyan">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cyan-soft" />
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-cyan-soft flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
