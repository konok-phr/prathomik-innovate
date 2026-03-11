import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PrefetchLink from "./PrefetchLink";
import { products } from "@/data/products";
import FloatingGraphics from "./FloatingGraphics";

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />
      <FloatingGraphics variant="mixed" density="low" />
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Our Products</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Products We've <span className="text-gradient-cyan">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Scalable SaaS products solving real-world problems in education and commerce.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Link
                to={`/products/${product.slug}`}
                className="group glass-card p-5 sm:p-8 hover:border-primary/30 transition-all duration-500 hover:glow-cyan relative overflow-hidden block"
              >
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated background shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />

                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-cyan-soft flex items-center justify-center"
                      whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                    >
                      <product.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">{product.name}</h3>
                      <p className="text-primary text-sm font-medium">{product.tagline}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">{product.description}</p>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {product.features.slice(0, 4).map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-secondary/50 text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
