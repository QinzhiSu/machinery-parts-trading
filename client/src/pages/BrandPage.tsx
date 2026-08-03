// Design: Industrial Minimalism
// Brand page with machines + spare parts tabs, orange accent cards
import { useState, useEffect } from 'react';
import { useParams, Link, useSearch } from 'wouter';
import { ArrowLeft, ChevronRight, Package, Wrench, Tag, Phone, Mail, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuickInquiryDialog from '@/components/QuickInquiryDialog';
import SparePartDetailModal from '@/components/SparePartDetailModal';
import CategoryFilter from '@/components/CategoryFilter';
import { getBrandById, SparePart } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import ComparisonButton from '@/components/ComparisonButton';
import { usePartTranslation } from '@/hooks/usePartTranslation';
import { useMachineTranslations } from '@/hooks/useMachineTranslations';
import { getTranslatedDescription } from '@/data/descriptionTranslations';
import { getTranslatedSparePartName, getTranslatedSparePartDescription, getTranslatedSparePartCategory } from '@/data/sparePartsTranslations';
import { getTranslatedCATMachineDescription, getTranslatedCATMachineSpecs, getTranslatedCATMachineType } from '@/data/catMachineTranslations';
import { getTranslatedShantuiMachineName, getTranslatedShantuiMachineDescription, getTranslatedShantuiMachineType, getTranslatedShantuiMachineSpecs, getTranslatedShantuiMachineShortDescription } from '@/data/shantuiMachineTranslations';
import { getTranslatedShantuiSparePartDescription, getTranslatedShantuiSparePartCategory, getTranslatedSanySparePartDescription, getTranslatedSanySparePartCategory, getTranslatedXCMGSparePartCategory } from '@/data/sparePartsTranslations';
import { getTranslatedSanyMachineTitle, getTranslatedSanyMachineType, getTranslatedSanyMachineSpecs, getTranslatedSanyMachineDescription } from '@/data/sanyMachineTranslations';
import { getTranslatedXCMGMachineDescription, getTranslatedXCMGMachineType, getTranslatedXCMGMachineSpecs } from '@/data/xcmgMachineTranslations';
import MachineDescriptionTranslator from '@/components/MachineDescriptionTranslator';

const PARTS_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/spare-parts-banner-MPvqe3AJjXeWtJpc8XFEsb.webp';

export default function BrandPage() {
  const { t, language } = useLanguage();
  const { translateMachineDescription: translateMachineDescriptionPartial, translatePartCategory, translatePartButtonText, translatePartName } = usePartTranslation();
  const { translateDescription } = useMachineTranslations();
  const { brandId } = useParams<{ brandId: string }>();
  const search = useSearch();
  const params = new URLSearchParams(search);
  const highlightPartId = params.get('partId');
  
  const brand = getBrandById(brandId || '');
  const [activeTab, setActiveTab] = useState<'machines' | 'parts'>('machines');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inquiryDialogOpen, setInquiryDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ model: string; name: string; specs?: string; type: 'machine' | 'spare-part' } | null>(null);
  const [selectedPart, setSelectedPart] = useState<SparePart | null>(null);
  const [partDetailOpen, setPartDetailOpen] = useState(false);
  const [highlightedPartId, setHighlightedPartId] = useState<string | null>(null);

  // Auto-open part detail if coming from search
  useEffect(() => {
    if (highlightPartId && brand) {
      const part = brand.spareParts.find(p => p.id === highlightPartId);
      if (part) {
        setSelectedPart(part);
        setPartDetailOpen(true);
        setActiveTab('parts');
        setHighlightedPartId(highlightPartId);
        // Scroll to the part
        setTimeout(() => {
          const element = document.getElementById(`part-${highlightPartId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    }
  }, [highlightPartId, brand]);

  const openInquiry = (product: { model: string; name: string; specs?: string; type: 'machine' | 'spare-part' }) => {
    setSelectedProduct(product);
    setInquiryDialogOpen(true);
  };

  const handlePartDetailClose = () => {
    setPartDetailOpen(false);
    setHighlightedPartId(null);
  };

  if (!brand) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Brand Not Found</h2>
            <Link href="/" className="text-orange-500 hover:underline">← Back to Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const filteredParts = selectedCategories.length === 0
    ? brand.spareParts
    : brand.spareParts.filter(p => selectedCategories.includes(p.category));

  const categoryPath = brand.category === 'construction' ? '/construction' : '/trucks';
  const categoryLabel = brand.category === 'construction' ? t('category.constructionMachinery') : t('category.trucksEngines');

  return (
    <div className="min-h-screen flex flex-col" role="main">
      <Navbar />

      {/* Brand Hero */}
      <section
        className="py-12 relative overflow-hidden"
        style={{ background: 'oklch(0.18 0.04 265)' }}
      >
        {/* Decorative diagonal */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5"
          style={{ background: `linear-gradient(135deg, ${brand.color} 0%, transparent 100%)` }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: 'oklch(0.68 0.18 42)' }} />

        <div className="container relative z-10">
          {/* Back to Home Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <ArrowLeft size={14} />
            {t('common.backHome')}
          </Link>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: 'oklch(0.6 0.02 265)', fontFamily: 'var(--font-display)' }}>
            <Link href="/" className="hover:text-orange-400 transition-colors uppercase tracking-wider">{t('nav.home')}</Link>
            <ChevronRight size={12} />
            <Link href={categoryPath} className="hover:text-orange-400 transition-colors uppercase tracking-wider">{categoryLabel}</Link>
            <ChevronRight size={12} />
            <span className="uppercase tracking-wider" style={{ color: 'oklch(0.68 0.18 42)' }}>{brand.name}</span>
          </div>

          <div className="flex items-start gap-6">
            {/* Brand logo box */}
            <div
              className="w-24 h-24 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-md rounded-lg"
              style={{
                background: brand.color,
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.05em',
                fontSize: '1.1rem',
                lineHeight: '1',
                padding: '0.5rem',
              }}
            >
              {brand.logo}
            </div>

            <div>
              <div
                className="text-xs uppercase tracking-widest mb-1 font-semibold"
                style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}
              >
                {brand.country} · {brand.category === 'construction' ? t('category.constructionMachinery') : brand.category === 'truck' ? 'Commercial Trucks' : 'Diesel Engines'}
              </div>
              <h1
                className="text-white uppercase leading-none mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  letterSpacing: '0.02em',
                }}
              >
                {brand.fullName}
              </h1>
              <p className="text-sm max-w-2xl leading-relaxed" style={{ color: 'oklch(0.7 0.02 265)' }}>
                {t(`brand.${brandId?.toLowerCase()}.description`) !== `brand.${brandId?.toLowerCase()}.description` ? t(`brand.${brandId?.toLowerCase()}.description`) : brand.description}
              </p>
              <div className="flex items-center gap-6 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.68 0.18 42)' }}>
                    {brand.machines.length}
                  </div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: 'oklch(0.6 0.02 265)', fontFamily: 'var(--font-display)' }}>
                    {t('category.machineModels')}
                  </div>
                </div>
                <div className="w-px h-10" style={{ background: 'oklch(0.28 0.04 265)' }} />
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.68 0.18 42)' }}>
                    {brand.spareParts.length}
                  </div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: 'oklch(0.6 0.02 265)', fontFamily: 'var(--font-display)' }}>
                    {t('brand.spareParts')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center gap-0">
          <button
            onClick={() => setActiveTab('machines')}
            className="flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all border-b-2"
            style={{
              fontFamily: 'var(--font-display)',
              borderBottomColor: activeTab === 'machines' ? 'oklch(0.68 0.18 42)' : 'transparent',
              color: activeTab === 'machines' ? 'oklch(0.68 0.18 42)' : 'oklch(0.45 0.02 265)',
            }}
          >
            <Package size={16} />
            {t('brand.wholeMachines')} ({brand.machines.length})
          </button>
          <button
            onClick={() => setActiveTab('parts')}
            className="flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all border-b-2"
            style={{
              fontFamily: 'var(--font-display)',
              borderBottomColor: activeTab === 'parts' ? 'oklch(0.68 0.18 42)' : 'transparent',
              color: activeTab === 'parts' ? 'oklch(0.68 0.18 42)' : 'oklch(0.45 0.02 265)',
            }}
          >
            <Wrench size={16} />
            {t('brand.spareParts')} ({brand.spareParts.length})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1" style={{ background: 'oklch(0.97 0.005 90)' }}>
        <div className="container py-10">

          {/* Machines Tab */}
          {activeTab === 'machines' && (
            <div>
              <div className="mb-6">
                <h2
                  className="text-2xl font-bold uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                >
                  {brand.name} — {t('brand.wholeMachines')}
                </h2>
                <p className="text-sm mt-1" style={{ color: 'oklch(0.5 0.02 265)' }}>
                  {t('brand.completeAvailable')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brand.machines.map((machine, idx) => (
                  <div
                    key={machine.id}
                    className="product-card animate-fade-in-up bg-white overflow-hidden"
                    style={{ animationDelay: `${idx * 0.08}s` }}
                  >
                    {/* Machine image */}
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={machine.image}
                        alt={machine.model}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/hero-machinery-nbwEngDndkYEV7YkbvbRje.webp';
                        }}
                      />
                      {/* Model badge */}
                      <div
                        className="text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}
                      >
                        {brand.id === 'shantui' ? getTranslatedShantuiMachineName(machine.model, language) : brand.id === 'sany' ? getTranslatedSanyMachineType(machine.name, language) : machine.name}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3
                        className="font-bold uppercase tracking-wide text-base mb-1"
                        style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                      >
                        {brand.id === 'shantui' ? getTranslatedShantuiMachineName(machine.model, language) : brand.id === 'sany' ? getTranslatedSanyMachineTitle(`SANY ${machine.model}`, language) : brand.id === 'xcmg' ? getTranslatedXCMGMachineType(machine.name, language) : `${brand.name} ${machine.model}`}
                      </h3>
                      <p className="text-sm font-semibold mb-2" style={{ color: 'oklch(0.45 0.02 265)' }}>
                        {brand.id === 'caterpillar' ? getTranslatedCATMachineType(machine.name, language) : brand.id === 'shantui' ? getTranslatedShantuiMachineType(machine.name, language) : brand.id === 'sany' ? getTranslatedSanyMachineType(machine.name, language) : brand.id === 'xcmg' ? getTranslatedXCMGMachineType(machine.name, language) : machine.name}
                      </p>

                      {/* Specs */}
                      <div
                        className="flex items-center gap-1.5 mb-3 px-2 py-1.5 text-xs font-mono"
                        style={{
                          background: 'oklch(0.97 0.005 90)',
                          color: 'oklch(0.35 0.02 265)',
                          fontFamily: 'var(--font-mono)',
                          borderLeft: '2px solid oklch(0.68 0.18 42)',
                        }}
                      >
                        {brand.id === 'caterpillar' ? getTranslatedCATMachineSpecs(machine.model, language) : brand.id === 'shantui' ? getTranslatedShantuiMachineSpecs(machine.model, language) : brand.id === 'sany' ? getTranslatedSanyMachineSpecs(machine.model, language) : brand.id === 'xcmg' ? getTranslatedXCMGMachineSpecs(machine.specs, language) : machine.specs}
                      </div>

                      {brand.id === 'caterpillar' || brand.id === 'shantui' || brand.id === 'sany' || brand.id === 'xcmg' ? (
                        <p className="text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.45 0.02 265)' }}>
                          {brand.id === 'caterpillar' ? getTranslatedCATMachineDescription(machine.description, language) : brand.id === 'shantui' ? getTranslatedShantuiMachineDescription(machine.model, language) : brand.id === 'sany' ? getTranslatedSanyMachineDescription(machine.model, language) : brand.id === 'xcmg' ? getTranslatedXCMGMachineDescription(machine.description, language) : null}
                        </p>
                      ) : (
                        <MachineDescriptionTranslator
                          description={translateMachineDescriptionPartial(machine.description)}
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: 'oklch(0.45 0.02 265)' }}
                        />
                      )}

                      <button
                        onClick={() => openInquiry({ model: machine.model, name: machine.name, specs: machine.specs, type: 'machine' })}
                        className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:opacity-90"
                        style={{ background: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}
                      >
                        <MessageSquare size={12} />
                        {t('brand.quickInquiry')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Spare Parts Tab */}
          {activeTab === 'parts' && (
            <div>
              <div className="mb-6">
                <h2
                  className="text-2xl font-bold uppercase tracking-wide mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                >
                  {brand.name} — {t('brand.spareParts')}
                </h2>
                <p className="text-sm mb-4" style={{ color: 'oklch(0.5 0.02 265)' }}>
                  {t('brand.wearParts')}
                </p>
              </div>

              {/* Enhanced Category Filter */}
              <CategoryFilter
                parts={brand.spareParts}
                selectedCategories={selectedCategories}
                onCategoryChange={setSelectedCategories}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredParts.map((part, idx) => (
                  <div
                    key={part.id}
                    id={`part-${part.id}`}
                    className={`product-card animate-fade-in-up overflow-hidden ${
                      highlightedPartId === part.id
                        ? 'bg-orange-50 ring-2 ring-orange-400'
                        : 'bg-white'
                    }`}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {/* Part image */}
                    <div className="relative h-40 overflow-hidden bg-gray-50 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => { setSelectedPart(part); setPartDetailOpen(true); }}>
                      <img
                        src={part.image}
                        alt={getTranslatedSparePartName(part.name, language)}
                        className="w-full h-full object-cover"
                      />
                      {/* Category badge */}
                      <div
                        className="absolute top-2 right-2 px-2 py-0.5 text-white text-xs font-bold uppercase tracking-wider"
                        style={{ background: 'oklch(0.18 0.04 265 / 0.85)', fontFamily: 'var(--font-display)', fontSize: '0.65rem' }}
                      >
                        {brand.id === 'shantui' ? getTranslatedShantuiSparePartCategory(part.category, language) : brand.id === 'sany' ? getTranslatedSanySparePartCategory(part.category, language) : brand.id === 'xcmg' ? getTranslatedXCMGSparePartCategory(part.category, language) : translatePartCategory(part.category)}
                      </div>
                    </div>

                    <div className="p-4">
                      {/* Part number */}
                      <div className="flex items-center gap-1.5 mb-2">
                        <Tag size={11} style={{ color: 'oklch(0.68 0.18 42)' }} />
                        <span
                          className="text-xs font-bold tracking-wider"
                          style={{ fontFamily: 'var(--font-mono)', color: 'oklch(0.68 0.18 42)' }}
                        >
                          {part.partNumber}
                        </span>
                      </div>

                      <h3
                        className="font-bold uppercase tracking-wide text-sm mb-1"
                        style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                      >
                        {getTranslatedSparePartName(part.name, language)}
                      </h3>

                      <p className="text-xs leading-relaxed mb-3" style={{ color: 'oklch(0.5 0.02 265)' }}>
                        {brand.id === 'shantui' ? getTranslatedShantuiSparePartDescription(part.description, language) : brand.id === 'sany' ? getTranslatedSanySparePartDescription(part.description, language) : brand.id === 'xcmg' ? getTranslatedXCMGSparePartDescription(part.description, language) : getTranslatedSparePartDescription(part.description, language)}
                      </p>

                      <div className="flex gap-2">
                        <button
                          onClick={() => { setSelectedPart(part); setPartDetailOpen(true); }}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold uppercase tracking-wider transition-all hover:opacity-90"
                          style={{
                            background: brand.color,
                            color: 'white',
                            fontFamily: 'var(--font-display)',
                          }}
                        >
                          <Wrench size={11} />
                          {language === 'zh' ? '查看详情' : language === 'en' ? 'View Details' : language === 'es' ? 'Ver detalles' : language === 'ar' ? 'عرض التفاصيل' : language === 'ru' ? 'Просмотр деталей' : language === 'fr' ? 'Voir les détails' : language === 'pt' ? 'Ver detalhes' : 'Visualizza dettagli'}
                        </button>
                        <button
                          onClick={() => openInquiry({ model: part.partNumber, name: part.name, type: 'spare-part' })}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold uppercase tracking-wider transition-all hover:opacity-90"
                          style={{
                            background: 'oklch(0.18 0.04 265)',
                            color: 'white',
                            fontFamily: 'var(--font-display)',
                          }}
                        >
                          <MessageSquare size={11} />
                          {language === 'zh' ? '询价' : language === 'en' ? 'Inquiry' : language === 'es' ? 'Consulta' : language === 'ar' ? 'استفسار' : language === 'ru' ? 'Запрос' : language === 'fr' ? 'Demande' : language === 'pt' ? 'Consulta' : 'Richiesta'}
                        </button>
                        <ComparisonButton part={part} brandColor={brand.color} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div
            className="mt-12 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: 'oklch(0.18 0.04 265)' }}
          >
            <div>
              <h3
                className="text-white font-bold uppercase tracking-wide text-xl mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Need {brand.name} Parts or Machines?
              </h3>
              <p className="text-sm" style={{ color: 'oklch(0.65 0.02 265)' }}>
                Contact us for competitive pricing, availability, and shipping quotes.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:info@globalmachinery.com"
                className="flex items-center gap-2 px-6 py-3 text-white font-bold uppercase tracking-wider transition-all hover:opacity-90"
                style={{ background: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)', fontSize: '0.85rem' }}
              >
                <Mail size={14} />
                Email Us
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-wider transition-all"
                style={{
                  border: '1px solid oklch(0.45 0.02 265)',
                  color: 'oklch(0.82 0.01 265)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                }}
              >
                <Phone size={14} />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Inquiry Dialog */}
      {selectedProduct && (
        <QuickInquiryDialog
          isOpen={inquiryDialogOpen}
          onClose={() => setInquiryDialogOpen(false)}
          productInfo={selectedProduct}
        />
      )}
      <SparePartDetailModal
        part={selectedPart}
        isOpen={partDetailOpen}
        onClose={() => handlePartDetailClose()}
        onInquiry={(part) => {
          setSelectedProduct({ model: part.partNumber, name: part.name, type: 'spare-part' });
          setInquiryDialogOpen(true);
        }}
        brandName={brand.name}
        brandColor={brand.color}
      />
      <Footer />
    </div>
  );
}
