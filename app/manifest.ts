import type { MetadataRoute } from "next";

// Required for `output: export` — generate the manifest once at build time.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "India Visa Experts",
    short_name: "Visa Experts",
    description:
      "Independent India visa & immigration consulting — Business, Employment, X, FRRO, Visa Extension, OCI & Medical visas.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1f3a",
    theme_color: "#0f1f3a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
