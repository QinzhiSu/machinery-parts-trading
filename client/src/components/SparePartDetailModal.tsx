// Spare Part Detail Modal with image gallery and full specifications
import { X, ChevronLeft, ChevronRight, Package, Wrench, MessageSquare, Heart } from 'lucide-react';
import { useState } from 'react';
import { SparePart } from '@/data/products';
import ContactMethods from './ContactMethods';
import { useFavoritesLocal } from '@/_core/hooks/useFavoritesLocal';
import { useLanguage } from '@/contexts/LanguageContext';
import ComparisonButton from './ComparisonButton';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import { usePartTranslation } from '@/hooks/usePartTranslation';
import { getTranslatedPartDescription } from '@/data/partDescriptionTranslations';
import { getTranslatedShantuiSparePartDescription, getTranslatedShantuiSparePartCategory, getTranslatedSanySparePartDescription, getTranslatedXCMGSparePartDescription, getTranslatedXCMGSparePartCategory, getTranslatedCATSparePartCategory, getTranslatedCATSparePartName, getTranslatedCATSparePartDescription, getTranslatedLiuGongSparePartCategory, getTranslatedLiuGongSparePartDescription } from '@/data/sparePartsTranslations';

interface SparePartDetailModalProps {
  part: SparePart | null;
  isOpen: boolean;
  onClose: () => void;
  onInquiry: (part: SparePart) => void;
  brandName: string;
  brandColor: string;
}

