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

  it("shows the supplied WeChat and WhatsApp numbers with a WhatsApp link", () => {
    expect(contactPageSource).toContain("0022462297604/+224 622 497 604");
    expect(contactPageSource).toContain("https://wa.me/224622497604");
    expect(contactPageSource).not.toContain("+86 188 8888 8888");
    expect(contactPageSource).not.toContain("tel:+8618888888888");
  });
});
