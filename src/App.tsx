import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import BackToTop from "@/components/BackToTop";
import PageLoader from "@/components/PageLoader";

// Eager load the main page for fast initial render
import Index from "./pages/Index.tsx";

// Lazy load secondary pages
const ProductDetail = lazy(() => import("./pages/ProductDetail.tsx"));
const NewsDetail = lazy(() => import("./pages/NewsDetail.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Careers = lazy(() => import("./pages/Careers.tsx"));
const AllTestimonials = lazy(() => import("./pages/AllTestimonials.tsx"));
const AllNews = lazy(() => import("./pages/AllNews.tsx"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/news" element={<AllNews />} />
          <Route path="/testimonials" element={<AllTestimonials />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
          <BackToTop />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
