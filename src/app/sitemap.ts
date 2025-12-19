// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "http://localhost:3000";

  // Static routes
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },
  ];

  // Blog posts
  const blogPosts = [
    "first-post",
    "second-post",
    "third-post",
    "what-timestamp-complete-guide-unix-timestamps",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
  }));

  // Tools
  const tools = [
    "ip-address",
    "json-formatter",
    "slug-generator",
    "timestamp-converter",
  ].map((tool) => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
  }));

  // Final return → ✅ abhi MetadataRoute.Sitemap ke hisaab se valid hai
  return [...routes, ...blogPosts, ...tools];
}
