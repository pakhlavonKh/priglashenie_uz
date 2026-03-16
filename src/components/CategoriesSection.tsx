import { Link } from "react-router-dom";
import { categories } from "@/data/templates";
import { Heart, Cake, Baby, PartyPopper, Home, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

const iconMap: Record<string, React.ElementType> = {
  "Wedding": Heart,
  "Birthday": Cake,
  "Baby Shower": Baby,
  "Engagement": PartyPopper,
  "Housewarming": Home,
  "Graduation": GraduationCap,
};

const CategoriesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-14">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Browse by Occasion
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            {t("categories.title")}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = iconMap[category] || Heart;
            return (
              <Link
                key={category}
                to={`/templates?category=${encodeURIComponent(category)}`}
                className="group flex flex-col items-center justify-center gap-3 py-10 px-4 border border-border rounded-lg bg-card hover:bg-accent hover:border-accent transition-all duration-400"
              >
                <Icon size={24} strokeWidth={1.5} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="font-display text-sm font-medium text-foreground text-center group-hover:scale-105 transition-transform duration-300">
                  {category}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
