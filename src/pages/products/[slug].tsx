
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductReviews } from "@/components/products/ProductReviews";
import { NutritionFacts } from "@/components/products/NutritionFacts";
import { getProductBySlug } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // In a real-world app, you would handle the case where the product is not found
  const product = getProductBySlug(slug || "") || {
    id: "0",
    name: "Product Not Found",
    slug: "",
    price: 0,
    description: "",
    shortDescription: "",
    image: "",
    gallery: [],
    ingredients: "",
    nutrition: {
      servingSize: "",
      calories: 0,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 0,
      totalCarbs: 0,
      dietaryFiber: 0,
      sugars: 0,
      protein: 0
    },
    featured: false,
    category: ""
  };
  
  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => q > 1 ? q - 1 : 1);
  
  return (
    <div className="min-h-screen bg-ducky-cream">
      <Header />
      
      <main className="container mx-auto py-8 px-4 md:px-8">
        <div className="mb-4">
          <nav className="text-sm text-black/60">
            <ol className="flex flex-wrap">
              <li className="after:content-['/'] after:mx-2">
                <a href="/" className="hover:text-ducky-red">Home</a>
              </li>
              <li className="after:content-['/'] after:mx-2">
                <a href="/products" className="hover:text-ducky-red">Products</a>
              </li>
              <li className="after:content-['/'] after:mx-2">
                <a href="/products" className="hover:text-ducky-red">{product.category}</a>
              </li>
              <li>
                <span className="text-black/80">{product.name}</span>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ProductGallery images={product.gallery} productName={product.name} />
          
          <div className="bg-ducky-yellow p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-2 text-black">{product.name}</h1>
            <p className="text-black/60 mb-1">NON-ALCOHOLIC</p>
            
            <div className="flex items-center mb-6">
              <div className="text-xl font-bold text-black mr-2">${product.price.toFixed(2)}</div>
              <div className="text-black/60 text-sm">12 fl oz (355ml)</div>
            </div>
            
            <div className="mb-6">
              <p className="text-black/80 mb-4">{product.description}</p>
            </div>
            
            <div className="mb-8">
              <label className="font-medium text-black mb-2 block">Quantity</label>
              <div className="flex items-center w-32 mb-6">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={decrementQuantity}
                  className="rounded-l-md rounded-r-none border-ducky-red h-10"
                >
                  <Minus className="h-4 w-4 text-ducky-red" />
                </Button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="h-10 px-0 text-center border-y border-ducky-red bg-white w-full focus:outline-none"
                  min="1"
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={incrementQuantity}
                  className="rounded-r-md rounded-l-none border-ducky-red h-10"
                >
                  <Plus className="h-4 w-4 text-ducky-red" />
                </Button>
              </div>
              
              <Button variant="red" size="lg" className="w-full mb-2">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              <Button variant="outline" size="lg" className="w-full border-ducky-red text-ducky-red hover:bg-ducky-red/10">
                Buy Now
              </Button>
            </div>
            
            <div className="border-t border-black/10 pt-6">
              <div className="mb-4">
                <h3 className="font-bold text-black mb-2">Ingredients</h3>
                <p className="text-sm text-black/70">{product.ingredients}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-black">Nutrition Facts</h2>
            <p className="text-black/70 mb-6">
              Our beverages are crafted to deliver maximum flavor with minimal calories. 
              We use high-quality ingredients and natural sweeteners to create a refreshing 
              experience you can feel good about.
            </p>
          </div>
          
          <div>
            <NutritionFacts product={product} />
          </div>
        </div>
        
        <ProductReviews productId={product.id} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
