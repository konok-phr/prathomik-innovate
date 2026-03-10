import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.png";
import team5 from "@/assets/team-5.png";
import team6 from "@/assets/team-6.png";

const members = [
  { name: "Sadiqur Rahman", role: "Founder & CEO", image: team1 },
  { name: "Fatima Akter", role: "Lead UX Designer", image: team2 },
  { name: "Arif Hossain", role: "AI/ML Engineer", image: team3 },
  { name: "Nusrat Jahan", role: "Sr. Backend Dev", image: team4 },
  { name: "Rakib Hassan", role: "Mobile Developer", image: team5 },
  { name: "Tamim Iqbal", role: "Project Manager", image: team6 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const TeamSection = () => {
  return (
    <section id="team" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-mono text-xs tracking-widest uppercase">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
            Meet the <span className="text-gradient-cyan">Minds</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            A passionate team building the future together.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {members.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className="group relative text-center"
            >
              {/* Avatar */}
              <div className="relative mx-auto w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-border/50 group-hover:border-primary/50 transition-all duration-400 group-hover:glow-cyan">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-7 h-7 rounded-md bg-card/80 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-muted-foreground hover:text-primary transition-colors" />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Name & Role */}
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-foreground leading-tight">
                  {member.name}
                </h3>
                <p className="text-primary/80 text-xs font-medium mt-0.5">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
