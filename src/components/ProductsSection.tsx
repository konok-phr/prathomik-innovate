import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingCart, GraduationCap, FolderKanban, School } from "lucide-react";

const products = [
  {
    icon: ShoppingCart,
    name: "Prathomik POS",
    tagline: "Smart Inventory & Point of Sale",
    description: "A SaaS-based POS system where shop owners can subscribe and manage their inventory, sales, and analytics — all from one dashboard.",
    features: ["Subscription-based", "Real-time Inventory", "Sales Analytics", "Multi-store Support"],
    color: "from-primary to-cyan-glow",
  },
  {
    icon: GraduationCap,
    name: "Project Tracker",
    tagline: "Teacher-Student Collaboration",
    description: "A SaaS platform designed for academic collaboration. Teachers and students can communicate, track projects, manage thesis work, and share feedback seamlessly.",
    features: ["Thesis Management", "Real-time Chat", "Progress Tracking", "File Sharing"],
    color: "from-cyan-glow to-primary",
  },
  {
    icon: FolderKanban,
    name: "Project Hub",
    tagline: "University Project Management",
    description: "A comprehensive project management solution built for universities. Organize, assign, and monitor academic projects with powerful collaboration tools.",
    features: ["Team Management", "Milestone Tracking", "Resource Allocation", "Reports & Insights"],
    color: "from-primary to-cyan-glow",
  },
  {
    icon: School,
    name: "EduOS",
    tagline: "Complete Education Ecosystem",
    description: "A full ecosystem for schools and colleges — encompassing student management, attendance, grading, fee management, and everything in between.",
    features: ["Student Portal", "Attendance System", "Grade Management", "Fee & Finance"],
    color: "from-cyan-glow to-primary",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Products We've <span className="text-gradient-cyan">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Scalable SaaS products solving real-world problems in education and commerce.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group glass-card p-8 hover:border-primary/30 transition-all duration-500 hover:glow-cyan relative overflow-hidden"
            >
              {/* Gradient accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-cyan-soft flex items-center justify-center">
                    <product.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                    <p className="text-primary text-sm font-medium">{product.tagline}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.description}</p>

              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-secondary/50 text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
