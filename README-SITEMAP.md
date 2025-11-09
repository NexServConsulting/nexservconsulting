# Dynamic Sitemap Generator

This project includes an automated sitemap generator that creates an up-to-date `sitemap.xml` file based on your blog posts and static pages.

## How It Works

The sitemap is automatically generated in three ways:

### 1. **Build Time Generation** (Recommended for Production)
When you run `npm run build`, the Vite plugin automatically generates `sitemap.xml` in the `dist` folder with all current pages and blog posts.

```bash
npm run build
```

The sitemap will be created at `dist/sitemap.xml` and deployed with your site.

### 2. **Manual Generation Script**
You can manually generate the sitemap anytime by running:

```bash
node scripts/generate-sitemap.js
```

This creates/updates `public/sitemap.xml` with all current blog posts.

### 3. **Dynamic Route**
Visit `/sitemap.xml` in your browser to see a dynamically generated sitemap based on current blog posts.

## What's Included

The sitemap automatically includes:

- **Static Pages**: Home, About, Services, Portfolio, Contact, Blog
- **Blog Posts**: All posts from `src/data/blogPosts.ts` with their actual publish dates
- **Proper Metadata**: Priority, change frequency, and last modified dates

## Adding New Content

When you add a new blog post to `src/data/blogPosts.ts`, the sitemap will automatically include it on the next build. No manual updates needed!

## Configuration

To change the base URL or update page priorities, edit:
- `vite-plugin-sitemap.ts` - For build-time generation
- `src/utils/generateSitemap.ts` - For dynamic generation
- `scripts/generate-sitemap.js` - For manual script

## Verifying Your Sitemap

After deployment, verify your sitemap at:
```
https://your-domain.com/sitemap.xml
```

Submit it to Google Search Console for better SEO indexing.
