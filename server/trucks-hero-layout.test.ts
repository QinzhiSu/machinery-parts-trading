import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const pageSource = readFileSync(new URL("../client/src/pages/TrucksPage.tsx", import.meta.url), "utf8");

describe("trucks page hero layout", () => {
  it("matches the construction page title-group vertical position", () => {
    expect(pageSource).toContain('h-96 md:h-[26rem] flex items-start overflow-hidden');
    expect(pageSource).toContain('style={{ paddingTop: "3rem" }}');
    expect(pageSource).toContain('container relative z-10 pt-0 md:pt-0 pb-8');
    expect(pageSource).not.toContain('h-64 md:h-80 flex items-end overflow-hidden');
  });
});
