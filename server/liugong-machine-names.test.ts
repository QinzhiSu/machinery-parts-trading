import { describe, expect, it } from "vitest";
import {
  getTranslatedLiuGongMachineName,
  getTranslatedLiuGongMachineType,
  liugongMachineNameTranslations,
} from "../client/src/data/liugongMachineTranslations";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];

describe("LiuGong machine name translations", () => {
  it("keeps the LiuGong brand and model visible for every supported language", () => {
    for (const model of Object.keys(liugongMachineNameTranslations)) {
      for (const language of supportedLanguages) {
        const name = getTranslatedLiuGongMachineName(model, language);
        expect(name).toContain(model);
        expect(name).toContain(language === "zh" ? "柳工" : "LiuGong");
      }
    }
  });

  it("keeps the localized machine type distinct from the complete model name", () => {
    expect(getTranslatedLiuGongMachineName("856HE", "de")).toBe("LiuGong 856HE Radlader");
    expect(getTranslatedLiuGongMachineType("856HE", "de")).toBe("Radlader");
    expect(getTranslatedLiuGongMachineType("856HE", "de")).not.toContain("856HE");
    expect(getTranslatedLiuGongMachineType("856HE", "de")).not.toContain("LiuGong");
  });
});
