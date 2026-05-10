// Design: Industrial Minimalism
// Brand page with machines + spare parts tabs, orange accent cards
import { useState } from 'react';
import { useParams, Link } from 'wouter';
import { ArrowLeft, ChevronRight, Package, Wrench, Tag, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getBrandById } from '@/data/products';

const PARTS_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/spare-parts-banner-MPvqe3AJjXeWtJpc8XFEsb.webp';

export default function BrandPage() {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = getBrandById(brandId || '');
  const [activeTab, setActiveTab] = useState<'machines' | 'parts'>('machines');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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

  const categories = ['All', ...Array.from(new Set(brand.spareParts.map(p => p.category)))];
  const filteredParts = selectedCategory === 'All'
    ? brand.spareParts
    : brand.spareParts.filter(p => p.category === selectedCategory);

  const categoryPath = brand.category === 'construction' ? '/construction' : '/trucks';
  const categoryLabel = brand.category === 'construction' ? 'Construction Machinery' : 'Trucks & Engines';

  return (
    <div className="min-h-screen flex flex-col">
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: 'oklch(0.6 0.02 265)', fontFamily: 'var(--font-display)' }}>
            <Link href="/" className="hover:text-orange-400 transition-colors uppercase tracking-wider">Home</Link>
            <ChevronRight size={12} />
            <Link href={categoryPath} className="hover:text-orange-400 transition-colors uppercase tracking-wider">{categoryLabel}</Link>
            <ChevronRight size={12} />
            <span className="uppercase tracking-wider" style={{ color: 'oklch(0.68 0.18 42)' }}>{brand.name}</span>
          </div>

          <div className="flex items-start gap-6">
            {/* Brand logo box */}
            <div
              className="w-20 h-20 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
              style={{
                background: brand.color,
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.05em',
                fontSize: '0.7rem',
              }}
            >
              {brand.logo}
            </div>

            <div>
              <div
                className="text-xs uppercase tracking-widest mb-1 font-semibold"
                style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}
              >
                {brand.country} · {brand.category === 'construction' ? 'Construction Machinery' : brand.category === 'truck' ? 'Commercial Trucks' : 'Diesel Engines'}
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
                {brand.description}
              </p>
              <div className="flex items-center gap-6 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.68 0.18 42)' }}>
                    {brand.machines.length}
                  </div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: 'oklch(0.6 0.02 265)', fontFamily: 'var(--font-display)' }}>
                    Machine Models
                  </div>
                </div>
                <div className="w-px h-10" style={{ background: 'oklch(0.28 0.04 265)' }} />
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.68 0.18 42)' }}>
                    {brand.spareParts.length}
                  </div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: 'oklch(0.6 0.02 265)', fontFamily: 'var(--font-display)' }}>
                    Spare Parts
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
            Whole Machines ({brand.machines.length})
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
            Spare Parts ({brand.spareParts.length})
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
                  {brand.name} — Whole Machines
                </h2>
                <p className="text-sm mt-1" style={{ color: 'oklch(0.5 0.02 265)' }}>
                  Complete machines available for export. Contact us for pricing and availability.
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
                        className="absolute top-3 left-3 px-2 py-1 text-white text-xs font-bold uppercase tracking-wider"
                        style={{ background: brand.color, fontFamily: 'var(--font-display)' }}
                      >
                        {machine.model}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3
                        className="font-bold uppercase tracking-wide text-base mb-1"
                        style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                      >
                        {brand.name} {machine.model}
                      </h3>
                      <p className="text-sm font-semibold mb-2" style={{ color: 'oklch(0.45 0.02 265)' }}>
                        {machine.name}
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
                        {machine.specs}
                      </div>

                      <p className="text-xs leading-relaxed mb-4" style={{ color: 'oklch(0.5 0.02 265)' }}>
                        {machine.description}
                      </p>

                      <a
                        href={`mailto:info@globalmachinery.com?subject=Inquiry: ${brand.name} ${machine.model}`}
                        className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:opacity-90"
                        style={{ background: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}
                      >
                        <Mail size={12} />
                        Inquire Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Spare Parts Tab */}
          {activeTab === 'parts' && (
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2
                    className="text-2xl font-bold uppercase tracking-wide"
                    style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                  >
                    {brand.name} — Spare Parts
                  </h2>
                  <p className="text-sm mt-1" style={{ color: 'oklch(0.5 0.02 265)' }}>
                    Wear parts and components with OEM part numbers. Contact us for pricing.
                  </p>
                </div>

                {/* Category filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all"
                      style={{
                        fontFamily: 'var(--font-display)',
                        background: selectedCategory === cat ? 'oklch(0.68 0.18 42)' : 'white',
                        color: selectedCategory === cat ? 'white' : 'oklch(0.45 0.02 265)',
                        border: `1px solid ${selectedCategory === cat ? 'oklch(0.68 0.18 42)' : 'oklch(0.88 0.008 90)'}`,
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredParts.map((part, idx) => (
                  <div
                    key={part.id}
                    className="product-card animate-fade-in-up bg-white overflow-hidden"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {/* Part image */}
                    <div className="relative h-40 overflow-hidden bg-gray-50">
                      <img
                        src={PARTS_IMG}
                        alt={part.name}
                        className="w-full h-full object-cover opacity-70"
                      />
                      {/* Category badge */}
                      <div
                        className="absolute top-2 right-2 px-2 py-0.5 text-white text-xs font-bold uppercase tracking-wider"
                        style={{ background: 'oklch(0.18 0.04 265 / 0.85)', fontFamily: 'var(--font-display)', fontSize: '0.65rem' }}
                      >
                        {part.category}
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
                        {part.name}
                      </h3>

                      <p className="text-xs leading-relaxed mb-3" style={{ color: 'oklch(0.5 0.02 265)' }}>
                        {part.description}
                      </p>

                      <a
                        href={`mailto:info@globalmachinery.com?subject=Part Inquiry: ${part.partNumber} - ${part.name}`}
                        className="flex items-center justify-center gap-1.5 w-full py-2 text-xs font-bold uppercase tracking-wider transition-all hover:opacity-90"
                        style={{
                          background: 'oklch(0.18 0.04 265)',
                          color: 'white',
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        <Phone size={11} />
                        Get Price
                      </a>
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

      <Footer />
    </div>
  );
}
