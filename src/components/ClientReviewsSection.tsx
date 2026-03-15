import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Film, Image as ImageIcon, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import FloatingGraphics from "./FloatingGraphics";
import { mediaItems } from "@/data/media";

// Show 2 rows: mobile 2 cols = 4, sm 3 cols = 6, lg 4 cols = 8
const VISIBLE_COUNTS = { mobile: 4, sm: 6, lg: 8 };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
};

const MediaGallerySection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Use lg count as max visible for initial render (CSS will hide extras per breakpoint)
  const visibleItems = showAll ? mediaItems : mediaItems.slice(0, VISIBLE_COUNTS.lg);

  return (
    <section id="media" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <FloatingGraphics variant="dots" density="low" />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-mono text-sm tracking-widest uppercase"
          >
            Explore
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Media <span className="text-gradient-cyan">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Videos, promotional photos, and client agreements — all in one place.
          </p>
        </motion.div>

        {/* Grid - 2 rows only */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {visibleItems.map((media, index) => (
            <motion.div
              key={media.id}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`group glass-card overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-300 hover:glow-cyan ${
                !showAll && index >= VISIBLE_COUNTS.mobile ? "hidden sm:block" : ""
              } ${
                !showAll && index >= VISIBLE_COUNTS.sm ? "sm:hidden lg:block" : ""
              }`}
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

        {/* View All Media button */}
        {!showAll && mediaItems.length > VISIBLE_COUNTS.mobile && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 text-primary font-medium text-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              View All Media
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
      </div>

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
    </section>
  );
};

export default MediaGallerySection;
