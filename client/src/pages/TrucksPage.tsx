// Design: Industrial Minimalism - Trucks & Engines category page
import { Link } from 'wouter';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getBrandsByCategory } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { getTranslatedTrucksPageBrandDescription } from '@/data/trucksPageTranslations';

const TRUCK_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp';
const truckBrands = getBrandsByCategory('truck');
const engineBrands = getBrandsByCategory('engine');

export default function TrucksPage() {
  const { language } = useLanguage();
  const t = (key: string) => translations[language]?.[key] || key;
  const getCountryLabel = (country: string) => {
    const countryKeyBySource: Record<string, string> = {
      USA: 'home.country.usa',
      China: 'home.country.china',
      Japan: 'home.country.japan',
    };
    return countryKeyBySource[country] ? t(countryKeyBySource[country]) : country;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-96 md:h-[26rem] flex items-start overflow-hidden" style={{ paddingTop: "3rem" }}>
        <img src={TRUCK_IMG} alt={t('home.heavyTrucks')} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, oklch(0.1 0.04 265 / 0.95) 0%, oklch(0.1 0.04 265 / 0.5) 100%)' }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: 'oklch(0.68 0.18 42)' }} />
        <div className="container relative z-10 pt-0 md:pt-0 pb-8">
          <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: 'oklch(0.6 0.02 265)', fontFamily: 'var(--font-display)' }}>
            <Link href="/" className="hover:text-orange-400 transition-colors uppercase tracking-wider">{t('nav.home')}</Link>
            <ChevronRight size={12} />
            <span className="uppercase tracking-wider" style={{ color: 'oklch(0.68 0.18 42)' }}>{t('category.trucksEngines')}</span>
          </div>
          <h1
            className="text-white uppercase leading-none"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}
          >
            {t('category.trucksEngines')}
          </h1>
          <p className="text-sm mt-2 max-w-xl" style={{ color: 'oklch(0.75 0.01 265)' }}>
            {t('home.heavyTrucksDesc')}
          </p>
        </div>
      </section>

      <div className="flex-1 py-12" style={{ background: 'oklch(0.97 0.005 90)' }}>
        <div className="container">

          {/* Trucks Section */}
          <div className="mb-12">
            <div className="mb-8">
              <div className="text-xs uppercase tracking-widest mb-1 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
                {t('category.trucksEngines')}
              </div>
              <h2 className="section-heading" style={{ color: 'oklch(0.18 0.04 265)' }}>
                {t('home.heavyTrucks')}
              </h2>
              <p className="mt-3 text-sm" style={{ color: 'oklch(0.5 0.02 265)' }}>
                {t('home.heavyTrucksDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {truckBrands.map((brand: typeof truckBrands[0]) => (
                <Link
                  key={brand.id}
                  href={`/brand/${brand.id}`}
                  className="group bg-white border border-border hover:border-orange-400 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="p-5 flex items-center gap-3" style={{ background: 'oklch(0.18 0.04 265)' }}>
                    <div
                      className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-white font-bold"
                      style={{ background: brand.color, fontFamily: 'var(--font-display)', letterSpacing: '0.05em', fontSize: '0.6rem' }}
                    >
                      {brand.logo}
                    </div>
                    <div>
                      <h3
                        className="text-white font-bold uppercase tracking-wide group-hover:text-orange-400 transition-colors"
                        style={{ fontFamily: 'var(--font-display)', fontSize: '1rem' }}
                      >
                        {brand.name}
                      </h3>
                      <div className="text-xs" style={{ color: 'oklch(0.6 0.02 265)' }}>{getCountryLabel(brand.country)}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-border border-b border-border">
                    <div className="p-3 text-center">
                      <div className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.68 0.18 42)' }}>
                        {brand.machines.length}
                      </div>
                      <div className="text-xs" style={{ color: 'oklch(0.5 0.02 265)', fontFamily: 'var(--font-display)' }}>{t('category.machineModels')}</div>
                    </div>
                    <div className="p-3 text-center">
                      <div className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.68 0.18 42)' }}>
                        {brand.spareParts.length}
                      </div>
                      <div className="text-xs" style={{ color: 'oklch(0.5 0.02 265)', fontFamily: 'var(--font-display)' }}>{t('category.spareParts')}</div>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-xs leading-relaxed mb-3" style={{ color: 'oklch(0.45 0.02 265)' }}>
                      {getTranslatedTrucksPageBrandDescription(brand.id, language, brand.description)}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {brand.machines.slice(0, 3).map((m: typeof brand.machines[0]) => (
                        <span key={m.id} className="text-xs px-1.5 py-0.5" style={{ background: 'oklch(0.97 0.005 90)', color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-mono)', border: '1px solid oklch(0.88 0.008 90)', fontSize: '0.65rem' }}>
                          {m.model}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider group-hover:gap-2.5 transition-all" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
                      {t('category.viewFullCatalog')} <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Engines Section */}
          <div>
            <div className="mb-8">
              <div className="text-xs uppercase tracking-widest mb-1 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
                {t('home.dieselEngines')}
              </div>
              <h2 className="section-heading" style={{ color: 'oklch(0.18 0.04 265)' }}>
                {t('home.dieselEngines')}
              </h2>
              <p className="mt-3 text-sm" style={{ color: 'oklch(0.5 0.02 265)' }}>
                {t('home.dieselEnginesDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engineBrands.map((brand: typeof engineBrands[0]) => (
                <Link
                  key={brand.id}
                  href={`/brand/${brand.id}`}
                  className="group flex gap-0 bg-white border border-border hover:border-orange-400 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Color accent bar */}
                  <div className="w-1.5 flex-shrink-0" style={{ background: brand.color }} />

                  <div className="flex-1 p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-16 h-16 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs"
                        style={{ background: brand.color, fontFamily: 'var(--font-display)', letterSpacing: '0.05em', fontSize: '0.65rem' }}
                      >
                        {brand.logo}
                      </div>
                      <div className="flex-1">
                        <h3
                          className="font-bold uppercase tracking-wide text-lg group-hover:text-orange-600 transition-colors mb-1"
                          style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                        >
                          {brand.fullName}
                        </h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: 'oklch(0.45 0.02 265)' }}>
                          {getTranslatedTrucksPageBrandDescription(brand.id, language, brand.description)}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {brand.machines.map((m: typeof brand.machines[0]) => (
                            <span key={m.id} className="text-xs px-2 py-0.5" style={{ background: 'oklch(0.97 0.005 90)', color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-mono)', border: '1px solid oklch(0.88 0.008 90)' }}>
                              {m.model}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-mono-industrial" style={{ color: 'oklch(0.68 0.18 42)' }}>
                            {brand.machines.length} {t('category.machineModels')}
                          </span>
                          <span className="text-xs font-mono-industrial" style={{ color: 'oklch(0.68 0.18 42)' }}>
                            {brand.spareParts.length} {t('category.spareParts')}
                          </span>
                        </div>
                      </div>
                      <ArrowRight size={20} className="flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" style={{ color: 'oklch(0.68 0.18 42)' }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
