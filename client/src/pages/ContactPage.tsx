// Design: Industrial Minimalism - Contact page
import { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Clock, Send, Globe } from 'lucide-react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { contactPageTranslations } from '@/data/contactPageTranslations';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const { language } = useLanguage();
  const t = (key: string) => translations[language]?.[key] || key;
  const pageCopy = contactPageTranslations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(pageCopy.success);
    setForm({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="py-12 relative" style={{ background: 'oklch(0.18 0.04 265)' }}>
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: 'oklch(0.68 0.18 42)' }} />
        <div className="container relative z-10">
          <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: 'oklch(0.6 0.02 265)', fontFamily: 'var(--font-display)' }}>
            <Link href="/" className="hover:text-orange-400 transition-colors uppercase tracking-wider">{t('nav.home')}</Link>
            <ChevronRight size={12} />
            <span className="uppercase tracking-wider" style={{ color: 'oklch(0.68 0.18 42)' }}>{t('contact.title')}</span>
          </div>
          <h1
            className="text-white uppercase leading-none mb-3"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}
          >
            {t('contact.title')}
          </h1>
          <p className="text-sm max-w-xl" style={{ color: 'oklch(0.7 0.02 265)' }}>
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="flex-1 py-12" style={{ background: 'oklch(0.97 0.005 90)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4">
              {[
                { icon: Mail, title: t('inquiry.email'), content: 'info@globalmachinery.com', sub: t('contact.replyWithin24'), href: 'mailto:info@globalmachinery.com' },
                { icon: Phone, title: 'WeChat / WhatsApp', content: '0022462297604/+224 622 497 604', sub: t('contact.monSat'), href: 'https://wa.me/224622497604' },
                { icon: MapPin, title: t('contact.location'), content: t('home.country.china'), sub: t('contact.globalExport'), href: '#' },
                { icon: Globe, title: pageCopy.exportMarketsLabel, content: t('contact.worldwideShipping'), sub: pageCopy.markets, href: '#' },
                { icon: Clock, title: t('contact.businessHours'), content: t('contact.monSat'), sub: t('contact.chinaTime'), href: '#' },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-4 p-5 bg-white border-l-4 hover:shadow-md transition-shadow"
                  style={{ borderLeftColor: 'oklch(0.68 0.18 42)' }}
                >
                  <item.icon size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'oklch(0.68 0.18 42)' }} />
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold mb-0.5" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
                      {item.title}
                    </div>
                    <div className="text-sm font-semibold" style={{ color: 'oklch(0.18 0.04 265)' }}>
                      {item.content}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: 'oklch(0.55 0.02 265)' }}>
                      {item.sub}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 border-l-4" style={{ borderLeftColor: 'oklch(0.18 0.04 265)' }}>
                <h2
                  className="text-2xl font-bold uppercase tracking-wide mb-6"
                  style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
                >
                  {t('contact.sendInquiry')}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                        {t('inquiry.yourName')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                        style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                        placeholder={pageCopy.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                        {t('inquiry.company')}
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                        style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                        placeholder={pageCopy.companyPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                        {t('inquiry.email')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                        style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                        WeChat / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                        style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                        placeholder={pageCopy.phonePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                        {t('contact.subject')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                      style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                      placeholder={pageCopy.subjectPlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                        {t('contact.message')} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border focus:outline-none focus:border-orange-400 transition-colors resize-none"
                      style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                      placeholder={t('contact.describeProducts')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3.5 text-white font-bold uppercase tracking-wider transition-all hover:opacity-90"
                    style={{ background: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)', fontSize: '0.9rem' }}
                  >
                    <Send size={16} />
                    {t('contact.sendInquiry')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
