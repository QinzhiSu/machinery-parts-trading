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
const brandDetailsMap: Record<string, (language: string) => string> = {
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
  const details = getDetailsForBrand ? getDetailsForBrand(language) : part.description;

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
              {language === 'zh' ? '零件号' : language === 'en' ? 'Part Number' : language === 'es' ? 'Número de Pieza' : language === 'ar' ? 'رقم القطعة' : language === 'ru' ? 'Номер детали' : language === 'fr' ? 'Numéro de Pièce' : language === 'pt' ? 'Número da Peça' : language === 'it' ? 'Numero Pezzo' : language === 'de' ? 'Teilenummer' : language === 'ja' ? '部品番号' : 'Numero Pezzo'}
            </h3>
            <p className="text-lg font-mono">{part.partNumber}</p>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              {language === 'zh' ? '分类' : language === 'en' ? 'Category' : language === 'es' ? 'Categoría' : language === 'ar' ? 'الفئة' : language === 'ru' ? 'Категория' : language === 'fr' ? 'Catégorie' : language === 'pt' ? 'Categoria' : language === 'it' ? 'Categoria' : language === 'de' ? 'Kategorie' : language === 'ja' ? 'カテゴリ' : 'Categoria'}
            </h3>
            <p className="text-base">{part.category}</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              {language === 'zh' ? '描述' : language === 'en' ? 'Description' : language === 'es' ? 'Descripción' : language === 'ar' ? 'الوصف' : language === 'ru' ? 'Описание' : language === 'fr' ? 'Description' : language === 'pt' ? 'Descrição' : language === 'it' ? 'Descrizione' : language === 'de' ? 'Beschreibung' : language === 'ja' ? '説明' : 'Descrizione'}
            </h3>
            <p className="text-base leading-relaxed">{details}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-6 border-t border-border">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              {language === 'zh' ? '关闭' : language === 'en' ? 'Close' : language === 'es' ? 'Cerrar' : language === 'ar' ? 'إغلاق' : language === 'ru' ? 'Закрыть' : language === 'fr' ? 'Fermer' : language === 'pt' ? 'Fechar' : language === 'it' ? 'Chiudi' : language === 'de' ? 'Schließen' : language === 'ja' ? '閉じる' : 'Chiudi'}
            </button>
            <button
              className="flex-1 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'zh' ? '询价' : language === 'en' ? 'Inquiry' : language === 'es' ? 'Consulta' : language === 'ar' ? 'استفسار' : language === 'ru' ? 'Запрос' : language === 'fr' ? 'Demande' : language === 'pt' ? 'Consulta' : language === 'it' ? 'Richiesta' : language === 'de' ? 'Anfrage' : language === 'ja' ? 'お問い合わせ' : 'Richiesta'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
