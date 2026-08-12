import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const productsFile = path.resolve(process.cwd(), "client/src/data/products.ts");
const productsSource = fs.readFileSync(productsFile, "utf8");

describe("Cummins spare-part image mapping", () => {
  it("keeps OEM 3964715 mapped to the dedicated exhaust-valve pushrod image", () => {
    expect(productsSource).toContain(
      "partNumber: '3964715', name: '排气门推杆', description: 'Cummins 3964715 - 排气门推杆. 发动机排气门推杆，传递凸轮轴运动到排气门。 Compatible with: 福田欧马可、陕汽 L3000. Engine Models: ISF 3.8. Specifications: 合金钢，长度 250mm.', image: '/manus-storage/cw3Vw0vXQjyz_f838020a.jpg'",
    );
  });
});
