// Design: Industrial Minimalism
// Hero: Full-width machinery image with dark overlay + bold Barlow Condensed headline
// Layout: Asymmetric sections with orange diagonal accents
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Globe, Package, Wrench, Shield, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { brands } from '@/data/products';
import { useAuth } from '@/_core/hooks/useAuth';

const constructionBrands = brands.filter(b => b.category === 'construction');
const truckBrands = brands.filter(b => b.category === 'truck');
const engineBrands = brands.filter(b => b.category === 'engine');

const HERO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/hero-machinery-nbwEngDndkYEV7YkbvbRje.webp';
const TRUCK_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp';
const PARTS_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/spare-parts-banner-MPvqe3AJjXeWtJpc8XFEsb.webp';

const stats = [
  { value: '13+', label: 'Global Brands' },
  { value: '500+', label: 'Machine Models' },
  { value: '2000+', label: 'Spare Parts' },
  { value: '50+', label: 'Countries Served' },
];

const features = [
  { icon: Shield, title: 'OEM Quality Parts', desc: 'Genuine and high-quality aftermarket parts with full traceability and warranty.' },
  { icon: Globe, title: 'Global Export', desc: 'Shipping to Africa, Middle East, Southeast Asia, South America, and Central Asia.' },
  { icon: Package, title: 'Complete Inventory', desc: 'Comprehensive stock of whole machines, components, and wear parts.' },
  { icon: Wrench, title: 'Technical Support', desc: 'Expert technical assistance for part identification and equipment selection.' },
];

