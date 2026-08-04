/**
 * GEO Optimization Utilities
 * Provides geographic targeting and localization for different regions
 */

export interface GeoRegion {
  code: string;
  name: string;
  countries: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  timezone: string;
  language: string;
  currency: string;
  keywords: string[];
}

export interface GeoMetaTags {
  geoPosition: string;
  geoPlaceName: string;
  geoRegion: string;
  geoCountry: string;
}

// Define target regions for VXZO
export const targetRegions: Record<string, GeoRegion> = {
  africa: {
    code: 'AF',
    name: 'Africa',
    countries: ['NG', 'KE', 'ZA', 'EG', 'GH', 'ET', 'UG', 'TZ', 'CM', 'SN'],
    coordinates: { lat: -8.7832, lng: 34.5085 },
    timezone: 'Africa/Johannesburg',
    language: 'en',
    currency: 'USD',
    keywords: [
      'construction machinery Africa',
      'heavy equipment Nigeria',
      'excavator Kenya',
      'machinery parts export Africa',
      'industrial equipment Africa',
    ],
  },
  middle_east: {
    code: 'ME',
    name: 'Middle East',
    countries: ['SA', 'AE', 'QA', 'KW', 'BH', 'OM', 'JO', 'LB', 'YE', 'IR'],
    coordinates: { lat: 24.4539, lng: 54.3773 },
    timezone: 'Asia/Dubai',
    language: 'en',
    currency: 'USD',
    keywords: [
      'construction machinery Middle East',
      'heavy trucks Saudi Arabia',
      'machinery parts UAE',
      'equipment export Middle East',
      'industrial machinery Gulf',
    ],
  },
  central_asia: {
    code: 'CA',
    name: 'Central Asia',
    countries: ['KZ', 'UZ', 'TM', 'KG', 'TJ'],
    coordinates: { lat: 48.0196, lng: 66.9237 },
    timezone: 'Asia/Almaty',
    language: 'ru',
    currency: 'USD',
    keywords: [
      'machinery Kazakhstan',
      'construction equipment Uzbekistan',
      'heavy machinery Central Asia',
      'spare parts export CIS',
      'industrial equipment Turkmenistan',
    ],
  },
  south_america: {
    code: 'SA',
    name: 'South America',
    countries: ['BR', 'AR', 'CL', 'CO', 'PE', 'VE', 'EC', 'BO', 'PY', 'UY'],
    coordinates: { lat: -15.7975, lng: -52.4044 },
    timezone: 'America/Sao_Paulo',
    language: 'es',
    currency: 'USD',
    keywords: [
      'maquinaria construcción Brasil',
      'equipos pesados Argentina',
      'repuestos exportación América del Sur',
      'maquinaria industrial Chile',
      'excavadoras cargadores',
    ],
  },
  russia_cis: {
    code: 'RU',
    name: 'Russia & CIS',
    countries: ['RU', 'BY', 'UA', 'MD', 'GE', 'AM', 'AZ'],
    coordinates: { lat: 61.524, lng: 105.3188 },
    timezone: 'Europe/Moscow',
    language: 'ru',
    currency: 'RUB',
    keywords: [
      'строительная техника Россия',
      'тяжелое оборудование',
      'запчасти экспорт',
      'промышленная техника',
      'машины и оборудование',
    ],
  },
};

/**
 * Get GEO meta tags for a specific region
 */
export function getGeoMetaTags(regionCode: string): GeoMetaTags {
  const region = targetRegions[regionCode.toLowerCase()];

  if (!region) {
    return {
      geoPosition: '39.9042;116.4074',
      geoPlaceName: 'Beijing, China',
      geoRegion: 'CN',
      geoCountry: 'CN',
    };
  }

  return {
    geoPosition: `${region.coordinates.lat};${region.coordinates.lng}`,
    geoPlaceName: region.name,
    geoRegion: region.code,
    geoCountry: region.code,
  };
}

/**
 * Generate region-specific Schema.org LocalBusiness markup
 */
