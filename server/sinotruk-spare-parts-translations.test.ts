import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  getTranslatedSinotrukSparePartDescription,
  getTranslatedSinotrukSparePartCategory,
  getTranslatedSinotrukSparePartName,
  sinotrukCategoryTranslations,
  sinotrukNameTranslations,
} from "../client/src/data/sparePartsTranslations_sinotruk";
import {
  getTranslatedSinotrukSparePartDetails,
  sinotrukPartDetailsTranslations,
} from "../client/src/data/sparePartsDetails_sinotruk";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"] as const;
const nonChineseLanguages = supportedLanguages.filter(language => language !== "zh" && language !== "ja");
const chineseCharacters = /[\u4E00-\u9FFF]/;

function loadSinotrukSourceParts() {
  const productsFile = path.resolve(process.cwd(), "client/src/data/products.ts");
  const source = fs.readFileSync(productsFile, "utf8");
  const partPattern = /id: 'sinotruk-sp-[^']+', partNumber: '[^']+', name: '([^']+)', description: [\s\S]*? category: '([^']+)'/g;

  return [...source.matchAll(partPattern)].map(([, name, category]) => ({ name, category }));
}

describe("Sinotruk spare-parts translations", () => {
  const parts = loadSinotrukSourceParts();

  it("covers every source spare-part name and category key", () => {
    expect(parts).toHaveLength(43);

    for (const part of parts) {
      expect(sinotrukNameTranslations[part.name as keyof typeof sinotrukNameTranslations]).toBeDefined();
      expect(sinotrukCategoryTranslations[part.category as keyof typeof sinotrukCategoryTranslations]).toBeDefined();
    }
  });

  it("provides a non-empty value for every supported language", () => {
    for (const part of parts) {
      const nameTranslations = sinotrukNameTranslations[part.name as keyof typeof sinotrukNameTranslations];
      const categoryTranslations = sinotrukCategoryTranslations[part.category as keyof typeof sinotrukCategoryTranslations];

      for (const language of supportedLanguages) {
        expect(nameTranslations[language]).toBeTruthy();
        expect(categoryTranslations[language]).toBeTruthy();
      }
    }
  });

  it("does not return Chinese source text for non-Chinese list languages", () => {
    for (const part of parts) {
      for (const language of nonChineseLanguages) {
        expect(getTranslatedSinotrukSparePartName(part.name, language)).not.toMatch(chineseCharacters);
        expect(getTranslatedSinotrukSparePartCategory(part.category, language)).not.toMatch(chineseCharacters);
      }
    }
  });

  it("maps every actual source name to a specific ten-language list description and detail modal text", () => {
    const fallbackKeys: string[] = [];
    for (const part of parts) {
      for (const language of supportedLanguages) {
        const defaultDetail = sinotrukPartDetailsTranslations.default[language];
        const listDescription = getTranslatedSinotrukSparePartDescription(part.name, language);
        const modalDetail = getTranslatedSinotrukSparePartDetails(part.name, language);

        expect(listDescription).toBeTruthy();
        expect(modalDetail).toBeTruthy();
        expect(listDescription).toBe(modalDetail);
        if (modalDetail === defaultDetail) {
          fallbackKeys.push(`${part.name} (${language})`);
        }
      }
    }
    expect(fallbackKeys).toEqual([]);
  });

  it("keeps Japanese part details free of raw English technical labels", () => {
    const rawEnglishLabels = /\b(?:Oil Filter|Air Filter|Brake|Clutch|Drive Shaft|Water Pump|Turbocharger|Hydraulic)\b/;
    for (const part of parts) {
      expect(getTranslatedSinotrukSparePartDetails(part.name, "ja")).not.toMatch(rawEnglishLabels);
    }
  });
});
