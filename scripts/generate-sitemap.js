import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import blog posts data
const blogPostsPath = path.join(__dirname, '../src/data/blogPosts.ts');
const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf-8');

// Extract blog posts array using regex
const postsMatch = blogPostsContent.match(/export const blogPosts[^=]*=\s*\[([\s\S]*?)\];/);
if (!postsMatch) {
  console.error('Could not find blogPosts array');
  process.exit(1);
}

// Parse blog posts manually
const postsArrayContent = postsMatch[1];
const slugMatches = [...postsArrayContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
const dateMatches = [...postsArrayContent.matchAll(/date:\s*["']([^"']+)["']/g)];

const blogPosts = slugMatches.map((match, index) => ({
  slug: match[1],
  date: dateMatches[index] ? dateMatches[index][1] : new Date().toISOString().split('T')[0]
}));

const baseUrl = 'https://nexservconsulting.lovable.app';
const currentDate = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/#about', changefreq: 'monthly', priority: '0.8' },
  { url: '/#services', changefreq: 'monthly', priority: '0.8' },
  { url: '/#portfolio', changefreq: 'monthly', priority: '0.7' },
  { url: '/#contact', changefreq: 'monthly', priority: '0.9' },
  { url: '/blog', changefreq: 'weekly', priority: '0.8' },
];

const generateUrlEntry = (url, lastmod, changefreq, priority) => `  <url>
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

// Write to public directory
const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap, 'utf-8');

console.log('✅ Sitemap generated successfully at public/sitemap.xml');
console.log(`📄 Included ${staticPages.length} static pages and ${blogPosts.length} blog posts`);
