import { describe, expect, it } from "vitest";
import { getTranslatedWeichaiMachineName } from "../client/src/data/weichaimachineTranslations";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const models = ["WP6", "WP10", "WP12", "WP13"];

describe("Weichai machine name translations", () => {
  it("keeps the brand name and model visible for every supported language", () => {
    for (const model of models) {
      for (const language of languages) {
        const name = getTranslatedWeichaiMachineName(model, language);
        expect(name).toContain(model);
        expect(name).not.toBe("Diesel Engine");
      }
    }
  });

  it("returns a complete localized Weichai WP model name in German", () => {
    expect(getTranslatedWeichaiMachineName("WP6", "de")).toBe("Weichai WP6 Dieselmotor");
    expect(getTranslatedWeichaiMachineName("WP10", "de")).toBe("Weichai WP10 Dieselmotor");
    expect(getTranslatedWeichaiMachineName("WP12", "de")).toBe("Weichai WP12 Dieselmotor");
    expect(getTranslatedWeichaiMachineName("WP13", "de")).toBe("Weichai WP13 Dieselmotor");
  });
});
