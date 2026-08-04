/**
 * Sitemap Generator for VXZO - Global Machinery & Parts Trading
 * Generates XML sitemaps for search engine indexing
 */

import { brands } from '../client/src/data/products';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const baseUrl = 'https://vxzo.manus.space';
const today = new Date().toISOString().split('T')[0];

/**
 * Generate main sitemap with high-priority pages
 */
export function generateMainSitemap(): string {
  const entries: SitemapEntry[] = [
    {
      url: `${baseUrl}/`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/construction`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/trucks`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/favorites`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.7,
    },
  ];

  return generateSitemapXml(entries, 'Main Pages');
}

/**
 * Generate brand pages sitemap
 */
export function generateBrandsSitemap(): string {
  const entries: SitemapEntry[] = brands.map((brand) => ({
    url: `${baseUrl}/brand/${brand.id}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.8,
  }));

  return generateSitemapXml(entries, 'Brand Pages');
}

/**
 * Generate products sitemap
 */
export function generateProductsSitemap(): string {
  const entries: SitemapEntry[] = [];

  // Add all spare parts from all brands
  brands.forEach((brand) => {
    if (brand.spareParts && Array.isArray(brand.spareParts)) {
      brand.spareParts.forEach((part) => {
        entries.push({
          url: `${baseUrl}/brand/${brand.id}?part=${part.id}`,
          lastmod: today,
          changefreq: 'monthly',
          priority: 0.6,
        });
      });
    }
  });

  return generateSitemapXml(entries, 'Product Pages');
}

/**
 * Generate search results sitemap (for popular search queries)
 */
export function generateSearchSitemap(): string {
  const popularSearches = [
    'excavator',
    'loader',
    'bulldozer',
    'grader',
    'engine',
    'spare parts',
    'brake pad',
    'filter',
    'battery',
    'tire',
  ];

  const entries: SitemapEntry[] = popularSearches.map((query) => ({
    url: `${baseUrl}/search?q=${encodeURIComponent(query)}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.5,
  }));

  return generateSitemapXml(entries, 'Search Results');
}

/**
 * Generate sitemap index (references all sitemaps)
 */
export function generateSitemapIndex(): string {
  const sitemaps = [
    { loc: `${baseUrl}/sitemap.xml`, lastmod: today },
    { loc: `${baseUrl}/sitemap-brands.xml`, lastmod: today },
    { loc: `${baseUrl}/sitemap-products.xml`, lastmod: today },
    { loc: `${baseUrl}/sitemap-search.xml`, lastmod: today },
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  sitemaps.forEach((sitemap) => {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${sitemap.loc}</loc>\n`;
    xml += `    <lastmod>${sitemap.lastmod}</lastmod>\n`;
    xml += `  </sitemap>\n`;
  });

  xml += '</sitemapindex>';

  return xml;
}

/**
 * Helper function to generate sitemap XML
 */
function generateSitemapXml(entries: SitemapEntry[], name: string): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += `<!-- ${name} Sitemap for VXZO - Generated on ${today} -->\n`;
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '         xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
  xml += '         xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">\n';

  entries.forEach((entry) => {
    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(entry.url)}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += '</urlset>';

  return xml;
}

/**
 * Escape special XML characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
