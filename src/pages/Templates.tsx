import { useState, useMemo, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemplateCard from "@/components/TemplateCard";
import { templates} from "@/data/templates";
import { usePageTitle } from "@/hooks/use-page-title";
import { ChevronDown } from "lucide-react";

const Templates = () => {
  const { t } = useTranslation();

  usePageTitle({
    title: t("pages.templates.title"),
    description: t("pages.templates.description"),
  });



  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="space-y-4 mb-12 animate-fade-up">
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
              {t("templates.label")}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground">
              {t("templates.title")}
            </h1>
          </div>



          {/* Results */}
          <p className="text-xs text-muted-foreground font-light tracking-wide mb-8">
            {templates.length} {templates.length === 1 ? "result" : "results"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {templates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
