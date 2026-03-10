import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechShowcase from "@/components/TechShowcase";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import WorkflowSection from "@/components/WorkflowSection";
import TeamSection from "@/components/TeamSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CareersSection from "@/components/CareersSection";
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
      <OpenSourceSection />
      <TestimonialsSection />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default Index;
