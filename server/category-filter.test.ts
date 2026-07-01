import { describe, it, expect } from 'vitest';
import { brands } from '../client/src/data/products';

describe('Category Filter Feature', () => {
  it('should have categories for all spare parts', () => {
    brands.forEach((brand) => {
      brand.spareParts.forEach((part) => {
        expect(part.category).toBeTruthy();
        expect(typeof part.category).toBe('string');
        expect(part.category.length).toBeGreaterThan(0);
      });
    });
  });

  it('should have multiple categories per brand', () => {
    brands.forEach((brand) => {
      const categories = new Set(brand.spareParts.map((p) => p.category));
      expect(categories.size).toBeGreaterThan(1);
      console.log(`✓ ${brand.name} has ${categories.size} categories`);
    });
  });

  it('should filter parts correctly by category', () => {
    const isuzu = brands.find((b) => b.id === 'isuzu');
    expect(isuzu).toBeDefined();

    if (isuzu) {
      const engineParts = isuzu.spareParts.filter((p) => p.category === 'Engine System');
      expect(engineParts.length).toBeGreaterThan(0);
      console.log(`✓ Isuzu has ${engineParts.length} Engine System parts`);

      const coolingParts = isuzu.spareParts.filter((p) => p.category === 'Cooling System');
      expect(coolingParts.length).toBeGreaterThan(0);
      console.log(`✓ Isuzu has ${coolingParts.length} Cooling System parts`);
    }
  });

  it('should have category statistics for all brands', () => {
    brands.forEach((brand) => {
      const categoryStats: Record<string, number> = {};
      brand.spareParts.forEach((part) => {
        categoryStats[part.category] = (categoryStats[part.category] || 0) + 1;
      });

      const totalParts = Object.values(categoryStats).reduce((a, b) => a + b, 0);
      expect(totalParts).toBe(brand.spareParts.length);

      console.log(`✓ ${brand.name}: ${Object.keys(categoryStats).length} categories, ${totalParts} parts`);
      Object.entries(categoryStats).forEach(([cat, count]) => {
        console.log(`  - ${cat}: ${count} parts`);
      });
    });
  });

  it('should support multi-category filtering', () => {
    const shacman = brands.find((b) => b.id === 'shacman');
    expect(shacman).toBeDefined();

    if (shacman) {
      const categories = new Set(shacman.spareParts.map((p) => p.category));
      const selectedCategories = Array.from(categories).slice(0, 2);

      const filteredParts = shacman.spareParts.filter((p) => selectedCategories.includes(p.category));
      expect(filteredParts.length).toBeGreaterThan(0);
      expect(filteredParts.length).toBeLessThan(shacman.spareParts.length);

      console.log(`✓ Filtering Shacman by ${selectedCategories.length} categories: ${filteredParts.length} parts`);
    }
  });

  it('should clear category filter to show all parts', () => {
    const toyota = brands.find((b) => b.id === 'toyota');
    expect(toyota).toBeDefined();

    if (toyota) {
      // Filter by one category
      const engineParts = toyota.spareParts.filter((p) => p.category === 'Engine System');
      expect(engineParts.length).toBeGreaterThan(0);
      expect(engineParts.length).toBeLessThan(toyota.spareParts.length);

      // Clear filter to show all
      const allParts = toyota.spareParts;
      expect(allParts.length).toBeGreaterThan(engineParts.length);

      console.log(`✓ Toyota: ${engineParts.length} Engine parts, ${allParts.length} total parts`);
    }
  });
});
