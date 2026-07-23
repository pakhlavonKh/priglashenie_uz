export interface SeoPageData {
  pathname: string;
  title: string;
  description: string;
  image?: string;
}

export const buildPageJsonLd = ({ pathname, title, description, image = "https://invito.live/og-image.webp" }: SeoPageData) => {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const breadcrumbItems = normalizedPath === "/"
    ? []
    : [
        { name: "Home", url: "https://invito.live/" },
        { name: title, url: `https://invito.live${normalizedPath}` }
      ];

  const breadcrumbJson = breadcrumbItems.length
    ? `,
      "breadcrumb": {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [${breadcrumbItems.map((item, index) => `
          {
            "@type": "ListItem",
            "position": ${index + 1},
            "name": ${JSON.stringify(item.name)},
            "item": ${JSON.stringify(item.url)}
          }`).join(",")}
        ]
      }`
    : "";

  return `{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Invito",
        "url": "https://invito.live",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://invito.live/templates",
          "query-input": "required name=search_term"
        }
      },
      {
        "@type": "Organization",
        "name": "Invito",
        "url": "https://invito.live",
        "logo": "https://invito.live/favicon.png",
        "sameAs": [
          "https://t.me/invito_live"
        ]
      },
      {
        "@type": "WebPage",
        "url": "https://invito.live${normalizedPath}",
        "name": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "image": ${JSON.stringify(image)}
        ${breadcrumbJson}
      }
    ]
  }`;
};
