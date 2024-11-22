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
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <nav
        className={`w-full transition-all duration-300 rounded-full ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-white/50 backdrop-blur-sm"
        }`}
      >
        <div className="px-6 py-3">
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
              <Button className="bg-primary hover:bg-primary/90 rounded-full">
                Get Started
              </Button>
            </div>

            <Button className="md:hidden bg-primary hover:bg-primary/90 rounded-full">
              Menu
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;