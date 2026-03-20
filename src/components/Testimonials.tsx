import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/use-in-view";

const Testimonials = () => {
  const { t } = useTranslation();
  const { ref, isInView } = useInView({ once: true, threshold: 0.15 });

  const testimonials = t("testimonials.items", { returnObjects: true }) as Array<{
    quote: string;
    couple: string;
    location: string;
  }>;

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center space-y-4 mb-14 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
            {t("testimonials.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.couple}
              className={`p-8 rounded-lg border border-border bg-card space-y-6 hover:shadow-soft transition-shadow duration-500 ${isInView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <p className="text-sm font-light text-muted-foreground leading-relaxed italic font-display">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display text-base font-medium text-foreground">{t.couple}</p>
                <p className="text-xs text-muted-foreground font-light tracking-wide">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
