import { describe, expect, it } from "vitest";
import { brands } from "../client/src/data/products";
import {
  getTranslatedShacmanMachineDescription,
  getTranslatedShacmanMachineName,
  getTranslatedShacmanMachineSpecs,
  getTranslatedShacmanMachineType,
} from "../client/src/data/shacmanmachineTranslations";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"] as const;
const shacmanMachines = brands.find((brand) => brand.id === "shacman")?.machines ?? [];

const expectedSpecs: Record<string, [string, string]> = {
  "F3000 6×4 Tractor": ["280-350", "30-40"],
  "F3000 8×4 Dump": ["320-380", "40-50"],
  "F3000/H3000 Mixer": ["320-380", "40-50"],
  "H3000 6×4 Dump": ["280-350", "30-40"],
  "H3000 6×4 Tractor": ["280-350", "30-40"],
  "X3000 6×4 Tractor": ["300-350", "35-45"],
  "X5000 6×4 Dump": ["300-350", "35-45"],
  "X5000 6×4 Tractor": ["300-350", "35-45"],
  "X6000 6×4 Tractor": ["350-400", "40-50"],
};

describe("Shacman machine translations", () => {
  it("covers all nine actual models in all ten languages without model fallback", () => {
    expect(shacmanMachines).toHaveLength(9);
    for (const machine of shacmanMachines) {
      for (const language of languages) {
        expect(getTranslatedShacmanMachineName(machine.model, language)).toBeTruthy();
        expect(getTranslatedShacmanMachineType(machine.model, language)).toBeTruthy();
        expect(getTranslatedShacmanMachineSpecs(machine.model, language)).toBeTruthy();
        expect(getTranslatedShacmanMachineDescription(machine.model, language)).not.toBe(machine.model);
      }
    }
  });

  it("keeps all translated specifications aligned with the actual model power and GVW ranges", () => {
    for (const [model, [power, gvw]] of Object.entries(expectedSpecs)) {
      for (const language of languages) {
        const specs = getTranslatedShacmanMachineSpecs(model, language);
        expect(specs).toContain(power);
        expect(specs).toContain(gvw);
      }
    }
  });

  it("uses localized Japanese and German gross-vehicle-weight terminology", () => {
    expect(getTranslatedShacmanMachineSpecs("F3000 8×4 Dump", "ja")).toContain("車両総重量");
    expect(getTranslatedShacmanMachineSpecs("F3000 8×4 Dump", "de")).toContain("Zulässiges Gesamtgewicht");
    expect(getTranslatedShacmanMachineType("F3000 8×4 Dump", "ja")).toContain("ダンプトラック");
    expect(getTranslatedShacmanMachineType("F3000 8×4 Dump", "de")).toContain("Kipplastwagen");
  });

  it("keeps corrected Japanese and German details aligned with source engine, capacity, transmission and tank facts", () => {
    const japaneseF3000 = getTranslatedShacmanMachineDescription("F3000 8×4 Dump", "ja");
    const germanX6000 = getTranslatedShacmanMachineDescription("X6000 6×4 Tractor", "de");
    expect(japaneseF3000).toContain("Weichai または Cummins");
    expect(japaneseF3000).toContain("荷台容量：22-26 m³");
    expect(germanX6000).toContain("Weichai (350-400 kW)");
    expect(germanX6000).toContain("Automatik");
    expect(germanX6000).toContain("600 L");
  });
});
