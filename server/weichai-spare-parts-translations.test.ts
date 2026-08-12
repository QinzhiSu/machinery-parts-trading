import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  getTranslatedWeichaiSparePartCategory,
  getTranslatedWeichaiSparePartDescription,
  getTranslatedWeichaiSparePartName,
} from "../client/src/data/sparePartsTranslations_weichai";
import { getTranslatedWeichaiSparePartDetails } from "../client/src/data/sparePartsDetails_weichai";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const nonChineseLanguages = supportedLanguages.filter(language => language !== "zh" && language !== "ja");
const chineseCharacters = /[\u4E00-\u9FFF]/;

function loadWeichaiSourceParts() {
  const productsFile = path.resolve(process.cwd(), "client/src/data/products.ts");
  const source = fs.readFileSync(productsFile, "utf8");
  const partPattern = /id: 'weichai-sp-[^']+', partNumber: '[^']+', name: '([^']+)', description: [\s\S]*? category: '([^']+)'/g;
  return [...source.matchAll(partPattern)].map(([, name, category]) => ({ name, category }));
}

describe("Weichai spare-parts translations", () => {
  const parts = loadWeichaiSourceParts();

  it("covers all 30 actual Weichai spare parts", () => {
    expect(parts).toHaveLength(30);
  });

  it("returns a non-empty name, category, and detailed description in every supported language", () => {
    for (const part of parts) {
      for (const language of supportedLanguages) {
        expect(getTranslatedWeichaiSparePartName(part.name, language)).toBeTruthy();
        expect(getTranslatedWeichaiSparePartCategory(part.category, language)).toBeTruthy();
        expect(getTranslatedWeichaiSparePartDetails(part.name, language)).toBeTruthy();
      }
    }
  });

  it("does not retain Chinese source names or categories in non-Chinese list languages", () => {
    for (const part of parts) {
      for (const language of nonChineseLanguages) {
        expect(getTranslatedWeichaiSparePartName(part.name, language)).not.toMatch(chineseCharacters);
        expect(getTranslatedWeichaiSparePartCategory(part.category, language)).not.toMatch(chineseCharacters);
        expect(getTranslatedWeichaiSparePartDetails(part.name, language)).not.toMatch(chineseCharacters);
      }
    }
  });

  it("uses the same independent detailed description for the list and modal paths", () => {
    for (const part of parts) {
      for (const language of supportedLanguages) {
        expect(getTranslatedWeichaiSparePartDescription(part.name, language)).toBe(
          getTranslatedWeichaiSparePartDetails(part.name, language),
        );
      }
    }
  });
});
