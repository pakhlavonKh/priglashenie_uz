import { templates } from "@/data/templates";
import TemplateCard from "./TemplateCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/use-in-view";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedTemplates = () => {
  const { t } = useTranslation();
  const { ref, isInView } = useInView({ once: true, threshold: 0.2 });

  // Shuffle templates and pick random featured ones
  function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const featured = shuffleArray(templates).slice(0, 6);
  const autoplayDelay = 5000;

  // 🔹 Responsive visible count
  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [currentIndex, setCurrentIndex] = useState(visibleCount);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 🔹 Refs for pixel-perfect sliding
  const itemRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);

  // 🔹 Measure item width (including gap)
  useEffect(() => {
    const updateWidth = () => {
      if (itemRef.current) {
        const el = itemRef.current;
        const styles = window.getComputedStyle(el);

        const marginRight = parseFloat(styles.marginRight || "0");

        setItemWidth(el.offsetWidth + marginRight);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // 🔹 Handle resize (visible count)
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Reset index when layout changes
  useEffect(() => {
    setCurrentIndex(visibleCount);
  }, [visibleCount]);

  // 🔹 Infinite loop array
  const extendedTemplates = [
    ...featured.slice(-visibleCount),
    ...featured,
    ...featured.slice(0, visibleCount),
  ];

  // 🔹 Navigation
  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  // 🔹 Infinite loop fix
  useEffect(() => {
    if (currentIndex >= featured.length + visibleCount) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(visibleCount);
      }, 500);
    }

    if (currentIndex < visibleCount) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(featured.length + visibleCount - 1);
      }, 500);
    }
  }, [currentIndex, visibleCount, featured.length]);

  // 🔹 Re-enable transition
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  // 🔹 Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center space-y-4 mb-14 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
            {t("featured.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            {t("featured.title")}
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-500 ease-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${currentIndex * itemWidth}px)`,
              }}
            >
              {extendedTemplates.map((template, i) => (
                <div
                  key={`${template.id}-${i}`}
                  ref={i === 0 ? itemRef : null}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-4 lg:px-4"
                >
                  <TemplateCard template={template} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute -left-10 top-1/2 -translate-y-1/2 items-center justify-center w-11 h-11 rounded-full bg-white/70 backdrop-blur-md border border-border hover:bg-white transition-all shadow-sm z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute -right-10 top-1/2 -translate-y-1/2 items-center justify-center w-11 h-11 rounded-full bg-white/70 backdrop-blur-md border border-border hover:bg-white transition-all shadow-sm z-10"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* View all */}
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