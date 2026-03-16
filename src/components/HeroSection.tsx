import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Digital Invitation Templates
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] text-foreground">
                {t("hero.title")}
              </h1>
            </div>
            <p className="text-base lg:text-lg font-light text-muted-foreground leading-relaxed max-w-lg">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/templates"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground text-xs font-body font-medium tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity duration-300"
              >
                {t("hero.cta")}
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground text-xs font-body font-medium tracking-widest uppercase rounded-sm hover:bg-secondary transition-colors duration-300"
              >
                {t("howitworks.title")}
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-up animation-delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-blush/50 rounded-2xl -z-10 rotate-2" />
              <img
                src={heroImage}
                alt="Person viewing a digital invitation on their phone"
                className="rounded-xl shadow-card w-full object-cover aspect-[4/5] lg:aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
