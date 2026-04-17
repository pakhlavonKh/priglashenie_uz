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
        {/* Custom Request Section */}
        <section className="py-16 lg:py-24 bg-accent/10">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-foreground">
              {t("customSection.title")}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {t("customSection.description")}
            </p>
            <a
              href="mailto:hello@invito.com"
              className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium shadow hover:bg-primary/90 transition-colors"
            >
              {t("customSection.cta")}
            </a>
          </div>
        </section>
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
