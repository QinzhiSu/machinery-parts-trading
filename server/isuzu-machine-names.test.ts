import { describe, expect, it } from "vitest";
import { getTranslatedIsuzuMachineName } from "../client/src/data/isuzumachineTranslations";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const models = ["4HK1", "6HK1", "6UZ1", "6WG1"];

describe("Isuzu machine name translations", () => {
  it("keeps the Isuzu brand and model visible for every supported language", () => {
    for (const model of models) {
      for (const language of languages) {
        const name = getTranslatedIsuzuMachineName(model, language);
        expect(name).toContain(model);
        expect(name).not.toBe("Diesel Engine");
      }
    }
  });

  it("returns complete localized Isuzu model names in German", () => {
    expect(getTranslatedIsuzuMachineName("4HK1", "de")).toBe("Isuzu 4HK1 Dieselmotor");
    expect(getTranslatedIsuzuMachineName("6HK1", "de")).toBe("Isuzu 6HK1 Dieselmotor");
    expect(getTranslatedIsuzuMachineName("6UZ1", "de")).toBe("Isuzu 6UZ1 Dieselmotor");
    expect(getTranslatedIsuzuMachineName("6WG1", "de")).toBe("Isuzu 6WG1 Dieselmotor");
  });
});
