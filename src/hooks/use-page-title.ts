import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { buildPageJsonLd } from '@/lib/seo';

interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string;
}

const FALLBACK_LANGUAGE = 'ru';
const SUPPORTED_LANGUAGES = ['en', 'uz', 'ru', 'kz'];

const normalizeLanguage = (language?: string | null) => {
  if (!language) return FALLBACK_LANGUAGE;

  const normalized = language.split('-')[0].toLowerCase();
  return SUPPORTED_LANGUAGES.includes(normalized) ? normalized : FALLBACK_LANGUAGE;
};

const getStringValue = (value?: string | null) => value?.trim() || '';

export const resolveLocalizedValue = (key: string, i18nInstance: { language?: string | null; resolvedLanguage?: string | null; t: (key: string, options?: { lng?: string; defaultValue?: string }) => string; exists: (key: string, options?: { lng?: string }) => boolean }) => {
  const currentLanguage = normalizeLanguage(i18nInstance.language || i18nInstance.resolvedLanguage);
  const candidates = [currentLanguage, FALLBACK_LANGUAGE];

  for (const lng of candidates) {
    const candidate = i18nInstance.t(key, { lng, defaultValue: '' });
    if (getStringValue(candidate) && candidate !== key) {
      return candidate;
    }

    if (i18nInstance.exists(key, { lng })) {
      return i18nInstance.t(key, { lng });
    }
  }

  return i18nInstance.t(key, { lng: FALLBACK_LANGUAGE, defaultValue: '' }) || i18nInstance.t(key, { defaultValue: '' }) || '';
};

export const usePageTitle = (metadata?: PageMetadata) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const resolvedLanguage = normalizeLanguage(i18n.language || i18n.resolvedLanguage);
    const title = getStringValue(metadata?.title) || resolveLocalizedValue('seo.title', {
      language: i18n.language,
      resolvedLanguage: i18n.resolvedLanguage,
      t: (key, options) => t(key, options as never),
      exists: (key, options) => i18n.exists(key, options as never)
    });
    const description = getStringValue(metadata?.description) || resolveLocalizedValue('seo.description', {
      language: i18n.language,
      resolvedLanguage: i18n.resolvedLanguage,
      t: (key, options) => t(key, options as never),
      exists: (key, options) => i18n.exists(key, options as never)
    });
    const keywords = getStringValue(metadata?.keywords) || resolveLocalizedValue('seo.keywords', {
      language: i18n.language,
      resolvedLanguage: i18n.resolvedLanguage,
      t: (key, options) => t(key, options as never),
      exists: (key, options) => i18n.exists(key, options as never)
    });

    const canonicalPath = typeof window !== 'undefined' ? window.location.pathname : '/';
    const canonicalUrl = `https://invito.live${canonicalPath}`;
    const jsonLd = buildPageJsonLd({ pathname: canonicalPath, title, description });
    const locale = resolvedLanguage === 'ru' ? 'ru_RU' : resolvedLanguage === 'en' ? 'en_US' : resolvedLanguage === 'uz' ? 'uz_UZ' : 'kk_KZ';
    const alternateLocale = resolvedLanguage === 'ru' ? 'ru_RU' : resolvedLanguage === 'en' ? 'en_US' : resolvedLanguage === 'uz' ? 'uz_UZ' : 'kk_KZ';

    document.title = title;

    const setMeta = (selector: string, attr: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          element.setAttribute('property', attr);
        } else {
          element.setAttribute('name', attr);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', 'description', description);
    setMeta('meta[name="keywords"]', 'keywords', keywords);
    setMeta('meta[name="title"]', 'title', title);
    setMeta('meta[property="og:title"]', 'og:title', title);
    setMeta('meta[property="og:description"]', 'og:description', description);
    setMeta('meta[property="og:url"]', 'og:url', canonicalUrl);
    setMeta('meta[property="og:locale"]', 'og:locale', alternateLocale);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    const languageLink = document.querySelector('meta[name="language"]');
    if (!languageLink) {
      const newLanguageMeta = document.createElement('meta');
      newLanguageMeta.setAttribute('name', 'language');
      document.head.appendChild(newLanguageMeta);
    }
    document.querySelector('meta[name="language"]')?.setAttribute('content', resolvedLanguage);

    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      const newRobotsMeta = document.createElement('meta');
      newRobotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(newRobotsMeta);
    }
    document.querySelector('meta[name="robots"]')?.setAttribute('content', 'index, follow');

    const existingAlternates = Array.from(document.head.querySelectorAll('link[rel="alternate"]'));
    existingAlternates.forEach((link) => link.remove());

    const currentPath = canonicalPath === '/' ? '' : canonicalPath;
    const currentBaseUrl = `https://invito.live${currentPath}`;
    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute('content', currentBaseUrl);
    }

    const localeMeta = document.querySelector('meta[property="og:locale"]');
    if (localeMeta) {
      localeMeta.setAttribute('content', locale);
    }

    const localeAlternateMeta = document.querySelector('meta[property="og:locale:alternate"]');
    if (localeAlternateMeta) {
      localeAlternateMeta.setAttribute('content', alternateLocale);
    }

    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = jsonLd;
  }, [metadata, t, i18n.language, i18n.resolvedLanguage]);
};
