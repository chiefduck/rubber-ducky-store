import { NavLink, Link } from "react-router-dom";
import { Menu, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react"; // make sure this is imported


export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const { user, signOut } = useAuth();

  // Active link helper
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors ${
      isActive ? "text-ducky-red" : "text-black hover:text-ducky-red"
    }`;

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

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/" className={navClass}>Home</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
  <NavigationMenuLink asChild>
    <NavLink to="/shop" className={navClass}>Shop</NavLink>
  </NavigationMenuLink>
</NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/recipes" className={navClass}>Recipes</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/articles" className={navClass}>Articles</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/about" className={navClass}>About Us</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/store-locator" className={navClass}>Find Us</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

{/* Contact Us dropdown (using DropdownMenu for proper positioning) */}
<NavigationMenuItem>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button className="flex items-center text-black font-medium hover:text-ducky-red">
        Contact Us
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      side="bottom"
      align="start"
      className="bg-white border border-black/10 shadow-lg rounded-md w-56"
    >
      <DropdownMenuItem asChild>
        <NavLink 
          to="/contact" 
          className={({ isActive }) =>
            `block w-full px-4 py-2 rounded-t-md transition-colors ${
              isActive ? "bg-ducky-red text-white" : "text-black hover:bg-ducky-red hover:text-white"
            }`
          }
        >
          Contact Us
        </NavLink>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <a 
          href="https://drinkducky.com/wholesale/apply" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full px-4 py-2 text-black hover:bg-ducky-red hover:text-white"
        >
          Wholesale
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <a 
          href="https://duckydrinks.com/pages/joy-subscription" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full px-4 py-2 rounded-b-md text-black hover:bg-ducky-red hover:text-white"
        >
          Manage Subscription
        </a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* User Menu */}
        <div className="flex items-center space-x-2">
          {user ? (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="bottom"
                      align="end"
                      className="bg-white border border-black/10 shadow-lg rounded-md w-56"
                    >
                      <DropdownMenuItem asChild>
                        <a 
                          href="https://account.rubberduckydrinkco.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-2 text-black hover:bg-ducky-red hover:text-white"
                        >
                          Account Settings
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a 
                          href="https://account.rubberduckydrinkco.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-2 text-black hover:bg-ducky-red hover:text-white"
                        >
                          My Orders
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a 
                          href="https://account.rubberduckydrinkco.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-2 text-black hover:bg-ducky-red hover:text-white"
                        >
                          My Reviews
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <button
                          onClick={() => signOut()}
                          className="block w-full text-left px-4 py-2 text-black hover:bg-ducky-red hover:text-white"
                        >
                          <LogOut className="inline mr-2 h-4 w-4" /> Sign Out
                        </button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ducky-yellow border-t border-black/10 py-4 px-6 z-50 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={navClass}>Home</NavLink>
            <a href="https://duckydrinks.com/products/classic-margarita" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Shop</a>
            <NavLink to="/recipes" onClick={() => setMobileMenuOpen(false)} className={navClass}>Recipes</NavLink>
            <NavLink to="/articles" onClick={() => setMobileMenuOpen(false)} className={navClass}>Articles</NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={navClass}>About Us</NavLink>
            <NavLink to="/store-locator" onClick={() => setMobileMenuOpen(false)} className={navClass}>Find Us</NavLink>

            {/* Collapsible Contact Us */}
            <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex items-center justify-between text-black font-medium hover:text-ducky-red transition-colors">
              Contact Us
            </button>
            {mobileDropdownOpen && (
              <div className="ml-4 flex flex-col space-y-3">
                <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={navClass}>Contact Us</NavLink>
                <a href="https://drinkducky.com/wholesale/apply" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-ducky-red">Wholesale</a>
                <a href="https://drinkducky.com/manage-subscription" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-ducky-red">Manage Subscription</a>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
