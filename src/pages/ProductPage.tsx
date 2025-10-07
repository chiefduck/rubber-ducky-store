// src/pages/ProductPage.tsx
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getProductByHandle, createCheckout } from "@/utils/shopify";
import { setMetaTags } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const ProductPage = () => {
  const { handle } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductByHandle(handle!);
        setProduct(data);
      } catch (err) {
        console.error("Error loading product:", err);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [handle]);

  useEffect(() => {
    if (product) {
      const base = "https://drinkducky.com";
      const canonical = `${base}${location.pathname}`;

      setMetaTags({
        title: `${product.title} | Rubber Ducky Drink Co.`,
        description: product.description?.slice(0, 155),
        canonical,
        image: product.featuredImage?.url,
        type: "product",
      });

      // JSON-LD Structured Data
      const ld = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.title,
        image: [product.featuredImage?.url],
        description: product.description,
        brand: { "@type": "Brand", name: "Rubber Ducky Drink Co." },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: product.variants?.edges?.[0]?.node?.price?.amount,
          availability: "https://schema.org/InStock",
          url: canonical,
        },
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(ld);
      document.head.appendChild(script);
      return () => document.head.removeChild(script);
    }
  }, [product, location]);

  const handleBuyNow = async () => {
    if (!product) return;
    const variantId = product.variants?.edges?.[0]?.node?.id;
    if (!variantId) return;
    try {
      const checkoutUrl = await createCheckout(variantId);
      window.location.href = checkoutUrl;
    } catch (err) {
      console.error("Error creating checkout:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-40 text-center">
        <Loader2 className="h-8 w-8 animate-spin text-ducky-red mb-3" />
        <p className="text-black/60">Loading product details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col items-center justify-center py-40 text-center">
        <p className="text-2xl font-semibold text-ducky-red mb-2">404</p>
        <p className="text-black/70">{error || "Product not found"}</p>
      </div>
    );
  }

  const price = product.variants?.edges?.[0]?.node?.price?.amount
    ? parseFloat(product.variants.edges[0].node.price.amount).toFixed(2)
    : "N/A";

  return (
    <div className="bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="overflow-hidden rounded-3xl shadow-md">
          <img
            src={product.featuredImage?.url}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ducky-red mb-4">
            {product.title}
          </h1>
          <p
            className="text-black/70 mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
          <p className="text-3xl font-semibold text-black mb-8">${price}</p>
          <Button
            variant="red"
            size="lg"
            onClick={handleBuyNow}
            className="w-full md:w-auto"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
