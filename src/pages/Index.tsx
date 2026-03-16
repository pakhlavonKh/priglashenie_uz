import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedTemplates from "@/components/FeaturedTemplates";
import BenefitsSection from "@/components/BenefitsSection";
import CategoriesSection from "@/components/CategoriesSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/use-page-title";

const Index = () => {
  usePageTitle();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedTemplates />
        <BenefitsSection />
        <CategoriesSection />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
