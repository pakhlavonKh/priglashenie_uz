import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(
    i18n.language === 'uz' ? 0 : i18n.language === 'ru' ? 1 : 2
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [bgStyle, setBgStyle] = useState({ left: 0, width: 0 });

  const languages = [
    { code: 'uz', name: 'UZ' },
    { code: 'ru', name: 'RU' },
    { code: 'en', name: 'EN' },
  ];

  const handleLanguageChange = (lng: string, index: number) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setActiveIndex(index);
  };

  useEffect(() => {
    const btn = btnRefs.current[activeIndex];
    const container = containerRef.current;

    if (btn && container) {
      const btnRect = btn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setBgStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
      });
    }
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex bg-muted p-1 rounded-full"
    >
      {/* Sliding background */}
      <div
        className="absolute top-1 bottom-1 bg-primary rounded-full transition-all duration-300 ease-in-out"
        style={{
          left: bgStyle.left,
          width: bgStyle.width,
        }}
      />

      {/* Buttons */}
      {languages.map((lang, index) => (
        <button
          key={lang.code}
          ref={(el) => (btnRefs.current[index] = el)}
          onClick={() => handleLanguageChange(lang.code, index)}
          className={`relative z-10 px-3 h-8 text-xs font-semibold uppercase flex items-center justify-center transition-colors ${
            activeIndex === index
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};