export default function Home() {
  // The useAuth hook provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Construction Machinery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay with navy tint */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, oklch(0.1 0.04 265 / 0.92) 0%, oklch(0.1 0.04 265 / 0.75) 50%, oklch(0.1 0.04 265 / 0.4) 100%)' }}
        />

        {/* Orange left accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ background: 'oklch(0.68 0.18 42)' }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-widest"
              style={{
                background: 'oklch(0.68 0.18 42 / 0.2)',
                border: '1px solid oklch(0.68 0.18 42 / 0.5)',
                color: 'oklch(0.68 0.18 42)',
                fontFamily: 'var(--font-display)',
              }}
            >
              <Globe size={12} />
              Global Machinery & Parts Trading
            </div>

            <h1
              className="text-white mb-4 leading-none uppercase"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 800,
                letterSpacing: '0.02em',
                textShadow: '0 2px 20px oklch(0 0 0 / 0.5)',
              }}
            >
              Construction Machinery
              <br />
              <span style={{ color: 'oklch(0.68 0.18 42)' }}>& Spare Parts</span>
              <br />
              Worldwide
            </h1>

            <p
              className="text-lg mb-8 max-w-xl leading-relaxed"
              style={{ color: 'oklch(0.82 0.01 265)', fontFamily: 'var(--font-body)' }}
            >
              Your trusted partner for CAT, Komatsu, XCMG, Shantui, SANY, Isuzu, Sinotruk, Toyota, Cummins, Weichai and more — whole machines, engines, and wear parts exported globally.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/construction"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-bold uppercase tracking-wider transition-all duration-200 hover:opacity-90 hover:gap-3"
                style={{
                  background: 'oklch(0.68 0.18 42)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.1em',
                }}
              >
                Browse Machinery <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-bold uppercase tracking-wider transition-all duration-200"
                style={{
                  border: '2px solid oklch(0.82 0.01 265 / 0.5)',
                  color: 'oklch(0.9 0.01 265)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.1em',
                }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ background: 'oklch(0.68 0.18 42)' }}
        >
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-orange-300">
              {stats.map((stat) => (
                <div key={stat.label} className="py-3 px-4 text-center">
                  <div
                    className="text-2xl font-bold text-white leading-none"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/80 mt-0.5 uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16" style={{ background: 'oklch(0.97 0.005 90)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 bg-white border-l-4 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderLeftColor: 'oklch(0.68 0.18 42)' }}
              >
                <f.icon size={28} className="mb-3" style={{ color: 'oklch(0.68 0.18 42)' }} />
                <h3
                  className="font-bold uppercase tracking-wide mb-2 text-base"
                  style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.45 0.02 265)' }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Machinery Brands */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
                Category 01
              </div>
              <h2 className="section-heading" style={{ color: 'oklch(0.18 0.04 265)' }}>
                Construction Machinery
              </h2>
              <p className="mt-3 text-sm max-w-lg" style={{ color: 'oklch(0.45 0.02 265)' }}>
                Excavators, bulldozers, wheel loaders, motor graders, cranes and more from world-leading brands.
              </p>
            </div>
            <Link
              href="/construction"
              className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:gap-3"
              style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {constructionBrands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brand/${brand.id}`}
                className="group p-5 bg-white border border-border hover:border-orange-400 hover:shadow-md transition-all duration-200 text-center"
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 flex items-center justify-center text-white text-xs font-bold"
                  style={{
                    background: brand.color,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.05em',
                    fontSize: '0.65rem',
                  }}
                >
                  {brand.logo}
                </div>
                <div
                  className="font-bold text-sm uppercase tracking-wide group-hover:text-orange-600 transition-colors"
                  style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                >
                  {brand.name}
                </div>
                <div className="text-xs mt-1" style={{ color: 'oklch(0.55 0.02 265)' }}>
                  {brand.country}
                </div>
                <div className="text-xs mt-1 font-mono-industrial" style={{ color: 'oklch(0.68 0.18 42)' }}>
                  {brand.machines.length} models
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trucks Banner */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={TRUCK_IMG}
          alt="Heavy Trucks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, oklch(0.1 0.04 265 / 0.95) 0%, oklch(0.1 0.04 265 / 0.7) 60%, transparent 100%)' }}
        />
        <div className="container relative z-10">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
              Category 02
            </div>
            <h2
              className="text-white uppercase mb-4 leading-none"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}
            >
              Heavy Trucks &<br />
              <span style={{ color: 'oklch(0.68 0.18 42)' }}>Commercial Vehicles</span>
            </h2>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: 'oklch(0.75 0.01 265)' }}>
              Isuzu, Shacman, Sinotruk HOWO, Toyota Land Cruiser & Hilux — complete trucks and spare parts for construction, mining, and logistics.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {truckBrands.map(b => (
                <Link
                  key={b.id}
                  href={`/brand/${b.id}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-all hover:bg-white/10"
                  style={{
                    border: '1px solid oklch(0.82 0.01 265 / 0.3)',
                    color: 'oklch(0.9 0.01 265)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.8rem',
                  }}
                >
                  <ChevronRight size={14} style={{ color: 'oklch(0.68 0.18 42)' }} />
                  {b.name}
                </Link>
              ))}
            </div>
            <Link
              href="/trucks"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold uppercase tracking-wider transition-all hover:opacity-90"
              style={{ background: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)', fontSize: '0.85rem' }}
            >
              View All Trucks <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Engines Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
                Category 03
              </div>
              <h2 className="section-heading" style={{ color: 'oklch(0.18 0.04 265)' }}>
                Diesel Engines
              </h2>
              <p className="mt-3 text-sm max-w-lg" style={{ color: 'oklch(0.45 0.02 265)' }}>
                Cummins and Weichai diesel engines — complete engines and spare parts for construction, mining, and transportation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineBrands.map(brand => (
              <Link
                key={brand.id}
                href={`/brand/${brand.id}`}
                className="group flex items-center gap-6 p-6 border border-border hover:border-orange-400 hover:shadow-md transition-all duration-200"
              >
                <div
                  className="w-16 h-16 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs"
                  style={{ background: brand.color, fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
                >
                  {brand.logo}
                </div>
                <div className="flex-1">
                  <h3
                    className="font-bold uppercase tracking-wide text-lg group-hover:text-orange-600 transition-colors"
                    style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                  >
                    {brand.fullName}
                  </h3>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: 'oklch(0.45 0.02 265)' }}>
                    {brand.description.substring(0, 100)}...
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs font-mono-industrial" style={{ color: 'oklch(0.68 0.18 42)' }}>
                      {brand.machines.length} engine models
                    </span>
                    <span className="text-xs font-mono-industrial" style={{ color: 'oklch(0.68 0.18 42)' }}>
                      {brand.spareParts.length} spare parts
                    </span>
                  </div>
                </div>
                <ArrowRight size={20} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: 'oklch(0.68 0.18 42)' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Spare Parts Banner */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={PARTS_IMG}
          alt="Spare Parts"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'oklch(0.1 0.04 265 / 0.85)' }}
        />
        <div className="container relative z-10 text-center">
          <div className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
            Wear Parts & Components
          </div>
          <h2
            className="text-white uppercase mb-4 leading-none"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}
          >
            2000+ Spare Parts
            <br />
            <span style={{ color: 'oklch(0.68 0.18 42)' }}>Ready to Ship</span>
          </h2>
          <p className="mb-8 text-sm max-w-xl mx-auto leading-relaxed" style={{ color: 'oklch(0.75 0.01 265)' }}>
            Filters, undercarriage parts, ground engaging tools, hydraulic components, engine parts, and more — all with OEM part numbers for easy identification.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Filters', 'Undercarriage', 'Hydraulics', 'Engine Parts', 'Brake System', 'Fuel System', 'Ground Engaging Tools', 'Seals & Gaskets'].map(cat => (
              <span
                key={cat}
                className="px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{
                  border: '1px solid oklch(0.68 0.18 42 / 0.5)',
                  color: 'oklch(0.82 0.01 265)',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {cat}
              </span>
            ))}
          </div>
          <Link
            href="/construction"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-bold uppercase tracking-wider transition-all hover:opacity-90"
            style={{ background: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)', fontSize: '0.9rem' }}
          >
            Browse Parts Catalog <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" style={{ background: 'oklch(0.97 0.005 90)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
                Why Choose Us
              </div>
              <h2 className="section-heading mb-6" style={{ color: 'oklch(0.18 0.04 265)' }}>
                Your Trusted<br />Global Partner
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'oklch(0.45 0.02 265)' }}>
                With years of experience in construction machinery and truck parts export, we provide reliable sourcing, competitive pricing, and professional service to customers worldwide.
              </p>
              <ul className="space-y-3">
                {[
                  'Genuine OEM and high-quality aftermarket parts',
                  'Competitive factory-direct pricing',
                  'Fast delivery with professional packing',
                  'Complete documentation: CO, invoice, packing list',
                  'Technical support for part identification',
                  'Long-term partnership with major manufacturers',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'oklch(0.35 0.02 265)' }}>
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'oklch(0.68 0.18 42)' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 text-white font-bold uppercase tracking-wider transition-all hover:opacity-90"
                style={{ background: 'oklch(0.18 0.04 265)', fontFamily: 'var(--font-display)', fontSize: '0.9rem' }}
              >
                Contact Us Now <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '10+', label: 'Years Experience', sub: 'In machinery export' },
                { num: '50+', label: 'Countries', sub: 'Global reach' },
                { num: '500+', label: 'Machine Models', sub: 'In our catalog' },
                { num: '24/7', label: 'Support', sub: 'Always available' },
              ].map(item => (
                <div
                  key={item.label}
                  className="p-6 text-center"
                  style={{ background: 'oklch(0.18 0.04 265)' }}
                >
                  <div
                    className="text-4xl font-bold mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.68 0.18 42)' }}
                  >
                    {item.num}
                  </div>
                  <div
                    className="text-sm font-bold uppercase tracking-wide text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.label}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'oklch(0.6 0.02 265)' }}>
                    {item.sub}
                  </div>
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
