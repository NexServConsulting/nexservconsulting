import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, data management, database solutions`}
        canonical={`/blog/${post.slug}`}
      />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="mb-12 rounded-lg overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          {post.slug === "database-migration-azure-sql" && (
            <>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
              
              <h2>Planning Your Migration</h2>
              <p>Before embarking on a database migration to Azure SQL, thorough planning is essential. This phase involves assessing your current database infrastructure, identifying dependencies, and establishing clear migration objectives.</p>
              
              <h3>Assessment Phase</h3>
              <p>Start by conducting a comprehensive assessment of your existing database. Use Microsoft's Data Migration Assistant (DMA) to identify any compatibility issues and get recommendations for your target Azure SQL platform.</p>
              
              <h2>Testing Strategy</h2>
              <p>A robust testing strategy ensures that your migrated database performs as expected. This includes functional testing, performance testing, and user acceptance testing.</p>
              
              <h3>Performance Optimization</h3>
              <p>Azure SQL offers unique optimization opportunities. Leverage features like automatic tuning, intelligent insights, and built-in monitoring to ensure optimal performance post-migration.</p>
              
              <h2>Best Practices</h2>
              <ul>
                <li>Always maintain a complete backup before migration</li>
                <li>Test your migration process in a non-production environment first</li>
                <li>Plan for minimal downtime with online migration tools</li>
                <li>Monitor performance metrics closely during and after migration</li>
                <li>Implement proper security measures including encryption and access controls</li>
              </ul>
            </>
          )}
          
          {post.slug === "sql-server-performance-optimization" && (
            <>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
              
              <h2>Query Optimization Fundamentals</h2>
              <p>Query optimization is the cornerstone of SQL Server performance. Understanding how queries are executed and identifying bottlenecks is crucial for maintaining a high-performing database.</p>
              
              <h3>Execution Plans</h3>
              <p>Learn to read and interpret execution plans. They provide valuable insights into how SQL Server processes your queries and where optimization opportunities exist.</p>
              
              <h2>Index Management</h2>
              <p>Proper indexing can dramatically improve query performance. However, over-indexing can lead to decreased write performance and increased storage requirements.</p>
              
              <h3>Index Strategies</h3>
              <ul>
                <li>Use clustered indexes for frequently accessed range queries</li>
                <li>Implement covering indexes to reduce lookup operations</li>
                <li>Regularly maintain indexes to prevent fragmentation</li>
                <li>Remove unused indexes to improve write performance</li>
              </ul>
              
              <h2>Memory Configuration</h2>
              <p>SQL Server's memory configuration significantly impacts performance. Properly allocating memory between the buffer pool, query workspace, and other components ensures optimal resource utilization.</p>
            </>
          )}
          
          {post.slug === "enterprise-data-migration-strategies" && (
            <>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
              
              <h2>Zero-Downtime Migration Approaches</h2>
              <p>For enterprise systems where downtime isn't an option, several strategies can ensure continuous availability during migration.</p>
              
              <h3>Database Replication</h3>
              <p>Implementing replication allows you to keep systems in sync during migration, minimizing the cutover window to seconds rather than hours.</p>
              
              <h2>Risk Mitigation Strategies</h2>
              <p>Enterprise migrations carry significant risks. Implementing proper risk mitigation strategies is essential for success.</p>
              
              <h3>Rollback Planning</h3>
              <p>Always have a detailed rollback plan. Test this plan thoroughly to ensure you can quickly revert if issues arise during migration.</p>
              
              <h2>Data Validation</h2>
              <p>Comprehensive data validation ensures integrity throughout the migration process. Implement automated validation checks to compare source and target systems.</p>
            </>
          )}
          
          {post.slug === "ssis-etl-best-practices" && (
            <>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
              
              <h2>Package Design Principles</h2>
              <p>Well-designed SSIS packages are modular, maintainable, and performant. Following established design patterns ensures your ETL processes stand the test of time.</p>
              
              <h3>Error Handling</h3>
              <p>Robust error handling is critical in production ETL environments. Implement comprehensive logging and alerting to quickly identify and resolve issues.</p>
              
              <h2>Performance Optimization</h2>
              <p>SSIS offers numerous optimization opportunities. Understanding data flow buffer architecture and proper component selection can dramatically improve throughput.</p>
              
              <h3>Parallel Processing</h3>
              <p>Leverage SSIS's parallel processing capabilities to maximize throughput. Design packages to process independent data flows simultaneously.</p>
              
              <h2>Deployment Best Practices</h2>
              <ul>
                <li>Use project deployment model for better management</li>
                <li>Implement environment-specific configurations</li>
                <li>Version control your SSIS packages</li>
                <li>Automate deployment processes</li>
                <li>Monitor package execution and performance</li>
              </ul>
            </>
          )}
          
          {post.slug === "modernizing-legacy-access-databases" && (
            <>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
              
              <h2>Assessment and Planning</h2>
              <p>Legacy Access databases often contain years of business logic and data. A thorough assessment helps identify modernization opportunities and potential challenges.</p>
              
              <h3>Migration Paths</h3>
              <p>Several modernization paths exist, from simple backend migrations to complete application rewrites. Choose the approach that balances cost, risk, and business value.</p>
              
              <h2>Backend Migration</h2>
              <p>Migrating the Access backend to SQL Server while maintaining the Access frontend is often the quickest modernization path.</p>
              
              <h3>Data Type Mapping</h3>
              <p>Understanding how Access data types map to SQL Server ensures data integrity during migration. Pay special attention to AutoNumber fields and memo fields.</p>
              
              <h2>Cloud-Native Solutions</h2>
              <p>For complete modernization, consider rebuilding applications using cloud-native technologies. This approach offers scalability, improved security, and modern user experiences.</p>
            </>
          )}
          
          {post.slug === "data-security-cloud-migrations" && (
            <>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
              
              <h2>Security Planning</h2>
              <p>Security must be a primary consideration throughout your cloud migration journey. A comprehensive security strategy protects your data before, during, and after migration.</p>
              
              <h3>Encryption Strategies</h3>
              <p>Implement encryption at rest and in transit. Azure provides multiple encryption options including transparent data encryption (TDE) and Always Encrypted.</p>
              
              <h2>Compliance Requirements</h2>
              <p>Many organizations must comply with regulations like GDPR, HIPAA, or PCI DSS. Ensure your cloud migration strategy addresses all compliance requirements.</p>
              
              <h3>Data Governance</h3>
              <p>Establish clear data governance policies. Define data classification, access controls, and retention policies before migrating to the cloud.</p>
              
              <h2>Monitoring and Auditing</h2>
              <p>Implement comprehensive monitoring and auditing capabilities. Azure's security center and advanced threat protection provide real-time security insights.</p>
              
              <h3>Access Management</h3>
              <ul>
                <li>Implement Azure Active Directory integration</li>
                <li>Use role-based access control (RBAC)</li>
                <li>Enable multi-factor authentication</li>
                <li>Regular access reviews and audits</li>
                <li>Implement least privilege principle</li>
              </ul>
            </>
          )}
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Posts
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
