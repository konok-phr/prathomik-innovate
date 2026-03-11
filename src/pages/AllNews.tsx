import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { newsItems } from "@/data/news";

const categoryColors: Record<string, string> = {
  Achievement: "bg-green-500/10 text-green-400 border-green-500/20",
  Seminar: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Partnership: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Product Launch": "bg-primary/10 text-primary border-primary/20",
  Workshop: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Milestone: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

const AllNews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <section className="relative pt-28 pb-20 sm:pt-32">
        <div className="container px-4 sm:px-6">
          <Link
            to="/#news"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase">Latest News</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              All News & <span className="text-gradient-cyan">Achievements</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Stay updated with our latest achievements, events, and milestones.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {newsItems.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={`/news/${item.slug}`}
                  className="group glass-card overflow-hidden flex flex-col h-full hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${categoryColors[item.category] || "bg-primary/10 text-primary border-primary/20"}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllNews;
