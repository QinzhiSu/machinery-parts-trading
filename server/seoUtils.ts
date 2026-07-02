/**
 * SEO Utilities for Dynamic Meta Tags and Schema Markup
 */

export interface SEOMetaTags {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonical: string;
}

export interface ProductSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  image: string;
  brand: {
    '@type': string;
    name: string;
  };
  offers: {
    '@type': string;
    availability: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    '@type': string;
    ratingValue: number;
    reviewCount: number;
  };
}

/**
 * Generate meta tags for homepage
 */
export function getHomePageMetaTags(): SEOMetaTags {
  return {
    title: 'VXZO - Global Machinery & Parts Trading | Construction Equipment Export',
    description:
      'Professional exporter of construction machinery, heavy trucks, and spare parts. Serving Africa, Middle East, Central Asia, South America, and Russia with quality equipment from leading brands.',
    keywords: [
      'construction machinery export',
      'heavy trucks',
      'spare parts',
      'equipment export',
      'global machinery trading',
      'CAT',
      'Komatsu',
      'XCMG',
      'Shantui',
      'SANY',
    ],
    ogTitle: 'VXZO - Global Machinery & Parts Trading',
    ogDescription: 'Professional exporter of construction machinery and spare parts worldwide',
    ogImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/hero-machinery-nbwEngDndkYEV7YkbvbRje.webp',
    ogUrl: 'https://vxzo.manus.space/',
    twitterTitle: 'VXZO - Global Machinery Export',
    twitterDescription: 'Construction machinery and spare parts for global markets',
    twitterImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/hero-machinery-nbwEngDndkYEV7YkbvbRje.webp',
    canonical: 'https://vxzo.manus.space/',
  };
}

/**
 * Generate meta tags for brand pages
 */
export function getBrandPageMetaTags(brandName: string, brandId: string): SEOMetaTags {
  return {
    title: `${brandName} Spare Parts & Equipment | VXZO Global Export`,
    description: `Browse ${brandName} construction machinery spare parts and equipment. High-quality components for ${brandName} machines available for export worldwide.`,
    keywords: [
      `${brandName} spare parts`,
      `${brandName} equipment`,
      `${brandName} parts export`,
      'construction equipment',
      'machinery parts',
    ],
    ogTitle: `${brandName} - VXZO Global Trading`,
    ogDescription: `${brandName} spare parts and equipment for global export`,
    ogImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/hero-machinery-nbwEngDndkYEV7YkbvbRje.webp',
    ogUrl: `https://vxzo.manus.space/brand/${brandId}`,
    twitterTitle: `${brandName} Parts - VXZO`,
    twitterDescription: `${brandName} spare parts for global markets`,
    twitterImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/hero-machinery-nbwEngDndkYEV7YkbvbRje.webp',
    canonical: `https://vxzo.manus.space/brand/${brandId}`,
  };
}

/**
 * Generate meta tags for search results
 */
export function getSearchPageMetaTags(query: string): SEOMetaTags {
  return {
    title: `${query} - Search Results | VXZO Global Machinery Trading`,
    description: `Search results for "${query}" - Find construction machinery, spare parts, and equipment from leading brands.`,
    keywords: [query, 'machinery', 'spare parts', 'equipment', 'export'],
    ogTitle: `Search: ${query} - VXZO`,
    ogDescription: `Find ${query} machinery and spare parts`,
    ogImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/hero-machinery-nbwEngDndkYEV7YkbvbRje.webp',
    ogUrl: `https://vxzo.manus.space/search?q=${encodeURIComponent(query)}`,
    twitterTitle: `Search: ${query}`,
    twitterDescription: `Find machinery and parts`,
    twitterImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/hero-machinery-nbwEngDndkYEV7YkbvbRje.webp',
    canonical: `https://vxzo.manus.space/search?q=${encodeURIComponent(query)}`,
  };
}

/**
 * Generate Product schema for structured data
 */
export function generateProductSchema(
  name: string,
  description: string,
  image: string,
  brand: string,
  partNumber: string
): ProductSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${name} (${partNumber})`,
    description: description,
    image: image,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
  };
}

/**
 * Generate FAQPage schema for structured data
 */
export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What machinery brands do you export?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We export machinery from leading brands including CAT, Komatsu, XCMG, Shantui, SANY, Isuzu, Sinotruk, Toyota, Cummins, and Weichai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which regions do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve Africa, Middle East, Central Asia, South America, Russia, and other global markets with quality machinery and spare parts.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I request a quote?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact us via WhatsApp, WeChat, email, or phone. Use the contact methods displayed on our website for quick response.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide spare parts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer a comprehensive range of spare parts for all machinery brands, including high-frequency replacement items and consumables.',
        },
      },
    ],
  };
}

/**
 * Generate AggregateOffer schema for multiple products
 */
export function generateAggregateOfferSchema(productCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    offerCount: productCount,
  };
}
