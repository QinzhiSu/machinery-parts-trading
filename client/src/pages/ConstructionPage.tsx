// Design: Industrial Minimalism - Construction machinery category page
import { Link } from 'wouter';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getBrandsByCategory } from '@/data/products';

const HERO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/hero-machinery-nbwEngDndkYEV7YkbvbRje.webp';
const constructionBrands = getBrandsByCategory('construction');

export default function ConstructionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
        <img src={HERO_IMG} alt="Construction Machinery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, oklch(0.1 0.04 265 / 0.95) 0%, oklch(0.1 0.04 265 / 0.5) 100%)' }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: 'oklch(0.68 0.18 42)' }} />
        <div className="container relative z-10 pb-8">
          <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: 'oklch(0.6 0.02 265)', fontFamily: 'var(--font-display)' }}>
            <Link href="/" className="hover:text-orange-400 transition-colors uppercase tracking-wider">Home</Link>
            <ChevronRight size={12} />
            <span className="uppercase tracking-wider" style={{ color: 'oklch(0.68 0.18 42)' }}>Construction Machinery</span>
          </div>
          <h1
            className="text-white uppercase leading-none"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}
          >
            Construction <span style={{ color: 'oklch(0.68 0.18 42)' }}>Machinery</span>
          </h1>
          <p className="text-sm mt-2 max-w-xl" style={{ color: 'oklch(0.75 0.01 265)' }}>
            Excavators, bulldozers, wheel loaders, motor graders, cranes and more — whole machines and spare parts.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="flex-1 py-12" style={{ background: 'oklch(0.97 0.005 90)' }}>
        <div className="container">
          <div className="mb-8">
            <h2 className="section-heading" style={{ color: 'oklch(0.18 0.04 265)' }}>
              Our Brands
            </h2>
            <p className="mt-3 text-sm" style={{ color: 'oklch(0.5 0.02 265)' }}>
              Click on any brand to view complete machine models and spare parts catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionBrands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brand/${brand.id}`}
                className="group bg-white border border-border hover:border-orange-400 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Brand header */}
                <div
                  className="p-6 flex items-center gap-4"
                  style={{ background: 'oklch(0.18 0.04 265)' }}
                >
                  <div
                    className="w-14 h-14 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs"
                    style={{ background: brand.color, fontFamily: 'var(--font-display)', letterSpacing: '0.05em', fontSize: '0.65rem' }}
                  >
                    {brand.logo}
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold uppercase tracking-wide text-lg group-hover:text-orange-400 transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {brand.name}
                    </h3>
                    <div className="text-xs" style={{ color: 'oklch(0.6 0.02 265)' }}>
                      {brand.country} · {brand.fullName}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 divide-x divide-border border-b border-border">
                  <div className="p-4 text-center">
                    <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.68 0.18 42)' }}>
                      {brand.machines.length}
                    </div>
                    <div className="text-xs uppercase tracking-wider mt-0.5" style={{ color: 'oklch(0.5 0.02 265)', fontFamily: 'var(--font-display)' }}>
                      Machine Models
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.68 0.18 42)' }}>
                      {brand.spareParts.length}
                    </div>
                    <div className="text-xs uppercase tracking-wider mt-0.5" style={{ color: 'oklch(0.5 0.02 265)', fontFamily: 'var(--font-display)' }}>
                      Spare Parts
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="p-5">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.45 0.02 265)' }}>
                    {brand.description.substring(0, 120)}...
                  </p>

                  {/* Machine models preview */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {brand.machines.slice(0, 4).map(m => (
                      <span
                        key={m.id}
                        className="text-xs px-2 py-0.5 font-mono"
                        style={{
                          background: 'oklch(0.97 0.005 90)',
                          color: 'oklch(0.35 0.02 265)',
                          fontFamily: 'var(--font-mono)',
                          border: '1px solid oklch(0.88 0.008 90)',
                        }}
                      >
                        {m.model}
                      </span>
                    ))}
                    {brand.machines.length > 4 && (
                      <span className="text-xs px-2 py-0.5" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
                        +{brand.machines.length - 4} more
                      </span>
                    )}
                  </div>

                  <div
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all"
                    style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}
                  >
                    View Full Catalog <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
