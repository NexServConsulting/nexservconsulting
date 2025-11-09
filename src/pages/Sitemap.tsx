import { useEffect } from "react";
import { generateSitemap } from "@/utils/generateSitemap";

const Sitemap = () => {
  useEffect(() => {
    const sitemapXml = generateSitemap(window.location.origin);
    
    // Create a blob with XML content
    const blob = new Blob([sitemapXml], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    
    // Trigger download or display
    const link = document.createElement("a");
    link.href = url;
    link.download = "sitemap.xml";
    
    // Replace current page content with XML
    document.open();
    document.write(`<pre>${sitemapXml.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`);
    document.close();
    
    // Clean up
    return () => URL.revokeObjectURL(url);
  }, []);

  return null;
};

export default Sitemap;
