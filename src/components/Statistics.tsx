import { useTranslation } from "react-i18next";

const Statistics = () => {
  const { t } = useTranslation();

  const stats = [
    {
      label: "stats.clients",
      value: "125+",
    },
    {
      label: "stats.events",
      value: "150+",
    },
    {
      label: "stats.countries",
      value: "5+",
    },
    {
      label: "stats.satisfaction",
      value: "98%",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {t("stats.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground">
            {t("stats.title")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 lg:p-8 rounded-lg border border-border bg-card hover:shadow-sm transition-shadow duration-300"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm sm:text-base text-muted-foreground text-center font-medium">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
