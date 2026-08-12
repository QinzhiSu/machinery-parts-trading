import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getTranslatedCumminsSparePartDetails } from "../client/src/data/sparePartsDetails_cummins";
import { getTranslatedCumminsSparePartDescription } from "../client/src/data/sparePartsTranslations_cummins";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];

function loadCumminsPartNames() {
  const productsFile = path.resolve(process.cwd(), "client/src/data/products.ts");
  const source = fs.readFileSync(productsFile, "utf8");
  const partPattern = /id: 'cm-sp-[^']+', partNumber: '[^']+', name: '([^']+)'/g;
  return [...source.matchAll(partPattern)].map(([, name]) => name);
}

describe("Cummins spare-parts detail translations", () => {
  const partNames = loadCumminsPartNames();

  it("covers every Cummins spare part used by the brand page", () => {
    expect(partNames).toHaveLength(33);
    for (const name of partNames) {
      expect(getTranslatedCumminsSparePartDetails(name, "en")).not.toMatch(/^OEM quality part\./);
    }
  });

  it("returns specific non-empty detail text in all supported languages", () => {
    for (const name of partNames) {
      for (const language of supportedLanguages) {
        const detail = getTranslatedCumminsSparePartDetails(name, language);
        expect(detail).toBeTruthy();
        expect(detail.length).toBeGreaterThan(24);
        expect(detail).not.toBe(name);
      }
    }
  });

  it("uses restored details for list-card descriptions", () => {
    for (const name of partNames) {
      expect(getTranslatedCumminsSparePartDescription(name, "de"))
        .toBe(getTranslatedCumminsSparePartDetails(name, "de"));
    }
  });
});
