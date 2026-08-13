import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(
  new URL("../client/src/data/catMachineTranslations.ts", import.meta.url),
  "utf8",
);

describe("CAT machine translations", () => {
  it("keeps CAT machine Japanese and German descriptions free of known English remnants", () => {
    expect(source).not.toMatch(/ja: '[^']*\b(?:Radiator|Improved fuel efficiency|at Full Height|general dozing|power and performance|and|projects|applications)\b/);
    expect(source).not.toMatch(/de: '[^']*\b(?:Radiator|Improved fuel efficiency|at Full Height|general dozing|power and performance|and|projects|applications)\b/);
  });

  it("uses Japanese and German terminology for CAT specifications and the gas-powered machine type", () => {
    expect(source).not.toMatch(/ja: '[^']*\b(?:bucket|blade|Gas Powered)\b/);
    expect(source).not.toMatch(/de: '[^']*\b(?:bucket|blade|Gas Powered)\b/);
    expect(source).toContain("ja: '油圧ショベル（天然ガス動力）'");
    expect(source).toContain("de: 'Hydraulikbagger (erdgasbetrieben)'");
  });

  it("matches CAT 966H translated specifications to the existing 24-ton product data", () => {
    expect(source).toContain("ja: '24 トン | 168 kW | 2.8 m³ バケット | 稼働重量：24,000 kg'");
    expect(source).toContain("de: '24 t | 168 kW | 2,8 m³ Schaufel | Betriebsgewicht: 24.000 kg'");
  });
});
