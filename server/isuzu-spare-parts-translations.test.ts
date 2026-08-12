import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  getTranslatedIsuzuSparePartCategory,
  getTranslatedIsuzuSparePartName,
} from "../client/src/data/sparePartsTranslations_isuzu";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const nonChineseLanguages = supportedLanguages.filter(language => language !== "zh" && language !== "ja");
const chineseCharacters = /[\u4E00-\u9FFF]/;

function loadIsuzuSourceParts() {
  const productsFile = path.resolve(process.cwd(), "client/src/data/products.ts");
  const source = fs.readFileSync(productsFile, "utf8");
  const partPattern = /id: 'isuzu-sp-[^']+', partNumber: '[^']+', name: '([^']+)', description: [\s\S]*? category: '([^']+)'/g;
  return [...source.matchAll(partPattern)].map(([, name, category]) => ({ name, category }));
}

describe("Isuzu spare-parts name and category translations", () => {
  const parts = loadIsuzuSourceParts();

  it("covers all Isuzu source parts", () => {
    expect(parts).toHaveLength(37);
  });

  it("returns non-empty names and categories for every supported language", () => {
    for (const part of parts) {
      for (const language of supportedLanguages) {
        expect(getTranslatedIsuzuSparePartName(part.name, language)).toBeTruthy();
        expect(getTranslatedIsuzuSparePartCategory(part.category, language)).toBeTruthy();
      }
    }
  });

  it("does not return Chinese source text for non-Chinese list languages", () => {
    for (const part of parts) {
      for (const language of nonChineseLanguages) {
        expect(getTranslatedIsuzuSparePartName(part.name, language)).not.toMatch(chineseCharacters);
        expect(getTranslatedIsuzuSparePartCategory(part.category, language)).not.toMatch(chineseCharacters);
      }
    }
  });
});
