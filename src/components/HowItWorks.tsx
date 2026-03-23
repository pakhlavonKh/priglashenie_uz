import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/use-in-view";

const HowItWorks = () => {
  const { t } = useTranslation();
  const { ref, isInView } = useInView({ once: true, threshold: 0.2 });

  const steps = [
    { number: "01", title: t("howitworks.step1"), description: t("howitworks.step1desc") },
    { number: "02", title: t("howitworks.step2"), description: t("howitworks.step2desc") },
    { number: "03", title: t("howitworks.step3"), description: t("howitworks.step3desc") },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center space-y-4 mb-14 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
            {t("howitworks.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            {t("howitworks.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className={`relative text-center space-y-4 ${isInView ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.15}s`, animation: isInView ? `slideInUp 0.7s ease-out forwards ${i * 0.15}s` : 'none' }}>
              <span className="block font-display text-5xl font-light text-border">{step.number}</span>
              <h3 className="font-display text-lg font-medium text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 border-t border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
