import type { MetadataRoute } from "next";

// Required for `output: export` — generate this once at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://indiavisaexperts.com/sitemap.xml",
  };
}
