import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#home", isRoute: false },
    { name: "Company", path: "#about", isRoute: false },
    { name: "Services", path: "/services", isRoute: true },
    { name: "Work", path: "#portfolio", isRoute: false },
    { name: "Blog", path: "#blog", isRoute: false },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, isRoute: boolean) => {
    if (isRoute) {
      // Let React Router handle route navigation
      setIsMobileMenuOpen(false);
      return;
    }
    
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate to home with hash
    if (location.pathname !== '/') {
      navigate('/' + path);
      return;
    }
    
    // If on home page, smooth scroll to section
    if (path === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(path);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="NexServ Consulting" className="h-12 w-auto max-w-md logo-adaptive" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => 
              link.isRoute ? (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base md:text-[0.844rem] lg:text-xl font-medium transition-colors hover:text-primary text-foreground/90"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path, link.isRoute)}
                  className="text-base md:text-[0.844rem] lg:text-xl font-medium transition-colors hover:text-primary text-foreground/90"
                >
                  {link.name}
                </a>
              )
            )}
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact", false)}>
              <Button>Contact</Button>
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-background/90 backdrop-blur-md rounded-lg -mx-4">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => 
                link.isRoute ? (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-medium transition-colors hover:text-primary text-foreground/90"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path, link.isRoute)}
                    className="text-xl font-medium transition-colors hover:text-primary text-foreground/90"
                  >
                    {link.name}
                  </a>
                )
              )}
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact", false)}>
                <Button className="w-full">Contact</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
