import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-image.webp";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:pt-24 h-screen lg:min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-20 items-center w-full h-full lg:h-auto">
          {/* Text */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-up flex flex-col justify-center">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
                {t("hero.label")}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] text-foreground">
                {t("hero.title")}
              </h1>
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-light text-muted-foreground leading-relaxed max-w-lg">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/templates"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3.5 bg-primary text-primary-foreground text-xs font-body font-medium tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity duration-300"
              >
                {t("hero.cta")}
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3.5 border border-border text-foreground text-xs font-body font-medium tracking-widest uppercase rounded-sm hover:bg-secondary transition-colors duration-300"
              >
                {t("howitworks.title")}
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-up animation-delay-200 flex justify-center lg:justify-end w-full h-full lg:h-auto lg:min-h-0">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg h-full lg:h-auto flex items-center justify-center">
              <div className="absolute -inset-4 bg-blush/50 rounded-2xl -z-10 rotate-2" />
              <img
                src={heroImage}
                alt="Person viewing a digital invitation on their phone"
                className="rounded-xl shadow-card w-full h-full object-cover aspect-[4/5] lg:aspect-[3/4] max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
