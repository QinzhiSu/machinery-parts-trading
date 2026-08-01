import { useState, useMemo } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { SparePart } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';

interface CategoryFilterProps {
  parts: SparePart[];
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  isExpanded?: boolean;
}

export default function CategoryFilter({
  parts,
  selectedCategories,
  onCategoryChange,
  isExpanded = false,
}: CategoryFilterProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(isExpanded);

  // Get all unique categories with counts
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    parts.forEach((part) => {
      stats[part.category] = (stats[part.category] || 0) + 1;
    });
    return stats;
  }, [parts]);

  const categories = ['All', ...Object.keys(categoryStats).sort()];

  const handleCategoryToggle = (category: string) => {
    if (category === 'All') {
      onCategoryChange([]);
    } else if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const handleClearAll = () => {
    onCategoryChange([]);
  };

  const isAllSelected = selectedCategories.length === 0;
  const selectedCount = selectedCategories.length;

  return (
    <div className="mb-6">
      {/* Filter Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-border rounded-lg hover:bg-gray-50 transition-colors"
        style={{ borderColor: 'oklch(0.88 0.008 90)' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="font-semibold text-sm uppercase tracking-wide"
            style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
          >
            按分类筛选
          </span>
          {selectedCount > 0 && (
            <span
              className="px-2 py-0.5 text-xs font-bold text-white rounded-full"
              style={{ background: 'oklch(0.68 0.18 42)' }}
            >
              {selectedCount}
            </span>
          )}
        </div>
        <ChevronDown
          size={18}
          className="transition-transform"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: 'oklch(0.45 0.02 265)',
          }}
        />
      </button>

      {/* Filter Content */}
      {isOpen && (
        <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-border" style={{ borderColor: 'oklch(0.88 0.008 90)' }}>
          {/* Selected Categories Display */}
          {selectedCount > 0 && (
            <div className="mb-4 pb-4 border-b border-border" style={{ borderColor: 'oklch(0.88 0.008 90)' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold" style={{ color: 'oklch(0.45 0.02 265)' }}>
                  已选筛选
                </span>
                <button
                  onClick={handleClearAll}
                  className="text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-1"
                >
                  <X size={12} />
                  清除全部
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map((cat) => (
                  <div
                    key={cat}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full text-white"
                    style={{ background: 'oklch(0.68 0.18 42)' }}
                  >
                    {cat}
                    <button
                      onClick={() => handleCategoryToggle(cat)}
                      className="hover:opacity-80 transition-opacity"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {categories.map((cat) => {
              const count = cat === 'All' ? parts.length : categoryStats[cat] || 0;
              const isSelected = cat === 'All' ? isAllSelected : selectedCategories.includes(cat);

              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryToggle(cat)}
                  className="flex items-center justify-between px-3 py-2.5 text-xs font-semibold uppercase tracking-wider rounded transition-all"
                  style={{
                    fontFamily: 'var(--font-display)',
                    background: isSelected ? 'oklch(0.68 0.18 42)' : 'white',
                    color: isSelected ? 'white' : 'oklch(0.45 0.02 265)',
                    border: `1px solid ${isSelected ? 'oklch(0.68 0.18 42)' : 'oklch(0.88 0.008 90)'}`,
                  }}
                >
                  <span>{cat}</span>
                  <span
                    className="ml-2 px-1.5 py-0.5 rounded text-xs font-bold"
                    style={{
                      background: isSelected ? 'rgba(255,255,255,0.2)' : 'oklch(0.97 0.005 90)',
                      color: isSelected ? 'white' : 'oklch(0.45 0.02 265)',
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Summary */}
          <div className="mt-4 pt-4 border-t border-border" style={{ borderColor: 'oklch(0.88 0.008 90)' }}>
            <p className="text-xs" style={{ color: 'oklch(0.45 0.02 265)' }}>
              Showing{' '}
              <span className="font-semibold" style={{ color: 'oklch(0.18 0.04 265)' }}>
                {selectedCount === 0 ? parts.length : parts.filter((p) => selectedCategories.includes(p.category)).length}
              </span>
              {' '}of{' '}
              <span className="font-semibold" style={{ color: 'oklch(0.18 0.04 265)' }}>
                {parts.length}
              </span>
              {' '}parts
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
