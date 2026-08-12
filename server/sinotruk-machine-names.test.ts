import { describe, expect, it } from "vitest";
import { getTranslatedSinotruckMachineName } from "../client/src/data/sinotruckmachineTranslations";

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

  it("returns complete localized Sinotruk model names in German", () => {
    expect(getTranslatedSinotruckMachineName("HOWO 4×2", "de")).toBe("Sinotruk HOWO 4×2 Sattelzugmaschine");
    expect(getTranslatedSinotruckMachineName("HOWO 6×4 Dump", "de")).toBe("Sinotruk HOWO 6×4 Kipplastwagen");
    expect(getTranslatedSinotruckMachineName("HOWO T7S", "de")).toBe("Sinotruk HOWO T7S Premium-Kipplastwagen");
    expect(getTranslatedSinotruckMachineName("SITRAK C7H", "de")).toBe("Sinotruk SITRAK C7H Sattelzugmaschine");
  });
});
