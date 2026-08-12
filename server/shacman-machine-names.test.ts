import { describe, expect, it } from "vitest";
import { getTranslatedShacmanMachineName } from "../client/src/data/shacmanmachineTranslations";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];

const models = [
  "F3000 6×4 Tractor",
  "F3000 8×4 Dump",
  "F3000/H3000 Mixer",
  "H3000 6×4 Dump",
  "H3000 6×4 Tractor",
  "X3000 6×4 Tractor",
  "X5000 6×4 Dump",
  "X5000 6×4 Tractor",
  "X6000 6×4 Tractor",
];

const modelIdentifiers: Record<string, string> = {
  "F3000 6×4 Tractor": "F3000 6×4",
  "F3000 8×4 Dump": "F3000 8×4",
  "F3000/H3000 Mixer": "F3000/H3000",
  "H3000 6×4 Dump": "H3000 6×4",
  "H3000 6×4 Tractor": "H3000 6×4",
  "X3000 6×4 Tractor": "X3000 6×4",
  "X5000 6×4 Dump": "X5000 6×4",
  "X5000 6×4 Tractor": "X5000 6×4",
  "X6000 6×4 Tractor": "X6000 6×4",
};

describe("Shacman machine name translations", () => {
  it("keeps the brand and model visible for every supported language", () => {
    for (const model of models) {
      for (const language of languages) {
        const name = getTranslatedShacmanMachineName(model, language);
        expect(name).toContain(modelIdentifiers[model]);
        expect(name).not.toBe("Dump Truck");
        expect(name).not.toBe("Heavy Truck Tractor");
      }
    }
  });

  it("returns complete localized Shacman model names in German", () => {
    expect(getTranslatedShacmanMachineName("F3000 6×4 Tractor", "de")).toBe("Shacman F3000 6×4 Schwerlast-Zugmaschine");
    expect(getTranslatedShacmanMachineName("X5000 6×4 Dump", "de")).toBe("Shacman X5000 6×4 Premium-Kipplastwagen");
  });
});
