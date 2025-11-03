import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 animate-fade-in">
      <Button
        onClick={scrollToContact}
        size="lg"
        className="h-auto px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
        title="Call Us"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="font-semibold">CALL US</span>
      </Button>
      <Button
        onClick={scrollToTop}
        size="lg"
        variant="outline"
        className="h-auto px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-card/80 backdrop-blur-sm flex items-center gap-2"
        title="Back to Top"
      >
        <ArrowUp className="h-5 w-5" />
        <span className="font-semibold">BACK TO TOP</span>
      </Button>
    </div>
  );
};

export default FloatingActions;
