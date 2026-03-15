import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Image, FileCheck, Star, Film, Camera } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import FloatingGraphics from "./FloatingGraphics";

type MediaCategory = "videos" | "photos" | "agreements";

type VideoItem = {
  id: number;
  title: string;
  subtitle: string;
  videoUrl: string;
  rating?: number;
};

type PhotoItem = {
  id: number;
  title: string;
  imageUrl: string;
};

const videos: VideoItem[] = [
  {
    id: 1,
    title: "EduTech BD - Client Review",
    subtitle: "Rahim Uddin, CEO",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 5,
  },
  {
    id: 2,
    title: "GreenMart - Client Review",
    subtitle: "Fatema Akter, Founder",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 5,
  },
  {
    id: 3,
    title: "Product Launch Promo",
    subtitle: "Prathomik Official",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const photos: PhotoItem[] = [
  { id: 1, title: "Team Event 2024", imageUrl: "/placeholder.svg" },
  { id: 2, title: "Office Launch", imageUrl: "/placeholder.svg" },
  { id: 3, title: "Client Meeting", imageUrl: "/placeholder.svg" },
  { id: 4, title: "Workshop Promo", imageUrl: "/placeholder.svg" },
  { id: 5, title: "Award Ceremony", imageUrl: "/placeholder.svg" },
  { id: 6, title: "Product Demo Day", imageUrl: "/placeholder.svg" },
];

const agreements: PhotoItem[] = [
  { id: 1, title: "EduTech BD Agreement", imageUrl: "/placeholder.svg" },
  { id: 2, title: "GreenMart Agreement", imageUrl: "/placeholder.svg" },
  { id: 3, title: "PaySwift BD Agreement", imageUrl: "/placeholder.svg" },
];

const categories: { key: MediaCategory; label: string; icon: typeof Film }[] = [
  { key: "videos", label: "Videos", icon: Film },
  { key: "photos", label: "Photos", icon: Camera },
  { key: "agreements", label: "Agreements", icon: FileCheck },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
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
  const [activeCategory, setActiveCategory] = useState<MediaCategory>("videos");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

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
          className="text-center mb-12"
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
            আমাদের ভিডিও রিভিউ, প্রমোশনাল ছবি এবং ক্লায়েন্ট এগ্রিমেন্ট — সব এক জায়গায়।
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Videos Tab */}
        {activeCategory === "videos" && (
          <motion.div
            key="videos"
            variants={container}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {videos.map((v) => (
              <motion.div
                key={v.id}
                variants={item}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group glass-card overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-300 hover:glow-cyan"
                onClick={() => setActiveVideo(v.videoUrl)}
              >
                <div className="relative aspect-video bg-secondary/50 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <Film className="w-10 h-10 text-muted-foreground/30" />
                  <motion.div
                    className="absolute inset-0 z-20 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:shadow-primary/40 transition-shadow">
                      <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </motion.div>
                </div>
                <div className="p-4">
                  {v.rating && (
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: v.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                      ))}
                    </div>
                  )}
                  <p className="font-semibold text-foreground text-sm">{v.title}</p>
                  <p className="text-xs text-muted-foreground">{v.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Photos Tab */}
        {activeCategory === "photos" && (
          <motion.div
            key="photos"
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {photos.map((p) => (
              <motion.div
                key={p.id}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group glass-card overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-300"
                onClick={() => setActiveImage(p.imageUrl)}
              >
                <div className="relative aspect-square bg-secondary/30">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs font-medium text-foreground truncate">{p.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Agreements Tab */}
        {activeCategory === "agreements" && (
          <motion.div
            key="agreements"
            variants={container}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {agreements.map((a) => (
              <motion.div
                key={a.id}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group glass-card overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-300"
                onClick={() => setActiveImage(a.imageUrl)}
              >
                <div className="relative aspect-[3/4] bg-secondary/30 flex items-center justify-center">
                  <img
                    src={a.imageUrl}
                    alt={a.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <p className="text-sm font-medium text-foreground">{a.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Video Modal */}
      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background border-border">
          <VisuallyHidden>
            <DialogTitle>Video</DialogTitle>
          </VisuallyHidden>
          <div className="aspect-video w-full">
            {activeVideo && (
              <iframe
                src={`${activeVideo}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Video"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Modal */}
      <Dialog open={!!activeImage} onOpenChange={() => setActiveImage(null)}>
        <DialogContent className="max-w-2xl p-2 bg-background border-border">
          <VisuallyHidden>
            <DialogTitle>Photo</DialogTitle>
          </VisuallyHidden>
          {activeImage && (
            <img src={activeImage} alt="Media" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MediaGallerySection;
