import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

// Required for `output: export` — generate this once at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.indiavisaexperts.com";

  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.9 },
    { url: `${baseUrl}/blog`, priority: 0.8 },
    { url: `${baseUrl}/business-visa-india`, priority: 0.9 },
    { url: `${baseUrl}/employment-visa-india`, priority: 0.9 },
    { url: `${baseUrl}/x-visa-india`, priority: 0.9 },
    { url: `${baseUrl}/frro-registration-india`, priority: 0.9 },
    { url: `${baseUrl}/visa-extension-india`, priority: 0.9 },
    { url: `${baseUrl}/oci-services-india`, priority: 0.9 },
    { url: `${baseUrl}/foreign-company-india-advisory`, priority: 0.9 },
    { url: `${baseUrl}/medical-visa-india`, priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3 },
    { url: `${baseUrl}/terms`, priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, priority: 0.4 },
  ].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
