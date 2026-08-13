import { describe, expect, it } from "vitest";
import { brands } from "../client/src/data/products";
import {
  getTranslatedSANYSparePartCategory,
  getTranslatedSanySparePartDescription,
  getTranslatedSanySparePartName,
} from "../client/src/data/sparePartsTranslations_sany";
import { getTranslatedSANYSparePartDetails } from "../client/src/data/sparePartsDetails_sany";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"] as const;
const cjk = /[\u3400-\u9fff]/;
const sanySpareParts = brands.find((brand) => brand.id === "sany")?.spareParts ?? [];

describe("SANY spare-part translations", () => {
  it("covers all 21 actual spare parts in names, list descriptions, and modal details", () => {
    expect(sanySpareParts).toHaveLength(21);
    for (const part of sanySpareParts) {
      for (const language of languages) {
        expect(getTranslatedSanySparePartName(part.name, language)).toBeTruthy();
        expect(getTranslatedSanySparePartDescription(part.name, language)).toBeTruthy();
        expect(getTranslatedSANYSparePartDetails(part.name, language)).not.toBe(
          "OEM quality part. Contact us for detailed specifications and pricing.",
        );
      }
    }
  });

  it("translates every actual product category without source-key fallback outside Chinese", () => {
    for (const category of new Set(sanySpareParts.map((part) => part.category))) {
      for (const language of languages.filter((language) => language !== "en" && language !== "zh")) {
        expect(getTranslatedSANYSparePartCategory(category, language)).not.toBe(category);
      }
    }
  });

  it("uses localized terminology and leaves no Chinese source text in non-Chinese, non-Japanese fields", () => {
    expect(getTranslatedSanySparePartName("履带链条总成", "de")).toContain("Raupenkettenbaugruppe");
    expect(getTranslatedSanySparePartName("铲斗斗齿", "ja")).toContain("バケットティース");
    expect(getTranslatedSANYSparePartCategory("液压系统", "de")).toBe("Hydrauliksystem");
    expect(getTranslatedSANYSparePartDetails("铲斗斗齿", "de")).toContain("Schaufelzahn");
    expect(getTranslatedSANYSparePartDetails("铲斗油缸密封修理包", "de")).toContain("Schaufelzylinder");

    for (const part of sanySpareParts) {
      for (const language of languages.filter((language) => language !== "zh" && language !== "ja")) {
        expect(getTranslatedSanySparePartName(part.name, language)).not.toMatch(cjk);
        expect(getTranslatedSanySparePartDescription(part.name, language)).not.toMatch(cjk);
        expect(getTranslatedSANYSparePartDetails(part.name, language)).not.toMatch(cjk);
      }
    }
  });
});
