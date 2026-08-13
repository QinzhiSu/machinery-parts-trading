import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { aboutPageTranslations } from "../client/src/data/aboutPageTranslations";
import type { Language } from "../client/src/data/translations";

const aboutPageSource = readFileSync(new URL("../client/src/pages/AboutPage.tsx", import.meta.url), "utf8");
const languages: Language[] = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];

describe("about page translations", () => {
  it("provides narrative text, statistics, and all office addresses in ten languages", () => {
    for (const language of languages) {
      const copy = aboutPageTranslations[language];
      expect(copy.companyHeading).toBeTruthy();
      expect(copy.portfolio).toBeTruthy();
      expect(copy.customers).toBeTruthy();
      expect(copy.stats).toHaveLength(4);
      expect(Object.keys(copy.offices)).toHaveLength(5);
      expect(Object.values(copy.offices).every(Boolean)).toBe(true);
    }
  });

  it("routes all page-level visible copy through language helpers", () => {
    expect(aboutPageSource).toContain("useLanguage");
    expect(aboutPageSource).toContain("pageCopy.companyHeading");
    expect(aboutPageSource).toContain("pageCopy.portfolio");
    expect(aboutPageSource).toContain("pageCopy.customers");
    expect(aboutPageSource).toContain("address: pageCopy.offices.conakry");
    expect(aboutPageSource).toContain("address: pageCopy.offices.antananarivo");
    expect(aboutPageSource).toContain("getCountryLabel(brand.country)");
    expect(aboutPageSource).toContain("'about.directFactory'");
    expect(aboutPageSource).not.toContain(">Our Offices Worldwide<");
    expect(aboutPageSource).not.toContain(">Why Choose Us<");
  });

  it("keeps phone rendering absent from office cards", () => {
    expect(aboutPageSource).not.toContain("office.phone");
  });

  it("contains localized Guinea and Madagascar office addresses in non-English languages", () => {
    expect(aboutPageTranslations.ar.offices.conakry).not.toContain("Guinea");
    expect(aboutPageTranslations.ar.offices.antananarivo).not.toContain("Madagascar");
    expect(aboutPageTranslations.ja.offices.conakry).not.toContain("Guinea");
    expect(aboutPageTranslations.ja.offices.antananarivo).not.toContain("Madagascar");
  });
});
