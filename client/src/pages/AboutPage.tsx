// Design: Industrial Minimalism - About page
import { Link } from 'wouter';
import { ChevronRight, CheckCircle, Globe, Award, Users, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HERO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/hero-machinery-nbwEngDndkYEV7YkbvbRje.webp';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-64 md:h-72 flex items-end overflow-hidden">
        <img src={HERO_IMG} alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, oklch(0.1 0.04 265 / 0.95) 0%, oklch(0.1 0.04 265 / 0.5) 100%)' }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: 'oklch(0.68 0.18 42)' }} />
        <div className="container relative z-10 pb-8">
          <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: 'oklch(0.6 0.02 265)', fontFamily: 'var(--font-display)' }}>
            <Link href="/" className="hover:text-orange-400 transition-colors uppercase tracking-wider">Home</Link>
            <ChevronRight size={12} />
            <span className="uppercase tracking-wider" style={{ color: 'oklch(0.68 0.18 42)' }}>About Us</span>
          </div>
          <h1
            className="text-white uppercase leading-none"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}
          >
            About <span style={{ color: 'oklch(0.68 0.18 42)' }}>Us</span>
          </h1>
        </div>
      </section>

      <section className="flex-1 py-12" style={{ background: 'oklch(0.97 0.005 90)' }}>
        <div className="container">

          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
                Who We Are
              </div>
              <h2 className="section-heading mb-6" style={{ color: 'oklch(0.18 0.04 265)' }}>
                Global Machinery<br />& Parts Trading
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.4 0.02 265)' }}>
                We are a professional exporter specializing in construction machinery, heavy trucks, and spare parts. With over a decade of experience in the international trade of heavy equipment, we have built strong partnerships with leading manufacturers in China, Japan, and the USA.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.4 0.02 265)' }}>
                Our product portfolio covers the full spectrum of construction and transportation needs — from CAT and Komatsu excavators to Sinotruk HOWO dump trucks, from Cummins engines to Weichai power units. We supply both complete machines and an extensive range of wear parts and components.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.4 0.02 265)' }}>
                Our customers span over 50 countries across Africa, the Middle East, Southeast Asia, South America, and Central Asia. We are committed to providing competitive pricing, reliable quality, and professional service to support your business growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, title: '50+ Countries', sub: 'Global export reach across 5 continents' },
                { icon: Award, title: 'OEM Quality', sub: 'Genuine and certified aftermarket parts' },
                { icon: Users, title: '10+ Years', sub: 'Experience in machinery export' },
                { icon: TrendingUp, title: '500+ Models', sub: 'Comprehensive product catalog' },
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

          {/* Our Brands */}
          <div className="mb-16">
            <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
              Our Portfolio
            </div>
            <h2 className="section-heading mb-6" style={{ color: 'oklch(0.18 0.04 265)' }}>
              Brands We Carry
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { name: 'Caterpillar', country: 'USA', id: 'caterpillar' },
                { name: 'Komatsu', country: 'Japan', id: 'komatsu' },
                { name: 'XCMG', country: 'China', id: 'xcmg' },
                { name: 'Shantui', country: 'China', id: 'shantui' },
                { name: 'LiuGong', country: 'China', id: 'liugong' },
                { name: 'SANY', country: 'China', id: 'sany' },
                { name: 'Isuzu', country: 'Japan', id: 'isuzu' },
                { name: 'Shacman', country: 'China', id: 'shacman' },
                { name: 'Sinotruk', country: 'China', id: 'sinotruck' },
                { name: 'Toyota', country: 'Japan', id: 'toyota' },
                { name: 'Cummins', country: 'USA', id: 'cummins' },
                { name: 'Weichai', country: 'China', id: 'weichai' },
              ].map(brand => (
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
                    {brand.country}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="p-8 bg-white border-l-4" style={{ borderLeftColor: 'oklch(0.68 0.18 42)' }}>
            <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
              Our Advantages
            </div>
            <h2
              className="text-2xl font-bold uppercase tracking-wide mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
            >
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Direct factory partnerships for competitive pricing',
                'Genuine OEM and certified aftermarket parts',
                'Professional export documentation (CO, invoice, packing list)',
                'Flexible payment terms: T/T, L/C, Western Union',
                'Professional packing for sea freight and air freight',
                'Technical support for part number identification',
                'Fast response time — reply within 24 hours',
                'Long-term relationship focus with dedicated account service',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 text-sm" style={{ color: 'oklch(0.35 0.02 265)' }}>
                  <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'oklch(0.68 0.18 42)' }} />
                  {item}
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
