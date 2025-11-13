import { Database, Cloud, RefreshCw, TrendingUp, FileSpreadsheet, Server, Globe, LucideIcon } from "lucide-react";

export interface ServiceDetail {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  pricing: {
    tier: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: "data-migration",
    icon: Database,
    title: "Data Migration Services",
    description: "Seamlessly migrate your data across platforms with our proven methodologies.",
    longDescription: "Moving data should not break your business. We handle migrations from old systems to modern platforms with a focus on accuracy, stability, and minimal disruption. Whether you are leaving a legacy database, consolidating systems, or shifting to the cloud, we keep the process clean and predictable.",
    features: [
      "Minimal downtime migration strategies",
      "Cross-platform data transfer (SQL Server, Azure SQL, Access, Excel, MySQL, and more)",
      "Full data integrity checks and reconciliation",
      "Legacy system modernization",
      "Testing and validation",
      "Rollback and safety planning for every migration",
    ],
    benefits: [
      "Keep your business running during the cutover",
      "Guarantee accurate and complete data",
      "Cut migration time by eliminating manual cleanup",
      "Clear documentation and handover for your team",
    ],
    processSteps: [
      {
        title: "Assessment",
        description: "We review your current system, data structure, integrations, and workloads. This gives us the full picture so the migration plan is realistic, safe, and aligned with your business needs.",
      },
      {
        title: "Planning",
        description: "A detailed strategy is built around timelines, dependencies, compatibility checks, and risks. You get a clear roadmap before any data moves.",
      },
      {
        title: "Testing",
        description: "We run the migration in a controlled environment, verify row counts, validate schema compatibility, and confirm your applications run as expected.",
      },
      {
        title: "Execution",
        description: "The actual migration is done using our proven low-disruption approach. We keep your team informed during every phase, and your data stays protected from start to finish.",
      },
      {
        title: "Validation",
        description: "We confirm the migrated data matches the source, perform full quality checks, and fix any issues before handing the system back to you.",
      },
    ],
    pricing: [
      {
        tier: "Small Projects",
        price: "Starting at $5,000",
        features: [
          "Up to 100GB data",
          "Single database migration",
          "Row-count and schema validation",
          "Three weeks of post-migration support",
        ],
      },
      {
        tier: "Medium Projects",
        price: "Starting at $15,000",
        features: [
          "Up to 250GB data",
          "Multiple database migration",
          "Full data integrity checks and reconciliation",
          "One month of post-migration support",
          "Training for your team included",
        ],
        popular: true,
      },
      {
        tier: "Enterprise",
        price: "Custom Quote",
        features: [
          "Large or multi-database migrations",
          "Hybrid (on-prem to cloud) architecture",
          "High-volume data movement",
          "Detailed migration planning and validation",
          "After-hours cutover support",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a typical migration take?",
        answer: "Migration timelines vary based on data volume and complexity. Small projects typically take 2-4 weeks, while enterprise migrations can range from 2-6 months.",
      },
      {
        question: "Will there be downtime during migration?",
        answer: "We implement zero-downtime strategies for most migrations, ensuring your business operations continue uninterrupted.",
      },
      {
        question: "What happens if something goes wrong?",
        answer: "We maintain comprehensive rollback plans and backups. Our team monitors every step and can quickly revert if issues arise.",
      },
    ],
  },
  {
    id: "data-conversion",
    icon: RefreshCw,
    title: "Data Conversion",
    description: "Transform your data formats while maintaining structure and accuracy.",
    longDescription: "Convert data between formats, databases, and systems without losing structure or integrity. Our automated conversion tools and validation processes ensure accurate transformation every time.",
    features: [
      "Format transformation",
      "Structure optimization",
      "Automated validation",
      "Batch processing",
      "Custom mapping rules",
      "Error handling and recovery",
    ],
    benefits: [
      "Preserve data relationships and integrity",
      "Automate repetitive conversion tasks",
      "Reduce conversion errors by 95%",
      "Support for all major data formats",
    ],
    processSteps: [
      {
        title: "Analysis",
        description: "Review source and target formats to identify conversion requirements and potential challenges.",
      },
      {
        title: "Mapping",
        description: "Create detailed field mappings and transformation rules for accurate data conversion.",
      },
      {
        title: "Conversion",
        description: "Execute automated conversion using our proven tools and methodologies.",
      },
      {
        title: "Verification",
        description: "Validate converted data against source to ensure 100% accuracy.",
      },
    ],
    pricing: [
      {
        tier: "Basic",
        price: "Starting at $2,000",
        features: [
          "Simple format conversion",
          "Up to 1GB data",
          "Standard validation",
          "1 week support",
        ],
      },
      {
        tier: "Professional",
        price: "Starting at $7,500",
        features: [
          "Complex transformations",
          "Up to 50GB data",
          "Advanced validation",
          "2 weeks support",
          "Custom mapping",
        ],
        popular: true,
      },
      {
        tier: "Enterprise",
        price: "Custom Quote",
        features: [
          "Large-scale conversions",
          "Unlimited data",
          "Priority support",
          "Ongoing maintenance",
        ],
      },
    ],
    faqs: [
      {
        question: "What data formats do you support?",
        answer: "We support all major formats including CSV, Excel, JSON, XML, SQL databases, and proprietary formats. Contact us for specific format inquiries.",
      },
      {
        question: "How do you ensure data accuracy?",
        answer: "We use automated validation tools and manual quality checks to verify 100% accuracy of converted data.",
      },
    ],
  },
  {
    id: "database-optimization",
    icon: TrendingUp,
    title: "Database Optimization",
    description: "Enhance performance and efficiency of your database infrastructure.",
    longDescription: "Improve database performance, reduce query times, and optimize resource utilization. Our experts analyze your database and implement proven optimization techniques.",
    features: [
      "Query optimization",
      "Index tuning",
      "Performance monitoring",
      "Scalability planning",
      "Resource optimization",
      "Bottleneck identification",
    ],
    benefits: [
      "Reduce query response time by up to 80%",
      "Lower infrastructure costs",
      "Improve application performance",
      "Enhance user experience",
    ],
    processSteps: [
      {
        title: "Audit",
        description: "Comprehensive analysis of current database performance and identify bottlenecks.",
      },
      {
        title: "Recommendations",
        description: "Provide detailed optimization recommendations with expected performance gains.",
      },
      {
        title: "Implementation",
        description: "Apply optimizations systematically with minimal disruption to operations.",
      },
      {
        title: "Monitoring",
        description: "Continuous monitoring to ensure sustained performance improvements.",
      },
    ],
    pricing: [
      {
        tier: "Quick Tune-Up",
        price: "Starting at $3,000",
        features: [
          "Performance audit",
          "Query optimization",
          "Index recommendations",
          "Implementation guide",
        ],
      },
      {
        tier: "Comprehensive",
        price: "Starting at $10,000",
        features: [
          "Full database optimization",
          "Custom indexing strategy",
          "Ongoing monitoring",
          "3 months support",
          "Training session",
        ],
        popular: true,
      },
      {
        tier: "Enterprise",
        price: "Custom Quote",
        features: [
          "Multi-database optimization",
          "24/7 performance monitoring",
          "Dedicated DBA support",
          "Custom SLA",
        ],
      },
    ],
    faqs: [
      {
        question: "How much performance improvement can I expect?",
        answer: "Most clients see 50-80% improvement in query performance. Results vary based on current database state and optimization opportunities.",
      },
      {
        question: "Will optimization affect my current operations?",
        answer: "We perform optimizations during off-peak hours and use non-disruptive techniques to minimize impact on operations.",
      },
    ],
  },
  {
    id: "azure-sql",
    icon: Cloud,
    title: "Azure SQL Solutions",
    description: "Leverage the power of cloud computing for your data infrastructure.",
    longDescription: "Migrate to Azure SQL or optimize your existing cloud infrastructure. We provide end-to-end Azure SQL services from migration to ongoing management and optimization.",
    features: [
      "Cloud migration",
      "Hybrid solutions",
      "Security implementation",
      "Cost optimization",
      "High availability setup",
      "Disaster recovery planning",
    ],
    benefits: [
      "Reduce infrastructure costs by up to 40%",
      "Improve scalability and reliability",
      "Enhanced security and compliance",
      "Automated backups and updates",
    ],
    processSteps: [
      {
        title: "Assessment",
        description: "Evaluate current infrastructure and define cloud migration strategy.",
      },
      {
        title: "Architecture",
        description: "Design optimal Azure SQL architecture for your requirements.",
      },
      {
        title: "Migration",
        description: "Seamless migration to Azure SQL with zero data loss.",
      },
      {
        title: "Optimization",
        description: "Fine-tune performance and costs for optimal cloud operations.",
      },
    ],
    pricing: [
      {
        tier: "Starter",
        price: "Starting at $8,000",
        features: [
          "Single database migration",
          "Basic security setup",
          "1 month support",
          "Documentation",
        ],
      },
      {
        tier: "Professional",
        price: "Starting at $20,000",
        features: [
          "Multiple database migration",
          "Advanced security",
          "High availability setup",
          "3 months support",
          "Cost optimization",
        ],
        popular: true,
      },
      {
        tier: "Enterprise",
        price: "Custom Quote",
        features: [
          "Complex multi-region setup",
          "Disaster recovery",
          "24/7 managed support",
          "Dedicated cloud architect",
        ],
      },
    ],
    faqs: [
      {
        question: "How much will Azure SQL cost monthly?",
        answer: "Costs vary based on performance tier, storage, and features. We provide detailed cost estimates and optimization strategies during planning.",
      },
      {
        question: "Can I keep my on-premise databases?",
        answer: "Yes, we offer hybrid solutions that integrate on-premise databases with Azure SQL for optimal flexibility.",
      },
    ],
  },
  {
    id: "excel-access",
    icon: FileSpreadsheet,
    title: "Excel & Access Solutions",
    description: "Modernize and optimize your Excel and Access applications.",
    longDescription: "Transform spreadsheet chaos into professional database solutions. We modernize Excel and Access applications, automate workflows, and migrate to enterprise-grade systems.",
    features: [
      "Application development",
      "Automation solutions",
      "Integration services",
      "Training and support",
      "Data migration",
      "Process optimization",
    ],
    benefits: [
      "Eliminate manual data entry",
      "Reduce errors by 90%",
      "Improve collaboration",
      "Scale beyond Excel limitations",
    ],
    processSteps: [
      {
        title: "Review",
        description: "Analyze current Excel/Access usage and identify pain points.",
      },
      {
        title: "Solution Design",
        description: "Design modern solution that addresses limitations and improves workflow.",
      },
      {
        title: "Development",
        description: "Build and test new solution with user feedback.",
      },
      {
        title: "Deployment",
        description: "Roll out solution with comprehensive training and support.",
      },
    ],
    pricing: [
      {
        tier: "Basic",
        price: "Starting at $2,500",
        features: [
          "Template automation",
          "Simple workflows",
          "Basic training",
          "2 weeks support",
        ],
      },
      {
        tier: "Professional",
        price: "Starting at $8,000",
        features: [
          "Custom application",
          "Advanced automation",
          "Database migration",
          "1 month support",
          "Full training",
        ],
        popular: true,
      },
      {
        tier: "Enterprise",
        price: "Custom Quote",
        features: [
          "Enterprise-grade solution",
          "Multi-user system",
          "Integration with other systems",
          "Ongoing support",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I migrate from Excel to a database?",
        answer: "If you're managing large datasets, need multi-user access, or face performance issues, a database migration is recommended.",
      },
      {
        question: "Can you automate my existing Excel workflows?",
        answer: "Yes, we can automate most Excel tasks including data entry, report generation, and data transformation.",
      },
    ],
  },
  {
    id: "sql-server-ssis",
    icon: Server,
    title: "SQL Server & SSIS",
    description: "Expert implementation and management of SQL Server solutions.",
    longDescription: "Complete SQL Server and SSIS services from design to ongoing management. We build robust ETL pipelines, optimize performance, and ensure reliable data integration.",
    features: [
      "ETL development",
      "Package optimization",
      "Server management",
      "Integration services",
      "Performance tuning",
      "Troubleshooting",
    ],
    benefits: [
      "Reliable data pipelines",
      "Automated data workflows",
      "Improved data quality",
      "Reduced manual intervention",
    ],
    processSteps: [
      {
        title: "Requirements",
        description: "Define data integration requirements and business rules.",
      },
      {
        title: "Design",
        description: "Architect ETL pipelines and data flow processes.",
      },
      {
        title: "Development",
        description: "Build and test SSIS packages with error handling.",
      },
      {
        title: "Deployment",
        description: "Deploy and monitor packages with automated scheduling.",
      },
    ],
    pricing: [
      {
        tier: "Basic",
        price: "Starting at $4,000",
        features: [
          "Simple ETL packages",
          "Standard transformations",
          "Basic error handling",
          "2 weeks support",
        ],
      },
      {
        tier: "Professional",
        price: "Starting at $12,000",
        features: [
          "Complex ETL pipelines",
          "Custom transformations",
          "Advanced error handling",
          "1 month support",
          "Documentation",
        ],
        popular: true,
      },
      {
        tier: "Enterprise",
        price: "Custom Quote",
        features: [
          "Large-scale ETL systems",
          "Real-time data integration",
          "24/7 monitoring",
          "Dedicated support",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the difference between SSIS and Azure Data Factory?",
        answer: "SSIS is an on-premise ETL tool, while Azure Data Factory is cloud-based. We help you choose the right solution for your needs.",
      },
      {
        question: "Can you optimize my existing SSIS packages?",
        answer: "Yes, we specialize in optimizing slow or unreliable SSIS packages to improve performance and reliability.",
      },
    ],
  },
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    longDescription: "Build modern, responsive web applications that integrate seamlessly with your data infrastructure. From simple websites to complex web platforms, we deliver quality solutions.",
    features: [
      "Responsive design",
      "Full-stack development",
      "API integration",
      "Performance optimization",
      "Database integration",
      "Security best practices",
    ],
    benefits: [
      "Modern, user-friendly interfaces",
      "Scalable architecture",
      "Fast loading times",
      "Mobile-responsive design",
    ],
    processSteps: [
      {
        title: "Discovery",
        description: "Understand your business goals and technical requirements.",
      },
      {
        title: "Design",
        description: "Create wireframes and design mockups for your approval.",
      },
      {
        title: "Development",
        description: "Build the application using modern frameworks and best practices.",
      },
      {
        title: "Launch",
        description: "Deploy to production with testing and training.",
      },
    ],
    pricing: [
      {
        tier: "Landing Page",
        price: "Starting at $3,000",
        features: [
          "Single page website",
          "Responsive design",
          "Contact form",
          "1 month support",
        ],
      },
      {
        tier: "Business Website",
        price: "Starting at $10,000",
        features: [
          "Multi-page website",
          "Custom design",
          "CMS integration",
          "SEO optimization",
          "3 months support",
        ],
        popular: true,
      },
      {
        tier: "Web Application",
        price: "Custom Quote",
        features: [
          "Custom functionality",
          "Database integration",
          "User authentication",
          "API development",
          "Ongoing support",
        ],
      },
    ],
    faqs: [
      {
        question: "What technologies do you use?",
        answer: "We use modern frameworks like React, TypeScript, Node.js, and SQL Server, choosing the best technology for your specific needs.",
      },
      {
        question: "Do you provide hosting?",
        answer: "We can recommend and set up hosting solutions, or work with your existing infrastructure.",
      },
    ],
  },
];

export const getServiceById = (id: string): ServiceDetail | undefined => {
  return serviceDetails.find((service) => service.id === id);
};
