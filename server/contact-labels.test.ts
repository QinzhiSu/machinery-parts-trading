import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const contactPageSource = readFileSync(
  new URL("../client/src/pages/ContactPage.tsx", import.meta.url),
  "utf8",
);

describe("contact labels", () => {
  it("uses WeChat / WhatsApp instead of Phone / WhatsApp in both visible contact labels", () => {
    expect(contactPageSource).not.toContain("Phone / WhatsApp");
    expect(contactPageSource.match(/WeChat \/ WhatsApp/g)).toHaveLength(2);
  });
});
