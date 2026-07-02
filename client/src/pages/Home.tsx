/**
 * VXZO Home Page - Elegant Minimalist Design
 * Premium, clean, and sophisticated
 */

import { Link } from 'wouter';
import { ArrowRight, Globe, Package, Wrench, Shield, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { brands } from '@/data/products';
import { useAuth } from '@/_core/hooks/useAuth';

const constructionBrands = brands.filter(b => b.category === 'construction');
const truckBrands = brands.filter(b => b.category === 'truck');

const HERO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/hero-machinery-nbwEngDndkYEV7YkbvbRje.webp';

const stats = [
  { value: '13+', label: 'Global Brands', icon: '🌍' },
  { value: '500+', label: 'Machine Models', icon: '⚙️' },
  { value: '2000+', label: 'Spare Parts', icon: '📦' },
  { value: '50+', label: 'Countries', icon: '🚀' },
];

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    desc: 'Genuine OEM and high-quality aftermarket parts with complete warranty and traceability.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'Professional export to Africa, Middle East, Central Asia, South America, and Russia.',
  },
  {
    icon: Package,
    title: 'Complete Inventory',
    desc: 'Comprehensive selection of machinery, engines, and high-frequency replacement parts.',
  },
  {
    icon: Wrench,
    title: 'Expert Support',
    desc: 'Professional technical consultation for equipment selection and part identification.',
  },
];

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section - Elegant Minimal */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src={HERO_IMG}
          alt="Global Machinery Trading"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Elegant Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(26, 26, 26, 0.85) 0%, rgba(26, 26, 26, 0.7) 50%, rgba(26, 26, 26, 0.4) 100%)',
          }}
        />

        {/* Content */}
        <div className="container relative z-10 max-w-5xl">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                Global Machinery Trading
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premium Machinery
              <br />
              <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #ffffff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Worldwide
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              Professional exporter of construction machinery, heavy trucks, and spare parts to Africa, Middle East, Central Asia, South America, and Russia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/construction"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-charcoal font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Browse Machinery <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Elegant Grid */}
      <section className="py-32 md:py-40 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Premium Cards */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Why Choose VXZO</h2>
            <p className="text-lg text-gray-600">
              We combine quality, expertise, and professional service to deliver the best machinery and parts solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <feature.icon size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Machinery Section */}
      <section className="py-32 md:py-40 bg-gray-50">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Construction Machinery</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Excavators, wheel loaders, bulldozers, and more from world-leading brands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {constructionBrands.slice(0, 6).map((brand) => (
              <Link
                key={brand.id}
                href={`/brand/${brand.id}`}
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-white text-xs font-bold rounded-lg"
                  style={{ background: brand.color }}
                >
                  {brand.logo}
                </div>
                <div className="font-semibold text-charcoal text-sm group-hover:text-gold transition-colors">
                  {brand.name}
                </div>
                <div className="text-xs text-gray-500 mt-2">{brand.country}</div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/construction"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
            >
              View All Brands <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Heavy Trucks Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Heavy Trucks & Engines</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Commercial vehicles and industrial engines for construction, mining, and logistics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {truckBrands.slice(0, 6).map((brand) => (
              <Link
                key={brand.id}
                href={`/brand/${brand.id}`}
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-white text-xs font-bold rounded-lg"
                  style={{ background: brand.color }}
                >
                  {brand.logo}
                </div>
                <div className="font-semibold text-charcoal text-sm group-hover:text-gold transition-colors">
                  {brand.name}
                </div>
                <div className="text-xs text-gray-500 mt-2">{brand.country}</div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/trucks"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
            >
              View All Trucks <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8">
            Contact our team today for a professional quote. We respond quickly via WhatsApp, WeChat, email, or phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-charcoal font-semibold rounded-lg hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
            <Link
              href="/favorites"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Favorites
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
