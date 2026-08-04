import React from 'react';
import { Scale } from 'lucide-react';
import { SparePart } from '@/data/products';
import { useComparison } from '@/contexts/ComparisonContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface ComparisonButtonProps {
  part: SparePart;
  brandColor: string;
  language?: string;
}

export default function ComparisonButton({ part, brandColor, language: propLanguage }: ComparisonButtonProps) {
  const { addToComparison, removeFromComparison, isComparing, comparedParts, maxComparisons } = useComparison();
  const { language: contextLanguage } = useLanguage();
  const language = propLanguage || contextLanguage;

  const handleToggleComparison = () => {
    if (isComparing(part.id)) {
      removeFromComparison(part.id);
    } else if (comparedParts.length < maxComparisons) {
      addToComparison(part);
    }
  };

  const isCompared = isComparing(part.id);
  const isDisabled = !isCompared && comparedParts.length >= maxComparisons;

  const getCompareText = () => {
    if (isCompared) {
      switch (language) {
        case 'en': return 'Compared';
        case 'es': return 'Comparado';
        case 'ar': return 'مقارن';
        case 'ru': return 'Сравниваемый';
        case 'fr': return 'Comparé';
        case 'pt': return 'Comparado';
        case 'it': return 'Confrontato';
        default: return '已对比';
      }
    } else {
      switch (language) {
        case 'en': return 'Compare';
        case 'es': return 'Comparar';
        case 'ar': return 'مقارنة';
        case 'ru': return 'Сравнить';
        case 'fr': return 'Comparer';
        case 'pt': return 'Comparar';
        case 'it': return 'Confronta';
        default: return '对比';
      }
    }
  };

  const getTitle = () => {
    if (isDisabled) {
      switch (language) {
        case 'en': return `Max ${maxComparisons} parts`;
        case 'es': return `Máx ${maxComparisons} piezas`;
        case 'ar': return `الحد الأقصى ${maxComparisons} أجزاء`;
        case 'ru': return `Макс ${maxComparisons} деталей`;
        case 'fr': return `Max ${maxComparisons} pièces`;
        case 'pt': return `Máx ${maxComparisons} peças`;
        case 'it': return `Max ${maxComparisons} pezzi`;
        default: return `最多只能对比 ${maxComparisons} 个配件`;
      }
    } else if (isCompared) {
      switch (language) {
        case 'en': return 'Remove from comparison';
        case 'es': return 'Eliminar de la comparación';
        case 'ar': return 'إزالة من المقارنة';
        case 'ru': return 'Удалить из сравнения';
        case 'fr': return 'Retirer de la comparaison';
        case 'pt': return 'Remover da comparação';
        case 'it': return 'Rimuovi dal confronto';
        default: return '从对比中移除';
      }
    } else {
      switch (language) {
        case 'en': return 'Add to comparison';
        case 'es': return 'Añadir a la comparación';
        case 'ar': return 'إضافة للمقارنة';
        case 'ru': return 'Добавить в сравнение';
        case 'fr': return 'Ajouter à la comparaison';
        case 'pt': return 'Adicionar à comparação';
        case 'it': return 'Aggiungi al confronto';
        default: return '添加到对比';
      }
    }
  };

  return (
    <button
      onClick={handleToggleComparison}
      disabled={isDisabled}
      className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold uppercase tracking-wider transition-all rounded disabled:opacity-50 disabled:cursor-not-allowed"
      style={{
        background: isCompared ? brandColor : 'oklch(0.97 0.005 90)',
        color: isCompared ? 'white' : 'oklch(0.45 0.02 265)',
        border: isCompared ? 'none' : '1px solid oklch(0.88 0.008 90)',
      }}
      title={getTitle()}
    >
      <Scale size={12} />
      {getCompareText()}
    </button>
  );
}
