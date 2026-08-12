// Design: Industrial Minimalism - Contact page
import { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Clock, Send, Globe } from 'lucide-react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will reply within 24 hours.');
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
            <Link href="/" className="hover:text-orange-400 transition-colors uppercase tracking-wider">Home</Link>
            <ChevronRight size={12} />
            <span className="uppercase tracking-wider" style={{ color: 'oklch(0.68 0.18 42)' }}>Contact</span>
          </div>
          <h1
            className="text-white uppercase leading-none mb-3"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}
          >
            Contact <span style={{ color: 'oklch(0.68 0.18 42)' }}>Us</span>
          </h1>
          <p className="text-sm max-w-xl" style={{ color: 'oklch(0.7 0.02 265)' }}>
            Get in touch for product inquiries, pricing, availability, and shipping quotes. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="flex-1 py-12" style={{ background: 'oklch(0.97 0.005 90)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4">
              {[
                { icon: Mail, title: 'Email', content: 'info@globalmachinery.com', sub: 'Reply within 24 hours', href: 'mailto:info@globalmachinery.com' },
                { icon: Phone, title: 'WeChat / WhatsApp', content: '+86 188 8888 8888', sub: 'Mon–Sat 8:00–18:00 CST', href: 'tel:+8618888888888' },
                { icon: MapPin, title: 'Location', content: 'China', sub: 'Global Export Operations', href: '#' },
                { icon: Globe, title: 'Export Markets', content: 'Worldwide Shipping', sub: 'Africa · Middle East · SE Asia · Americas', href: '#' },
                { icon: Clock, title: 'Business Hours', content: 'Mon–Sat 8:00–18:00', sub: 'China Standard Time (UTC+8)', href: '#' },
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
                  Send Inquiry
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                        style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                        Company
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                        style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                        Email *
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
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                      style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                      placeholder="e.g. CAT 320 Excavator Inquiry / Komatsu PC220 Filter Parts"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border focus:outline-none focus:border-orange-400 transition-colors resize-none"
                      style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                      placeholder="Please describe the products you need, quantity, destination country, and any other requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3.5 text-white font-bold uppercase tracking-wider transition-all hover:opacity-90"
                    style={{ background: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)', fontSize: '0.9rem' }}
                  >
                    <Send size={16} />
                    Send Inquiry
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
