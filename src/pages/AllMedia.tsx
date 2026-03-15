import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Film, Image as ImageIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { mediaItems } from "@/data/media";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
};

const AllMedia = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "video" | "image">("all");

  const filteredItems = filter === "all" ? mediaItems : mediaItems.filter((m) => m.type === filter);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <SEOHead
          title="Media Gallery | Prathomik"
          description="Explore our videos, promotional photos, and client agreements."
        />
        <TopBar />
        <Navbar />

        <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
          <div className="container px-4 sm:px-6">
            {/* Back + Header */}
            <div className="mb-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Media <span className="text-gradient-cyan">Gallery</span>
              </h1>
              <p className="text-muted-foreground mt-3 max-w-xl text-sm sm:text-base">
                Videos, promotional photos, and client agreements — all in one place.
              </p>
            </div>

            {/* Filter */}
            <div className="flex gap-2 mb-8">
              {(["all", "video", "image"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    filter === f
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary/30 text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {f === "all" ? "All" : f === "video" ? "Videos" : "Photos"}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              key={filter}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
            >
              {filteredItems.map((media) => (
                <motion.div
                  key={media.id}
                  variants={item}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="group glass-card overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-300 hover:glow-cyan"
                  onClick={() => {
                    if (media.type === "video" && media.videoUrl) {
                      setActiveVideo(media.videoUrl);
                      setActiveTitle(media.title);
                    } else if (media.imageUrl) {
                      setActiveImage(media.imageUrl);
                      setActiveTitle(media.title);
                    }
                  }}
                >
                  <div className="relative aspect-[4/3] bg-secondary/40 flex items-center justify-center overflow-hidden">
                    {media.type === "image" && media.imageUrl && (
                      <img
                        src={media.imageUrl}
                        alt={media.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                      />
                    )}
                    {media.type === "video" && (
                      <Film className="w-10 h-10 text-muted-foreground/20" />
                    )}

                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-300" />

                    {media.type === "video" && (
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-300">
                          <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    )}

                    <div className="absolute top-2 right-2 z-10">
                      <div className="w-7 h-7 rounded-md bg-background/70 backdrop-blur-sm flex items-center justify-center border border-border/50">
                        {media.type === "video" ? (
                          <Film className="w-3.5 h-3.5 text-primary" />
                        ) : (
                          <ImageIcon className="w-3.5 h-3.5 text-primary" />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredItems.length === 0 && (
              <p className="text-center text-muted-foreground py-16">No media found.</p>
            )}
          </div>
        </section>

        {/* Video Modal */}
        <Dialog open={!!activeVideo} onOpenChange={() => { setActiveVideo(null); setActiveTitle(null); }}>
          <DialogContent className="w-[95vw] max-w-3xl p-0 overflow-hidden bg-background border-border">
            <DialogTitle className="px-4 pt-4 pb-2 text-sm sm:text-base font-semibold">{activeTitle || "Video"}</DialogTitle>
            <div className="aspect-video w-full">
              {activeVideo && (
                <iframe
                  src={`${activeVideo}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={activeTitle || "Video"}
                />
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Image Modal */}
        <Dialog open={!!activeImage} onOpenChange={() => { setActiveImage(null); setActiveTitle(null); }}>
          <DialogContent className="w-[95vw] max-w-2xl p-2 bg-background border-border">
            <DialogTitle className="px-2 pt-2 pb-1 text-sm sm:text-base font-semibold">{activeTitle || "Photo"}</DialogTitle>
            {activeImage && (
              <img src={activeImage} alt={activeTitle || "Media"} className="w-full h-auto rounded-lg" />
            )}
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AllMedia;
