import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslatedCaterpillarSparePartDetails } from '@/data/sparePartsDetails_caterpillar';
import { getTranslatedShantuiSparePartDetails } from '@/data/sparePartsDetails_shantui';
import { getTranslatedXCMGSparePartDetails } from '@/data/sparePartsDetails_xcmg';
import { getTranslatedLiuGongSparePartDetails } from '@/data/sparePartsDetails_liugong';
import { getTranslatedSANYSparePartDetails } from '@/data/sparePartsDetails_sany';
import { getTranslatedKomatsuSparePartDetails } from '@/data/sparePartsDetails_komatsu';
import { getTranslatedIsuzuSparePartDetails } from '@/data/sparePartsDetails_isuzu';
import { getTranslatedShacmanSparePartDetails } from '@/data/sparePartsDetails_shacman';
import { getTranslatedSinotrukSparePartDetails } from '@/data/sparePartsDetails_sinotruk';
import { getTranslatedToyotaSparePartDetails } from '@/data/sparePartsDetails_toyota';
import { getTranslatedCumminsSparePartDetails } from '@/data/sparePartsDetails_cummins';
import { getTranslatedWeichaiSparePartDetails } from '@/data/sparePartsDetails_weichai';

interface SparePartDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  part: {
    partNumber: string;
    name: string;
    category: string;
    description: string;
  };
  brandId: string;
}

// Map brand IDs to their translation functions
const brandDetailsMap: Record<string, (partName: string, language: string) => string> = {
  caterpillar: getTranslatedCaterpillarSparePartDetails,
  shantui: getTranslatedShantuiSparePartDetails,
  xcmg: getTranslatedXCMGSparePartDetails,
  liugong: getTranslatedLiuGongSparePartDetails,
  sany: getTranslatedSANYSparePartDetails,
  komatsu: getTranslatedKomatsuSparePartDetails,
  isuzu: getTranslatedIsuzuSparePartDetails,
  shacman: getTranslatedShacmanSparePartDetails,
  sinotruk: getTranslatedSinotrukSparePartDetails,
  toyota: getTranslatedToyotaSparePartDetails,
  cummins: getTranslatedCumminsSparePartDetails,
  weichai: getTranslatedWeichaiSparePartDetails,
};

export function SparePartDetailModal({
  isOpen,
  onClose,
  part,
  brandId,
}: SparePartDetailModalProps) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  // Get the brand-specific details translation function
  const getDetailsForBrand = brandDetailsMap[brandId];
  const details = getDetailsForBrand ? getDetailsForBrand(part.name, language) : part.description;

  // Translation helper
  const t = (key: string, translations: Record<string, string>) => {
    return translations[language] || translations['en'];
  };

  const partNumberLabel = {
    en: 'Part Number',
    zh: '零件号',
    es: 'Número de Pieza',
    ar: 'رقم القطعة',
    ru: 'Номер детали',
    fr: 'Numéro de Pièce',
    pt: 'Número da Peça',
    it: 'Numero Pezzo',
    de: 'Teilenummer',
    ja: '部品番号',
  };

  const categoryLabel = {
    en: 'Category',
    zh: '分类',
    es: 'Categoría',
    ar: 'الفئة',
    ru: 'Категория',
    fr: 'Catégorie',
    pt: 'Categoria',
    it: 'Categoria',
    de: 'Kategorie',
    ja: 'カテゴリ',
  };

  const descriptionLabel = {
    en: 'Description',
    zh: '描述',
    es: 'Descripción',
    ar: 'الوصف',
    ru: 'Описание',
    fr: 'Description',
    pt: 'Descrição',
    it: 'Descrizione',
    de: 'Beschreibung',
    ja: '説明',
  };

  const closeLabel = {
    en: 'Close',
    zh: '关闭',
    es: 'Cerrar',
    ar: 'إغلاق',
    ru: 'Закрыть',
    fr: 'Fermer',
    pt: 'Fechar',
    it: 'Chiudi',
    de: 'Schließen',
    ja: '閉じる',
  };

  const inquiryLabel = {
    en: 'Inquiry',
    zh: '询价',
    es: 'Consulta',
    ar: 'استفسار',
    ru: 'Запрос',
    fr: 'Demande',
    pt: 'Consulta',
    it: 'Richiesta',
    de: 'Anfrage',
    ja: 'お問い合わせ',
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{part.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Part Number */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              {t('partNumber', partNumberLabel)}
            </h3>
            <p className="text-lg font-mono">{part.partNumber}</p>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              {t('category', categoryLabel)}
            </h3>
            <p className="text-base">{part.category}</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              {t('description', descriptionLabel)}
            </h3>
            <p className="text-base leading-relaxed">{details}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-6 border-t border-border">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              {t('close', closeLabel)}
            </button>
            <button
              className="flex-1 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('inquiry', inquiryLabel)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
