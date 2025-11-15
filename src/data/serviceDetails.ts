import { Database, Cloud, RefreshCw, TrendingUp, FileSpreadsheet, Server, Globe, Wrench, LucideIcon } from "lucide-react";

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
        price: "Starting at $3,000",
        features: [
          "Up to 100GB data",
          "Single database migration",
          "Row-count and schema validation",
          "Three weeks of post-migration support",
        ],
      },
      {
        tier: "Medium Projects",
        price: "Starting at $10,000",
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
    longDescription: "Convert your data into clean, consistent, usable formats without breaking structure, relationships, or business logic. We handle the messy parts, from outdated files to complex transformations, so the end result works exactly as expected.",
    features: [
      "Format transformation across major file types and databases",
      "Structure cleanup and optimization",
      "Automated validation with row and schema checks",
      "Batch processing for large datasets",
      "Custom field mapping and transformation rules",
      "Error handling and conversion recovery",
    ],
    benefits: [
      "Preserve data relationships and consistency",
      "Reduce manual cleanup and repetitive conversion work",
      "Support for modern and legacy formats",
      "Predictable, reliable outputs you can trust",
    ],
    processSteps: [
      {
        title: "Analysis",
        description: "We review your source and target formats, identify edge cases, and outline conversion requirements so nothing gets missed.",
      },
      {
        title: "Mapping",
        description: "We build clear, detailed mapping rules that define how every field and structure should transform.",
      },
      {
        title: "Conversion",
        description: "We run the automated conversion using proven processes designed to keep the data consistent, organized, and safe.",
      },
      {
        title: "Verification",
        description: "We validate the converted data using row counts, schema checks, and integrity tests to ensure it matches the source.",
      },
      {
        title: "Final Review",
        description: "We handle any adjustments, document the results, and make sure the converted data is ready for use.",
      },
    ],
    pricing: [
      {
        tier: "Basic",
        price: "Starting at $2,000",
        features: [
          "Simple format conversion",
          "Up to 10GB data",
          "Row and field-format validation",
          "One week of support",
        ],
      },
      {
        tier: "Professional",
        price: "Starting at $7,500",
        features: [
          "Complex transformations and multi-step conversions",
          "Up to 150GB data",
          "Advanced validation (row counts, schema checks, integrity checks)",
          "Two weeks of support",
          "Custom mapping rules included",
        ],
        popular: true,
      },
      {
        tier: "Complex Conversions",
        price: "Custom Quote",
        features: [
          "High-volume or multi-system conversions",
          "Unlimited data size",
          "Detailed mapping and transformation requirements",
          "After-hours cutover support",
          "Post-conversion adjustments and reconciliation",
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
    longDescription: "Slow queries, high CPU, and unpredictable performance cost your business time and money. We analyze your workload, identify the real bottlenecks, and apply targeted fixes that improve speed and stability without guesswork.",
    features: [
      "Query plan analysis and optimization",
      "Index design, cleanup, and tuning",
      "Statistics review and update strategy",
      "Wait-time and blocking diagnostics",
      "Resource and workload optimization",
      "Bottleneck identification across CPU, memory, storage, and I/O",
    ],
    benefits: [
      "Faster, more predictable query performance",
      "Lower compute and storage costs",
      "Smooth application performance under load",
      "Better user experience and fewer production issues",
    ],
    processSteps: [
      {
        title: "Audit",
        description: "We run a full performance review, including workload patterns, execution plans, index usage, waits, and resource pressure.",
      },
      {
        title: "Recommendations",
        description: "You get a clear, prioritized list of improvements, explaining the impact and expected performance gains.",
      },
      {
        title: "Implementation",
        description: "We apply optimizations safely and in stages to avoid disruption, validating each change to ensure improvements stick.",
      },
      {
        title: "Monitoring",
        description: "We track performance after changes and adjust as needed to keep the system running smoothly.",
      },
    ],
    pricing: [
      {
        tier: "Quick Tune-Up",
        price: "Starting at $3,000",
        features: [
          "Performance and workload audit",
          "Targeted query and index improvements (up to 5 items)",
          "Clear optimization recommendations",
          "Implementation guide",
          "One-week follow-up for validation",
        ],
      },
      {
        tier: "Comprehensive",
        price: "Starting at $8,000",
        features: [
          "Full workload review across queries, indexes, waits, and storage",
          "Custom indexing and statistics strategy",
          "Applied optimizations with validation",
          "Three months of performance check-ins",
          "Optional training session for your team",
        ],
        popular: true,
      },
      {
        tier: "Enterprise",
        price: "Custom Quote",
        features: [
          "Multi-database optimization",
          "High-traffic workload tuning",
          "After-hours or staged rollout support",
          "Post-optimization monitoring and adjustments",
          "Documentation and performance summary",
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
    title: "Excel & MS Access Modernization",
    description: "Modernize and optimize your Excel and Access applications.",
    longDescription: "Turn scattered spreadsheets and aging MS Access database into clean, stable tools your team can rely on. We streamline workflows, automate repetitive tasks, and build simple systems that scale without falling apart.",
    features: [
      "Custom Excel or Access solution development",
      "Workflow automation and cleanup",
      "Integration with databases or other tools",
      "User-friendly forms and logic",
      "Data migration from legacy files",
      "Process and structure optimization",
    ],
    benefits: [
      "Eliminate repetitive manual work",
      "Reduce errors and broken formulas",
      "Improve team collaboration with shared, structured data",
      "Move beyond Excel limitations as your business grows",
    ],
    processSteps: [
      {
        title: "Review",
        description: "We analyze your current files, formulas, structures, and business workflows to understand where things break and why.",
      },
      {
        title: "Solution Design",
        description: "We design a modernized solution that fixes bottlenecks, removes complexity, and improves how your team works.",
      },
      {
        title: "Development",
        description: "We build and test the new workflow or application, validating it with your team to ensure it fits real usage.",
      },
      {
        title: "Deployment",
        description: "We deploy the solution with clear training, documentation, and support so your team can rely on it immediately.",
      },
    ],
    pricing: [
      {
        tier: "Basic",
        price: "Starting at $2,500",
        features: [
          "Template-driven automation",
          "Simple workflow improvements",
          "Basic training session",
          "Two weeks post-deployment support",
        ],
      },
      {
        tier: "Professional",
        price: "Starting at $8,000",
        features: [
          "Custom Excel or Access application",
          "Advanced workflow automation",
          "Structured data migration",
          "One month of support",
          "Full training for your team",
        ],
        popular: true,
      },
      {
        tier: "Complex Solutions",
        price: "Custom Quote",
        features: [
          "Large multi-user applications",
          "Integration with SQL Server or other systems",
          "After-hours rollout and support",
          "Documentation and long-term maintenance options",
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
    longDescription: "Build clean, reliable web applications that work with your data, support your workflows, and give your users a smooth experience. We focus on practical solutions that are fast, stable, and easy to maintain.",
    features: [
      "Modern responsive UI",
      "Backend and full-stack development",
      "Database-driven functionality",
      "Performance and security best practices",
      "Deployment and environment setup",
    ],
    benefits: [
      "User-friendly interfaces that load fast",
      "Stable architecture built for growth",
      "Clean integrations with your data and systems",
      "Reliable apps that reduce manual work",
    ],
    processSteps: [
      {
        title: "Discovery",
        description: "We clarify goals, workflow requirements, data needs, and what the application must do for your business.",
      },
      {
        title: "Design",
        description: "We outline the structure, build wireframes, and define the user flow so everything is clear before development starts.",
      },
      {
        title: "Development",
        description: "We build the application using modern frameworks, clean backend logic, and database-integrated workflows.",
      },
      {
        title: "Launch",
        description: "We deploy to production, run final checks, and provide training and support so your team can use it confidently.",
      },
    ],
    pricing: [
      {
        tier: "Landing Page",
        price: "Starting at $800",
        features: [
          "Single up to five pages website",
          "Responsive design",
          "Contact form",
          "One month post-launch support",
        ],
      },
      {
        tier: "Business Website",
        price: "Starting at $2,500",
        features: [
          "Multi-page corporate website",
          "Clean custom layout",
          "Basic CMS setup (content updates)",
          "Light SEO structure",
          "Three months support",
        ],
        popular: true,
      },
      {
        tier: "Web Application",
        price: "Custom Quote",
        features: [
          "Custom business logic and workflows",
          "Database-integrated features",
          "API development or integration",
          "User authentication and roles",
          "After-launch support options",
        ],
      },
    ],
    faqs: [
      {
        question: "What technologies do you use?",
        answer: "We use modern frameworks like React, TypeScript, Node.js, and PostGreSQL, MySQL, choosing the best technology for your specific needs.",
      },
      {
        question: "Do you provide hosting?",
        answer: "We can recommend and set up hosting solutions, or work with your existing infrastructure.",
      },
    ],
  },
  {
    id: "database-maintenance",
    icon: Wrench,
    title: "Database Maintenance",
    description: "Database Maintenance That Prevents Problems Instead of Reacting to Them.",
    longDescription: "Your database shouldn’t be a guessing game. We keep your SQL Servers or MS Access healthy, stable, and fast through structured, proactive maintenance that catches issues before they become outages. You get reliability, performance, and peace of mind without hiring a full-time DBA.",
    features: [
      "Scheduled maintenance and health checks",
      "Performance monitoring and tuning",
      "Backup and recovery verification",
      "Index maintenance and optimization",
      "Storage and capacity planning",
      "Proactive issue detection and resolution",
    ],
    benefits: [
      "Reduced downtime",
      "Consistent database performance",
      "Backups you can trust",
      "Fewer incidents and emergencies",
      "Longer hardware and disk lifespan",
      "Lower overall maintenance costs",
      "Better visibility into your environment",
    ],
    processSteps: [
      {
        title: "Initial Assessment",
        description: "We evaluate your current database health, identify potential issues, and establish performance baselines to create a tailored maintenance plan.",
      },
      {
        title: "Maintenance Plan",
        description: "A customized maintenance schedule is created based on your business needs, including routine checks, optimization windows, and backup schedules.",
      },
      {
        title: "Implementation",
        description: "We execute the maintenance plan during your specified maintenance windows, ensuring minimal impact on operations.",
      },
      {
        title: "Monitoring",
        description: "Continuous monitoring tracks database health, performance metrics, and potential issues, with alerts for anything requiring attention.",
      },
      {
        title: "Reporting",
        description: "Regular reports keep you informed about database health, completed maintenance activities, and recommendations for improvements.",
      },
    ],
    pricing: [
      {
        tier: "Basic Maintenance",
        price: "Starting at $800/month",
        features: [
          "Monthly health checks",
          "Backup verification",
          "Basic performance monitoring",
          "Email support",
          "No tuning included",
        ],
      },
      {
        tier: "Standard Maintenance",
        price: "Starting at $1,500-$3,000/month",
        features: [
          "Weekly health checks",
          "Advanced performance monitoring",
          "Index maintenance",
          "Monthly health report",
          "Limited tuning (2 tasks/month)",
          "Priority support",
        ],
        popular: true,
      },
      {
        tier: "Premium Maintenance",
        price: "Starts at $3,500/month",
        features: [
          "Proactive performance optimization",
          "Priority response during business hours",
          "Advanced index and query tuning",
          "Architecture and capacity planning",
          "Custom SLA agreements (business hours only)",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should database maintenance be performed?",
        answer: "It depends on your database size and usage patterns. We typically recommend weekly maintenance for active databases, with daily monitoring. Critical systems may require more frequent attention.",
      },
      {
        question: "Will maintenance cause downtime?",
        answer: "Most maintenance tasks can be performed with minimal or no downtime. We schedule intensive maintenance during your specified maintenance windows to minimize impact.",
      },
      {
        question: "What happens if an issue is discovered?",
        answer: "We immediately notify you and provide recommendations. Depending on your service tier, we can either resolve it on the spot or work with you to schedule the fix during a maintenance window.",
      },
      {
        question: "Can you work with our existing monitoring tools?",
        answer: "Yes, we can integrate with most monitoring systems or provide our own monitoring solution tailored to your needs.",
      },
    ],
  },
];

export const getServiceById = (id: string): ServiceDetail | undefined => {
  // Hide Azure SQL Solutions and SQL Server & SSIS
  if (id === "azure-sql" || id === "sql-server-ssis") {
    return undefined;
  }
  return serviceDetails.find((service) => service.id === id);
};
