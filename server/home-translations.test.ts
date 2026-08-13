import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { translations, type Language } from "../client/src/data/translations";

const homeSource = readFileSync(
  new URL("../client/src/pages/Home.tsx", import.meta.url),
  "utf8",
);

const languages: Language[] = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const requiredHomeKeys = [
  "home.tagline",
  "home.hero.title",
  "home.hero.subtitle",
  "home.browse",
  "home.getQuote",
  "home.globalBrands",
  "home.machineModels",
  "home.spareParts",
  "home.countriesServed",
  "home.whyChoose",
  "home.whyChooseDesc",
  "home.premiumQuality",
  "home.premiumQualityDesc",
  "home.globalReach",
  "home.globalReachDesc",
  "home.completeInventory",
  "home.completeInventoryDesc",
  "home.expertSupport",
  "home.expertSupportDesc",
  "home.constructionMachinery",
  "home.constructionMachineryDesc",
  "home.heavyTrucks",
  "home.heavyTrucksDesc",
  "home.dieselEngines",
  "home.dieselEnginesDesc",
  "home.readyToStart",
  "home.readyToStartDesc",
  "home.viewAllBrands",
  "home.viewAllTrucks",
  "home.viewAllEngines",
  "home.viewFavorites",
  "home.scroll",
  "home.country.usa",
  "home.country.china",
  "home.country.japan",
];

describe("home page translations", () => {
  it("provides every home text key in all ten supported languages", () => {
    for (const language of languages) {
      for (const key of requiredHomeKeys) {
        expect(translations[language][key], `${language} is missing ${key}`).toBeTruthy();
      }
    }
  });

  it("uses translation keys for the homepage statistics, scroll prompt, and country labels", () => {
    expect(homeSource).toContain("t('home.globalBrands')");
    expect(homeSource).toContain("t('home.machineModels')");
    expect(homeSource).toContain("t('home.spareParts')");
    expect(homeSource).toContain("t('home.countriesServed')");
    expect(homeSource).toContain("t('home.scroll')");
    expect(homeSource).toContain("getCountryLabel(brand.country, t)");
    expect(homeSource).not.toContain(">SCROLL<");
  });

  it("uses the corrected German expert-support wording", () => {
    expect(translations.de["home.expertSupport"]).toBe("Fachkundige Unterstützung");
  });
});
