import { describe, expect, it } from "vitest";
import { brands } from "../client/src/data/products";
import {
  getTranslatedXCMGMachineDescription,
  getTranslatedXCMGMachineFullName,
  getTranslatedXCMGMachineSpecs,
  getTranslatedXCMGMachineType,
  xcmgMachineDescriptions,
  xcmgMachineSpecsTranslations,
  xcmgMachineTranslations,
} from "../client/src/data/xcmgMachineTranslations";

const xcmg = brands.find((brand) => brand.id === "xcmg");
const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const japaneseCharacters = /[\u3040-\u30ff]/u;
const residualEnglishByLanguage = {
  ja: /\b(?:bucket|blade|boom|drum|depth|Electric|System|equivalent|Large|Mid-Size|Mobile|Truck|Crawler|Grader|Hydraulic|HP)\b/i,
  de: /\b(?:bucket|blade|boom|drum|depth|Electric|equivalent|Large|Mid-Size|Mobile|Truck|Crawler|Grader|Hydraulic)\b/i,
};

describe("XCMG machine translations", () => {
  it("covers all 16 actual XCMG machines in every language", () => {
    expect(xcmg?.machines).toHaveLength(16);
    expect(Object.keys(xcmgMachineTranslations)).toHaveLength(16);
    expect(Object.keys(xcmgMachineDescriptions)).toHaveLength(16);
    for (const translations of [...Object.values(xcmgMachineTranslations), ...Object.values(xcmgMachineDescriptions), ...Object.values(xcmgMachineSpecsTranslations)]) {
      for (const language of supportedLanguages) expect(translations[language]).toBeTruthy();
    }
  });

  it("returns pure Japanese and German names, types, specifications, and descriptions", () => {
    for (const machine of xcmg?.machines ?? []) {
      for (const language of ["ja", "de"] as const) {
        const values = [
          getTranslatedXCMGMachineFullName(machine.name, language),
          getTranslatedXCMGMachineType(machine.name, language),
          getTranslatedXCMGMachineSpecs(machine.specs, language),
          getTranslatedXCMGMachineDescription(machine.description, language),
        ];
        for (const value of values) {
          expect(value).not.toMatch(residualEnglishByLanguage[language]);
          if (language === "de") expect(value).not.toMatch(japaneseCharacters);
        }
      }
    }
  });

  it("uses localized Japanese and German machine terminology for the known problem fields", () => {
    expect(getTranslatedXCMGMachineSpecs("15.5 ton | 80 kW | 0.65 m³ bucket", "ja")).toContain("m³ バケット");
    expect(getTranslatedXCMGMachineSpecs("22 ton | 155 kW | 3.7 m blade", "de")).toContain("m Planierschild");
    expect(getTranslatedXCMGMachineFullName("Hydraulic Bulldozer", "ja")).toContain("油圧ブルドーザー");
    expect(getTranslatedXCMGMachineFullName("Hydraulic Bulldozer", "de")).toContain("Hydraulischer Bulldozer");
    expect(getTranslatedXCMGMachineDescription(xcmg?.machines[7]?.description ?? "", "ja")).toContain("電動モーターシステム");
  });
});
