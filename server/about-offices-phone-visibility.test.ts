import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const aboutPageSource = readFileSync(
  new URL("../client/src/pages/AboutPage.tsx", import.meta.url),
  "utf8",
);

describe("global office contact display", () => {
  it("does not render office telephone numbers while retaining office addresses", () => {
    expect(aboutPageSource).not.toContain("{office.phone}");
    expect(aboutPageSource).toContain("{office.address}");
    expect(aboutPageSource).toContain("Beijing, China");
    expect(aboutPageSource).toContain("Conakry, Guinea");
    expect(aboutPageSource).toContain("Antananarivo, Madagascar");
    expect(aboutPageSource).toContain("Hong Kong");
    expect(aboutPageSource).toContain("Shandong Province, China");
  });
});
