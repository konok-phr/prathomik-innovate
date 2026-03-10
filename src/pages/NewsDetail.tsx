import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { newsItems } from "@/data/news";

const NewsDetail = () => {
  const { slug } = useParams();
  const article = newsItems.find((n) => n.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <article className="relative pt-28 pb-20 sm:pt-32">
        <div className="container px-4 sm:px-6 max-w-3xl mx-auto">
          <Link
            to="/#news"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-primary/20 bg-primary/10 text-primary">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              {article.title}
            </h1>

            <div className="rounded-2xl overflow-hidden border border-border/50 mb-10">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              {article.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3 key={i} className="text-lg font-bold text-foreground mt-6 mb-2">
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n");
                  return (
                    <ul key={i} className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base leading-relaxed my-4">
                      {items.map((item, j) => (
                        <li key={j}>{item.replace(/^- /, "")}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.includes("**")) {
                  const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p key={i} className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                      {parts.map((part, j) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong key={j} className="text-foreground font-semibold">
                            {part.replace(/\*\*/g, "")}
                          </strong>
                        ) : (
                          <span key={j}>{part}</span>
                        )
                      )}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsDetail;
