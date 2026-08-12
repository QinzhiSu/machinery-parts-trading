import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getTranslatedToyotaSparePartDetails } from "../client/src/data/sparePartsDetails_toyota";
import { getTranslatedToyotaSparePartDescription } from "../client/src/data/sparePartsTranslations_toyota";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];

function loadToyotaPartNames() {
  const productsFile = path.resolve(process.cwd(), "client/src/data/products.ts");
  const source = fs.readFileSync(productsFile, "utf8");
  const partPattern = /id: 'toyota-sp-[^']+', partNumber: '[^']+', name: '([^']+)'/g;
  return [...source.matchAll(partPattern)].map(([, name]) => name);
}

describe("Toyota spare-parts detail translations", () => {
  const partNames = loadToyotaPartNames();

  it("covers every Toyota spare part used by the brand page", () => {
    expect(partNames).toHaveLength(30);

    for (const name of partNames) {
      expect(getTranslatedToyotaSparePartDetails(name, "en")).not.toMatch(/^OEM quality part\./);
    }
  });

  it("returns specific non-empty detail text in all supported languages", () => {
    for (const name of partNames) {
      for (const language of supportedLanguages) {
        const detail = getTranslatedToyotaSparePartDetails(name, language);
        expect(detail).toBeTruthy();
        expect(detail.length).toBeGreaterThan(24);
        expect(detail).not.toBe(name);
      }
    }
  });

  it("uses the same restored detail content for list-card descriptions", () => {
    for (const name of partNames) {
      expect(getTranslatedToyotaSparePartDescription(name, "de"))
        .toBe(getTranslatedToyotaSparePartDetails(name, "de"));
    }
  });
});
