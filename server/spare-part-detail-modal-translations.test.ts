import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const componentFile = path.resolve(process.cwd(), "client/src/components/SparePartDetailModal.tsx");
const componentSource = fs.readFileSync(componentFile, "utf8");

const expectedNameMappings = [
  ["caterpillar", "getTranslatedCaterpillarSparePartName"],
  ["shantui", "getTranslatedShantuiSparePartName"],
  ["xcmg", "getTranslatedXCMGSparePartName"],
  ["liugong", "getTranslatedLiuGongSparePartName"],
  ["sany", "getTranslatedSanySparePartName"],
  ["komatsu", "getTranslatedKomatsuSparePartName"],
  ["isuzu", "getTranslatedIsuzuSparePartName"],
  ["shacman", "getTranslatedShacmanSparePartName"],
  ["sinotruk", "getTranslatedSinotrukSparePartName"],
  ["toyota", "getTranslatedToyotaSparePartName"],
  ["cummins", "getTranslatedCumminsSparePartName"],
  ["weichai", "getTranslatedWeichaiSparePartName"],
];

describe("spare-part detail modal name translation routing", () => {
  it("routes all 12 brands through their independent spare-part name functions", () => {
    for (const [brandId, functionName] of expectedNameMappings) {
      expect(componentSource).toContain(`${brandId}: ${functionName}`);
    }
  });

  it("renders the mapped translated name in the modal title", () => {
    expect(componentSource).toContain("const translatedPartName = getNameForBrand ? getNameForBrand(part.name, language) : part.name;");
    expect(componentSource).toContain("<h2 className=\"text-2xl font-bold\">{translatedPartName}</h2>");
  });
});
