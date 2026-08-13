import { describe, expect, it } from "vitest";
import { brands } from "../client/src/data/products";
import {
  getTranslatedSinotruckMachineDescription,
  getTranslatedSinotruckMachineName,
  getTranslatedSinotruckMachineSpecs,
  getTranslatedSinotruckMachineType,
} from "../client/src/data/sinotruckmachineTranslations";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const models = [
  "HOWO 4×2",
  "HOWO 6×4 Tanker",
  "HOWO 6×4 Dump",
  "HOWO 8×4 Mixer",
  "HOWO 8×4 Dump",
  "HOWO T7S",
  "HOWO TX",
  "HOWO TX Dump",
  "HOWO T7H Concrete",
  "SITRAK C7H",
  "SITRAK C7H Mixer",
  "HOWO 7",
];

const modelIdentifiers: Record<string, string> = {
  "HOWO 4×2": "HOWO 4×2",
  "HOWO 6×4 Tanker": "HOWO 6×4",
  "HOWO 6×4 Dump": "HOWO 6×4",
  "HOWO 8×4 Mixer": "HOWO 8×4",
  "HOWO 8×4 Dump": "HOWO 8×4",
  "HOWO T7S": "HOWO T7S",
  "HOWO TX": "HOWO TX",
  "HOWO TX Dump": "HOWO TX",
  "HOWO T7H Concrete": "HOWO T7H",
  "SITRAK C7H": "SITRAK C7H",
  "SITRAK C7H Mixer": "SITRAK C7H",
  "HOWO 7": "HOWO 7",
};

describe("Sinotruk machine name translations", () => {
  it("keeps the Sinotruk brand and model visible for every supported language", () => {
    for (const model of models) {
      for (const language of languages) {
        const name = getTranslatedSinotruckMachineName(model, language);
        expect(name).toContain(modelIdentifiers[model]);
        expect(name).not.toBe("Heavy Truck");
        expect(name).not.toBe("Dump Truck");
        expect(name).not.toBe("Tractor Truck");
        expect(name).not.toBe("Concrete Mixer Truck");
      }
    }
  });

  it("aligns all 12 English specifications and technical descriptions with the actual product source", () => {
    const sinotrukMachines = brands.find((brand) => brand.id === "sinotruk")?.machines ?? [];
    expect(sinotrukMachines).toHaveLength(12);
    for (const machine of sinotrukMachines) {
      expect(getTranslatedSinotruckMachineName(machine.model, "en")).toContain(modelIdentifiers[machine.model]);
      expect(getTranslatedSinotruckMachineType(machine.model, "en")).toBe(machine.name);
      expect(getTranslatedSinotruckMachineSpecs(machine.model, "en")).toBe(machine.specs);
      expect(getTranslatedSinotruckMachineDescription(machine.model, "en")).toBe(
        machine.description.replaceAll("Sinotruck", "Sinotruk"),
      );
    }
  });

  it("removes mixed Japanese unit labels from all machine specifications and descriptions", () => {
    const japaneseResiduals = /\bkW\b|\bGVW\b|\bton\b|\bm³\b|Heavy Duty|Dump Truck|Tractor Truck|Concrete Mixer Truck|重型|重荷重/;
    for (const model of models) {
      expect(getTranslatedSinotruckMachineName(model, "ja")).not.toMatch(japaneseResiduals);
      expect(getTranslatedSinotruckMachineType(model, "ja")).not.toMatch(japaneseResiduals);
      expect(getTranslatedSinotruckMachineSpecs(model, "ja")).not.toMatch(japaneseResiduals);
      expect(getTranslatedSinotruckMachineDescription(model, "ja")).not.toMatch(japaneseResiduals);
    }
  });
});
