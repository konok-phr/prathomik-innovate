import { motion } from "framer-motion";
import { Briefcase, ArrowRight, MapPin } from "lucide-react";

const openings = [
  { title: "Senior Full-Stack Developer", type: "Full-time", location: "Remote / Dhaka" },
  { title: "Machine Learning Engineer", type: "Full-time", location: "Remote" },
  { title: "UI/UX Designer", type: "Full-time", location: "Dhaka" },
  { title: "Flutter Developer", type: "Full-time", location: "Remote / Dhaka" },
];

const CareersSection = () => {
  return (
    <section id="careers" className="relative py-20 sm:py-32">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Careers</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Join <span className="text-gradient-cyan">Our Team</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Build the future with us. We're looking for passionate individuals who love solving problems with technology.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group glass-card p-6 flex items-center justify-between hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-cyan-soft flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{job.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                    <span>{job.type}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
