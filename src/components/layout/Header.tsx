import { Link } from "react-router-dom";
import { Menu, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="bg-ducky-yellow sticky top-0 z-50 py-2 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo + Mobile Toggle */}
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

        {/* Desktop Nav using NavigationMenu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="text-black font-medium hover:text-ducky-red transition-colors">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a 
                  href="https://duckydrinks.com/products/classic-margarita" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black font-medium hover:text-ducky-red transition-colors"
                >
                  Shop
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/recipes" className="text-black font-medium hover:text-ducky-red transition-colors">
                  Recipes
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/articles" className="text-black font-medium hover:text-ducky-red transition-colors">
                  Articles
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" className="text-black font-medium hover:text-ducky-red transition-colors">
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/store-locator" className="text-black font-medium hover:text-ducky-red transition-colors">
                  Find Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact Us with dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black font-medium hover:text-ducky-red">
                Contact Us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white border shadow-md rounded-md p-2">
                <NavigationMenuLink asChild>
                  <Link to="/contact" className="block px-3 py-2 hover:text-ducky-red">
                    Contact Us
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="https://drinkducky.com/wholesale/apply" className="block px-3 py-2 hover:text-ducky-red">
                    Wholesale
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="https://duckydrinks.com/pages/joy-subscription" className="block px-3 py-2 hover:text-ducky-red">
                    Manage Subscription
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* User Menu */}
        <div className="flex items-center space-x-2">
          {user ? (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <User className="h-5 w-5" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border shadow-md rounded-md p-2">
                    <NavigationMenuLink asChild>
                      <a href="https://account.rubberduckydrinkco.com" target="_blank" rel="noopener noreferrer">
                        Account Settings
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="https://account.rubberduckydrinkco.com" target="_blank" rel="noopener noreferrer">
                        My Orders
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="https://account.rubberduckydrinkco.com" target="_blank" rel="noopener noreferrer">
                        My Reviews
                      </a>
                    </NavigationMenuLink>
                    <button
                      onClick={() => signOut()}
                      className="block w-full text-left text-black hover:text-ducky-red px-3 py-2"
                    >
                      <LogOut className="inline mr-2 h-4 w-4" /> Sign Out
                    </button>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <a href="https://account.rubberduckydrinkco.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </a>
          )}
        </div>
      </div>

      {/* Mobile Menu (collapsible for Contact Us) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ducky-yellow border-t border-black/10 py-4 px-6 z-50 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <a href="https://duckydrinks.com/products/classic-margarita" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Shop</a>
            <Link to="/recipes" onClick={() => setMobileMenuOpen(false)}>Recipes</Link>
            <Link to="/articles" onClick={() => setMobileMenuOpen(false)}>Articles</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link to="/store-locator" onClick={() => setMobileMenuOpen(false)}>Find Us</Link>

            <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex items-center justify-between text-black font-medium hover:text-ducky-red transition-colors">
              Contact Us
            </button>
            {mobileDropdownOpen && (
              <div className="ml-4 flex flex-col space-y-3">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                <Link to="https://drinkducky.com/wholesale/apply" onClick={() => setMobileMenuOpen(false)}>Wholesale</Link>
                <Link to="https://duckydrinks.com/pages/joy-subscription" onClick={() => setMobileMenuOpen(false)}>Manage Subscription</Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
