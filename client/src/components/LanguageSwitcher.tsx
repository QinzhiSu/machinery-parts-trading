// Design: Industrial Minimalism - Language Switcher
// Dropdown selector in navbar with flag-like indicators
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
] as const;

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find(l => l.code === language);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors hover:opacity-75"
        style={{
          color: 'oklch(0.68 0.18 42)',
          fontFamily: 'var(--font-display)',
        }}
      >
        <span className="text-base">{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.label}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-1 bg-white border shadow-lg z-50 min-w-max"
          style={{
            borderColor: 'oklch(0.88 0.008 90)',
            borderRadius: '0.25rem',
          }}
        >
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as any);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-orange-50"
              style={{
                color: language === lang.code ? 'oklch(0.68 0.18 42)' : 'oklch(0.35 0.02 265)',
                background: language === lang.code ? 'oklch(0.97 0.005 90)' : 'transparent',
                fontFamily: 'var(--font-display)',
              }}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
              {language === lang.code && (
                <span className="ml-auto text-orange-500">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
