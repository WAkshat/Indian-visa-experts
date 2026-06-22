import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static export — no server/Worker at runtime. Served as files on
  // Cloudflare's CDN (no CPU limits, no cold starts, instant TTFB).
  output: "export",
  images: {
    // Required for static export: no on-the-fly image optimization.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
