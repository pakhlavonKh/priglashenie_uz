import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { templates, OPTIONAL_FEATURES } from "@/data/templates";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemplateCard from "@/components/TemplateCard";
import { Check, ExternalLink, ArrowLeft } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const TemplateDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const template = templates.find((t) => t.id === id);

  usePageTitle(
    template ? {
      title: `${t(template.nameKey)} - Digital Invitation Template | Invito`,
      description: t(template.descriptionKey),
    } : undefined
  );

  if (!template) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <h1 className="font-display text-2xl text-foreground">{t("template.notFound")}</h1>
            <Link to="/templates" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 font-light tracking-widest uppercase">
              {t("template.backToTemplates")}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const related = templates.filter((t) => t.id !== template.id).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 lg:pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back */}
          <Link
            to="/templates"
            className="inline-flex items-center gap-2 text-xs font-body font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} /> {t("template.backToTemplates")}
          </Link>

          {/* Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Image */}
            <div className="space-y-4 flex justify-center">
              <div className="rounded-lg overflow-hidden border border-border shadow-card max-w-2xl w-full aspect-[16/7] mx-auto bg-background flex items-center justify-center">
                <img
                  src={template.imageDesktop || template.image}
                  alt={t(template.nameKey)}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Info (sticky) */}
            <div className="lg:sticky lg:top-28 lg:self-start space-y-8 lg:max-h-[80vh] lg:overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
              <div className="space-y-3">
                {/* You can add a category if you add it to the template data */}
                <h1 className="text-3xl md:text-4xl font-display font-medium text-foreground">
                  {t(template.nameKey)}
                </h1>
                <p className="text-base text-muted-foreground font-light leading-relaxed">
                  {t(template.descriptionKey)}
                </p>
              </div>

              <div className="text-3xl font-display font-medium text-foreground">
                ${template.price}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://t.me/invito_live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground text-xs font-body font-medium tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity duration-300"
                >
                  {t("template.buy")}
                </a>
                <a
                  href={template.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border text-foreground text-xs font-body font-medium tracking-widest uppercase rounded-sm hover:bg-secondary transition-colors duration-300"
                >
                  <ExternalLink size={14} /> {t("template.demo")}
                </a>
              </div>

              {/* Features */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
                  {t("template.featuresIncluded")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {template.featuresKeys.map((featureKey) => (
                    <div key={featureKey} className="flex items-center gap-2.5">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                        <Check size={12} className="text-accent-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground font-light">{t(featureKey)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional Features */}
              <div className="space-y-2 pt-4">
                <h3 className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
                  {t("template.optionalFeatures")}
                </h3>
                <p className="text-xs text-muted-foreground font-light mb-2">{t("template.feature.optionalNote")}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {OPTIONAL_FEATURES.map((opt) => (
                    <li key={opt.key} className="text-sm text-muted-foreground font-light">
                      {t(opt.key)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Related */}
          <div className="mt-24 lg:mt-32">
            <div className="text-center space-y-4 mb-14">
              <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
                {t("template.youMayAlsoLike")}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {related.map((t) => (
                <TemplateCard key={t.id} template={t} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplateDetails;
