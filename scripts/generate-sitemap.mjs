import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const DOMAIN = 'https://invito.live';
const templatesFilePath = path.join(rootDir, 'src', 'data', 'templates.ts');
const sitemapOutputPath = path.join(rootDir, 'public', 'sitemap.xml');

function getTemplateIds() {
  const content = fs.readFileSync(templatesFilePath, 'utf-8');
  const idRegex = /id:\s*["']([^"']+)["']/g;
  const ids = [];
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    if (!ids.includes(match[1])) {
      ids.push(match[1]);
    }
  }
  return ids;
}

function generateSitemapXml() {
  const today = new Date().toISOString().split('T')[0];
  const templateIds = getTemplateIds();

  const staticUrls = [
    {
      loc: `${DOMAIN}/`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      loc: `${DOMAIN}/templates`,
      lastmod: today,
      changefreq: 'daily',
      priority: '0.9'
    }
  ];

  const templateUrls = templateIds.map((id) => ({
    loc: `${DOMAIN}/templates/${id}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.8'
  }));

  const allUrls = [...staticUrls, ...templateUrls];

  const xmlUrls = allUrls
    .map(
      (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>
`;

  fs.writeFileSync(sitemapOutputPath, sitemapXml, 'utf-8');
  console.log(`Generated sitemap with ${allUrls.length} URLs at ${sitemapOutputPath}`);
}

generateSitemapXml();
