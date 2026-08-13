import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const pageSource = readFileSync(new URL("../client/src/pages/ConstructionPage.tsx", import.meta.url), "utf8");

describe("construction page hero layout", () => {
  it("places the hero title group below the top navigation instead of behind it", () => {
    expect(pageSource).toContain('h-96 md:h-[26rem] flex items-start overflow-hidden');
    expect(pageSource).toContain('container relative z-10 pt-16 md:pt-20 pb-8');
    expect(pageSource).not.toContain('h-64 md:h-80 flex items-end overflow-hidden');
  });
});
