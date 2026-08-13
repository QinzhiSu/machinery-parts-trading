import { describe, expect, it } from 'vitest';
import { brands } from '../client/src/data/products';
import {
  getTranslatedShacmanSparePartCategory,
  getTranslatedShacmanSparePartDescription,
  getTranslatedShacmanSparePartName,
} from '../client/src/data/sparePartsTranslations_shacman';
import { getTranslatedShacmanSparePartDetails } from '../client/src/data/sparePartsDetails_shacman';

const languages = ['en', 'zh', 'es', 'fr', 'de', 'pt', 'ru', 'ja', 'ar', 'it'] as const;
const shacmanParts = brands.find((brand) => brand.id === 'shacman')?.spareParts ?? [];

describe('Shacman spare-parts translations', () => {
  it('covers all 31 actual part names and categories in all ten languages', () => {
    expect(shacmanParts).toHaveLength(31);
    for (const part of shacmanParts) {
      for (const language of languages) {
        expect(getTranslatedShacmanSparePartName(part.name, language)).toBeTruthy();
        expect(getTranslatedShacmanSparePartCategory(part.category, language)).toBeTruthy();
      }
    }
  });

  it('resolves list descriptions and details for every actual source name without empty or generic detail fallback', () => {
    for (const part of shacmanParts) {
      for (const language of languages) {
        const listDescription = getTranslatedShacmanSparePartDescription(part.name, language);
        const detail = getTranslatedShacmanSparePartDetails(part.name, language);
        expect(listDescription.trim().length).toBeGreaterThan(10);
        expect(detail).toBe(listDescription);
        expect(detail).not.toContain('OEM quality part');
      }
    }
  });

  it('maps the Chinese turbocharger and filter source names to their corresponding independent translations', () => {
    expect(getTranslatedShacmanSparePartName('涡轮增压器总成', 'de')).toBe('Turbolader-Baugruppe');
    expect(getTranslatedShacmanSparePartDetails('柴油滤芯', 'ja')).toContain('ディーゼル');
    expect(getTranslatedShacmanSparePartDetails('涡轮增压器进气管', 'de')).toContain('Turbolader');
  });
});
