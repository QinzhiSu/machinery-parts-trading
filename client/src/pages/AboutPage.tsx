// Design: Industrial Minimalism - About page
import { Link } from 'wouter';
import { ChevronRight, CheckCircle, Globe, Award, Users, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { aboutPageTranslations } from '@/data/aboutPageTranslations';

const HERO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/hero-machinery-nbwEngDndkYEV7YkbvbRje.webp';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = (key: string) => translations[language]?.[key] || key;
  const pageCopy = aboutPageTranslations[language];
  const getCountryLabel = (country: string) => {
    const countryKeyBySource: Record<string, string> = { USA: 'home.country.usa', China: 'home.country.china', Japan: 'home.country.japan' };
    return countryKeyBySource[country] ? t(countryKeyBySource[country]) : country;
  };
  const offices = [
    { cityKey: 'about.beijing', typeKey: 'about.headquarters', descKey: 'about.beijingDesc', address: pageCopy.offices.beijing },
    { cityKey: 'about.conakry', typeKey: 'about.westAfrica', descKey: 'about.conakryDesc', address: pageCopy.offices.conakry },
    { cityKey: 'about.antananarivo', typeKey: 'about.eastAfrica', descKey: 'about.antanDesc', address: pageCopy.offices.antananarivo },
    { cityKey: 'about.hongkong', typeKey: 'about.asiaPacific', descKey: 'about.hkDesc', address: pageCopy.offices.hongkong },
    { cityKey: 'about.shandong', typeKey: 'about.logisticsHub', descKey: 'about.sdDesc', address: pageCopy.offices.shandong },
  ];
  const brands = [
    { name: 'Caterpillar', country: 'USA', id: 'caterpillar' }, { name: 'Komatsu', country: 'Japan', id: 'komatsu' }, { name: 'XCMG', country: 'China', id: 'xcmg' }, { name: 'Shantui', country: 'China', id: 'shantui' }, { name: 'LiuGong', country: 'China', id: 'liugong' }, { name: 'SANY', country: 'China', id: 'sany' }, { name: 'Isuzu', country: 'Japan', id: 'isuzu' }, { name: 'Shacman', country: 'China', id: 'shacman' }, { name: 'Sinotruk', country: 'China', id: 'sinotruck' }, { name: 'Toyota', country: 'Japan', id: 'toyota' }, { name: 'Cummins', country: 'USA', id: 'cummins' }, { name: 'Weichai', country: 'China', id: 'weichai' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-64 md:h-72 flex items-end overflow-hidden">
        <img src={HERO_IMG} alt={t('about.title')} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, oklch(0.1 0.04 265 / 0.95) 0%, oklch(0.1 0.04 265 / 0.5) 100%)' }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: 'oklch(0.68 0.18 42)' }} />
        <div className="container relative z-10 pb-8">
          <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: 'oklch(0.6 0.02 265)', fontFamily: 'var(--font-display)' }}>
            <Link href="/" className="hover:text-orange-400 transition-colors uppercase tracking-wider">{t('nav.home')}</Link>
            <ChevronRight size={12} />
            <span className="uppercase tracking-wider" style={{ color: 'oklch(0.68 0.18 42)' }}>{t('about.title')}</span>
          </div>
          <h1
            className="text-white uppercase leading-none"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}
          >
            {t('about.title')}
          </h1>
        </div>
      </section>

      <section className="flex-1 py-12" style={{ background: 'oklch(0.97 0.005 90)' }}>
        <div className="container">

          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
                {t('about.whoWeAre')}
              </div>
              <h2 className="section-heading mb-6" style={{ color: 'oklch(0.18 0.04 265)' }}>
                {pageCopy.companyHeading.split('\n').map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.4 0.02 265)' }}>
                {t('about.description')}
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.4 0.02 265)' }}>
                {pageCopy.portfolio}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.4 0.02 265)' }}>
                {pageCopy.customers}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, ...pageCopy.stats[0] },
                { icon: Award, ...pageCopy.stats[1] },
                { icon: Users, ...pageCopy.stats[2] },
                { icon: TrendingUp, ...pageCopy.stats[3] },
              ].map(item => (
                <div
                  key={item.title}
                  className="p-6 bg-white border-l-4"
                  style={{ borderLeftColor: 'oklch(0.68 0.18 42)' }}
                >
                  <item.icon size={24} className="mb-3" style={{ color: 'oklch(0.68 0.18 42)' }} />
                  <div
                    className="font-bold uppercase tracking-wide text-base mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                  >
                    {item.title}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.5 0.02 265)' }}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Office Locations */}
          <div className="mb-16">
            <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
              {t('about.globalPresence')}
            </div>
            <h2 className="section-heading mb-8" style={{ color: 'oklch(0.18 0.04 265)' }}>
              {t('about.ourOffices')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {offices.map(office => (
                <div
                  key={office.cityKey}
                  className="p-5 bg-white border-l-4 hover:shadow-md transition-shadow"
                  style={{ borderLeftColor: 'oklch(0.68 0.18 42)' }}
                >
                  <div
                    className="font-bold uppercase tracking-wide text-sm mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.68 0.18 42)' }}
                  >
                    {t(office.cityKey)}
                  </div>
                  <div className="text-xs font-semibold mb-2" style={{ color: 'oklch(0.5 0.02 265)' }}>
                    {t(office.typeKey)}
                  </div>
                  <p className="text-xs leading-relaxed mb-2" style={{ color: 'oklch(0.4 0.02 265)' }}>
                    {t(office.descKey)}
                  </p>
                  <div className="text-xs" style={{ color: 'oklch(0.55 0.02 265)' }}>
                    <div className="mb-1">{office.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Brands */}
          <div className="mb-16">
            <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
              {t('about.portfolio')}
            </div>
            <h2 className="section-heading mb-6" style={{ color: 'oklch(0.18 0.04 265)' }}>
              13 {t('about.brandsWeCarry')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {brands.map(brand => (
                <Link
                  key={brand.id}
                  href={`/brand/${brand.id}`}
                  className="p-4 bg-white border border-border hover:border-orange-400 hover:shadow-md transition-all text-center group"
                >
                  <div
                    className="font-bold uppercase tracking-wide text-sm group-hover:text-orange-600 transition-colors"
                    style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                  >
                    {brand.name}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'oklch(0.55 0.02 265)' }}>
                    {getCountryLabel(brand.country)}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="p-8 bg-white border-l-4" style={{ borderLeftColor: 'oklch(0.68 0.18 42)' }}>
            <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
              {t('about.advantages')}
            </div>
            <h2
              className="text-2xl font-bold uppercase tracking-wide mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
            >
              {t('about.whyChooseUs')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['about.directFactory', 'about.genuineOem', 'about.exportDocs', 'about.paymentTerms', 'about.professionalPacking', 'about.technicalSupport', 'about.fastResponse', 'about.longTermRelation'].map(key => (
                <div key={key} className="flex items-start gap-3 text-sm" style={{ color: 'oklch(0.35 0.02 265)' }}>
                  <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'oklch(0.68 0.18 42)' }} />
                  {t(key)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
