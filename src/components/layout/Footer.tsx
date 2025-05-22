
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SuggestLocationFooterLink from "@/components/buttons/SuggestLocationFooterLink";


export const Footer = () => {
  return (
    <footer
    className="relative py-10 px-4 md:px-8"
    style={{
      backgroundColor: "rgba(253, 242, 33, 0.92)", // rich yellow overlay
      backgroundImage: "url('/main_bg_duck.svg')",
      backgroundRepeat: "repeat",
      backgroundSize: "1500px auto",
      backgroundBlendMode: "multiply",
    }}
  >
  
  

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-4">
              <img src="/images/logo.svg" alt="Rubber Ducky Drink Co." className="h-16" />
            </Link>
            <p className="text-sm text-black/70 mb-4 text-center md:text-left">
              Bringing joy to non-alcoholic beverages one duck at a time!
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-ducky-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-ducky-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-ducky-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-ducky-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-black mb-4 text-center md:text-left">Navigation</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link to="/" className="text-black/70 hover:text-ducky-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-black/70 hover:text-ducky-red transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-black/70 hover:text-ducky-red transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-black/70 hover:text-ducky-red transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-black/70 hover:text-ducky-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/store-locator" className="text-black/70 hover:text-ducky-red transition-colors">
                  Find Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-black mb-4 text-center md:text-left">Customer Service</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link to="/contact" className="text-black/70 hover:text-ducky-red transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-black/70 hover:text-ducky-red transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-black/70 hover:text-ducky-red transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-black/70 hover:text-ducky-red transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-black/70 hover:text-ducky-red transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/wholesale/apply" className="text-black/70 hover:text-ducky-red transition-colors">
                  Wholesale
                </Link>
              </li>
             
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-black mb-4 text-center md:text-left">Join our newsletter</h3>
            <p className="text-sm text-black/70 mb-4 text-center md:text-left">
              Subscribe to receive updates, special offers, and ducky news!
            </p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder="Enter your email" className="border-ducky-red focus:ring-ducky-red" />
              <Button variant="red" className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-black/10 text-center text-sm text-black/70">
          <p>© {new Date().getFullYear()} Rubber Ducky Drink Co. All rights reserved.</p>
          <p className="mt-1">Made with 💛 for non-alcoholic joy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
