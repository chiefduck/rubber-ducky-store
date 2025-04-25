import { Link } from "react-router-dom";
import { Menu, Search, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="bg-ducky-yellow sticky top-0 z-50 py-2 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/" className="flex items-center">
            <img src="/images/logo.svg" alt="Rubber Ducky Drink Co." className="h-12 mr-2" />
            <span className="text-black font-bold text-lg hidden sm:block">Rubber Ducky</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-black font-medium hover:text-ducky-red transition-colors">
            Home
          </Link>
          <a 
            href="https://duckydrinks.com/products/classic-margarita" 
            className="text-black font-medium hover:text-ducky-red transition-colors"
            target="_blank" rel="noopener noreferrer"
          >
            Shop
          </a>
          <Link to="/recipes" className="text-black font-medium hover:text-ducky-red transition-colors">
            Recipes
          </Link>
          <Link to="/articles" className="text-black font-medium hover:text-ducky-red transition-colors">
            Articles
          </Link>
          <Link to="/about" className="text-black font-medium hover:text-ducky-red transition-colors">
            About Us
          </Link>
          <Link to="/store-locator" className="text-black font-medium hover:text-ducky-red transition-colors">
            Find Us
          </Link>
          <Link to="/contact" className="text-black font-medium hover:text-ducky-red transition-colors">
            Contact Us
          </Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a 
                    href="https://account.rubberduckydrinkco.com" 
                    className="cursor-pointer w-full" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Account Settings
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://account.rubberduckydrinkco.com" 
                    className="cursor-pointer w-full"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    My Orders
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://account.rubberduckydrinkco.com" 
                    className="cursor-pointer w-full"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    My Reviews
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <a href="https://account.rubberduckydrinkco.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </a>
          )}

          {/* Cart hidden for now */}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ducky-yellow border-t border-black/10 py-4 px-6 z-50 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="https://duckydrinks.com/products/classic-margarita" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </a>
            <Link 
              to="/recipes" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link 
              to="/articles" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Articles
            </Link>
            <Link 
              to="/about" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/store-locator" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Us
            </Link>
            <Link 
              to="/contact" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {user ? (
              <>
                <a 
                  href="https://account.rubberduckydrinkco.com" 
                  className="text-black font-medium hover:text-ducky-red transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Account
                </a>
                <button 
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-black font-medium hover:text-ducky-red transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <a 
                href="https://account.rubberduckydrinkco.com"
                className="text-black font-medium hover:text-ducky-red transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
