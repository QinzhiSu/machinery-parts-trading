import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SparePart } from '@/data/products';

interface ComparisonContextType {
  comparedParts: SparePart[];
  addToComparison: (part: SparePart) => void;
  removeFromComparison: (partId: string) => void;
  clearComparison: () => void;
  isComparing: (partId: string) => boolean;
  maxComparisons: number;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [comparedParts, setComparedParts] = useState<SparePart[]>([]);
  const maxComparisons = 4;

  const addToComparison = (part: SparePart) => {
    if (comparedParts.length < maxComparisons && !comparedParts.find(p => p.id === part.id)) {
      setComparedParts([...comparedParts, part]);
    }
  };

  const removeFromComparison = (partId: string) => {
    setComparedParts(comparedParts.filter(p => p.id !== partId));
  };

  const clearComparison = () => {
    setComparedParts([]);
  };

  const isComparing = (partId: string) => {
    return comparedParts.some(p => p.id === partId);
  };

  return (
    <ComparisonContext.Provider
      value={{
        comparedParts,
        addToComparison,
        removeFromComparison,
        clearComparison,
        isComparing,
        maxComparisons,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error('useComparison must be used within ComparisonProvider');
  }
  return context;
}
