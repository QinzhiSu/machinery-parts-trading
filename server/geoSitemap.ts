/**
 * GEO-Specific Sitemap Generator
 * Generates region-specific sitemaps for better regional SEO
 */

import { getAllRegions } from './geoUtils';

const baseUrl = 'https://vxzo.manus.space';
const today = new Date().toISOString().split('T')[0];

/**
 * Generate Africa region sitemap
 */
export function generateAfricaSitemap(): string {
  const entries = [
    { url: `${baseUrl}/?region=AF`, priority: 0.9 },
    { url: `${baseUrl}/construction?region=AF`, priority: 0.8 },
    { url: `${baseUrl}/trucks?region=AF`, priority: 0.8 },
    { url: `${baseUrl}/contact?region=AF`, priority: 0.7 },
  ];

  return generateRegionalSitemapXml(entries, 'Africa');
}

/**
 * Generate Middle East region sitemap
 */
export function generateMiddleEastSitemap(): string {
  const entries = [
    { url: `${baseUrl}/?region=ME`, priority: 0.9 },
    { url: `${baseUrl}/construction?region=ME`, priority: 0.8 },
    { url: `${baseUrl}/trucks?region=ME`, priority: 0.8 },
    { url: `${baseUrl}/contact?region=ME`, priority: 0.7 },
  ];

  return generateRegionalSitemapXml(entries, 'Middle East');
}

/**
 * Generate Central Asia region sitemap
 */
export function generateCentralAsiaSitemap(): string {
  const entries = [
    { url: `${baseUrl}/?region=CA`, priority: 0.9 },
    { url: `${baseUrl}/construction?region=CA`, priority: 0.8 },
    { url: `${baseUrl}/trucks?region=CA`, priority: 0.8 },
    { url: `${baseUrl}/contact?region=CA`, priority: 0.7 },
  ];

  return generateRegionalSitemapXml(entries, 'Central Asia');
}

/**
 * Generate South America region sitemap
 */
export function generateSouthAmericaSitemap(): string {
  const entries = [
    { url: `${baseUrl}/?region=SA`, priority: 0.9 },
    { url: `${baseUrl}/construction?region=SA`, priority: 0.8 },
    { url: `${baseUrl}/trucks?region=SA`, priority: 0.8 },
    { url: `${baseUrl}/contact?region=SA`, priority: 0.7 },
  ];

  return generateRegionalSitemapXml(entries, 'South America');
}

/**
 * Generate Russia & CIS region sitemap
 */
export function generateRussiaCISSitemap(): string {
  const entries = [
    { url: `${baseUrl}/?region=RU`, priority: 0.9 },
    { url: `${baseUrl}/construction?region=RU`, priority: 0.8 },
    { url: `${baseUrl}/trucks?region=RU`, priority: 0.8 },
    { url: `${baseUrl}/contact?region=RU`, priority: 0.7 },
  ];

  return generateRegionalSitemapXml(entries, 'Russia & CIS');
}

/**
 * Generate geo-specific sitemap index
 */
export function generateGeoSitemapIndex(): string {
  const regions = getAllRegions();
  const regionCodes = {
    africa: 'AF',
    middle_east: 'ME',
    central_asia: 'CA',
    south_america: 'SA',
    russia_cis: 'RU',
  };

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  Object.entries(regionCodes).forEach(([key, code]) => {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${baseUrl}/sitemap-${key}.xml</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `  </sitemap>\n`;
  });

  xml += '</sitemapindex>';

  return xml;
}

/**
 * Helper function to generate regional sitemap XML
 */
function generateRegionalSitemapXml(
  entries: Array<{ url: string; priority: number }>,
  regionName: string
): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += `<!-- ${regionName} Regional Sitemap for VXZO - Generated on ${today} -->\n`;
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  entries.forEach((entry) => {
    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(entry.url)}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
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
