import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  getTranslatedToyotaSparePartCategory,
  getTranslatedToyotaSparePartDescription,
  getTranslatedToyotaSparePartName,
} from "../client/src/data/sparePartsTranslations_toyota";
import { toyotaPartDetailsTranslations } from "../client/src/data/sparePartsDetails_toyota";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const nonChineseLanguages = supportedLanguages.filter(language => language !== "zh" && language !== "ja");
const chineseCharacters = /[\u4E00-\u9FFF]/;

function loadToyotaSourceParts() {
  const productsFile = path.resolve(process.cwd(), "client/src/data/products.ts");
  const source = fs.readFileSync(productsFile, "utf8");
  const partPattern = /id: 'toyota-sp-[^']+', partNumber: '[^']+', name: '([^']+)', description: [\s\S]*? category: '([^']+)'/g;
  return [...source.matchAll(partPattern)].map(([, name, category]) => ({ name, category }));
}

describe("Toyota spare-parts name and category translations", () => {
  const parts = loadToyotaSourceParts();

  it("covers all Toyota source parts", () => {
    expect(parts).toHaveLength(30);
  });

  it("returns non-empty names and categories for every supported language", () => {
    for (const part of parts) {
      for (const language of supportedLanguages) {
        expect(getTranslatedToyotaSparePartName(part.name, language)).toBeTruthy();
        expect(getTranslatedToyotaSparePartCategory(part.category, language)).toBeTruthy();
      }
    }
  });

  it("does not return Chinese source text for non-Chinese list languages", () => {
    for (const part of parts) {
      for (const language of nonChineseLanguages) {
        expect(getTranslatedToyotaSparePartName(part.name, language)).not.toMatch(chineseCharacters);
        expect(getTranslatedToyotaSparePartCategory(part.category, language)).not.toMatch(chineseCharacters);
      }
    }
  });

  it("routes every live part to a dedicated ten-language list and modal description", () => {
    for (const part of parts) {
      for (const language of supportedLanguages) {
        const description = getTranslatedToyotaSparePartDescription(part.name, language);
        const genericFallback = toyotaPartDetailsTranslations.default[language as keyof typeof toyotaPartDetailsTranslations.default];
        expect(description).toBeTruthy();
        expect(description).not.toBe(genericFallback);
      }
    }
  });
});
