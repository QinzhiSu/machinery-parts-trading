import React from 'react';
import { X } from 'lucide-react';
import { useComparison } from '@/contexts/ComparisonContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ComparisonPanel() {
  const { comparedParts, removeFromComparison, clearComparison } = useComparison();
  const { t } = useLanguage();

  if (comparedParts.length === 0) {
    return null;
  }

  // Get all unique specifications keys
  const allSpecKeys = new Set<string>();
  comparedParts.forEach(part => {
    if (part.compatibleModels) {
      part.compatibleModels.forEach(() => allSpecKeys.add('compatibleModels'));
    }
    allSpecKeys.add('category');
    allSpecKeys.add('description');
  });

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-2xl max-h-96 overflow-y-auto bg-white rounded-lg shadow-lg border border-border">
      <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
        <h3 className="font-bold text-sm uppercase tracking-wide">配件对比 ({comparedParts.length})</h3>
        <button
          onClick={clearComparison}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          清空对比
        </button>
      </div>

      <div className="overflow-x-auto p-4">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-2 font-semibold">规格</th>
              {comparedParts.map(part => (
                <th key={part.id} className="text-left p-2 font-semibold min-w-32">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-bold">{part.partNumber}</div>
                      <div className="text-muted-foreground">{part.name}</div>
                    </div>
                    <button
                      onClick={() => removeFromComparison(part.id)}
                      className="p-1 hover:bg-muted rounded transition-colors"
                      title="移除"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-2 font-semibold">分类</td>
              {comparedParts.map(part => (
                <td key={part.id} className="p-2">
                  {part.category}
                </td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <td className="p-2 font-semibold">描述</td>
              {comparedParts.map(part => (
                <td key={part.id} className="p-2">
                  <div className="line-clamp-2">{part.description}</div>
                </td>
              ))}
            </tr>
            {comparedParts.some(p => p.compatibleModels && p.compatibleModels.length > 0) && (
              <tr className="border-b border-border">
                <td className="p-2 font-semibold">适用车型</td>
                {comparedParts.map(part => (
                  <td key={part.id} className="p-2">
                    {part.compatibleModels && part.compatibleModels.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {part.compatibleModels.slice(0, 3).map(model => (
                          <span
                            key={model}
                            className="px-1.5 py-0.5 bg-muted rounded text-xs"
                          >
                            {model}
                          </span>
                        ))}
                        {part.compatibleModels.length > 3 && (
                          <span className="text-muted-foreground text-xs">
                            +{part.compatibleModels.length - 3}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
