import { describe, expect, it } from "vitest";
import { brands } from "../client/src/data/products";
import {
  getTranslatedWeichaiMachineDescription,
  getTranslatedWeichaiMachineName,
  getTranslatedWeichaiMachineSpecs,
  getTranslatedWeichaiMachineType,
} from "../client/src/data/weichaimachineTranslations";

const languages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];
const weichai = brands.find((brand) => brand.id === "weichai");

describe("Weichai machine translations", () => {
  it("covers every current Weichai source engine in all ten languages", () => {
    expect(weichai).toBeDefined();
    for (const machine of weichai!.machines) {
      for (const language of languages) {
        expect(getTranslatedWeichaiMachineName(machine.model, language)).toContain(machine.model);
        expect(getTranslatedWeichaiMachineType(machine.model, language)).toBeTruthy();
        expect(getTranslatedWeichaiMachineSpecs(machine.model, language)).toBeTruthy();
        expect(getTranslatedWeichaiMachineDescription(machine.model, language)).toBeTruthy();
      }
    }
  });

  it("keeps English specs and descriptions exactly aligned with the live product source", () => {
    for (const machine of weichai!.machines) {
      expect(getTranslatedWeichaiMachineSpecs(machine.model, "en")).toBe(machine.specs);
      expect(getTranslatedWeichaiMachineDescription(machine.model, "en")).toBe(machine.description);
    }
  });

  it("uses the corrected WP10, WP12, and WP13 source power ranges", () => {
    expect(getTranslatedWeichaiMachineSpecs("WP10", "en")).toContain("220-280 kW");
    expect(getTranslatedWeichaiMachineSpecs("WP12", "en")).toContain("280-350 kW");
    expect(getTranslatedWeichaiMachineSpecs("WP13", "en")).toContain("300-380 kW");
  });

  it("uses localized Japanese technical labels without English or Chinese source residuals", () => {
    const forbidden = /Diesel|Mid-Range|Heavy-Duty|Ultra-Heavy|kW|HP|Nm|Fuel Type|Emissions Standard|Euro|重型/;
    for (const machine of weichai!.machines) {
      const japanese = [
        getTranslatedWeichaiMachineName(machine.model, "ja"),
        getTranslatedWeichaiMachineType(machine.model, "ja"),
        getTranslatedWeichaiMachineSpecs(machine.model, "ja"),
        getTranslatedWeichaiMachineDescription(machine.model, "ja"),
      ].join(" ");
      expect(japanese).not.toMatch(forbidden);
    }
  });

  it("retains the correct localized truck applications", () => {
    expect(getTranslatedWeichaiMachineDescription("WP10", "de")).toContain("Betonmischer");
    expect(getTranslatedWeichaiMachineDescription("WP13", "fr")).toContain("camions-pompes à béton");
    expect(getTranslatedWeichaiMachineDescription("WP10", "it")).toContain("betoniere");
  });
});
