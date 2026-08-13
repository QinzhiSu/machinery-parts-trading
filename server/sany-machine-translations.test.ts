import { describe, expect, it } from "vitest";
import { brands } from "../client/src/data/products";
import {
  getTranslatedSanyMachineTitle,
  getTranslatedSanyMachineType,
  sanyMachineDescriptionTranslations,
  sanyMachineSpecsTranslations,
  sanyMachineTranslations,
  sanyMachineTypeTranslations,
} from "../client/src/data/sanyMachineTranslations";

const sany = brands.find((brand) => brand.id === "sany");
const prohibitedEnglish = /\b(?:Mini|Small|Medium|Large|Extra-Large|Compact|bucket|blade|width|boom|Vibratory Roller|Truck Crane|Concrete Pump|Backhoe Loader|Motor Grader|fuel|design|efficiency|smooth|and|work|road|project|capacity|depth|height|hydraulic|advanced|powerful|excellent|large)\b/i;

describe("SANY machine translations", () => {
  it("covers all 24 actual machines in Japanese and German without source-key fallback", () => {
    expect(sany?.machines).toHaveLength(24);
    expect(Object.keys(sanyMachineTranslations)).toHaveLength(24);
    expect(Object.keys(sanyMachineSpecsTranslations)).toHaveLength(24);
    expect(Object.keys(sanyMachineDescriptionTranslations)).toHaveLength(24);

    for (const machine of sany?.machines ?? []) {
      const titleKey = `SANY ${machine.model}`;
      for (const language of ["ja", "de"] as const) {
        expect(getTranslatedSanyMachineTitle(titleKey, language)).not.toBe(titleKey);
        expect(getTranslatedSanyMachineType(machine.name, language)).not.toBe(machine.name);
        expect(sanyMachineSpecsTranslations[machine.model]?.[language]).toBeTruthy();
        expect(sanyMachineDescriptionTranslations[machine.model]?.[language]).toBeTruthy();
      }
    }
  });

  it("uses localized Japanese and German machine, category, parameter, and detail terminology", () => {
    expect(getTranslatedSanyMachineTitle("SANY SY35U", "ja")).toBe("SANY SY35U ミニ油圧ショベル");
    expect(getTranslatedSanyMachineTitle("SANY STC250T5", "de")).toBe("SANY STC250T5 Autokran");
    expect(getTranslatedSanyMachineType("Vibratory Roller", "ja")).toBe("振動ローラー");
    expect(getTranslatedSanyMachineType("Concrete Pump", "de")).toBe("Betonpumpe");
    expect(sanyMachineSpecsTranslations.SY35U.ja).toContain("バケット容量");
    expect(sanyMachineSpecsTranslations.GD220J.de).toContain("Planierschildbreite");
    expect(sanyMachineSpecsTranslations.STC1200T7.ja).toContain("最大ブーム長");
    expect(sanyMachineDescriptionTranslations.SY35U.de).toContain("kompakte Bauweise");
    expect(sanyMachineDescriptionTranslations.STC250T5.ja).toContain("トラッククレーン");
  });

  it("has no prohibited English equipment terms or sentence fragments in Japanese and German fields", () => {
    for (const machine of sany?.machines ?? []) {
      const titleKey = `SANY ${machine.model}`;
      const fields = [
        sanyMachineTranslations[titleKey].ja,
        sanyMachineTranslations[titleKey].de,
        sanyMachineTypeTranslations[machine.name].ja,
        sanyMachineTypeTranslations[machine.name].de,
        sanyMachineSpecsTranslations[machine.model].ja,
        sanyMachineSpecsTranslations[machine.model].de,
        sanyMachineDescriptionTranslations[machine.model].ja,
        sanyMachineDescriptionTranslations[machine.model].de,
      ];
      for (const field of fields) {
        expect(field).not.toMatch(prohibitedEnglish);
      }
    }
  });
});
