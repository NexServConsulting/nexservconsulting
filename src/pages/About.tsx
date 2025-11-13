import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import teamImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering businesses through exceptional data management and optimization solutions.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We build lasting partnerships based on trust and results.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to solve complex data challenges efficiently.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality solutions and exceeding expectations.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">About NexServ Consulting</h1>
            <p className="text-xl text-muted-foreground">
              We help small to medium businesses clean up, modernize, and stabilize their data systems. No drama, no confusion, no downtime surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={teamImage} 
                alt="NexServ Consulting team collaborating on data analytics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Recently founded by industry veterans with a vision to simplify complex data challenges, NexServ Consulting brings decades of collective experience to every project. Our journey began with a simple belief: that every organization deserves access to world-class data management solutions, delivered with the agility of a modern firm and the wisdom of seasoned experts.
                </p>
                <p>
                  Today, we serve clients ranging from startups to Fortune 500 companies, helping them migrate, optimize, and manage their data infrastructure with confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our founding team of industry veterans brings together decades of combined experience in database management, cloud solutions, and enterprise data architecture—now channeled into a nimble, client-focused consultancy.
              </p>
              <p>
                We specialize in Microsoft technologies including Excel, MS Access, SQL Server, SSIS, and Azure SQL, ensuring seamless integration with your existing ecosystem while preparing you for the future of data management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team combines technical expertise with business acumen to deliver exceptional results
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { role: "Database Architects", count: "15+" },
              { role: "Cloud Specialists", count: "10+" },
              { role: "Data Analysts", count: "20+" },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{item.count}</div>
                  <div className="text-muted-foreground">{item.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
