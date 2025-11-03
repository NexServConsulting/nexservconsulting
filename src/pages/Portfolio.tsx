import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, ShoppingCart, Heart, Landmark } from "lucide-react";
import portfolioImage from "@/assets/portfolio-migration.jpg";

const Portfolio = () => {
  const projects = [
    {
      icon: Building2,
      title: "Enterprise Data Migration",
      client: "Fortune 500 Manufacturing Company",
      description: "Migrated 10+ years of legacy data from multiple Access databases to Azure SQL, improving query performance by 400%.",
      technologies: ["MS Access", "Azure SQL", "SSIS", "PowerBI"],
      results: ["Zero downtime migration", "400% performance improvement", "Reduced storage costs by 60%"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Database Optimization",
      client: "Leading Retail Chain",
      description: "Optimized SQL Server database handling 1M+ daily transactions, significantly reducing response times.",
      technologies: ["SQL Server", "Index Optimization", "Query Tuning"],
      results: ["50% faster queries", "Enhanced scalability", "Improved user experience"],
    },
    {
      icon: Heart,
      title: "Healthcare Data Integration",
      client: "Regional Hospital Network",
      description: "Integrated patient data from 12 facilities into a centralized system with complete compliance.",
      technologies: ["SQL Server", "SSIS", "Data Encryption"],
      results: ["HIPAA compliant", "Real-time data access", "Streamlined operations"],
    },
    {
      icon: Landmark,
      title: "Financial Data Warehouse",
      client: "Investment Firm",
      description: "Built comprehensive data warehouse for financial analytics and reporting with real-time capabilities.",
      technologies: ["Azure SQL", "Data Warehouse", "SSAS"],
      results: ["Real-time analytics", "Enhanced reporting", "Better decision making"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={portfolioImage} 
            alt="Professional data migration and transformation" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Discover how we've helped businesses transform their data infrastructure and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <project.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our expertise spans across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Healthcare",
              "Finance",
              "Retail",
              "Manufacturing",
              "Education",
              "Technology",
              "Government",
              "Logistics",
            ].map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <p className="font-medium">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
