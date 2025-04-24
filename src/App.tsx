
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import ProductDetail from "./pages/products/[slug]";
import StoreLocator from "./pages/StoreLocator";
import Recipes from "./pages/Recipes";
import Articles from "./pages/Articles";
import About from "./pages/About";
import WholesaleApplication from "./pages/wholesale/Apply";
import NotFound from "./pages/NotFound";
import AccountPage from "./pages/account/Index";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import ScrollToTop from "@/components/ScrollToTop"; // adjust path if needed
import ArticleDetail from "./pages/articles/ArticleDetail";
import SingleRecipe from "./pages/recipes/SingleRecipe.tsx";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
      <div className="bg-[url('/main_bg.jpg')] bg-repeat bg-cover bg-center min-h-screen">
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/store-locator" element={<StoreLocator />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<About />} />
            <Route path="/wholesale/apply" element={<WholesaleApplication />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/recipes/:slug" element={<SingleRecipe />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </div>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
