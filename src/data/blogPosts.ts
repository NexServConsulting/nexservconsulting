import blogAzureMigration from "@/assets/blog-azure-migration.jpg";
import blogSqlOptimization from "@/assets/blog-sql-optimization.jpg";
import blogDataMigration from "@/assets/blog-data-migration.jpg";
import blogSsisEtl from "@/assets/blog-ssis-etl.jpg";
import blogAccessModernization from "@/assets/blog-access-modernization.jpg";
import blogSecurityCloud from "@/assets/blog-security-cloud.jpg";

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Best Practices for Database Migration to SQL Server",
    excerpt: "Learn the essential strategies for a successful database migration to Azure SQL, including planning, testing, and optimization.",
    category: "Database Migration",
    date: "2024-01-15",
    readTime: "8 min read",
    image: blogAzureMigration,
    slug: "database-migration-azure-sql",
  },
  {
    title: "Optimizing SQL Server Performance: A Quick Guide",
    excerpt: "Discover proven techniques to enhance your SQL Server performance, from query optimization to index management.",
    category: "Database Optimization",
    date: "2024-01-10",
    readTime: "12 min read",
    image: blogSqlOptimization,
    slug: "sql-server-performance-optimization",
  },
  {
    title: "Data Migration Strategies for Enterprise Systems",
    excerpt: "Explore different approaches to enterprise data migration, including zero-downtime strategies and risk mitigation.",
    category: "Data Migration",
    date: "2024-01-05",
    readTime: "10 min read",
    image: blogDataMigration,
    slug: "enterprise-data-migration-strategies",
  },
  {
    title: "SSIS Best Practices for ETL Development",
    excerpt: "Master the art of building efficient ETL processes with SQL Server Integration Services.",
    category: "Development",
    date: "2023-12-28",
    readTime: "15 min read",
    image: blogSsisEtl,
    slug: "ssis-etl-best-practices",
  },
  {
    title: "Modernizing Legacy Access Databases",
    excerpt: "A practical guide to migrating and modernizing Microsoft Access applications for the cloud era.",
    category: "Modernization",
    date: "2023-12-20",
    readTime: "7 min read",
    image: blogAccessModernization,
    slug: "modernizing-legacy-access-databases",
  },
  {
    title: "Data Security in Cloud Migrations",
    excerpt: "Essential security considerations when moving your data to the cloud, with focus on compliance and protection.",
    category: "Security",
    date: "2023-12-15",
    readTime: "9 min read",
    image: blogSecurityCloud,
    slug: "data-security-cloud-migrations",
  },
];

export const categories = [
  "All Posts",
  "Database Migration",
  "Database Optimization",
  "Data Migration",
  "Development",
  "Modernization",
  "Security",
];
