import { describe, expect, it } from "vitest";
import {
  getTranslatedShantuiMachineDescription,
  getTranslatedShantuiMachineName,
  getTranslatedShantuiMachineSpecs,
  getTranslatedShantuiMachineType,
  shantuiMachineDescriptions,
  shantuiMachineSpecsTranslations,
  shantuiMachineTranslations,
  shantuiMachineTypeTranslations,
} from "../client/src/data/shantuiMachineTranslations";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const foreignChinese = /[\u4e00-\u9fff]/u;
const foreignJapanese = /[\u3040-\u30ff]/u;
const residualEnglish = /\b(?:Medium|Large|Small|Extra-Large|Excavator|Motor Grader|Diesel Engine|Diesel Motor|blade|bucket|Gas Powered)\b/i;

describe("Shantui machine translations", () => {
  it("provides all ten language fields for every 14-model translation map", () => {
    for (const translationMap of [
      shantuiMachineTranslations,
      shantuiMachineDescriptions,
      shantuiMachineTypeTranslations,
      shantuiMachineSpecsTranslations,
    ]) {
      expect(Object.keys(translationMap)).toHaveLength(14);
      for (const translations of Object.values(translationMap)) {
        for (const language of supportedLanguages) {
          expect(translations[language]).toBeTruthy();
        }
      }
    }
  });

  it("keeps non-Chinese and non-Japanese fields free of Chinese and Japanese source remnants", () => {
    for (const translationMap of [shantuiMachineTranslations, shantuiMachineDescriptions, shantuiMachineTypeTranslations, shantuiMachineSpecsTranslations]) {
      for (const translations of Object.values(translationMap)) {
        for (const language of supportedLanguages) {
          if (language !== "zh" && language !== "ja") expect(translations[language]).not.toMatch(foreignChinese);
          if (language !== "ja") expect(translations[language]).not.toMatch(foreignJapanese);
        }
      }
    }
  });

  it("uses native Japanese and German machinery terminology and does not fall back to English specifications", () => {
    for (const translationMap of [shantuiMachineTranslations, shantuiMachineDescriptions, shantuiMachineTypeTranslations, shantuiMachineSpecsTranslations]) {
      for (const translations of Object.values(translationMap)) {
        expect(translations.ja).not.toMatch(residualEnglish);
        expect(translations.de).not.toMatch(residualEnglish);
      }
    }
    expect(getTranslatedShantuiMachineType("Bulldozer SD16", "es")).toBe("Topadora SD16");
    expect(getTranslatedShantuiMachineSpecs("Shantui SD16", "zh")).not.toBe(getTranslatedShantuiMachineSpecs("Shantui SD16", "en"));
    expect(getTranslatedShantuiMachineSpecs("Shantui SD16", "de")).not.toContain("ton");
    expect(getTranslatedShantuiMachineSpecs("Shantui SD16", "ja")).not.toContain("ton");
    expect(getTranslatedShantuiMachineSpecs("Shantui SD16", "zh")).toContain("吨");
    expect(getTranslatedShantuiMachineName("Shantui SD16", "de")).toContain("Planierraupe");
    expect(getTranslatedShantuiMachineDescription("Shantui DH10-C2", "de")).toContain("Dieselmotor");
  });
});
