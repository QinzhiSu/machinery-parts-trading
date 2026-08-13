import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  constructionPageTranslations,
  getTranslatedConstructionBrandDescription,
  getTranslatedConstructionCountry,
} from "../client/src/data/constructionPageTranslations";
import type { Language } from "../client/src/data/translations";

const constructionPageSource = readFileSync(
  new URL("../client/src/pages/ConstructionPage.tsx", import.meta.url),
  "utf8",
);

const languages: Language[] = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const brands = ["caterpillar", "shantui", "xcmg", "liugong", "sany", "komatsu"];

describe("construction machinery page translations", () => {
  it("provides the page text, countries, and six brand descriptions in all ten languages", () => {
    for (const language of languages) {
      const translation = constructionPageTranslations[language];
      expect(translation.heroDescription).toBeTruthy();
      expect(translation.more).toBeTruthy();
      expect(translation.countries.USA).toBeTruthy();
      expect(translation.countries.China).toBeTruthy();
      expect(translation.countries.Japan).toBeTruthy();
      for (const brand of brands) {
        expect(getTranslatedConstructionBrandDescription(brand, language, "")).toBeTruthy();
      }
    }
  });

  it("routes visible page text through construction-page translation helpers", () => {
    expect(constructionPageSource).toContain("useLanguage");
    expect(constructionPageSource).toContain("getTranslatedConstructionCountry(brand.country, language)");
    expect(constructionPageSource).toContain("getTranslatedConstructionBrandDescription(brand.id, language, brand.description)");
    expect(constructionPageSource).toContain("getTranslatedConstructionPageText('more', language)");
    expect(constructionPageSource).not.toContain(">Our Brands<");
    expect(constructionPageSource).not.toContain(">Machine Models<");
  });

  it("keeps unknown source countries unchanged as a safe fallback", () => {
    expect(getTranslatedConstructionCountry("Unknown", "de")).toBe("Unknown");
  });
});
