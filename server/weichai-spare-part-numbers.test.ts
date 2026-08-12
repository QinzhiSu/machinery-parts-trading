import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const productsFile = path.resolve(process.cwd(), "client/src/data/products.ts");
const productsSource = fs.readFileSync(productsFile, "utf8");
const weichaiPartNumbers = [...productsSource.matchAll(/\{ id: 'weichai-sp-\d+', partNumber: '([^']+)'/g)].map(match => match[1]);

describe("Weichai spare-part number formatting", () => {
  it("keeps all 30 Weichai part numbers free of Chinese annotation text", () => {
    expect(weichaiPartNumbers).toHaveLength(30);
    for (const partNumber of weichaiPartNumbers) {
      expect(partNumber).not.toMatch(/[\u4e00-\u9fff]/);
    }
  });

  it("retains the OEM numbers and alternate codes that replaced Chinese annotations", () => {
    expect(weichaiPartNumbers).toEqual(expect.arrayContaining([
      "61000070005 / W962",
      "612630080088 / PRELINE 420 / PL420",
      "612600081334 / FF5622",
      "61560080276 / KBEL132P110",
    ]));
  });
});
