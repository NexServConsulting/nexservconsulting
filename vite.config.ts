import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { sitemapPlugin } from "./vite-plugin-sitemap";
import prerender from "vite-plugin-prerender";

// Blog post slugs for pre-rendering
const blogSlugs = [
  "database-migration-azure-sql",
  "sql-server-performance-optimization",
  "enterprise-data-migration-strategies",
  "ssis-etl-best-practices",
  "modernizing-legacy-access-databases",
  "data-security-cloud-migrations",
];

// Generate all routes for pre-rendering
const blogRoutes = blogSlugs.map(slug => `/blog/${slug}`);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    sitemapPlugin(),
    mode === "production" && prerender({
      routes: [
        "/",
        "/blog",
        ...blogRoutes,
      ],
      renderer: "jsdom",
      staticDir: path.resolve(__dirname, "dist"),
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
