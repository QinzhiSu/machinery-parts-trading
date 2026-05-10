// Design: Industrial Minimalism - Top navigation bar with navy background + orange accents
import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/construction', label: 'Construction Machinery' },
    { href: '/trucks', label: 'Trucks & Engines' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:block" style={{ background: 'oklch(0.14 0.04 265)', borderBottom: '1px solid oklch(0.22 0.04 265)' }}>
        <div className="container flex items-center justify-between py-1.5">
          <div className="flex items-center gap-6 text-xs" style={{ color: 'oklch(0.7 0.02 265)', fontFamily: 'var(--font-body)' }}>
            <a href="mailto:info@globalmachinery.com" className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
              <Mail size={12} />
              info@globalmachinery.com
            </a>
            <a href="tel:+8618888888888" className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
              <Phone size={12} />
              +86 188 8888 8888
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'oklch(0.7 0.02 265)' }}>
            <Globe size={12} />
            <span>Global Export | Worldwide Shipping</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className="sticky top-0 z-50 shadow-lg"
        style={{ background: 'oklch(0.18 0.04 265)' }}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="flex items-center justify-center w-10 h-10 font-bold text-white text-sm"
              style={{
                background: 'oklch(0.68 0.18 42)',
                fontFamily: 'var(--font-display)',
                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
                paddingRight: '6px',
                letterSpacing: '0.05em'
              }}
            >
              GM
            </div>
            <div>
              <div
                className="text-white font-bold leading-none"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.08em' }}
              >
                GLOBAL MACHINERY
              </div>
              <div
                className="text-xs leading-none mt-0.5"
                style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}
              >
                & PARTS TRADING
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href || (link.href !== '/' && location.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-200"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: isActive ? 'oklch(0.68 0.18 42)' : 'oklch(0.82 0.01 265)',
                    letterSpacing: '0.08em',
                    fontSize: '0.8rem',
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ background: 'oklch(0.68 0.18 42)' }}
                    />
                  )}
                  <span className="hover:text-orange-400 transition-colors">{link.label}</span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:opacity-90"
              style={{
                background: 'oklch(0.68 0.18 42)',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.08em',
                fontSize: '0.8rem',
              }}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: 'oklch(0.15 0.04 265)', borderTop: '1px solid oklch(0.25 0.04 265)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-sm font-semibold uppercase tracking-wider border-b"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'oklch(0.82 0.01 265)',
                  borderColor: 'oklch(0.22 0.04 265)',
                  letterSpacing: '0.08em',
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
