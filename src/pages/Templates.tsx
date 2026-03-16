import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories as allCategories } from "@/data/templates";
import TemplateCard from "@/components/TemplateCard";
import { templates, styles, cultures, languages } from "@/data/templates";
import { usePageTitle } from "@/hooks/use-page-title";

const Templates = () => {
  usePageTitle({
    title: "All Templates - Nikaah Studio",
    description: "Browse our collection of elegant digital invitation templates",
  });

  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedCulture, setSelectedCulture] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      if (selectedStyle && t.style !== selectedStyle) return false;
      if (selectedCulture && t.culture !== selectedCulture) return false;
      if (selectedLanguage && t.language !== selectedLanguage) return false;
      if (selectedCategory && t.category !== selectedCategory) return false;
      return true;
    });
  }, [selectedStyle, selectedCulture, selectedLanguage, selectedCategory]);

  const FilterPill = ({
    label,
    options,
    value,
    onChange,
  }: {
    label: string;
    options: string[];
    value: string;
    onChange: (v: string) => void;
  }) => (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-card border border-border rounded-sm px-4 py-2 pr-8 text-xs font-body font-light tracking-widest uppercase text-foreground cursor-pointer hover:border-foreground transition-colors focus:outline-none focus:border-foreground"
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-3 h-3 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="space-y-4 mb-12 animate-fade-up">
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Our Collection
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground">
              All Templates
            </h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            <FilterPill label="Category" options={allCategories} value={selectedCategory} onChange={setSelectedCategory} />
            <FilterPill label="Style" options={styles} value={selectedStyle} onChange={setSelectedStyle} />
            <FilterPill label="Culture" options={cultures} value={selectedCulture} onChange={setSelectedCulture} />
            <FilterPill label="Language" options={languages} value={selectedLanguage} onChange={setSelectedLanguage} />
            {(selectedStyle || selectedCulture || selectedLanguage || selectedCategory) && (
              <button
                onClick={() => {
                  setSelectedStyle("");
                  setSelectedCulture("");
                  setSelectedLanguage("");
                  setSelectedCategory("");
                }}
                className="text-xs font-body font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Results */}
          <p className="text-xs text-muted-foreground font-light tracking-wide mb-8">
            {filtered.length} {filtered.length === 1 ? "result" : "results"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filtered.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-display text-xl text-muted-foreground">No templates match your filters</p>
              <button
                onClick={() => {
                  setSelectedStyle("");
                  setSelectedCulture("");
                  setSelectedLanguage("");
                  setSelectedCategory("");
                }}
                className="mt-4 text-sm font-body font-light tracking-widest uppercase text-foreground underline underline-offset-4"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
