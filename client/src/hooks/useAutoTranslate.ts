import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Cache for translated descriptions to avoid repeated translations
const translationCache: Record<string, Record<string, string>> = {};

// Language names for translation prompts
const languageNames: Record<string, string> = {
  zh: 'Simplified Chinese',
  en: 'English',
  es: 'Spanish',
  ar: 'Arabic',
  ru: 'Russian',
  fr: 'French',
  pt: 'Portuguese',
  it: 'Italian'
};

export function useAutoTranslate() {
  const { language } = useLanguage();

  const translateText = async (text: string, targetLanguage: string = language): Promise<string> => {
    // If already English or target is English, return as-is
    if (targetLanguage === 'en' || text.length === 0) {
      return text;
    }

    // Check cache first
    if (translationCache[text]?.[targetLanguage]) {
      return translationCache[text][targetLanguage];
    }

    try {
      // For now, return the original text
      // In production, this would call a translation API
      // Example: Google Translate API, DeepL, or Manus LLM
      return text;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  const translateDescription = (description: string): string => {
    // For Chinese language, check if description is already in Chinese
    if (language === 'zh' && /[\u4e00-\u9fff]/.test(description)) {
      return description;
    }

    // For other languages, return original (English) for now
    // This will be enhanced with actual translation API
    return description;
  };

  return useMemo(() => ({
    translateText,
    translateDescription
  }), [language]);
}
