import { describe, expect, it } from 'vitest';
import { brands } from '../client/src/data/products';
import {
  getTranslatedLiuGongMachineDescription,
  getTranslatedLiuGongMachineName,
  getTranslatedLiuGongMachineSpecs,
  getTranslatedLiuGongMachineType,
} from '../client/src/data/liugongMachineTranslations';

const languages = ['en', 'zh', 'es', 'fr', 'de', 'pt', 'ru', 'ja', 'ar', 'it'] as const;
const liugongMachines = brands.find((brand) => brand.id === 'liugong')?.machines ?? [];
const bulldozerModels = ['DW105AE', 'TD16N', 'de100c', 'dw90'];

describe('LiuGong machine translations', () => {
  it('covers all 21 actual models in all ten languages', () => {
    expect(liugongMachines).toHaveLength(21);
    for (const machine of liugongMachines) {
      for (const language of languages) {
        expect(getTranslatedLiuGongMachineName(machine.model, language)).toBeTruthy();
        expect(getTranslatedLiuGongMachineType(machine.model, language)).toBeTruthy();
        expect(getTranslatedLiuGongMachineSpecs(machine.model, language)).toBeTruthy();
        expect(getTranslatedLiuGongMachineDescription(machine.model, language)).toBeTruthy();
      }
    }
  });

  it('uses Planierraupe and Planierschild for the four German bulldozer variants', () => {
    for (const model of bulldozerModels) {
      expect(getTranslatedLiuGongMachineType(model, 'de')).toBe('Planierraupe');
      expect(getTranslatedLiuGongMachineSpecs(model, 'de')).toContain('Planierschild');
      expect(getTranslatedLiuGongMachineDescription(model, 'de')).toContain('Planierraupe');
      expect(getTranslatedLiuGongMachineDescription(model, 'de')).not.toContain('Schaufelbreite');
    }
  });

  it('removes mixed Japanese units and Chinese fragments from all machine specs and descriptions', () => {
    const forbidden = /\b(?:HP|kW|kg)\b|m³|重型|リフティング/;
    for (const machine of liugongMachines) {
      expect(getTranslatedLiuGongMachineSpecs(machine.model, 'ja')).not.toMatch(forbidden);
      expect(getTranslatedLiuGongMachineDescription(machine.model, 'ja')).not.toMatch(forbidden);
    }
  });

  it('removes English bulldozer, blade and boom labels from Italian translations', () => {
    const forbidden = /Bulldozer|Blade|Max Boom|flèche/;
    for (const model of bulldozerModels) {
      expect(getTranslatedLiuGongMachineName(model, 'it')).toBe('LiuGong ' + model + ' Apripista');
      expect(getTranslatedLiuGongMachineSpecs(model, 'it')).not.toMatch(forbidden);
      expect(getTranslatedLiuGongMachineDescription(model, 'it')).not.toMatch(forbidden);
    }
    expect(getTranslatedLiuGongMachineSpecs('ltc900t5', 'it')).toContain('Braccio massimo');
    expect(getTranslatedLiuGongMachineDescription('ltc900t5', 'it')).not.toMatch(forbidden);
  });
});
