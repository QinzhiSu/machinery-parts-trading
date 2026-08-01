import { useState, useCallback, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Language = 'en' | 'zh' | 'es' | 'ar' | 'ru' | 'fr' | 'pt' | 'it';

interface TranslationCache {
  [key: string]: string;
}

// Translation cache - stores translations to avoid repeated API calls
const translationCache: Record<Language, TranslationCache> = {
  en: {},
  zh: {},
  es: {},
  ar: {},
  ru: {},
  fr: {},
  pt: {},
  it: {}
};

// Language names for the LLM
const languageNames: Record<Language, string> = {
  en: 'English',
  zh: 'Simplified Chinese',
  es: 'Spanish',
  ar: 'Arabic',
  ru: 'Russian',
  fr: 'French',
  pt: 'Portuguese',
  it: 'Italian'
};

export function useAutoTranslate() {
  const { language } = useLanguage();
  const [isTranslating, setIsTranslating] = useState(false);

  const translateText = useCallback(
    async (text: string, targetLanguage: Language = language as Language): Promise<string> => {
      // If target language is English, return original text
      if (targetLanguage === 'en' || !text) {
        return text;
      }

      // Check cache first
      const cacheKey = text.substring(0, 100); // Use first 100 chars as key
      if (translationCache[targetLanguage][cacheKey]) {
        return translationCache[targetLanguage][cacheKey];
      }

      setIsTranslating(true);

      try {
        const response = await fetch('/api/trpc/system.translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text,
            targetLanguage: languageNames[targetLanguage],
          }),
          credentials: 'include',
        });

        if (!response.ok) {
          console.error('Translation API error:', response.statusText);
          return text; // Return original text on error
        }

        const data = await response.json();
        const translatedText = data.result?.translation || text;

        // Cache the translation
        translationCache[targetLanguage][cacheKey] = translatedText;

        return translatedText;
      } catch (error) {
        console.error('Translation error:', error);
        return text; // Return original text on error
      } finally {
        setIsTranslating(false);
      }
    },
    [language]
  );

  const translateDescription = useCallback(
    (description: string): string => {
      // For Chinese language, check if description is already in Chinese
      if (language === 'zh' && /[\u4e00-\u9fff]/.test(description)) {
        return description;
      }

      // For now, return original - async translation will happen in component
      return description;
    },
    [language]
  );

  return useMemo(() => ({
    translateText,
    translateDescription,
    isTranslating
  }), [language, isTranslating, translateText, translateDescription]);
}
