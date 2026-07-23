import { describe, it, expect } from "vitest";
import { resolveLocalizedValue } from "./use-page-title";

const mockI18n = {
  language: "uz",
  resolvedLanguage: "uz",
  t: (key: string, options?: { lng?: string; defaultValue?: string }) => {
    const translations: Record<string, Record<string, string>> = {
      uz: {
        "pages.home.title": "Invito — Raqamli Taklifnomalar",
        "pages.templates.title": "Barcha shablonlar"
      },
      ru: {
        "pages.home.title": "Invito — Шаблоны цифровых приглашений",
        "pages.templates.title": "Все шаблоны"
      }
    };

    const lng = options?.lng || "uz";
    return translations[lng]?.[key] || options?.defaultValue || key;
  },
  exists: (key: string, options?: { lng?: string }) => {
    const lng = options?.lng || "uz";
    const translations: Record<string, Record<string, string>> = {
      uz: {
        "pages.home.title": "Invito — Raqamli Taklifnomalar",
        "pages.templates.title": "Barcha shablonlar"
      },
      ru: {
        "pages.home.title": "Invito — Шаблоны цифровых приглашений",
        "pages.templates.title": "Все шаблоны"
      }
    };

    return Boolean(translations[lng]?.[key]);
  }
};

describe("resolveLocalizedValue", () => {
  it("prefers the active language and falls back to Russian", () => {
    expect(resolveLocalizedValue("pages.home.title", mockI18n as never)).toBe("Invito — Raqamli Taklifnomalar");

    expect(resolveLocalizedValue("pages.templates.title", {
      ...mockI18n,
      language: "kz",
      resolvedLanguage: "kz"
    } as never)).toBe("Все шаблоны");
  });
});
