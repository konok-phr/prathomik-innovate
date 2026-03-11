import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Check } from "lucide-react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import SEOHead from "@/components/SEOHead";
import PageTransition from "@/components/PageTransition";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) return <Navigate to="/" replace />;

  const currentIndex = products.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <SEOHead title={product.name} description={product.description} path={`/products/${slug}`} />
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="container relative z-10 px-4 sm:px-6">
          <Link
            to="/#products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                  <product.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                    {product.name}
                  </h1>
                  <p className="text-primary font-medium">{product.tagline}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {product.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg border border-primary/20 bg-primary/5 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-cyan rounded-lg font-semibold text-primary-foreground hover:shadow-[var(--shadow-cyan-lg)] hover:scale-105 transition-all"
              >
                Visit Product
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-12 sm:py-16">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
          >
            <img
              src={product.screenshot}
              alt={`${product.name} Dashboard`}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 sm:py-20">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                About <span className="text-gradient-cyan">{product.name}</span>
              </h2>
              <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
                {product.longDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="glass-card p-4 flex items-center gap-3 hover:border-primary/30 transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Client logos */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-foreground mb-4">Trusted By</h3>
                <div className="flex items-center gap-4">
                  {product.clients.map((logo, i) => (
                    <div
                      key={i}
                      className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-md"
                    >
                      <img src={logo} alt="Client" className="w-10 h-10 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-border/50">
        <div className="container px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {prevProduct ? (
              <Link
                to={`/products/${prevProduct.slug}`}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {prevProduct.name}
              </Link>
            ) : <span />}
            {nextProduct ? (
              <Link
                to={`/products/${nextProduct.slug}`}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {nextProduct.name}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
