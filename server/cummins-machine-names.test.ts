import { describe, expect, it } from "vitest";
import { brands } from "../client/src/data/products";
import {
  getTranslatedCumminsMachineDescription,
  getTranslatedCumminsMachineName,
  getTranslatedCumminsMachineSpecs,
  getTranslatedCumminsMachineType,
} from "../client/src/data/cumminsmachineTranslations";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const cummins = brands.find((brand) => brand.id === "cummins");

describe("Cummins machine translations", () => {
  it("covers every current Cummins source engine in all ten languages", () => {
    expect(cummins).toBeDefined();
    for (const machine of cummins!.machines) {
      for (const language of languages) {
        expect(getTranslatedCumminsMachineName(machine.model, language)).toContain(machine.model);
        expect(getTranslatedCumminsMachineType(machine.model, language)).toBeTruthy();
        expect(getTranslatedCumminsMachineSpecs(machine.model, language)).toBeTruthy();
        expect(getTranslatedCumminsMachineDescription(machine.model, language)).toBeTruthy();
      }
    }
  });

  it("keeps English specs and descriptions exactly aligned with the live product source", () => {
    for (const machine of cummins!.machines) {
      expect(getTranslatedCumminsMachineSpecs(machine.model, "en")).toBe(machine.specs);
      expect(getTranslatedCumminsMachineDescription(machine.model, "en")).toBe(machine.description);
    }
  });

  it("uses the corrected current source power ranges", () => {
    expect(getTranslatedCumminsMachineSpecs("ISL8.9", "en")).toContain("180-210 kW");
    expect(getTranslatedCumminsMachineSpecs("ISM11", "en")).toContain("250-280 kW");
    expect(getTranslatedCumminsMachineSpecs("ISX15", "en")).toContain("330-380 kW");
  });

  it("uses Japanese technical labels and units without English source residuals", () => {
    const forbidden = /Diesel|Mid-Range|Heavy-Duty|Ultra-Heavy|kW|HP|Nm|Fuel Type|Emissions Standard|Euro/;
    for (const machine of cummins!.machines) {
      const japanese = [
        getTranslatedCumminsMachineName(machine.model, "ja"),
        getTranslatedCumminsMachineType(machine.model, "ja"),
        getTranslatedCumminsMachineSpecs(machine.model, "ja"),
        getTranslatedCumminsMachineDescription(machine.model, "ja"),
      ].join(" ");
      expect(japanese).not.toMatch(forbidden);
    }
  });
});
