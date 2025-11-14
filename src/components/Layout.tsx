import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StructuredData from "./StructuredData";
import ScrollProgress from "./ScrollProgress";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <StructuredData />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
