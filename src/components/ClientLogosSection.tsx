import { motion } from "framer-motion";

const clients = [
  { name: "TechVista", icon: "⚡" },
  { name: "CloudSync", icon: "☁️" },
  { name: "DataPulse", icon: "📊" },
  { name: "NexaFlow", icon: "🔄" },
  { name: "CyberEdge", icon: "🛡️" },
  { name: "QuantumAI", icon: "🧠" },
  { name: "SwiftPay", icon: "💳" },
  { name: "GreenByte", icon: "🌿" },
  { name: "PixelForge", icon: "🎨" },
  { name: "OrbitLabs", icon: "🚀" },
];

const doubled = [...clients, ...clients];

const ClientLogosSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <span className="text-primary font-mono text-sm tracking-widest uppercase">
          Trusted By
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Our <span className="text-gradient-cyan">Partners</span> & Clients
        </h2>
      </motion.div>

      {/* Marquee Row 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee gap-6">
          {doubled.map((client, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 glass-card flex items-center gap-3 px-8 py-4 hover:border-primary/30 transition-all duration-300 hover:glow-cyan group cursor-default"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {client.icon}
              </span>
              <span className="text-foreground font-semibold text-sm whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - reverse */}
      <div className="relative mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee-reverse gap-6">
          {[...doubled].reverse().map((client, i) => (
            <div
              key={`row2-${i}`}
              className="flex-shrink-0 glass-card flex items-center gap-3 px-8 py-4 hover:border-primary/30 transition-all duration-300 hover:glow-cyan group cursor-default"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {client.icon}
              </span>
              <span className="text-foreground font-semibold text-sm whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
