import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedTemplates from "@/components/FeaturedTemplates";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/use-page-title";

const Index = () => {
  const { t } = useTranslation();

  usePageTitle({
    title: t("pages.home.title"),
    description: t("pages.home.description"),
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedTemplates />
        <BenefitsSection />
        <HowItWorks />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
