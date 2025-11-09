import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export function sitemapPlugin(): Plugin {
  return {
    name: 'vite-plugin-sitemap',
    closeBundle() {
      const baseUrl = 'https://nexservconsulting.lovable.app';
      const currentDate = new Date().toISOString().split('T')[0];

      // Read blog posts from the data file
      const blogPostsPath = path.resolve(__dirname, 'src/data/blogPosts.ts');
      const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf-8');

      // Extract blog posts data
      const postsMatch = blogPostsContent.match(/export const blogPosts[^=]*=\s*\[([\s\S]*?)\];/);
      
      let blogPosts: Array<{ slug: string; date: string }> = [];
      
      if (postsMatch) {
        const postsArrayContent = postsMatch[1];
        const slugMatches = [...postsArrayContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
        const dateMatches = [...postsArrayContent.matchAll(/date:\s*["']([^"']+)["']/g)];

        blogPosts = slugMatches.map((match, index) => ({
          slug: match[1],
          date: dateMatches[index] ? dateMatches[index][1] : currentDate
        }));
      }

      const staticPages = [
        { url: '/', changefreq: 'weekly', priority: '1.0' },
        { url: '/#about', changefreq: 'monthly', priority: '0.8' },
        { url: '/#services', changefreq: 'monthly', priority: '0.8' },
        { url: '/#portfolio', changefreq: 'monthly', priority: '0.7' },
        { url: '/#contact', changefreq: 'monthly', priority: '0.9' },
        { url: '/blog', changefreq: 'weekly', priority: '0.8' },
      ];

      const generateUrlEntry = (url: string, lastmod: string, changefreq: string, priority: string) => 
        `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

      const staticPagesXml = staticPages
        .map((page) => generateUrlEntry(page.url, currentDate, page.changefreq, page.priority))
        .join('\n');

      const blogPostsXml = blogPosts
        .map((post) => generateUrlEntry(`/blog/${post.slug}`, post.date, 'monthly', '0.7'))
        .join('\n');

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPagesXml}
${blogPostsXml}
</urlset>`;

      // Write sitemap to dist directory
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }

      const sitemapPath = path.join(distDir, 'sitemap.xml');
      fs.writeFileSync(sitemapPath, sitemap, 'utf-8');

      console.log(`\n✅ Dynamic sitemap generated: ${sitemapPath}`);
      console.log(`📄 Included ${staticPages.length} static pages and ${blogPosts.length} blog posts\n`);
    }
  };
}
