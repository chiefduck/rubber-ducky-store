// src/pages/ShopPage.tsx
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getAllProducts, getProductsByCollection } from "@/utils/shopify";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import ShopCategoryNav from "@/components/ShopCategoryNav";
import { setMetaTags, capitalize } from "@/utils/seo";

const ShopPage = () => {
  const { collectionHandle } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = collectionHandle
          ? await getProductsByCollection(collectionHandle)
          : await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [collectionHandle]);

  useEffect(() => {
    const base = "https://drinkducky.com";
    const canonical = `${base}${location.pathname}`;
    const title = collectionHandle
      ? `Shop ${capitalize(collectionHandle)} | Rubber Ducky Drink Co.`
      : "Shop All | Rubber Ducky Drink Co.";
    const description = collectionHandle
      ? `Browse our ${collectionHandle} collection of refreshing non-alcoholic margaritas and fun merch from Rubber Ducky Drink Co.`
      : "Explore all Rubber Ducky Drink Co. products — non-alcoholic margaritas, merch, and more.";
    setMetaTags({
      title,
      description,
      canonical,
      image: `${base}/og-image.jpg`,
    });
  }, [collectionHandle, location]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-40 text-center">
        <Loader2 className="h-8 w-8 animate-spin text-ducky-red mb-3" />
        <p className="text-black/60">Fetching our ducky drinks...</p>
      </div>
    );
  }

  return (
    <div className="bg-white py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-ducky-red mb-3">
          {collectionHandle ? capitalize(collectionHandle) : "Shop All"}
        </h1>
        <p className="text-lg text-black/70">
          {collectionHandle
            ? `Explore our ${collectionHandle} collection.`
            : "Quack open joy — explore everything Rubber Ducky has to offer."}
        </p>
      </div>

      <ShopCategoryNav current={collectionHandle || "all"} />

      {products.length === 0 ? (
        <div className="text-center text-black/60 py-20">
          <p>No products available right now. Please check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((p) => {
            const firstVariant = p.variants?.edges?.[0]?.node;
            const price = firstVariant?.price?.amount
              ? parseFloat(firstVariant.price.amount).toFixed(2)
              : "N/A";
            return (
              <Link
                key={p.id}
                to={`/shop/${collectionHandle || "product"}/${p.handle}`}
                className="group bg-white rounded-3xl shadow hover:shadow-xl transition-all duration-200 overflow-hidden border border-black/5"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.featuredImage?.url}
                    alt={p.title}
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold text-black mb-2 group-hover:text-ducky-red">
                    {p.title}
                  </h2>
                  <p className="text-black/70 mb-4">${price}</p>
                  <Button variant="red" className="w-full">
                    View Product
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
