import { useState, useCallback, useMemo, useEffect } from 'react';
import { trpc } from '@/lib/trpc';
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
  const { mutateAsync, isPending: isMutationPending } = trpc.system.translate.useMutation();

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
        const { translation } = await mutateAsync({
          text,
          targetLanguage: languageNames[targetLanguage],
        });

        // Cache the translation
        translationCache[targetLanguage][cacheKey] = translation;

        return translation;
      } catch (error) {
        console.error("Translation error:", error);
        return text; // Return original text on error
      } finally {
        setIsTranslating(false);
      }
    },
    [language, mutateAsync]
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



  useEffect(() => {
    setIsTranslating(isMutationPending);
  }, [isMutationPending]);

  return useMemo(() => ({
    translateText,
    translateDescription,
    isTranslating
  }), [language, isTranslating, translateText, translateDescription]);
}
