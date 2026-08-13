import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { getTranslatedTrucksPageBrandDescription, trucksPageBrandDescriptions } from "../client/src/data/trucksPageTranslations";
import type { Language } from "../client/src/data/translations";

const trucksPageSource = readFileSync(new URL("../client/src/pages/TrucksPage.tsx", import.meta.url), "utf8");
const languages: Language[] = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const brands = ["isuzu", "shacman", "sinotruk", "toyota", "cummins", "weichai"];

describe("trucks and engines page translations", () => {
  it("provides six brand descriptions in all ten supported languages", () => {
    for (const language of languages) {
      for (const brand of brands) {
        expect(getTranslatedTrucksPageBrandDescription(brand, language, "")).toBeTruthy();
      }
      expect(Object.keys(trucksPageBrandDescriptions[language])).toHaveLength(6);
    }
  });

  it("routes visible page text, countries, and descriptions through translation helpers", () => {
    expect(trucksPageSource).toContain("useLanguage");
    expect(trucksPageSource).toContain("getCountryLabel(brand.country)");
    expect(trucksPageSource).toContain("getTranslatedTrucksPageBrandDescription(brand.id, language, brand.description)");
    expect(trucksPageSource).toContain("t('category.viewFullCatalog')");
    expect(trucksPageSource).not.toContain(">View Catalog<");
    expect(trucksPageSource).not.toContain(">Heavy Trucks<");
  });

  it("uses the original description only as a safe fallback", () => {
    expect(getTranslatedTrucksPageBrandDescription("unknown", "de", "Fallback")).toBe("Fallback");
  });
});
