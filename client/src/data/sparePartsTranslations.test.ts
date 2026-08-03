import { describe, it, expect } from 'vitest';
import { sparePartNameTranslations, getTranslatedShantuiSparePartDescription, getTranslatedShantuiSparePartCategory, shantuiSparePartCategoryTranslations } from './sparePartsTranslations';

describe('sparePartsTranslations', () => {
  it('should have valid spare part name translations', () => {
    expect(sparePartNameTranslations).toBeDefined();
    expect(Object.keys(sparePartNameTranslations).length).toBeGreaterThan(0);
  });

  it('should translate spare part names correctly', () => {
    const fuelFilter = sparePartNameTranslations['燃油滤芯'];
    expect(fuelFilter).toBeDefined();
    expect(fuelFilter.en).toBe('Fuel Filter');
    expect(fuelFilter.es).toBe('Filtro de combustible');
  });

  it('should translate Shantui spare part descriptions correctly', () => {
    const result = getTranslatedShantuiSparePartDescription('Fuel Filter', 'en');
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
  });

  it('should translate Shantui spare part categories correctly', () => {
    const result = getTranslatedShantuiSparePartCategory('保养/滤清系统', 'en');
    expect(result).toBe('Maintenance/Filtration System');
  });

  it('should have valid Shantui spare part category translations', () => {
    expect(shantuiSparePartCategoryTranslations).toBeDefined();
    expect(Object.keys(shantuiSparePartCategoryTranslations).length).toBeGreaterThan(0);
  });
});
