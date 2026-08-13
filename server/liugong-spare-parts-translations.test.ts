import { describe, expect, it } from "vitest";
import { brands } from "../client/src/data/products";
import {
  getTranslatedLiuGongSparePartCategory,
  getTranslatedLiuGongSparePartDescription,
  getTranslatedLiuGongSparePartName,
  liugongCategoryTranslations,
  liugongDescriptionTranslations,
  liugongNameTranslations,
} from "../client/src/data/sparePartsTranslations_liugong";
import {
  getTranslatedLiuGongSparePartDetails,
  liugongPartDetailsTranslations,
} from "../client/src/data/sparePartsDetails_liugong";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const liugong = brands.find((brand) => brand.id === "liugong");

describe("LiuGong spare-parts translations", () => {
  it("covers all 23 actual spare parts in every supported language", () => {
    expect(liugong?.spareParts).toHaveLength(23);
    expect(Object.keys(liugongNameTranslations)).toHaveLength(23);
    expect(Object.keys(liugongDescriptionTranslations)).toHaveLength(23);
    expect(Object.keys(liugongPartDetailsTranslations)).toHaveLength(23);

    for (const part of liugong?.spareParts ?? []) {
      for (const language of supportedLanguages) {
        expect(getTranslatedLiuGongSparePartName(part.name, language)).toBeTruthy();
        expect(getTranslatedLiuGongSparePartCategory(part.category, language)).toBeTruthy();
        expect(getTranslatedLiuGongSparePartDescription(part.name, language)).not.toBe(part.name);
        expect(getTranslatedLiuGongSparePartDetails(part.name, language)).not.toBe(part.name);
      }
    }
  });

  it("covers every actual category without returning source-key fallbacks", () => {
    const actualCategories = new Set((liugong?.spareParts ?? []).map((part) => part.category));
    expect(actualCategories.size).toBe(Object.keys(liugongCategoryTranslations).length);

    for (const category of actualCategories) {
      for (const language of supportedLanguages) {
        expect(getTranslatedLiuGongSparePartCategory(category, language)).toBeTruthy();
      }
    }
  });

  it("uses corrected German, Japanese, Russian, and Arabic part terminology in list and detail views", () => {
    expect(getTranslatedLiuGongSparePartName("Bucket Tooth", "de")).toBe("Schaufelzahn");
    expect(getTranslatedLiuGongSparePartDescription("Bucket Tooth", "de")).toContain("Schaufelzahn");
    expect(getTranslatedLiuGongSparePartDetails("Bucket Tooth", "de")).toContain("Schaufelzahn");
    expect(getTranslatedLiuGongSparePartName("Steering Oil Pump (Gear Pump)", "de")).toBe("Lenkölpumpe (Zahnradpumpe)");
    expect(getTranslatedLiuGongSparePartName("Bucket Tooth", "ru")).toBe("Зуб ковша");
    expect(getTranslatedLiuGongSparePartName("Bucket Tooth", "ja")).toBe("バケット歯");
    expect(getTranslatedLiuGongSparePartDescription("Bucket Tooth", "ja")).toContain("バケット歯");
    expect(getTranslatedLiuGongSparePartDetails("Bucket Tooth", "ar")).toContain("سن الدلو");
    expect(getTranslatedLiuGongSparePartCategory("Excavation/GET", "de")).toBe("Aushub/Schaufelzähne");
    expect(getTranslatedLiuGongSparePartCategory("Excavation/GET", "ja")).toBe("掘削/バケット歯");
    expect(getTranslatedLiuGongSparePartDescription("Brake Pad (Friction Lining)", "ja")).toContain("30,000～50,000 km");
    expect(getTranslatedLiuGongSparePartDescription("Diesel Engine Assembly Reference", "en")).toContain("reference");
  });
});
