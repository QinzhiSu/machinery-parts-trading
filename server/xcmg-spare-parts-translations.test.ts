import { describe, expect, it } from "vitest";
import { xcmgSpareParts } from "../client/src/data/products_xcmg";
import {
  getTranslatedXCMGSparePartCategory,
  getTranslatedXCMGSparePartDescription,
  getTranslatedXCMGSparePartName,
  xcmgSparePartCategorySourceAliases,
  xcmgSparePartSourceAliases,
} from "../client/src/data/sparePartsTranslations_xcmg";
import {
  getTranslatedXCMGSparePartDetails,
  xcmgSparePartDetailSourceAliases,
} from "../client/src/data/sparePartsDetails_xcmg";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const chineseCharacters = /[\u3400-\u9fff]/u;

describe("XCMG spare-parts translations", () => {
  it("covers all 26 actual source names and categories without falling back", () => {
    expect(xcmgSpareParts).toHaveLength(26);

    for (const part of xcmgSpareParts) {
      const canonicalName = xcmgSparePartSourceAliases[part.name] || part.name;
      const canonicalCategory = xcmgSparePartCategorySourceAliases[part.category] || part.category;
      const detailSourceName = xcmgSparePartDetailSourceAliases[canonicalName] || canonicalName;

      expect(canonicalName).toBeTruthy();
      expect(canonicalCategory).toBeTruthy();
      expect(detailSourceName).toBeTruthy();

      for (const language of supportedLanguages) {
        expect(getTranslatedXCMGSparePartName(part.name, language)).toBeTruthy();
        expect(getTranslatedXCMGSparePartCategory(part.category, language)).toBeTruthy();
        expect(getTranslatedXCMGSparePartDescription(part.name, language)).not.toBe(part.name);
        expect(getTranslatedXCMGSparePartDetails(part.name, language)).not.toBe(part.name);
      }
    }
  });

  it("translates the source names and source categories that previously returned Chinese or English fallbacks", () => {
    for (const part of xcmgSpareParts.filter((item) => chineseCharacters.test(item.name))) {
      for (const language of supportedLanguages.filter((item) => item !== "zh")) {
        expect(getTranslatedXCMGSparePartName(part.name, language)).not.toBe(part.name);
        expect(getTranslatedXCMGSparePartDescription(part.name, language)).not.toBe(part.name);
        expect(getTranslatedXCMGSparePartDetails(part.name, language)).not.toBe(part.name);
      }
    }

    for (const category of ["电气/传感器", "挖掘属性/GET", "传动/变速系统", "液压系统", "Braking System", "密封/传动件"]) {
      expect(getTranslatedXCMGSparePartCategory(category, "de")).not.toBe(category);
      expect(getTranslatedXCMGSparePartCategory(category, "ja")).not.toBe(category);
    }
  });

  it("uses corrected German bucket terminology and the new sealing-drive category", () => {
    expect(getTranslatedXCMGSparePartName("铲斗斗齿", "de")).toBe("Schaufelzähne");
    expect(getTranslatedXCMGSparePartName("斗齿座(Tooth Holder)", "de")).toBe("Schaufelzahnsitz");
    expect(getTranslatedXCMGSparePartDescription("铲斗斗齿", "de")).toContain("Schaufelzähne");
    expect(getTranslatedXCMGSparePartCategory("密封/传动件", "de")).toBe("Dichtungs-/Antriebskomponenten");
    expect(getTranslatedXCMGSparePartCategory("密封/传动件", "ja")).toBe("シール/駆動部品");
  });
});
