import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gray-900">PawsitiveAdopt</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#stats" className="text-gray-600 hover:text-primary transition-colors">
              Impact
            </a>
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          <Button className="md:hidden bg-primary hover:bg-primary/90">
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;