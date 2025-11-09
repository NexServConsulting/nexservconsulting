import { Helmet } from "react-helmet-async";

interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
}

interface ServiceSchema {
  "@context": string;
  "@type": string;
  serviceType: string;
  provider: {
    "@type": string;
    name: string;
  };
  areaServed: string;
  description: string;
}

const StructuredData = () => {
  const siteUrl = window.location.origin;

  const organizationSchema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NexServ Consulting",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "Expert data migration, database optimization, and Azure SQL solutions provider",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "Customer Service",
      email: "info@nexservconsulting.com",
    },
    sameAs: [],
  };

  const serviceSchema: ServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Data Migration and Database Optimization Services",
    provider: {
      "@type": "Organization",
      name: "NexServ Consulting",
    },
    areaServed: "Worldwide",
    description: "Expert data migration, database optimization, Azure SQL solutions, SQL Server management, SSIS development, and MS Access modernization services for enterprise businesses",
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
