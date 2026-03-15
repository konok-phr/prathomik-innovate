import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import TechShowcase from "@/components/TechShowcase";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import WorkflowSection from "@/components/WorkflowSection";
import TeamSection from "@/components/TeamSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import SectionReveal from "@/components/SectionReveal";
import SEOHead from "@/components/SEOHead";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <SEOHead />
      <TopBar />
      <Navbar />
      <HeroSection />
      <SectionDivider variant="wave" />
      <SectionReveal><TechShowcase /></SectionReveal>
      <SectionDivider variant="gradient" />
      <SectionReveal><StatsSection /></SectionReveal>
      <SectionDivider variant="dots" />
      <SectionReveal><ServicesSection /></SectionReveal>
      <SectionDivider variant="wave" flip />
      <SectionReveal><ProductsSection /></SectionReveal>
      <SectionDivider variant="gradient" />
      <SectionReveal><WorkflowSection /></SectionReveal>
      <SectionDivider variant="dots" />
      <SectionReveal><TeamSection /></SectionReveal>
      <SectionDivider variant="wave" />
      <SectionReveal><ClientLogosSection /></SectionReveal>
      <SectionDivider variant="gradient" />
      <SectionReveal><OpenSourceSection /></SectionReveal>
      <SectionDivider variant="dots" />
      <SectionReveal><TestimonialsSection /></SectionReveal>
      <SectionDivider variant="wave" flip />
      <SectionReveal><NewsSection /></SectionReveal>
      <SectionDivider variant="dots" />
      <SectionReveal><ClientReviewsSection /></SectionReveal>
      <SectionDivider variant="gradient" />
      <SectionReveal><FAQSection /></SectionReveal>
      <SectionDivider variant="dots" />
      <ContactSection />
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Index;
