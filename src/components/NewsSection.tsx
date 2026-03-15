import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import PrefetchLink from "./PrefetchLink";
import { newsItems } from "@/data/news";

const categoryColors: Record<string, string> = {
  Achievement: "bg-green-500/90 text-white",
  Seminar: "bg-blue-500/90 text-white",
  Partnership: "bg-purple-500/90 text-white",
  "Product Launch": "bg-primary/90 text-primary-foreground",
  Workshop: "bg-orange-500/90 text-white",
  Milestone: "bg-yellow-500/90 text-white",
};

const NewsSection = () => {
  const displayNews = newsItems.slice(0, 3);

  return (
    <section id="news" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Latest News</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            News & <span className="text-gradient-cyan">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Stay updated with our latest achievements, events, and milestones.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayNews.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <PrefetchLink
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
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-md backdrop-blur-sm ${categoryColors[item.category] || "bg-primary/90 text-primary-foreground"}`}>
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
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </PrefetchLink>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <PrefetchLink
            to="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/20 bg-primary/5 text-primary font-medium text-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </PrefetchLink>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
