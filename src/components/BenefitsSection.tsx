import { Smartphone, Link2, UserCheck, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const BenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Smartphone,
      title: t("benefits.easy.title"),
      description: t("benefits.easy.description"),
    },
    {
      icon: Link2,
      title: t("benefits.responsive.title"),
      description: t("benefits.responsive.description"),
    },
    {
      icon: UserCheck,
      title: t("benefits.customizable.title"),
      description: t("benefits.customizable.description"),
    },
    {
      icon: Sparkles,
      title: t("benefits.instant.title"),
      description: t("benefits.instant.description"),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-14">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Why Choose Digital
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            {t("benefits.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center space-y-4 group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground transition-shadow duration-300 group-hover:shadow-soft">
                <benefit.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
