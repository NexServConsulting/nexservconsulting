import { blogPosts } from "@/data/blogPosts";

export const generateSitemap = (baseUrl: string = "https://nexservconsulting.lovable.app"): string => {
  const staticPages = [
    { url: "/", changefreq: "weekly", priority: "1.0" },
    { url: "/#about", changefreq: "monthly", priority: "0.8" },
    { url: "/#services", changefreq: "monthly", priority: "0.8" },
    { url: "/#portfolio", changefreq: "monthly", priority: "0.7" },
    { url: "/#contact", changefreq: "monthly", priority: "0.9" },
    { url: "/blog", changefreq: "weekly", priority: "0.8" },
  ];

  const currentDate = new Date().toISOString().split("T")[0];

  const staticPagesXml = staticPages
    .map(
      (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("\n");

  const blogPostsXml = blogPosts
    .map(
      (post) => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPagesXml}
${blogPostsXml}
</urlset>`;
};
