import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, FileCheck, Star } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import FloatingGraphics from "./FloatingGraphics";

type Review = {
  id: number;
  clientName: string;
  company: string;
  videoUrl: string;
  thumbnailText: string;
  rating: number;
};

type Agreement = {
  id: number;
  title: string;
  imageUrl: string;
};

const reviews: Review[] = [
  {
    id: 1,
    clientName: "Rahim Uddin",
    company: "EduTech BD",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailText: "EduTech BD - Client Review",
    rating: 5,
  },
  {
    id: 2,
    clientName: "Fatema Akter",
    company: "GreenMart",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailText: "GreenMart - Client Review",
    rating: 5,
  },
  {
    id: 3,
    clientName: "Tanvir Hasan",
    company: "PaySwift BD",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailText: "PaySwift BD - Client Review",
    rating: 5,
  },
];

const agreements: Agreement[] = [
  {
    id: 1,
    title: "EduTech BD Agreement",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "GreenMart Agreement",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "PaySwift BD Agreement",
    imageUrl: "/placeholder.svg",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
};

const ClientReviewsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="reviews" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <FloatingGraphics variant="dots" density="low" />

      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-mono text-sm tracking-widest uppercase"
          >
            Trust & Transparency
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Client <span className="text-gradient-cyan">Reviews</span> & Agreements
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            আমাদের ক্লায়েন্টদের ভিডিও রিভিউ এবং অফিসিয়াল এগ্রিমেন্ট দেখুন — সম্পূর্ণ স্বচ্ছতার সাথে।
          </p>
        </motion.div>

        {/* Video Reviews */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Play className="w-5 h-5 text-primary" />
            Video Reviews
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={item}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group glass-card overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-300 hover:glow-cyan"
                onClick={() => setActiveVideo(review.videoUrl)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-secondary/50 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <div className="text-muted-foreground text-sm font-medium">{review.thumbnailText}</div>
                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 z-20 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:shadow-primary/40 transition-shadow">
                      <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </motion.div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="font-semibold text-foreground text-sm">{review.clientName}</p>
                  <p className="text-xs text-muted-foreground">{review.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Agreements */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-primary" />
            Client Agreements
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {agreements.map((agreement) => (
              <motion.div
                key={agreement.id}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group glass-card overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-300"
                onClick={() => setActiveImage(agreement.imageUrl)}
              >
                <div className="relative aspect-[3/4] bg-secondary/30 flex items-center justify-center">
                  <img
                    src={agreement.imageUrl}
                    alt={agreement.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <p className="text-sm font-medium text-foreground">{agreement.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background border-border">
          <VisuallyHidden>
            <DialogTitle>Client Video Review</DialogTitle>
          </VisuallyHidden>
          <div className="aspect-video w-full">
            {activeVideo && (
              <iframe
                src={`${activeVideo}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Client Video Review"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Modal */}
      <Dialog open={!!activeImage} onOpenChange={() => setActiveImage(null)}>
        <DialogContent className="max-w-2xl p-2 bg-background border-border">
          <VisuallyHidden>
            <DialogTitle>Client Agreement</DialogTitle>
          </VisuallyHidden>
          {activeImage && (
            <img
              src={activeImage}
              alt="Agreement Document"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ClientReviewsSection;
