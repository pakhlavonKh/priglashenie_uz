import { useState, useMemo, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories as allCategories } from "@/data/templates";
import TemplateCard from "@/components/TemplateCard";
import { templates, styles } from "@/data/templates";
import { usePageTitle } from "@/hooks/use-page-title";
import { ChevronDown } from "lucide-react";

const Templates = () => {
  const { t } = useTranslation();

  usePageTitle({
    title: t("pages.templates.title"),
    description: t("pages.templates.description"),
  });

  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      if (selectedStyle && t.style !== selectedStyle) return false;
      if (selectedCategory && t.category !== selectedCategory) return false;
      return true;
    });
  }, [selectedStyle, selectedCategory]);

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
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-card border border-border rounded-md px-3 py-1.5 text-xs font-body font-light tracking-widest uppercase text-foreground hover:border-foreground/70 hover:shadow-sm transition-all"
        >
          {value || label}
          <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-md z-50 min-w-max">
            <button
              onClick={() => {
                onChange("");
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-xs font-body font-light tracking-widest uppercase transition-all ${
                value === ""
                  ? "bg-foreground text-background"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {label}
            </button>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-xs font-body font-light tracking-widest uppercase transition-all border-t border-border ${
                  value === option
                    ? "bg-foreground text-background"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

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

          {/* Filters */}
          <div className="space-y-6 mb-12">
            <div className="flex flex-wrap gap-3">
              <FilterPill label={t("templates.filterCategory")} options={allCategories} value={selectedCategory} onChange={setSelectedCategory} />
              <FilterPill label={t("templates.filterStyle")} options={styles} value={selectedStyle} onChange={setSelectedStyle} />
            </div>
            {(selectedStyle || selectedCategory) && (
              <button
                onClick={() => {
                  setSelectedStyle("");
                  setSelectedCategory("");
                }}
                className="text-xs font-body font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                {t("templates.clearAll")}
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
