import { motion } from "framer-motion";

import logoTechvista from "@/assets/client-techvista.png";
import logoCloudsync from "@/assets/client-cloudsync.png";
import logoDatapulse from "@/assets/client-datapulse.png";
import logoNexaflow from "@/assets/client-nexaflow.png";
import logoCyberedge from "@/assets/client-cyberedge.png";
import logoQuantumai from "@/assets/client-quantumai.png";
import logoSwiftpay from "@/assets/client-swiftpay.png";
import logoGreenbyte from "@/assets/client-greenbyte.png";
import logoPixelforge from "@/assets/client-pixelforge.png";
import logoOrbitlabs from "@/assets/client-orbitlabs.png";

const clients = [
  { name: "TechVista", logo: logoTechvista },
  { name: "CloudSync", logo: logoCloudsync },
  { name: "DataPulse", logo: logoDatapulse },
  { name: "NexaFlow", logo: logoNexaflow },
  { name: "CyberEdge", logo: logoCyberedge },
  { name: "QuantumAI", logo: logoQuantumai },
  { name: "SwiftPay", logo: logoSwiftpay },
  { name: "GreenByte", logo: logoGreenbyte },
  { name: "PixelForge", logo: logoPixelforge },
  { name: "OrbitLabs", logo: logoOrbitlabs },
];

const doubled = [...clients, ...clients];

const LogoCard = ({ client }: { client: (typeof clients)[0] }) => (
  <div className="flex-shrink-0 glass-card flex items-center gap-4 px-5 py-3 hover:border-primary/30 transition-all duration-300 hover:glow-cyan group cursor-default min-w-[220px]">
    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
      <img
        src={client.logo}
        alt={client.name}
        className="w-10 h-10 object-contain"
      />
    </div>
    <span className="text-foreground font-semibold text-sm whitespace-nowrap">
      {client.name}
    </span>
  </div>
);

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

      {/* Row 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee gap-6">
          {doubled.map((client, i) => (
            <LogoCard key={`row1-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Row 2 - reverse */}
      <div className="relative mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee-reverse gap-6">
          {[...doubled].reverse().map((client, i) => (
            <LogoCard key={`row2-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
