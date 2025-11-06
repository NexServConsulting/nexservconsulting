import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 animate-fade-in">
      <Button
        onClick={scrollToContact}
        size="lg"
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-0"
        title="Call Us"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <Button
        onClick={toggleTheme}
        size="lg"
        variant="secondary"
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-0"
        title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </Button>
      <Button
        onClick={scrollToTop}
        size="lg"
        variant="outline"
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-card/80 backdrop-blur-sm p-0"
        title="Back to Top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingActions;
