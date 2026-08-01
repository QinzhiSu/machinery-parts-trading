import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { trpc } from '@/lib/trpc';
import { Loader2 } from 'lucide-react';

interface MachineDescriptionTranslatorProps {
  description: string;
  machineId?: string; // Unique identifier for this machine
  className?: string;
  style?: React.CSSProperties;
}

// Global translation cache with machine ID as key
const globalTranslationCache: Record<string, Record<string, string>> = {};

/**
 * Component that automatically translates machine descriptions
 * to the current language when the language changes
 */
export default function MachineDescriptionTranslator({
  description,
  machineId = '',
  className = '',
  style
}: MachineDescriptionTranslatorProps) {
  const { language } = useLanguage();
  const [translatedDescription, setTranslatedDescription] = useState(description);
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  
  // Use tRPC mutation for translation
  const translateMutation = trpc.system.translate.useMutation();

  useEffect(() => {
    // If language is English, use original description
    if (language === 'en') {
      setTranslatedDescription(description);
      return;
    }

    // Create a unique cache key using machine ID and description
    const cacheKey = machineId || description.substring(0, 50);
    
    // Check if translation is already cached
    if (globalTranslationCache[cacheKey]?.[language]) {
      setTranslatedDescription(globalTranslationCache[cacheKey][language]);
      return;
    }

    // For other languages, translate asynchronously
    const performTranslation = async () => {
      // Cancel previous request if any
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();
      setIsLoading(true);

      try {
        const result = await translateMutation.mutateAsync({
          text: description,
          targetLanguage: getLanguageName(language),
        });

        // Handle both string and array responses from LLM
        let translated = description;
        if (typeof result.translation === 'string') {
          translated = result.translation;
        } else if (Array.isArray(result.translation)) {
          // If it's an array, extract text content
          translated = result.translation
            .map((item: any) => {
              if (typeof item === 'string') return item;
              if (item.type === 'text') return item.text;
              return '';
            })
            .join('');
        }

        // Cache the translation
        if (!globalTranslationCache[cacheKey]) {
          globalTranslationCache[cacheKey] = {};
        }
        globalTranslationCache[cacheKey][language] = translated;

        setTranslatedDescription(translated);
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          console.error('Translation error:', error);
        }
        setTranslatedDescription(description);
      } finally {
        setIsLoading(false);
      }
    };

    performTranslation();

    // Cleanup function
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [language, description, machineId, translateMutation]);

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

function getLanguageName(language: string): string {
  const languageNames: Record<string, string> = {
    'en': 'English',
    'zh': 'Simplified Chinese',
    'es': 'Spanish',
    'ar': 'Arabic',
    'ru': 'Russian',
    'fr': 'French',
    'pt': 'Portuguese',
    'it': 'Italian'
  };
  return languageNames[language] || 'English';
}
