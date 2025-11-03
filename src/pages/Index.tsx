import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Database, Cloud, RefreshCw, TrendingUp, FileSpreadsheet, Server,
  Target, Users, Lightbulb, Award, Building2, ShoppingCart, Heart, Landmark,
  Calendar, Clock, ArrowRight, Mail, Phone, MapPin, CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-data-transformation.jpg";
import teamImage from "@/assets/about-team.jpg";
import servicesImage from "@/assets/services-infrastructure.jpg";
import portfolioImage from "@/assets/portfolio-migration.jpg";
import blogImage from "@/assets/blog-insights.jpg";
import contactImage from "@/assets/contact-office.jpg";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      icon: Database,
      title: "Data Migration Services",
      description: "Seamlessly migrate your data across platforms with our proven methodologies.",
      features: ["Zero downtime migration", "Cross-platform transfer", "Data integrity verification"],
    },
    {
      icon: RefreshCw,
      title: "Data Conversion",
      description: "Transform your data formats while maintaining structure and accuracy.",
      features: ["Format transformation", "Structure optimization", "Automated validation"],
    },
    {
      icon: TrendingUp,
      title: "Database Optimization",
      description: "Enhance performance and efficiency of your database infrastructure.",
      features: ["Query optimization", "Index tuning", "Performance monitoring"],
    },
    {
      icon: Cloud,
      title: "Azure SQL Solutions",
      description: "Leverage the power of cloud computing for your data infrastructure.",
      features: ["Cloud migration", "Hybrid solutions", "Security implementation"],
    },
    {
      icon: FileSpreadsheet,
      title: "Excel & Access Solutions",
      description: "Modernize and optimize your Excel and Access applications.",
      features: ["Application development", "Automation solutions", "Integration services"],
    },
    {
      icon: Server,
      title: "SQL Server & SSIS",
      description: "Expert implementation and management of SQL Server solutions.",
      features: ["ETL development", "Package optimization", "Server management"],
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering businesses through exceptional data management solutions.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We build lasting partnerships.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to solve complex challenges.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality solutions.",
    },
  ];

  const projects = [
    {
      icon: Building2,
      title: "Enterprise Data Migration",
      client: "Fortune 500 Manufacturing Company",
      description: "Migrated 10+ years of legacy data from multiple Access databases to Azure SQL, improving query performance by 400%.",
      technologies: ["MS Access", "Azure SQL", "SSIS", "PowerBI"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Database Optimization",
      client: "Leading Retail Chain",
      description: "Optimized SQL Server database handling 1M+ daily transactions, significantly reducing response times.",
      technologies: ["SQL Server", "Index Optimization", "Query Tuning"],
    },
    {
      icon: Heart,
      title: "Healthcare Data Integration",
      client: "Regional Hospital Network",
      description: "Integrated patient data from 12 facilities into a centralized system with complete compliance.",
      technologies: ["SQL Server", "SSIS", "Data Encryption"],
    },
    {
      icon: Landmark,
      title: "Financial Data Warehouse",
      client: "Investment Firm",
      description: "Built comprehensive data warehouse for financial analytics with real-time capabilities.",
      technologies: ["Azure SQL", "Data Warehouse", "SSAS"],
    },
  ];

  const posts = [
    {
      title: "Best Practices for Database Migration to Azure SQL",
      excerpt: "Learn essential strategies for a successful database migration to Azure SQL.",
      category: "Cloud Solutions",
      date: "2024-01-15",
      readTime: "8 min read",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Optimizing SQL Server Performance: A Complete Guide",
      excerpt: "Discover proven techniques to enhance your SQL Server performance.",
      category: "Database Optimization",
      date: "2024-01-10",
      readTime: "12 min read",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Data Migration Strategies for Enterprise Systems",
      excerpt: "Explore different approaches to enterprise data migration.",
      category: "Data Migration",
      date: "2024-01-05",
      readTime: "10 min read",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(192,60%,12%)] to-[hsl(220,50%,15%)]" />
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Data transformation and cloud computing" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight">
              Transform Your Data Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Expert data management, migration, and optimization solutions powered by cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services">
                <Button size="lg" className="text-lg px-8 py-6">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">About NexServ Consulting</h2>
            <p className="text-xl text-muted-foreground">
              We're a team of data experts passionate about helping businesses unlock the full potential of their data infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={teamImage} 
                alt="NexServ Consulting team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Our Story</h3>
              <p className="text-muted-foreground text-lg">
                Founded with a vision to simplify complex data challenges, NexServ Consulting has grown into a trusted partner for businesses across industries. We specialize in Microsoft technologies including Excel, MS Access, SQL Server, SSIS, and Azure SQL.
              </p>
              <p className="text-muted-foreground text-lg">
                Today, we serve clients ranging from startups to Fortune 500 companies, helping them migrate, optimize, and manage their data infrastructure with confidence.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/50 border-border hover:bg-card transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive data solutions tailored to meet your specific business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Our Portfolio</h2>
            <p className="text-xl text-muted-foreground">
              Discover how we've helped businesses transform their data infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <project.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2 text-white">{project.title}</CardTitle>
                  <p className="text-sm text-primary">{project.client}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Latest Insights</h2>
            <p className="text-xl text-muted-foreground">
              Tips and best practices from our data experts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${post.gradient} opacity-70`} />
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl text-white">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your data infrastructure? Let's start a conversation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-sm text-muted-foreground">info@nexservconsulting.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-sm text-muted-foreground">New York, NY 10001</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-white">Send Us a Message</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-white">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-white">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="bg-background border-border"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