export default function SparePartDetailModal({
  part,
  isOpen,
  onClose,
  onInquiry,
  brandName,
  brandColor,
}: SparePartDetailModalProps) {
  const { t, language } = useLanguage();
  const [imageIndex, setImageIndex] = useState(0);
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesLocal();
  const { translateDescription, translateCompatibleModels, translatePartCategory } = usePartTranslation();
  const [isLoadingFavorite, setIsLoadingFavorite] = useState(false);

  const handleToggleFavorite = () => {
    if (!part) return;
    
    setIsLoadingFavorite(true);
    try {
      if (isFavorite(part.partNumber)) {
        removeFavorite(part.partNumber);
      } else {
        addFavorite(part.partNumber, part.name, brandName);
      }
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
    } finally {
      setIsLoadingFavorite(false);
    }
  };

  if (!isOpen || !part) return null;

  // Extract specifications from description
  const descParts = part.description.split('.');
  const compatibleModels = descParts[1]?.trim() || '';
  const engineModels = descParts[2]?.trim() || '';

  const handlePrevImage = () => {
    setImageIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prev) => (prev === 0 ? 0 : prev));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'oklch(0 0 0 / 0.5)' }}>
      <div
        className="bg-white rounded-lg overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 flex items-center justify-between p-4 border-b"
          style={{ background: 'oklch(0.97 0.005 90)', borderColor: 'oklch(0.88 0.008 90)' }}
        >
          <div>
            <h2
              className="text-lg font-bold uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
            >
              {language === 'en' ? brandName : language === 'es' ? (brandName === 'XCMG' ? 'XCMG' : brandName === 'Shantui' ? 'Shantui' : brandName === 'SANY' ? 'SANY' : brandName) : language === 'ar' ? (brandName === 'XCMG' ? 'مجموعة XCMG' : brandName === 'Shantui' ? 'شانتوي' : brandName === 'SANY' ? 'SANY' : brandName) : language === 'ru' ? (brandName === 'XCMG' ? 'XCMG' : brandName === 'Shantui' ? 'Shantui' : brandName === 'SANY' ? 'SANY' : brandName) : language === 'fr' ? (brandName === 'XCMG' ? 'XCMG' : brandName === 'Shantui' ? 'Shantui' : brandName === 'SANY' ? 'SANY' : brandName) : language === 'pt' ? (brandName === 'XCMG' ? 'XCMG' : brandName === 'Shantui' ? 'Shantui' : brandName === 'SANY' ? 'SANY' : brandName) : language === 'it' ? (brandName === 'XCMG' ? 'XCMG' : brandName === 'Shantui' ? 'Shantui' : brandName === 'SANY' ? 'SANY' : brandName) : brandName} {part.partNumber}
            </h2>
            <p className="text-xs mt-1" style={{ color: 'oklch(0.5 0.02 265)' }}>
              {brandName === 'Shantui' ? getTranslatedShantuiSparePartCategory(part.category, language) : brandName === 'Caterpillar' ? getTranslatedCATSparePartCategory(part.category, language) : translatePartCategory(part.category)}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white rounded transition-colors"
            aria-label="Close"
          >
            <X size={20} style={{ color: 'oklch(0.45 0.02 265)' }} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image Gallery */}
          <div className="mb-6">
            <div className="relative bg-gray-50 rounded-lg overflow-hidden mb-3 h-64 flex items-center justify-center">
              <img
                src={part.image}
                alt={translatePartCategory(part.name)}
                className="w-full h-full object-cover"
              />
              {/* Image navigation (placeholder for future multi-image support) */}
              <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 text-white text-xs rounded">
                1 / 1
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrevImage}
                disabled={imageIndex === 0}
                className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNextImage}
                disabled={imageIndex === 0}
                className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Part Information */}
          <div className="space-y-4 mb-6">
            {/* OEM Number */}
            <div className="flex items-start gap-3">
              <Package size={16} style={{ color: brandColor, marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'oklch(0.5 0.02 265)' }}>
                  {language === 'en' ? 'OEM Number' : language === 'es' ? 'Número OEM' : language === 'ar' ? 'رقم OEM' : language === 'ru' ? 'Номер OEM' : language === 'fr' ? 'Numéro OEM' : language === 'pt' ? 'Número OEM' : language === 'it' ? 'Numero OEM' : 'OEM 编号'}
                </p>
                <p
                  className="text-sm font-bold font-mono"
                  style={{ fontFamily: 'var(--font-mono)', color: brandColor }}
                >
                  {part.partNumber}
                </p>
              </div>
            </div>

            {/* Category */}
            <div className="flex items-start gap-3">
              <Wrench size={16} style={{ color: brandColor, marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'oklch(0.5 0.02 265)' }}>
                  {language === 'en' ? 'Category' : language === 'es' ? 'Categoría' : language === 'ar' ? 'الفئة' : language === 'ru' ? 'Категория' : language === 'fr' ? 'Catégorie' : language === 'pt' ? 'Categoria' : language === 'it' ? 'Categoria' : '分类'}
                </p>
                <p className="text-sm font-semibold" style={{ color: 'oklch(0.18 0.04 265)' }}>
                  {brandName === 'Shantui' ? getTranslatedShantuiSparePartCategory(part.category, language) : brandName === 'XCMG' ? getTranslatedXCMGSparePartCategory(part.category, language) : brandName === 'Caterpillar' ? getTranslatedCATSparePartCategory(part.category, language) : brandName === 'LiuGong' ? getTranslatedLiuGongSparePartCategory(part.category, language) : translatePartCategory(part.category)}
                </p>
              </div>
            </div>

            {/* Full Description */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'oklch(0.5 0.02 265)' }}>
                {language === 'en' ? 'Description' : language === 'es' ? 'Descripción' : language === 'ar' ? 'الوصف' : language === 'ru' ? 'Описание' : language === 'fr' ? 'Description' : language === 'pt' ? 'Descrição' : language === 'it' ? 'Descrizione' : '描述'}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.45 0.02 265)' }}>
                {brandName === 'Shantui' ? getTranslatedShantuiSparePartDescription(part.description, language) : brandName === 'SANY' ? getTranslatedSanySparePartDescription(part.description, language) : brandName === 'XCMG' ? getTranslatedXCMGSparePartDescription(part.description, language) : brandName === 'Caterpillar' ? getTranslatedCATSparePartDescription(part.description, language) : brandName === 'LiuGong' ? getTranslatedLiuGongSparePartDescription(part.description, language) : translateDescription(part.description)}
              </p>
            </div>

            {/* Compatible Models */}
            {(part.compatibleModels && part.compatibleModels.length > 0) ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'oklch(0.5 0.02 265)' }}>
                  {language === 'en' ? 'Compatible Models' : language === 'es' ? 'Modelos Compatibles' : language === 'ar' ? 'النماذج المتوافقة' : language === 'ru' ? 'Совместимые модели' : language === 'fr' ? 'Modèles compatibles' : language === 'pt' ? 'Modelos compatíveis' : language === 'it' ? 'Modelli compatibili' : '适用车型'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {part.compatibleModels.map((model) => (
                    <span
                      key={model}
                      className="px-2 py-1 text-xs font-mono rounded"
                      style={{ background: 'oklch(0.97 0.005 90)', color: brandColor, fontFamily: 'var(--font-mono)' }}
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Engine Models */}
            {engineModels && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'oklch(0.5 0.02 265)' }}>
                  {language === 'en' ? 'Engine Models' : language === 'es' ? 'Modelos de Motor' : language === 'ar' ? 'نماذج المحرك' : language === 'ru' ? 'Модели двигателя' : language === 'fr' ? 'Modèles de moteur' : language === 'pt' ? 'Modelos de motor' : language === 'it' ? 'Modelli di motore' : '发动机型号'}
                </p>
                <p className="text-sm font-mono" style={{ fontFamily: 'var(--font-mono)', color: 'oklch(0.45 0.02 265)' }}>
                  {engineModels}
                </p>
              </div>
            )}
          </div>

          {/* Contact Methods */}
          <div className="mb-6">
            <ContactMethods partName={part.name} partNumber={part.partNumber} compact={true} />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => {
                onInquiry(part);
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:opacity-90 rounded"
              style={{ background: brandColor, fontFamily: 'var(--font-display)' }}
            >
              <MessageSquare size={14} />
              {language === 'en' ? 'Send Inquiry' : language === 'es' ? 'Enviar Consulta' : language === 'ar' ? 'إرسال استفسار' : language === 'ru' ? 'Отправить запрос' : language === 'fr' ? 'Envoyer une demande' : language === 'pt' ? 'Enviar consulta' : language === 'it' ? 'Invia richiesta' : '发送询价'}
            </button>
            <ComparisonButton part={part} brandColor={brandColor} />
            <button
                onClick={handleToggleFavorite}
                disabled={isLoadingFavorite}
                className="px-4 py-3 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider transition-all rounded disabled:opacity-50"
                style={{
                  background: isFavorite(part.partNumber) ? brandColor : 'oklch(0.97 0.005 90)',
                  color: isFavorite(part.partNumber) ? 'white' : 'oklch(0.45 0.02 265)',
                  border: isFavorite(part.partNumber) ? 'none' : '1px solid oklch(0.88 0.008 90)',
                  fontFamily: 'var(--font-display)',
                }}
                title={isFavorite(part.partNumber) ? '从收藏夹中移除' : '添加到收藏夹'}
              >
                <Heart size={14} fill={isFavorite(part.partNumber) ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 text-sm font-bold uppercase tracking-wider transition-all rounded"
                style={{
                  background: 'oklch(0.97 0.005 90)',
                  color: 'oklch(0.45 0.02 265)',
                  border: '1px solid oklch(0.88 0.008 90)',
                  fontFamily: 'var(--font-display)',
                }}
              >
{language === 'en' ? 'Close' : language === 'es' ? 'Cerrar' : language === 'ar' ? 'إغلاق' : language === 'ru' ? 'Закрыть' : language === 'fr' ? 'Fermer' : language === 'pt' ? 'Fechar' : language === 'it' ? 'Chiudi' : '关闭'}
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
