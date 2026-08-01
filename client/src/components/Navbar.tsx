/**
 * VXZO Navbar - Elegant Minimalist Design
 */

import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, MessageCircle, Globe, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { GlobalSearch } from './GlobalSearch';
import { CONTACT_METHODS } from '@/data/contact';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();
  const [wechatCopied, setWechatCopied] = useState(false);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/construction', label: t('nav.construction') },
    { href: '/trucks', label: t('nav.trucks') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const handleWechatCopy = () => {
    navigator.clipboard.writeText(CONTACT_METHODS.wechat.id);
    setWechatCopied(true);
    setTimeout(() => setWechatCopied(false), 2000);
  };

  const isActive = (href: string) => location === href;

  return (
    <>
      {/* Top Info Bar - Premium */}
      <div className="hidden bg-charcoal border-b border-gray-800 m-0 p-0">
        <div className="container flex items-center justify-between py-2.5 m-0 p-0">
          <div className="flex items-center gap-8 text-xs">
            <a
              href={CONTACT_METHODS.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors"
            >
              <Phone size={14} />
              <span>WhatsApp: {CONTACT_METHODS.whatsapp.phone}</span>
            </a>
            <button
              onClick={handleWechatCopy}
              className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors cursor-pointer"
              title="Click to copy WeChat ID"
            >
              <MessageCircle size={14} />
              <span>
                WeChat: {CONTACT_METHODS.wechat.id} {wechatCopied && <span className="text-gold ml-1">✓</span>}
              </span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Globe size={14} />
            <span>Global Export • Worldwide Shipping</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-lg font-bold text-white text-base shadow-md group-hover:shadow-lg transition-shadow">
              VXZO
            </div>
            <div className="hidden sm:block">
              <div className="text-base font-bold text-charcoal leading-tight">VXZO</div>
              <div className="text-xs text-gray-500">Global Machinery</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-gold border-b-2 border-gold pb-0.5'
                    : 'text-charcoal hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:block">
              <GlobalSearch />
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-charcoal hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="container py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'bg-gold/10 text-gold font-medium'
                      : 'text-charcoal hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Search */}
              <div className="px-4 py-2">
                <GlobalSearch />
              </div>

              {/* Mobile Contact Info */}
              <div className="px-4 py-3 border-t border-gray-200 space-y-2 text-sm">
                <a
                  href={CONTACT_METHODS.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-charcoal hover:text-gold transition-colors"
                >
                  <Phone size={16} />
                  <span>WhatsApp</span>
                </a>
                <button
                  onClick={handleWechatCopy}
                  className="flex items-center gap-2 text-charcoal hover:text-gold transition-colors w-full"
                >
                  <MessageCircle size={16} />
                  <span>WeChat {wechatCopied && <span className="text-gold ml-1">✓</span>}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
