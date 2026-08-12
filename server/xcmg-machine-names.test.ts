import { describe, expect, it } from "vitest";
import { getTranslatedXCMGMachineType } from "../client/src/data/xcmgMachineTranslations";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];

const machineModels: Record<string, string> = {
  "Compact Hydraulic Excavator": "XE155UCR",
  "Mid-Size Hydraulic Excavator": "XE215DA",
  "Electric Hybrid Excavator": "XE215EV",
  "Large Hydraulic Excavator": "XE520E",
  "Ultra-Large Mining Excavator": "XE4000E",
  "Mid-Size Wheel Loader": "XC9260",
  "Large Wheel Loader": "XC968",
  "Electric Wheel Loader": "XC968-EV",
  "Motor Grader": "GD220J",
  "Hydraulic Bulldozer": "DL560",
  "Mobile Truck Crane": "XCT45U",
  "Large Crawler Crane": "XLC17000",
  "Vibratory Road Roller": "XC978E",
  "Rotary Drilling Rig": "XDE120",
  "Large Rotary Drilling Rig": "XDE260",
  "Truck-Mounted Crane": "XCA120G7-1H",
};

describe("XCMG machine name translations", () => {
  it("keeps the XCMG brand and model visible for every supported language", () => {
    for (const [machineType, model] of Object.entries(machineModels)) {
      for (const language of languages) {
        const name = getTranslatedXCMGMachineType(machineType, language);
        expect(name).toContain(model);
        expect(name).toContain(language === "zh" ? "徐工" : "XCMG");
      }
    }
  });

  it("returns complete localized XCMG model names in German", () => {
    expect(getTranslatedXCMGMachineType("Compact Hydraulic Excavator", "de")).toBe("XCMG XE155UCR Kompakt-Hydraulikbagger");
    expect(getTranslatedXCMGMachineType("Truck-Mounted Crane", "de")).toBe("XCMG XCA120G7-1H Lastkraftwagen-Kran");
  });
});
