import { describe, expect, it } from "vitest";
import { shantuiSpareParts } from "../client/src/data/products_shantui";
import {
  getTranslatedShantuiSparePartCategory,
  getTranslatedShantuiSparePartDescription,
  getTranslatedShantuiSparePartName,
} from "../client/src/data/sparePartsTranslations_shantui";
import { getTranslatedShantuiSparePartDetails } from "../client/src/data/sparePartsDetails_shantui";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const defaultDetails = "OEM quality part. Contact us for detailed specifications and pricing.";
const chineseCharacters = /[\u4e00-\u9fff]/u;

describe("Shantui spare-parts translations", () => {
  it("resolves all 40 actual source names, categories, and details in ten languages", () => {
    expect(shantuiSpareParts).toHaveLength(40);
    for (const part of shantuiSpareParts) {
      for (const language of supportedLanguages) {
        expect(getTranslatedShantuiSparePartName(part.name, language)).toBeTruthy();
        expect(getTranslatedShantuiSparePartCategory(part.category, language)).toBeTruthy();
        expect(getTranslatedShantuiSparePartDetails(part.name, language)).not.toBe(defaultDetails);
      }
    }
  });

  it("does not return Chinese source names or categories for non-Chinese languages", () => {
    for (const part of shantuiSpareParts) {
      for (const language of supportedLanguages.filter((item) => item !== "zh" && item !== "ja")) {
        expect(getTranslatedShantuiSparePartName(part.name, language)).not.toMatch(chineseCharacters);
        expect(getTranslatedShantuiSparePartCategory(part.category, language)).not.toMatch(chineseCharacters);
        expect(getTranslatedShantuiSparePartDetails(part.name, language)).not.toMatch(chineseCharacters);
      }
    }
  });

  it("keeps list descriptions and detail-modal content on the same restored detail translation", () => {
    const sourceName = "履带链条总成(SD16)";
    const detail = getTranslatedShantuiSparePartDetails(sourceName, "de");
    expect(detail).toContain("Kettenbaugruppe");
    expect(getTranslatedShantuiSparePartDescription(sourceName, "de")).toBe(detail);
  });
});
