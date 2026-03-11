import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
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
      <TechShowcase />
      <SectionDivider variant="gradient" />
      <StatsSection />
      <SectionDivider variant="dots" />
      <ServicesSection />
      <SectionDivider variant="wave" flip />
      <ProductsSection />
      <SectionDivider variant="gradient" />
      <WorkflowSection />
      <SectionDivider variant="dots" />
      <TeamSection />
      <SectionDivider variant="wave" />
      <ClientLogosSection />
      <SectionDivider variant="gradient" />
      <OpenSourceSection />
      <SectionDivider variant="dots" />
      <TestimonialsSection />
      <SectionDivider variant="wave" flip />
      <NewsSection />
      <SectionDivider variant="gradient" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
