import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string;
}

export const usePageTitle = (metadata?: PageMetadata) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = metadata?.title || t('seo.title');
    const description = metadata?.description || t('seo.description');
    const keywords = metadata?.keywords || t('seo.keywords');

    // Update title
    document.title = title;

    // Update meta tags
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

  }, [metadata, t, i18n.language]);
};
