import { describe, expect, it } from "vitest";
import { brands } from "../client/src/data/products";
import {
  getTranslatedIsuzuMachineDescription,
  getTranslatedIsuzuMachineName,
  getTranslatedIsuzuMachineSpecs,
  getTranslatedIsuzuMachineType,
} from "../client/src/data/isuzumachineTranslations";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"] as const;

describe("Isuzu machine translations", () => {
  const machines = brands.find((brand) => brand.id === "isuzu")?.machines ?? [];

  it("covers every live Isuzu engine model in all ten languages", () => {
    expect(machines).toHaveLength(4);
    for (const machine of machines) {
      for (const language of supportedLanguages) {
        expect(getTranslatedIsuzuMachineName(machine.model, language)).toContain(machine.model);
        expect(getTranslatedIsuzuMachineType(machine.model, language)).toBeTruthy();
        expect(getTranslatedIsuzuMachineSpecs(machine.model, language)).toBeTruthy();
        expect(getTranslatedIsuzuMachineDescription(machine.model, language)).toBeTruthy();
      }
    }
  });

  it("keeps English type, specifications, and technical description aligned to the live product source", () => {
    for (const machine of machines) {
      expect(getTranslatedIsuzuMachineType(machine.model, "en")).toBe(machine.name);
      expect(getTranslatedIsuzuMachineSpecs(machine.model, "en")).toBe(machine.specs);
      expect(getTranslatedIsuzuMachineDescription(machine.model, "en")).toBe(machine.description);
    }
  });

  it("uses Japanese terminology for engine categories, labels, and engineering units", () => {
    const rawEnglish = /\b(?:Diesel|Heavy-Duty|kW|HP|Nm|Torque|Fuel Type|Emissions Standard)\b/;
    for (const machine of machines) {
      expect(getTranslatedIsuzuMachineName(machine.model, "ja")).not.toMatch(rawEnglish);
      expect(getTranslatedIsuzuMachineType(machine.model, "ja")).not.toMatch(rawEnglish);
      expect(getTranslatedIsuzuMachineSpecs(machine.model, "ja")).not.toMatch(rawEnglish);
      expect(getTranslatedIsuzuMachineDescription(machine.model, "ja")).not.toMatch(rawEnglish);
    }
  });
});
