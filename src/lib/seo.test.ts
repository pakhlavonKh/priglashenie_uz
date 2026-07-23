import { describe, it, expect } from "vitest";
import { buildPageJsonLd } from "./seo";

describe("buildPageJsonLd", () => {
  it("builds structured data for the homepage and templates pages", () => {
    const homepage = buildPageJsonLd({
      pathname: "/",
      title: "Invito — Digital Invitation Templates",
      description: "Beautiful digital invitations for every celebration"
    });

    expect(homepage).toContain("WebSite");
    expect(homepage).toContain("Organization");

    const templates = buildPageJsonLd({
      pathname: "/templates",
      title: "All Templates - Invito",
      description: "Browse elegant invitation templates"
    });

    expect(templates).toContain("BreadcrumbList");
  });
});
