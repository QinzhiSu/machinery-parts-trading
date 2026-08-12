import { describe, expect, it } from "vitest";
import { getTranslatedToyotaMachineName, getTranslatedToyotaMachineSpecs } from "../client/src/data/toyotamachineTranslations";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const models = ["4Runner", "Fortuner", "Hilux 4×4", "Land Cruiser 70", "Prado", "Tacoma 4×4", "Tundra"];

describe("Toyota machine name translations", () => {
  it("keeps the Toyota brand and model visible for every supported language", () => {
    for (const model of models) {
      for (const language of languages) {
        const name = getTranslatedToyotaMachineName(model, language);
        expect(name).toContain(model);
        expect(name).not.toBe("SUV");
        expect(name).not.toBe("Pickup Truck");
      }
    }
  });

  it("returns complete localized Toyota model names in German", () => {
    expect(getTranslatedToyotaMachineName("4Runner", "de")).toBe("Toyota 4Runner Geländewagen");
    expect(getTranslatedToyotaMachineName("Fortuner", "de")).toBe("Toyota Fortuner Geländewagen");
    expect(getTranslatedToyotaMachineName("Hilux 4×4", "de")).toBe("Toyota Hilux 4×4 Pritschenwagen");
    expect(getTranslatedToyotaMachineName("Land Cruiser 70", "de")).toBe("Toyota Land Cruiser 70 Geländewagen");
    expect(getTranslatedToyotaMachineName("Prado", "de")).toBe("Toyota Prado Geländewagen");
    expect(getTranslatedToyotaMachineName("Tacoma 4×4", "de")).toBe("Toyota Tacoma 4×4 Pritschenwagen");
    expect(getTranslatedToyotaMachineName("Tundra", "de")).toBe("Toyota Tundra Pritschenwagen");
  });

  it("uses localized specifications that match the Toyota source data", () => {
    expect(getTranslatedToyotaMachineSpecs("4Runner", "de")).toBe("4×4 | 4,0 l V6 | 215 kW | 4850 kg");
    expect(getTranslatedToyotaMachineSpecs("Hilux 4×4", "zh")).toBe("4×4 | 2.8升 柴油 | 130 千瓦 | 1850 千克");
    expect(getTranslatedToyotaMachineSpecs("Prado", "ru")).toBe("4×4 | 2,7 л бензин | 120 кВт | 2300 кг");
    expect(getTranslatedToyotaMachineSpecs("Tundra", "ar")).toBe("4×4 | 5.7 لتر V8 | 280 كيلوواط | 2100 كجم");
  });
});
