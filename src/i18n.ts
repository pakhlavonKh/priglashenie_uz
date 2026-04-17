import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import uzTranslations from './locales/uz.json';
import ruTranslations from './locales/ru.json';
import kzTranslations from './locales/kz.json';

const resources = {
  en: {
    translation: enTranslations
  },
  uz: {
    translation: uzTranslations
  },
  ru: {
    translation: ruTranslations
  },
  kz: {
    translation: kzTranslations
  }
};

// Detect language from browser or localStorage
const getInitialLanguage = () => {
  const saved = localStorage.getItem('i18nextLng');
  if (saved) return saved;
  
  const browserLang = navigator.language.split('-')[0];
  if (["en", "uz", "ru", "kz"].includes(browserLang)) {
    return browserLang;
  }
  return "en"; // Default to English
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
