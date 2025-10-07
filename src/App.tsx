import Layout from "@/components/layout/Layout";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ScrollToTop from "@/components/ScrollToTop";
import ArticleDetail from "./pages/articles/ArticleDetail";
import SingleRecipe from "./pages/recipes/SingleRecipe.tsx";
import PrivacyPolicy from "@/pages/policies/PrivacyPolicy";
import ShippingPolicy from "@/pages/policies/ShippingPolicy";
import RefundPolicy from "@/pages/policies/RefundPolicy";
import TermsOfService from "@/pages/policies/TermsOfService";
import ProductPage from "@/pages/ProductPage";
import ShopPage from "@/pages/ShopPage";
import { useEffect } from "react";
import { setMetaTags } from "@/utils/seo";

const queryClient = new QueryClient();

const App = () => {
  // 🧠 Global SEO Defaults for DrinkDucky.com
  useEffect(() => {
    setMetaTags({
      title: "Rubber Ducky Drink Co. | Non-Alcoholic Margaritas",
      description:
        "Refreshingly bold non-alcoholic margaritas made for fun without the buzz. Quack open a can of Rubber Ducky Drink Co.",
      canonical: "https://drinkducky.com",
      image: "https://drinkducky.com/og-image.jpg",
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <div className="bg-[url('/main_bg_duck.svg')] bg-no-repeat bg-center bg-[length:100%_auto] min-h-screen">
            <Toaster />
            <Sonner />

            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                {/* Wrap all public pages inside Layout */}
                <Route path="/" element={<Layout />}>
                  <Route index element={<Index />} />
                  <Route path="account" element={<AccountPage />} />
                  <Route path="products/:slug" element={<ProductDetail />} />
                  <Route path="store-locator" element={<StoreLocator />} />
                  <Route path="recipes" element={<Recipes />} />
                  <Route path="recipes/:slug" element={<SingleRecipe />} />
                  <Route path="articles" element={<Articles />} />
                  <Route path="articles/:slug" element={<ArticleDetail />} />
                  <Route path="about" element={<About />} />
                  <Route path="wholesale/apply" element={<WholesaleApplication />} />
                  <Route path="contact" element={<Contact />} />

                  {/* 🛍️ Headless Shopify Routes */}
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/shop/:collectionHandle" element={<ShopPage />} />
                  <Route
                    path="/shop/:collectionHandle/:handle"
                    element={<ProductPage />}
                  />

                  {/* 📜 Policies */}
                  <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="shipping-policy" element={<ShippingPolicy />} />
                  <Route path="refund-policy" element={<RefundPolicy />} />
                  <Route path="terms-of-service" element={<TermsOfService />} />

                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />
                </Route>

                {/* 🔐 Auth page outside Layout */}
                <Route path="/auth" element={<Auth />} />
              </Routes>
            </BrowserRouter>
          </div>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
