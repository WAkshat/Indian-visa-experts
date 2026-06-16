import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Default OpenNext config — suitable for a mostly-static Next.js site.
// Add an incrementalCache (e.g. R2) here later if you introduce ISR.
export default defineCloudflareConfig();
