import { describe, expect, it } from "vitest";
import { getTranslatedToyotaMachineName } from "../client/src/data/toyotamachineTranslations";

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
    expect(getTranslatedToyotaMachineName("4Runner", "de")).toBe("Toyota 4Runner SUV");
    expect(getTranslatedToyotaMachineName("Fortuner", "de")).toBe("Toyota Fortuner SUV");
    expect(getTranslatedToyotaMachineName("Hilux 4×4", "de")).toBe("Toyota Hilux 4×4 Pickup");
    expect(getTranslatedToyotaMachineName("Land Cruiser 70", "de")).toBe("Toyota Land Cruiser 70 SUV");
    expect(getTranslatedToyotaMachineName("Prado", "de")).toBe("Toyota Prado SUV");
    expect(getTranslatedToyotaMachineName("Tacoma 4×4", "de")).toBe("Toyota Tacoma 4×4 Pickup");
    expect(getTranslatedToyotaMachineName("Tundra", "de")).toBe("Toyota Tundra Pickup");
  });
});
