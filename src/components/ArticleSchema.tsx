import { Helmet } from "react-helmet-async";

interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  image: string;
  category: string;
  url: string;
}

const ArticleSchema = ({ 
  title, 
  description, 
  author, 
  publishedDate, 
  modifiedDate,
  image, 
  category,
  url 
}: ArticleSchemaProps) => {
  const siteUrl = window.location.origin;
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `${siteUrl}${image}`,
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://www.linkedin.com/in/rexdev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NexServ Consulting",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}${url}`
    },
    "articleSection": category,
    "keywords": `${category}, data migration, database optimization, SQL Server, Azure SQL`
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
    </Helmet>
  );
};

export default ArticleSchema;
