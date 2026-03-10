import { motion } from "framer-motion";
import { Briefcase, ArrowRight, MapPin, Clock, Users, Heart, Zap, Globe, GraduationCap } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openings = [
  { title: "Senior Full-Stack Developer", type: "Full-time", location: "Remote / Dhaka", department: "Engineering" },
  { title: "Machine Learning Engineer", type: "Full-time", location: "Remote", department: "AI/ML" },
  { title: "UI/UX Designer", type: "Full-time", location: "Dhaka", department: "Design" },
  { title: "Flutter Developer", type: "Full-time", location: "Remote / Dhaka", department: "Mobile" },
  { title: "DevOps Engineer", type: "Full-time", location: "Remote", department: "Infrastructure" },
  { title: "QA Engineer", type: "Full-time", location: "Dhaka", department: "Quality" },
];

const perks = [
  { icon: Globe, title: "Remote Friendly", description: "Work from anywhere in the world with flexible hours." },
  { icon: GraduationCap, title: "Learning Budget", description: "Annual budget for courses, conferences, and books." },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs." },
  { icon: Zap, title: "Latest Tech", description: "Work with cutting-edge technologies and modern tools." },
  { icon: Users, title: "Team Culture", description: "Collaborative, inclusive culture with regular team events." },
  { icon: Clock, title: "Flexible Hours", description: "Results-oriented culture — work when you're most productive." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
};

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container relative z-10 px-4 sm:px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-mono text-sm tracking-widest uppercase"
          >
            Careers
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6"
          >
            Join <span className="text-gradient-cyan">Our Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Build the future with us. We're looking for passionate individuals who love solving problems with technology and want to make a real impact.
          </motion.p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 sm:py-24">
        <div className="container px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Why <span className="text-gradient-cyan">Prathomik</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-center max-w-xl mx-auto mb-12"
          >
            We believe great work comes from great people. Here's what we offer.
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {perks.map((perk) => (
              <motion.div
                key={perk.title}
                variants={itemVariants}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-cyan-soft flex items-center justify-center mb-4">
                  <perk.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{perk.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container relative z-10 px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Open <span className="text-gradient-cyan">Positions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-center max-w-xl mx-auto mb-12"
          >
            Find a role that fits your skills and ambitions.
          </motion.p>
          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group glass-card p-5 sm:p-6 flex items-center justify-between hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-cyan-soft flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mt-1">
                      <span className="text-primary/80 font-medium">{job.department}</span>
                      <span>{job.type}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? We're always looking for talented people.
            </p>
            <a
              href="mailto:careers@prathomik.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-cyan rounded-lg text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-cyan)] transition-all hover:scale-105"
            >
              Send Your Resume
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
