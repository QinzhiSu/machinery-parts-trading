import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { contactPageTranslations } from "../client/src/data/contactPageTranslations";
import type { Language } from "../client/src/data/translations";

const contactPageSource = readFileSync(new URL("../client/src/pages/ContactPage.tsx", import.meta.url), "utf8");
const languages: Language[] = ["en", "zh", "es", "fr", "de", "pt", "ru", "ja", "ar", "it"];

describe("contact page translations", () => {
  it("provides all independent Contact-page strings in ten languages", () => {
    for (const language of languages) {
      const copy = contactPageTranslations[language];
      expect(copy.namePlaceholder).toBeTruthy();
      expect(copy.companyPlaceholder).toBeTruthy();
      expect(copy.phonePlaceholder).toBeTruthy();
      expect(copy.subjectPlaceholder).toBeTruthy();
      expect(copy.success).toBeTruthy();
      expect(copy.exportMarketsLabel).toBeTruthy();
      expect(copy.markets).toBeTruthy();
    }
  });

  it("routes visible Contact-page text through language helpers without changing contact details", () => {
    expect(contactPageSource).toContain("useLanguage");
    expect(contactPageSource).toContain("pageCopy.success");
    expect(contactPageSource).toContain("pageCopy.exportMarketsLabel");
    expect(contactPageSource).toContain("WeChat / WhatsApp");
    expect(contactPageSource).toContain("0022462297604/+224 622 497 604");
    expect(contactPageSource).toContain("https://wa.me/224622497604");
    expect(contactPageSource).not.toContain(">Send Inquiry<");
  });
});
