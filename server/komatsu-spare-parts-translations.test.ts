import { describe, expect, it } from "vitest";
import { brands } from "../client/src/data/products";
import {
  getTranslatedKomatsuSparePartCategory,
  getTranslatedKomatsuSparePartDescription,
  getTranslatedKomatsuSparePartName,
} from "../client/src/data/sparePartsTranslations_komatsu";
import { getTranslatedKomatsuSparePartDetails } from "../client/src/data/sparePartsDetails_komatsu";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"] as const;
const komatsuParts = brands.find((brand) => brand.id === "komatsu")?.spareParts ?? [];

describe("Komatsu spare-part translations", () => {
  it("covers all 22 actual parts in names, list descriptions, and modal details", () => {
    expect(komatsuParts).toHaveLength(22);
    for (const part of komatsuParts) {
      for (const language of languages) {
        expect(getTranslatedKomatsuSparePartName(part.name, language)).toBeTruthy();
        expect(getTranslatedKomatsuSparePartDescription(part.name, language)).toBeTruthy();
        expect(getTranslatedKomatsuSparePartDetails(part.name, language)).not.toContain("Contact us for detailed specifications");
      }
    }
  });

  it("translates every actual product category without source-key fallback outside Chinese", () => {
    for (const category of new Set(komatsuParts.map((part) => part.category))) {
      for (const language of languages.filter((language) => language !== "zh")) {
        expect(getTranslatedKomatsuSparePartCategory(category, language)).not.toBe(category);
      }
    }
  });

  it("uses corrected Chinese, German, Russian, and Arabic terminology", () => {
    expect(getTranslatedKomatsuSparePartName("Oil Filter", "zh")).toBe("机油滤芯");
    expect(getTranslatedKomatsuSparePartName("铲斗斗齿(K25系列)", "de")).toContain("Schaufelzahn");
    expect(getTranslatedKomatsuSparePartCategory("挖掘属性/GET", "de")).toContain("Schaufelzähne");
    expect(getTranslatedKomatsuSparePartName("驱动链轮(旧款)", "ru")).toContain("Приводная");
    expect(getTranslatedKomatsuSparePartDetails("柴油滤芯", "ja")).toContain("ディーゼルフィルター");
  });
});
