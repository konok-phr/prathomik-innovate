import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.png";
import team5 from "@/assets/team-5.png";
import team6 from "@/assets/team-6.png";

const members = [
  {
    name: "Sadiqur Rahman",
    role: "Founder & CEO",
    bio: "Full-stack architect with 8+ years building scalable SaaS products.",
    image: team1,
  },
  {
    name: "Fatima Akter",
    role: "Lead UX Designer",
    bio: "Crafting intuitive experiences that delight users and drive engagement.",
    image: team2,
  },
  {
    name: "Arif Hossain",
    role: "AI/ML Engineer",
    bio: "Specializing in NLP, computer vision, and production ML pipelines.",
    image: team3,
  },
  {
    name: "Nusrat Jahan",
    role: "Senior Backend Developer",
    bio: "Expert in Laravel, microservices, and high-performance APIs.",
    image: team4,
  },
  {
    name: "Rakib Hassan",
    role: "Mobile Developer",
    bio: "Building cross-platform mobile experiences with Flutter and React Native.",
    image: team5,
  },
  {
    name: "Tamim Iqbal",
    role: "Project Manager",
    bio: "Ensuring on-time delivery with agile methodologies and clear communication.",
    image: team6,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const TeamSection = () => {
  return (
    <section id="team" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[160px]" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Meet the <span className="text-gradient-cyan">Minds</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A passionate team of engineers, designers, and strategists building the future together.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {members.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className="group glass-card overflow-hidden hover:border-primary/30 transition-all duration-500 hover:glow-cyan"
            >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden bg-gradient-cyan-soft">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                {/* Social icons on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                    </motion.button>
                  ))}
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
