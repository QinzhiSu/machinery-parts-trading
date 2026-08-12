import { describe, expect, it } from "vitest";
import { getTranslatedCumminsMachineName } from "../client/src/data/cumminsmachineTranslations";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const models = ["6BT5.9-G2", "ISF3.8", "ISL8.9", "ISM11", "ISX15", "KTA19", "QSB6.7"];

describe("Cummins machine name translations", () => {
  it("keeps the Cummins brand and model visible for every supported language", () => {
    for (const model of models) {
      for (const language of languages) {
        const name = getTranslatedCumminsMachineName(model, language);
        expect(name).toContain(model);
        expect(name).not.toBe("Diesel Engine");
      }
    }
  });

  it("returns complete localized Cummins model names in German", () => {
    expect(getTranslatedCumminsMachineName("6BT5.9-G2", "de")).toBe("Cummins 6BT5.9-G2 Dieselmotor");
    expect(getTranslatedCumminsMachineName("ISF3.8", "de")).toBe("Cummins ISF3.8 Dieselmotor");
    expect(getTranslatedCumminsMachineName("ISL8.9", "de")).toBe("Cummins ISL8.9 Dieselmotor");
    expect(getTranslatedCumminsMachineName("ISM11", "de")).toBe("Cummins ISM11 Dieselmotor");
    expect(getTranslatedCumminsMachineName("ISX15", "de")).toBe("Cummins ISX15 Dieselmotor");
    expect(getTranslatedCumminsMachineName("KTA19", "de")).toBe("Cummins KTA19 Dieselmotor");
    expect(getTranslatedCumminsMachineName("QSB6.7", "de")).toBe("Cummins QSB6.7 Dieselmotor");
  });
});
