// Design: Industrial Minimalism - Dark navy footer with orange accents
import { Link } from 'wouter';
import { Phone, Mail, MapPin, Globe, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'oklch(0.12 0.04 265)', borderTop: '3px solid oklch(0.68 0.18 42)' }}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="flex items-center justify-center w-9 h-9 font-bold text-white text-xs"
                style={{
                  background: 'oklch(0.68 0.18 42)',
                  fontFamily: 'var(--font-display)',
                  clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
                  paddingRight: '4px',
                }}
              >
                VX
              </div>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.08em' }}>
                  VXZO
                </div>
                <div className="text-xs" style={{ color: 'oklch(0.68 0.18 42)', letterSpacing: '0.1em' }}>
                  MACHINERY TRADING
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.6 0.02 265)' }}>
              Professional exporter of construction machinery, heavy trucks, and spare parts. Global offices in Beijing, Guinea, Madagascar, Hong Kong, and Shandong.
            </p>
            <div className="flex flex-col gap-2">
              <a href="https://wa.me/224622497604" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs transition-colors hover:text-orange-400" style={{ color: 'oklch(0.6 0.02 265)' }}>
                <Phone size={12} style={{ color: 'oklch(0.68 0.18 42)' }} />
                +224 622 497 604 (WhatsApp)
              </a>
              <div className="flex items-center gap-2 text-xs" style={{ color: 'oklch(0.6 0.02 265)' }}>
                <MapPin size={12} style={{ color: 'oklch(0.68 0.18 42)' }} />
                Beijing HQ | Global Export
              </div>
            </div>
          </div>

          {/* Construction Machinery */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              Construction Machinery
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Caterpillar', id: 'caterpillar' },
                { name: 'Shantui', id: 'shantui' },
                { name: 'XCMG', id: 'xcmg' },
                { name: 'LiuGong', id: 'liugong' },
                { name: 'SANY', id: 'sany' },
                { name: 'Komatsu', id: 'komatsu' },
              ].map(brand => (
                <li key={brand.id}>
                  <Link
                    href={`/brand/${brand.id}`}
                    className="flex items-center gap-1.5 text-xs transition-colors hover:text-orange-400"
                    style={{ color: 'oklch(0.6 0.02 265)' }}
                  >
                    <ArrowRight size={10} style={{ color: 'oklch(0.68 0.18 42)' }} />
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trucks & Engines */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              Trucks & Engines
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Isuzu', id: 'isuzu' },
                { name: 'Shacman', id: 'shacman' },
                { name: 'Sinotruk', id: 'sinotruck' },
                { name: 'Toyota', id: 'toyota' },
                { name: 'Cummins', id: 'cummins' },
                { name: 'Weichai', id: 'weichai' },
              ].map(brand => (
                <li key={brand.id}>
                  <Link
                    href={`/brand/${brand.id}`}
                    className="flex items-center gap-1.5 text-xs transition-colors hover:text-orange-400"
                    style={{ color: 'oklch(0.6 0.02 265)' }}
                  >
                    <ArrowRight size={10} style={{ color: 'oklch(0.68 0.18 42)' }} />
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/construction', label: 'Construction Machinery' },
                { href: '/trucks', label: 'Trucks & Engines' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-xs transition-colors hover:text-orange-400"
                    style={{ color: 'oklch(0.6 0.02 265)' }}
                  >
                    <ArrowRight size={10} style={{ color: 'oklch(0.68 0.18 42)' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4" style={{ borderTop: '1px solid oklch(0.22 0.04 265)' }}>
              <div className="flex items-center gap-1.5 text-xs mb-2" style={{ color: 'oklch(0.6 0.02 265)' }}>
                <Globe size={12} style={{ color: 'oklch(0.68 0.18 42)' }} />
                <span className="font-semibold" style={{ fontFamily: 'var(--font-display)' }}>WORLDWIDE SHIPPING</span>
              </div>
              <p className="text-xs" style={{ color: 'oklch(0.5 0.02 265)' }}>
                Africa · Middle East · Southeast Asia · South America · Central Asia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: 'oklch(0.1 0.04 265)', borderTop: '1px solid oklch(0.18 0.04 265)' }}>
        <div className="container py-3 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'oklch(0.45 0.02 265)' }}>
            © 2024 VXZO. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'oklch(0.45 0.02 265)' }}>
            Professional Exporter · Quality Guaranteed · Competitive Price
          </p>
        </div>
      </div>
    </footer>
  );
}
