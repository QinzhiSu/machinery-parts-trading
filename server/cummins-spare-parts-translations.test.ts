import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  getTranslatedCumminsSparePartCategory,
  getTranslatedCumminsSparePartName,
} from "../client/src/data/sparePartsTranslations_cummins";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const nonChineseLanguages = supportedLanguages.filter(language => language !== "zh" && language !== "ja");
const chineseCharacters = /[\u4E00-\u9FFF]/;

function loadCumminsSourceParts() {
  const productsFile = path.resolve(process.cwd(), "client/src/data/products.ts");
  const source = fs.readFileSync(productsFile, "utf8");
  const partPattern = /id: 'cm-sp-[^']+', partNumber: '[^']+', name: '([^']+)', description: [\s\S]*? category: '([^']+)'/g;
  return [...source.matchAll(partPattern)].map(([, name, category]) => ({ name, category }));
}

describe("Cummins spare-parts name and category translations", () => {
  const parts = loadCumminsSourceParts();

  it("covers all Cummins source parts", () => {
    expect(parts).toHaveLength(33);
  });

  it("returns non-empty names and categories for every supported language", () => {
    for (const part of parts) {
      for (const language of supportedLanguages) {
        expect(getTranslatedCumminsSparePartName(part.name, language)).toBeTruthy();
        expect(getTranslatedCumminsSparePartCategory(part.category, language)).toBeTruthy();
      }
    }
  });

  it("does not retain Chinese source text in non-Chinese list languages", () => {
    for (const part of parts) {
      for (const language of nonChineseLanguages) {
        expect(getTranslatedCumminsSparePartName(part.name, language)).not.toMatch(chineseCharacters);
        expect(getTranslatedCumminsSparePartCategory(part.category, language)).not.toMatch(chineseCharacters);
      }
    }
  });
});
