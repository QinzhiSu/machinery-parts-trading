import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getTranslatedIsuzuSparePartDetails } from "../client/src/data/sparePartsDetails_isuzu";
import { getTranslatedIsuzuSparePartDescription } from "../client/src/data/sparePartsTranslations_isuzu";

const supportedLanguages = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];

function loadIsuzuPartNames() {
  const productsFile = path.resolve(process.cwd(), "client/src/data/products.ts");
  const source = fs.readFileSync(productsFile, "utf8");
  const partPattern = /id: 'isuzu-sp-[^']+', partNumber: '[^']+', name: '([^']+)'/g;
  return [...source.matchAll(partPattern)].map(([, name]) => name);
}

describe("Isuzu spare-parts detail translations", () => {
  const partNames = loadIsuzuPartNames();

  it("covers every Isuzu spare part used by the brand page", () => {
    expect(partNames).toHaveLength(37);
    for (const name of partNames) {
      expect(getTranslatedIsuzuSparePartDetails(name, "en")).not.toMatch(/^OEM quality part\./);
    }
  });

  it("returns specific non-empty detail text in all supported languages", () => {
    for (const name of partNames) {
      for (const language of supportedLanguages) {
        const detail = getTranslatedIsuzuSparePartDetails(name, language);
        expect(detail).toBeTruthy();
        expect(detail.length).toBeGreaterThan(24);
        expect(detail).not.toBe(name);
      }
    }
  });

  it("uses restored details for list-card descriptions", () => {
    for (const name of partNames) {
      expect(getTranslatedIsuzuSparePartDescription(name, "de"))
        .toBe(getTranslatedIsuzuSparePartDetails(name, "de"));
    }
  });
});
