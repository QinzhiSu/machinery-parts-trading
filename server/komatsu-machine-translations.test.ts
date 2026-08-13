import { describe, expect, it } from "vitest";
import { brands } from "../client/src/data/products";
import {
  getTranslatedKomatsuMachineDescription,
  getTranslatedKomatsuMachineName,
  getTranslatedKomatsuMachineSpecs,
  getTranslatedKomatsuMachineType,
} from "../client/src/data/komatsumachineTranslations";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"] as const;
const forbiddenEnglish = /\b(bucket|blade|wheel loader|hydraulic excavator|bulldozer|motor grader|operating weight|engine power|bucket capacity|max(?:imum)? digging depth|boom|stick|track|travel speed)\b/i;
const komatsuMachines = brands.find((brand) => brand.id === "komatsu")?.machines ?? [];

describe("Komatsu machine translations", () => {
  it("covers all 12 actual models in all ten languages without source-key fallback", () => {
    expect(komatsuMachines).toHaveLength(12);
    for (const machine of komatsuMachines) {
      for (const language of languages) {
        expect(getTranslatedKomatsuMachineName(machine.model, language)).not.toBe(machine.model);
        expect(getTranslatedKomatsuMachineType(machine.model, language)).not.toBe(machine.model);
        expect(getTranslatedKomatsuMachineSpecs(machine.model, language)).toBeTruthy();
        expect(getTranslatedKomatsuMachineDescription(machine.model, language)).toBeTruthy();
      }
    }
  });

  it("uses localized Japanese and German equipment and parameter terminology", () => {
    expect(getTranslatedKomatsuMachineName("PC130-7", "ja")).toContain("油圧ショベル");
    expect(getTranslatedKomatsuMachineName("D65EX-16", "de")).toContain("Planierraupe");
    expect(getTranslatedKomatsuMachineSpecs("D65PX-18", "de")).toContain("Planierschild");
    expect(getTranslatedKomatsuMachineDescription("GD655-5", "ja")).toContain("モーターグレーダー");
    expect(getTranslatedKomatsuMachineDescription("D85EX-15R", "de")).toContain("Planierschild");
  });

  it("has no prohibited English machine terms in Japanese and German fields", () => {
    for (const machine of komatsuMachines) {
      for (const language of ["ja", "de"] as const) {
        expect(getTranslatedKomatsuMachineName(machine.model, language)).not.toMatch(forbiddenEnglish);
        expect(getTranslatedKomatsuMachineType(machine.model, language)).not.toMatch(forbiddenEnglish);
        expect(getTranslatedKomatsuMachineSpecs(machine.model, language)).not.toMatch(forbiddenEnglish);
        expect(getTranslatedKomatsuMachineDescription(machine.model, language)).not.toMatch(forbiddenEnglish);
      }
    }
  });
});
