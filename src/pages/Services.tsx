import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Cloud, RefreshCw, TrendingUp, FileSpreadsheet, Server, ArrowRight, Globe, Wrench } from "lucide-react";
import servicesImage from "@/assets/services-infrastructure.jpg";
import SEO from "@/components/SEO";

const Services = () => {
  const services = [
    {
      id: "data-migration",
      icon: Database,
      title: "Data Migration Services",
      description: "Seamlessly migrate your data across platforms with our proven methodologies.",
      features: [
        "Minimal downtime migration strategies",
        "Cross-platform data transfer",
        "Data integrity verification",
        "Legacy system modernization",
      ],
    },
    {
      id: "data-conversion",
      icon: RefreshCw,
      title: "Data Conversion",
      description: "Transform your data formats while maintaining structure and accuracy.",
      features: ["Format transformation", "Structure optimization", "Automated validation", "Batch processing"],
    },
    {
      id: "database-optimization",
      icon: TrendingUp,
      title: "Database Optimization",
      description: "Enhance performance and efficiency of your database infrastructure.",
      features: ["Query optimization", "Index tuning", "Performance monitoring", "Scalability planning"],
    },
    {
      id: "database-maintenance",
      icon: Wrench,
      title: "Database Maintenance",
      description: "Proactive maintenance and monitoring to keep your databases healthy and performant.",
      features: ["Health checks", "Performance monitoring", "Backup verification", "Proactive issue detection"],
    },
    // Azure SQL Solutions - hidden
    // {
    //   id: "azure-sql",
    //   icon: Cloud,
    //   title: "Azure SQL Solutions",
    //   description: "Leverage the power of cloud computing for your data infrastructure.",
    //   features: ["Cloud migration", "Hybrid solutions", "Security implementation", "Cost optimization"],
    // },
    {
      id: "excel-access",
      icon: FileSpreadsheet,
      title: "Excel & MS Access Solutions",
      description: "Modernize and optimize your Excel and MS Access applications.",
      features: ["Application development", "Automation solutions", "Integration services", "Training and support"],
    },
    // SQL Server & SSIS - hidden
    // {
    //   id: "sql-server-ssis",
    //   icon: Server,
    //   title: "SQL Server & SSIS",
    //   description: "Expert implementation and management of SQL Server solutions.",
    //   features: ["ETL development", "Package optimization", "Server management", "Integration services"],
    // },
    {
      id: "web-development",
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["Responsive design", "Full-stack development", "Performance optimization"],
    },
  ];

  return (
    <>
      <SEO
        title="NexServ Consulting | Data and design, in sync."
        description="NexServ Consulting helps organizations modernize their data infrastructure and build fast, reliable web applications. We specialize in SQL Server optimization, data migration, Excel and MS Access modernization, and custom website development. Our solutions improve performance, reduce downtime, and keep data workflows stable as your business grows."
        keywords="data migration services, database optimization, Azure SQL solutions, SQL Server consulting, SSIS development, data conversion, Excel automation, MS Access database migration, web development, ETL services, cloud migration, database performance tuning"
        canonical="/services"
      />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={servicesImage}
              alt="Modern data center infrastructure"
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
          </div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive data solutions tailored to meet your specific business needs and drive measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={`/services/${service.id}`}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-secondary/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your needs and challenges" },
                { step: "02", title: "Planning", desc: "Creating a detailed roadmap" },
                { step: "03", title: "Execution", desc: "Implementing the solution" },
                { step: "04", title: "Support", desc: "Ongoing optimization and assistance" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary/20 mb-2">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Let's Start Your Project</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Ready to transform your data infrastructure? Get in touch with our team today.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
