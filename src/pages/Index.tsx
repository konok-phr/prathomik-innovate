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
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TechShowcase />
      <StatsSection />
      <ServicesSection />
      <ProductsSection />
      <WorkflowSection />
      <TeamSection />
      <ClientLogosSection />
      <OpenSourceSection />
      <TestimonialsSection />
      <NewsSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
