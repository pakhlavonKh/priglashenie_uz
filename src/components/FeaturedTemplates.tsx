import { templates } from "@/data/templates";
import TemplateCard from "./TemplateCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FeaturedTemplates = () => {
  const { t } = useTranslation();
  const featured = templates.filter((t) => t.isFeatured);

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-14 animate-fade-up">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Curated Collection
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            {t("featured.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featured.map((template, i) => (
            <div key={template.id} className={`animate-fade-up animation-delay-${(i + 1) * 100}`}>
              <TemplateCard template={template} />
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/templates"
            className="inline-flex items-center gap-2 text-sm font-body font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-1"
          >
            {t("featured.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplates;