export function generateRegionalLocalBusinessSchema(region: GeoRegion) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://vxzo.manus.space/region/${region.code.toLowerCase()}`,
    name: `VXZO - ${region.name} Machinery & Parts`,
    description: `Professional machinery and spare parts exporter serving ${region.name}`,
    url: `https://vxzo.manus.space/?region=${region.code}`,
    telephone: '+224622497604',
    areaServed: region.countries.map((code) => ({
      '@type': 'Country',
      name: code,
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Beijing, China',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: '+224622497604',
      availableLanguage: [region.language],
    },
    priceRange: '$$',
    geo: {
      '@type': 'GeoShape',
      box: `${region.coordinates.lat - 10} ${region.coordinates.lng - 10} ${region.coordinates.lat + 10} ${region.coordinates.lng + 10}`,
    },
  };
}

/**
 * Generate region-specific Service schema
 */
export function generateRegionalServiceSchema(region: GeoRegion) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Machinery Export to ${region.name}`,
    description: `Professional machinery and spare parts export services to ${region.name}`,
    provider: {
      '@type': 'Organization',
      name: 'VXZO',
      url: 'https://vxzo.manus.space',
    },
    areaServed: region.countries.map((code) => ({
      '@type': 'Country',
      name: code,
    })),
    serviceType: ['Machinery Export', 'Parts Supply', 'Equipment Trading'],
    offers: {
      '@type': 'Offer',
      priceCurrency: region.currency,
      price: 'Contact for quote',
    },
  };
}

/**
 * Generate region-specific Organization schema
 */
export function generateRegionalOrganizationSchema(region: GeoRegion) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `https://vxzo.manus.space/region/${region.code.toLowerCase()}`,
    name: `VXZO - Global Machinery Trading (${region.name})`,
    url: 'https://vxzo.manus.space',
    description: `Professional exporter of construction machinery, heavy trucks, and spare parts to ${region.name}`,
    telephone: '+224622497604',
    email: 'contact@vxzo.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Beijing, China',
      addressCountry: 'CN',
    },
    areaServed: region.countries.map((code) => ({
      '@type': 'Country',
      name: code,
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: '+224622497604',
      availableLanguage: [region.language],
    },
    sameAs: [
      'https://www.facebook.com/vxzo',
      'https://www.linkedin.com/company/vxzo',
      'https://www.whatsapp.com/',
    ],
  };
}

/**
 * Get region-specific keywords for SEO
 */
export function getRegionalKeywords(regionCode: string): string[] {
  const region = targetRegions[regionCode.toLowerCase()];
  return region ? region.keywords : [];
}

/**
 * Generate region-specific meta description
 */
export function getRegionalMetaDescription(regionCode: string): string {
  const region = targetRegions[regionCode.toLowerCase()];

  if (!region) {
    return 'Professional exporter of construction machinery and spare parts worldwide';
  }

  const countryList = region.countries.slice(0, 3).join(', ');
  return `VXZO exports quality construction machinery and spare parts to ${region.name} including ${countryList}. Fast delivery, competitive prices, professional service.`;
}

/**
 * Generate region-specific Open Graph tags
 */
export function getRegionalOpenGraphTags(regionCode: string) {
  const region = targetRegions[regionCode.toLowerCase()];

  if (!region) {
    return {
      title: 'VXZO - Global Machinery & Parts Trading',
      description: 'Professional machinery and spare parts exporter',
      url: 'https://vxzo.manus.space/',
    };
  }

  return {
    title: `VXZO - Machinery Export to ${region.name}`,
    description: `Quality construction machinery and spare parts for ${region.name}`,
    url: `https://vxzo.manus.space/?region=${region.code}`,
  };
}

/**
 * Get all regions for sitemap generation
 */
export function getAllRegions(): GeoRegion[] {
  return Object.values(targetRegions);
}

/**
 * Get region by country code
 */
export function getRegionByCountry(countryCode: string): GeoRegion | null {
  for (const region of Object.values(targetRegions)) {
    if (region.countries.includes(countryCode)) {
      return region;
    }
  }
  return null;
}

/**
 * Detect region from country code
 */
export function detectRegionFromCountry(countryCode: string): string {
  const region = getRegionByCountry(countryCode);
  return region ? region.code : 'GLOBAL';
}
