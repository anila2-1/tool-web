export async function GET() {
  const baseUrl = "https://zobitools.com";

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
    "how-ip-addresses-work",
    "slugify-explained",
    "what-is-json-formatting",
    "what-timestamp-complete-guide-unix-timestamps",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
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

  const sitemapData = [...routes, ...blogPosts, ...tools];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapData.map(entry => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified.toISOString()}</lastmod>
  </url>
`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
