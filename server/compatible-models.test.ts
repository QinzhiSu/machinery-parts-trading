import { describe, it, expect } from 'vitest';
import { brands } from '../client/src/data/products';

describe('Compatible Models Feature', () => {
  it('should have compatibleModels field in spare parts', () => {
    let partsWithModels = 0;
    let totalParts = 0;

    brands.forEach((brand) => {
      brand.spareParts.forEach((part) => {
        totalParts++;
        if (part.compatibleModels && part.compatibleModels.length > 0) {
          partsWithModels++;
        }
      });
    });

    expect(totalParts).toBeGreaterThan(200);
    expect(partsWithModels).toBeGreaterThan(200);
    console.log(`✓ ${partsWithModels}/${totalParts} spare parts have compatible models`);
  });

  it('should display compatible models for Isuzu parts', () => {
    const isuzu = brands.find((b) => b.id === 'isuzu');
    expect(isuzu).toBeDefined();

    if (isuzu) {
      const oilFilter = isuzu.spareParts.find((p) => p.partNumber === '8-97602-428-0');
      expect(oilFilter).toBeDefined();
      expect(oilFilter?.compatibleModels).toBeDefined();
      expect(oilFilter?.compatibleModels?.length).toBeGreaterThan(0);
      expect(oilFilter?.compatibleModels).toContain('NPR');
    }
  });

  it('should display compatible models for Shacman parts', () => {
    const shacman = brands.find((b) => b.id === 'shacman');
    expect(shacman).toBeDefined();

    if (shacman) {
      const spareParts = shacman.spareParts.filter((p) => p.compatibleModels && p.compatibleModels.length > 0);
      expect(spareParts.length).toBeGreaterThan(0);
      console.log(`✓ Shacman has ${spareParts.length} parts with compatible models`);
    }
  });

  it('should display compatible models for Sinotruk parts', () => {
    const sinotruk = brands.find((b) => b.id === 'sinotruk');
    expect(sinotruk).toBeDefined();

    if (sinotruk) {
      const spareParts = sinotruk.spareParts.filter((p) => p.compatibleModels && p.compatibleModels.length > 0);
      expect(spareParts.length).toBeGreaterThan(0);
      console.log(`✓ Sinotruk has ${spareParts.length} parts with compatible models`);
    }
  });

  it('should display compatible models for Toyota parts', () => {
    const toyota = brands.find((b) => b.id === 'toyota');
    expect(toyota).toBeDefined();

    if (toyota) {
      const spareParts = toyota.spareParts.filter((p) => p.compatibleModels && p.compatibleModels.length > 0);
      expect(spareParts.length).toBeGreaterThan(0);
      console.log(`✓ Toyota has ${spareParts.length} parts with compatible models`);
    }
  });

  it('should have valid model names in compatibleModels', () => {
    brands.forEach((brand) => {
      brand.spareParts.forEach((part) => {
        if (part.compatibleModels) {
          part.compatibleModels.forEach((model) => {
            expect(model).toBeTruthy();
            expect(typeof model).toBe('string');
            expect(model.length).toBeGreaterThan(0);
          });
        }
      });
    });
  });
});
