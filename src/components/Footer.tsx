import { Facebook, Instagram, Twitter, Copyright } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">PawsitiveAdopt</h3>
            <p className="text-gray-600">Making pet adoption simple and joyful.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-primary">Features</a></li>
              <li><a href="#stats" className="text-gray-600 hover:text-primary">Impact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">About Us</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">support@pawsitive.com</li>
              <li className="text-gray-600">1-800-PAWSITIVE</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Newsletter</h4>
            <p className="text-gray-600">Stay updated with our latest news</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-full border border-gray-300 flex-grow"
              />
              <Button className="bg-primary hover:bg-primary/90 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Copyright className="h-4 w-4" />
              <span>2024 PawsitiveAdopt. All rights reserved.</span>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;