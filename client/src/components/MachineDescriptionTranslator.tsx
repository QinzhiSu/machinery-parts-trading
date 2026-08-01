import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAutoTranslate } from '@/hooks/useAutoTranslate';
import { Loader2 } from 'lucide-react';

interface MachineDescriptionTranslatorProps {
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Component that automatically translates machine descriptions
 * to the current language when the language changes
 */
export default function MachineDescriptionTranslator({
  description,
  className = '',
  style
}: MachineDescriptionTranslatorProps) {
  const { language } = useLanguage();
  const { translateText, isTranslating } = useAutoTranslate();
  const [translatedDescription, setTranslatedDescription] = useState(description);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // If language is English, use original description
    if (language === 'en') {
      setTranslatedDescription(description);
      return;
    }

    // For other languages, translate asynchronously
    const performTranslation = async () => {
      setIsLoading(true);
      try {
        const translated = await translateText(description, language as any);
        setTranslatedDescription(translated);
      } catch (error) {
        console.error('Translation failed:', error);
        setTranslatedDescription(description);
      } finally {
        setIsLoading(false);
      }
    };

    performTranslation();
  }, [language, description, translateText]);

  return (
    <div className={`relative ${className}`} style={style}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 rounded">
          <Loader2 size={16} className="animate-spin" style={{ color: 'oklch(0.68 0.18 42)' }} />
        </div>
      )}
      <p className={isLoading ? 'opacity-50' : ''}>
        {translatedDescription}
      </p>
    </div>
  );
}
