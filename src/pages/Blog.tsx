import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogImage from "@/assets/blog-insights.jpg";

const Blog = () => {
  const posts = [
    {
      title: "Best Practices for Database Migration to Azure SQL",
      excerpt: "Learn the essential strategies for a successful database migration to Azure SQL, including planning, testing, and optimization.",
      category: "Cloud Solutions",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "gradient-1",
    },
    {
      title: "Optimizing SQL Server Performance: A Complete Guide",
      excerpt: "Discover proven techniques to enhance your SQL Server performance, from query optimization to index management.",
      category: "Database Optimization",
      date: "2024-01-10",
      readTime: "12 min read",
      image: "gradient-2",
    },
    {
      title: "Data Migration Strategies for Enterprise Systems",
      excerpt: "Explore different approaches to enterprise data migration, including zero-downtime strategies and risk mitigation.",
      category: "Data Migration",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "gradient-3",
    },
    {
      title: "SSIS Best Practices for ETL Development",
      excerpt: "Master the art of building efficient ETL processes with SQL Server Integration Services.",
      category: "Development",
      date: "2023-12-28",
      readTime: "15 min read",
      image: "gradient-4",
    },
    {
      title: "Modernizing Legacy Access Databases",
      excerpt: "A practical guide to migrating and modernizing Microsoft Access applications for the cloud era.",
      category: "Modernization",
      date: "2023-12-20",
      readTime: "7 min read",
      image: "gradient-5",
    },
    {
      title: "Data Security in Cloud Migrations",
      excerpt: "Essential security considerations when moving your data to the cloud, with focus on compliance and protection.",
      category: "Security",
      date: "2023-12-15",
      readTime: "9 min read",
      image: "gradient-6",
    },
  ];

  const gradients = {
    "gradient-1": "from-blue-500 to-cyan-500",
    "gradient-2": "from-purple-500 to-pink-500",
    "gradient-3": "from-green-500 to-teal-500",
    "gradient-4": "from-orange-500 to-red-500",
    "gradient-5": "from-indigo-500 to-blue-500",
    "gradient-6": "from-pink-500 to-rose-500",
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={blogImage} 
            alt="Data analytics and insights dashboard" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights, tips, and best practices from our data experts
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${gradients[post.image as keyof typeof gradients]} opacity-80 group-hover:opacity-100 transition-opacity`} />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" className="mt-4 group/btn p-0 h-auto">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Browse by Topic</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore articles organized by category
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "All Posts",
              "Cloud Solutions",
              "Database Optimization",
              "Data Migration",
              "Development",
              "Modernization",
              "Security",
              "Best Practices",
            ].map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"}>
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
