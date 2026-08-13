import { describe, expect, it } from "vitest";
import { caterpillarSpareParts } from "../client/src/data/products_caterpillar";
import {
  getTranslatedCaterpillarSparePartCategory,
  getTranslatedCaterpillarSparePartDescription,
  getTranslatedCaterpillarSparePartName,
} from "../client/src/data/sparePartsTranslations_caterpillar";
import { getTranslatedCaterpillarSparePartDetails } from "../client/src/data/sparePartsDetails_caterpillar";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const nonChineseLanguages = supportedLanguages.filter((language) => language !== "zh" && language !== "ja");
const chineseCharacters = /[\u4E00-\u9FFF]/;
const defaultDetail = "OEM quality part. Contact us for detailed specifications and pricing.";

describe("CAT spare-parts translations", () => {
  it("covers all 37 actual CAT source names, categories, and details in ten languages", () => {
    expect(caterpillarSpareParts).toHaveLength(37);
    for (const part of caterpillarSpareParts) {
      for (const language of supportedLanguages) {
        expect(getTranslatedCaterpillarSparePartName(part.name, language)).toBeTruthy();
        expect(getTranslatedCaterpillarSparePartCategory(part.category, language)).toBeTruthy();
        expect(getTranslatedCaterpillarSparePartDetails(part.name, language)).not.toBe(defaultDetail);
        expect(getTranslatedCaterpillarSparePartDescription(part.name, language)).toBe(
          getTranslatedCaterpillarSparePartDetails(part.name, language),
        );
      }
    }
  });

  it("does not return Chinese source keys for non-Chinese CAT list languages", () => {
    for (const part of caterpillarSpareParts) {
      for (const language of nonChineseLanguages) {
        expect(getTranslatedCaterpillarSparePartName(part.name, language)).not.toMatch(chineseCharacters);
        expect(getTranslatedCaterpillarSparePartCategory(part.category, language)).not.toMatch(chineseCharacters);
        expect(getTranslatedCaterpillarSparePartDetails(part.name, language)).not.toMatch(chineseCharacters);
      }
    }
  });

  it("uses corrected Chinese and German CAT terminology", () => {
    expect(getTranslatedCaterpillarSparePartName("Turbocharger", "zh")).toBe("涡轮增压器");
    expect(getTranslatedCaterpillarSparePartName("履带链条总成", "de")).toBe("Kettenbaugruppe");
    expect(getTranslatedCaterpillarSparePartName("上托轮(Carrier Roller)", "de")).toBe("Tragrolle");
    expect(getTranslatedCaterpillarSparePartName("最终驱动/行走减速机总成", "de")).toBe(
      "Endantriebs-/Fahrgetriebebaugruppe",
    );
    expect(getTranslatedCaterpillarSparePartName("铲斗油缸密封修理包", "de")).not.toContain("Schauffel");
    expect(getTranslatedCaterpillarSparePartDetails("履带链条总成", "de")).not.toContain("Kettenkette");
    expect(getTranslatedCaterpillarSparePartDetails("燃油滤芯(二级/精滤)", "de")).toContain("Kraftstofffilterelement");
    expect(getTranslatedCaterpillarSparePartDetails("斗齿适配器(Adapter)", "de")).toContain("an der Schaufel");
    expect(getTranslatedCaterpillarSparePartDetails("斗杆油缸密封修理包", "de")).toContain("Kompletter Dichtungsreparatursatz");
  });
});
