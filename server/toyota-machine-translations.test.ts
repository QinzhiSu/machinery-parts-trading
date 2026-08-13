import { describe, expect, it } from "vitest";
import { brands } from "../client/src/data/products";
import {
  getTranslatedToyotaMachineDescription,
  getTranslatedToyotaMachineName,
  getTranslatedToyotaMachineSpecs,
  getTranslatedToyotaMachineType,
} from "../client/src/data/toyotamachineTranslations";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"] as const;

describe("Toyota machine translations", () => {
  const machines = brands.find((brand) => brand.id === "toyota")?.machines ?? [];

  it("covers every live Toyota model in all ten languages", () => {
    expect(machines).toHaveLength(7);
    for (const machine of machines) {
      for (const language of supportedLanguages) {
        expect(getTranslatedToyotaMachineName(machine.model, language)).toContain(machine.model);
        expect(getTranslatedToyotaMachineType(machine.model, language)).toBeTruthy();
        expect(getTranslatedToyotaMachineSpecs(machine.model, language)).toBeTruthy();
        expect(getTranslatedToyotaMachineDescription(machine.model, language)).toBeTruthy();
      }
    }
  });

  it("aligns the English specifications and detailed claims with the live product source", () => {
    for (const machine of machines) {
      expect(getTranslatedToyotaMachineType(machine.model, "en")).toBe(machine.name);
      expect(getTranslatedToyotaMachineSpecs(machine.model, "en")).toBe(machine.specs);
      expect(getTranslatedToyotaMachineDescription(machine.model, "en")).toBe(machine.description);
    }
  });

  it("keeps Japanese values free of raw English vehicle categories and unit labels", () => {
    const rawEnglish = /\b(?:SUV|Pickup Truck|Diesel|Petrol|kW|kg|L)\b/;
    for (const machine of machines) {
      expect(getTranslatedToyotaMachineType(machine.model, "ja")).not.toMatch(rawEnglish);
      expect(getTranslatedToyotaMachineSpecs(machine.model, "ja")).not.toMatch(rawEnglish);
      expect(getTranslatedToyotaMachineDescription(machine.model, "ja")).not.toMatch(rawEnglish);
    }
  });
});
