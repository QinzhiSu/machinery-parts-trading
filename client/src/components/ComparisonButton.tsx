import React from 'react';
import { Scale } from 'lucide-react';
import { SparePart } from '@/data/products';
import { useComparison } from '@/contexts/ComparisonContext';

interface ComparisonButtonProps {
  part: SparePart;
  brandColor: string;
}

export default function ComparisonButton({ part, brandColor }: ComparisonButtonProps) {
  const { addToComparison, removeFromComparison, isComparing, comparedParts, maxComparisons } = useComparison();

  const handleToggleComparison = () => {
    if (isComparing(part.id)) {
      removeFromComparison(part.id);
    } else if (comparedParts.length < maxComparisons) {
      addToComparison(part);
    }
  };

  const isCompared = isComparing(part.id);
  const isDisabled = !isCompared && comparedParts.length >= maxComparisons;

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
      title={isDisabled ? `最多只能对比 ${maxComparisons} 个配件` : isCompared ? '从对比中移除' : '添加到对比'}
    >
      <Scale size={12} />
      {isCompared ? '已对比' : '对比'}
    </button>
  );
}
